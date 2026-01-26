'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function ClientLogos() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const scroller = containerRef.current
        if (!scroller) return

        const scrollerContent = scroller.querySelector('.scroller-inner')
        if (!scrollerContent) return

        // Clone content for infinite loop if needed
        const scrollerContentArray = Array.from(scrollerContent.children)
        scrollerContentArray.forEach(item => {
            const duplicatedItem = item.cloneNode(true) as HTMLElement
            duplicatedItem.setAttribute('aria-hidden', 'true')
            scrollerContent.appendChild(duplicatedItem)
        })

    }, [])

    const logos = [
        { name: 'TechCorp', icon: 'https://img.logoipsum.com/286.svg' },
        { name: 'CityGov', icon: 'https://img.logoipsum.com/223.svg' },
        { name: 'HealthPlus', icon: 'https://img.logoipsum.com/262.svg' },
        { name: 'EduSystem', icon: 'https://img.logoipsum.com/284.svg' },
        { name: 'LogisticsCo', icon: 'https://img.logoipsum.com/255.svg' },
        { name: 'BuildGrp', icon: 'https://img.logoipsum.com/280.svg' },
        { name: 'SecureNet', icon: 'https://img.logoipsum.com/217.svg' },
    ]

    return (
        <section className="py-12 bg-white border-b border-slate-100 overflow-hidden relative">
            <div className="container mx-auto px-4 mb-8 text-center">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Trusted by Industry Leaders</p>
            </div>

            <div
                ref={containerRef}
                className="scroller relative max-w-7xl mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
            >
                <div className="scroller-inner flex items-center gap-12 w-max animate-scroll">
                    {logos.map((logo, i) => (
                        <div key={i} className="group relative w-32 h-16 flex items-center justify-center transition-all duration-300">
                            <img
                                src={logo.icon}
                                alt={logo.name}
                                className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }
                @keyframes scroll {
                    to {
                        transform: translate(calc(-50% - 1.5rem));
                    }
                }
            `}</style>
        </section>
    )
}
