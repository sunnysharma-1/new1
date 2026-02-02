'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
    {
        question: "How does Axis ensure the quality of its security guards?",
        answer: "Quality assurance is our top priority. We employ a rigorous recruitment process that includes background checks, police verification, and detailed reference checks. Once hired, every guard undergoes intensive training at our academy, covering physical fitness, emergency response, fire safety, and soft skills. We also maintain a strict 3-layer supervision system (Post Commanders, Area Supervisors, and Night Patrols) to ensure that our high standards are maintained on-site every single day."
    },
    {
        question: "What industries do you specialize in?",
        answer: "Axis Security offers specialized protection across a wide range of sectors. Our core expertise lies in Industrial & Manufacturing security (managing gates, material transit), Corporate Offices (visitor management, front-desk), and Gated Communities (resident safety). We also have dedicated teams for Event Security, Warehousing Logistics, and Healthcare facilities, each trained with SOPs specific to that industry's unique risks."
    },
    {
        question: "Do you use technology in your security operations?",
        answer: "Yes, we integrate modern technology to enhance transparency and efficiency. Our operations are supported by digital attendance systems and GPS-enabled patrol tracking, which allow us—and our clients—to verify that patrols are being conducted as scheduled. We also provide digital incident reports for clearer documentation and accountability. If your site has CCTV, our team is trained to monitor and log activities effectively."
    },
    {
        question: "What is your response time in case of an emergency?",
        answer: "Our response protocols are immediate. Site guards are trained as the first line of defense to secure the area and administer first aid/fire safety measures. Simultaneously, our 24/7 Command Center is notified, deploying our Quick Response Team (QRT) and coordinating with local law enforcement or medical services if necessary. We conduct regular mock drills to ensure our team's reaction is muscle memory, minimizing panic and risk."
    },
    {
        question: "Can we request a customized security plan for our site?",
        answer: "Absolutely. We do not believe in 'one-size-fits-all'. Before deployment, our expert operations team conducts a comprehensive site survey and risk assessment. Based on this, we draft a customized Security Proposal and Standard Operating Procedures (SOPs) tailored to your specific layout, threats, and budget. This ensures you get the most effective protection for your specific needs."
    }
]

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Understanding how we work shouldn't be a mystery. Here are answers to the most common questions about our security services.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === index ? 'border-blue-500 shadow-md' : 'border-slate-200 hover:border-slate-300'}`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-blue-700' : 'text-slate-900'}`}>
                                    {faq.question}
                                </span>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'}`}>
                                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </div>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50 mt-2">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
