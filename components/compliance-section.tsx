'use client'

import { FileCheck, ShieldCheck, Award, Briefcase, CheckCircle2 } from 'lucide-react'

export default function ComplianceSection() {
    return (
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Licenses & IDs */}
                    <div className="space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-semibold mb-6">
                                <ShieldCheck className="w-4 h-4" />
                                <span>Fully Licensed & Insured</span>
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Regulatory Compliance & Licensing</h2>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Axis Security & Surveillance operates with absolute adherence to the Private Security Agencies (Regulation) Act (PSARA) and all local governmental regulations. We maintain complete transparency in our legal standing to ensure our clients face zero liability.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="p-3 bg-emerald-50 rounded-xl">
                                    <FileCheck className="w-6 h-6 text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg mb-1">PSARA License</h3>
                                    <p className="text-slate-600 text-sm mb-2">Licensed under the Private Security Agencies Regulation Act, 2005.</p>
                                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 w-fit px-2 py-1 rounded">
                                        <CheckCircle2 className="w-3 h-3" />
                                        <span>Active & Valid</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="p-3 bg-blue-50 rounded-xl">
                                    <Briefcase className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg mb-1">Ministry of Labour Registration</h3>
                                    <p className="text-slate-600 text-sm">Compliant with PF, ESIC, and Minimum Wages Act regulations for all personnel.</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60">
                                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">GST Registration</p>
                                    <p className="font-mono text-slate-900 font-bold">24AAQFAxxxx1Z5</p>
                                </div>
                                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60">
                                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">MSME Udyam Reg.</p>
                                    <p className="font-mono text-slate-900 font-bold">UDYAM-DN-00-00xxxxx</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Certifications & Standards */}
                    <div className="lg:pl-12 lg:border-l border-slate-100 space-y-10">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Standards & Certifications</h2>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Beyond mandatory licenses, we voluntarily subject ourselves to rigorous ISO standards to guarantee quality management and information security for our clients.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="group flex items-center gap-5 p-4 rounded-2xl hover:bg-slate-50 transition-colors cursor-default">
                                <div className="w-16 h-16 shrink-0 rounded-2xl bg-blue-600 text-white flex flex-col items-center justify-center font-bold shadow-lg shadow-blue-900/10 group-hover:scale-105 transition-transform">
                                    <span className="text-xs opacity-80">ISO</span>
                                    <span className="text-lg">9001</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">Quality Management System</h4>
                                    <p className="text-slate-600 text-sm mt-1">Certified for providing security personnel and surveillance services.</p>
                                </div>
                            </div>

                            <div className="group flex items-center gap-5 p-4 rounded-2xl hover:bg-slate-50 transition-colors cursor-default">
                                <div className="w-16 h-16 shrink-0 rounded-2xl bg-indigo-600 text-white flex flex-col items-center justify-center font-bold shadow-lg shadow-indigo-900/10 group-hover:scale-105 transition-transform">
                                    <span className="text-xs opacity-80">ISO</span>
                                    <span className="text-lg">45001</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">Occupational Health & Safety</h4>
                                    <p className="text-slate-600 text-sm mt-1">Ensuring the highest safety standards for our workforce and client premises.</p>
                                </div>
                            </div>

                            <div className="group flex items-center gap-5 p-4 rounded-2xl hover:bg-slate-50 transition-colors cursor-default">
                                <div className="w-16 h-16 shrink-0 rounded-2xl bg-slate-800 text-white flex flex-col items-center justify-center font-bold shadow-lg shadow-slate-900/10 group-hover:scale-105 transition-transform">
                                    <span className="text-xs opacity-80">CAPSI</span>
                                    <Award className="w-6 h-6 mt-1" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">Member of CAPSI</h4>
                                    <p className="text-slate-600 text-sm mt-1">Central Association of Private Security Industry - India.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                            <p className="text-blue-800 font-medium italic">
                                "Compliance is not just a legal requirement for us; it is the foundation of the trust our clients place in us."
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
