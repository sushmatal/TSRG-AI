import React from 'react';
import { motion } from 'framer-motion';
import { Search, GitBranch, PlayCircle, Heart } from 'lucide-react';

const LogicModel = () => {
    const steps = [
        {
            title: "Name the Problem",
            description: "Identifying needs and landscape reviews.",
            features: ["Landscape Reviews", "Needs Assessments", "Gap Analysis"],
            icon: <Search size={28} />
        },
        {
            title: "Research Solutions",
            description: "Gaining deeper insights into community conditions.",
            features: ["Qualitative Research", "Quantitative Research", "Evidence-Based Design"],
            icon: <GitBranch size={28} />
        },
        {
            title: "Take Action",
            description: "Implementing program management and new policies.",
            features: ["Group Facilitation", "Implementation Planning", "Stakeholder Alignment"],
            icon: <PlayCircle size={28} />
        },
        {
            title: "Healthier Communities",
            description: "Achieving long-term sustainable outcomes.",
            features: ["Program Evaluation", "Performance Metrics", "Scalability Planning"],
            icon: <Heart size={28} />
        }
    ];

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className="text-primary font-black tracking-[0.3em] uppercase text-xs mb-4 block">Our Path to System Change</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary tracking-tight leading-[1.1] mb-6">How Our <span className="text-primary italic font-black">Upstream</span> Work Creates <span className="text-primary italic font-black">Downstream</span> Impact.</h2>
                </div>

                <div className="relative">
                    {/* Connection Line Desktop */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary/5 via-primary to-primary/5 hidden lg:block -translate-y-1/2"></div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.2 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-20 h-20 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center text-primary mb-8 shadow-xl group-hover:scale-110 transition-transform relative">
                                    <div className="absolute -top-1 -right-1 w-8 h-8 bg-primary text-white text-xs font-black rounded-full flex items-center justify-center border-4 border-white">
                                        {i + 1}
                                    </div>
                                    {step.icon}
                                </div>
                                <h4 className="text-2xl font-black text-secondary mb-4 tracking-tight leading-tight">{step.title}</h4>
                                <p className="text-slate-500 font-bold leading-relaxed mb-6">{step.description}</p>
                                <ul className="space-y-2 text-left w-full max-w-[200px]">
                                    {step.features.map((feat, j) => (
                                        <li key={j} className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-wider">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
                
                <div className="mt-20 p-10 bg-white rounded-[3rem] shadow-xl border border-slate-100 text-center max-w-4xl mx-auto">
                    <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed italic">
                        "TSRG guides communities from data to action, ensuring that every insight results in tangible progress for rural families."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default LogicModel;
