'use client'

import { Shield, Target, Users, Settings, BookOpen, UserCheck } from 'lucide-react'

const features = [
    {
        icon: BookOpen,
        title: 'Rigorous Training Academy',
        description: 'Our training goes far beyond the basics. Every recruit undergoes an intensive 30-day program that covers physical conditioning, fire safety protocols, first aid certification, and soft-skills management. We simulate real-world emergency scenarios to ensure our guards can handle high-pressure situations with composure and authority. This foundational preparation is non-negotiable and sets the standard for our entire workforce.'
    },
    {
        icon: UserCheck,
        title: '3-Layer Supervision System',
        description: 'We believe that consistent quality requires consistent oversight. Axis employs a unique 3-layer supervision structure: On-site Post Commanders, Area Field Supervisors, and Night Patrol Managers. This ensures that every site is checked multiple times during a 24-hour cycle. Our supervisors do not just monitor; they mentor our guards, correct deficiencies immediately, and ensure that the "Axis Standard" is visible in every interaction.'
    },
    {
        icon: Settings,
        title: 'Customized SOPs per Client',
        description: 'Security is not a one-size-fits-all solution. For every new contract, our operations team conducts a full site survey to draft customized Standard Operating Procedures (SOPs). Whether it is a corporate office requiring strict visitor management or an industrial plant needing material transit logs, we tailor our instructions to your specific risks. These SOPs are documented, taught to the deployed team, and regularly reviewed.'
    },
    {
        icon: Target,
        title: 'Digital Accountability',
        description: 'Transparency is key to trust. We utilize modern digital reporting tools that allow our clients to see attendance, incident reports, and patrol logs in real-time. Our guards use GPS-enabled devices to verify patrols, ensuring no corner is left unchecked. This data-driven approach removes ambiguity and allows us to provide you with detailed performance summaries every month.'
    },
    {
        icon: Shield,
        title: 'Emergency Response Readiness',
        description: 'Prevention is our priority, but reaction is our strength. Our teams are trained to act as the first line of defense during crises. From fire evacuation leadership to medical first response, Axis personnel are equipped with the knowledge to minimize harm until official authorities arrive. We conduct regular mock drills at client sites to keep this muscle memory sharp and effective.'
    },
    {
        icon: Users,
        title: 'Recruitment & Verification',
        description: 'A secure site starts with a secure team. Our recruitment process is stringent, involving multi-stage background checks, police verification, and past employment screening. We prioritize hiring individuals with a disciplined background. By ensuring the integrity of our own workforce, we guarantee the integrity of the security we provide to you.'
    }
]

export default function ServiceFeatures() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-blue-600 font-bold tracking-wide uppercase mb-4">Operational Excellence</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Why Axis delivers better protection</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        We believe that true security lies in the details. From how we hire to how we report, every step of our process is designed to give you complete peace of mind.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon
                        return (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col items-start group">
                                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                                    <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h4>
                                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                                    {feature.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
