import Header from '@/components/header'
import Footer from '@/components/footer'
import ContactSection from '@/components/contact-section'

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-slate-900">
            <Header />

            {/* Spacer for fixed header */}
            <div className="pt-20">
                <ContactSection />
            </div>
            <Footer />
        </main>
    )
}
