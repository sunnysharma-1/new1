'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import { Menu, X, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

gsap.registerPlugin(ScrollToPlugin)

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    // Animate header on mount
    gsap.from('.header', {
      opacity: 0,
      y: -50,
      duration: 0.6,
      ease: 'power2.out',
    })
  }, [])

  const handleNavClick = (target: string) => {
    setIsOpen(false)

    // If it's a page route (starts with /), let Next.js Link handle it
    if (target.startsWith('/')) {
      return
    }

    // If it's an anchor link (#) and we are on home
    if (isHome) {
      const element = document.getElementById(target.replace('#', ''))
      if (element) {
        gsap.to(window, {
          scrollTo: { y: element, offsetY: 80 },
          duration: 1,
          ease: 'power2.inOut',
        })
      }
    } else {
      // We are on another page, let Link handle routing to /#anchor (default behavior)
      // No GSAP here as page reload/nav will happen
    }
  }

  const navItems = [
    { label: 'Services', href: '/services' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'Why Us', href: '/#why-us' },
    { label: 'Contact', href: '/#contact' },
  ]

  return (
    <header className="header fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-primary/10 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavClick('hero')}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-primary">Axis</span>
              <span className="text-xs text-secondary font-semibold">Security</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/#contact">
              <Button
                className="bg-primary hover:bg-secondary text-white rounded-lg px-6 py-2"
                onClick={() => handleNavClick('#contact')}
              >
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 space-y-3 pb-4 border-t border-border pt-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/#contact" className="block w-full">
              <Button
                className="w-full bg-primary hover:bg-secondary text-white rounded-lg"
                onClick={() => handleNavClick('#contact')}
              >
                Get Quote
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
