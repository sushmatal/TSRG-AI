import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-[600px] h-[85vh] flex items-center justify-center overflow-hidden bg-secondary mt-16">
            {/* Background Image with Cool Blue Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/library-header.png"
                    alt="Grand Library Background"
                    className="w-full h-full object-cover object-center translate-y-0 opacity-70"
                />
                <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-50 to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl text-center py-20 lg:py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="inline-block py-2 px-6 rounded-full bg-white text-primary text-[10px] font-black tracking-[0.4em] uppercase mb-10 border border-white/20 backdrop-blur-md shadow-2xl">
                        Knowledge for Change
                    </span>

                    <h1 className="text-3xl md:text-5xl lg:text-5xl font-black text-white leading-[1.1] mb-8 tracking-tight drop-shadow-lg uppercase max-w-5xl mx-auto">
                        Turning <span className="text-[#FCE6A3] italic">Data</span> into Stories, <br className="hidden md:block" />
                        Stories into <span className="text-[#FCE6A3] italic">Change</span>.
                    </h1>

                    <p className="text-base md:text-lg lg:text-xl text-white mb-10 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-md">
                        We partner with rural and urban communities to transform local data into real-world solutions. We bring partners together to co-create data-driven solutions to improve outcomes for projects and communities.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 relative z-20">
                        <button className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-full font-black text-lg transition-all flex items-center justify-center gap-3 group shadow-2xl shadow-primary/40 hover:-translate-y-1">
                            Support Us
                            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="w-full sm:w-auto bg-white hover:bg-slate-50 text-primary border border-white/20 px-10 py-5 rounded-full font-black text-lg transition-all shadow-2xl hover:-translate-y-1">
                            Our Solutions
                        </button>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="flex flex-col items-center gap-2 text-white/60"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.5em]">Scroll to Discover</span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        >
                            <ArrowDown size={20} />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
