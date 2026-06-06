param(
    [switch]$Build
)

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$OutDir = Join-Path $Root "out"
$ConfigPath = Join-Path $Root "deploy.config.json"

if ($Build) {
    Write-Host "Building project..." -ForegroundColor Cyan
    Push-Location $Root
    npm.cmd run build
    if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
    Pop-Location
}

if (-not (Test-Path $OutDir)) {
    Write-Error "Missing 'out' folder. Run: npm run build"
}

if (-not (Test-Path $ConfigPath)) {
    Write-Error "Missing deploy.config.json. Copy deploy.config.example.json and fill in your server details."
}

$config = Get-Content $ConfigPath | ConvertFrom-Json
$hostName = $config.host
$user = $config.user
$port = if ($config.port) { $config.port } else { 22 }
$remotePath = $config.remotePath
$identityFile = $config.identityFile

$sshTarget = "${user}@${hostName}"
$scpArgs = @("-P", "$port", "-r", (Join-Path $OutDir "*"), "${sshTarget}:${remotePath}/")

if ($identityFile -and (Test-Path $identityFile)) {
    $scpArgs = @("-i", $identityFile) + $scpArgs
}

Write-Host "Uploading out/ to ${sshTarget}:${remotePath} ..." -ForegroundColor Cyan

# Ensure remote directory exists
$sshArgs = @("-p", "$port", $sshTarget, "mkdir -p `"$remotePath`"")
if ($identityFile -and (Test-Path $identityFile)) {
    $sshArgs = @("-i", $identityFile) + $sshArgs
}
ssh @sshArgs

scp @scpArgs
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "Deploy complete." -ForegroundColor Green
Write-Host "Site files are in: $remotePath" -ForegroundColor Green
