import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import ServicesSection from '@/components/services-section'
import FeaturesSection from '@/components/features-section'
import TestimonialsSection from '@/components/testimonials-section'
import ContactSection from '@/components/contact-section'
import ClientsSection from '@/components/clients-section'
import ComplianceSection from '@/components/compliance-section'
import ProcessTimeline from '@/components/process-timeline'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ServicesSection />
      <ClientsSection />
      <ProcessTimeline />
      <TestimonialsSection />
      <ComplianceSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
