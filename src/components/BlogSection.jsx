import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const BlogSection = () => {
    const blogs = [
        {
            title: "Giving Season 2025 — Help us continue our impact together!",
            date: "Nov 5, 2025",
            excerpt: "Join us in our mission to support rural communities and transform data into action during this giving season.",
            category: "News"
        },
        {
            title: "Help us strengthen our impact together",
            date: "Oct 28, 2025",
            excerpt: "Developing regional priorities and capacity through collaborative research and community engagement.",
            category: "Impact"
        },
        {
            title: "TSRG Newsletter Q3 2025",
            date: "Sept 23, 2025",
            excerpt: "Catch up on our latest research highlights, community initiatives, and the progress of our current projects.",
            category: "News"
        },
        {
            title: "TSRG Newsletter Q2 2025",
            date: "June 17, 2025",
            excerpt: "Highlights from our second quarter of 2025, featuring new partnerships and impactful local stories.",
            category: "News"
        }
    ];

    return (
        <section id="blogs" className="py-12 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-primary font-black tracking-[0.3em] uppercase text-xs mb-4 block">Latest Updates</span>
                        <h2 className="text-3xl md:text-5xl font-black text-secondary tracking-tight">Recent Blogs</h2>
                    </div>
                    <button className="flex items-center gap-2 font-bold text-primary group hover:translate-x-1 transition-transform">
                        View All Posts <ArrowRight size={20} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {blogs.map((blog, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group flex flex-col bg-slate-50 rounded-[2rem] border border-slate-100 p-6 shadow-sm hover:shadow-xl transition-all duration-300 h-full"
                        >
                            <span className="text-primary text-[10px] font-black uppercase tracking-widest mb-3 bg-white px-3 py-1 rounded-full w-fit shadow-sm border border-slate-50">{blog.category}</span>
                            <div className="flex items-center gap-2 text-slate-400 text-xs font-bold mb-3">
                                <Calendar size={14} className="text-slate-300" />
                                {blog.date}
                            </div>
                            <h3 className="text-lg font-black text-secondary mb-3 leading-snug group-hover:text-primary transition-colors">{blog.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{blog.excerpt}</p>
                            <button className="w-full bg-white group-hover:bg-primary group-hover:text-white text-secondary py-3 rounded-2xl font-black text-sm transition-all shadow-sm border border-slate-100 uppercase tracking-[0.2em]">Read Post</button>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
