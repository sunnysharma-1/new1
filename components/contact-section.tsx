'use client'

import { useRef, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, ArrowRight, Send } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Floating Label Input Component
const FloatingInput = ({ label, type = 'text', placeholder = '' }: { label: string, type?: string, placeholder?: string }) => {
  const [focused, setFocused] = useState(false)
  const [value, setValue] = useState('')

  return (
    <div className="relative group">
      <input
        type={type}
        className={`w-full bg-white/5 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white outline-none transition-all duration-300 focus:bg-white/10 focus:border-blue-500/50 ${value ? 'filled' : ''}`}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <label
        className={`absolute left-4 transition-all duration-300 pointer-events-none text-slate-400
          ${focused || value ? 'top-2 text-xs text-blue-400' : 'top-4 text-base'}
        `}
      >
        {label}
      </label>
      <div className={`absolute bottom-0 left-1/2 h-[1px] bg-blue-500 transition-all duration-500 -translate-x-1/2 ${focused ? 'w-full opacity-100' : 'w-0 opacity-0'}`} />
    </div>
  )
}

export default function ContactSection() {
  const sectionRef = useRef(null)
  const formRef = useRef<HTMLDivElement>(null)

  // 3D Tilt Logic
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!formRef.current) return
    const card = formRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Rotate values
    const rotateX = ((y - centerY) / centerY) * -5
    const rotateY = ((x - centerX) / centerX) * 5

    gsap.to(card, {
      duration: 0.5,
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 1000,
      ease: 'power2.out'
    })
  }

  const handleMouseLeave = () => {
    if (!formRef.current) return
    gsap.to(formRef.current, {
      duration: 1,
      rotateX: 0,
      rotateY: 0,
      ease: 'elastic.out(1, 0.5)'
    })
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Particle/Orb Animation
      gsap.to('.floating-orb', {
        y: 'random(-50, 50)',
        x: 'random(-50, 50)',
        duration: 'random(5, 10)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
          amount: 5,
          from: 'random'
        }
      })

      // Content Entrance
      gsap.from('.contact-reveal', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-slate-950 text-white relative overflow-hidden min-h-screen flex items-center">

      {/* Dynamic Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="floating-orb absolute rounded-full bg-blue-500/5 blur-xl"
            style={{
              width: Math.random() * 300 + 50 + 'px',
              height: Math.random() * 300 + 50 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Column: Info */}
          <div className="space-y-12">
            <div className="contact-reveal">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800/50 text-blue-400 text-sm font-semibold mb-6 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                24/7 Support Available
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
                Let's Build Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                  Security Shield
                </span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-lg border-l-2 border-slate-800 pl-6">
                Connect with our elite security consultants. We analyze, strategize, and deploy comprehensive protection tailored to your world.
              </p>
            </div>

            <div className="space-y-8 contact-reveal">
              {[
                { icon: Phone, title: 'Direct Line', content: '+91 99981 87871', sub: 'Available 24/7' },
                { icon: Mail, title: 'Email Us', content: 'info@rangerss.in', sub: 'Priority Response Team' },
                { icon: MapPin, title: 'Headquarters', content: 'Ground Floor, Vee Bee Mall', sub: 'Samarvarni Road, Tokarkhada, Silvassa-396230, D&NH' }
              ].map((item, idx) => (
                <div key={idx} className="group flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300 shadow-lg group-hover:scale-110 group-hover:shadow-blue-600/25">
                    <item.icon className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{item.title}</h4>
                    <p className="text-slate-300 font-medium">{item.content}</p>
                    <p className="text-slate-500 text-sm mt-1">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Form */}
          <div
            className="contact-reveal perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              ref={formRef}
              className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group transform-style-3d transition-transform will-change-transform"
            >
              {/* Glow Effect inside card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              <h3 className="text-3xl font-bold text-white mb-8 relative z-10">Get Your Free Quote</h3>

              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-2 gap-6">
                  <FloatingInput label="First Name" />
                  <FloatingInput label="Last Name" />
                </div>

                <FloatingInput label="Email Address" type="email" />

                <div className="relative group">
                  <textarea
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white outline-none transition-all duration-300 focus:bg-white/10 focus:border-blue-500/50 min-h-[120px] resize-none"
                  ></textarea>
                  <label className="absolute left-4 top-4 text-slate-400 pointer-events-none transition-all group-focus-within:-translate-y-2 group-focus-within:text-xs group-focus-within:text-blue-400">
                    Tell us about your needs...
                  </label>
                </div>

                <Button className="w-full h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl text-lg flex items-center justify-center gap-3 group relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                  <span className="relative z-10">Send Request</span>
                  <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12" />
                </Button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
