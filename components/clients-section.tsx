'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Building2, Factory, ShoppingBag, Home, HardHat, HeartPulse, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const industries = [
    {
        title: 'Industrial & Manufacturing',
        description: 'Robust security for operational continuity. We protect assets, monitor material transit, and secure perimeters against unauthorized access.',
        icon: Factory,
        image: '/images/apex-team-trees.jpg',
        color: 'from-blue-600 to-blue-400'
    },
    {
        title: 'Corporate & Offices',
        description: 'Seamless integration of safety and hospitality. Our personnel manage visitor access and maintain a professional front-desk presence.',
        icon: Building2,
        image: '/images/apex-office-staff.jpg',
        color: 'from-indigo-600 to-indigo-400'
    },
    {
        title: 'Warehousing & Logistics',
        description: 'Zero-tolerance for inventory loss. We implement strict gate controls, vehicle checks, and anti-theft protocols for high-value monitoring.',
        icon: ShoppingBag,
        image: '/images/apex-warehouse-patrol.jpg',
        color: 'from-violet-600 to-violet-400'
    },
    {
        title: 'Medical & Healthcare',
        description: 'Compassionate vigilance. We ensure the safety of patients and staff while maintaining a calm and healing environment.',
        icon: HeartPulse,
        image: '/images/apex-hero-group.jpg',
        color: 'from-emerald-600 to-emerald-400'
    },
    {
        title: 'Construction Sites',
        description: 'Protecting progress. Our teams secure equipment, prevent vandalism, and ensure safety compliance on active building sites.',
        icon: HardHat,
        image: '/images/apex-building-lineup.jpg',
        color: 'from-amber-600 to-amber-400'
    },
    {
        title: 'Residential & Gated',
        description: 'Peace of mind for families. We provide 24/7 gate management, patrol validation, and quick emergency response for communities.',
        icon: Home,
        image: '/images/apex-salute-group-2.jpg',
        color: 'from-rose-600 to-rose-400'
    }
]

export default function ClientsSection() {
    const containerRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.industry-card', {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%',
                }
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className="py-32 bg-slate-950 text-white overflow-hidden relative">

            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">Sectors We Protect</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                            Industries <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">We Serve</span>
                        </h2>
                    </div>
                    <p className="text-slate-400 max-w-lg text-lg leading-relaxed border-l-2 border-slate-800 pl-6">
                        Axis security solutions are not generic. We adapt our strategies to the unique pulse and risks of every industry we enter.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <div key={index} className="industry-card group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer">
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/40 transition-colors duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90" />
                                </div>

                                {/* Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500`}>
                                        <Icon className="w-7 h-7" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                        {item.title}
                                    </h3>

                                    <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-in-out">
                                        <p className="text-slate-300 leading-relaxed text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                                            {item.description}
                                        </p>
                                        <div className="flex items-center gap-2 text-blue-400 font-bold text-sm tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                            View Details <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
