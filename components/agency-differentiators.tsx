'use client'

import { Lightbulb, ShieldCheck, ArrowRight } from 'lucide-react'

export default function AgencyDifferentiators() {
    return (
        <section className="bg-slate-50 py-24 border-t border-slate-200">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-block border-2 border-slate-800 rounded-full px-6 py-2 mb-6">
                        <span className="font-bold text-slate-900 tracking-widest uppercase text-sm">360PSA</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 uppercase tracking-tight">
                        What Strong Private <br />
                        <span className="text-slate-600">Security Agencies</span> <br />
                        <span className="text-blue-900">Do Differently</span>
                    </h2>
                    <h3 className="text-xl font-medium text-slate-500">
                        They build a brand that says:
                    </h3>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16 relative">

                    {/* Dashed Dividers (Desktop) */}
                    <div className="hidden md:block absolute top-10 bottom-10 left-1/3 w-px border-l-2 border-dashed border-slate-300" />
                    <div className="hidden md:block absolute top-10 bottom-10 right-1/3 w-px border-l-2 border-dashed border-slate-300" />

                    {/* Item 1 */}
                    <div className="flex flex-col items-center text-center p-6">
                        <p className="text-xl font-medium text-slate-700 mb-8">We solve problems</p>
                        <div className="w-24 h-24 mb-6 relative">
                            {/* Icon Placeholder based on Lightbulb/Puzzle idea from image */}
                            <Lightbulb className="w-20 h-20 text-amber-400 mx-auto" />
                            <div className="absolute -bottom-2 -right-2 bg-blue-600 rounded-lg p-1">
                                <span className="block w-3 h-3 bg-white rounded-full"></span>
                            </div>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex flex-col items-center text-center p-6">
                        <p className="text-xl font-medium text-slate-700 mb-8">We are reliable</p>
                        <div className="w-24 h-24 mb-6 relative flex items-center justify-center">
                            {/* Shield Icon based on image */}
                            <ShieldCheck className="w-20 h-20 text-green-500 mx-auto" />
                            <div className="absolute -bottom-2 -right-2 bg-green-600 rounded-full p-1 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="flex flex-col items-center text-center p-6">
                        <p className="text-xl font-medium text-slate-700 mb-8">We are not just <br /> manpower providers</p>
                        <div className="flex items-center justify-center mt-4">
                            <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full flex items-center gap-2 transition-all shadow-lg hover:shadow-amber-500/30">
                                MORE <br /> INFO
                                <div className="bg-white/20 rounded-full p-1 ml-2">
                                    <ArrowRight className="w-5 h-5" />
                                </div>
                            </button>
                        </div>
                    </div>

                </div>

                {/* Footer Slogan */}
                <div className="text-center">
                    <p className="text-lg md:text-xl text-slate-800 font-bold tracking-wide">
                        Their brand becomes a strategic weapon!
                    </p>
                </div>

            </div>
        </section>
    )
}
