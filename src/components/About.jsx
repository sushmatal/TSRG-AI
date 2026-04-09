import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Lightbulb, Users2 } from 'lucide-react';

const About = () => {
    const values = [
        { icon: <Shield size={24} />, title: "Trust", description: "Building long-term relationships with rural leaders and families." },
        { icon: <Target size={24} />, title: "Precision", description: "Ensuring data is accurate, relevant, and actionable." },
        { icon: <Lightbulb size={24} />, title: "Innovation", description: "Developing custom solutions for unique rural challenges." },
        { icon: <Users2 size={24} />, title: "Equity", description: "Addressing disparities in health and resource access." }
    ];

    return (
        <section id="about" className="py-32 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <span className="text-primary font-black tracking-[0.3em] uppercase text-xs mb-6 block">Who We Are</span>
                    <h2 className="text-4xl md:text-5xl font-black text-secondary mb-10 leading-tight tracking-tight">
                        A Backbone Partner for <br /> Rural Resilience.
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed font-medium mx-auto max-w-2xl">
                        Founded in 2018, The Schreiber Research Group (TSRG) was born out of a simple realization: rural communities have the data, but often lack the specialized "backbone" support to turn that data into sustainable policy and programs.
                    </p>
                    <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-16 mx-auto max-w-3xl">
                        We operate at the intersection of public public health, data science, and community advocacy. Our team doesn't just deliver a report and leave; we stay to ensure the solutions we build together actually work for the families they serve.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-24">
                        {values.map((val, i) => (
                            <div key={i} className="flex flex-col items-center group">
                                <div className="text-primary p-4 bg-white rounded-3xl shadow-sm border border-slate-100 group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-6">{val.icon}</div>
                                <div>
                                    <h4 className="font-black text-secondary text-lg mb-3 group-hover:text-primary transition-colors">{val.title}</h4>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{val.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="relative max-w-2xl mx-auto">
                        <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-[3rem] relative overflow-hidden shadow-inner border border-white/50 backdrop-blur-3xl">
                            {/* Abstract graphic representation of "Backbone" */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-full h-2/3 bg-white/60 backdrop-blur-3xl p-10 md:p-16 border border-white/40 shadow-2xl rounded-[2rem]">
                                    <h4 className="text-2xl md:text-3xl font-black text-secondary/40 uppercase tracking-tighter mb-6">The Backbone Support</h4>
                                    <div className="space-y-6">
                                        <div className="h-4 w-3/4 bg-primary/20 rounded-full"></div>
                                        <div className="h-4 w-1/2 bg-primary/20 rounded-full"></div>
                                        <div className="h-4 w-5/6 bg-primary/20 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Stats floaters */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 bg-white p-6 md:p-10 rounded-[2rem] shadow-2xl border border-slate-50 hidden md:block"
                        >
                            <div className="text-4xl md:text-5xl font-black text-primary mb-2">2018</div>
                            <div className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Founded</div>
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 7, repeat: Infinity, delay: 1, ease: "easeInOut" }}
                            className="absolute -bottom-10 -left-10 bg-white p-6 md:p-10 rounded-[2rem] shadow-2xl border border-slate-50 hidden md:block"
                        >
                            <div className="text-4xl md:text-5xl font-black text-secondary mb-2">50+</div>
                            <div className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Rural Partners</div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
