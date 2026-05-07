import React from 'react';
import { motion } from 'framer-motion';
import {
  Users2, ShieldCheck, ArrowRight, BookOpen, Zap, Network,
  MapPin, Phone, Mail, Quote, ChevronDown, CheckCircle2,
  HeartHandshake, Microscope, TrendingUp, Building2,
  Activity, ShieldPlus, Wine, Leaf, Wind,
  Search, Database, Users
} from 'lucide-react';
import PageHero from '../components/PageHero';

/* ─────────────────────────────────────────────
   1. HERO
───────────────────────────────────────────── */

/* ─────────────────────────────────────────────
   2. WHO WE ARE
───────────────────────────────────────────── */
const WhoWeAre = () => (
  <section id="who-we-are" className="py-32 bg-white overflow-hidden">
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
            <h2 className="text-4xl md:text-6xl font-black text-[#0a1628] mb-10 leading-tight tracking-tight">
              Bridging the Gap Between <span className="text-primary italic">Data</span> and <span className="text-primary">Action.</span>
            </h2>

            <div className="space-y-8 text-slate-600 text-lg leading-relaxed font-medium">
              <p className="text-[#0a1628] text-2xl font-bold leading-snug">
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
   3. CEO MESSAGE
───────────────────────────────────────────── */
const CEOMessage = () => (
  <section id="ceo-message" className="py-24 bg-slate-50 relative overflow-hidden">
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
            <h2 className="text-4xl md:text-5xl font-black text-[#0a1628] mb-10 tracking-tight leading-tight">
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
              <div className="font-black text-2xl text-[#0a1628]">Terri L. Schreiber</div>
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
   5. EXPLORE OUR WORK
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
            <div className="text-white/60 text-lg font-medium leading-relaxed space-y-6">
              <p>
                Our work focuses on one core goal: turning data into solutions that communities can use to solve problems. We study the substance use crisis through a public health lens, combining research, lived experience, and community collaboration to better understand what works, where gaps exist, and how systems can improve.
              </p>
              <p>
                From opioids to benzodiazepines and other substances, including alcohol, marijuana, and vaping products, we conduct research that informs prevention, treatment, and recovery efforts across both rural and urban communities.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block p-10 bg-white/5 backdrop-blur-sm rounded-[3rem] border border-white/10"
          >
            <div className="aspect-square relative overflow-hidden rounded-2xl">
              <img
                src={`${import.meta.env.BASE_URL}strategic_infrastructure_backbone_1773950424182.png`}
                alt="Research Impact"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            </div>
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
   6. SERVICES
───────────────────────────────────────────── */
const Services = () => {
  const solutions = [
    {
      title: "Name the Problem",
      description: "We conduct landscape reviews and community needs assessments to find the most relevant data for your community.",
      features: ["Landscape Reviews", "Needs Assessments", "Gap Analysis"],
      icon: <Search size={28} className="text-primary" />
    },
    {
      title: "Research Solutions",
      description: "We perform qualitative and quantitative research to discover in-depth knowledge about communities and service needs.",
      features: ["Qualitative Research", "Quantitative Research", "Evidence-Based Design"],
      icon: <Database size={28} className="text-primary" />
    },
    {
      title: "Take Action",
      description: "Our skilled facilitators convene diverse groups to consider solution pathways and to put plans into practice.",
      features: ["Group Facilitation", "Implementation Planning", "Stakeholder Alignment"],
      icon: <Users size={28} className="text-primary" />
    },
    {
      title: "Confirm Progress",
      description: "We provide evaluation and training to validate efficacy so success can be scaled and shared.",
      features: ["Program Evaluation", "Performance Metrics", "Scalability Planning"],
      icon: <TrendingUp size={28} className="text-primary" />
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 text-slate-900 overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-black tracking-[0.3em] uppercase text-xs mb-4 block underline underline-offset-8">Our Solutions</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary tracking-tight leading-[1.1] mb-6">Identify <span className="text-primary italic font-black">\"Upstream\"</span> and <span className="text-primary italic font-black">\"Downstream\"</span> <br className="hidden md:block" /> service gaps to improve community outcomes.</h2>
          <p className="text-slate-500 text-lg font-bold leading-relaxed max-w-2xl mx-auto">We don't just provide research; we provide the backbone infrastructure rural and urban communities need to thrive and grow together.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {solutions.map((item, i) => (
            <div key={i} className="bg-white border border-slate-100 p-12 rounded-[3.5rem] hover:shadow-xl hover:border-primary/20 transition-all duration-500 group relative overflow-hidden flex flex-col items-start text-left">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl group-hover:bg-primary/20 transition-all"></div>

              <div className="w-20 h-20 bg-primary/5 rounded-[1.5rem] flex items-center justify-center mb-10 group-hover:bg-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm group-hover:shadow-xl">
                <div className="text-primary group-hover:text-white transition-colors">
                  {React.cloneElement(item.icon, { size: 36, className: "" })}
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-secondary mb-6 tracking-tight">{item.title}</h3>
              <p className="text-slate-500 text-lg md:text-xl mb-10 leading-relaxed font-medium">{item.description}</p>

              <ul className="space-y-4">
                {item.features.map((feat, j) => (
                  <li key={j} className="flex items-center justify-start gap-4 text-sm md:text-base font-bold text-slate-600">
                    <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform"></div>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   7. HOW WE WORK
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
   8. CONTACT CTA
───────────────────────────────────────────── */
const ContactCTA = () => (
  <section className="py-32 bg-white">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="bg-[#0a1628] rounded-[4rem] p-12 md:p-24 relative overflow-hidden text-center md:text-left">
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
      <WhoWeAre />
      <CEOMessage />
      <ImpactMetrics />
      <ExploreOurWork />
      <Services />
      <HowWeWork />
      <ContactCTA />
    </main>
  );
};

export default AboutPage;
