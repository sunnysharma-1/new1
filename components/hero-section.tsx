'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const containerRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: 1,
        }
      })

      // Animate Heading (Zoom in and fade out)
      tl.to(textRef.current, {
        scale: 2,
        opacity: 0,
        z: 500,
        ease: 'power1.inOut'
      }, 0)

      // Animate Layer 3 (Closest/Fastest)
      tl.to('.zoom-layer-3', {
        opacity: 0,
        z: 800,
        scale: 1.5,
        ease: 'power1.inOut',
        stagger: 0.1
      }, 0)

      // Animate Layer 2 (Mid)
      tl.to('.zoom-layer-2', {
        opacity: 1,
        z: 500,
        scale: 1.2,
        ease: 'power1.inOut',
        stagger: 0.1
      }, 0)

      // Animate Layer 1 (Furthest)
      tl.to('.zoom-layer-1', {
        opacity: 1,
        z: 300,
        ease: 'power1.inOut',
        stagger: 0.1
      }, 0)

    }, containerRef)

    return () => ctx.revert()
  }, [])

  const images = [
    // Layer 3 (Foreground - Starts vague, flies past)
    { url: '/images/apex-hero-group.jpg', layer: 3, classes: 'top-[15%] left-[10%] w-[15vw] opacity-80' },
    { url: '/images/apex-salute-row.jpg', layer: 3, classes: 'bottom-[20%] right-[10%] w-[18vw] opacity-80' },
    { url: '/images/apex-team-1.jpg', layer: 3, classes: 'top-[40%] right-[25%] w-[12vw] opacity-60' },

    // Layer 2 (Mid - The focus group)
    { url: '/images/apex-team-2.jpg', layer: 2, classes: 'top-[10%] right-[15%] w-[14vw] opacity-40' },
    { url: '/images/apex-team-3.jpg', layer: 2, classes: 'bottom-[15%] left-[20%] w-[16vw] opacity-40' },
    { url: '/images/apex-flag-hoist.jpg', layer: 2, classes: 'top-[30%] left-[5%] w-[10vw] opacity-40' },

    // Layer 1 (Background - Deep depth)
    { url: '/images/apex-flag-ceremony-large.jpg', layer: 1, classes: 'top-[60%] right-[5%] w-[12vw] opacity-20' },
    { url: '/images/apex-building-lineup.jpg', layer: 1, classes: 'top-[5%] left-[35%] w-[14vw] opacity-20' },
  ]

  return (
    <section ref={containerRef} className="h-screen w-full relative overflow-hidden bg-slate-950 perspective-[1000px]">

      {/* Grid Overlay for Tech feel */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-20 pointer-events-none" />

      {/* Heading Centered in 3D Space */}
      <div
        ref={textRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-center w-full px-4"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800 text-blue-400 text-sm font-semibold mb-6 backdrop-blur-md">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="tracking-wide uppercase">Discipline. Protection. Excellence.</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif text-white tracking-tighter leading-none whitespace-nowrap mb-8 mix-blend-overlay">
          Axis <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">Security & Surveillance</span>
        </h1>

        <div className="flex justify-center gap-4 mt-8 pointer-events-auto">
          <Link href="/services">
            <button className="px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-colors flex items-center gap-2">
              Our Services <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
          <Link href="/#contact">
            <button className="px-8 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-colors">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* Scattered Images */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute rounded-xl overflow-hidden shadow-2xl zoom-layer-${img.layer} ${img.classes} will-change-transform`}
        >
          <img
            src={img.url}
            alt="Security Detail"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-blue-900/10" />
        </div>
      ))}

    </section>
  )
}
