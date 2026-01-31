'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import { Menu, X, Shield, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollToPlugin)

interface HeaderProps {
  theme?: 'light' | 'dark'
}

export default function Header({ theme = 'dark' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isTop, setIsTop] = useState(true)
  const lastScrollY = useRef(0)
  const menuRef = useRef(null)
  const pathname = usePathname()
  const isHome = pathname === '/'

  // Smart Scroll Logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Determine direction and visibility
      if (currentScrollY > 100) {
        setIsVisible(currentScrollY < lastScrollY.current)
        setIsTop(false)
      } else {
        setIsVisible(true)
        setIsTop(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mobile Menu Animation
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
      gsap.to(menuRef.current, { x: '0%', duration: 0.5, ease: 'power3.out', display: 'flex' })
      gsap.fromTo('.mobile-link',
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.2 }
      )
    } else {
      document.body.style.overflow = 'unset'
      gsap.to(menuRef.current, {
        x: '100%',
        duration: 0.4,
        ease: 'power3.in',
        onComplete: () => { gsap.set(menuRef.current, { display: 'none' }) }
      })
    }
  }, [isMenuOpen])

  const handleNavClick = (target: string) => {
    setIsMenuOpen(false)
    if (target.startsWith('/')) return

    if (isHome) {
      const element = document.getElementById(target.replace('#', ''))
      if (element) {
        gsap.to(window, {
          scrollTo: { y: element, offsetY: 0 }, // No offset needed as header hides or is transparent
          duration: 1.2,
          ease: 'power3.inOut',
        })
      }
    }
  }

  const navItems = [
    { label: 'Services', href: '/services' },
    { label: 'Why Axis', href: '/#features' },
    { label: 'About', href: '/#about' }, // Assuming about section exists or will exist
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 transform
          ${isVisible ? 'translate-y-0' : '-translate-y-full'}
          ${isTop ? 'bg-transparent py-6' : 'bg-white/80 backdrop-blur-md shadow-sm py-4'}
        `}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">

          {/* Minimalist Logo */}
          <Link href="/" onClick={() => handleNavClick('hero')} className="group flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isTop ? (theme === 'light' ? 'bg-blue-600 text-white' : 'bg-white text-slate-900') : 'bg-blue-600 text-white'}`}>
              <Shield className="w-4 h-4" />
            </div>
            <span className={`font-bold tracking-tight text-xl transition-colors duration-300 ${isTop ? (theme === 'light' ? 'text-slate-900' : 'text-white') : 'text-slate-900'}`}>
              RANGERSS
            </span>
          </Link>

          {/* Center Nav - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 group ${isTop ? (theme === 'light' ? 'text-slate-600 hover:text-blue-600' : 'text-white/90 hover:text-white') : 'text-slate-600 hover:text-blue-600'}`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full group-hover:left-0 ${isTop ? (theme === 'light' ? 'bg-blue-600' : 'bg-white') : 'bg-blue-600'}`} />
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hidden md:block">
              <button className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${isTop ? (theme === 'light' ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-white text-slate-900 hover:bg-slate-200') : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                Get Quote <ArrowRight className="w-4 h-4" />
              </button>
            </Link>

            {/* Mobile Burger */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className={`md:hidden p-2 ${isTop ? (theme === 'light' ? 'text-slate-900' : 'text-white') : 'text-slate-900'}`}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </header>

      {/* Side Drawer Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed inset-y-0 right-0 w-full md:w-[480px] bg-slate-950/95 backdrop-blur-3xl z-[60] hidden flex-col shadow-2xl"
      >
        <div className="p-8 flex justify-end">
          <button onClick={() => setIsMenuOpen(false)} className="p-2 text-white/50 hover:text-white transition-colors">
            <X className="w-8 h-8" />
          </button>
        </div>

        <nav className="flex-1 flex flex-col justify-center px-12 gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              className="mobile-link text-3xl font-light text-white hover:text-blue-400 transition-colors flex items-center gap-4 group"
            >
              <span className="w-12 h-[1px] bg-white/20 group-hover:bg-blue-400 transition-colors" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-12 border-t border-white/10">
          <Link href="/contact" onClick={() => handleNavClick('/contact')}>
            <button className="w-full py-4 bg-blue-600 text-white font-bold text-lg rounded-xl hover:bg-blue-500 transition-colors">
              Start Your Project
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
