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
            <div className="w-4 h-4 bg-accent rounded-full animate-ping mb-4" />
            <h3 className="text-2xl font-black text-secondary">TSRG | Est. 2018</h3>
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
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-turkish-tile/5 -skew-x-12 transform origin-top translate-x-32" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-12 rounded-[3rem] shadow-xl border border-slate-100 flex flex-col group hover:shadow-2xl transition-all duration-500"
          >
            <div className="w-16 h-16 bg-turkish-tile/10 rounded-2xl flex items-center justify-center text-turkish-tile mb-10 group-hover:bg-turkish-tile group-hover:text-white transition-all duration-500">
              <Eye size={32} />
            </div>
            <h3 className="text-4xl font-black text-secondary mb-8 tracking-tight">Our <span className="text-turkish-tile italic">Vision</span></h3>
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium">
              We believe building healthy rural and urban communities starts with listening. By amplifying local knowledge, agency is given back to communities most disenfranchised by the opioid crisis. We envision neighborhoods where access to employment, health services, and resources that promote recovery are accessible to all -- creating the conditions for dignified lives and empowered communities.
            </p>
          </motion.div>

          {/* Purpose Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-secondary p-12 rounded-[3rem] shadow-xl flex flex-col group hover:shadow-2xl transition-all duration-500"
          >
            <div className="w-16 h-16 bg-persimmon/20 rounded-2xl flex items-center justify-center text-persimmon mb-10 group-hover:bg-persimmon group-hover:text-white transition-all duration-500">
              <Heart size={32} />
            </div>
            <h3 className="text-4xl font-black text-white mb-8 tracking-tight">Our <span className="text-persimmon italic">Purpose</span></h3>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-medium">
              TSRG serves as a trusted backbone for rural and urban prevention and workforce development services, helping communities turn ideas into a clear path forward by blending data with local wisdom.
            </p>
          </motion.div>
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
    { label: "TSRG Founded", value: "2018", suffix: "", color: "text-persimmon" },
    { label: "Substances Studied", value: "5+", suffix: "", color: "text-turkish-tile" },
    { label: "Community Partners", value: "50", suffix: "+", color: "text-catawba" },
    { label: "Initiatives", value: "100", suffix: "%", color: "text-lupine" }
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
              <div className={`text-5xl md:text-6xl font-black ${s.color} mb-3 tracking-tighter`}>
                {s.value}<span className="text-white/80">{s.suffix}</span>
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
    <main className="bg-white">
      <PageHero
        title="About TSRG"
        backgroundImage={`${baseUrl}Header%20Images/Header.png`}
        imageAlignment="object-center"
      />

      {/* Intro Subtitle Section */}
      <section className="pt-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-4xl font-black text-secondary leading-tight tracking-tight max-w-4xl"
                >
                  TSRG brings people and data together to find solutions that will reduce substance use harm and build healthier communities.
                </motion.p>
                <div className="w-24 h-1 bg-primary mt-10" />
        </div>
      </section>

      <OurStory />
      <MissionVisionPurpose />
      <CEOMessage />
      <ImpactMetrics />
    </main>
  );
};

export default AboutPage;
