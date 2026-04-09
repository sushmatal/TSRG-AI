import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../components/PageHero';
import { Search, Filter, Calendar, User, Clock, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const InsightCard = ({ title, category, summary, date, author, readTime, image, id, delay }) => (
    <motion.div 
        layout
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
    >
        <div className="aspect-video relative overflow-hidden">
            <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            />
            <div className="absolute top-6 left-6">
                <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-primary shadow-xl">
                    {category}
                </span>
            </div>
        </div>
        <div className="p-10 flex-1 flex flex-col text-left">
            <div className="flex items-center gap-4 text-[10px] font-black uppercase text-slate-400 tracking-widest mb-6">
                <div className="flex items-center gap-1.5"><Calendar size={12} /> {date}</div>
                <div className="flex items-center gap-1.5"><Clock size={12} /> {readTime}</div>
            </div>
            <h3 className="text-2xl font-black text-secondary mb-4 leading-tight group-hover:text-primary transition-colors">
                <Link to={`/insights/${id}`}>{title}</Link>
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">
                {summary}
            </p>
            <Link 
                to={`/insights/${id}`} 
                className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary hover:gap-4 transition-all"
            >
                Read Impact Report <ArrowRight size={14} />
            </Link>
        </div>
    </motion.div>
);

const InsightsPage = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const categories = ['All', 'Research Highlights', 'Publications', 'News & Updates', 'Events'];
    
    const insights = [
        {
            id: 'opioid-response-2024',
            title: "Evaluating Rural Opioid Response Systems: A 5-Region Study",
            category: "Research Highlights",
            summary: "Our latest longitudinal study across 5 rural counties reveals critical gaps in medication-assisted treatment accessibility and provides roadmap for policy intervention.",
            date: "OCT 20, 2024",
            author: "Bharat",
            readTime: "12 MIN READ",
            image: "https://images.unsplash.com/photo-1576089172869-4f5f6f315620?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 'harm-reduction-impact',
            title: "The Physics of Harm Reduction: Measuring Distribution vs. Outcome",
            category: "Publications",
            summary: "Analyzing the statistical correlation between mobile kit distribution and localized overdose prevention rates in the Central Valley.",
            date: "SEP 12, 2024",
            author: "Sushma",
            readTime: "15 MIN READ",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 'annual-rural-summit',
            title: "2025 Rural Health Equity Summit: Registration Now Open",
            category: "Events",
            summary: "Join 500+ leaders in Sacramento for our annual summit focused on building the 'Backbone' support systems for rural vulnerable populations.",
            date: "AUG 05, 2024",
            author: "Lauren",
            readTime: "3 MIN READ",
            image: "https://images.unsplash.com/photo-1540575861501-7ad060e39fe5?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 'workgroup-launch',
            title: "New Multi-Agency Workgroup Launched for Youth Mental Health",
            category: "News & Updates",
            summary: "TSRG welcomes 12 new partner organizations to our specialized youth mental health taskforce, targeting K-12 support in marginalized districts.",
            date: "JUL 28, 2024",
            author: "Maddie",
            readTime: "5 MIN READ",
            image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1000&auto=format&fit=crop"
        }
    ];

    const filteredInsights = activeFilter === 'All' 
        ? insights 
        : insights.filter(i => i.category === activeFilter);

    return (
        <div className="min-h-screen bg-slate-50">
            <PageHero 
                title="The Insights Hub" 
                subtitle="A centralized repository of data-driven research, policy briefs, and community impact reports."
            />

            {/* Filter Bar */}
            <section className="sticky top-24 z-40 bg-white shadow-sm border-b border-slate-100 py-6">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                                    activeFilter === cat 
                                    ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105' 
                                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                        <AnimatePresence mode="popLayout">
                            {filteredInsights.map((item, i) => (
                                <InsightCard key={item.id} {...item} delay={i * 0.1} />
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Pagination Placeholder */}
                    <div className="mt-24 text-center">
                        <button className="bg-white border-2 border-slate-100 px-10 py-4 rounded-full text-xs font-black uppercase tracking-widest text-slate-400 hover:border-primary/20 hover:text-primary transition-all">
                            Load More Insights
                        </button>
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-24 bg-secondary text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/20 -skew-x-12 transform translate-x-1/2" />
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl font-black mb-6">Stay informed on rural impact.</h2>
                        <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                            Subscribe to our monthly research digest and get the latest harm reduction metrics and policy updates delivered straight to your inbox.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4">
                            <input 
                                type="email" 
                                placeholder="Your Organization Email" 
                                className="flex-1 bg-white/10 border border-white/20 px-8 py-5 rounded-3xl text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 ring-accent transition-all"
                            />
                            <button className="bg-accent text-white px-10 py-5 rounded-3xl font-black uppercase tracking-widest text-xs hover:-translate-y-1 transition-all shadow-xl">
                                Join The Network
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InsightsPage;
