import React from 'react';
import { motion } from 'framer-motion';
import {
  Activity, ShieldPlus, Wine, Leaf, Wind,
  Search, Database, Users, TrendingUp, Microscope, Users2, Zap, ArrowRight, CheckCircle2
} from 'lucide-react';
import PageHero from '../components/PageHero';

/* ─────────────────────────────────────────────
   1. EXPLORE OUR WORK (FOCUS AREAS)
───────────────────────────────────────────── */
const ExploreOurWork = () => {
  const focusAreas = [
    { title: "Opioids", icon: <Activity />, color: "from-[#3F65A5] to-[#2A436E]", desc: "Crisis response & harm reduction" },
    { title: "Benzodiazepines", icon: <ShieldPlus />, color: "from-[#1D7B72] to-[#14564F]", desc: "Risk mitigation & clinical oversight" },
    { title: "Alcohol", icon: <Wine />, color: "from-amber-500 to-amber-700", desc: "Community prevention systems" },
    { title: "Marijuana", icon: <Leaf />, color: "from-emerald-500 to-emerald-700", desc: "Policy impact & health analysis" },
    { title: "Vaping", icon: <Wind />, color: "from-cyan-500 to-cyan-700", desc: "Youth prevention & outreach" }
  ];

  return (
    <section id="explore-work" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <span className="text-primary font-black tracking-[0.4em] uppercase text-xs mb-6 block">Domain Expertise</span>
            <h2 className="text-5xl md:text-6xl font-black text-secondary mb-8 leading-[1.1] tracking-tight">
              Data Solutions for <br />
              <span className="text-primary italic">Resilient Communities.</span>
            </h2>
            <div className="text-slate-500 text-lg font-medium leading-relaxed space-y-6 max-w-2xl">
              <p>
                Our work focuses on one core goal: <span className="text-secondary font-bold">turning data into solutions</span> that communities can use to solve problems. 
              </p>
              <p>
                We study the substance use crisis through a public health lens, combining research, lived experience, and community collaboration to better understand what works, where gaps exist, and how systems can improve.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-[4rem] blur-2xl group-hover:opacity-40 transition-opacity duration-700 opacity-0" />
                <div className="aspect-square bg-slate-50 rounded-[3.5rem] p-12 border border-slate-100 relative overflow-hidden flex items-center justify-center">
                    <img
                        src={`${import.meta.env.BASE_URL}strategic_infrastructure_backbone_1773950424182.png`}
                        alt="Research Impact"
                        className="w-full h-full object-cover opacity-80 mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
                </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {focusAreas.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-primary/20 rounded-[2rem] p-6 h-full transition-all duration-500 relative flex flex-col items-center text-center hover:shadow-xl">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${area.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-all duration-500`}>
                  {React.cloneElement(area.icon, { size: 28 })}
                </div>
                <h4 className="text-secondary font-black text-base tracking-tight mb-2">{area.title}</h4>
                <p className="text-slate-400 text-[10px] font-bold leading-relaxed">{area.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   2. OUR SOLUTIONS (SERVICES)
───────────────────────────────────────────── */
const Services = () => {
  const solutions = [
    {
      title: "Name the Problem",
      description: "We conduct landscape reviews and community needs assessments to find the most relevant data for your community.",
      features: ["Landscape Reviews", "Needs Assessments", "Gap Analysis"],
      icon: <Search size={28} className="text-white" />,
      accent: "bg-blue-500"
    },
    {
      title: "Research Solutions",
      description: "We perform qualitative and quantitative research to discover in-depth knowledge about communities and service needs.",
      features: ["Qualitative Research", "Quantitative Research", "Evidence-Based Design"],
      icon: <Database size={28} className="text-white" />,
      accent: "bg-accent"
    },
    {
      title: "Take Action",
      description: "Our skilled facilitators convene diverse groups to consider solution pathways and to put plans into practice.",
      features: ["Group Facilitation", "Implementation Planning", "Stakeholder Alignment"],
      icon: <Users size={28} className="text-white" />,
      accent: "bg-indigo-500"
    },
    {
      title: "Confirm Progress",
      description: "We provide evaluation and training to validate efficacy so success can be scaled and shared.",
      features: ["Program Evaluation", "Performance Metrics", "Scalability Planning"],
      icon: <TrendingUp size={28} className="text-white" />,
      accent: "bg-emerald-500"
    }
  ];

  return (
    <section id="services" className="py-24 bg-secondary text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary rounded-full -translate-y-1/2 translate-x-1/2 blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent rounded-full translate-y-1/2 -translate-x-1/2 blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-accent font-black tracking-[0.4em] uppercase text-xs mb-6 block">Our Backbone Services</span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.05] mb-8">
            Identify <span className="text-accent italic">Gaps</span> to Improve <span className="text-accent">Outcomes.</span>
          </h2>
          <p className="text-white/60 text-xl font-medium leading-relaxed max-w-3xl mx-auto">
            We provide the backbone infrastructure rural and urban communities need to thrive and grow together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white/5 border border-white/10 p-10 rounded-[3rem] hover:bg-white/10 hover:border-white/20 transition-all duration-700 group relative overflow-hidden flex flex-col items-start"
            >
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-all duration-500 group-hover:scale-110">
                {React.cloneElement(item.icon, { size: 32 })}
              </div>
              
              <h3 className="text-3xl font-black text-white mb-6 tracking-tight">{item.title}</h3>
              <p className="text-white/60 text-lg mb-8 leading-relaxed font-medium">{item.description}</p>

              <div className="mt-auto w-full">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {item.features.map((feat, j) => (
                    <div key={j} className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/5">
                      <CheckCircle2 size={14} className="text-accent" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/80">{feat}</span>
                    </div>
                  ))}
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
   3. THE PROCESS (METHODOLOGY)
───────────────────────────────────────────── */
const HowWeWork = () => {
  const steps = [
    { title: "Identify", desc: "Pinpointing community gaps through data.", icon: <Microscope /> },
    { title: "Collaborate", desc: "Building cross-sector partnerships.", icon: <Users2 /> },
    { title: "Implement", desc: "Turning evidence into action.", icon: <Zap /> },
    { title: "Sustain", desc: "Ensuring long-term resilience.", icon: <TrendingUp /> }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <span className="text-primary font-black tracking-[0.4em] uppercase text-xs mb-6 block">The TSRG Path</span>
          <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tight">Turning Evidence into Results.</h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0">
            <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full bg-accent"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="group"
              >
                <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 hover:shadow-xl transition-all duration-700 flex flex-col items-center text-center relative">
                  <div className="w-16 h-16 bg-white border border-slate-100 text-primary rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-500">
                    {React.cloneElement(s.icon, { size: 28 })}
                  </div>
                  
                  <h4 className="text-xl font-black text-secondary mb-4">{s.title}</h4>
                  <p className="text-slate-500 text-sm font-bold leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   PAGE ASSEMBLY
───────────────────────────────────────────── */
const ExploreOurWorkPage = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <main className="bg-white pt-20">
      <PageHero
        title="Explore Our Work"
        subtitle="Turning data into solutions for resilient communities through rigorous research and collaborative action."
        backgroundImage={`${baseUrl}Header%20Images/Generic%20Banner.png`}
        imageAlignment="object-center"
      />
      <ExploreOurWork />
      <Services />
      <HowWeWork />
    </main>
  );
};

export default ExploreOurWorkPage;
