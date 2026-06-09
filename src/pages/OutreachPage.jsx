import React from 'react';
import { motion } from 'framer-motion';
import { 
    Users, Heart, Handshake, BarChart, 
    FileEdit, Briefcase, Globe, ArrowRight,
    CheckCircle2, Sparkles, Target, Zap
} from 'lucide-react';
import PageHero from '../components/PageHero';

const OutreachPage = () => {
    const supportAreas = [
        {
            title: "Consulting",
            intro: "We provide research-informed consulting services that help communities and organizations design, evaluate, and improve programs and strategies related to substance use response. Our consulting support includes:",
            bullets: [
                "Program and initiative design",
                "Data collection and analysis planning",
                "Survey, interview, and assessment development",
                "Report writing and synthesis of findings",
                "Coalition development and facilitation support"
            ],
            outro: "We work closely with partners to ensure that strategies are grounded in evidence and aligned with local needs.",
            icon: <FileEdit size={32} className="text-turkish-tile" />,
            color: "bg-turkish-tile/10",
            textColor: "text-turkish-tile"
        },
        {
            title: "Project & Fiscal Management",
            intro: "TSRG supports under-resourced agencies and cross-sector partnerships with project coordination and fiscal management expertise. Our goal is to strengthen implementation capacity by supporting the operational side of collaborative work, including:",
            bullets: [
                "Coordination of multi-partner initiatives",
                "Support for grant-funded project execution",
                "Administrative and reporting systems support",
                "Budget oversight and fiscal tracking assistance"
            ],
            outro: "This allows partners to focus on service delivery and community impact while maintaining strong project infrastructure.",
            icon: <Briefcase size={32} className="text-jungle-jade" />,
            color: "bg-jungle-jade/10",
            textColor: "text-jungle-jade"
        },
        {
            title: "Technical & Data Support",
            intro: "We provide technical assistance to improve how communities collect, manage, and use data to inform decision-making. This includes support for:",
            bullets: [
                "Development of data dashboards and visualization tools",
                "Data reporting systems and workflows",
                "Evaluation frameworks and performance measurement",
                "Grant writing and technical proposal development"
            ],
            outro: "Our approach ensures that data is not only collected—but actively used to guide strategy, improve services, and strengthen outcomes.",
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
                            <span className="text-persimmon font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Applied Consulting</span>
                            <h2 className="text-4xl md:text-6xl font-black text-secondary tracking-tight mb-6">
                                Building Practical <span className="text-turkish-tile">Capacity</span>
                            </h2>
                            <div className="text-xl text-slate-500 font-medium max-w-3xl mx-auto space-y-6">
                                <p>
                                    TSRG provides applied consulting and implementation support to help communities, agencies, and organizations strengthen their response to substance use and behavioral health challenges. Our work is grounded in data, informed by research, and designed to improve coordination across systems of care.
                                </p>
                                <p>
                                    We focus on building practical capacity—so partners can move from planning to implementation with clarity and confidence.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="space-y-12">
                        {supportAreas.map((area, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="p-12 md:p-16 rounded-[3.5rem] bg-slate-50 border border-slate-100"
                            >
                                <div className="flex flex-col md:flex-row gap-12 items-start">
                                    <div className="md:w-1/3">
                                        <div className={`w-20 h-20 ${area.color} rounded-3xl flex items-center justify-center mb-8`}>
                                            {area.icon}
                                        </div>
                                        <h3 className="text-3xl font-black text-secondary">{area.title}</h3>
                                    </div>
                                    <div className="md:w-2/3 space-y-6">
                                        <p className="text-slate-500 text-lg leading-relaxed font-medium">
                                            {area.intro}
                                        </p>
                                        <ul className="space-y-4 py-4">
                                            {area.bullets.map((bullet, j) => (
                                                <li key={j} className="flex items-start gap-4 text-slate-600 font-medium">
                                                    <CheckCircle2 size={24} className={area.textColor} />
                                                    <span className="mt-1">{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="text-slate-500 text-lg leading-relaxed font-medium">
                                            {area.outro}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integrated Support & Partnership */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-slate-100"
                        >
                            <div className="w-16 h-16 bg-persimmon/10 rounded-2xl flex items-center justify-center text-persimmon mb-8">
                                <Handshake size={32} />
                            </div>
                            <h3 className="text-3xl font-black text-secondary mb-6">Integrated Support Across Systems</h3>
                            <p className="text-slate-500 text-lg leading-relaxed font-medium mb-6">
                                TSRG’s consulting and support services are designed to work alongside our research and community outreach efforts. This integration allows us to connect evidence, implementation, and evaluation in a continuous feedback loop.
                            </p>
                            <p className="text-slate-500 text-lg leading-relaxed font-medium">
                                By aligning strategy, data, and community partnerships, we help strengthen systems that are more coordinated, responsive, and sustainable.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-slate-100"
                        >
                            <div className="w-16 h-16 bg-turkish-tile/10 rounded-2xl flex items-center justify-center text-turkish-tile mb-8">
                                <Users size={32} />
                            </div>
                            <h3 className="text-3xl font-black text-secondary mb-6">Partnership Approach</h3>
                            <p className="text-slate-500 text-lg leading-relaxed font-medium">
                                We do not operate as a traditional consultant—we work as a collaborative partner. Each engagement is tailored to the unique context of the community or organization we serve, with a focus on shared learning, capacity building, and long-term impact.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Project Portfolio */}
            <section className="py-24 bg-secondary relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-turkish-tile/5 -skew-y-3 transform origin-top translate-y-32" />
                
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">Community Events & <span className="text-persimmon italic">Collaborations</span></h2>
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

            {/* CTA */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="bg-turkish-tile p-12 md:p-24 rounded-[4rem] text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-32 -mt-32" />
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">Start a Partnership</h2>
                            <p className="text-white/80 text-xl font-medium max-w-2xl mx-auto mb-12">
                                If your organization is working to improve systems of care, strengthen community response, or better understand substance use trends, we welcome the opportunity to collaborate.<br/><br/>
                                Let’s work together to turn data and research into meaningful community impact.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                                <a href="/contact" className="bg-white text-turkish-tile px-8 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-slate-100 transition-all shadow-2xl shadow-black/20 w-full sm:w-auto">
                                    Contact TSRG
                                </a>
                                <a href="/programs/outreach" className="bg-turkish-tile border-2 border-white text-white px-8 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white hover:text-turkish-tile transition-all w-full sm:w-auto">
                                    Explore Our Work
                                </a>
                                <a href="/contact" className="bg-transparent text-white underline px-8 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:text-slate-200 transition-all w-full sm:w-auto">
                                    Start a Conversation
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OutreachPage;
