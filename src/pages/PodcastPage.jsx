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
            <PageHero 
                title="Official Podcast"
                backgroundImage={`${import.meta.env.BASE_URL}Header%20Images/Generic%20Banner.png`}
            />

            <section className="pt-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-black text-secondary leading-tight tracking-tight"
                    >
                        A Path Forward is a podcast that discusses the substance use crisis and the work being conducted in Otero, Crowley, Bent and Conejos counties.
                    </motion.p>
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
