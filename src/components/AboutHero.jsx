import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
    return (
        <section className="relative min-h-[500px] h-[70vh] flex items-center justify-center overflow-hidden bg-secondary">
            {/* Background Image with Cool Blue Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/about_header_community_strategy_1773950920170.png"
                    alt="Strategic Community Collaboration"
                    className="w-full h-full object-cover object-center opacity-60"
                />
                <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-50 to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="inline-block py-2 px-6 rounded-full bg-white text-primary text-[10px] font-black tracking-[0.4em] uppercase mb-10 border border-white/20 backdrop-blur-md shadow-2xl">
                        Our Strategic Identity
                    </span>

                    <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8 tracking-tight max-w-5xl mx-auto uppercase">
                        TSRG: Partnering with <span className="text-[#FCE6A3] italic">urban and rural</span> communities to transform local data into real-world solutions.
                    </h1>

                    <p className="text-lg md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
                        We lead the research, program development, and collaborative leadership that unite schools, health workers, and neighbors to build healthier families.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutHero;
