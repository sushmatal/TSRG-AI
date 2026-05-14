import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight, ArrowDown, Target, Eye, Heart,
    Settings, ShieldCheck, Activity, SearchCheck,
    Quote, CircleUser, GraduationCap, HeartPulse,
    TrendingUp, Globe, Calendar
} from 'lucide-react';

/* ─────────────────────────────────────────────
   1. HERO
───────────────────────────────────────────── */
const Hero = () => {
    return (
        <section id="home" className="relative min-h-[600px] h-[85vh] flex items-center justify-center overflow-hidden bg-secondary mt-16">
            <div className="absolute inset-0 z-0">
                <img
                    src={`${import.meta.env.BASE_URL}library-header.png`}
                    alt="Grand Library Background"
                    className="w-full h-full object-cover object-center translate-y-0 opacity-70"
                />
                <div className="absolute inset-0 bg-secondary/60 mix-blend-multiply" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-50 to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl text-center py-20 lg:py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >


                    <h1 className="text-3xl md:text-5xl lg:text-5xl font-black text-white leading-[1.1] mb-8 tracking-tight drop-shadow-lg uppercase max-w-5xl mx-auto">
                        Turning <span className="italic text-persimmon">Data</span> into Stories, <br className="hidden md:block" />
                        Stories into <span className="italic text-apricot">Change</span>.
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

/* ─────────────────────────────────────────────
   2. STORY SECTION
───────────────────────────────────────────── */
const StorySection = () => {
    const values = [
        { letter: "T", title: "Trust", description: "Building long-term, ethical relationships with rural leaders and families.", icon: <ShieldCheck size={20} />, color: "text-lupine", bg: "bg-lupine" },
        { letter: "S", title: "Service", description: "Delivering actionable insights that solve immediate community needs efficiently.", icon: <Activity size={20} />, color: "text-catawba", bg: "bg-catawba" },
        { letter: "R", title: "Research", description: "Providing evidence-based methodologies and rigorous evaluation to inform local solutions.", icon: <SearchCheck size={20} />, color: "text-turkish-tile", bg: "bg-turkish-tile" },
        { letter: "G", title: "Guidance", description: "Navigating complex systems to lead sustainable long-term success.", icon: <Settings size={20} />, color: "text-persimmon", bg: "bg-persimmon" }
    ];

    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-jungle-jade/10 text-jungle-jade font-black text-[10px] uppercase tracking-widest mb-8">
                            <Target size={14} /> Our Core Mission
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-secondary mb-10 leading-[1.1] tracking-tight">
                            Transforming <span className="text-jungle-jade italic">Local Data</span> into Real-World <span className="text-turkish-tile">Solutions.</span>
                        </h2>
                        
                        <div className="space-y-8 text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
                            <p className="text-secondary text-2xl font-bold leading-snug">
                                TSRG partners with rural and urban communities to bridge the gap between information and action.
                            </p>
                            <p>
                                We provide consulting services, research, program development, and leadership to build stronger, collaborative solutions and improve outcomes across the public health landscape.
                            </p>
                            <div className="pt-8 border-t border-slate-100 flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100 shadow-sm">
                                    <div className="w-2 h-2 rounded-full bg-jungle-jade" />
                                    <span className="text-xs font-black uppercase tracking-widest text-slate-500">Consulting</span>
                                </div>
                                <div className="flex items-center gap-2 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100 shadow-sm">
                                    <div className="w-2 h-2 rounded-full bg-turkish-tile" />
                                    <span className="text-xs font-black uppercase tracking-widest text-slate-500">Research</span>
                                </div>
                                <div className="flex items-center gap-2 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100 shadow-sm">
                                    <div className="w-2 h-2 rounded-full bg-persimmon" />
                                    <span className="text-xs font-black uppercase tracking-widest text-slate-500">Leadership</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-br from-jungle-jade/20 to-turkish-tile/20 rounded-[4rem] blur-3xl opacity-50" />
                        <div className="relative bg-white rounded-[4rem] p-4 shadow-2xl border border-slate-100 overflow-hidden group">
                            <img 
                                src={`${import.meta.env.BASE_URL}Mission.jpg`} 
                                alt="Mission Infographic" 
                                className="w-full h-full object-cover rounded-[3.5rem] transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </motion.div>
                </div>

                <div className="mt-32 border-t border-slate-200 pt-24">
                    <div className="text-center mb-16">
                        <h3 className="text-4xl md:text-5xl font-black text-secondary tracking-tight">Values Built Into Our Name</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                        {values.map((val, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group relative overflow-hidden"
                            >
                                <div className={`text-6xl md:text-7xl font-black ${val.color} mb-6 group-hover:scale-110 transition-transform relative z-10`}>{val.letter}</div>
                                <div className={`text-[10px] font-black uppercase tracking-widest text-slate-300 mb-6 px-3 py-1 bg-slate-50 rounded-full group-hover:${val.bg} group-hover:text-white transition-all relative z-10`}>The {val.title} Stage</div>
                                <div className={`p-4 bg-slate-50 rounded-2xl ${val.color} mb-6 group-hover:${val.bg} group-hover:text-white transition-colors duration-300 relative z-10`}>
                                    {val.icon}
                                </div>
                                <p className="text-slate-500 font-bold leading-snug relative z-10 text-sm">{val.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ─────────────────────────────────────────────
   3. IMPACT SECTION
───────────────────────────────────────────── */
const ImpactSection = () => {
    const stories = [
        {
            title: "Chris's Journey",
            name: "Chris Menges",
            role: "Otero County Substance Use Program Director",
            image: "Stories of Impact/Chris.jpg",
            challenge: "After losing friends and family to substance use disorder, Chris knew he had to find solutions.",
            partnership: "TSRG and Otero County provided training and certification as a Peer Support Specialist.",
            change: "Now leading Otero County's response program, Chris gives back every single day.",
            quote: "One day at a time. One person at a time.",
            icon: <HeartPulse className="text-white" />
        },
        {
            title: "Cora's Story",
            name: "Cora Frausto",
            role: "TSRG Student Intern",
            image: "Stories of Impact/Cora.jpg",
            challenge: "Witnessed the impact of substance use on loved ones firsthand while growing up in Las Animas.",
            partnership: "Gained coaching, research skills, and professional development through TSRG's internship.",
            change: "Now a graduate, Cora is solving problems that affect her community and her heart.",
            quote: "TSRG prepared me to build connections and solve problems.",
            icon: <GraduationCap className="text-white" />
        },
        {
            title: "Jeff's Transformation",
            name: "Jeff Richardson",
            role: "Program Assistant",
            image: "Stories of Impact/Jeff.jpeg",
            challenge: "Jeff faced homelessness and substance use challenges throughout his adult life in Colorado.",
            partnership: "Accessed training and coaching to become a certified Peer & Family Specialist through TSRG.",
            change: "Jeff is now helping others navigate recovery, strengthening the support ecosystem.",
            quote: "Today I choose to give back by doing the same for others.",
            icon: <CircleUser className="text-white" />
        }
    ];

    return (
        <section id="impact" className="py-12 bg-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="max-w-3xl mx-auto text-center mb-10">

                    <h3 className="text-3xl md:text-5xl font-black text-secondary tracking-tight mb-2 text-center">Stories of Change</h3>
                    <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto">Real local impact driven by <span className="text-primary italic">backbone partnership</span>.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {stories.map((story, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative flex flex-col bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden h-full"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={`${import.meta.env.BASE_URL}${story.image}`}
                                    alt={story.name}
                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent" />
                                <div className="absolute bottom-4 left-6">
                                    <h4 className="text-xl font-black text-white leading-tight">{story.title}</h4>
                                </div>
                                <div className="absolute top-4 right-6 w-10 h-10 bg-primary/20 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center text-white">
                                    {React.cloneElement(story.icon, { size: 20 })}
                                </div>
                            </div>

                            <div className="p-5 md:p-6 flex flex-col flex-grow">
                                <div className="mb-3 relative italic text-slate-500 text-sm leading-relaxed">
                                    <Quote size={20} className="absolute -top-2 -left-3 text-primary/10 -z-10" />
                                    "{story.quote}"
                                </div>

                                <div className="space-y-2 mb-4">
                                    <div className="flex gap-4 items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-200 mt-2 shrink-0" />
                                        <p className="text-xs text-slate-500"><span className="font-bold text-secondary uppercase tracking-tighter mr-1">Challenge:</span> {story.challenge}</p>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 shrink-0" />
                                        <p className="text-xs text-slate-500"><span className="font-bold text-primary uppercase tracking-tighter mr-1">Partnership:</span> {story.partnership}</p>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                                        <p className="text-xs text-slate-700 font-bold leading-tight"><span className="uppercase tracking-tighter mr-1">Impact:</span> {story.change}</p>
                                    </div>
                                </div>

                                <div className="mt-auto pt-4 border-t border-slate-50 flex items-center gap-3">
                                    <div className="flex flex-col">
                                        <div className="font-black text-secondary text-[10px] uppercase tracking-widest">{story.name}</div>
                                        <div className="text-[9px] text-slate-400 font-bold uppercase">{story.role}</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};





/* ─────────────────────────────────────────────
   7. RECENT BLOGS
───────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────
   PAGE ASSEMBLY
───────────────────────────────────────────── */
const HomePage = () => (
    <main>
        <Hero />
        <StorySection />
        <ImpactSection />
        <BlogSection />
    </main>
);

export default HomePage;
