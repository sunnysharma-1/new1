import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import OptimizedImage from '@/components/optimized-image'

const images = [
  { url: '/images/apex-hero-group.jpg', alt: 'Axis security team in formation', classes: 'top-[18%] left-[8%] w-[14vw] min-w-[100px] max-w-[220px] opacity-80' },
  { url: '/images/apex-building-lineup.jpg', alt: 'Security officers at building entrance', classes: 'top-[8%] left-[32%] w-[13vw] min-w-[90px] max-w-[200px] opacity-50 max-sm:hidden' },
  { url: '/images/apex-team-2.jpg', alt: 'Uniformed security personnel', classes: 'top-[12%] right-[14%] w-[12vw] min-w-[90px] max-w-[190px] opacity-60' },
  { url: '/images/apex-salute-row.jpg', alt: 'Security team salute drill', classes: 'bottom-[22%] right-[10%] w-[16vw] min-w-[110px] max-w-[240px] opacity-80' },
  { url: '/images/apex-team-3.jpg', alt: 'Security officers on patrol', classes: 'bottom-[18%] left-[18%] w-[14vw] min-w-[100px] max-w-[210px] opacity-60 max-sm:hidden' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen h-dvh w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[100px_100px] pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent z-20 pointer-events-none" />

      {images.map((img, i) => (
        <div
          key={img.url}
          className={`absolute rounded-xl overflow-hidden shadow-2xl ${img.classes}`}
        >
          <OptimizedImage
            src={img.url}
            alt={img.alt}
            priority={i === 0}
            loading={i === 0 ? 'eager' : 'lazy'}
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-blue-900/10 pointer-events-none" />
        </div>
      ))}

      <div className="relative z-30 flex min-h-screen h-dvh flex-col items-center justify-center px-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800 text-blue-400 text-sm font-semibold mb-6">
          <div className="w-2 h-2 rounded-full bg-blue-500 motion-reduce:animate-none animate-pulse" aria-hidden="true" />
          <span className="tracking-wide uppercase">Discipline. Protection. Excellence.</span>
        </div>

        <div className="flex flex-col items-center justify-center mb-10">
          <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black tracking-tighter leading-[0.8] text-white">
            AXIS
            <span className="block text-xl md:text-3xl lg:text-4xl font-bold tracking-[0.5em] sm:tracking-[1em] uppercase text-blue-400 mt-2 sm:mt-4 ml-0 sm:ml-4">
              Security
            </span>
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/services"
            className="px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            Our Services <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link
            href="/#contact"
            className="px-8 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-colors w-full sm:w-auto"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
