'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star, Quote } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function TestimonialsSection() {
    const sectionRef = useRef(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Horizontal Scroll for Testimonials
            const container = containerRef.current
            if (container) {
                const totalWidth = container.scrollWidth
                const visibleWidth = container.offsetWidth

                if (totalWidth > visibleWidth) {
                    gsap.to(container, {
                        x: () => -(totalWidth - visibleWidth),
                        ease: 'none',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: 1,
                        }
                    })
                }
            }

        }, sectionRef)
        return () => ctx.revert()
    }, [])

    const testimonials = [
        {
            name: 'Robert Fox',
            role: 'Director of Operations, TechCorp',
            content: 'Axis Security has completely transformed our approach to corporate safety. Their officers are not just guards; they are highly trained professionals who integrate seamlessly with our team.',
            rating: 5,
        },
        {
            name: 'Sarah Jenkins',
            role: 'Event Manager, City Hall',
            content: 'For our high-profile events, we only trust Axis. Their ability to manage large crowds while maintaining a VIP experience for our guests is unmatched in the industry.',
            rating: 5,
        },
        {
            name: 'Michael Chen',
            role: 'HOA President, Skyline Heights',
            content: 'The 24/7 monitoring and mobile patrol services have virtually eliminated security incidents in our community. The peace of mind they provide is priceless.',
            rating: 5,
        },
        {
            name: 'Amanda Lowery',
            role: 'CEO, Nexus Logistics',
            content: 'Professional, reliable, and responsive. Their threat assessment saved us from a potential breach last year. I highly recommend their elite protection services.',
            rating: 5,
        },
    ]

    return (
        <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-6">
                    Trusted by Industry Leaders
                </h2>
                <p className="text-center text-slate-600 max-w-2xl mx-auto">
                    Our reputation is built on specific, measurable results and long-term partnerships with our clients.
                </p>
            </div>

            <div className="relative w-full">
                <div
                    ref={containerRef}
                    className="flex gap-8 px-4 w-max mx-auto"
                >
                    {testimonials.concat(testimonials).map((testimonial, i) => (
                        <div
                            key={i}
                            className="w-[400px] flex-shrink-0 bg-slate-50 p-8 rounded-2xl border border-slate-100 relative group hover:border-blue-100 hover:shadow-lg transition-all"
                        >
                            <Quote className="absolute top-8 right-8 text-blue-100 group-hover:text-blue-500 transition-colors w-10 h-10" />
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                ))}
                            </div>
                            <p className="text-slate-700 italic mb-8 leading-relaxed">
                                "{testimonial.content}"
                            </p>
                            <div>
                                <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                                <p className="text-sm text-slate-500">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
