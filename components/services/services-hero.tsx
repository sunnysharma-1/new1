'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function ServicesHero() {
    const containerRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.hero-text', {
                y: 60,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: 'power3.out',
                delay: 0.2
            })

            gsap.to('.hero-bg', {
                scale: 1.1,
                duration: 20,
                ease: 'none',
                repeat: -1,
                yoyo: true
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
            <div className="absolute inset-0 z-0 hero-bg">
                <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&h=1080&fit=crop&q=80"
                    alt="Security Background"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h1 className="hero-text text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                    Excellence in <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                        Every Detail
                    </span>
                </h1>
                <p className="hero-text text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
                    From executive protection to large-scale event security, our specialized teams are trained to handle any challenge with precision and professionalism.
                </p>
            </div>
        </section>
    )
}
