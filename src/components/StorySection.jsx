import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Settings, ShieldCheck, Activity, SearchCheck } from 'lucide-react';

const StorySection = () => {
    const sections = [
        {
            title: "Our Mission",
            icon: <Target className="text-primary" size={24} />,
            content: "TSRG partners with rural and urban communities to transform local data into real-world solutions. We provide consulting services, research, program development, and leadership to build stronger, collaborative solutions and improve outcomes."
        },
        {
            title: "Our Vision",
            icon: <Eye className="text-primary" size={24} />,
            content: "We believe building healthy rural and urban communities starts with listening. We lead projects or partner with community coalitions to find solutions to community challenges and then bring partners together to turn knowledge into lasting change."
        },
        {
            title: "Our Purpose",
            icon: <Heart className="text-primary" size={24} />,
            content: "TSRG serves as a trusted backbone for rural and urban prevention and workforce development services, helping communities turn ideas into a clear path forward by blending data with local wisdom."
        }
    ];

    const values = [
        { letter: "T", title: "Trust", description: "Building long-term, ethical relationships with rural leaders and families.", icon: <ShieldCheck size={20} /> },
        { letter: "S", title: "Service", description: "Delivering actionable insights that solve immediate community needs efficiently.", icon: <Activity size={20} /> },
        { letter: "R", title: "Research", description: "Providing evidence-based methodologies and rigorous evaluation to inform local solutions.", icon: <SearchCheck size={20} /> },
        { letter: "G", title: "Guidance", description: "Navigating complex systems to lead sustainable long-term success.", icon: <Settings size={20} /> }
    ];

    return (
        <section id="about" className="py-16 bg-slate-50">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    {section.icon}
                                </div>
                                <h4 className="text-xl font-black text-secondary uppercase tracking-tight">{section.title}</h4>
                            </div>
                            <p className="text-slate-500 leading-relaxed text-base font-medium">{section.content}</p>
                        </motion.div>
                    ))}
                </div>

                {/* TSRG Values Section */}
                <div className="mt-20 border-t border-slate-200 pt-20">
                    <div className="text-center mb-12">
                        <span className="text-primary font-black tracking-[0.3em] uppercase text-sm md:text-base mb-4 block">The TSRG Framework</span>
                        <h3 className="text-4xl md:text-5xl font-black text-secondary tracking-tight">Values Built Into Our Name</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                        {values.map((val, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group relative overflow-hidden"
                            >
                                <div className="text-6xl md:text-7xl font-black text-primary mb-6 group-hover:scale-110 transition-transform relative z-10">{val.letter}</div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-6 px-3 py-1 bg-slate-50 rounded-full group-hover:bg-primary group-hover:text-white transition-all relative z-10">The {val.title} Stage</div>
                                <div className="p-4 bg-slate-50 rounded-2xl text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 relative z-10">
                                    {val.icon}
                                </div>
                                <p className="text-slate-500 font-bold leading-snug relative z-10 text-sm">{val.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StorySection;
