'use client'

import { ShieldCheck, Zap, Users, ArrowRight } from 'lucide-react'

const advantages = [
  {
    icon: Users,
    title: "Unmatched Discipline & Training",
    content: "At Axis Security, we believe that a uniform represents authority, and that authority is earned through discipline. Unlike standard agencies that deploy untrained personnel, every Axis guard undergoes a rigorous verification and training curriculum. From physical fitness drills to soft-skills workshops on conflict de-escalation, our team is prepared to handle any situation with professionalism and composure. We don't just fill a spot; we provide a presence that commands respect.",
    image: "/images/apex-team-1.jpg",
    stats: "100%",
    statsDesc: "Verified Staff"
  },
  {
    icon: Zap,
    title: "Operational Excellence & Technology",
    content: "Security is not a static service; it's a dynamic operation appearing 24/7. We integrate smart technology into our daily workflow to ensure accountability. Our digital attendance systems, patrol tracking apps, and real-time incident reporting tools mean that you aren't just paying for hours—you're paying for verified performance. Our leadership team conducts surprise night checks and regular audits to ensure that the standards we promise are the standards we deliver, every single day.",
    image: "/images/apex-team-3.jpg",
    stats: "24/7",
    statsDesc: "Monitoring"
  },
  {
    icon: ShieldCheck,
    title: "Customized Protection Strategies",
    content: "We understand that an industrial warehouse has different needs than a corporate lobby. That's why we don't offer cookie-cutter solutions. Our experts analyze your specific site risks—be it material theft, unauthorized access, or emergency evacuation planning—and tailor our Standard Operating Procedures (SOPs) to match. When you choose Axis, you get a security partner that adapts to your business, minimizes your liabilities, and lets you focus on your core operations without worry.",
    image: "/images/apex-team-2.jpg",
    stats: "Tailored",
    statsDesc: "Solutions"
  }
]

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold tracking-wide uppercase mb-6 w-fit">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            The Axis Advantage
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Security with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Uncompromised Standards.
            </span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            We don't just supply manpower. We supply a comprehensive security ecosystem managed by experts to give you complete peace of mind.
          </p>
        </div>

        {/* Content Rows */}
        <div className="flex flex-col gap-24">
          {advantages.map((item, index) => {
            const Icon = item.icon
            const isEven = index % 2 === 0
            return (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${isEven ? '' : 'lg:flex-row-reverse'}`}>

                {/* Text Side */}
                <div className="lg:w-1/2">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg bg-slate-900`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-6">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg mb-8 border-l-4 border-blue-100 pl-6">
                    {item.content}
                  </p>
                  <div className="flex items-center gap-2 text-blue-600 font-bold uppercase text-sm tracking-wide cursor-pointer group">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Image Side */}
                <div className="lg:w-1/2 w-full">
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] group cursor-pointer">
                    <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Floating Badge */}
                    <div className={`absolute bottom-8 ${isEven ? 'right-8' : 'left-8'} z-20 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/50 max-w-[200px]`}>
                      <div className="text-4xl font-bold text-slate-900 mb-1">{item.stats}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">{item.statsDesc}</div>
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
