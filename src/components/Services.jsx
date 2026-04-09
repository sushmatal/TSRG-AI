import React from 'react';
import { Microscope, GitMerge, FileCheck, Presentation, Search, Database, Users, TrendingUp } from 'lucide-react';

const Services = () => {
    const solutions = [
        {
            title: "Name the Problem",
            description: "We conduct landscape reviews and community needs assessments to find the most relevant data for your community.",
            features: ["Landscape Reviews", "Needs Assessments", "Gap Analysis"],
            icon: <Search size={28} className="text-primary" />
        },
        {
            title: "Research Solutions",
            description: "We perform qualitative and quantitative research to discover in-depth knowledge about communities and service needs.",
            features: ["Qualitative Research", "Quantitative Research", "Evidence-Based Design"],
            icon: <Database size={28} className="text-primary" />
        },
        {
            title: "Take Action",
            description: "Our skilled facilitators convene diverse groups to consider solution pathways and to put plans into practice.",
            features: ["Group Facilitation", "Implementation Planning", "Stakeholder Alignment"],
            icon: <Users size={28} className="text-primary" />
        },
        {
            title: "Confirm Progress",
            description: "We provide evaluation and training to validate efficacy so success can be scaled and shared.",
            features: ["Program Evaluation", "Performance Metrics", "Scalability Planning"],
            icon: <TrendingUp size={28} className="text-primary" />
        }
    ];

    return (
        <section id="services" className="py-20 bg-slate-50 text-slate-900 overflow-hidden relative">
            {/* Decorative patterns */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className="text-primary font-black tracking-[0.3em] uppercase text-xs mb-4 block underline underline-offset-8">Our Solutions</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary tracking-tight leading-[1.1] mb-6">Identify <span className="text-primary italic font-black">"Upstream"</span> and <span className="text-primary italic font-black">"Downstream"</span> <br className="hidden md:block" /> service gaps to improve community outcomes.</h2>
                    <p className="text-slate-500 text-lg font-bold leading-relaxed max-w-2xl mx-auto">We don't just provide research; we provide the backbone infrastructure rural and urban communities need to thrive and grow together.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {solutions.map((item, i) => (
                        <div key={i} className="bg-white border border-slate-100 p-12 rounded-[3.5rem] hover:shadow-xl hover:border-primary/20 transition-all duration-500 group relative overflow-hidden flex flex-col items-center text-center">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl group-hover:bg-primary/20 transition-all"></div>

                            <div className="w-20 h-20 bg-primary/5 rounded-[1.5rem] flex items-center justify-center mb-10 group-hover:bg-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm group-hover:shadow-xl mx-auto">
                                <div className="text-primary group-hover:text-white transition-colors">
                                    {React.cloneElement(item.icon, { size: 36, className: "" })}
                                </div>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black text-secondary mb-6 tracking-tight">{item.title}</h3>
                            <p className="text-slate-500 text-lg md:text-xl mb-10 leading-relaxed font-medium">{item.description}</p>

                            <ul className="space-y-4">
                                {item.features.map((feat, j) => (
                                    <li key={j} className="flex items-center justify-center gap-4 text-sm md:text-base font-bold text-slate-600">
                                        <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform"></div>
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
