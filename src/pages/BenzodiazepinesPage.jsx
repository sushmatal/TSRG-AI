import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, Microscope, Info, PlayCircle, Radio, Activity } from 'lucide-react';
import PageHero from '../components/PageHero';

const BenzodiazepinesPage = () => {
    const publications = [
        {
            title: "Long-term consequences of benzodiazepine-induced neurological dysfunction: A survey",
            authors: "Ritvo AD, Foster DE, Huff C, et al.",
            journal: "PLOS ONE. 2023",
            link: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0285584",
            type: "Key Study"
        },
        {
            title: "Experiences with benzodiazepine use, tapering, and discontinuation",
            authors: "Reid Finlayson AJ, Macoubrie J, Huff C, et al.",
            journal: "Ther Adv Psychopharmacol. 2022",
            link: "https://journals.sagepub.com/doi/pdf/10.1177/20451253221082386",
            type: "Patient Survey"
        },
        {
            title: "Surviving Benzodiazepines: A Patient's and Clinician's Perspectives",
            authors: "Silvernail CM, Wright SL.",
            journal: "Adv Ther. 2022",
            link: "https://pubmed.ncbi.nlm.nih.gov/35239167/",
            type: "Perspective"
        },
        {
            title: "Limited Utility for Benzodiazepines in Chronic Pain Management",
            authors: "Wright SL.",
            journal: "Adv Ther. 2020",
            link: "https://pubmed.ncbi.nlm.nih.gov/32378069/",
            type: "Narrative Review"
        }
    ];

    const resources = [
        {
            title: "Peer Recovery Training",
            desc: "Benzodiazepine Peer Recovery Support Specialist Training Course",
            link: "https://easinganxiety.com/resources/benzo-peer-training/",
            icon: <Info size={24} />
        },
        {
            title: "Action Work Group",
            desc: "Benzodiazepine Action Work Group (BAWG) Resources",
            link: "https://corxconsortium.org/work-groups/benzodiazepine/",
            icon: <Microscope size={24} />
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <PageHero 
                title="Benzodiazepines Research" 
                backgroundImage={`${import.meta.env.BASE_URL}Header%20Images/Benzos%20Banner.png`}
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-7"
                        >
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-persimmon/10 text-persimmon font-black text-[10px] uppercase tracking-widest mb-8">
                                <Activity size={14} /> Understanding BIND
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tight mb-8">
                                Benzodiazepine <span className="text-persimmon italic">Prescribing & Tapering</span>
                            </h2>
                            <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
                                TSRG has compiled an array of resources to bring increased visibility to the risks of prolonged use and potential injuries such as benzodiazepine induced neurological dysfunction (BIND).
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                                {resources.map((res, i) => (
                                    <div key={i} className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group">
                                        <div className="text-persimmon mb-6 group-hover:scale-110 transition-transform">{res.icon}</div>
                                        <h3 className="text-xl font-black text-secondary mb-3">{res.title}</h3>
                                        <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">{res.desc}</p>
                                        <a href={res.link} target="_blank" rel="noopener noreferrer" className="text-persimmon font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                                            Access Resource <ExternalLink size={14} />
                                        </a>
                                    </div>
                                ))}
                            </div>

                            {/* Media Section */}
                            <div className="bg-secondary rounded-[3rem] p-10 md:p-12 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32" />
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-8">
                                        <PlayCircle className="text-persimmon" size={32} />
                                        <span className="text-xs font-black uppercase tracking-[0.2em] text-white/40">Featured Media</span>
                                    </div>
                                    <h3 className="text-2xl font-black mb-4">Medicating Normal Screening</h3>
                                    <p className="text-slate-300 font-medium leading-relaxed mb-8">
                                        The BAWG of the Colorado Consortium hosted a screening followed by a panel discussion on April 10, 2021.
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-2xl border border-white/10">
                                            <Radio size={18} className="text-persimmon" />
                                            <span className="text-xs font-black uppercase tracking-widest">BF Podcast #21 & #22</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-5 space-y-6"
                        >
                            <h3 className="text-xl font-black text-secondary uppercase tracking-widest mb-8 flex items-center gap-3">
                                <FileText className="text-persimmon" /> Research & Publications
                            </h3>
                            {publications.map((pub, i) => (
                                <a 
                                    key={i}
                                    href={pub.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-persimmon bg-persimmon/5 px-3 py-1 rounded-full">
                                            {pub.type}
                                        </span>
                                        <ExternalLink size={14} className="text-slate-300 group-hover:text-persimmon transition-colors" />
                                    </div>
                                    <h4 className="text-secondary font-black leading-tight mb-2 group-hover:text-persimmon transition-colors">
                                        {pub.title}
                                    </h4>
                                    <p className="text-slate-400 text-xs font-medium">
                                        {pub.authors} • {pub.journal}
                                    </p>
                                </a>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BenzodiazepinesPage;
