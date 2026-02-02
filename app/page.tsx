import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import ServicesSection from '@/components/services-section'
import ClientsSection from '@/components/clients-section'
import WhyChooseUs from '@/components/why-choose-us'
import FAQSection from '@/components/faq-section'
import ContactSection from '@/components/contact-section'
import AgencyDifferentiators from '@/components/agency-differentiators'
import ProcessTimeline from '@/components/process-timeline'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <HeroSection />
      <AboutSection />
      <WhyChooseUs />
      <ServicesSection />
      <ClientsSection />
      <AgencyDifferentiators />
      <ProcessTimeline />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
