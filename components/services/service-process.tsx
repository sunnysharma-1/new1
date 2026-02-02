'use client'

import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const steps = [
    {
        number: '01',
        title: 'Requirement Analysis & Risk Assessment',
        content: 'Our engagement begins with a deep dive into your specific needs. Our expert team visits your facility to identify potential vulnerabilities, analyze traffic flow, and understand the operational rhythm. We don’t just quote a price; we draft a security strategy tailored to mitigate your specific risks.'
    },
    {
        number: '02',
        title: 'Strategic Planning & SOP Creation',
        content: 'Once the assessment is complete, we design a comprehensive deployment plan. This includes defining patrol routes, positioning static posts, and creating site-specific Standard Operating Procedures (SOPs). These instructions are documented and form the "Rule Book" for the security team at your location.'
    },
    {
        number: '03',
        title: 'Team Selection & Specialized Training',
        content: 'We select personnel whose skills match your environment—whether it is corporate etiquette for offices or robust vigilance for industrial gates. Before deployment, this team undergoes a site-specific briefing to ensure they understand your culture, safety rules, and emergency protocols.'
    },
    {
        number: '04',
        title: 'Deployment & Stabilization',
        content: 'On Day 1, our Operations Manager accompanies the team for a smooth handover. We ensure uniform compliance, equipment checks, and communication setup. The first week is treated as a "Stabilization Period" where we closely monitor performance and fine-tune our procedures based on real-time feedback.'
    },
    {
        number: '05',
        title: 'Continuous Monitoring & Improvement',
        content: 'Security is a living process. We conduct regular night checks, surprise audits, and monthly performance reviews with your administration. We actively seek feedback to upgrade our service delivery, ensuring that your security apparatus evolves to meet changing challenges.'
    }
]

export default function ServiceProcess() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row gap-16 items-start">

                    {/* Header Column */}
                    <div className="w-full md:w-1/3 md:sticky md:top-24 relative mb-12 md:mb-0">
                        <h2 className="text-blue-600 font-bold tracking-wide uppercase mb-4">Our Methodology</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            From Assessment <br />
                            <span className="text-slate-400">to Deployment</span>
                        </h3>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            We follow a structured 5-step lifecycle to ensure that the security we provide is robust, reliable, and exactly what you need.
                        </p>
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 mb-8">
                            <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                Quality Guarantee
                            </h4>
                            <p className="text-slate-500 text-sm">
                                Every deployment is backed by our 24/7 Command Center support and rapid response team.
                            </p>
                        </div>

                        <div className="hidden md:block">
                            <Link href="/contact">
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-blue-600/30 flex items-center justify-center gap-2 group">
                                    Get Your Free Quote
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Steps Column */}
                    <div className="w-full md:w-2/3">
                        <div className="space-y-12 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100">
                            {steps.map((step, index) => (
                                <div key={index} className="relative pl-16">
                                    {/* Number Bubble */}
                                    <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm border-4 border-white shadow-lg z-10">
                                        {step.number}
                                    </div>

                                    <h4 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h4>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        {step.content}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Mobile CTA */}
                        <div className="mt-12 md:hidden">
                            <Link href="/contact">
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-blue-600/30 flex items-center justify-center gap-2 group">
                                    Get Your Free Quote
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
