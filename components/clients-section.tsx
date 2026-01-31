'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Building2 } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const clients = [
    { name: 'Alok Rub Plast Pvt Ltd', location: 'Dadra & Nagar Haveli' },
    { name: 'Bhoomi Yarns Pvt Ltd', location: 'Dadra & Nagar Haveli' },
    { name: 'Silvassa Bottling', location: 'Dadra & Nagar Haveli' },
    { name: 'Kisan Group of Inds', location: 'Dadra & Nagar Haveli' },
    { name: 'Kisan Moulding Ltd', location: 'Boisar, Maharashtra' },
    { name: 'Visen Industries Ltd', location: 'Jammu & Kashmir' },
    { name: 'Visen Industries Ltd', location: 'Chennai, Tamil Nadu' },
    { name: 'Gammon India Ltd', location: 'India' },
    { name: 'Charak Pharma (Dabur India)', location: 'India' },
    { name: 'Hunter Douglas Ltd', location: 'India' },
]

export default function ClientsSection() {
    const containerRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.client-card', {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                }
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Trusted by Industry Leaders</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        We are proud to secure the assets and operations of prestigious organizations across India.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {clients.map((client, index) => (
                        <div key={index} className="client-card bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                                <Building2 className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 leading-snug mb-1">{client.name}</h3>
                                <p className="text-sm text-slate-500">{client.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
