'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Shield, Users, Eye, Lock, User, Monitor, ChevronRight, Car, Calendar, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function ServicesSection() {
  const sectionRef = useRef(null)
  const wrapperRef = useRef(null)
  const containerRef = useRef(null)
  const [activeCard, setActiveCard] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollContainer = containerRef.current
      const wrapper = wrapperRef.current

      // Calculate total width to scroll
      const getScrollAmount = () => {
        let scrollWidth = scrollContainer.scrollWidth
        return -(scrollWidth - wrapper.offsetWidth)
      }

      // Main Horizontal Scroll
      gsap.to(scrollContainer, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: wrapper,
          start: 'top top',
          end: () => `+=${getScrollAmount() * -1}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Update active card based on scroll progress
            const totalCards = services.length
            const index = Math.round(self.progress * (totalCards - 1))
            setActiveCard(index)
          }
        },
      })

      // Card Animations on entrance
      const cards = document.querySelectorAll('.service-card')
      cards.forEach((card, i) => {
        gsap.fromTo(card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: wrapper,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            },
            delay: i * 0.1
          }
        )
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const services = [
    {
      number: '01',
      title: 'Security Officer',
      description: 'Elite security personnel delivering executive protection and corporate security with advanced threat assessment capabilities.',
      icon: Shield,
      features: ['Executive Protection', 'Threat Assessment'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80'
    },
    {
      number: '02',
      title: 'Security Supervisor',
      description: 'Senior operational leaders ensuring strict compliance, quality control, and rapid incident response across all sites.',
      icon: Eye,
      features: ['Operational Leadership', 'Compliance Audits'],
      image: 'https://images.unsplash.com/photo-1557804506-669714d2e9d8?w=800&h=600&fit=crop&q=80'
    },
    {
      number: '03',
      title: 'Security Guard',
      description: 'Vigilant 24/7 premises protection with strict access control protocols for residential and commercial assets.',
      icon: Users,
      features: ['Access Control', '24/7 Vigilance'],
      image: 'https://images.unsplash.com/photo-1552058544-f6b08422138a?w=800&h=600&fit=crop&q=80'
    },
    {
      number: '04',
      title: 'Gun Man / Armed',
      description: 'Licensed specialists for high-risk environments, offering maximum deterrence and immediate tactical response.',
      icon: Lock,
      features: ['High-Risk Security', 'Tactical Response'],
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop&q=80'
    },
    {
      number: '05',
      title: 'Lady Guard',
      description: 'Specialized personnel for sensitive environments, combining rigorous security training with exceptional public relations skills.',
      icon: User,
      features: ['Sensitive Areas', 'Public Relations'],
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=600&fit=crop&q=80'
    },
    {
      number: '06',
      title: '24/7 Monitoring',
      description: 'Advanced command center integration for real-time surveillance, alarm verification, and emergency dispatch.',
      icon: Monitor,
      features: ['Remote Surveillance', 'Emergency Dispatch'],
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop&q=80'
    },
    {
      number: '07',
      title: 'Mobile Patrol',
      description: 'Dynamic roving security units providing random inspections and rapid alarm response for large properties.',
      icon: Car,
      features: ['Random Patrols', 'Rapid Response'],
      image: 'https://images.unsplash.com/photo-1626081395982-1e96a461c28c?w=800&h=600&fit=crop&q=80'
    },
    {
      number: '08',
      title: 'Event Security',
      description: 'Comprehensive crowd management and VIP safety for corporate events, concerts, and private gatherings.',
      icon: Calendar,
      features: ['Crowd Control', 'VIP Safety'],
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&q=80'
    },
  ]

  return (
    <section ref={sectionRef} className="relative bg-slate-50">
      <div ref={wrapperRef} className="h-screen w-full flex flex-col justify-center overflow-hidden relative">

        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent opacity-70" />

        <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10 mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3 block">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Comprehensive <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Security Solutions</span>
              </h2>
            </div>

            {/* Progress Indicator */}
            <div className="hidden md:flex flex-col items-end gap-2">
              <div className="text-3xl font-bold text-slate-900">
                {String(activeCard + 1).padStart(2, '0')}<span className="text-slate-300 text-xl">/{String(services.length).padStart(2, '0')}</span>
              </div>
              <div className="w-32 h-1 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 transition-all duration-300 ease-out"
                  style={{ width: `${((activeCard + 1) / services.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          ref={containerRef}
          className="flex gap-6 md:gap-8 px-4 md:px-6 lg:px-12 w-max pb-12 pt-4"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="service-card group relative w-[320px] md:w-[400px] flex-shrink-0"
              >
                <div className="relative h-[480px] rounded-[2rem] overflow-hidden bg-white shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl border border-slate-100">

                  {/* Image Background with Parallax effect on hover could be added here, currently purely visual */}
                  <div className="absolute inset-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/90" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">

                    {/* Top Badge */}
                    <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-blue-600 transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                      <span className="text-white/60 font-mono text-sm mb-2 block">{service.number}</span>
                      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                      <p className="text-white/80 leading-relaxed mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {service.features.map((feature, idx) => (
                          <span key={idx} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/10 text-xs font-medium">
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
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
