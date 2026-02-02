'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Shield, Zap, Users, Radio, CheckCircle2, Award, Headphones, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    id: 1,
    title: 'Smart Tech Integration',
    description: 'We use smart, easy-to-use tech for consistent operations. Digital attendance, shift tracking, and patrol validation cut down on gaps and boost discipline with clear audit logs.',
    icon: Zap,
    color: 'bg-blue-600',
    image: 'https://images.unsplash.com/photo-1557804506-669714d2e9d8?w=800&q=80'
  },
  {
    id: 2,
    title: 'Rigorous Training',
    description: 'Training is the core of our standards. Each recruit goes through a structured program focusing on discipline, alertness, fire safety, and emergency response before deployment.',
    icon: Users,
    color: 'bg-indigo-600',
    image: 'https://images.unsplash.com/photo-1571844299884-deef36c3e4e7?w=800&q=80'
  },
  {
    id: 3,
    title: 'Transparent Accountability',
    description: 'We keep incident reports structured and records maintained. Regular performance summaries help us spot problems early and fix things quickly without complications.',
    icon: Award,
    color: 'bg-violet-600',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80'
  },
  {
    id: 4,
    title: 'Active Supervision',
    description: 'Our operational excellence ensures consistency through defined procedures, smart monitoring, and surprise inspections to maintain service quality.',
    icon: Radio,
    color: 'bg-emerald-600',
    image: 'https://images.unsplash.com/photo-1626081395982-1e96a461c28c?w=800&q=80'
  },
]

export default function FeaturesSection() {
  const componentRef = useRef(null)
  const leftColRef = useRef(null)
  const rightColRef = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {

      // Desktop Pinning Animation
      const isDesktop = window.matchMedia('(min-width: 1024px)').matches

      if (isDesktop) {
        // Pin the left column while keeping right column scrollable
        // Actually, pure CSS sticky often works smoother for simple column pinning, 
        // but we'll use GSAP for the entry animations of the cards to sync visuals.

        const cards = gsap.utils.toArray('.feature-card')

        cards.forEach((card: any, i) => {
          gsap.fromTo(card,
            {
              opacity: 0,
              y: 50,
              scale: 0.95
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'top 50%',
                toggleActions: 'play none none reverse',
                scrub: true
              }
            }
          )
        })
      }

    }, componentRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="features" ref={componentRef} className="relative bg-white text-slate-900">

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

          {/* Left Column - Sticky Header */}
          <div className="lg:w-1/3 lg:h-screen lg:sticky lg:top-0 py-12 lg:py-24 flex flex-col justify-center">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold tracking-wide uppercase mb-6 w-fit">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              Why Axis Stands Out
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Commitment to <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Continuous Improvement</span>
            </h2>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-8 max-w-md">
              We integrate ourselves as a trusted, reliable, and highly responsive partner dedicated to maintaining a secure and productive environment for our clients.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <Award className="w-5 h-5" />
                </div>
                <span className="font-semibold text-slate-700">Award-Winning Service</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <Headphones className="w-5 h-5" />
                </div>
                <span className="font-semibold text-slate-700">Dedicated Support Manager</span>
              </div>
            </div>

            <button className="mt-10 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-blue-600 transition-colors w-fit flex items-center gap-2 group">
              Start Your Transition
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

          </div>

          {/* Right Column - Scrollable Content */}
          <div ref={rightColRef} className="lg:w-2/3 py-12 lg:py-24 flex flex-col gap-12 lg:gap-24">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={feature.id} className="feature-card sticky top-24 bg-white rounded-[2.5rem] p-2 shadow-2xl border border-slate-100 overflow-hidden group">
                  <div className="relative rounded-[2rem] overflow-hidden bg-slate-900 aspect-video md:aspect-[2/1] lg:aspect-[16/9]">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                      <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg text-white`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-slate-200 text-lg leading-relaxed max-w-2xl">{feature.description}</p>
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
