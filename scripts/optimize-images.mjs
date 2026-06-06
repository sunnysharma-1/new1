import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const imagesDir = path.join(process.cwd(), 'public', 'images')
const minSizeBytes = 0
const maxWidth = 1600

const files = await fs.readdir(imagesDir)
let saved = 0

for (const file of files) {
  if (!/\.(jpe?g|png)$/i.test(file)) continue

  const inputPath = path.join(imagesDir, file)
  const stat = await fs.stat(inputPath)
  if (stat.size < minSizeBytes) continue

  const base = file.replace(/\.(jpe?g|png)$/i, '')
  const outputPath = path.join(imagesDir, `${base}.webp`)

  await sharp(inputPath)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: 78, effort: 4 })
    .toFile(outputPath)

  const outStat = await fs.stat(outputPath)
  saved += stat.size - outStat.size
  console.log(`${file}: ${(stat.size / 1024 / 1024).toFixed(2)}MB -> ${(outStat.size / 1024).toFixed(0)}KB`)
}

console.log(`Total saved: ${(saved / 1024 / 1024).toFixed(2)}MB`)
