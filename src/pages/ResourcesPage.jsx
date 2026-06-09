import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HeartPulse, GraduationCap, CircleUser, Quote, BookOpen, Calendar, Headphones, ArrowRight, Search, Plus, Minus } from 'lucide-react';
import PageHero from '../components/PageHero';

const faqs = [
    {
        question: "What is TSRG?",
        answer: "TSRG (The Schreiber Research Group) is a nonprofit organization that uses research, data, and community collaboration to improve responses to substance use, including opioids and benzodiazepines. We focus on turning information into practical solutions that support real-world change."
    },
    {
        question: "Where does TSRG work?",
        answer: "We work with communities across both rural and urban settings, primarily in Colorado and other regions where substance use impacts public health systems, families, and community services. In addition to local and regional initiatives, TSRG has conducted national and multi-state studies, and currently has team members located across five states and Canada, strengthening our ability to support diverse communities and collaborative behavioral health efforts across geographic regions."
    },
    {
        question: "Is TSRG a treatment provider?",
        answer: "No. TSRG does not provide direct clinical treatment. We focus on research, evaluation, consulting, and community partnerships that support systems of care."
    },
    {
        question: "What kind of research does TSRG do?",
        answer: "We study substance use trends, prevention strategies, treatment access, prescribing patterns, system responses, and community-level impacts across rural and urban communities. Our work examines opioids, benzodiazepines, marijuana, vaping, alcohol use, and related behavioral and public health issues to better understand emerging trends, service gaps, and opportunities for prevention, treatment, recovery, and community resilience."
    },
    {
        question: "Who does TSRG partner with?",
        answer: "We collaborate with local organizations, public agencies, universities, and community groups working to improve prevention, treatment, recovery, and harm reduction efforts."
    },
    {
        question: "How is TSRG’s work used?",
        answer: "Our research is used to inform programs, support grant funding, improve services, guide policy discussions, and strengthen community-based responses."
    },
    {
        question: "How can my organization work with TSRG?",
        answer: "We welcome collaboration with organizations that are working to improve community health outcomes. Partnerships may include research, evaluation, consulting, or project support."
    },
    {
        question: "Does TSRG accept donations?",
        answer: (
            <span>
                Yes. Donations help support community-driven research, education, and outreach efforts. <Link to="/get-involved/donate" className="text-primary font-bold hover:underline">Learn more here: Donate to TSRG</Link>
            </span>
        )
    },
    {
        question: "Does TSRG offer internships or scholarships?",
        answer: "TSRG supports learning, mentorship, and workforce development opportunities through internships, AmeriCorps member placements, and other training-focused initiatives designed to cultivate the next generation of leaders providing research, program development, and consulting services that inform behavioral health systems and community-based responses."
    },
    {
        question: "Does TSRG collect personal health information?",
        answer: "No. TSRG does not collect or store personal health information. Our work relies on de-identified data, surveys, published research, and community-level information."
    },
    {
        question: "Is TSRG affiliated with government agencies?",
        answer: "TSRG is an independent nonprofit organization. We may collaborate with public agencies on specific projects, but we are not a government entity."
    },
    {
        question: "How can I contact TSRG?",
        answer: (
            <span>
                You can reach us through our <Link to="/about/contact" className="text-primary font-bold hover:underline">website contact channels</Link> or by email for partnership and general inquiries.
            </span>
        )
    }
];

const FAQItem = ({ faq, isOpen, onToggle }) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
            <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={onToggle}
            >
                <span className="text-lg font-bold text-secondary">{faq.question}</span>
                <span className={`flex-shrink-0 ml-4 p-2 rounded-full transition-colors ${isOpen ? 'bg-primary/10 text-primary' : 'bg-slate-50 text-slate-400'}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                            {faq.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ResourcesPage = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredFaqs = faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
        (typeof faq.answer === 'string' && faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
    );

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

    const resourceLinks = [
        {
            title: "Blogs & News",
            description: "Read our latest organizational updates, insights, and research findings.",
            icon: <BookOpen size={32} />,
            link: "/about/blog",
            color: "text-turkish-tile",
            bg: "bg-turkish-tile"
        },
        {
            title: "Events & Conferences",
            description: "Join us at upcoming summits, symposia, and community engagement sessions.",
            icon: <Calendar size={32} />,
            link: "/insights/events",
            color: "text-jungle-jade",
            bg: "bg-jungle-jade"
        },
        {
            title: "Our Podcasts",
            description: "Listen to 'A Path Forward' and hear directly from community health leaders.",
            icon: <Headphones size={32} />,
            link: "/programs/podcasts",
            color: "text-persimmon",
            bg: "bg-persimmon"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            <PageHero 
                title="Resources & Stories" 
                backgroundImage={`${import.meta.env.BASE_URL}Header%20Images/Header.png`}
            />
            
            {/* Intro Section */}
            <section className="py-20 bg-white relative">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-secondary tracking-tight mb-6">
                            Stay Connected & Informed
                        </h2>
                        <p className="text-lg md:text-xl font-medium text-slate-500 leading-relaxed max-w-4xl mx-auto">
                            Stay up to date with the latest news, stories, and resources from TSRG. This page brings together blogs, podcast episodes, community stories, member spotlights, organizational updates, and Frequently Asked Questions (FAQ) to keep you connected and informed. Learn about our new initiatives, hear directly from community members and partners, explore insights from our work, and discover the impact being made across the communities we serve.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Hub Links Section */}
            <section className="py-12 bg-white relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {resourceLinks.map((item, index) => (
                            <Link to={item.link} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group relative bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all duration-500 h-full flex flex-col justify-between overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl opacity-50 -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700" />
                                    
                                    <div>
                                        <div className={`w-16 h-16 rounded-2xl ${item.bg}/10 flex items-center justify-center ${item.color} mb-8 group-hover:scale-110 group-hover:${item.bg} group-hover:text-white transition-all duration-300 shadow-sm`}>
                                            {item.icon}
                                        </div>
                                        <h3 className="text-2xl font-black text-secondary mb-4 group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-500 font-medium leading-relaxed mb-8">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3 font-black uppercase tracking-widest text-xs text-primary group-hover:gap-5 transition-all">
                                        Explore <ArrowRight size={16} />
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stories Section */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-black text-secondary tracking-tight mb-6">
                                Stories & Member Spotlights
                            </h2>
                            <p className="text-lg md:text-xl text-slate-500 font-medium max-w-4xl mx-auto leading-relaxed">
                                Stories of Change highlights the real journeys behind our work—stories rooted in resilience, collaboration, and community-driven impact. Meet individuals and partners whose experiences reflect the challenges we face and the progress we’re building together.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-16">
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

                                    <div className="space-y-2 mb-4 mt-4">
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

            {/* FAQs Section */}
            <section id="faq" className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-black text-secondary mb-6 tracking-tight"
                        >
                            Frequently Asked Questions
                        </motion.h2>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10">
                            Find answers to common questions about our organization, research, and ways to partner with us.
                        </p>
                        
                        <div className="relative max-w-xl mx-auto">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-slate-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-full text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                                placeholder="Search FAQs..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        {filteredFaqs.length > 0 ? (
                            filteredFaqs.map((faq, index) => (
                                <FAQItem 
                                    key={index} 
                                    faq={faq} 
                                    isOpen={openIndex === index}
                                    onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                                />
                            ))
                        ) : (
                            <div className="text-center py-12 bg-slate-50 rounded-3xl border border-slate-100">
                                <p className="text-xl text-slate-500">No matching questions found.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ResourcesPage;
