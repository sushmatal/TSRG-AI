import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Heart, ChevronLeft, ChevronRight, ArrowRight, FileEdit, Briefcase, BarChart } from 'lucide-react';
import PageHero from '../components/PageHero';

/* ─────────────────────────────────────────────
   1. COMMUNITY OUTREACH SECTION (MOVED)
───────────────────────────────────────────── */
const CommunityOutreachSection = () => {
    const services = [
        {
            title: "Consulting",
            desc: "Report research and writing, coalition building, and strategic planning for substance use crisis response.",
            icon: <FileEdit size={32} className="text-turkish-tile" />,
            color: "bg-turkish-tile/10",
            textColor: "text-turkish-tile"
        },
        {
            title: "Management",
            desc: "Project and fiscal management expertise for under-resourced agencies and collaborative grant-funded projects.",
            icon: <Briefcase size={32} className="text-jungle-jade" />,
            color: "bg-jungle-jade/10",
            textColor: "text-jungle-jade"
        },
        {
            title: "Support",
            desc: "Technical support for developing data dashboards, performance reporting, and high-impact grant writing.",
            icon: <BarChart size={32} className="text-persimmon" />,
            color: "bg-persimmon/10",
            textColor: "text-persimmon"
        }
    ];

    return (
        <section id="community-outreach" className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-persimmon font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Our Impact Framework</span>
                        <h2 className="text-4xl md:text-6xl font-black text-secondary tracking-tight mb-6">
                            Community <span className="text-turkish-tile italic">Outreach</span>
                        </h2>
                        <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
                            TSRG participates in a variety of community outreach efforts, blending professional expertise with localized community wisdom.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-12 rounded-[3.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
                        >
                            <div className={`w-20 h-20 ${service.color} rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform`}>
                                {service.icon}
                            </div>
                            <h3 className="text-3xl font-black text-secondary mb-6">{service.title}</h3>
                            <p className="text-slate-500 text-lg leading-relaxed font-medium mb-10">
                                {service.desc}
                            </p>
                            <div className={`inline-flex items-center gap-2 ${service.textColor} font-black text-[10px] uppercase tracking-widest`}>
                                Learn More <ArrowRight size={14} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ─────────────────────────────────────────────
   2. WHAT OUR PARTNERS SAY (SLIDESHOW/CAROUSEL)
───────────────────────────────────────────── */
const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Donna Rohde",
            role: "Community Partner",
            image: "Testimonials/Donna.png",
            quote: "TSRG has been instrumental in bringing together community partners to systemically work to reduce opioid use in our region. They bring additional capacity to the region to gather and analyze data and utilize it to implement the region’s priorities. The expertise, professionalism and strong desire to be an active support for the region is invaluable."
        },
        {
            name: "Jay Billups",
            role: "Collaborative Creator",
            image: "Testimonials/Jay Billups.png",
            quote: "My experience working with Terri and TSRG has been excellent. It is motivating working with an organization that takes the time and energy to collaborate with creators to produce the best possible products for their clients and community."
        },
        {
            name: "Ruth Horn, MA, MS, LPC, NCC",
            role: "Behavioral Health Professional",
            logo: "Community partners/SLVAHEC.png",
            quote: "TSRG has been vital in assisting us to expand our harm reduction services to the communities of the San Luis Valley. Their coalition-building expertise and partnership have opened doors for the betterment of the entire region."
        },
        {
            name: "Rick Ritter",
            role: "Otero County Health Department",
            logo: "Community partners/Otero_county.png",
            quote: "Please accept Otero County Health Department's passionate support of TSRG! TSRG has not only done a wonderful job of bringing our data to life and analyzing our needs, but they have brought new hope and direction to reduce opioid overdoses for those suffering from an opioid use disorder/substance use disorder."
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 500 : -500,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 500 : -500,
            opacity: 0,
            scale: 0.95
        })
    };

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(nextSlide, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="testimonials" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <Quote className="absolute top-10 left-10 w-64 h-64 -rotate-12" />
                <Quote className="absolute bottom-10 right-10 w-64 h-64 rotate-168" />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tight">What Our Partners Say</h2>
                </div>

                <div className="relative min-h-[450px] flex items-center justify-center">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.5 },
                                scale: { duration: 0.5 }
                            }}
                            className="w-full max-w-4xl bg-white p-10 md:p-20 rounded-[4rem] shadow-2xl border border-slate-100 flex flex-col items-center text-center relative"
                        >
                            <Quote size={80} className="text-primary/10 mb-8" />
                            
                            <p className="text-xl md:text-2xl text-slate-600 italic leading-relaxed mb-12 font-medium relative z-10">
                                "{testimonials[currentIndex].quote}"
                            </p>

                            <div className="flex flex-col items-center gap-4">
                                <div className="w-24 h-24 rounded-3xl overflow-hidden bg-slate-50 shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                                    {testimonials[currentIndex].image ? (
                                        <img src={`${import.meta.env.BASE_URL}${testimonials[currentIndex].image}`} alt={testimonials[currentIndex].name} className="w-full h-full object-cover" />
                                    ) : (
                                        <img src={`${import.meta.env.BASE_URL}${testimonials[currentIndex].logo}`} alt={testimonials[currentIndex].role} className="w-full h-full object-contain p-2" />
                                    )}
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-black text-secondary text-xl uppercase tracking-tight leading-tight">{testimonials[currentIndex].name}</span>
                                    <span className="text-xs text-primary font-black uppercase tracking-widest mt-1">{testimonials[currentIndex].role}</span>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-2 md:-px-10">
                        <button 
                            onClick={prevSlide}
                            className="w-14 h-14 bg-white/80 backdrop-blur-md rounded-2xl flex items-center justify-center text-secondary shadow-xl pointer-events-auto hover:bg-primary hover:text-white transition-all hover:scale-110 active:scale-95"
                        >
                            <ChevronLeft size={28} />
                        </button>
                        <button 
                            onClick={nextSlide}
                            className="w-14 h-14 bg-white/80 backdrop-blur-md rounded-2xl flex items-center justify-center text-secondary shadow-xl pointer-events-auto hover:bg-primary hover:text-white transition-all hover:scale-110 active:scale-95"
                        >
                            <ChevronRight size={28} />
                        </button>
                    </div>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center gap-3 mt-12">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setDirection(i > currentIndex ? 1 : -1);
                                setCurrentIndex(i);
                            }}
                            className={`h-2 transition-all duration-500 rounded-full ${
                                i === currentIndex ? 'w-12 bg-primary' : 'w-2 bg-slate-300 hover:bg-slate-400'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ─────────────────────────────────────────────
   3. OUR SUPPORTERS & PARTNERS (LOGO GRID)
───────────────────────────────────────────── */
const PartnersSection = () => {
    const logos = [
        "Bent County.png", "Benzos.png", "Benzowise.jpg", "CRHC.png",
        "Colorado Consortium.png", "Creative Treatment Options.png",
        "Crowley-County-Colorado.png", "Denver Public Schools.png",
        "Denver Recovery Group.png", "GSN.png", "HRSA.png",
        "Otero_county.png", "PDPHE.png", "SECAHEC.png",
        "SLVAHEC.png", "SpringTransits.png"
    ];

    return (
        <section id="partners" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tight mb-6">Our Supporters & Partners</h2>
                    <p className="text-xl text-slate-600 leading-relaxed mb-8 font-medium max-w-3xl mx-auto">
                        TSRG works with local, regional and federal organizations to find solutions to the opioid and benzodiazepine crises. Through a collaborative, concerted effort, TSRG can grow and continue to aim to find solutions.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-20">
                    {logos.map((logo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all h-32 md:h-40"
                        >
                            <img
                                src={`${import.meta.env.BASE_URL}Community partners/${logo}`}
                                alt={`Partner logo ${index}`}
                                className="max-w-full max-h-full object-contain transition-all duration-300"
                            />
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center mt-12 mb-8">
                    <button className="bg-accent text-white px-12 py-5 rounded-full font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-xl flex items-center gap-3 border border-transparent hover:border-accent">
                        Support Our Efforts
                        <Heart size={20} className="fill-white" />
                    </button>
                </div>
            </div>
        </section>
    );
};

/* ─────────────────────────────────────────────
   PAGE ASSEMBLY
───────────────────────────────────────────── */
const PartnersPage = () => {
    const baseUrl = import.meta.env.BASE_URL;

    return (
        <main className="bg-white">
            <PageHero
                title="Partners & Collaborators"
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
                        className="text-2xl md:text-3xl font-black text-secondary leading-tight tracking-tight max-w-4xl"
                    >
                        Building stronger communities through collaborative research and shared data solutions.
                    </motion.p>
                    <div className="w-20 h-1 bg-primary mt-8" />
                </div>
            </section>

            <PartnersSection />
            <CommunityOutreachSection />
            <TestimonialsSection />
        </main>
    );
};

export default PartnersPage;
