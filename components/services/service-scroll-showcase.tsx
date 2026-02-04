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
            introTl.to('.intro-sub-desc', { y: 100, opacity: 0, duration: 2.2 }, 0)
            introTl.to('.intro-img-1', { y: -100, opacity: 0, duration: 2 }, 0)
            introTl.to('.intro-img-2', { y: -150, opacity: 0, duration: 2 }, 0)
            introTl.to('.intro-img-3', { x: -50, opacity: 0, duration: 2.5 }, 0)
            introTl.to('.intro-img-4', { scale: 0.8, opacity: 0, duration: 2 }, 0)

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
                        { y: '-2.5%' },
                        {
                            y: '2.5%',
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
            title: 'Manned Guarding',
            description: 'Our manned guarding service is built on a foundation of discipline, practical experience, and a rigorous 3-layer supervision model. We do not just deploy guards; we deploy trained first-responders who undergo a strict 2-step background verification. From soft-skills training for conflict de-escalation to hands-on fire safety drills, our personnel act as a trustworthy presence that actively reduces risk. They are mentored by Area Field Officers who ensure that the "Axis Standard" is maintained on every shift.',
            features: ['Safety Drills & Fire Response', 'First Aid Certified Personnel', 'Professional Conduct & Ethics', 'Active Site Supervision'],
            image: '/images/apex-march-side-2.jpg',
            bgColor: '#E2E8F0', // slate-200
            accentColor: 'bg-slate-900'
        },
        {
            id: 'slide-2',
            number: '02',
            title: 'Industrial Security',
            description: 'We provide robust protection for industrial facilities, manufacturing plants, and warehousing centers by focusing on the flow of goods and people. Our teams specialize in "inward/outward" material tracking, gate pass management, and thorough vehicle inspections to prevent shrinkage. Beyond theft prevention, we integrate with your safety officers to enforce PPE compliance and maintain clear fire safety zones, ensuring that your daily operations run without disruption or liability.',
            features: ['Material Transit Monitoring', 'Perimeter Safety Protocols', 'Strict Access Control', 'Asset Protection & Loss Prevention'],
            image: '/images/apex-warehouse-patrol.jpg',
            bgColor: '#F1F5F9', // slate-100
            accentColor: 'bg-blue-600'
        },
        {
            id: 'slide-3',
            number: '03',
            title: 'Corporate Security',
            description: 'For corporate offices, Axis delivers a "Security as Hospitality" solution. Our personnel are trained to function as concierges who seamlessly manage visitor registration software and switchboard operations while maintaining high vigilance. We balance professional courtesy with strict access control, ensuring a secure environment for your staff and clients. After hours, our teams conduct detailed perimeter checks to secure intellectual property and physical assets.',
            features: ['Visitor Management Systems', 'Detailed Audit Logs', 'Professional Front-Desk Presence', 'Regular Security Patrols'],
            image: '/images/apex-office-desk.jpg',
            bgColor: '#E2E8F0',
            accentColor: 'bg-indigo-600'
        },
        {
            id: 'slide-4',
            number: '04',
            title: 'Event Security',
            description: 'For high-density scenarios, we rely on "Pre-Event Reconnaissance." Our teams survey your venue days in advance to identify choke points, emergency exits, and VIP routes. We coordinate closely with local law enforcement and manage everything from rigorous bag checks to rapid response coordination. Whether it is a corporate gala or a large exhibition, we ensure the safety of large gatherings with a proactive, organized presence.',
            features: ['Crowd Management Strategies', 'VIP & Executive Protection', 'Rapid Response Coordination', 'Large-Scale Event Logistics'],
            image: '/images/IMG_7199.jpg',
            bgColor: '#F1F5F9',
            accentColor: 'bg-slate-800'
        },
        {
            id: 'slide-5',
            number: '05',
            title: 'Tech Surveillance',
            description: 'Axis integrates smart, easy-to-use technology to create accountability. We implement a QR-code based "Guard Tour System" that validates patrols in real-time, eliminating blind spots. Our teams use app-based reporting for immediate incident logging, replacing slow paper trails with instant data. By linking with your existing CCTV infrastructure, we provide a transparent, data-driven security layer that keeps you informed 24/7.',
            features: ['Digital Attendance Tracking', 'CCTV Integration & Monitoring', 'Patrol Validation Systems', 'Structured Incident Reporting'],
            image: '/images/apex-tech-surveillance.jpeg',
            bgColor: '#E2E8F0',
            accentColor: 'bg-emerald-600'
        }
    ]

    return (
        <div ref={containerRef} className="bg-white text-slate-900 overflow-hidden">

            {/* Intro Section */}
            <section className="service-intro relative min-h-screen md:h-screen w-full overflow-hidden bg-blue-50/50 flex items-center p-6 md:p-20 pt-24 md:pt-20">
                <div className="relative z-20 max-w-4xl">
                    <h1 className="intro-title text-[18vw] md:text-[8vw] font-bold leading-[0.9] tracking-tighter text-slate-900 mb-6 md:mb-8">
                        Axis <br /> <span className="text-blue-600">Security</span>
                    </h1>
                    <p className="intro-desc text-lg md:text-2xl text-slate-600 max-w-xl md:ml-32 leading-relaxed font-light mb-6">
                        Axis Security is going from strength to strength. Whether it’s executive protection or large-scale event management, people recognize the Axis standard of excellence.
                    </p>
                    <p className="intro-sub-desc text-base md:text-lg text-slate-500 max-w-lg md:ml-40 leading-relaxed border-l-2 border-blue-200 pl-4">
                        We blend traditional discipline with modern technology. Our officers are not just guards; they are trained professionals equipped to handle complex security challenges with authority and grace.
                    </p>
                </div>

                {/* Floating Images (Intro) */}
                <div className="intro-img-1 absolute right-[5%] bottom-[15%] w-[45vw] md:w-[25vw] z-10 shadow-2xl opacity-60 md:opacity-100">
                    <img src="/images/apex-parade-fog.jpg" alt="Intro 1" className="w-full h-auto" />
                </div>
                <div className="intro-img-2 absolute left-[40%] top-[10%] w-[35vw] md:w-[20vw] z-0 opacity-40 md:opacity-80 mix-blend-multiply">
                    <img src="/images/apex-hero-group.jpg" alt="Intro 2" className="w-full h-auto rounded-lg shadow-xl" />
                </div>
                <div className="intro-img-3 absolute left-[5%] top-[15%] w-[30vw] md:w-[15vw] z-10 shadow-lg -rotate-6 opacity-60 md:opacity-100">
                    <img src="/images/apex-team-2.jpg" alt="Intro 3" className="w-full h-auto rounded-lg border-4 border-white" />
                </div>
                <div className="intro-img-4 absolute right-[5%] bottom-[5%] w-[30vw] md:w-[18vw] z-0 opacity-30 md:opacity-60 blur-[1px]">
                    <img src="/images/apex-warehouse-patrol.jpg" alt="Intro 4" className="w-full h-auto rounded-lg" />
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
                        className="service-slide relative min-h-screen md:h-[100vh] min-h-[auto] md:min-h-[850px] flex flex-col md:flex-row overflow-hidden border-t border-white/50"
                        style={{ backgroundColor: service.bgColor }}
                    >
                        {/* Column 1: Content */}
                        <div className="relative z-10 w-full md:w-1/2 lg:w-3/5 flex flex-col justify-end p-6 md:p-20 order-2 md:order-1 pointer-events-none md:pointer-events-auto pb-24 md:pb-20">
                            <div className="max-w-xl mb-4 md:mb-20">
                                <span className={`slide-content-item block text-5xl md:text-9xl font-bold mb-2 md:mb-4 opacity-20 ${index % 2 === 0 ? 'text-slate-900' : 'text-blue-900'}`}>
                                    {service.number}
                                </span>

                                <h2 className="slide-content-item text-3xl md:text-6xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
                                    {service.title.split(' ').map((word, i) => (
                                        <span key={i} className="block">{word}</span>
                                    ))}
                                </h2>

                                <div className="slide-content-item flex justify-end w-full">
                                    <div className="w-full md:w-[90%]">
                                        <div className={`w-16 h-1 mb-6 ${service.accentColor}`} />
                                        <p className="text-lg text-slate-700 leading-relaxed mb-8">
                                            {service.description}
                                        </p>

                                        {/* Added Features List */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-2">
                                                    <ShieldCheck className="w-4 h-4 text-slate-400" />
                                                    <span className="text-sm font-semibold text-slate-600">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <Link href="/contact">
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
                        <div className="relative md:relative w-full md:w-1/2 lg:w-2/5 h-[50vh] md:h-full order-1 md:order-2 overflow-hidden">
                            <div className="slide-img-wrap w-full h-[105%] relative -top-[2.5%]">
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
