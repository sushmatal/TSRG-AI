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
                <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-50 to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl text-center py-20 lg:py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="inline-block py-2 px-6 rounded-full bg-white text-primary text-[10px] font-black tracking-[0.4em] uppercase mb-10 border border-white/20 backdrop-blur-md shadow-2xl">
                        Knowledge for Change
                    </span>

                    <h1 className="text-3xl md:text-5xl lg:text-5xl font-black text-[#FCE6A3] leading-[1.1] mb-8 tracking-tight drop-shadow-lg uppercase max-w-5xl mx-auto">
                        Turning <span className="italic">Data</span> into Stories, <br className="hidden md:block" />
                        Stories into <span className="italic">Change</span>.
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
                        <span className="text-[10px] font-black uppercase tracking-[0.5em]">Scroll to Discover</span>
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
    const sections = [
        {
            title: "Our Mission",
            icon: <Target className="text-primary" size={24} />,
            content: "TSRG partners with rural and urban communities to transform local data into real-world solutions. We provide consulting services, research, program development, and leadership to build stronger, collaborative solutions and improve outcomes."
        },
        {
            title: "Our Vision",
            icon: <Eye className="text-primary" size={24} />,
            content: "We believe building healthy rural and urban communities starts with listening. We lead projects or partner with community coalitions to find solutions to community challenges and then bring partners together to turn knowledge into lasting change."
        },
        {
            title: "Our Purpose",
            icon: <Heart className="text-primary" size={24} />,
            content: "TSRG serves as a trusted backbone for rural and urban prevention and workforce development services, helping communities turn ideas into a clear path forward by blending data with local wisdom."
        }
    ];

    const values = [
        { letter: "T", title: "Trust", description: "Building long-term, ethical relationships with rural leaders and families.", icon: <ShieldCheck size={20} /> },
        { letter: "S", title: "Service", description: "Delivering actionable insights that solve immediate community needs efficiently.", icon: <Activity size={20} /> },
        { letter: "R", title: "Research", description: "Providing evidence-based methodologies and rigorous evaluation to inform local solutions.", icon: <SearchCheck size={20} /> },
        { letter: "G", title: "Guidance", description: "Navigating complex systems to lead sustainable long-term success.", icon: <Settings size={20} /> }
    ];

    return (
        <section id="about" className="py-16 bg-slate-50">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    {section.icon}
                                </div>
                                <h4 className="text-xl font-black text-secondary uppercase tracking-tight">{section.title}</h4>
                            </div>
                            <p className="text-slate-500 leading-relaxed text-base font-medium">{section.content}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 border-t border-slate-200 pt-20">
                    <div className="text-center mb-12">
                        <span className="text-primary font-black tracking-[0.3em] uppercase text-sm md:text-base mb-4 block">The TSRG Framework</span>
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
                                <div className="text-6xl md:text-7xl font-black text-primary mb-6 group-hover:scale-110 transition-transform relative z-10">{val.letter}</div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-6 px-3 py-1 bg-slate-50 rounded-full group-hover:bg-primary group-hover:text-white transition-all relative z-10">The {val.title} Stage</div>
                                <div className="p-4 bg-slate-50 rounded-2xl text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 relative z-10">
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
                    <h2 className="px-4 py-1.5 rounded-full bg-secondary/5 text-secondary text-xs font-black tracking-[0.2em] uppercase mb-4 inline-block border border-secondary/10">Impact</h2>
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
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 shrink-0" />
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
   5. TESTIMONIALS
───────────────────────────────────────────── */
const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Donna Rohde",
            role: "Community Partner",
            image: "Testimonials/Donna.png",
            quote: "TSRG has been instrumental in bringing together community partners to systemically work to reduce opioid use in our region. They bring additional capacity to the region to gather and analyze data and utilize it to implement the region’s priorities. The expertise, professionalism and strong desire to be an active support for the region is invaluable."
        },
        {
            name: "Jay Billups",
            role: "Collaborative Creator",
            image: "Testimonials/Jay Billups.png",
            quote: "My experience working with Terri and TSRG has been excellent. It is motivating working with an organization that takes the time and energy to collaborate with creators to produce the best possible products for their clients and community."
        },
        {
            name: "Ruth Horn, MA, MS, LPC, NCC",
            role: "Behavioral Health Professional",
            logo: "Community partners/SLV_AHEC_logo.png",
            quote: "TSRG has been vital in assisting us to expand our harm reduction services to the communities of the San Luis Valley. Their coalition-building expertise and partnership have opened doors for the betterment of the entire region."
        },
        {
            name: "Rick Ritter",
            role: "Otero County Health Department",
            logo: "Community partners/otero_county_LOGO-tm-sm.png",
            quote: "Please accept Otero County Health Department's passionate support of TSRG! TSRG has not only done a wonderful job of bringing our data to life and analyzing our needs, but they have brought new hope and direction to reduce opioid overdoses for those suffering from an opioid use disorder/substance use disorder."
        }
    ];

    return (
        <section id="testimonials" className="py-16 bg-white relative">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className="text-primary font-black tracking-[0.3em] uppercase text-xs mb-4 block">Voice of Support</span>
                    <h2 className="text-3xl md:text-5xl font-black text-secondary tracking-tight">What Our Partners Say</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-50 p-8 md:p-12 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col items-start relative overflow-hidden group"
                        >
                            <Quote size={80} className="absolute -top-6 -right-6 text-primary/5 group-hover:text-primary/10 transition-colors" />

                            <div className="flex items-center gap-6 mb-8 w-full">
                                <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                                    {testimonial.image ? (
                                        <img src={`${import.meta.env.BASE_URL}${testimonial.image}`} alt={testimonial.name} className="w-full h-full object-cover" />
                                    ) : (
                                        <img src={`${import.meta.env.BASE_URL}${testimonial.logo}`} alt={testimonial.role} className="w-full h-full object-contain p-2" />
                                    )}
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-black text-secondary text-lg uppercase tracking-tight leading-tight">{testimonial.name}</span>
                                    <span className="text-[10px] text-primary font-black uppercase tracking-widest mt-1">{testimonial.role}</span>
                                </div>
                            </div>

                            <p className="text-slate-600 italic text-base md:text-lg leading-relaxed mb-6 font-medium relative z-10">
                                "{testimonial.quote}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ─────────────────────────────────────────────
   6. PARTNERS LOGO GRID
───────────────────────────────────────────── */
const PartnersSection = () => {
    const logos = [
        "Bent County.png", "Benzos.png", "Benzowise.jpg", "CRHC.png",
        "Colorado Consortium.png", "Creative Treatment Options.png",
        "Crowley-County-Colorado.png", "Denver Public Schools.png",
        "Denver Recovery Group.png", "GSN.png", "HRSA.png",
        "Otero_county.png", "PDPHE.png", "SECAHEC.png",
        "SLVAHEC.png", "SpringTransits.png"
    ];

    return (
        <section id="partners" className="py-20 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <span className="text-primary font-black tracking-[0.3em] uppercase text-xs mb-4 block underline underline-offset-8">Community Force</span>
                    <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tight mb-6">Our Supporters & Partners</h2>
                    <p className="text-xl text-slate-600 leading-relaxed mb-8 font-medium max-w-3xl mx-auto">
                        TSRG works with local, regional and federal organizations to find solutions to the opioid and benzodiazepine crises. Through a collaborative, concerted effort, TSRG can grow and continue to aim to find solutions.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-20">
                    {logos.map((logo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all h-32 md:h-40"
                        >
                            <img
                                src={`${import.meta.env.BASE_URL}Community partners/${logo}`}
                                alt={`Partner logo ${index}`}
                                className="max-w-full max-h-full object-contain transition-all duration-300"
                            />
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center mt-12 mb-8">
                    <button className="bg-accent text-white px-12 py-5 rounded-full font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-xl flex items-center gap-3 border border-transparent hover:border-accent">
                        Support Our Efforts
                        <Heart size={20} className="fill-white" />
                    </button>
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

/* ─────────────────────────────────────────────
   PAGE ASSEMBLY
───────────────────────────────────────────── */
const HomePage = () => (
    <main>
        <Hero />
        <StorySection />
        <ImpactSection />
        <TestimonialsSection />
        <PartnersSection />
        <BlogSection />
    </main>
);

export default HomePage;
