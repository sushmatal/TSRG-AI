import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../components/PageHero';
import { Search, Filter, Calendar, User, Clock, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedInsightCard = ({ title, category, summary, date, readTime, image, id }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl mb-16 flex flex-col lg:flex-row h-auto lg:h-[500px]"
    >
        <div className="w-full lg:w-1/2 relative overflow-hidden h-72 lg:h-full shrink-0">
            <img 
                src={image} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80 mix-blend-overlay"
                alt={title}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent lg:hidden" />
            
            <div className="absolute top-8 left-8">
                 <span className="bg-primary px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest text-white shadow-xl flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" /> {category}
                </span>
            </div>
        </div>
        <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center relative z-10 text-white">
            <div className="flex items-center gap-6 text-xs font-black uppercase text-slate-400 tracking-widest mb-6">
                <div className="flex items-center gap-2"><Calendar size={14} /> {date}</div>
                <div className="flex items-center gap-2"><Clock size={14} /> {readTime}</div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight group-hover:text-primary transition-colors">
                <Link to={`/insights/${id}`}>{title}</Link>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-xl line-clamp-3">
                {summary}
            </p>
            <div className="mt-auto">
                <Link 
                    to={`/insights/${id}`} 
                    className="inline-flex items-center gap-3 bg-white text-secondary px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-xl hover:shadow-primary/30 hover:gap-5"
                >
                    Read Full Story <ArrowRight size={16} />
                </Link>
            </div>
        </div>
    </motion.div>
);

const InsightCard = ({ title, category, summary, date, readTime, image, id, delay }) => (
    <motion.div 
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.4 }}
        className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
    >
        <div className="aspect-[4/3] relative overflow-hidden">
            <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute top-4 left-4">
                <span className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest text-primary shadow-lg border border-white/20">
                    {category}
                </span>
            </div>
        </div>
        <div className="p-8 flex-1 flex flex-col">
            <div className="flex items-center gap-4 text-[9px] font-black uppercase text-slate-400 tracking-widest mb-4">
                <div className="flex items-center gap-1.5"><Calendar size={12} /> {date}</div>
            </div>
            <h3 className="text-xl font-black text-secondary mb-4 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                <Link to={`/insights/${id}`}>{title}</Link>
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                {summary}
            </p>
            <Link 
                to={`/insights/${id}`} 
                className="inline-flex mt-auto items-center gap-2 text-[10px] font-black uppercase tracking-widest text-secondary group-hover:text-primary transition-all"
            >
                Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
    </motion.div>
);

