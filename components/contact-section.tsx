'use client'

import { useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ContactSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-animate', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Info */}
          <div className="space-y-10">
            <div className="contact-animate">
              <span className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-3 block">Contact Us</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Let's Secure Your <br /> Future Together
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed max-w-lg">
                Reach out to our expert team for a confidential consultation. We are ready to design a security strategy tailored to your specific needs.
              </p>
            </div>

            <div className="space-y-6 contact-animate">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="p-3 bg-blue-600/20 rounded-lg text-blue-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">Call Us</h4>
                  <p className="text-slate-400">+91 99981 87871</p>
                  <p className="text-slate-500 text-sm">99981 87875 / 99981 87876</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="p-3 bg-blue-600/20 rounded-lg text-blue-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">Email Us</h4>
                  <p className="text-slate-400">admin@axissecurity.in</p>
                  <p className="text-slate-500 text-sm">Response within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="p-3 bg-blue-600/20 rounded-lg text-blue-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">Headquarters</h4>
                  <p className="text-slate-400">Shop No. 107, Sam Super Market,</p>
                  <p className="text-slate-400">Near Kilvani Naka, Silvassa - 396230</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="contact-animate bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Request a Quote</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">First Name</label>
                  <Input placeholder="John" className="bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Last Name</label>
                  <Input placeholder="Doe" className="bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Email Address</label>
                <Input type="email" placeholder="john@company.com" className="bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Your Message</label>
                <Textarea placeholder="Tell us about your security needs..." className="bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500 min-h-[120px]" />
              </div>

              <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-md flex items-center justify-center gap-2 group">
                Send Request
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-center text-xs text-slate-500 mt-4">
                By submitting this form, you agree to our <span className="underline cursor-pointer">Privacy Policy</span>.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
