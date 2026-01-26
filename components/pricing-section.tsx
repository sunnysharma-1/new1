'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

gsap.registerPlugin(ScrollTrigger)

export default function PricingSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = document.querySelectorAll('.pricing-card')
      gsap.to(cards, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: 'power2.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const pricingData = [
    {
      title: 'Security Guard',
      baseRate: '14,500',
      totalRate: '18,988',
      period: '30 Days',
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Professional Guard',
        'Training Included',
        'Supervision',
        'ESIC & PF Benefits',
        'Uniform Provided',
        'Emergency Support',
      ],
    },
  ]

  const breakdown = [
    { label: 'Basic Hours (30 Days)', value: '₹14,500' },
    { label: 'Provident Fund (PF)', value: '₹1,491' },
    { label: 'ESIC (3.25%)', value: '₹471' },
    { label: 'Earned Leave (4.17%)', value: 'Included' },
    { label: 'Worker Comp Policy (1%)', value: 'Included' },
    { label: 'Room Rent', value: '₹800' },
    { label: 'Uniform & Equipment', value: 'Included' },
    { label: 'Operational Cost (5%)', value: 'Included' },
    { label: 'Subtotal', value: '₹17,262', highlight: true },
    { label: 'Agency Charges (10%)', value: '₹1,726', highlight: true },
    { label: 'Total (30 Days)', value: '₹18,988', highlight: true, bold: true },
  ]

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="animate-section py-20 px-4 bg-white"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-accent text-accent-foreground mb-4 text-sm">
            Transparent Pricing
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Simple, Cost-Effective Rates
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            No hidden charges. All benefits included. Rates subject to state minimum wage variations.
          </p>
        </div>

        {/* Main Pricing Card */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {pricingData.map((plan, index) => (
            <Card
              key={index}
              className="pricing-card opacity-0 translate-y-8 lg:col-span-2 overflow-hidden border-2 border-primary/20 hover:border-primary/50"
            >
              <div className={`bg-gradient-to-r ${plan.color} p-8 text-white`}>
                <h3 className="text-3xl font-bold mb-2">{plan.title}</h3>
                <p className="text-white/80">For {plan.period}</p>
              </div>
              <div className="p-8">
                <div className="mb-8">
                  <div className="text-sm text-foreground/60 mb-2">Starting from</div>
                  <div className="text-4xl font-bold text-primary mb-4">
                    ₹{plan.totalRate}
                  </div>
                  <p className="text-foreground/60">
                    Includes all benefits and mandatory deductions
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-foreground/70"
                    >
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-primary hover:bg-secondary text-white rounded-lg py-3 font-semibold">
                  Request Quote
                </Button>
              </div>
            </Card>
          ))}

          {/* Quick Facts */}
          <Card className="pricing-card opacity-0 translate-y-8 p-8 bg-gradient-to-br from-blue-50 to-white border border-primary/10">
            <h4 className="text-xl font-bold text-primary mb-6">What's Included?</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/70">
                  Professional background verification
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/70">
                  Comprehensive training programs
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/70">
                  Regular supervision & monitoring
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/70">
                  24/7 emergency support
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/70">
                  Compliance with all labor laws
                </span>
              </li>
            </ul>
          </Card>
        </div>

        {/* Detailed Breakdown */}
        <Card className="border-primary/10 p-8 bg-gradient-to-br from-gray-50 to-white">
          <h3 className="text-2xl font-bold text-primary mb-6">
            30-Day Security Guard Rate Breakdown
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody className="divide-y divide-border">
                {breakdown.map((item, index) => (
                  <tr key={index} className={item.highlight ? 'bg-blue-50' : ''}>
                    <td
                      className={`py-4 text-foreground ${item.bold ? 'font-bold' : ''}`}
                    >
                      {item.label}
                    </td>
                    <td
                      className={`py-4 text-right font-semibold text-primary ${item.bold ? 'text-lg' : ''}`}
                    >
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-foreground/60 mt-6">
            * Rates subject to variation in accordance with minimum wages under state
            government regulations. Accommodation provided by company or charged separately.
          </p>
        </Card>
      </div>
    </section>
  )
}
