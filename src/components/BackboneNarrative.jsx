import React from 'react';
import { motion } from 'framer-motion';

const BackboneNarrative = () => {
    const descriptions = [
        "TSRG serves as a trusted backbone for urban and rural recovery efforts, helping communities turn scattered ideas into one clear path forward.",
        "By blending data with local wisdom, we bring neighbors together to jointly tackle substance abuse and mental health.",
        "We guide residents and leaders so that knowledge becomes power to create lasting change on their own terms."
    ];

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary font-black tracking-[0.3em] uppercase text-xs mb-6 block">Our Identity</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-8 leading-tight tracking-tight">
                            Your <span className="text-primary italic">Backbone Partner</span> for Sustainable Change.
                        </h2>
                        <div className="space-y-8">
                            {descriptions.map((desc, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary font-black text-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        {i + 1}
                                    </div>
                                    <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed pt-2">
                                        {desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-square bg-white rounded-[4rem] shadow-2xl border border-slate-100 flex items-center justify-center p-4 overflow-hidden group">
                            <img 
                                src="/strategic_infrastructure_backbone_1773950424182.png" 
                                alt="Strategic Infrastructure Backbone" 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-blue-900/20 transition-colors duration-500"></div>
                            <div className="relative z-10 text-center">
                                <div className="text-5xl font-black text-white mb-4 select-none uppercase tracking-tighter drop-shadow-lg">Backbone</div>
                                <p className="text-[#FCE6A3] font-bold uppercase tracking-[0.2em] text-xs drop-shadow-md">Strategic Infrastructure</p>
                            </div>
                            
                            {/* Decorative circles */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BackboneNarrative;
