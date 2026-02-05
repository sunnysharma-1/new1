'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ClipboardList, PenTool, UserCheck, Smartphone, ShieldCheck } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const processSteps = [
    {
        id: "01",
        title: "Site Risk Assessment",
        description: "We don't rely on generic templates; we analyze your specific reality. Our tactical team conducts a comprehensive 360-degree perimeter survey to identify physical vulnerabilities, blind spots, and high-traffic congestion zones. We assess potential threat vectors ranging from unauthorized access points to environmental hazards, ensuring our strategy is built on hard data, not assumptions.",
        icon: ClipboardList,
    },
    {
        id: "02",
        title: "Strategic SOP Design",
        description: "Every site requires a unique operational playbook. We draft distinct, site-specific Standard Operating Procedures (SOPs) that cover every contingency—from conflict de-escalation and VIP visitor management to emergency evacuation protocols. These are not static documents but living strategies that evolve with your security needs.",
        icon: PenTool,
    },
    {
        id: "03",
        title: "Guard Selection & Training",
        description: "We deploy personnel who fit YOUR corporate culture. Candidates undergo a rigorous vetting process followed by intensive site-specific training. They are drilled on your specific SOPs, access control systems, and soft-skill requirements, ensuring they are effective and professional from Day 1, not Day 10.",
        icon: UserCheck,
    },
    {
        id: "04",
        title: "Tech Implementation",
        description: "Modern security demands digital transparency. We instate QR-code checkpoints and digital reporting apps to gamify and track patrols. This ensures every patrol is time-stamped and validated, giving clients real-time access to daily reports, incident logs, and attendance records directly from their dashboard.",
        icon: Smartphone,
    },
    {
        id: "05",
        title: "Active Defense & Audit",
        description: "Security is a live operation, not a 'set and forget' service. We perform unannounced night checks and structured monthly audits to ensure the standards we promised are the standards we deliver. Our Area Managers constantly review performance metrics to proactively identify and correct any dips in vigilance.",
        icon: ShieldCheck,
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
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: step,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                )
            })

        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className="py-6 bg-slate-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px]" />
            <div className="absolute right-0 bottom-0 -z-10 h-[310px] w-[310px] rounded-full bg-indigo-400 opacity-20 blur-[100px]" />

            <div className="container mx-auto px-4 max-w-5xl">

                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-blue-600 text-sm font-bold uppercase tracking-widest mb-4 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                        Operational Roadmap
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        The Axis <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">Workflow</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto dark:text-gray-400">
                        A systematic, rigorous approach to securing your premises. Zero guesswork, 100% accountability.
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Central Line (Desktop) */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-slate-200 hidden md:block">
                        <div ref={lineRef} className="w-full bg-blue-600 origin-top shadow-[0_0_10px_rgba(37,99,235,0.5)]" style={{ height: '0%' }} />
                    </div>

                    {/* Steps */}
                    <div className="space-y-8 md:space-y-8 relative z-10">
                        {processSteps.map((step, index) => {
                            const Icon = step.icon
                            const isEven = index % 2 === 0
                            return (
                                <div key={index} className={`process-step flex flex-col md:flex-row items-center gap-6 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                                    {/* Content Side */}
                                    <div className={`w-full md:w-1/2 ${isEven ? 'md:text-right' : 'md:text-left'} group`}>
                                        <div className="relative bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                            {/* Watermark Number */}
                                            <div className={`absolute -top-6 ${isEven ? 'right-8 md:right-auto md:left-8' : 'left-8 md:left-auto md:right-8'} text-8xl font-black text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none select-none`}>
                                                {step.id}
                                            </div>

                                            <div className="relative z-10">
                                                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{step.title}</h3>
                                                <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">
                                                    {step.description}
                                                </p>
                                            </div>

                                            {/* Decorative Corner */}
                                            <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} w-16 h-16 bg-gradient-to-br from-blue-50 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                                        </div>
                                    </div>

                                    {/* Central Icon */}
                                    <div className="relative shrink-0 z-20">
                                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center text-blue-600 shadow-lg relative group transition-transform duration-300 hover:scale-110 hover:border-blue-100">
                                            <Icon className="w-6 h-6 md:w-7 md:h-7 relative z-10" />
                                            <div className="absolute inset-0 rounded-full bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        {/* Mobile Line Connector */}
                                        {index !== processSteps.length - 1 && (
                                            <div className="absolute top-12 left-1/2 w-px h-12 bg-slate-200 -translate-x-1/2 md:hidden" />
                                        )}
                                    </div>

                                    {/* Empty Space for alignment */}
                                    <div className="w-full md:w-1/2 hidden md:block">
                                        <div className={`text-[8rem] font-black text-slate-100 leading-none opacity-50 ${isEven ? 'text-left pl-12' : 'text-right pr-12'}`}>
                                            {step.id}
                                        </div>
                                    </div>

                                </div>
                            )
                        })}
                    </div>

                </div>

            </div>
        </section>
    )
}
