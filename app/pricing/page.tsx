import PricingScrollShowcase from '@/components/pricing/pricing-scroll-showcase'
import Header from '@/components/header'
import Footer from '@/components/footer' // Assuming consistent footer usage

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-slate-900">
            {/* Background set to dark to match the Hero intro */}
            <Header theme="dark" />
            <PricingScrollShowcase />
            <Footer />
        </main>
    )
}
