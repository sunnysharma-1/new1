'use client'

import React, { useEffect, useRef } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Shield, Target, Users, BookOpen, Lock, BarChart, CheckCircle, Factory, Building, Warehouse, Home, ShoppingBag, Stethoscope, Hotel, GraduationCap } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function AboutPage() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Hero Parallax & Reveal
            const heroTl = gsap.timeline()
            heroTl.from('.hero-text-item', {
                y: 100,
                opacity: 0,
                duration: 1.5,
                stagger: 0.2,
                ease: 'power4.out',
                delay: 0.5
            })

            gsap.to('.hero-bg', {
                y: '30%',
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero-section',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            })

            // 2. Mission Highlight
            const missionText = document.querySelectorAll('.mission-word')
            gsap.fromTo(missionText,
                { color: '#94a3b8' }, // slate-400
                {
                    color: '#0f172a', // slate-900
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: '.mission-section',
                        start: 'top 70%',
                        end: 'bottom 60%',
                        scrub: 1
                    }
                }
            )

            // 3. Pinned Tech & Training Section
            const detailsSections = gsap.utils.toArray<HTMLElement>('.detail-panel')
            const detailsImages = gsap.utils.toArray<HTMLElement>('.detail-image')

            ScrollTrigger.create({
                trigger: '.pinned-container',
                start: 'top top',
                end: 'bottom bottom',
                pin: '.pinned-visual',
                // markers: true
            })

            detailsSections.forEach((section, i) => {
                ScrollTrigger.create({
                    trigger: section,
                    start: 'top center',
                    end: 'bottom center',
                    onEnter: () => setActiveImage(i),
                    onEnterBack: () => setActiveImage(i)
                })
            })

            const setActiveImage = (index: number) => {
                detailsImages.forEach((img, i) => {
                    if (i === index) {
                        gsap.to(img, { opacity: 1, scale: 1, duration: 0.5 })
                    } else {
                        gsap.to(img, { opacity: 0, scale: 1.1, duration: 0.5 })
                    }
                })
            }

            // 4. Recruitment Line Draw
            gsap.fromTo('.recruitment-line',
                { scaleY: 0 },
                {
                    scaleY: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.recruitment-container',
                        start: 'top center',
                        end: 'bottom center',
                        scrub: 1
                    }
                }
            )

            // 5. Industries Stagger
            gsap.from('.industry-card', {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.05,
                scrollTrigger: {
                    trigger: '.industries-grid',
                    start: 'top 80%'
                }
            })

        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <main ref={containerRef} className="min-h-screen bg-white overflow-x-hidden">
            <Header theme="light" />

            {/* 1. Hero Section */}
            <section className="hero-section relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="hero-bg w-full h-[130%] relative -top-[15%]">
                        <img
                            src="/images/apex-salute-large.jpg"
                            alt="Axis Team Salute"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute inset-0 bg-slate-900/50" />
                </div>
                <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
                    <h1 className="hero-text-item text-6xl md:text-9xl font-bold mb-8 tracking-tighter">
                        WHO WE ARE
                    </h1>
                    <div className="hero-text-item w-24 h-1 bg-blue-500 mx-auto mb-8" />
                    <p className="hero-text-item text-2xl md:text-3xl text-white/90 font-light max-w-3xl mx-auto">
                        Discipline. Protection. Excellence.
                    </p>
                </div>
            </section>

            {/* 2. Mission Section */}
            <section className="mission-section py-32 bg-white">
                <div className="container mx-auto px-6 max-w-5xl text-center">
                    <div className="mb-12">
                        <Shield className="w-16 h-16 text-blue-600 mx-auto" />
                    </div>
                    <p className="text-3xl md:text-5xl font-bold leading-tight">
                        {/* Splitting text for highlight effect */}
                        {`Axis Security & Surveillance is a firm built on discipline and practical experience. We offer planned security with clear routines, active supervision, and leadership managed sites. Our mission is simple: to reduce risk, create a safer environment, and continuously improve our service.`.split(' ').map((word, i) => (
                            <span key={i} className="mission-word inline-block mr-3">{word}</span>
                        ))}
                    </p>
                </div>
            </section>

            {/* 3. Deep Dive (Pinned) Section */}
            <section className="pinned-container relative bg-slate-50">
                <div className="flex flex-col md:flex-row">
                    {/* Left: Scrollable Text */}
                    <div className="w-full md:w-1/2 order-2 md:order-1 relative z-10">
                        {/* Technology Panel */}
                        <div className="detail-panel min-h-screen flex items-center justify-center p-8 md:p-24">
                            <div className="max-w-xl">
                                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-8">
                                    <BarChart className="w-8 h-8" />
                                </div>
                                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8">Technology & Accountability</h2>
                                <div className="prose prose-lg text-slate-600">
                                    <p>
                                        Axis uses smart, easy-to-use tech to keep our security operations consistent and responsive. Things like digital attendance and shift tracking really cut down on gaps and boost discipline.
                                    </p>
                                    <p>
                                        Plus, patrol validation, check-in systems, and audit logs mean clear accountability at every single site. Incident reports are kept structured, so updates zip over to the right people fast.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Training Panel */}
                        <div className="detail-panel min-h-screen flex items-center justify-center p-8 md:p-24">
                            <div className="max-w-xl">
                                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-8">
                                    <BookOpen className="w-8 h-8" />
                                </div>
                                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8">Rigorous Preparation</h2>
                                <div className="prose prose-lg text-slate-600">
                                    <p>
                                        At Axis, training isn’t treated as a routine step—it’s the core of how standards are built. Before any deployment, each recruit goes through a structured program that develops discipline, alertness, and confident decision-making.
                                    </p>
                                    <p>
                                        The approach stays hands-on: mock drills, real-life scenarios, and site-specific briefings that reflect actual working conditions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Why Us Panel */}
                        <div className="detail-panel min-h-screen flex items-center justify-center p-8 md:p-24">
                            <div className="max-w-xl">
                                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-8">
                                    <Target className="w-8 h-8" />
                                </div>
                                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8">Why Axis Stands Out</h2>
                                <div className="prose prose-lg text-slate-600">
                                    <p>
                                        Our commitment to continuous improvement is what sets Axis apart. We don't just provide security; we integrate ourselves as a trusted partner.
                                    </p>
                                    <p>
                                        By focusing on discipline and smart technology, we ensure that our security personnel are actively contributing to the safety and operational integrity of your establishment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Pinned Visuals */}
                    <div className="pinned-visual w-full md:w-1/2 h-[50vh] md:h-screen sticky top-0 order-1 md:order-2 overflow-hidden bg-slate-200">
                        <div className="detail-image absolute inset-0 opacity-100">
                            <img src="/images/apex-building-lineup.jpg" className="w-full h-full object-cover" alt="Technology" />
                            <div className="absolute inset-0 bg-blue-900/20" />
                        </div>
                        <div className="detail-image absolute inset-0 opacity-0">
                            <img src="/images/apex-march-side-2.jpg" className="w-full h-full object-cover" alt="Training" />
                            <div className="absolute inset-0 bg-indigo-900/20" />
                        </div>
                        <div className="detail-image absolute inset-0 opacity-0">
                            <img src="/images/apex-flag-ceremony-large.jpg" className="w-full h-full object-cover" alt="Why Us" />
                            <div className="absolute inset-0 bg-emerald-900/20" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Recruitment Process */}
            <section className="recruitment-container py-32 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-6xl relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Recruitment & Verification</h2>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                            A strict, step-by-step system to ensure only the best are deployed.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Center Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-100 -translate-x-1/2 hidden md:block" />
                        <div className="recruitment-line absolute left-1/2 top-0 bottom-0 w-1 bg-blue-500 -translate-x-1/2 origin-top hidden md:block" />

                        {[
                            { title: 'Screening', desc: 'Fitness, discipline, service mindset.', icon: Users },
                            { title: 'Verification', desc: 'Identity, address, detailed records.', icon: CheckCircle },
                            { title: 'Background', desc: 'Police verification, employment checks.', icon: Shield },
                            { title: 'Induction', desc: 'Role readiness, site briefings.', icon: GraduationCap }
                        ].map((step, i) => (
                            <div key={i} className={`flex items-center justify-between mb-24 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                <div className={`w-full md:w-5/12 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                    <h3 className="text-3xl font-bold text-slate-900 mb-4">{step.title}</h3>
                                    <p className="text-lg text-slate-600">{step.desc}</p>
                                </div>

                                <div className="w-14 h-14 rounded-full bg-white border-4 border-blue-500 z-10 flex items-center justify-center shrink-0 shadow-xl">
                                    <step.icon className="w-6 h-6 text-blue-600" />
                                </div>

                                <div className="w-full md:w-5/12 hidden md:block" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Industries (Staggered Grid) */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <h2 className="text-3xl font-bold mb-16 text-center">Industries Served</h2>
                    <div className="industries-grid grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: 'Corporate', icon: Building },
                            { label: 'Industrial', icon: Factory },
                            { label: 'Logistics', icon: Warehouse },
                            { label: 'Construction', icon: Lock },
                            { label: 'Residential', icon: Home },
                            { label: 'Retail', icon: ShoppingBag },
                            { label: 'Healthcare', icon: Stethoscope },
                            { label: 'Hospitality', icon: Hotel },
                        ].map((ind, i) => (
                            <div key={i} className="industry-card bg-slate-800/50 p-8 rounded-2xl flex flex-col items-center justify-center h-48 hover:bg-slate-800 transition-colors border border-slate-700 hover:border-blue-500 group">
                                <ind.icon className="w-10 h-10 text-slate-400 mb-6 group-hover:text-blue-500 transition-colors" />
                                <span className="text-xl font-medium">{ind.label}</span>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
