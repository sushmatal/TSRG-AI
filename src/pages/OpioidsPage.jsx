import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, BookOpen, Microscope, Activity } from 'lucide-react';
import PageHero from '../components/PageHero';

const OpioidsPage = () => {
    const publications = [
        {
            title: "Differences in Rural-Urban Counties’ Collaboration Activity for Opioid Response",
            authors: "Swann, WL., Schreiber, TL.",
            journal: "Health Administration Research Consortium Research Brief, University of Colorado Denver. 2021",
            link: "https://www.tsrg.org/_files/ugd/11a039_bbed220643c7439683dc2658b2ed0ad6.pdf",
            type: "Research Brief"
        },
        {
            title: "Facilitators and barriers to adopting or expanding medications for opioid use disorder provision in rural Colorado jails",
            authors: "McNeely HL, Schreiber TL, Swann WL, Amura CR.",
            journal: "Health Justice. 2024",
            link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11155088/",
            type: "Qualitative Analysis"
        },
        {
            title: "Association Between Interorganizational Collaboration in Opioid Response and Treatment Capacity",
            authors: "Swann WL, DiNardi M, Schreiber TL.",
            journal: "Substance Abuse: Research and Treatment. 2022",
            link: "https://journals.sagepub.com/doi/full/10.1177/11782218221111949",
            type: "Cross-Sectional Study"
        },
        {
            title: "Local Policy and Programmatic Activity to Address the US Opioid Crisis",
            authors: "Swann, WL, Schreiber, TL, Wright, SL, et al.",
            journal: "Journal of Public Health Management and Practice. 2020",
            link: "https://journals.lww.com/jphmp/Abstract/2021/07000/Local_Policy_and_Programmatic_Activity_to_Address.2.aspx",
            type: "National Survey"
        },
        {
            title: "Urban‐Rural Disparities in Opioid Use Disorder Prevention and Response Activities",
            authors: "Swann, WL, Kim, S, Kim, SY, & Schreiber, TL.",
            journal: "The Journal of Rural Health. 2020",
            link: "https://onlinelibrary.wiley.com/doi/epdf/10.1111/jrh.12491",
            type: "Disparity Analysis"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <PageHero 
                title="Opioid Research" 
                backgroundImage={`${import.meta.env.BASE_URL}Header%20Images/Header.png`}
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
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-turkish-tile/10 text-turkish-tile font-black text-[10px] uppercase tracking-widest mb-8">
                                <Microscope size={14} /> Comprehensive Response
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tight mb-8">
                                Bridging the Gap in <span className="text-turkish-tile italic">Opioid Response</span>
                            </h2>
                            <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10">
                                TSRG produces comprehensive reports and academic research to support communities in gaining project-specific insights for effectively addressing prevention, treatment, and recovery services.
                            </p>

                            {/* Featured Guidebook */}
                            <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <BookOpen size={120} />
                                </div>
                                <h3 className="text-2xl font-black text-secondary mb-4 relative z-10">Featured Guidebook</h3>
                                <p className="text-secondary font-bold mb-6 text-lg relative z-10">
                                    Colorado House Bill 22-1326: A Guidebook for Colorado’s Rural County Jails Supplying Medications for Opioid Use Disorder
                                </p>
                                <a 
                                    href="https://www.tsrg.org/_files/ugd/e6a2cc_0b7033d684cf4cd6b50b2f1eb1cc1c79.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-turkish-tile text-white px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-secondary transition-all shadow-lg shadow-turkish-tile/20"
                                >
                                    Download Guidebook <Download size={18} />
                                </a>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-5 space-y-6"
                        >
                            <h3 className="text-xl font-black text-secondary uppercase tracking-widest mb-8 flex items-center gap-3">
                                <FileText className="text-turkish-tile" /> Academic Publications
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
                                        <span className="text-[10px] font-black uppercase tracking-widest text-turkish-tile bg-turkish-tile/5 px-3 py-1 rounded-full">
                                            {pub.type}
                                        </span>
                                        <ExternalLink size={14} className="text-slate-300 group-hover:text-turkish-tile transition-colors" />
                                    </div>
                                    <h4 className="text-secondary font-black leading-tight mb-2 group-hover:text-turkish-tile transition-colors">
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

export default OpioidsPage;
