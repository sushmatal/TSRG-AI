import React from 'react';
import { motion } from 'framer-motion';
import { 
    Users, Heart, Handshake, BarChart, 
    FileEdit, Briefcase, Globe, ArrowRight,
    CheckCircle2, Sparkles, Target, Zap
} from 'lucide-react';
import PageHero from '../components/PageHero';

const OutreachPage = () => {
    const services = [
        {
            title: "Consulting",
            desc: "Report research and writing, coalition building, and strategic planning for substance use crisis response.",
            icon: <FileEdit size={32} className="text-turkish-tile" />,
            color: "bg-turkish-tile/10",
            textColor: "text-turkish-tile"
        },
        {
            title: "Management",
            desc: "Project and fiscal management expertise for under-resourced agencies and collaborative grant-funded projects.",
            icon: <Briefcase size={32} className="text-jungle-jade" />,
            color: "bg-jungle-jade/10",
            textColor: "text-jungle-jade"
        },
        {
            title: "Support",
            desc: "Technical support for developing data dashboards, performance reporting, and high-impact grant writing.",
            icon: <BarChart size={32} className="text-persimmon" />,
            color: "bg-persimmon/10",
            textColor: "text-persimmon"
        }
    ];

    const projects = [
        {
            title: "Denver Opioid Abatement Council (DOAC)",
            role: "Community & Strategic Planning Member",
            period: "2025 - Present",
            category: "Strategic Planning"
        },
        {
            title: "Las Animas School District Prevention Project",
            role: "Substance Abuse Prevention & Intervention",
            period: "2023 - 2024",
            category: "Youth Prevention"
        },
        {
            title: "Pew Charitable Trusts: MOUD in Jails",
            role: "Project Lead / Research Partner",
            period: "2023 - 2024",
            category: "Criminal Justice"
        },
        {
            title: "Mandela Washington Fellowship (PDE)",
            role: "Host Organization (Djibouti, Zambia, Lesotho)",
            period: "2022 - 2024",
            category: "Global Engagement"
        },
        {
            title: "SB 21 - 137: Criminal Justice Outreach",
            role: "Lead Outreach Coordinator (9-County Region)",
            period: "2022 - 2023",
            category: "Policy Outreach"
        },
        {
            title: "Benzodiazepine Action Work Group (BAWG)",
            role: "Founding Member",
            period: "2021 - 2025",
            category: "Coalition Building"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <PageHero 
                title="Community Outreach" 
                backgroundImage={`${import.meta.env.BASE_URL}Header%20Images/Header.png`}
            />

            {/* How We Serve */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-persimmon font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Our Impact Framework</span>
                            <h2 className="text-4xl md:text-6xl font-black text-secondary tracking-tight mb-6">
                                How We <span className="text-turkish-tile">Engage</span>
                            </h2>
                            <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
                                TSRG participates in a variety of community outreach efforts, blending professional expertise with localized community wisdom.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-12 rounded-[3.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
                            >
                                <div className={`w-20 h-20 ${service.color} rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-3xl font-black text-secondary mb-6">{service.title}</h3>
                                <p className="text-slate-500 text-lg leading-relaxed font-medium mb-10">
                                    {service.desc}
                                </p>
                                <div className={`inline-flex items-center gap-2 ${service.textColor} font-black text-[10px] uppercase tracking-widest`}>
                                    Learn More <ArrowRight size={14} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Portfolio */}
            <section className="py-24 bg-secondary relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-turkish-tile/5 -skew-y-3 transform origin-top translate-y-32" />
                
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">Engagement <span className="text-persimmon italic">Portfolio</span></h2>
                            <p className="text-slate-300 text-lg font-medium leading-relaxed">
                                A snapshot of our recent and ongoing collaborations across public health, criminal justice, and youth prevention systems.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <div className="px-6 py-3 bg-white/5 rounded-2xl border border-white/10 text-white font-bold text-sm">
                                50+ Partners
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 transition-all group"
                            >
                                <div className="text-[10px] font-black uppercase tracking-widest text-persimmon mb-6 bg-persimmon/10 px-3 py-1 rounded-full inline-block">
                                    {project.category}
                                </div>
                                <h3 className="text-xl font-black text-white mb-3 group-hover:text-persimmon transition-colors">{project.title}</h3>
                                <p className="text-slate-400 text-sm font-medium mb-8 leading-relaxed">
                                    {project.role}
                                </p>
                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                                    <span className="text-slate-500 text-xs font-bold italic">{project.period}</span>
                                    <Zap size={14} className="text-white/20 group-hover:text-persimmon transition-colors" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Quote */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="w-16 h-16 bg-turkish-tile/10 rounded-2xl flex items-center justify-center text-turkish-tile mx-auto mb-12">
                            <Target size={32} />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-secondary leading-[1.1] mb-12 tracking-tight">
                            "Building healthy communities starts with listening. We bridge the gap between stories and systems."
                        </h2>
                        <div className="flex items-center justify-center gap-4">
                            <div className="h-px w-12 bg-slate-200" />
                            <span className="text-sm font-black uppercase tracking-[0.3em] text-slate-400">Our Community Commitment</span>
                            <div className="h-px w-12 bg-slate-200" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="pb-24">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="bg-turkish-tile p-12 md:p-24 rounded-[4rem] text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-32 -mt-32" />
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">Ready to collaborate?</h2>
                            <p className="text-white/80 text-xl font-medium max-w-xl mx-auto mb-12">
                                Let's build a stronger, evidence-based response for your community.
                            </p>
                            <button className="bg-white text-turkish-tile px-10 py-6 rounded-full font-black uppercase tracking-widest text-sm hover:bg-slate-100 transition-all shadow-2xl shadow-black/20">
                                Contact Our Outreach Team
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OutreachPage;
