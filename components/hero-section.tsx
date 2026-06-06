import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const images = [
  { url: '/images/apex-hero-group.jpg', classes: 'top-[18%] left-[8%] w-[14vw] min-w-[100px] max-w-[220px] opacity-80' },
  { url: '/images/apex-building-lineup.jpg', classes: 'top-[8%] left-[32%] w-[13vw] min-w-[90px] max-w-[200px] opacity-50 max-sm:hidden' },
  { url: '/images/apex-team-2.jpg', classes: 'top-[12%] right-[14%] w-[12vw] min-w-[90px] max-w-[190px] opacity-60' },
  { url: '/images/apex-team-1.jpg', classes: 'top-[38%] right-[22%] w-[10vw] min-w-[80px] max-w-[160px] opacity-50 max-md:hidden' },
  { url: '/images/apex-salute-row.jpg', classes: 'bottom-[22%] right-[10%] w-[16vw] min-w-[110px] max-w-[240px] opacity-80' },
  { url: '/images/apex-team-3.jpg', classes: 'bottom-[18%] left-[18%] w-[14vw] min-w-[100px] max-w-[210px] opacity-60' },
  { url: '/images/IMG_7199.jpg', classes: 'top-[32%] left-[5%] w-[9vw] min-w-[70px] max-w-[140px] opacity-40 max-md:hidden' },
  { url: '/images/apex-hero-group.jpg', classes: 'bottom-[28%] right-[4%] w-[11vw] min-w-[80px] max-w-[170px] opacity-30 max-lg:hidden' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen h-dvh w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[100px_100px] pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent z-20 pointer-events-none" />

      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute rounded-xl overflow-hidden shadow-2xl ${img.classes}`}
        >
          <img
            src={img.url}
            alt="Security Detail"
            loading={i < 4 ? 'eager' : 'lazy'}
            decoding="async"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-blue-900/10 pointer-events-none" />
        </div>
      ))}

      <div className="relative z-30 flex min-h-screen h-dvh flex-col items-center justify-center px-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800 text-blue-400 text-sm font-semibold mb-6 backdrop-blur-md">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="tracking-wide uppercase">Discipline. Protection. Excellence.</span>
        </div>

        <div className="flex flex-col items-center justify-center mb-10">
          <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black tracking-tighter leading-[0.8] text-white select-none">
            AXIS
          </h1>
          <span className="text-xl md:text-3xl lg:text-4xl font-bold tracking-[1em] uppercase text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-400 to-blue-400 ml-4">
            Security
          </span>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pointer-events-auto">
          <Link href="/services">
            <button className="px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
              Our Services <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
          <Link href="/#contact">
            <button className="px-8 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-colors w-full sm:w-auto">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