const InsightsPage = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const insights = [
        {
            id: 'giving-season-2025',
            title: "Giving Season 2025 — Help us continue our impact together!",
            category: "Initiatives",
            summary: "As we enter this season of gratitude and generosity, we’re reminded of how much we’ve accomplished together with our dedicated community of supporters, volunteers, and partners. Your commitment has helped us make a lasting impact throughout the year.",
            date: "NOV 05, 2025",
            readTime: "4 MIN READ",
            image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop",
            featured: true
        },
        {
            id: 'newsletter-q3-2025',
            title: "TSRG Newsletter Q3 2025",
            category: "Newsletter",
            summary: "The TSRG Q3 Newsletter for September 2025 is now live! This edition features the debut of Terri’s Corner, a summary of HRSA accomplishments from 2020 to 2025, and a powerful showcase on naloxone.",
            date: "SEP 24, 2025",
            readTime: "10 MIN READ",
            image: "https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 'strengthen-impact-survey',
            title: "Help us strengthen our impact together",
            category: "Outreach",
            summary: "Complete our latest community survey to help shape the future direction of TSRG's outreach and program development efforts. Your voice is critical to our next steps.",
            date: "OCT 28, 2025",
            readTime: "2 MIN READ",
            image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 'newsletter-q2-2025',
            title: "TSRG Newsletter Q2 2025",
            category: "Newsletter",
            summary: "The TSRG Q2 Newsletter for June 2025 is now live! This edition features information about our rebranding and new statewide health initiatives.",
            date: "JUN 18, 2025",
            readTime: "8 MIN READ",
            image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 'evidence-based-prevention',
            title: "The Case for Evidence-Based Drug Prevention",
            category: "Research",
            summary: "This report highlights the ongoing impact of the substance use epidemic on communities across Colorado and the nation in response to this crisis.",
            date: "MAR 24, 2025",
            readTime: "15 MIN READ",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 'annual-letter-2025',
            title: "TSRG’s Annual Letter for 2025",
            category: "Updates",
            summary: "The year 2024 was filled with opportunities and growth for TSRG. Please find the details in our annual letter and our plans for 2025!",
            date: "JAN 01, 2025",
            readTime: "6 MIN READ",
            image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop"
        }
    ];

    const categories = ['All', ...new Set(insights.map(i => i.category))];
    
    // Separate featured and regular insights
    const featuredInsight = insights.find(i => i.featured);
    const gridInsights = insights.filter(i => !i.featured);

    const filteredInsights = activeFilter === 'All' 
        ? gridInsights 
        : gridInsights.filter(i => i.category === activeFilter);

    const showFeatured = activeFilter === 'All';

    return (
        <div className="min-h-screen bg-slate-50">
            <PageHero 
                title="Blog" 
                subtitle="Blog posts provide the latest information on our project activities, newsletters and other noteworthy events."
                breadcrumbs={[{ name: 'Blog', href: '#' }]}
                backgroundImage={`${import.meta.env.BASE_URL}Header%20Images/Generic%20Banner.png`}
            />

            {/* Filter Bar */}
            <section className="sticky top-24 z-40 bg-white/90 backdrop-blur-xl shadow-sm py-4 border-b border-slate-200">
                <div className="container mx-auto px-6 max-w-7xl overflow-x-auto no-scrollbar">
                    <div className="flex flex-nowrap md:flex-wrap items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mr-2 shrink-0 flex items-center gap-2">
                            <Filter size={12} /> Filter By:
                        </span>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all shrink-0 ${
                                    activeFilter === cat 
                                    ? 'bg-secondary text-white shadow-lg' 
                                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-secondary'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    
                    {/* Featured Insight Section */}
                    {showFeatured && featuredInsight && (
                        <FeaturedInsightCard {...featuredInsight} />
                    )}

                    {/* Content Section Title if filtered */}
                    {!showFeatured && (
                        <div className="mb-10 flex items-center gap-4">
                            <h3 className="text-xl font-black text-secondary uppercase tracking-widest">{activeFilter} Posts</h3>
                            <div className="h-px bg-slate-200 flex-1" />
                        </div>
                    )}

                    {showFeatured && (
                        <div className="flex items-center justify-between mb-10 pt-10 border-t border-slate-200">
                            <h3 className="text-xl font-black text-secondary">Latest Insights</h3>
                        </div>
                    )}

                    {/* Standard Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-1">
                        <AnimatePresence mode="popLayout">
                            {filteredInsights.map((item, i) => (
                                <InsightCard key={item.id} {...item} delay={i * 0.1} />
                            ))}
                        </AnimatePresence>
                    </div>

                    {filteredInsights.length === 0 && (
                        <div className="py-20 text-center">
                            <p className="text-slate-500 font-medium">No posts found for this category.</p>
                        </div>
                    )}

                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative bg-secondary text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent hidden md:block" />
                <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center flex flex-col items-center">
                    <h2 className="text-3xl md:text-5xl font-black mb-6">Stay informed.</h2>
                    <p className="text-slate-300 text-lg mb-10 max-w-xl">
                        Signup for TSRG email correspondence to receive our quarterly newsletter, research updates, and more!
                    </p>
                    <form className="flex w-full max-w-md flex-col sm:flex-row gap-3">
                        <input 
                            type="email" 
                            placeholder="Your Email Address" 
                            className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-full text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 ring-primary transition-all text-sm font-medium"
                        />
                        <button className="bg-primary text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-[10px] hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 transition-all">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>

        </div>
    );
};

export default InsightsPage;
