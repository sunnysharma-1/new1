'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckCircle2, Shield, Eye, Users, Lock, User, Monitor, Car, Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function DetailedServiceList() {
    const containerRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const rows = document.querySelectorAll('.service-row')
            rows.forEach((row, index) => {
                const image = row.querySelector('.service-image')
                const content = row.querySelector('.service-content')
                const isOdd = index % 2 !== 0

                gsap.from(image, {
                    x: isOdd ? 50 : -50,
                    opacity: 0,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: row,
                        start: 'top 75%',
                    }
                })

                gsap.from(content, {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    delay: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: row,
                        start: 'top 75%',
                    }
                })
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    const services = [
        {
            id: 'officer',
            title: 'Security Officer',
            description: 'Our elite Security Officers are more than just guards; they are trained professionals capable of high-level decision making, threat assessment, and conflict de-escalation. Ideal for corporate headquarters and front-desk management.',
            icon: Shield,
            features: ['Concierge Security Services', 'Visitor Management', 'Incident Reporting', 'Emergency Response Leadership'],
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80'
        },
        {
            id: 'supervisor',
            title: 'Security Supervisor',
            description: 'The backbone of our field operations. Security Supervisors ensure that all protocols are followed, guards are alert, and clients are satisfied. They conduct regular site inspections and provide real-time reporting.',
            icon: Eye,
            features: ['Site Inspections', 'Staff Training & Mentoring', 'Compliance Audits', '24/7 Operational Support'],
            image: 'https://images.unsplash.com/photo-1557804506-669714d2e9d8?w=800&h=600&fit=crop&q=80'
        },
        {
            id: 'guard',
            title: 'Security Guard',
            description: 'Our uniformed Security Guards provide a visible deterrent to crime and a sense of safety for residents and employees. Trained in patrol techniques and access control, they are the first line of defense.',
            icon: Users,
            features: ['Perimeter Patrols', 'Access Control', 'Asset Protection', 'Daily Activity Reports'],
            image: 'https://images.unsplash.com/photo-1552058544-f6b08422138a?w=800&h=600&fit=crop&q=80'
        },
        {
            id: 'armed',
            title: 'Gun Man / Armed Security',
            description: 'For environments requiring the highest level of protection, our Armed Security personnel are licensed, psychologically screened, and expertly trained in firearms safety and tactical response.',
            icon: Lock,
            features: ['High-Value Asset Protection', 'Financial Institution Security', 'Tactical Response', 'Deterrence against Violent Threats'],
            image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop&q=80'
        },
        {
            id: 'lady-guard',
            title: 'Lady Guard',
            description: 'Specialized security for environments where sensitivity and soft skills are paramount. Our Lady Guards combine rigorous security training with exceptional public relations capabilities, perfect for schools, hospitals, and retail.',
            icon: User,
            features: ['Frisking & Screening', 'Sensitive Area Security', 'Events & Hospitality', 'Conflict Resolution'],
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=600&fit=crop&q=80'
        },
        {
            id: 'monitoring',
            title: '24/7 Monitoring',
            description: 'Our state-of-the-art Command Center never sleeps. We integrate with your CCTV and alarm systems to provide real-time virtual guarding, ensuring rapid police dispatch when seconds count.',
            icon: Monitor,
            features: ['Virtual Patrols', 'Alarm Verification', 'Video Analytics', 'Remote Access Management'],
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop&q=80'
        },
        {
            id: 'event',
            title: 'Event Security',
            description: 'From crowd control to VIP escorts, we ensure your event runs smoothly without safety concerns. Our team plans security logistics, coordinates with local law enforcement, and manages entry points.',
            icon: Calendar,
            features: ['Crowd Management', 'Ticket Verification', 'VIP Protection', 'Emergency Evacuation Planning'],
            image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&q=80'
        },
    ]

    return (
        <section ref={containerRef} className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-7xl space-y-32">
                {services.map((service, index) => {
                    const isEven = index % 2 === 0
                    const Icon = service.icon

                    return (
                        <div key={service.id} id={service.id} className={`service-row flex flex-col items-center gap-12 lg:gap-20 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>

                            {/* Image Side */}
                            <div className="service-image w-full lg:w-1/2 relative group">
                                <div className={`absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl transform ${isEven ? '-rotate-3 translate-x-4' : 'rotate-3 -translate-x-4'} opacity-10 transition-transform duration-500 group-hover:rotate-0 group-hover:translate-x-0`} />
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Overlay Badge */}
                                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur list-none p-4 rounded-xl shadow-lg">
                                        <Icon className="w-8 h-8 text-blue-600" />
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="service-content w-full lg:w-1/2 space-y-8">
                                <div>
                                    <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2 block">Service {(index + 1).toString().padStart(2, '0')}</span>
                                    <h2 className="text-4xl font-bold text-slate-900 mb-6">{service.title}</h2>
                                    <p className="text-lg text-slate-600 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100 hover:bg-blue-50 hover:border-blue-100 transition-colors">
                                            <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                            <span className="font-medium text-slate-800 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-4">
                                    <Link href="/#contact">
                                        <button className="flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all group">
                                            Request Quote for {service.title}
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
        </section>
    )
}
