'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import Link from 'next/link'
import { Check, ArrowRight, Shield, ShieldCheck, Siren } from 'lucide-react'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function PricingScrollShowcase() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const slides = document.querySelectorAll('.pricing-slide') as NodeListOf<HTMLElement>
            const intro = document.querySelector('.pricing-intro')

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
            introTl.to('.intro-title', { scale: 1.5, opacity: 0, duration: 2 })
            introTl.to('.intro-desc', { y: 50, opacity: 0, duration: 2 }, 0)

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
                    y: 50,
                    opacity: 0,
                    ease: 'power4.out',
                    duration: 1.2,
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

    const scrollToTier = (id: string, e: React.MouseEvent) => {
        e.preventDefault()
        gsap.to(window, {
            duration: 1.5,
            scrollTo: { y: id, offsetY: 0 },
            ease: 'power4.inOut'
        })
    }

    const tiers = [
        {
            id: 'tier-1',
            name: 'Standard Guarding',
            price: 'Custom Quote',
            description: 'Essential security presence for static posts, retail locations, and reception areas.',
            features: [
                'Uniformed Security Officers',
                'Access Control Management',
                'Regular Patrol Reports',
                'Incident Response',
                'Visitor Logging'
            ],
            image: 'https://images.unsplash.com/photo-1584465437898-75c7426615b3?w=800&q=80',
            bgColor: '#F8FAFC', // slate-50
            icon: Shield
        },
        {
            id: 'tier-2',
            name: 'Advanced Protection',
            price: 'Custom Quote',
            description: 'Enhanced security for corporate campuses, industrial sites, and high-traffic venues.',
            features: [
                'Mobile Patrol Units',
                'Technologically Integrated Reporting',
                'Rapid Response Teams',
                'CCTV Monitoring Integration',
                'Advanced Threat Assessment',
                'Detailed Analytics & Insights'
            ],
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
            bgColor: '#F1F5F9', // slate-100
            icon: ShieldCheck
        },
        {
            id: 'tier-3',
            name: 'Elite Command',
            price: 'Custom Quote',
            description: 'Top-tier security for executives, high-risk assets, and sensitive government operations.',
            features: [
                'Executive Protection Agents (Bodyguards)',
                '24/7 Command Center Monitoring',
                'Cyber-Physical Threat Intelligence',
                'Counter-Surveillance Measures',
                'Crisis Management Planning',
                'Dedicated Account Manager'
            ],
            image: 'https://images.unsplash.com/photo-1626084798132-72019c4b7b25?w=800&q=80', // Tech/Command center vib
            bgColor: '#E2E8F0', // slate-200
            icon: Siren
        }
    ]

    return (
        <div ref={containerRef} className="bg-white text-slate-900 overflow-hidden">

            {/* Hero / Intro */}
            <section className="pricing-intro relative h-screen w-full overflow-hidden bg-slate-900 text-white flex items-center justify-center p-8">
                <div className="relative z-20 text-center max-w-5xl">
                    <h1 className="intro-title text-[12vw] md:text-[8vw] font-bold leading-[0.9] tracking-tighter mb-8 bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
                        Value <br /> Uncompromised
                    </h1>
                    <p className="intro-desc text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
                        Flexible security solutions tailored to your risk profile. From static guarding to elite executive protection.
                    </p>
                    <div className="mt-12 intro-desc flex justify-center gap-6">
                        <a href="#tier-1" onClick={(e) => scrollToTier('#tier-1', e)} className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all flex items-center gap-2">
                            View Plans <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Background Grid/Effects */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
            </section>

            {/* Tiers Loop */}
            {tiers.map((tier, index) => {
                const nextTierId = tiers[index + 1]?.id || '#contact'
                const Icon = tier.icon

                return (
                    <section
                        key={tier.id}
                        id={tier.id}
                        className="pricing-slide relative h-[100vh] min-h-[800px] flex flex-col md:flex-row overflow-hidden border-t border-slate-200"
                        style={{ backgroundColor: tier.bgColor }}
                    >
                        {/* Content Column */}
                        <div className="relative z-10 w-full md:w-1/2 h-full flex flex-col justify-center p-8 md:p-20 order-2 md:order-1">
                            <div className="max-w-lg">
                                <div className="slide-content-item flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-blue-600 rounded-lg text-white">
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <span className="text-sm font-bold tracking-widest uppercase text-slate-500">Tier {index + 1}</span>
                                </div>

                                <h2 className="slide-content-item text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                                    {tier.name}
                                </h2>
                                <p className="slide-content-item text-xl text-slate-600 mb-8 leading-relaxed">
                                    {tier.description}
                                </p>

                                <div className="slide-content-item bg-white p-8 rounded-2xl shadow-sm border border-slate-200 mb-8">
                                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">Included Features</h3>
                                    <ul className="space-y-4">
                                        {tier.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-slate-700">
                                                <div className="mt-1 min-w-[20px]">
                                                    <Check className="w-5 h-5 text-blue-600" />
                                                </div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="slide-content-item">
                                    <Link href="/#contact">
                                        <button className="w-full md:w-auto px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-3">
                                            Request Quote
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            {/* Scroll Indicator */}
                            <a
                                href={nextTierId}
                                onClick={(e) => scrollToTier(nextTierId, e)}
                                className="absolute right-0 bottom-0 top-0 w-24 hidden md:flex items-end justify-center pb-12 hover:bg-black/5 transition-colors cursor-pointer"
                            >
                                <div className="slide-scroll-line w-px h-full bg-slate-300 origin-top" />
                                <span className="absolute bottom-4 font-mono text-xs text-slate-500">NEXT</span>
                            </a>
                        </div>

                        {/* Image Column */}
                        <div className="absolute top-0 left-0 md:relative md:w-1/2 w-full h-[40vh] md:h-full order-1 md:order-2 overflow-hidden">
                            <div className="slide-img-wrap w-full h-[140%] relative -top-[20%]">
                                <img
                                    src={tier.image}
                                    alt={tier.name}
                                    className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.1]"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent mix-blend-multiply" />
                            </div>
                        </div>
                    </section>
                )
            })}
        </div>
    )
}
