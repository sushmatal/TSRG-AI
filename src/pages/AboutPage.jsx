import React from 'react';
import { motion } from 'framer-motion';
import {
  Users2, ShieldCheck, ArrowRight, BookOpen, Zap, Network,
  MapPin, Phone, Mail, Quote, ChevronDown, CheckCircle2,
  HeartHandshake, Microscope, TrendingUp, Building2,
  Activity, ShieldPlus, Wine, Leaf, Wind
} from 'lucide-react';

/* ─────────────────────────────────────────────
   1. HERO
   Refined to feel more modern and highlight the community-first approach.
───────────────────────────────────────────── */
const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0a1628]">
    {/* Background */}
    <div className="absolute inset-0 z-0">
      <img
        src={`${import.meta.env.BASE_URL}about_header_community_strategy_1773950920170.png`}
        alt="Community Strategy"
        className="w-full h-full object-cover object-center opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/95 via-[#0a1628]/80 to-transparent" />
      
      {/* Animated accent elements */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
      />
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -bottom-20 -left-[5%] w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px]"
      />
    </div>

    <div className="container mx-auto px-6 relative z-10 max-w-6xl py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="text-center md:text-left"
      >
        <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/5 backdrop-blur-md text-[#FCE6A3] text-[10px] font-black tracking-[0.4em] uppercase mb-8 border border-white/10">
          <span className="w-1.5 h-1.5 bg-[#FCE6A3] rounded-full animate-pulse" />
          Established 2018
        </span>

        <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
          From Data to <span className="text-[#FCE6A3] italic">Impact.</span><br />
          Research that <span className="text-accent">Empowers.</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed max-w-3xl font-medium">
          TSRG brings people, data, and action together to reduce substance use harm and build healthier futures.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
          <motion.a
            href="#who-we-are"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-[#FCE6A3] text-[#0a1628] font-black px-10 py-5 rounded-2xl text-xs tracking-widest uppercase hover:bg-white transition-all shadow-xl shadow-yellow-500/10"
          >
            Learn Our Story <ArrowRight size={16} />
          </motion.a>
          <motion.a
            href="#explore-work"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md text-white font-black px-10 py-5 rounded-2xl text-xs tracking-widest uppercase hover:bg-white/10 transition-all border border-white/20"
          >
            Explore Our Work <BookOpen size={16} />
          </motion.a>
        </div>
      </motion.div>
    </div>

    {/* Scroll cue */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
        <motion.div 
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-1 h-2 bg-white/40 rounded-full"
        />
      </div>
    </motion.div>
  </section>
);

/* ─────────────────────────────────────────────
   2. WHO WE ARE
   Updated with provided content.
───────────────────────────────────────────── */
const WhoWeAre = () => (
  <section id="who-we-are" className="py-32 bg-white overflow-hidden">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left - Content */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-black tracking-[0.3em] uppercase text-xs mb-6 block">Our Story</span>
            <h2 className="text-4xl md:text-6xl font-black text-[#0a1628] mb-10 leading-tight tracking-tight">
              Bridging the Gap Between <span className="text-primary italic">Data</span> and <span className="text-primary">Action.</span>
            </h2>
            
            <div className="space-y-8 text-slate-600 text-lg leading-relaxed font-medium">
              <p className="text-[#0a1628] text-2xl font-bold leading-snug">
                The Schreiber Research Group (TSRG) is a Colorado-based nonprofit organization dedicated to improving outcomes related to substance misuse through research, education, and community-driven initiatives.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-5">
                    <Zap size={24} />
                  </div>
                  <p className="text-sm leading-relaxed">
                    We exist to turn research into real-world action, helping communities respond more effectively to the substance use crisis through evidence, collaboration, and practical solutions.
                  </p>
                </div>
                <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                  <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-5">
                    <Network size={24} />
                  </div>
                  <p className="text-sm leading-relaxed">
                    Since its founding in 2018, TSRG has grown into a multi-state, interdisciplinary organization working across public health, policy, data science, and community systems.
                  </p>
                </div>
              </div>

              <p className="pt-4">
                Our work bridges the gap between data and action so communities can build systems that are not only effective but also sustainable and resilient. We don't just study problems—we help communities solve them together.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right - Visual */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl relative">
              <img
                src={`${import.meta.env.BASE_URL}strategic_infrastructure_backbone_1773950424182.png`}
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

            {/* Decorative stats */}
            <div className="absolute -top-10 -right-5 bg-[#FCE6A3] text-primary p-6 rounded-3xl shadow-xl z-10">
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
   3. EXPLORE OUR WORK
   Interactive Focus Areas Grid
───────────────────────────────────────────── */
const ExploreOurWork = () => {
  const focusAreas = [
    { title: "Opioids", icon: <Activity />, color: "from-blue-500 to-blue-600" },
    { title: "Benzodiazepines", icon: <ShieldPlus />, color: "from-indigo-500 to-indigo-600" },
    { title: "Alcohol", icon: <Wine />, color: "from-amber-500 to-amber-600" },
    { title: "Marijuana", icon: <Leaf />, color: "from-emerald-500 to-emerald-600" },
    { title: "Vaping", icon: <Wind />, color: "from-cyan-500 to-cyan-600" }
  ];

  return (
    <section id="explore-work" className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#FCE6A3] font-black tracking-[0.3em] uppercase text-xs mb-6 block">Explore Our Work</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Data Solutions for <span className="text-accent italic">Resilient Communities.</span>
            </h2>
            <p className="text-white/60 text-lg font-medium leading-relaxed mb-10">
              Our work focuses on one core goal: turning data into solutions that communities can use to solve problems. We study the substance use crisis through a public health lens, combining research, lived experience, and community collaboration.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-white/5 backdrop-blur-sm rounded-[3rem] border border-white/10"
          >
            <p className="text-white/80 text-lg leading-relaxed italic">
              "From rural ridges to urban centers, we conduct research that informs prevention, treatment, and recovery efforts across diverse landscapes."
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {focusAreas.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-[2rem] p-8 h-full transition-all duration-500 text-center flex flex-col items-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${area.color} flex items-center justify-center text-white mb-6 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-500`}>
                  {area.icon}
                </div>
                <h4 className="text-white font-black text-sm tracking-wide uppercase">{area.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   4. IMPACT METRICS
   Stylish highlight of numbers.
───────────────────────────────────────────── */
const ImpactMetrics = () => {
  const stats = [
    { label: "Founded", value: "2018", suffix: "" },
    { label: "Substances Studied", value: "5+", suffix: "" },
    { label: "Community Partners", value: "50", suffix: "+" },
    { label: "Initiatives", value: "100", suffix: "%" }
  ];

  return (
    <section className="py-24 bg-[#0a1628] border-y border-white/5">
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
                {s.value}<span className="text-[#FCE6A3]">{s.suffix}</span>
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
   5. HOW WE WORK (Refined Steps)
───────────────────────────────────────────── */
const HowWeWork = () => {
  const steps = [
    { title: "Identify", desc: "Pinpointing community gaps through data.", icon: <Microscope /> },
    { title: "Collaborate", desc: "Building cross-sector partnerships.", icon: <Users2 /> },
    { title: "Implement", desc: "Turning evidence into action.", icon: <Zap /> },
    { title: "Sustain", desc: "Ensuring long-term resilience.", icon: <TrendingUp /> }
  ];

  return (
    <section className="py-32 bg-slate-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-24">
          <span className="text-primary font-black tracking-[0.3em] uppercase text-xs mb-6 block">Our Methodology</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0a1628]">Turning Evidence into Results.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500"
            >
              <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-primary/20">
                {s.icon}
              </div>
              <h4 className="text-xl font-black text-[#0a1628] mb-4">{s.title}</h4>
              <p className="text-slate-500 font-medium leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   6. CONTACT CTA (Stylish)
───────────────────────────────────────────── */
const ContactCTA = () => (
  <section className="py-32 bg-white">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="bg-[#0a1628] rounded-[4rem] p-12 md:p-24 relative overflow-hidden text-center md:text-left">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/20 to-transparent pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Ready to <span className="text-[#FCE6A3]">Partner</span> With Us?
            </h2>
            <p className="text-white/60 text-lg mb-10 leading-relaxed font-medium">
              We're here to help you turn insight into action and action into lasting community change. Let's build a healthier future together.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="mailto:terri@tsrg.org" className="bg-[#FCE6A3] text-[#0a1628] font-black px-10 py-5 rounded-2xl text-xs tracking-widest uppercase hover:bg-white transition-all">
                Send an Email
              </a>
              <a href="tel:+17202348191" className="bg-white/5 backdrop-blur-md text-white border border-white/20 font-black px-10 py-5 rounded-2xl text-xs tracking-widest uppercase hover:bg-white/10 transition-all">
                Call Us
              </a>
            </div>
          </div>

          <div className="space-y-6">
            {[
              { icon: <Mail />, label: "Email", value: "terri@tsrg.org" },
              { icon: <Phone />, label: "Phone", value: "+1 720-234-8191" },
              { icon: <MapPin />, label: "Office", value: "Denver, Colorado" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 p-6 bg-white/5 rounded-[2rem] border border-white/10">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-[#FCE6A3]">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">{item.label}</div>
                  <div className="text-white font-bold">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   PAGE ASSEMBLY
───────────────────────────────────────────── */
const AboutPage = () => (
  <main className="bg-white pt-20">
    <Hero />
    <WhoWeAre />
    <ImpactMetrics />
    <ExploreOurWork />
    <HowWeWork />
    <ContactCTA />
  </main>
);

export default AboutPage;
