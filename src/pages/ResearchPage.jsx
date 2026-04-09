import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import { Beaker, Search, Target, PieChart, ShieldAlert, ChevronRight, FileText } from 'lucide-react';

const ResearchInitiative = ({ title, category, impact, objectives, image, delay }) => (
    <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col md:flex-row"
    >
        <div className="md:w-2/5 relative overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="bg-white text-primary px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">Explore Data</button>
            </div>
        </div>
        <div className="md:w-3/5 p-10 md:p-16">
            <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-[10px] mb-6">
                <Beaker size={14} />
                <span>{category}</span>
            </div>
            <h3 className="text-3xl font-black text-secondary mb-6 leading-tight">{title}</h3>
            
            <div className="space-y-8 mb-10">
                <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                        <Target size={14} /> Objectives
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{objectives}</p>
                </div>
                <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                        <PieChart size={14} /> Global Impact
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{impact}</p>
                </div>
            </div>

            <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest hover:gap-4 transition-all">
                    View Methodology <ChevronRight size={14} />
                </button>
                <button className="flex items-center gap-2 text-slate-400 font-black text-[10px] uppercase tracking-widest hover:text-secondary transition-all">
                    <FileText size={14} /> White Paper
                </button>
            </div>
        </div>
    </motion.div>
);

const ResearchPage = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            <PageHero 
                title="Research Initiatives" 
                subtitle="Methodologies built for rural contexts, addressing the most pressing public health challenges of our time."
                breadcrumbs={[{ name: 'Work', href: '#' }]}
            />

            <section className="py-24">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="space-y-12">
                        <ResearchInitiative 
                            title="Rural Opioid Response System (RORS)"
                            category="Public Health / Data Science"
                            objectives="Establishing a standardized framework for measuring MAT accessibility and compliance in population densities below 50/sq mile."
                            impact="Currently deployed across 7 states, influencing over $15M in regional health funding allocations."
                            image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop"
                            delay={0.1}
                        />
                        <ResearchInitiative 
                            title="Benzodiazepine Risk Mitigation"
                            category="Clinical Oversight"
                            objectives="Quantifying the impact of co-prescription protocols on long-term recovery outcomes for vulnerable demographics."
                            impact="Reduced high-risk prescription overlaps by 18% in partner clinical networks within 12 months."
                            image="https://images.unsplash.com/photo-1576089172869-4f5f6f315620?q=80&w=1000&auto=format&fit=crop"
                            delay={0.2}
                        />
                    </div>
                </div>
            </section>

            {/* Methodology Teaser */}
            <section className="py-24 bg-secondary text-white relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-accent font-black tracking-[0.3em] uppercase text-xs mb-4 block">Our Methodology</span>
                            <h2 className="text-4xl font-black mb-8 leading-tight">Rigorous data, <br />Human interpretation.</h2>
                            <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                                We combine longitudinal statistical analysis with qualitative community focus groups to ensure our findings represent both the numbers and the lives behind them.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <div className="text-3xl font-black text-accent mb-2">98%</div>
                                    <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Data Accuracy Rate</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-black text-accent mb-2">15+</div>
                                    <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Yearly Publications</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square bg-white/5 rounded-[4rem] flex items-center justify-center p-12 border border-white/10">
                                <ShieldAlert size={120} className="text-accent/20" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-white p-10 rounded-3xl shadow-2xl text-secondary max-w-[280px]">
                                        <h4 className="font-black mb-4">Integrity Guarantee</h4>
                                        <p className="text-xs text-slate-500 leading-relaxed">TSRG maintains strict independence from pharmaceutical influence, ensuring all research is unbiased and public-interest focused.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ResearchPage;
