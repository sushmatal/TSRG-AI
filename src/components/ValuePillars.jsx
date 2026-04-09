import React from 'react';
import { motion } from 'framer-motion';
import { Users2, ShieldCheck, Microscope, Network } from 'lucide-react';

const ValuePillars = () => {
    const pillars = [
        {
            title: "Collaboration Power",
            description: "We unite schools, public health, and justice partners around shared prevention goals.",
            icon: <Users2 size={32} />
        },
        {
            title: "Rural Trust",
            description: "Deep, multi-year relationships make us a credible, community-trusted backbone partner.",
            icon: <ShieldCheck size={32} />
        },
        {
            title: "Research → Action",
            description: "We translate mixed-methods data into practical, community-designed solutions.",
            icon: <Microscope size={32} />
        },
        {
            title: "Cross-Sector Networks",
            description: "Strong ties across diverse sectors accelerate coordination and strengthen every project.",
            icon: <Network size={32} />
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className="text-primary font-black tracking-[0.3em] uppercase text-xs mb-4 block underline underline-offset-8">Our Foundations</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary tracking-tight leading-[1.1] mb-6">Four Pillars of Strategic Resilience.</h2>
                    <p className="text-slate-500 text-lg font-bold leading-relaxed max-w-2xl mx-auto">Our strategic foundations ensure that every community we serve receives data-driven, locally-owned, and cross-sector supported solutions.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pillars.map((pillar, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="p-8 pb-12 bg-slate-50 border border-slate-100 rounded-[2.5rem] hover:shadow-xl hover:border-primary/20 transition-all group"
                        >
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                                {pillar.icon}
                            </div>
                            <h4 className="text-2xl font-black text-secondary mb-4 tracking-tight leading-tight group-hover:text-primary transition-colors">{pillar.title}</h4>
                            <p className="text-slate-500 font-medium leading-relaxed">{pillar.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValuePillars;
