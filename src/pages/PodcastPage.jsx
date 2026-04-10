import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import { Play, Headphones, Mic, Heart, Forward, Clock, Calendar } from 'lucide-react';

const EpisodeCard = ({ episode, title, date, duration, summary, delay }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row gap-8 items-start md:items-center"
    >
        <div className="w-24 h-24 shrink-0 bg-slate-50 rounded-2xl flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform">
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
            <Play className="text-primary w-10 h-10 ml-1 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" fill="currentColor" />
        </div>
        
        <div className="flex-1">
            <div className="flex items-center gap-4 text-[10px] font-black uppercase text-slate-400 tracking-widest mb-3">
                <span className="text-primary bg-primary/10 px-3 py-1 rounded-full text-[9px]">EPISODE {episode}</span>
                <div className="flex items-center gap-1.5"><Calendar size={12} /> {date}</div>
                <div className="flex items-center gap-1.5"><Clock size={12} /> {duration}</div>
            </div>
            <h3 className="text-2xl font-black text-secondary mb-3 group-hover:text-primary transition-colors cursor-pointer">
                {title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-3xl">
                {summary}
            </p>
        </div>
        
        <div className="shrink-0 flex gap-3">
            <button className="w-12 h-12 rounded-full border-2 border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 transition-all">
                <Heart size={18} />
            </button>
            <button className="w-12 h-12 rounded-full border-2 border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 transition-all">
                <Forward size={18} />
            </button>
        </div>
    </motion.div>
);

const PlatformButton = ({ platform, icon: Icon }) => (
    <button className="flex items-center gap-4 bg-white px-8 py-4 rounded-full border-2 border-slate-100 hover:border-primary hover:shadow-xl hover:shadow-primary/10 transition-all group">
        <Icon className="text-slate-400 group-hover:text-primary transition-colors" size={24} />
        <span className="font-black text-secondary text-sm tracking-widest uppercase">{platform}</span>
    </button>
);

const PodcastPage = () => {
    const episodes = [
        {
            episode: "3",
            title: "Expanding Care: Conejos & Bent Counties",
            date: "NOV 12, 2024",
            duration: "42 MIN",
            summary: "In this episode, we dive deep into the specific challenges of resource allocation in Conejos and Bent counties, speaking with local health leaders about their grassroots efforts to combat the substance use crisis."
        },
        {
            episode: "2",
            title: "Voices from Otero & Crowley",
            date: "OCT 28, 2024",
            duration: "38 MIN",
            summary: "Hearing directly from community advocates in Otero and Crowley on how new behavioral health frameworks are fundamentally altering the approach to addiction recovery in rural domains."
        },
        {
            episode: "1",
            title: "The Substance Use Crisis: A Path Forward",
            date: "OCT 05, 2024",
            duration: "45 MIN",
            summary: "Our inaugural episode outlines the core mission of A Path Forward. We map out the substance use crisis impacting rural Colorado and discuss the overarching strategy for generating sustainable change."
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Custom Audio-Themed Hero */}
            <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 text-white">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-20 blur-[100px]"></div>
                </div>
                
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex-1 text-center lg:text-left"
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-primary font-black text-xs uppercase tracking-[0.2em] mb-8">
                                <Mic size={14} className="animate-pulse" /> Official Podcast
                            </span>
                            <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
                                A Path <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Forward.</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                A Path Forward is a podcast that discusses the substance use crisis and the work being conducted in Otero, Crowley, Bent and Conejos counties.
                            </p>
                            
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                                <PlatformButton platform="Spotify" icon={Headphones} />
                                <PlatformButton platform="Apple Podcasts" icon={Play} />
                            </div>
                        </motion.div>
                        
                        {/* Hero Graphic */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex-1 w-full max-w-md lg:max-w-none"
                        >
                            <div className="aspect-square rounded-[3rem] bg-gradient-to-tr from-slate-800 to-slate-900 border border-white/10 p-8 shadow-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-primary/5 mix-blend-overlay group-hover:bg-primary/20 transition-all duration-700" />
                                <img 
                                    src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1000&auto=format&fit=crop" 
                                    alt="Podcast Microphone" 
                                    className="w-full h-full object-cover rounded-[2rem] opacity-70 group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all shadow-2xl">
                                        <Play size={40} className="ml-2" fill="currentColor" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Recent Episodes */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="flex items-center justify-between mb-16">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-black text-secondary mb-4">Latest Episodes</h2>
                            <p className="text-slate-500">Listen to our latest discussions on rural health resilience.</p>
                        </div>
                        <button className="hidden md:flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary hover:gap-4 transition-all pr-4">
                            View All Episodes <Forward size={14} />
                        </button>
                    </div>

                    <div className="space-y-6">
                        {episodes.map((ep, i) => (
                            <EpisodeCard key={ep.episode} {...ep} delay={i * 0.1} />
                        ))}
                    </div>

                    <div className="mt-12 text-center md:hidden">
                        <button className="bg-white border-2 border-slate-100 px-10 py-4 rounded-full text-xs font-black uppercase tracking-widest text-slate-500 hover:border-primary/20 hover:text-primary transition-all">
                            View All Episodes
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PodcastPage;
