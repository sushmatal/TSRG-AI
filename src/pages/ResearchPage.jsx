import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    Microscope, Database, BookOpen, Users, 
    TrendingUp, ShieldAlert, ArrowRight, CheckCircle2,
    BarChart3, Globe, Zap, Network
} from 'lucide-react';
import PageHero from '../components/PageHero';

const ResearchPage = () => {
    const researchAreas = [
        {
            title: "Substance Use Stigma",
            icon: <ShieldAlert className="text-persimmon" size={28} />,
            desc: "Analyses of public and organizational stigma as it relates to people who use drugs and receive treatment.",
            color: "persimmon"
        },
        {
            title: "Urban vs Rural Systems",
            icon: <Globe className="text-turkish-tile" size={28} />,
            desc: "Comparison of opioid response and prevention strategies across diverse geographic and demographic landscapes.",
            color: "turkish-tile"
        },
        {
            title: "Policy & Governance",
            icon: <Database className="text-jungle-jade" size={28} />,
            desc: "Local government policy program activities and their measurable response to the substance use crisis.",
            color: "jungle-jade"
        },
        {
            title: "Social Network Analysis",
            icon: <Network className="text-lupine" size={28} />,
            desc: "Mapping how networks respond to the substance use crisis through qualitative and quantitative thematic analysis.",
            color: "lupine"
        }
    ];

    const topics = [
        "Medications for opioid use disorder (MOUD) in rural county jails",
        "Opioid and benzodiazepine prescribing, tapering, and healing",
        "Prescribing volumes for benzodiazepines, opioids and stimulants",
        "Racial and ethnic disparities in substance use service provision",
        "Workforce development for people in recovery",
        "Qualitative thematic analysis of social networks"
    ];

    return (
        <div className="min-h-screen bg-white">
            <PageHero 
                title="Research Initiatives" 
                backgroundImage={`${import.meta.env.BASE_URL}research_hero_bg_1778718936266.png`}
            />

            {/* Research Agenda */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-turkish-tile/10 text-turkish-tile font-black text-[10px] uppercase tracking-widest mb-8">
                                <Microscope size={14} /> Our Scientific Agenda
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-secondary mb-10 leading-[1.1] tracking-tight">
                                A Collaborative, <br />
                                <span className="text-turkish-tile italic">Multipronged</span> Approach.
                            </h2>
                            <p className="text-secondary text-2xl font-bold leading-snug mb-8">
                                We select research topics and community partnerships that enable a patchwork of sustainable solutions.
                            </p>
                            <div className="space-y-6 text-slate-500 text-lg leading-relaxed font-medium">
                                <p>
                                    The hurdle remains high when working to address the opioid crisis or provide support for patients experiencing physical dependency from benzodiazepines or benzodiazepine-induced neurological dysfunction (BIND).
                                </p>
                                <p>
                                    TSRG continues to work to identify strategies to help facilitate a path forward by blending rigorous data science with local community wisdom.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-slate-50 rounded-[3.5rem] p-12 border border-slate-100 relative"
                        >
                            <div className="absolute -top-10 -left-10 bg-white shadow-xl p-8 rounded-3xl border border-slate-50 max-w-xs hidden md:block">
                                <Zap className="text-persimmon mb-4" size={32} />
                                <p className="text-slate-500 font-bold leading-relaxed text-sm">
                                    "We exist in the space between stories and systems, turning knowledge into action."
                                </p>
                            </div>
                            <div className="space-y-6">
                                {topics.map((topic, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="w-6 h-6 rounded-full bg-turkish-tile/10 flex items-center justify-center shrink-0 mt-1 group-hover:bg-turkish-tile group-hover:text-white transition-colors">
                                            <CheckCircle2 size={14} />
                                        </div>
                                        <p className="text-secondary font-black text-sm uppercase tracking-tight">{topic}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Research Areas */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tight mb-6">Core Research Domains</h2>
                        <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto italic">
                            Specialized areas of study driving impact across rural and urban community health.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {researchAreas.map((area, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col items-center text-center"
                            >
                                <div className={`p-5 rounded-2xl bg-slate-50 mb-8 group-hover:scale-110 transition-transform`}>
                                    {area.icon}
                                </div>
                                <h3 className="text-xl font-black text-secondary mb-4 tracking-tight leading-tight">{area.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed font-medium mb-8 flex-grow">
                                    {area.desc}
                                </p>
                                <button className={`text-[10px] font-black uppercase tracking-widest text-${area.color} hover:underline inline-flex items-center gap-2`}>
                                    Explore Data <ArrowRight size={14} />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sub-Focus Sections */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Opioids */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-secondary rounded-[3.5rem] p-12 md:p-16 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 transition-all group-hover:bg-white/10" />
                            <div className="relative z-10">
                                <h3 className="text-3xl font-black text-white mb-6">Opioid Research</h3>
                                <p className="text-slate-300 text-lg mb-10 leading-relaxed font-medium">
                                    Strategic infrastructure and response systems built to address the opioid crisis in rural contexts.
                                </p>
                                <Link to="/insights/research/opioids" className="bg-white text-secondary px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-slate-100 transition-all inline-flex items-center gap-3">
                                    View Initiative <ArrowRight size={18} />
                                </Link>
                            </div>
                        </motion.div>

                        {/* Benzos */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-persimmon rounded-[3.5rem] p-12 md:p-16 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 transition-all group-hover:bg-white/20" />
                            <div className="relative z-10">
                                <h3 className="text-3xl font-black text-white mb-6">Benzodiazepine Research</h3>
                                <p className="text-white/80 text-lg mb-10 leading-relaxed font-medium">
                                    Investigating dependency, neurological dysfunction (BIND), and evidence-based tapering strategies.
                                </p>
                                <Link to="/insights/research/benzodiazepines" className="bg-white text-persimmon px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-slate-50 transition-all inline-flex items-center gap-3">
                                    View Initiative <ArrowRight size={18} />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ResearchPage;
