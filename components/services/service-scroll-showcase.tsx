'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import Link from 'next/link'
import { ArrowRight, ShieldCheck, ArrowDown } from 'lucide-react'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function ServiceScrollShowcase() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const slides = document.querySelectorAll('.service-slide') as NodeListOf<HTMLElement>
            const intro = document.querySelector('.service-intro')

            if (!intro) return

            // 1. Intro Animation
            const introTl = gsap.timeline({
                scrollTrigger: {
                    trigger: intro,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1
                }
            })
            introTl.to('.intro-title', { x: 200, opacity: 0, duration: 2 })
            introTl.to('.intro-desc', { y: 100, opacity: 0, duration: 2 }, 0)
            introTl.to('.intro-img-1', { y: -100, opacity: 0, duration: 2 }, 0)
            introTl.to('.intro-img-2', { y: -150, opacity: 0, duration: 2 }, 0)

            // 2. Slides Animation
            slides.forEach((slide, i) => {
                // Content Entrance
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: slide,
                        start: 'top 60%',
                        toggleActions: 'play none none reverse'
                    }
                })

                tl.from(slide.querySelectorAll('.slide-content-item'), {
                    y: 100,
                    opacity: 0,
                    ease: 'power4.out',
                    duration: 1.5,
                    stagger: 0.1
                })

                // Line Animation
                const line = slide.querySelector('.slide-scroll-line')
                if (line) {
                    gsap.fromTo(line,
                        { scaleY: 0 },
                        {
                            scaleY: 1,
                            transformOrigin: 'top center',
                            duration: 1.5,
                            scrollTrigger: {
                                trigger: slide,
                                start: 'top 50%',
                                end: 'bottom 50%',
                                scrub: true
                            }
                        }
                    )
                }

                // Parallax Image
                const imgWrap = slide.querySelector('.slide-img-wrap')
                if (imgWrap) {
                    gsap.fromTo(imgWrap,
                        { y: '-20%' },
                        {
                            y: '20%',
                            ease: 'none',
                            scrollTrigger: {
                                trigger: slide,
                                start: 'top bottom',
                                end: 'bottom top',
                                scrub: true
                            }
                        }
                    )
                }
            })

        }, containerRef)

        return () => ctx.revert()
    }, [])

    const scrollToSlide = (id: string, e: React.MouseEvent) => {
        e.preventDefault()
        gsap.to(window, {
            duration: 1.5,
            scrollTo: { y: id, offsetY: 0 },
            ease: 'power4.inOut'
        })
    }

    const services = [
        {
            id: 'slide-1',
            number: '01',
            title: 'Security Officer',
            description: 'Elite security personnel delivering executive protection and corporate security with advanced threat assessment capabilities.',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
            bgColor: '#E2E8F0', // slate-200
            accentColor: 'bg-slate-900'
        },
        {
            id: 'slide-2',
            number: '02',
            title: 'Security Guard',
            description: 'Vigilant 24/7 premises protection with strict access control protocols for residential and commercial assets.',
            image: 'https://images.unsplash.com/photo-1552058544-f6b08422138a?w=800&q=80',
            bgColor: '#F1F5F9', // slate-100
            accentColor: 'bg-blue-600'
        },
        {
            id: 'slide-3',
            number: '03',
            title: 'Armed Security',
            description: 'Licensed specialists for high-risk environments, offering maximum deterrence and immediate tactical response.',
            image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
            bgColor: '#E2E8F0',
            accentColor: 'bg-red-600'
        },
        {
            id: 'slide-4',
            number: '04',
            title: 'Event Security',
            description: 'Comprehensive crowd management and VIP safety for corporate events, concerts, and private gatherings.',
            image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
            bgColor: '#F1F5F9',
            accentColor: 'bg-indigo-600'
        },
        {
            id: 'slide-5',
            number: '05',
            title: '24/7 Monitoring',
            description: 'Advanced command center integration for real-time surveillance, alarm verification, and emergency dispatch.',
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
            bgColor: '#E2E8F0',
            accentColor: 'bg-emerald-600'
        }
    ]

    return (
        <div ref={containerRef} className="bg-white text-slate-900 overflow-hidden">

            {/* Intro Section */}
            <section className="service-intro relative h-screen w-full overflow-hidden bg-blue-50/50 flex items-center p-8 md:p-20">
                <div className="relative z-20 max-w-4xl">
                    <h1 className="intro-title text-[15vw] md:text-[8vw] font-bold leading-[0.9] tracking-tighter text-slate-900 mb-8">
                        Axis <br /> <span className="text-blue-600">Security</span>
                    </h1>
                    <p className="intro-desc text-lg md:text-2xl text-slate-600 max-w-xl md:ml-32 leading-relaxed font-light">
                        Axis is going from strength to strength. Whether it’s executive protection in high-rise headquarters or large-scale event management, people recognize the Axis standard of excellence.
                    </p>
                </div>

                {/* Floating Images (Intro) */}
                <div className="intro-img-1 absolute right-[10%] bottom-[20%] w-[35vw] md:w-[25vw] z-10 shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80" alt="Intro 1" className="w-full h-auto" />
                </div>
                <div className="intro-img-2 absolute left-[50%] top-[10%] w-[25vw] md:w-[20vw] z-0 opacity-80 mix-blend-multiply">
                    <img src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=600&q=80" alt="Intro 2" className="w-full h-auto" />
                </div>

                {/* Scroll Prompt */}
                <a href="#slide-1" onClick={(e) => scrollToSlide('#slide-1', e)} className="absolute bottom-10 left-10 text-slate-900 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                    Start Tour <ArrowDown className="w-5 h-5" />
                </a>
            </section>

            {/* Slides Loop */}
            {services.map((service, index) => {
                const nextSlideId = services[index + 1]?.id || '#contact'
                const isEven = index % 2 === 0

                return (
                    <section
                        key={service.id}
                        id={service.id}
                        className="service-slide relative h-[100vh] min-h-[700px] flex flex-col md:flex-row overflow-hidden border-t border-white/50"
                        style={{ backgroundColor: service.bgColor }}
                    >
                        {/* Column 1: Content */}
                        <div className="relative z-10 w-full md:w-1/2 h-full flex flex-col justify-end p-8 md:p-20 order-2 md:order-1 pointer-events-none md:pointer-events-auto">
                            <div className="max-w-lg mb-20">
                                <span className={`slide-content-item block text-6xl md:text-9xl font-bold mb-4 opacity-20 ${index % 2 === 0 ? 'text-slate-900' : 'text-blue-900'}`}>
                                    {service.number}
                                </span>

                                <h2 className="slide-content-item text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                                    {service.title.split(' ').map((word, i) => (
                                        <span key={i} className="block">{word}</span>
                                    ))}
                                </h2>

                                <div className="slide-content-item flex justify-end">
                                    <div className="w-full md:w-2/3">
                                        <div className={`w-16 h-1 mb-6 ${service.accentColor}`} />
                                        <p className="text-lg text-slate-700 leading-relaxed mb-8">
                                            {service.description}
                                        </p>
                                        <Link href="/#contact">
                                            <button className="flex items-center gap-4 text-slate-900 font-bold group pointer-events-auto">
                                                <div className="w-12 h-12 rounded-full border border-slate-900 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
                                                    <ArrowRight className="w-5 h-5" />
                                                </div>
                                                Request Quote
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Scroll Link to Next */}
                            <a
                                href={nextSlideId}
                                onClick={(e) => scrollToSlide(nextSlideId, e)}
                                className="absolute right-0 bottom-0 top-0 w-24 hidden md:flex items-end justify-center pb-12 hover:bg-black/5 transition-colors cursor-pointer pointer-events-auto"
                            >
                                <div className="slide-scroll-line w-px h-full bg-slate-400 origin-top" />
                                <span className="absolute bottom-4 font-mono text-xs">NEXT</span>
                            </a>
                        </div>

                        {/* Column 2: Image */}
                        <div className="absolute top-0 left-0 md:relative md:w-1/2 w-full h-[50vh] md:h-full order-1 md:order-2 overflow-hidden">
                            <div className="slide-img-wrap w-full h-[140%] relative -top-[20%]">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </section>
                )
            })}

        </div>
    )
}
