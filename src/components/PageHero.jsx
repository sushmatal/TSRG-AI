import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PageHero = ({ title, subtitle, breadcrumbs = [] }) => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900 border-b border-white/5">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent opacity-50" />
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30" />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 mb-8 text-slate-400 text-xs font-bold uppercase tracking-widest">
                    <Link to="/" className="hover:text-white transition-colors">Home</Link>
                    {breadcrumbs.map((crumb, i) => (
                        <React.Fragment key={i}>
                            <ChevronRight size={12} className="text-slate-600" />
                            <Link to={crumb.href} className="hover:text-white transition-colors">
                                {crumb.name}
                            </Link>
                        </React.Fragment>
                    ))}
                    <ChevronRight size={12} className="text-slate-600" />
                    <span className="text-accent">{title}</span>
                </nav>

                <div className="max-w-4xl">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight"
                    >
                        {title}
                    </motion.h1>
                    {subtitle && (
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium max-w-2xl"
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </div>
            </div>
            
            {/* Visual accent */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </section>
    );
};

export default PageHero;
