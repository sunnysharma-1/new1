'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Shield, Zap, Users, Eye, Lock, Radio, Activity, CheckCircle2, ArrowUpRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function FeaturesSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Grid Items
      const items = document.querySelectorAll('.bento-item')

      gsap.from(items, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-slate-50 relative overflow-hidden">

      {/* Background Tech Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            Why Choose Axis
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            The Strategic <span className="text-blue-600">Advantage</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl">
            We don't just supply guards; we engineer safety. Our integrated approach combines elite manpower with next-gen intelligence for complete operational dominance.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-auto gap-6 h-auto">

          {/* Item 1: Large Hero (Command Center) */}
          <div className="bento-item group md:col-span-2 md:row-span-2 relative h-[500px] md:h-auto rounded-[2rem] overflow-hidden bg-slate-900 text-white shadow-xl">
            <div className="absolute inset-0">
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80" alt="Command Center" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            </div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-blue-600/30">
                <Radio className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold mb-3">24/7 Command Center</h3>
              <p className="text-slate-300 leading-relaxed mb-6">Real-time surveillance, rapid dispatch, and constant communication channels ensuring zero downtime in your security coverage.</p>
              <div className="flex items-center gap-2 text-blue-400 font-mono text-sm uppercase tracking-wider">
                <Activity className="w-4 h-4 animate-pulse" /> Live Monitoring Active
              </div>
            </div>
          </div>

          {/* Item 2: Technology (Tall) */}
          <div className="bento-item group md:col-span-1 md:row-span-2 relative h-[400px] md:h-auto rounded-[2rem] bg-white p-8 shadow-sm border border-slate-100 hover:border-blue-200 transition-colors flex flex-col justify-between overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
            <div>
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Next-Gen Tech</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Seamless integration of AI analytics, drone surveillance, and biometric access control.
              </p>
            </div>
            <div className="mt-8 border-t border-slate-100 pt-6">
              <ul className="space-y-3">
                {['AI Detection', 'Cloud Reports', 'Bio-Metrics'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Item 3: Training (Standard) */}
          <div className="bento-item group relative h-[240px] rounded-[2rem] bg-white p-8 shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Users className="w-6 h-6" />
              </div>
              <ArrowUpRight className="w-6 h-6 text-slate-300 group-hover:text-blue-600 transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Elite Personnel</h3>
            <p className="text-slate-500 text-sm">Veterans and specialists trained in conflict resolution.</p>
          </div>

          {/* Item 4: Compliance (Standard) */}
          <div className="bento-item group relative h-[240px] rounded-[2rem] bg-white p-8 shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Shield className="w-6 h-6" />
              </div>
              <ArrowUpRight className="w-6 h-6 text-slate-300 group-hover:text-blue-600 transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">100% Compliant</h3>
            <p className="text-slate-500 text-sm">Fully licensed, insured, and verified for your peace of mind.</p>
          </div>

          {/* Item 5: Wide Info (Bottom) */}
          <div className="bento-item group md:col-span-2 lg:col-span-2 relative h-[240px] rounded-[2rem] bg-slate-900 overflow-hidden flex items-center">
            <div className="absolute inset-0 bg-blue-600/10" />
            <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" />

            <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 text-white w-full">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Custom Threat Assessment</h3>
                <p className="text-slate-300 text-sm">Every contract begins with a rigorous site analysis to identify vulnerabilities.</p>
              </div>
              <button className="px-6 py-3 bg-white text-slate-900 rounded-xl font-bold hover:bg-blue-50 transition-colors flex items-center gap-2 whitespace-nowrap">
                Get Assessed <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
