'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Shield, Users, Eye, Lock, User, Monitor, ChevronRight, Car, Calendar, ArrowRight, Radio } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeCard, setActiveCard] = useState(0)

  // 3D Tilt Effect Hook-like logic
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -10 // Max rotation deg
    const rotateY = ((x - centerX) / centerX) * 10

    gsap.to(card, {
      duration: 0.5,
      rotateX: rotateX,
      rotateY: rotateY,
      scale: 1.05,
      ease: 'power2.out',
      transformPerspective: 1000,
      transformOrigin: 'center'
    })

    // Move the glow effect
    const glow = card.querySelector('.glow-effect')
    if (glow) {
      gsap.to(glow, {
        duration: 0.5,
        x: x,
        y: y,
        ease: 'power2.out'
      })
    }
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      duration: 0.8,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      ease: 'elastic.out(1, 0.5)'
    })
  }

  useEffect(() => {
    const mm = gsap.matchMedia()

    const ctx = gsap.context(() => {
      // Desktop Animation (Horizontal Scroll)
      mm.add("(min-width: 1024px)", () => {
        const scrollContainer = containerRef.current
        const wrapper = wrapperRef.current

        if (!scrollContainer || !wrapper) return

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
            { y: 100, opacity: 0, rotateX: 45 },
            {
              y: 0,
              opacity: 1,
              rotateX: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: wrapper,
                start: 'top 70%',
                toggleActions: 'play none none reverse'
              },
              delay: i * 0.1
            }
          )
        })
      })

      // Mobile/Tablet Animation (Simple Fade In)
      mm.add("(max-width: 1023px)", () => {
        const cards = document.querySelectorAll('.service-card')
        cards.forEach((card) => {
          gsap.fromTo(card,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
              }
            }
          )
        })
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const services = [
    {
      number: '01',
      title: 'Manned Guarding',
      description: 'Our manned guarding service is built on a foundation of discipline and practical experience. All guards are rigorously trained in safety drills, fire response, first aid, and professional conduct. Guided by confidentiality and sound judgment, they provide a trustworthy presence that reduces risk and creates a safer environment for your people and property. We ensure active supervision and leadership-managed sites for consistent performance.',
      icon: Shield,
      features: ['Safety Drills', 'Fire Response', 'First Aid', 'Professional Conduct'],
      image: '/images/apex-march-side-2.jpg'
    },
    {
      number: '02',
      title: 'Industrial Security',
      description: 'We provide robust protection for industrial facilities, manufacturing plants, and warehousing centers. Our teams are trained to handle the specific challenges of these environments, including material transit monitoring, perimeter safety, and strict access control procedures. Our operational excellence ensures clear routines and smart monitoring to protect your assets and daily operations from disruption or theft.',
      icon: Eye,
      features: ['Material Transit', 'Perimeter Safety', 'Access Control', 'Asset Protection'],
      image: '/images/apex-warehouse-patrol.jpg'
    },
    {
      number: '03',
      title: 'Corporate Security',
      description: 'For corporate offices and commercial premises, Axis delivers a professional security solution that balances safety with courtesy. Our personnel manage visitor access, maintain audit logs, and conduct regular patrols to ensure a secure working environment. With a focus on professional communication and appearance, our team integrates seamlessly into your business operations while maintaining high vigilance.',
      icon: Users,
      features: ['Visitor Management', 'Audit Logs', 'Professionalism', 'Secure Environment'],
      image: '/images/apex-office-desk.jpg'
    },
    {
      number: '04',
      title: 'Event Security',
      description: 'For high-density or time-critical scenarios, we deploy specialized teams for large-scale events, exhibitions, and unique functions. Our comprehensive operational security covers crowd management, VIP safety, and rapid response coordination. We ensure efficient handling of large gatherings, maintaining order and safety throughout the duration of your event with a proactive and professional approach.',
      icon: Lock,
      features: ['Crowd Management', 'Large-Scale Events', 'VIP Safety', 'Rapid Response'],
      image: '/images/IMG_7199.JPG'
    },
    {
      number: '05',
      title: 'Tech Surveillance',
      description: 'Axis integrates smart, easy-to-use technology to keep security operations consistent and responsive. We use digital attendance, shift tracking, and patrol validation systems to boost discipline and cut down on gaps. By linking up with existing CCTV infrastructure, we strengthen our oversight and provide clear accountability through structured incident reports and regular performance summaries.',
      icon: Monitor,
      features: ['Digital Attendance', 'CCTV Integration', 'Patrol Validation', 'Incident Reports'],
      image: '/images/apex-building-lineup.jpg'
    },
    {
      number: '06',
      title: 'Residential Security',
      description: 'We offer dedicated security for residential complexes and gated communities, prioritizing the safety of families and residents. Our 24/7 patrol validation and check-in systems ensure that only authorized individuals enter the premises. With training in emergency response and first aid, our guards provide peace of mind and a quick reaction to any situation, creating a secure living environment.',
      icon: Radio,
      features: ['24/7 Patrols', 'Gated Community', 'Emergency Response', 'Resident Safety'],
      image: '/images/apex-salute-group-2.jpg'
    },
    {
      number: '07',
      title: 'Crisis Management',
      description: 'Our team is prepared for critical situations through specialized modules on fire safety, emergency response, and basic risk assessment. We conduct mock drills and real-life scenarios to ensure our personnel are ready for anything. This proactive approach allows us to reduce risk, handle emergencies with confidence, and continuously improve our service quality for your safety.',
      icon: Car,
      features: ['Fire Safety', 'Risk Assessment', 'Mock Drills', 'Emergency Readiness'],
      image: '/images/apex-parade-fog.jpg'
    }
  ]

  return (
    <section ref={sectionRef} className="relative bg-slate-950 py-16 md:py-24 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(17,24,39,1),_rgba(0,0,0,1))]" />
      <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

      {/* Glowing Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[128px] animate-pulse delay-1000" />

      <div ref={wrapperRef} className="lg:h-screen w-full flex flex-col justify-center overflow-hidden relative z-10">

        <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10 mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.6)]" />
                <span className="tracking-wide uppercase">Elite Protection Services</span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                Premium <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 animate-gradient-x">
                  Security Solutions
                </span>
              </h2>
            </div>

            {/* Progress Indicator - Desktop Only */}
            <div className="hidden lg:flex flex-col items-end gap-3">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-white tabular-nums">
                  {String(activeCard + 1).padStart(2, '0')}
                </span>
                <span className="text-slate-500 text-2xl">/</span>
                <span className="text-slate-500 text-2xl tabular-nums">{String(services.length).padStart(2, '0')}</span>
              </div>
              <div className="w-48 h-1.5 bg-slate-800 rounded-full overflow-hidden backdrop-blur-sm">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 ease-out shadow-[0_0_12px_rgba(59,130,246,0.5)]"
                  style={{ width: `${((activeCard + 1) / services.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div
          ref={containerRef}
          className="flex flex-col lg:flex-row gap-8 lg:gap-12 px-4 md:px-6 lg:px-24 w-full lg:w-max pb-16 pt-8 perspective-1000 items-center lg:items-center"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="service-card group relative w-full max-w-[420px] lg:w-[420px] flex-shrink-0"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Card Container */}
                <div className="relative h-[500px] md:h-[520px] rounded-[2.5rem] overflow-hidden bg-slate-900 border border-white/10 shadow-2xl transition-all duration-300">

                  {/* Glow cursor follower */}
                  <div className="glow-effect absolute w-32 h-32 bg-blue-500/30 rounded-full blur-[64px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-20 mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Image Background */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/60 to-slate-900/95" />
                  </div>

                  {/* Dynamic Border Gradient */}
                  <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 group-hover:border-white/20 transition-colors duration-300 z-10" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-white z-10">

                    {/* Top Icon Badge */}
                    <div className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500/50 group-hover:scale-110 transition-all duration-500 shadow-lg">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-white/80 group-hover:text-white transition-colors" />
                    </div>

                    <div className="transform transition-transform duration-500 translate-y-8 group-hover:translate-y-0">
                      <span className="text-blue-400 font-mono text-sm tracking-wider mb-3 block opacity-80 backdrop-blur-sm w-fit px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20">
                        SERVICE #{service.number}
                      </span>

                      <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight group-hover:text-blue-200 transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-slate-300 leading-relaxed mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300 text-sm md:text-base border-l-2 border-white/10 pl-4 group-hover:border-blue-500/50">
                        {service.description}
                      </p>

                      {/* Features Badges */}
                      <div className="flex flex-wrap gap-2 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 translate-y-4 group-hover:translate-y-0">
                        {service.features.map((feature, idx) => (
                          <span key={idx} className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-[10px] md:text-xs font-semibold text-white/90 shadow-lg">
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Action Button */}
                      <button className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors duration-300 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 delay-200">
                        <span className="border-b border-transparent group-hover:border-blue-500 pb-0.5">Explore Details</span>
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </button>
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

