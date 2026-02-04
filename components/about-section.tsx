'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckCircle2, Trophy, Users, Shield } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
    const sectionRef = useRef(null)


    useEffect(() => {
        const ctx = gsap.context(() => {
            // Reveal Animation
            gsap.from('.reveal-text', {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                }
            })



            // Image Parallax
            gsap.to('.about-image-front', {
                y: -30,
                scrollTrigger: {
                    trigger: '.about-images',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1.5
                }
            })
            gsap.to('.about-image-back', {
                y: 30,
                scrollTrigger: {
                    trigger: '.about-images',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1.5
                }
            })

        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="py-24 bg-slate-50 overflow-hidden relative" id="why-us">
            {/* Pattern Background */}
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] bg-[radial-gradient(#2563eb_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Content Side */}
                    <div className="space-y-10 order-2 lg:order-1">
                        <div className="space-y-6">
                            <div className="reveal-text inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-widest border border-slate-200">
                                <span className="w-2 h-2 rounded-full bg-blue-600" />
                                Who We Are
                            </div>

                            <h2 className="reveal-text text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                                Who We Are. <br />
                                <span className="text-blue-600">Axis Security</span>
                            </h2>

                            <p className="reveal-text text-slate-600 text-lg leading-relaxed border-l-4 border-blue-100 pl-6">
                                Axis Security, based in Dadra & Nagar Haveli, is a security firm built on discipline and practical experience. We focus on protecting people, property, and daily operations through planned security with clear routines, active supervision, and leadership-managed sites.
                            </p>

                            <p className="reveal-text text-slate-600 leading-relaxed">
                                Our operational excellence ensures consistency through defined procedures, smart monitoring, and surprise inspections. All guards are rigorously trained in safety drills, fire response, first aid, and professional conduct, ensuring a safer, trustworthy environment.
                            </p>
                        </div>


                    </div>

                    {/* Image / Visual Side */}
                    <div className="about-images relative h-[600px] w-full order-1 lg:order-2">
                        {/* Circle Decoration */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-slate-50 rounded-full z-0" />

                        {/* Back Image (Offset) */}
                        <div className="about-image-back absolute top-0 right-10 w-3/5 h-[350px] shadow-2xl rounded-2xl overflow-hidden z-10 border-4 border-white">
                            <img
                                src="/images/apex-building-lineup.jpg"
                                alt="Command Center"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>

                        {/* Front Image (Main) */}
                        <div className="about-image-front absolute bottom-0 left-0 w-4/5 h-[400px] shadow-2xl rounded-2xl overflow-hidden z-20 border-4 border-white">
                            <img
                                src="/images/apex-hero-group.jpg"
                                alt="Security Team"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />

                            {/* Floating Badge */}
                            <div className="absolute bottom-6 right-6 bg-blue-600 text-white p-4 rounded-xl shadow-lg flex items-center gap-3">
                                <Shield className="w-8 h-8" />
                                <div>
                                    <p className="text-xs font-medium opacity-80 uppercase">Verified</p>
                                    <p className="font-bold">Excellence</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
