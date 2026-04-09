import React from 'react';
import { motion } from 'framer-motion';

const TSRGFramework = () => {
    const stages = [
        {
            letter: "T",
            title: "Trust Stage",
            description: "Building long-term, ethical relationships with rural leaders and families.",
            color: "text-primary"
        },
        {
            letter: "S",
            title: "Service Stage",
            description: "Delivering actionable insights that solve immediate community needs efficiently.",
            color: "text-accent"
        },
        {
            letter: "R",
            title: "Research Stage",
            description: "Providing evidence-based methodologies and rigorous evaluation to inform local solutions.",
            color: "text-primary"
        },
        {
            letter: "G",
            title: "Guidance Stage",
            description: "Navigating complex systems to lead sustainable long-term success.",
            color: "text-secondary"
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <span className="text-primary font-black tracking-[0.3em] uppercase text-[10px] mb-4 block underline underline-offset-8">The TSRG Framework</span>
                    <h2 className="text-3xl md:text-5xl font-black text-secondary tracking-tight leading-tight mb-6">Built Into Our Name.</h2>
                    <p className="text-slate-500 text-lg font-bold leading-relaxed max-w-2xl mx-auto">
                        While our <span className="text-primary italic">Strategic Pillars</span> define our foundation, the **TSRG Framework** represents the **four critical stages** of our collaborative work with communities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {stages.map((stage, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="relative group pt-20"
                        >
                            <div className={`absolute top-0 left-0 text-[12rem] font-black leading-none opacity-20 select-none ${stage.color} group-hover:opacity-40 transition-all duration-500 group-hover:scale-110`}>
                                {stage.letter}
                            </div>
                            <div className="relative z-10">
                                <h4 className="text-3xl font-black text-secondary mb-4 tracking-tighter uppercase">{stage.title}</h4>
                                <div className="w-12 h-1.5 bg-primary mb-6 group-hover:w-24 transition-all duration-500"></div>
                                <p className="text-lg text-slate-500 font-bold leading-relaxed italic">
                                    "{stage.description}"
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TSRGFramework;
