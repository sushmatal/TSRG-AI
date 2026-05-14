import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../components/PageHero';
import { Mail, Linkedin, ChevronRight, X, User, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const TeamMemberCard = ({ member, onClick, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        onClick={() => onClick(member)}
        className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col"
    >
        <div className="aspect-[4/5] relative overflow-hidden">
            <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop"; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="w-full flex items-center justify-between text-white">
                    <span className="text-xs font-black uppercase tracking-widest">View Profile</span>
                    <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </div>
            </div>
        </div>
        <div className="p-8 pb-10 text-center bg-white z-10">
            <h3 className="text-xl font-black text-secondary mb-2 group-hover:text-primary transition-colors">{member.name}</h3>
            <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">{member.role}</p>
        </div>
    </motion.div>
);

const TeamModal = ({ member, onClose }) => {
    if (!member) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-5xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 w-10 h-10 bg-white/50 hover:bg-slate-100 backdrop-blur-md rounded-full flex items-center justify-center text-slate-500 transition-all z-10"
                >
                    <X size={20} />
                </button>

                <div className="w-full md:w-1/2 aspect-square md:aspect-auto relative bg-slate-100">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop"; }}
                    />
                </div>

                <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
                    <div className="mb-8">
                        <h2 className="text-3xl font-black text-secondary mb-2">{member.name}</h2>
                        <h4 className="text-primary font-black uppercase tracking-widest text-[10px]">{member.role}</h4>
                    </div>

                    <div className="space-y-6 text-slate-600 leading-relaxed font-medium">
                        {/* We use a formatted version of the bio here. For mock, it's a single string. */}
                        <p>{member.bio}</p>

                        {/* Extra placeholder details since the modal is larger */}
                        <div className="pt-6 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {member.education && (
                                <div>
                                    <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Education</h5>
                                    <p className="text-xs font-bold text-secondary">{member.education}</p>
                                </div>
                            )}
                            {member.contentFocus && (
                                <div>
                                    <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Focus Areas</h5>
                                    <p className="text-xs font-bold text-secondary">{member.contentFocus}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="mt-10 flex gap-4">
                        <button className="flex-1 bg-primary text-white py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-primary/90 transition-all">
                            <Mail size={16} /> Contact
                        </button>
                        <button className="w-14 bg-slate-50 text-slate-400 hover:text-primary hover:bg-primary/5 py-4 rounded-2xl flex items-center justify-center transition-all border border-slate-100 hover:border-primary/20">
                            <Linkedin size={18} />
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const TeamPage = () => {
    const [selectedMember, setSelectedMember] = useState(null);

    const baseUrl = import.meta.env.BASE_URL;
    const team = [
        {
            name: "William L. Swann",
            role: "Senior Researcher",
            image: `${baseUrl}Team/Will2023.png`,
            contentFocus: "Public Policy and Local Governments",
            education: "PhD from Florida State University",
            bio: "William L. Swann is a Senior Researcher and former Board President at TSRG. He is also an Associate Professor, MPA Program Chair, and the Blue Cross and Blue Shield of Nebraska Chair of Health Care Administration and Policy in the School of Public Administration at the University of Nebraska at Omaha. His research focuses on community-level collaborative opioid response and disparities in substance use treatment and health services. This work has appeared in the Journal of Public Health Management and Practice, Health & Justice, SSM â€“ Population Health, Substance Abuse, Substance Abuse: Research and Treatment, and The Journal of Rural Health. Most recently at TSRG, he co-led a longitudinal social network analysis of substance use treatment and social service providers in multiple southern rural Colorado communities, funded by the Health Services and Resources Administration. He holds a BSBA in finance from Bryant University, an MPA from the University of Rhode Island, and a PhD from the Askew School of Public Administration and Policy at Florida State University. He is an enthusiast of sports, nature and animals, film, and the performing arts."
        },
        {
            name: "Terri L. Schreiber",
            role: "CEO/Project Director, Researcher, Board Vice President",
            image: `${baseUrl}Team/Terri LS 2026 .png`,
            contentFocus: "Community Outreach, Project Management, Grant Writing and Coalition Building",
            education: "MBA from the University of California, Davis, and MPA from Harvard University",
            bio: "Terri L. Schreiber is a skilled practitioner who leverages her background in IT, product management, and research to fill gaps and develop innovative solutions for the substance use crisis. She holds an MPA from the Harvard Kennedy School and an MBA from the University of California, Davis. Terri also completed coursework for a PhD in Public Affairs at the University of Colorado, School of Public Affairs. Her interests bridge both the private and public sectors. Over the past two decades, Terri has worked with a diverse range of organizations, including the Health Resources and Services Administration (HRSA), the Denver Public Schools, the Graduate School of Management at UC Davis, JBS International, the Denver Opioid Abatement Council, the Colorado Trust, the Las Animas School District, The Pew Charitable Trusts, Otero County Health Department, the Pueblo Department of Public Health and Environment, Valley-Wide Health Systems, the Alliance for Benzodiazepine Best Practices, the Colorado Consortium for Prescription Drug Abuse Prevention, Accenture, Microsoft, the Center for Public Leadership at Harvard Kennedy School and United Way of King County. Terri is a highly motivated leader known for her collaborative management, communication, and interpersonal skills. In her free time, she enjoys travel, reading, biking, cooking, gardening, and hiking."
        },
        {
            name: "Sushma Talamanchi",
            role: "Web Developer/Data Analyst",
            image: `${baseUrl}Team/Sushma.jpg`,
            contentFocus: "Front end development and Data analytics",
            education: "BE from Sri Venkateswara University",
            bio: "Sushma Talamanchi is a software engineer from Spring Transits. She manages TSRGâ€™s website and specializes in front-end development and support. Sushma also excels in data analysis and visualization, using her skills to uncover insights that inform strategic decisions. She enjoys solving challenges and delivering effective solutions."
        },
        {
            name: "Steve Wright, MD",
            role: "Advisory Council, Researcher",
            image: `${baseUrl}Team/Steve-wright.jpg`,
            contentFocus: "Addiction Medicine and Medical Research",
            education: "MD from Case Western Reserve University School of Medicine",
            bio: "Steven Wright, MD, is a residency-trained family physician with a 36 year clinical career. Active in addiction medicine (board certified) 31 years and medical pain management 15 years, he focuses on issues related to controlled substances, addiction, and medical pain management through consulting, speaking, advocacy, policy development, education, medical provider assessment / supervision, and medical legal work. His clinical interests include the neurophysiology and treatment of pain and addiction (etiology, pharmacogenetics, treatment), non-opioid analgesia, opioids (medical and non-medical use), benzodiazepines (medical consultant for the Alliance for Benzodiazepine Best Practices), cannabis (medical and nonmedical use), adverse consequences, best practices, and systems of care."
        },
        {
            name: "Serena Kim",
            role: "Senior Researcherâ€Ž",
            image: `${baseUrl}Team/Sarena-Kim.jpg`,
            contentFocus: "Data Science",
            education: "PhD from Florida State University",
            bio: "Serena Kim works as a senior researcher at TSRG and is also an assistant professor in the School of Public and International Affairs at NC State University. Her research focuses on using data to address real-world issues, particularly in the areas of energy and public health. Serena is passionate about developing software, tools, and models that use data and AI to solve problems. Her research has been published in respected journals like SSM â€“ Population Health, EPJ Data Science, Energy Policy, Applied Energy, and the Journal of Rural Health. Serena holds a PhD from the Askew School of Public Administration and Policy at Florida State University and an MS in Computer Science from the University of Colorado Boulder. Outside of her work, Serena enjoys hiking, dancing, yoga, playing the piano, trying out new recipes, reading, watching movies, and attending performing arts shows."
        },
        {
            name: "Michael DiNardi",
            role: "Senior Researcher",
            image: `${baseUrl}Team/Mike -DiNardi.png`,
            contentFocus: "Applied Health Economics",
            education: "PhD from the University of Connecticut",
            bio: "Michael DiNardi is an Assistant Professor in the economics department at the University of Rhode Island. He is an empirical applied microeconomist with broad research interests in health and labor economics. The common theme in Michaelâ€™s research is understanding the effects of public policy on health, health behaviors, and healthcare, particularly those related to disadvantaged groups. His work has been published in the Journal of Population Economics and presented at annual conferences of the American Economic Association, Association for Public Policy Analysis and Management, Eastern Economic Association, and Southern Economic Association. Michael earned his Ph.D in economics from the University of Connecticut in 2018. He also holds a masterâ€™s degree in economics from the University of Connecticut, a masterâ€™s degree in regional economic and social development from the University of Massachusetts-Lowell, and a bachelorâ€™s degree in economics from the University of Massachusetts-Lowell. In his spare time, Michael enjoys attending concerts, playing guitar, working out, and hockey."
        },
        {
            name: "Maddie Peloff",
            role: "Data Consultant",
            image: `${baseUrl}Team/Maddie2023.png`,
            contentFocus: "Consortium Management, Data Management, Research, Program Planning",
            education: "MPH from the University of Colorado School of Public Health",
            bio: "Maddie Peloff graduated from the University of North Carolina, Chapel Hill in 2020 with a B.S. in Biology. She finished her Master of Public Health (MPH) degree in 2024 at the University of Colorado, Anschutz Medical Campus with a specific focus on global, community, and behavioral health. At TSRG, Maddie serves as Data Coordinator, where she collects, aggregates, and analyzes data to support dashboard development and a range of research initiatives. She also manages TSRGâ€™s Workforce Development for People in Recovery VISTA Project, overseeing AmeriCorps members engaged in capacity-building efforts to establish a workforce center in rural southeastern Colorado. Outside of work and school, Maddie enjoys hiking, running, reading, spending time with her dogs, and listening to live music."
        },
        {
            name: "Lauren Kerr",
            role: "Data Consultant",
            image: `${baseUrl}Team/Lauren.JPEG`,
            contentFocus: "Consortium Management, Data and Administrative Management, Research",
            education: "MPH in Health Systems, Management, and Policy",
            bio: "Lauren Kerr earned her Master of Public Health in Health Systems, Management & Policy from the Colorado School of Public Health, with a certificate in Applied Biostatistics. During her time at TSRG, she worked with communities in rural Southeast Colorado to improve opioid-related health outcomes through community outreach, coalition building, and applied research. Her work included data collection and analysis, report writing, and supporting local partners in developing programs and services to address the substance use crisis. Lauren now serves as an Information Science Research Professional at the University of Colorado Anschutz, where she works on advanced statistical analyses and simulation modeling projects with a focus on substance use and homelessness. She is passionate about using data-driven research to inform policy and decision-making to improve health outcomes. Lauren will continue to support TSRG projects on an as-needed basis as a Public Health Consultant."
        },
        {
            name: "Tori Hodkin",
            role: "TSRG AmeriCorps Vista Member 2026",
            image: `${baseUrl}Team/Tori.png`,
            contentFocus: "Workforce Development",
            education: "B.A. in Sociology and Research Methods",
            bio: "Tori Hodkin graduated from Colorado College in 2025 with a B.A. in Sociology and Research Methods. She joins TSRG as an AmeriCorps VISTA, assisting in program implementation for the Workforce Development Program for People in Recovery. A combination of outreach and research, the project is currently focusing on developing a tool to gauge aptitudes and skillsets of those navigating SUD. Outside of work, Tori enjoys biking and hiking, listening to live music, collaging, playing boardgames, and spending time with her cat."
        },
        {
            name: "Heidi McNeely",
            role: "Board President",
            image: `${baseUrl}Team/Heidi-McNeely_2021.jpg`,
            contentFocus: "Strategic Planning and Board Recruitment",
            education: "PhD from the University of Kansas",
            bio: "Heidi McNeely is a pediatric Clinical Nurse Specialist who currently works as the VP Individual Credentialing and Research with the American Nurses Association. She was the Drug Diversion Prevention Officer at Childrenâ€™s Hospital Colorado and is a board member of the International Health Facility Diversion Association. Heidi also completed a PhD at the University of Kansas in the School of Nursing with a minor focus in Health Policy. As a Board member for TSRG, Heidi will focus on strategic planning and board recruitment."
        },
        {
            name: "Diana Padgett",
            role: "Finance Manager",
            image: `${baseUrl}Team/DianaP2023.png`,
            contentFocus: "Fiscal management",
            education: "MS in Management from the University of Colorado",
            bio: "Diana founded Cents & Sensibility in 2008 when she became aware of the growing need for affordable financial expertise in the small business & nonprofit sectors. She has seen too many business owners and managers become frustrated even to the point of burnout because their strengths and passions lie elsewhere. Diana became TSRGâ€™s Finance Manager in 2021. Providing solutions is what drives her. Diana holds a Masters of Science in Management from the University of Colorado and a Certificate in Entrepreneurial Studies from the Bard Center for Entrepreneurship. In her free timeâ€¦ (wait, WHAT free time??) she enjoys hiking with the hubby and dogs, reading, and experiencing all the wonders of our beautiful state."
        },
        {
            name: "Derek Coe",
            role: "Board Member",
            image: `${baseUrl}Team/Derek.jpg`,
            contentFocus: "Grant Writing and TSRG Development",
            education: "Master of Public Health in Health Promotion from the University of Alberta",
            bio: "Derek Coe is a public health professional with over 13 years of experience in health education, project management, strategic planning, continuous quality improvement, and grant writing in Canada and the United States. His interests and professional experiences cover a wide range of health topics that includes addiction awareness, nutrition, physical activity through exercise and sport, as well as mental health and wellness. Derek is joining the board of directors to provide technical support and guidance during the grant writing and funding solicitation process. In his free time, Derek enjoys spending time with his wife and son, playing and watching hockey, skiing/snowboarding, and attempting minor home renovation projects (the quality of the final product is subjective)."
        },
        {
            name: "Cheri Jahn",
            role: "Board Member",
            image: `${baseUrl}Team/Cherijahn.jpg`,
            contentFocus: "Public policy and board development",
            education: "Associateâ€™s Degree in Paralegal Studies",
            bio: "Cheri Jahn is a former State Senator from Wheat Ridge, Colorado. She served in the legislature as a State Representative from 2001-2009 and in the State Senate from 2010 â€“ 2019. During her 16 years of service in the legislature Cheri became known as the Bridge Builder, working with colleagues from both sides of the aisle on issues ranging from business interests, judicial reform and behavioral health care including substance use disorders. Cheri raised three children as a single mother while running a small business and staying active in her community, working on issues that affected the residents in Wheat Ridge. She was asked to run for the State House in 1999 and enjoyed more than anything being able to connect with citizens on issues important to them and their families. Also, while serving as a State Representative, she earned an Associateâ€™s Degree in Paralegal Studies. Cheri was appointed Speaker Pro Tempore by Speaker Andrew Romanoff in 2005 due to her ability to work successfully with all of her colleagues, putting party affiliations aside, on matters that were important to the entire state. She carried her bipartisan beliefs and working collaboratively with her throughout her term as a State Senator. After Cheri left the senate due to term limits in 2019, she started Ascend Consulting & Government Affairs, LLC so she could continue her work on policy, strategy and community building to achieve success on issues important to people in the state. She also continues running her small business that she started back in 1977 while being a single mom. Cheri now serves on several Boards including being appointed to the Jefferson County Board of Health in 2019 for a 5-year term. Cheri is a Board member contributing to the strategic planning, board development, and fundraising efforts of the team."
        },
        {
            name: "Carolyn Paul",
            role: "Treasurer",
            image: `${baseUrl}Team/Carolyn.png`,
            contentFocus: "Finance",
            education: "BS Finance",
            bio: "Carolyn Paul is a retired financial services executive with over 35 years experience in leadership at banks and brokerage companies. She retired as President of Financial Services and board member for a Colorado based community bank. Passionate about giving back to the community, Paul has served on over 25 non-profit boards. In 2021 the governor of Colorado appointed her to the Colorado Secure Saving Program Board where she currently serves as Vice Chair. The Colorado Secure Savings Program is a state run auto enroll IRA program that provides a retirement savings vehicle for employees of companies that donâ€™t offer a private retirement program. In addition, she serves on the board of a privately held software consulting company. Paul joined the TSRG board to offer financial acumen and serves as the treasurer."
        },
        {
            name: "Bharat Mabbu",
            role: "Board Member",
            image: `${baseUrl}Team/Bharat.jpg`,
            contentFocus: "Information technology development and infrastructure",
            education: "MBA , MS",
            bio: "Bharat Mabbu is a Senior Technology Leader with 20 years of experience in designing, and building complex, distributed, and low latency products in global engineering organizations across the Netherlands, India, and the United States. He has experience in developing and leading engineering and data science teams to solve global-scale business challenges using cutting-edge technology in companies like Baan, Microsoft, and Amazon. Bharat shipped multiple products in different domains like windows/office activation, digital supply chain, AI/ML-powered optimizations, advanced integration platforms, and payment systems. At Clearwater Analytics, Bharat leads the engineering organization that focuses on building technology platforms to effectively manage clientsâ€™ investment data and reporting solutions. Bharat loves reading books, gardening, and spending his time mentoring budding engineers, both inside and outside his current role. He constantly challenges the status quo, experiments with innovative methods, and cross-pollinates ideas from other disciplines and industries. He runs a platform (Spring Transits) through an innovative social engagement model. Using this platform, Bharat is actively helping build a scalable, reliable, and community-based global eco-system that nurtures and supports women transition back into the workforce. Bharat is a Board member contributing to strategic planning and board development of TSRG."
        },
        {
            name: "Arthur Segall",
            role: "Advisory Council",
            image: `${baseUrl}Team/Arthur-Segall2-e1618965438916.png`,
            contentFocus: "Information technology and nonprofit management",
            education: "B.A.Sc. Computer Science, University of Colorado at Boulder",
            bio: "Arthur Segall is a Vice President and financial advisor with Morgan Stanley. He has worked in the financial services industry for over 30 years and contributes his business acumen to TSRGâ€™s Advisory Council. He was a board member for three years (2021 â€“ 2023) and helped TSRG through a major growth phase by helping implement core systems and processes. Arthur provided guidance and feedback through this rapidly changing and critical phase of development."
        }

    ];
    const sortedTeam = [...team].sort((a, b) => b.name.localeCompare(a.name));

    // Lock body scroll when modal is open
    React.useEffect(() => {
        if (selectedMember) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; }
    }, [selectedMember]);

    return (
        <div className="min-h-screen bg-slate-50">
            <PageHero
                title="Our Team"
                backgroundImage={`${baseUrl}Header%20Images/Generic%20Banner.png`}
                imageAlignment="object-top"
            />

            <section className="pt-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-black text-secondary leading-tight tracking-tight max-w-4xl"
                    >
                        A diverse collective of researchers, advocates, and data scientists dedicated to rural resilience.
                    </motion.p>
                </div>
            </section>

            <section className="py-24 bg-slate-50/50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-20 max-w-3xl mx-auto">

                        <h2 className="text-4xl font-black text-secondary leading-tight">The Backbone Support Behind Every Initiative</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {sortedTeam.map((member, i) => (
                            <TeamMemberCard
                                key={i}
                                member={member}
                                delay={i * 0.1}
                                onClick={setSelectedMember}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Us CTA */}
            <section className="py-24 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/5 -skew-y-3 origin-right transform scale-110" />
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl border border-slate-100 flex flex-col items-center text-center max-w-4xl mx-auto">
                        <div className="w-full">
                            <h2 className="text-3xl md:text-5xl font-black text-secondary mb-6">Want to make an impact?</h2>
                            <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
                                You can support our mission by donating. Your contribution helps us turn data into stories and stories into lasting change.
                            </p>
                            <Link 
                                to="/get-involved/donate"
                                className="inline-flex bg-accent text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm items-center gap-3 hover:-translate-y-1 transition-all shadow-xl hover:shadow-accent/40"
                            >
                                Donate Here <Heart size={18} className="fill-white" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal Portal */}
            <AnimatePresence>
                {selectedMember && (
                    <TeamModal
                        member={selectedMember}
                        onClose={() => setSelectedMember(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default TeamPage;
