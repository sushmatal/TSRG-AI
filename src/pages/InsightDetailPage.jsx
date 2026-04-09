import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowLeft, Share2, Printer, Bookmark } from 'lucide-react';

const InsightDetailPage = () => {
    const { id } = useParams();

    // In a real app, this would be fetched based on the ID
    const content = {
        title: "Evaluating Rural Opioid Response Systems: A 5-Region Study",
        category: "Research Highlights",
        date: "OCT 20, 2024",
        author: "Bharat",
        authorRole: "Executive Leadership, TSRG",
        readTime: "12 MIN READ",
        image: "https://images.unsplash.com/photo-1576089172869-4f5f6f315620?q=80&w=1000&auto=format&fit=crop",
        tags: ["Public Health", "Opioid Crisis", "Rural Resilience", "Policy Design"]
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Contextual Header */}
            <div className="sticky top-24 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-100 py-4 hidden md:block">
                <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
                    <Link to="/insights" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">
                        <ArrowLeft size={16} /> Back to Hub
                    </Link>
                    <div className="flex gap-4">
                        <button className="text-slate-400 hover:text-primary transition-colors"><Share2 size={18} /></button>
                        <button className="text-slate-400 hover:text-primary transition-colors"><Printer size={18} /></button>
                        <button className="text-slate-400 hover:text-primary transition-colors"><Bookmark size={18} /></button>
                    </div>
                </div>
            </div>

            <article className="pt-20 pb-32">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <span className="bg-primary/10 text-primary px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 inline-block">
                            {content.category}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-secondary leading-tight mb-10 tracking-tight">
                            {content.title}
                        </h1>
                        <div className="flex flex-wrap items-center justify-center gap-8 text-[11px] font-black uppercase text-slate-400 tracking-widest border-y border-slate-100 py-6">
                            <div className="flex items-center gap-2 text-secondary">
                                <div className="w-8 h-8 rounded-full bg-slate-100 overflow-hidden">
                                    <img src="/team/Bharat.jpg" alt={content.author} className="w-full h-full object-cover" />
                                </div>
                                <span>{content.author}</span>
                            </div>
                            <div className="flex items-center gap-2"><Calendar size={14} className="text-primary" /> {content.date}</div>
                            <div className="flex items-center gap-2"><Clock size={14} className="text-primary" /> {content.readTime}</div>
                        </div>
                    </motion.div>

                    <div className="rounded-[3rem] overflow-hidden mb-16 shadow-2xl">
                        <img src={content.image} alt="Cover" className="w-full aspect-video object-cover" />
                    </div>

                    <div className="prose prose-slate prose-xl max-w-none text-slate-600 leading-relaxed font-medium">
                        <p className="text-2xl font-black text-secondary mb-10 leading-snug">
                            Understanding the nuances of rural healthcare requires more than just statistical observation; it demands a deep dive into the infrastructure and community dynamics that define access.
                        </p>
                        
                        <h2 className="text-3xl font-black text-secondary mt-16 mb-8 uppercase tracking-tight">The Core Problem</h2>
                        <p className="mb-8">
                            Rural communities often face a paradox of high need and low infrastructure. Our 5-region study examined how the centralization of medication-assisted treatment (MAT) affects recovery outcomes for individuals living in counties with population densities below 50 people per square mile.
                        </p>
                        
                        <div className="bg-slate-50 border-l-8 border-primary p-12 my-16 rounded-3xl">
                            <p className="text-2xl font-black italic text-secondary leading-relaxed">
                                "The 'Backbone' of rural recovery isn't just a clinic; it's the transport layers, the social networks, and the economic opportunities that sustain long-term sobriety."
                            </p>
                        </div>

                        <h2 className="text-3xl font-black text-secondary mt-16 mb-8 uppercase tracking-tight">Key Findings</h2>
                        <ul className="space-y-4 mb-12">
                            <li className="flex gap-4">
                                <div className="w-6 h-6 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">1</div>
                                <span>Geospatial barriers reduce MAT compliance by an average of 34% in remote sectors.</span>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-6 h-6 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">2</div>
                                <span>Community outreach frequency is the #1 predictor of sustained training retention.</span>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-6 h-6 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">3</div>
                                <span>Multi-agency collaboration reduces redundant outreach costs by 22% annually.</span>
                            </li>
                        </ul>

                        <h2 className="text-3xl font-black text-secondary mt-16 mb-8 uppercase tracking-tight">Policy Recommendations</h2>
                        <p>
                            We recommend a decentralized approach to resource distribution, leveraging mobile units and localized 'Resilience Hubs' that provide multi-sector support beyond clinical treatment.
                        </p>
                    </div>

                    <div className="mt-20 pt-12 border-t border-slate-100 flex flex-wrap gap-3">
                        {content.tags.map(tag => (
                            <span key={tag} className="bg-slate-50 text-slate-500 px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary/5 hover:text-primary transition-colors cursor-pointer">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </article>

            {/* Related content */}
            <section className="bg-slate-50 py-24">
                <div className="container mx-auto px-6 max-w-7xl">
                    <h2 className="text-2xl font-black text-secondary mb-12 uppercase tracking-tight">Related Insights</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Simplified mini-cards */}
                        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                            <span className="text-primary font-black uppercase tracking-widest text-[10px] mb-4 block">Publications</span>
                            <h4 className="text-xl font-black text-secondary mb-4 leading-tight">The Physics of Harm Reduction: Measuring Distribution vs. Outcome</h4>
                            <Link to="#" className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2">Read More <ArrowLeft size={14} className="rotate-180" /></Link>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                            <span className="text-primary font-black uppercase tracking-widest text-[10px] mb-4 block">News</span>
                            <h4 className="text-xl font-black text-secondary mb-4 leading-tight">New Multi-Agency Workgroup Launched for Youth Mental Health</h4>
                            <Link to="#" className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2">Read More <ArrowLeft size={14} className="rotate-180" /></Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InsightDetailPage;
