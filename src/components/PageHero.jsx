import React from 'react';
import { motion } from 'framer-motion';

const PageHero = ({ title, backgroundImage, imageAlignment = 'object-center' }) => {
    return (
        <section className="relative pt-48 pb-32 overflow-hidden bg-slate-900 border-b border-white/5">
            {/* Background Image Overlay */}
            {backgroundImage && (
                <div className="absolute inset-0 z-0">
                    <img 
                        src={backgroundImage} 
                        alt={title} 
                        className={`w-full h-full object-cover ${imageAlignment} opacity-40`} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                </div>
            )}
            
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent opacity-50" />
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30" />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="max-w-4xl">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight"
                    >
                        {title}
                    </motion.h1>
                </div>
            </div>
            
            {/* Visual accent */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </section>
    );
};

export default PageHero;
