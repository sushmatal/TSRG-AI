import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';

const EventsPage = () => {
    const conferences = [
        {
            title: "National Prevention Network (NPN)",
            presenter: "What does “evidence-based prevention” look like in the REAL WORLD?",
            details: "A practical and realistic conversation about building effective, nimble prevention infrastructure with Brian Bumbarger and Craig PoVey. Phoenix, AZ, August 2024.",
            link: "https://cpsconferences.com/conference-info"
        },
        {
            title: "Colorado Pharmacist Society Presentation",
            presenter: "Benzodiazepine Induced Neurological Dysfunction (BIND) with Dr. Alexis Ritvo",
            details: "June 2024.",
            link: "https://cpsconferences.com/conference-info"
        },
        {
            title: "A Path Forward/Safety Jam",
            presenter: "A Community Approach to Reduce Overdose in Southeast Colorado",
            details: "La Junta, Colorado in partnership with the Otero County Health Department and American Medical Response (AMR) (June 2024).",
            link: "https://static.wixstatic.com/media/11a039_977d54a0b9e3480a9bdb07dc93d2d4b4~mv2.png"
        },
        {
            title: "Rx and Illicit Drug Summit Poster Presentation",
            presenter: "A Qualitative Assessment of the Availability of Medication-Assisted Treatment (MAT) in Rural Southern Colorado County Jails",
            details: "April 2023.",
            link: "https://www.rx-summit.com/"
        },
        {
            title: "Colorado Rural Health Center (CRHC) Forum",
            presenter: "The Substance Use Crisis: Integrating Research and Community Outreach to Improve Outcomes in Rural Colorado",
            details: "April 2022.",
            link: "https://coruralhealth.org/theforum"
        },
        {
            title: "Colorado Consortium for Prescription Drug Abuse Prevention Symposium",
            presenter: "Limited BZ utility in pain management",
            details: "University of Colorado Anschutz Medical Campus, November 2020.",
            link: "https://corxconsortium.org/wp-content/uploads/Consortium-poster-submission-Limited-BZ-utility-in-pain-management-Wright-Schreiber-9.29.20.pdf"
        },
        {
            title: "National Association of County & City Health Officials (NACCHO) 360 Conference",
            details: "Virtual, July 2020.",
            link: "https://www.naccho.org/blog/articles/recap-naccho-360-raising-the-reach-of-public-health"
        },
        {
            title: "Colorado Behavioral Health & Wellness Summit",
            details: "University of Denver, October 2019.",
            link: "https://www.cbhc.org/news/colorado-behavioral-health-wellness-summit/"
        },
        {
            title: "Association for Public Policy Analysis and Management (APPAM)",
            details: "Denver, CO, November 2019.",
            link: "https://www.appam.org/conference-events/fall-research-conference/2019/"
        },
        {
            title: "American Society for Public Administration Conference (ASPA)",
            details: "Denver, CO, March 2018.",
            link: "https://www.aspanet.org/ASPA/ASPA/Events/Annual-Conference/2018-Conference-Tracks.aspx"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <PageHero 
                title="Conferences & Events" 
                backgroundImage={`${import.meta.env.BASE_URL}research_hero_bg_1778718936266.png`}
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="max-w-3xl mb-16">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black text-secondary tracking-tight mb-6"
                        >
                            Engaging the <span className="text-turkish-tile">Scientific Community</span>
                        </motion.h2>
                        <p className="text-xl text-slate-500 font-medium leading-relaxed">
                            TSRG actively participates in national and regional conferences to share our findings and collaborate on evidence-based solutions for substance use and prevention.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {conferences.map((conf, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 bg-turkish-tile/10 rounded-xl flex items-center justify-center text-turkish-tile group-hover:bg-turkish-tile group-hover:text-white transition-colors">
                                            <Calendar size={20} />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conference Presentation</span>
                                    </div>
                                    <h3 className="text-xl font-black text-secondary mb-4 leading-tight group-hover:text-turkish-tile transition-colors">
                                        {conf.title}
                                    </h3>
                                    {conf.presenter && (
                                        <p className="text-secondary font-bold text-sm mb-3">
                                            {conf.presenter}
                                        </p>
                                    )}
                                    <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                                        {conf.details}
                                    </p>
                                </div>
                                <a 
                                    href={conf.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-turkish-tile font-black uppercase tracking-widest text-xs hover:gap-3 transition-all"
                                >
                                    Learn More <ExternalLink size={14} />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="pb-24">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="bg-secondary p-12 md:p-20 rounded-[3.5rem] relative overflow-hidden text-center">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-persimmon/10 rounded-full blur-3xl -mr-32 -mt-32" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Stay updated on our next talk.</h2>
                            <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
                                We regularly present at symposia and public health summits. Join our network to get notifications about upcoming sessions.
                            </p>
                            <button className="bg-persimmon hover:bg-persimmon-dark text-white px-10 py-5 rounded-full font-black transition-all flex items-center justify-center gap-3 mx-auto shadow-xl shadow-persimmon/20">
                                Join Our Network <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventsPage;
