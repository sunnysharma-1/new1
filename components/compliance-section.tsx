'use client'

import { FileCheck, ShieldCheck, Award, Briefcase } from 'lucide-react'

export default function ComplianceSection() {
    return (
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Licenses & IDs */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Licenses & Registration</h2>
                            <p className="text-slate-600 mb-8">
                                Rangerss Security & Surveillance operates with full legal compliance and transparency.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                <FileCheck className="w-6 h-6 text-emerald-600 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">PASARA ACT-2005</h3>
                                    <p className="text-slate-600 text-sm">License No. 17/2013</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                <Briefcase className="w-6 h-6 text-blue-600 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Company Registrations</h3>
                                    <p className="text-slate-600 text-sm">Registered under Company Act & Shop/Establishment Act 1948</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <p className="text-xs text-slate-500 uppercase font-semibold">Income Tax (PAN)</p>
                                    <p className="font-mono text-slate-900 font-bold">BJEPK8964K</p>
                                </div>
                                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <p className="text-xs text-slate-500 uppercase font-semibold">GSTIN</p>
                                    <p className="font-mono text-slate-900 font-bold">26BJEPK8964K1ZL</p>
                                </div>
                                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <p className="text-xs text-slate-500 uppercase font-semibold">Provident Fund</p>
                                    <p className="font-mono text-slate-900 font-bold">GJ/VAPI/48702/694</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Affiliations */}
                    <div className="lg:pl-8 lg:border-l border-slate-100 space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Professional Affiliations</h2>
                            <p className="text-slate-600 mb-8">
                                We are proud members of recognized security associations, ensuring our adherence to global standards.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 hover:bg-slate-50 rounded-xl transition-colors cursor-default group">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <span className="font-semibold text-slate-900 text-lg">World Association of Detectives</span>
                            </div>
                            <div className="flex items-center gap-4 p-4 hover:bg-slate-50 rounded-xl transition-colors cursor-default group">
                                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                    <Award className="w-6 h-6" />
                                </div>
                                <span className="font-semibold text-slate-900 text-lg">Security Association of India</span>
                            </div>
                            <div className="flex items-center gap-4 p-4 hover:bg-slate-50 rounded-xl transition-colors cursor-default group">
                                <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                                    <Award className="w-6 h-6" />
                                </div>
                                <span className="font-semibold text-slate-900 text-lg">Security Association of Maharashtra</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
