'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Award,
  Briefcase,
  Clock,
  Users,
  TrendingUp,
  Zap,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import { Card } from '@/components/ui/card'

gsap.registerPlugin(ScrollTrigger)

export default function WhyChooseUs() {
  const sectionRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animated stat counters
      const statNumbers = document.querySelectorAll('.stat-number')
      statNumbers.forEach((stat) => {
        const target = parseInt(stat.getAttribute('data-target') || '0')
        const isPercentage = stat.getAttribute('data-type') === 'percentage'
        
        gsap.to(stat, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            once: true,
          },
          textContent: target,
          duration: 2.5,
          ease: 'power2.out',
          snap: { textContent: 1 },
          onUpdate: function() {
            const current = Math.floor(this.targets()[0].textContent)
            stat.textContent = isPercentage ? current + '%' : current + '+'
          },
        })
      })

      // Staggered cards entrance
      const reasons = document.querySelectorAll('.reason-item')
      gsap.fromTo(
        reasons,
        {
          opacity: 0,
          y: 40,
          scale: 0.9,
        },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            once: false,
          },
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          duration: 0.7,
          ease: 'power3.out',
        }
      )

      // Hover effects with advanced animations
      reasons.forEach((card) => {
        const icon = card.querySelector('.reason-icon')
        const content = card.querySelector('.reason-content')

        card.addEventListener('mouseenter', () => {
          gsap.to(icon, {
            scale: 1.2,
            y: -8,
            duration: 0.5,
            ease: 'back.out(1.5)',
          })
          gsap.to(content, {
            y: -6,
            duration: 0.4,
            ease: 'power2.out',
          })
          gsap.to(card, {
            boxShadow: '0 30px 60px rgba(30, 58, 138, 0.15)',
            duration: 0.4,
          })
        })

        card.addEventListener('mouseleave', () => {
          gsap.to(icon, {
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
          })
          gsap.to(content, {
            y: 0,
            duration: 0.4,
            ease: 'power2.out',
          })
          gsap.to(card, {
            boxShadow: '0 10px 25px rgba(30, 58, 138, 0.06)',
            duration: 0.4,
          })
        })
      })

      // Stat cards entrance
      const statCards = document.querySelectorAll('.stat-card')
      gsap.fromTo(
        statCards,
        {
          opacity: 0,
          x: -50,
        },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
            once: false,
          },
          opacity: 1,
          x: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const reasons = [
    {
      icon: Award,
      title: '15+ Years Experience',
      description:
        'Over a decade and a half of proven expertise in delivering security solutions',
      color: 'from-primary to-blue-600',
    },
    {
      icon: Users,
      title: '1000+ Trained Officers',
      description:
        'Comprehensive training ensures our personnel meet the highest industry standards',
      color: 'from-secondary to-cyan-600',
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description:
        'Round-the-clock monitoring and support for your continuous peace of mind',
      color: 'from-orange-400 to-orange-600',
    },
    {
      icon: Briefcase,
      title: 'Professional Team',
      description:
        'Area managers and supervisors ensuring consistent quality and performance',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: TrendingUp,
      title: 'Cost-Effective Solutions',
      description:
        'Transparent pricing with no hidden charges. Maximum value for your investment',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: Zap,
      title: 'Advanced Technology',
      description:
        'State-of-the-art surveillance and monitoring systems for enhanced security',
      color: 'from-indigo-500 to-blue-600',
    },
  ]

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="relative py-32 px-4 overflow-hidden"
    >
      {/* Premium background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-blue-50/30" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-bl from-primary/8 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl" />

      <div className="relative container mx-auto max-w-7xl">
        {/* Hero Stats Section */}
        <div ref={containerRef} className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <div className="stat-card group p-8 bg-white rounded-2xl border border-slate-200/50 text-center hover:border-primary/30 transition-all duration-300" style={{ boxShadow: '0 10px 25px rgba(30, 58, 138, 0.06)' }}>
              <div className="mb-4">
                <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-4 opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="stat-number text-5xl md:text-6xl font-bold text-primary mb-2" data-target="500">
                0+
              </div>
              <p className="text-slate-600 font-medium">Trusted Clients Worldwide</p>
              <p className="text-sm text-slate-500 mt-2">Industry-leading partnerships</p>
            </div>

            <div className="stat-card group p-8 bg-white rounded-2xl border border-slate-200/50 text-center hover:border-primary/30 transition-all duration-300" style={{ boxShadow: '0 10px 25px rgba(30, 58, 138, 0.06)' }}>
              <div className="mb-4">
                <TrendingUp className="w-10 h-10 text-accent mx-auto mb-4 opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="stat-number text-5xl md:text-6xl font-bold text-accent mb-2" data-target="100" data-type="percentage">
                0%
              </div>
              <p className="text-slate-600 font-medium">Client Satisfaction Rate</p>
              <p className="text-sm text-slate-500 mt-2">Exceeds expectations consistently</p>
            </div>

            <div className="stat-card group p-8 bg-white rounded-2xl border border-slate-200/50 text-center hover:border-primary/30 transition-all duration-300" style={{ boxShadow: '0 10px 25px rgba(30, 58, 138, 0.06)' }}>
              <div className="mb-4">
                <Users className="w-10 h-10 text-secondary mx-auto mb-4 opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="stat-number text-5xl md:text-6xl font-bold text-secondary mb-2" data-target="1000">
                0+
              </div>
              <p className="text-slate-600 font-medium">Trained Security Personnel</p>
              <p className="text-sm text-slate-500 mt-2">Certified and continuously upskilled</p>
            </div>
          </div>

          {/* Why Choose Us - Core Reasons */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Why Enterprise Leaders Choose Us
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We deliver comprehensive security solutions backed by proven expertise, advanced technology, and an unwavering commitment to excellence
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <div
                  key={index}
                  className="reason-item group relative overflow-hidden rounded-2xl bg-white border border-slate-200/50 p-6 transition-all duration-300 hover:border-primary/20 cursor-pointer"
                  style={{
                    boxShadow: '0 10px 25px rgba(30, 58, 138, 0.06)',
                  }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/2 via-transparent to-primary/0 group-hover:from-primary/4 group-hover:via-primary/2 group-hover:to-primary/0 transition-all duration-500 pointer-events-none" />

                  <div className="relative">
                    {/* Icon */}
                    <div className="reason-icon mb-5 inline-flex">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="reason-content">
                      <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight">
                        {reason.title}
                      </h3>

                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {reason.description}
                      </p>

                      {/* CTA Link */}
                      <div className="flex items-center gap-2 text-primary font-semibold text-sm opacity-70 group-hover:opacity-100 transition-all duration-300">
                        <span>Learn more</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
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
