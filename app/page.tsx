import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import ServicesSection from '@/components/services-section'
import FeaturesSection from '@/components/features-section'
import TestimonialsSection from '@/components/testimonials-section'
import ContactSection from '@/components/contact-section'
import ClientLogos from '@/components/client-logos'
import ProcessTimeline from '@/components/process-timeline'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <HeroSection />
      <ClientLogos />
      <AboutSection />
      <ServicesSection />
      <FeaturesSection />
      <ProcessTimeline />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
