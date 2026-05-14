import React from 'react';
import { motion } from 'framer-motion';
import { 
    Users, Briefcase, GraduationCap, Video, 
    Mail, Calendar, ArrowRight, ShieldCheck,
    Users2, Laptop, Network, Target
} from 'lucide-react';
import PageHero from '../components/PageHero';

const WFDWorkgroupsPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageHero 
                title="WFD Workgroups" 
                backgroundImage={`${import.meta.env.BASE_URL}Header%20Images/Header.png`}
            />

            {/* Workforce Development Mission */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-jungle-jade/10 text-jungle-jade font-black text-[10px] uppercase tracking-widest mb-8">
                                <Briefcase size={14} /> Empowering Recovery
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-secondary mb-10 leading-[1.1] tracking-tight">
                                Workforce <br />
                                <span className="text-jungle-jade italic">Development</span> (WFD)
                            </h2>
                            <p className="text-secondary text-2xl font-bold leading-snug mb-8">
                                Dedicated to supporting individuals in recovery by enhancing skills, education, and career opportunities.
                            </p>
                            <div className="space-y-6 text-slate-500 text-lg leading-relaxed font-medium">
                                <p>
                                    The Schreiber Research Group has identified the need for a Workforce Center for people in recovery to gain the skills and resources necessary, creating competitive job applicants and ultimately securing stable employment.
                                </p>
                                <p>
                                    Our mission is to help individuals avoid relapse by providing comprehensive job-related services. We focus on assisting individuals in improving their technical skills, education levels, and obtaining industry-related certifications.
                                </p>
                                <p>
                                    By building a stable and fulfilling future, we strive to enhance income potential and expand career options for those thriving in the workforce.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                        >
                            <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-2xl transition-all">
                                <div className="w-16 h-16 bg-jungle-jade/10 rounded-2xl flex items-center justify-center text-jungle-jade mb-6 group-hover:scale-110 transition-transform">
                                    <GraduationCap size={32} />
                                </div>
                                <h3 className="text-lg font-black text-secondary mb-2">Skill Building</h3>
                                <p className="text-slate-500 text-sm font-medium">Enhancing technical and educational foundations.</p>
                            </div>
                            <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-2xl transition-all">
                                <div className="w-16 h-16 bg-turkish-tile/10 rounded-2xl flex items-center justify-center text-turkish-tile mb-6 group-hover:scale-110 transition-transform">
                                    <Laptop size={32} />
                                </div>
                                <h3 className="text-lg font-black text-secondary mb-2">Certifications</h3>
                                <p className="text-slate-500 text-sm font-medium">Obtaining industry-recognized licenses.</p>
                            </div>
                            <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-2xl transition-all sm:col-span-2">
                                <div className="w-16 h-16 bg-persimmon/10 rounded-2xl flex items-center justify-center text-persimmon mb-6 group-hover:scale-110 transition-transform">
                                    <Target size={32} />
                                </div>
                                <h3 className="text-lg font-black text-secondary mb-2">Relapse Prevention</h3>
                                <p className="text-slate-500 text-sm font-medium">Creating stability through career fulfillment.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Opioid Response Task Force */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="bg-secondary rounded-[4rem] p-12 md:p-20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-turkish-tile/10 rounded-full blur-3xl -mr-48 -mt-48" />
                        
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-8">
                                    Opioid Response <br />
                                    <span className="text-turkish-tile italic">Task Force Groups</span>
                                </h2>
                                <p className="text-slate-300 text-lg font-medium leading-relaxed mb-10">
                                    Community-led workgroups addressing Southeastern Colorado's opioid response through multi-sectoral and cross-organizational collaboration.
                                </p>
                                <div className="flex items-center gap-4 p-6 bg-white/5 rounded-3xl border border-white/10">
                                    <ShieldCheck className="text-turkish-tile" size={32} />
                                    <p className="text-white font-bold text-sm">
                                        TSRG provides administrative and facilitation support for all task force meetings.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white/40 mb-4">Leadership & Support</h3>
                                
                                {/* Community Leader */}
                                <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 flex items-center justify-between group hover:bg-white/10 transition-all">
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-turkish-tile mb-2">Community Leader</p>
                                        <h4 className="text-white font-black text-xl mb-1">Tara Castaneda</h4>
                                        <p className="text-slate-400 text-sm">Mile High Youth Corps (MHYC)</p>
                                    </div>
                                    <a href="mailto:tarac@mhyc.net" className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-turkish-tile transition-colors">
                                        <Mail size={20} />
                                    </a>
                                </div>

                                {/* TSRG Support */}
                                <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 flex flex-col gap-6">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-persimmon">TSRG Support Contact</p>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="text-white font-black text-lg">Maddie Peloff</h4>
                                            <p className="text-slate-400 text-xs">maddie@tsrg.org</p>
                                        </div>
                                        <a href="mailto:maddie@tsrg.org" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white hover:bg-persimmon transition-colors">
                                            <Mail size={18} />
                                        </a>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="text-white font-black text-lg">Terri Schreiber</h4>
                                            <p className="text-slate-400 text-xs">terri@tsrg.org</p>
                                        </div>
                                        <a href="mailto:terri@tsrg.org" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white hover:bg-persimmon transition-colors">
                                            <Mail size={18} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meeting Schedule */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="bg-jungle-jade/5 p-12 md:p-24 rounded-[4rem] border border-jungle-jade/10 text-center">
                        <div className="w-16 h-16 bg-jungle-jade/10 rounded-2xl flex items-center justify-center text-jungle-jade mx-auto mb-10">
                            <Calendar size={32} />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-secondary tracking-tight mb-8">Join Our Monthly Meeting</h2>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
                            <div className="flex items-center gap-4">
                                <Calendar className="text-jungle-jade" />
                                <span className="text-xl font-bold text-secondary">Third Monday of every month</span>
                            </div>
                            <div className="h-2 w-2 rounded-full bg-slate-200 hidden md:block" />
                            <div className="flex items-center gap-4">
                                <Video className="text-jungle-jade" />
                                <span className="text-xl font-bold text-secondary">12:00 PM - 1:00 PM (Zoom)</span>
                            </div>
                        </div>
                        <button className="bg-secondary text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-sm hover:bg-turkish-tile transition-all flex items-center justify-center gap-3 mx-auto shadow-2xl shadow-secondary/20">
                            Get Meeting Link <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WFDWorkgroupsPage;
