import React from 'react';
import { motion } from 'framer-motion';
import { Quote, CircleUser, GraduationCap, HeartPulse } from 'lucide-react';

const ImpactSection = () => {
    const stories = [
        {
            title: "Chris's Journey",
            name: "Chris Menges",
            role: "Otero County Substance Use Program Director",
            image: "/Stories of Impact/Chris.jpg",
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
            image: "/Stories of Impact/Cora.jpg",
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
            image: "/Stories of Impact/Jeff.jpeg",
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
                            {/* Profile Header */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={story.image}
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
                                {/* Quote */}
                                <div className="mb-3 relative italic text-slate-500 text-sm leading-relaxed">
                                    <Quote size={20} className="absolute -top-2 -left-3 text-primary/10 -z-10" />
                                    "{story.quote}"
                                </div>

                                {/* Compact Steps */}
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

export default ImpactSection;
