'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ClipboardList, PenTool, UserCheck, Smartphone, ShieldCheck } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const processSteps = [
    {
        title: "Site Risk Assessment",
        description: "We don't guess; we analyze. Our tactical team conducts a full perimeter survey to identify vulnerabilities, blind spots, and high-traffic zones.",
        icon: ClipboardList,
        color: "bg-blue-600"
    },
    {
        title: "Strategic SOP Design",
        description: "Every site gets a custom playbook. We draft distinct Standard Operating Procedures (SOPs) for conflict de-escalation, visitor management, and emergency response.",
        icon: PenTool,
        color: "bg-indigo-600"
    },
    {
        title: "Guard Selection & Training",
        description: "WE deploy personnel who fit YOUR culture. Candidates undergo site-specific training so they are effective from Day 1, not Day 10.",
        icon: UserCheck,
        color: "bg-violet-600"
    },
    {
        title: "Tech Implementation",
        description: "QR-code checkpoints and digital reporting apps are instated. This ensures patrols are validated and clients get real-time transparency.",
        icon: Smartphone,
        color: "bg-fuchsia-600"
    },
    {
        title: "Active Defense & Audit",
        description: "Security is live. We perform surprise night checks and monthly audits to ensure the standards we promised are the standards we deliver.",
        icon: ShieldCheck,
        color: "bg-emerald-600"
    }
]

export default function ProcessTimeline() {
    const containerRef = useRef<HTMLDivElement>(null)
    const lineRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {

            // 1. Draw the connecting line
            if (lineRef.current) {
                gsap.fromTo(lineRef.current,
                    { height: '0%' },
                    {
                        height: '100%',
                        ease: 'none',
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: 'top 60%',
                            end: 'bottom 60%',
                            scrub: 1.5
                        }
                    }
                )
            }

            // 2. Reveal each step
            const steps = gsap.utils.toArray('.process-step')
            steps.forEach((step: any, i) => {
                gsap.fromTo(step,
                    { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: step,
                            start: 'top 80%',
                            end: 'bottom 80%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                )
            })

        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-5xl">

                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-sm font-bold uppercase tracking-wide mb-6">
                        <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                        The Axis Workflow
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        From Analysis to <span className="text-blue-600">Active Protection</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        We don't just send a guard and hope for the best. We execute a military-grade onboarding process to secure your premises.
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Central Line (Desktop) */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-slate-100 hidden md:block">
                        <div ref={lineRef} className="w-full bg-gradient-to-b from-blue-600 via-indigo-600 to-emerald-600 origin-top" style={{ height: '0%' }} />
                    </div>

                    {/* Steps */}
                    <div className="space-y-12 md:space-y-24 relative z-10">
                        {processSteps.map((step, index) => {
                            const Icon = step.icon
                            const isEven = index % 2 === 0
                            return (
                                <div key={index} className={`process-step flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                                    {/* Content Side */}
                                    <div className={`w-full md:w-1/2 ${isEven ? 'md:text-right' : 'md:text-left'} text-center`}>
                                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
                                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                                            <p className="text-slate-600 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Central Icon */}
                                    <div className="relative shrink-0 z-20">
                                        <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center text-white shadow-xl ring-8 ring-white`}>
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        {/* Mobile Line Connector */}
                                        {index !== processSteps.length - 1 && (
                                            <div className="absolute top-16 left-1/2 w-1 h-12 bg-slate-200 -translate-x-1/2 md:hidden" />
                                        )}
                                    </div>

                                    {/* Empty Space for alignment */}
                                    <div className="w-full md:w-1/2 hidden md:block" />

                                </div>
                            )
                        })}
                    </div>

                </div>

            </div>
        </section>
    )
}
