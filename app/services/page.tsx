import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceScrollShowcase from '@/components/services/service-scroll-showcase'
import ContactSection from '@/components/contact-section'

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <ServiceScrollShowcase />
            <div className="bg-white">
                <ContactSection />
            </div>
            <Footer />
        </main>
    )
}
