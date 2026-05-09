import React from 'react';
import { motion } from 'framer-motion';
import {
  Users2, Quote, Target, Eye, Heart, ShieldCheck, Activity, SearchCheck, Settings
} from 'lucide-react';
import PageHero from '../components/PageHero';

/* ─────────────────────────────────────────────
   1. OUR STORY
───────────────────────────────────────────── */
const OurStory = () => (
  <section id="our-story" className="py-32 bg-white overflow-hidden">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-black tracking-[0.3em] uppercase text-xs mb-6 block">Our Story</span>
            <h2 className="text-4xl md:text-6xl font-black text-secondary mb-10 leading-tight tracking-tight">
              Bridging the Gap Between <span className="text-primary italic">Data</span> and <span className="text-primary">Action.</span>
            </h2>

            <div className="space-y-8 text-slate-600 text-lg leading-relaxed font-medium">
              <p className="text-secondary text-2xl font-bold leading-snug">
                The Schreiber Research Group (TSRG) is a Colorado-based nonprofit organization dedicated to improving outcomes related to substance misuse through research, education, and community-driven initiatives.
              </p>
              <p>
                We exist to turn research into real-world action, helping communities respond more effectively to the substance use crisis through evidence, collaboration, and practical solutions.
              </p>
              <p>
                Our work bridges the gap between data and action so communities can build systems that are not only effective but also sustainable and resilient.
              </p>
              <p>
                Since its founding in 2018, TSRG has grown into a multi-state, interdisciplinary organization working across public health, policy, data science, and community systems to drive meaningful change.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl relative">
              <img
                src={`${import.meta.env.BASE_URL}About Us Image (1).png`}
                alt="Community Collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20">
                <p className="text-white font-bold text-xl leading-tight">
                  "Turning research into sustainable, locally-driven progress."
                </p>
              </div>
            </div>
            <div className="absolute -top-10 -right-5 bg-accent text-white p-6 rounded-3xl shadow-xl z-10">
              <div className="text-4xl font-black mb-1">2018</div>
              <div className="text-[10px] font-black uppercase tracking-widest opacity-70">Year Founded</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   2. MISSION, VISION, PURPOSE (Integrated from Home)
───────────────────────────────────────────── */
const MissionVisionPurpose = () => {
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
        <section className="py-24 bg-slate-50">
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
   3. CEO MESSAGE
───────────────────────────────────────────── */
const CEOMessage = () => (
  <section id="ceo-message" className="py-24 bg-white relative overflow-hidden">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src={`${import.meta.env.BASE_URL}Team/Terri LS 2026 .png`}
                alt="Terri L. Schreiber"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-3xl shadow-xl">
              <Quote className="text-white w-8 h-8 opacity-50" />
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-black tracking-[0.3em] uppercase text-xs mb-6 block">Direct from the Desk</span>
            <h2 className="text-4xl md:text-5xl font-black text-secondary mb-10 tracking-tight leading-tight">
              A Message from TSRG CEO
            </h2>
            
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium italic">
              <p>
                What I have learned through our conversations, on our podcast, in the field, and within the communities we serve, is that substance use is never just a data point. It is a lived experience shaped by trauma, resilience, systems of care, and the often difficult journey toward recovery.
              </p>
              <p>
                At TSRG, we exist in the space between stories and systems. The podcast has made this especially clear: behind every statistic is a person navigating stigma, access barriers, treatment gaps, and moments of both struggle and strength. These voices remind us that meaningful change cannot come from research alone; it must come from listening first, and then acting with intention.
              </p>
              <p>
                Our work is grounded in the belief that healing and impact happen when data is paired with humanity. We translate what we learn from communities, practitioners, and lived experience into actionable insights that strengthen response systems and improve outcomes.
              </p>
              <p>
                But just as importantly, we are constantly reminded that progress is not linear. It is built through trust, collaboration, and the willingness to sit with complexity rather than simplify it.
              </p>
              <p>
                TSRG is committed to continuing this work, not only by studying the substance use crisis, but by engaging with it directly, thoughtfully, and alongside the people most affected.
              </p>
              <p>
                We invite you to share, to engage, and to join us in turning understanding into meaningful change.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="font-black text-2xl text-secondary">Terri L. Schreiber</div>
              <div className="text-primary font-black uppercase tracking-widest text-xs mt-1">CEO of TSRG</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   4. IMPACT METRICS
───────────────────────────────────────────── */
const ImpactMetrics = () => {
  const stats = [
    { label: "Founded", value: "2018", suffix: "" },
    { label: "Substances Studied", value: "5+", suffix: "" },
    { label: "Community Partners", value: "50", suffix: "+" },
    { label: "Initiatives", value: "100", suffix: "%" }
  ];

  return (
    <section className="py-24 bg-secondary border-y border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-black text-white mb-3 tracking-tighter">
                {s.value}<span className="text-white">{s.suffix}</span>
              </div>
              <div className="text-xs font-black uppercase tracking-[0.2em] text-white/40">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   PAGE ASSEMBLY
───────────────────────────────────────────── */
const AboutPage = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <main className="bg-white pt-20">
      <PageHero
        title="About TSRG"
        subtitle="TSRG brings people, data, and action together to reduce substance use harm and build healthier futures."
        backgroundImage={`${baseUrl}Header%20Images/Generic%20Banner.png`}
        imageAlignment="object-center"
      />
      <OurStory />
      <MissionVisionPurpose />
      <CEOMessage />
      <ImpactMetrics />
    </main>
  );
};

export default AboutPage;
