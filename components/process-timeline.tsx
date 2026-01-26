'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ClipboardList, ShieldCheck, UserCheck, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function ProcessTimeline() {
    const sectionRef = useRef(null)
    const lineRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate Connector Line
            gsap.fromTo(lineRef.current,
                { scaleX: 0 },
                {
                    scaleX: 1,
                    duration: 1.5,
                    ease: 'power2.out',
                    transformOrigin: 'left center',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                    }
                }
            )

            // Animate Steps
            const steps = document.querySelectorAll('.process-step')
            gsap.from(steps, {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.3,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                }
            })

        }, sectionRef)
        return () => ctx.revert()
    }, [])

    const steps = [
        {
            icon: ClipboardList,
            title: 'Assessment',
            desc: 'We conduct a rigorous site analysis to identify vulnerabilities.'
        },
        {
            icon: ShieldCheck,
            title: 'Strategy',
            desc: 'We design a custom security plan tailored to your risks.'
        },
        {
            icon: UserCheck,
            title: 'Deployment',
            desc: 'Elite personnel are briefed and deployed to your location.'
        }
    ]

    return (
        <section ref={sectionRef} className="py-24 bg-slate-50 relative overflow-hidden">

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How We Secure Your World</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">A seamless three-step process to total peace of mind.</p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-slate-200 z-0">
                        <div ref={lineRef} className="h-full bg-blue-500 origin-left" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 relative z-10">
                        {steps.map((step, i) => {
                            const Icon = step.icon
                            return (
                                <div key={i} className="process-step flex flex-col items-center text-center">
                                    <div className="w-24 h-24 rounded-2xl bg-white border-4 border-slate-100 flex items-center justify-center text-blue-600 shadow-xl mb-8 relative z-10">
                                        <Icon className="w-10 h-10" />
                                        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm border-2 border-white">
                                            {i + 1}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{step.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <button className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all">
                        Start Your Assessment <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    )
}
