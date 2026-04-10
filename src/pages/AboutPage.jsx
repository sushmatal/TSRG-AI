import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users2, ShieldCheck, ArrowRight, BookOpen, Zap, Network,
  MapPin, Phone, Mail, Quote, ChevronDown, CheckCircle2,
  HeartHandshake, Microscope, TrendingUp, Building2
} from 'lucide-react';

/* ─────────────────────────────────────────────
   1. HERO
───────────────────────────────────────────── */
const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 z-0">
      <img
        src={`${import.meta.env.BASE_URL}about_header_community_strategy_1773950920170.png`}
        alt="Community Strategy"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/90 via-[#0f2045]/85 to-[#1a3a6b]/80" />
      {/* Animated circles */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#FCE6A3]/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </div>

    <div className="container mx-auto px-6 relative z-10 max-w-6xl text-center py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/10 backdrop-blur-sm text-[#FCE6A3] text-[10px] font-black tracking-[0.4em] uppercase mb-8 border border-white/20">
          <span className="w-1.5 h-1.5 bg-[#FCE6A3] rounded-full" />
          Nonprofit Research &amp; Community Outreach
          <span className="w-1.5 h-1.5 bg-[#FCE6A3] rounded-full" />
        </span>

        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
          Strong Communities Start<br />
          with <span className="text-[#FCE6A3] italic">Shared Solutions</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/80 mb-4 leading-relaxed max-w-3xl mx-auto font-medium">
          We bring people, data, and action together to reduce substance use harm and build healthier futures.
        </p>
        <p className="text-base text-white/60 mb-14 max-w-2xl mx-auto leading-relaxed">
          TSRG connects public health experts, local leaders, and community members to address substance use
          and mental health challenges. We don't just study problems—we help communities solve them together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="#impact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-[#FCE6A3] text-[#0a1628] font-black px-8 py-4 rounded-full text-sm tracking-wide uppercase hover:bg-yellow-200 transition-all shadow-2xl shadow-yellow-500/20"
          >
            See Our Impact <ArrowRight size={16} />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white font-black px-8 py-4 rounded-full text-sm tracking-wide uppercase hover:bg-white/20 transition-all border border-white/30"
          >
            Partner with Us <HeartHandshake size={16} />
          </motion.a>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <ChevronDown size={24} className="text-white/40" />
      </motion.div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   2. WHO WE ARE
───────────────────────────────────────────── */
const WhoWeAre = () => {
  const traits = [
    "We build long-term, trust-based partnerships",
    "We translate research into practical solutions",
    "We align schools, health systems, and community leaders",
    "We support locally driven, sustainable progress",
  ];

  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#1a5fa8] font-black tracking-[0.3em] uppercase text-xs mb-5 block">Who We Are</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0a1628] mb-6 leading-tight tracking-tight">
              A Trusted <span className="text-[#1a5fa8] italic">Backbone</span> for<br />Community Change
            </h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">
              TSRG connects data, people, and action to help communities make informed decisions
              and create lasting change.
            </p>
            <div className="space-y-4">
              {traits.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#1a5fa8]/10 flex items-center justify-center group-hover:bg-[#1a5fa8] transition-all duration-300">
                    <CheckCircle2 size={18} className="text-[#1a5fa8] group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-slate-700 font-semibold text-base leading-relaxed pt-2">{t}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right – visual card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3] group">
              <img
                src={`${import.meta.env.BASE_URL}strategic_infrastructure_backbone_1773950424182.png`}
                alt="Community Backbone"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <div className="text-[#FCE6A3] text-xs font-black tracking-[0.3em] uppercase mb-2">Our Mission</div>
                <p className="text-white text-xl font-bold leading-snug max-w-xs">
                  Turning community voices into real-world change
                </p>
              </div>
            </div>
            {/* Floating stat */}
            <div className="absolute -top-6 -right-6 bg-[#FCE6A3] rounded-2xl p-5 shadow-xl">
              <div className="text-3xl font-black text-[#0a1628]">9+</div>
              <div className="text-[10px] font-black uppercase tracking-wider text-[#0a1628]/70">County Regions</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   3. WHAT MAKES US DIFFERENT
───────────────────────────────────────────── */
const WhatMakesDifferent = () => {
  const pillars = [
    {
      icon: <Users2 size={28} />,
      title: "Community Partnership",
      desc: "We work side-by-side with communities to co-create solutions that are owned and driven locally.",
      color: "from-blue-500/10 to-blue-600/5",
      accent: "#1a5fa8",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Trusted Relationships",
      desc: "Our long-term presence builds credibility and trust that no short-term engagement can replicate.",
      color: "from-teal-500/10 to-teal-600/5",
      accent: "#0d9488",
    },
    {
      icon: <Microscope size={28} />,
      title: "Research to Real Life",
      desc: "We turn data and evidence into clear, actionable steps that produce measurable outcomes.",
      color: "from-violet-500/10 to-violet-600/5",
      accent: "#7c3aed",
    },
    {
      icon: <Network size={28} />,
      title: "Cross-Sector Leadership",
      desc: "We bring diverse partners together to move from ideas to impact across systems and sectors.",
      color: "from-rose-500/10 to-rose-600/5",
      accent: "#e11d48",
    },
  ];

  return (
    <section className="py-28 bg-slate-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-[#1a5fa8] font-black tracking-[0.3em] uppercase text-xs mb-4 block">What Makes TSRG Different</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0a1628] mb-5 leading-tight">
            Rooted in Community.<br />
            <span className="text-[#1a5fa8] italic">Driven by Action.</span> Built for Impact.
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Clearly answering "Why TSRG?" for funders, partners, and community members alike.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`bg-gradient-to-br ${p.color} border border-white rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${p.accent}15`, color: p.accent }}
              >
                {p.icon}
              </div>
              <h4 className="text-xl font-black text-[#0a1628] mb-3 leading-tight">{p.title}</h4>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   4. HOW WE CREATE CHANGE
───────────────────────────────────────────── */
const HowWeCreateChange = () => {
  const steps = [
    {
      num: "01",
      title: "Listen & Understand",
      desc: "Identify community needs through assessments and local input",
      icon: <BookOpen size={24} />,
    },
    {
      num: "02",
      title: "Learn Together",
      desc: "Use research to uncover what works and why it works",
      icon: <Microscope size={24} />,
    },
    {
      num: "03",
      title: "Act as One",
      desc: "Align partners and implement evidence-based solutions",
      icon: <Zap size={24} />,
    },
    {
      num: "04",
      title: "Sustain Progress",
      desc: "Measure outcomes and strengthen systems over time",
      icon: <TrendingUp size={24} />,
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-br from-[#0a1628] to-[#1a3a6b] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FCE6A3]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#FCE6A3] font-black tracking-[0.3em] uppercase text-xs mb-4 block">How We Create Change</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            From Insight <span className="text-[#FCE6A3]">→</span> Action <span className="text-[#FCE6A3]">→</span> Impact
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-medium">
            A proven framework that transforms community knowledge into lasting, measurable change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line */}
          <div className="absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#FCE6A3]/0 via-[#FCE6A3]/30 to-[#FCE6A3]/0 hidden lg:block" />

          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-[#FCE6A3]/30 transition-all duration-300">
                {/* Step number */}
                <div className="text-[#FCE6A3]/30 text-6xl font-black leading-none mb-4 select-none">{s.num}</div>
                {/* Icon */}
                <div className="w-12 h-12 bg-[#FCE6A3]/10 rounded-xl flex items-center justify-center text-[#FCE6A3] mb-5 group-hover:bg-[#FCE6A3] group-hover:text-[#0a1628] transition-all duration-300">
                  {s.icon}
                </div>
                <h4 className="text-xl font-black text-white mb-3 leading-tight">{s.title}</h4>
                <p className="text-white/60 text-sm font-medium leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   5. SYSTEMS CHANGE + QUOTE
───────────────────────────────────────────── */
const SystemsChange = () => {
  const partners = [
    "Schools", "Public Health Departments", "Universities",
    "Statewide Coalitions", "Healthcare Systems", "Multi-County Networks",
  ];

  return (
    <section id="impact" className="py-28 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left – Systems diagram */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#1a5fa8] font-black tracking-[0.3em] uppercase text-xs mb-5 block">Our Role in Systems Change</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0a1628] mb-6 leading-tight">
              Connecting Research<br />to <span className="text-[#1a5fa8] italic">Real Lives</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">
              We help communities move from data to decisions to real-world results.
            </p>

            {/* Flow diagram */}
            <div className="space-y-3">
              {[
                { label: "Data", sub: "Informs better programs and policies", color: "bg-[#1a5fa8]" },
                { label: "Programs", sub: "Strengthen systems and align partners", color: "bg-[#0d9488]" },
                { label: "Systems", sub: "Improve health outcomes and reduce harm", color: "bg-[#7c3aed]" },
              ].map((item, i) => (
                <div key={i}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-[#1a5fa8]/20 hover:shadow-md transition-all"
                  >
                    <div className={`${item.color} text-white font-black text-sm px-4 py-2 rounded-xl min-w-[90px] text-center`}>
                      {item.label}
                    </div>
                    <p className="text-slate-600 text-sm font-semibold">{item.sub}</p>
                  </motion.div>
                  {i < 2 && (
                    <div className="flex items-center gap-4 py-1 pl-11">
                      <ArrowRight size={16} className="text-slate-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Partners grid */}
            <div className="mt-10">
              <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">We actively partner with</p>
              <div className="flex flex-wrap gap-2">
                {partners.map((p, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-[#1a5fa8]/8 text-[#1a5fa8] text-xs font-bold rounded-full border border-[#1a5fa8]/15 hover:bg-[#1a5fa8] hover:text-white transition-all cursor-default"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right – Quote + commitment */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Testimonial */}
            <div className="bg-gradient-to-br from-[#0a1628] to-[#1a3a6b] rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute top-6 right-8 opacity-10">
                <Quote size={80} className="text-[#FCE6A3]" />
              </div>
              <Quote size={32} className="text-[#FCE6A3] mb-6" />
              <p className="text-white text-xl font-medium leading-relaxed italic mb-8">
                "We had ideas but no clear plan. TSRG brought together our schools, health providers,
                and community leaders to create a shared strategy. Now, we're not just talking—we're taking action."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FCE6A3]/20 flex items-center justify-center">
                  <Building2 size={18} className="text-[#FCE6A3]" />
                </div>
                <div>
                  <div className="text-[#FCE6A3] font-black text-sm">County Health Partner</div>
                  <div className="text-white/50 text-xs">Southeast Colorado</div>
                </div>
              </div>
            </div>

            {/* Our commitment */}
            <div className="bg-slate-50 rounded-3xl p-10 border border-slate-100">
              <h3 className="text-2xl font-black text-[#0a1628] mb-4 leading-tight">Our Commitment</h3>
              <p className="text-slate-600 font-medium leading-relaxed text-base">
                We believe communities already hold the knowledge and strength to create change.
                Our role is to help unlock it—by building trust, aligning partners, and turning
                insight into action.
              </p>
              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-[#1a5fa8] font-black text-sm italic">
                  "TSRG helps communities move from data → decisions → lasting change—transforming
                  research into action and action into healthier futures."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   6. STORY OF IMPACT (MOUD Case Study)
───────────────────────────────────────────── */
const StoryOfImpact = () => (
  <section className="py-28 bg-slate-50 relative overflow-hidden">
    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}about_header_community_strategy_1773950920170.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
    <div className="container mx-auto px-6 max-w-6xl relative z-10">
      <div className="text-center mb-16">
        <span className="text-[#1a5fa8] font-black tracking-[0.3em] uppercase text-xs mb-4 block">Real TSRG Impact</span>
        <h2 className="text-4xl md:text-5xl font-black text-[#0a1628] mb-5 leading-tight">A Story of Impact</h2>
        <p className="text-slate-500 text-lg max-w-xl mx-auto font-medium">
          MOUD Outreach in Rural Colorado — 9-County Region
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            label: "Challenge",
            color: "from-rose-500 to-rose-600",
            bgLight: "bg-rose-50",
            borderColor: "border-rose-100",
            content:
              "Rural communities across Southern Colorado faced gaps in access to treatment for opioid use disorder—especially within criminal justice systems, where medication-assisted treatment was limited or inconsistent.",
          },
          {
            label: "Partnership",
            color: "from-[#1a5fa8] to-blue-700",
            bgLight: "bg-blue-50",
            borderColor: "border-blue-100",
            content:
              "TSRG partnered with Valley-Wide Health Systems and the Rural Recovery Network to conduct outreach across a 9-county region, working with criminal justice facilities to expand access to Medications for Opioid Use Disorder (MOUD).",
            bullets: [
              "Coordinated across health and justice systems",
              "Provided guidance on service implementation",
              "Aligned stakeholders around shared solutions",
            ],
          },
          {
            label: "Change & Results",
            color: "from-teal-500 to-teal-600",
            bgLight: "bg-teal-50",
            borderColor: "border-teal-100",
            content:
              "This collaboration helped communities improve awareness and adoption of MOUD services, strengthen coordination between agencies, and move toward consistent, evidence-based treatment access.",
            result: "More connected systems and better pathways to recovery for individuals involved in the justice system.",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className={`${card.bgLight} ${card.borderColor} border rounded-3xl overflow-hidden`}
          >
            <div className={`bg-gradient-to-r ${card.color} px-7 py-4`}>
              <span className="text-white font-black uppercase tracking-widest text-xs">{card.label}</span>
            </div>
            <div className="p-7">
              <p className="text-slate-600 font-medium leading-relaxed text-sm mb-4">{card.content}</p>
              {card.bullets && (
                <ul className="space-y-2 mb-4">
                  {card.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                      <CheckCircle2 size={14} className="text-[#1a5fa8] mt-0.5 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {card.result && (
                <div className="bg-teal-600/10 rounded-xl p-4 border border-teal-200/50">
                  <p className="text-teal-700 text-xs font-black uppercase tracking-wider mb-1">Result</p>
                  <p className="text-teal-800 text-sm font-semibold leading-relaxed">{card.result}</p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-14">
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-3 bg-[#1a5fa8] text-white font-black px-10 py-4 rounded-full text-sm tracking-wide uppercase hover:bg-[#154d8a] transition-all shadow-xl shadow-blue-900/20"
        >
          See Our Impact <ArrowRight size={16} />
        </motion.a>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   7. CONTACT CTA
───────────────────────────────────────────── */
const ContactCTA = () => (
  <section id="contact" className="py-28 bg-gradient-to-br from-[#0a1628] to-[#1a3a6b] relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FCE6A3]/5 rounded-full blur-3xl" />
    <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-[#FCE6A3] font-black tracking-[0.3em] uppercase text-xs mb-6 block">Get in Touch</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
          Ready to Build<br />
          <span className="text-[#FCE6A3] italic">Healthier Communities</span> Together?
        </h2>
        <p className="text-white/60 text-lg font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
          Whether you're a funder, partner, or community member—TSRG is here to help
          you turn insight into action and action into lasting change.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-14">
          <a
            href="tel:+17202348191"
            className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
          >
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-[#FCE6A3] group-hover:text-[#0a1628] transition-all">
              <Phone size={16} />
            </div>
            <span className="font-semibold">+1 720-234-8191</span>
          </a>
          <div className="hidden sm:block w-px h-6 bg-white/20" />
          <a
            href="mailto:terri@tsrg.org"
            className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
          >
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-[#FCE6A3] group-hover:text-[#0a1628] transition-all">
              <Mail size={16} />
            </div>
            <span className="font-semibold">terri@tsrg.org</span>
          </a>
          <div className="hidden sm:block w-px h-6 bg-white/20" />
          <div className="flex items-center gap-3 text-white/80">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
              <MapPin size={16} />
            </div>
            <span className="font-semibold">P.O. Box 371342, Denver, CO 80237</span>
          </div>
        </div>

        <motion.a
          href="mailto:terri@tsrg.org"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-3 bg-[#FCE6A3] text-[#0a1628] font-black px-10 py-4 rounded-full text-sm tracking-wide uppercase hover:bg-yellow-200 transition-all shadow-2xl shadow-yellow-500/20"
        >
          Partner with Us <HeartHandshake size={16} />
        </motion.a>
      </motion.div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   PAGE ASSEMBLY
───────────────────────────────────────────── */
const AboutPage = () => (
  <div className="pt-20">
    <Hero />
    <WhoWeAre />
    <WhatMakesDifferent />
    <HowWeCreateChange />
    <SystemsChange />
    <StoryOfImpact />
    <ContactCTA />
  </div>
);

export default AboutPage;
