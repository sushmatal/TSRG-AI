import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Heart } from 'lucide-react';

const PartnersSection = () => {
    const logos = [
        "Benzos.png",
        "Benzowise.jpg",
        "CCPDAP_LOGO_PNG-1024x285-2.png",
        "CRHC-Logo.fw_-1.png",
        "Creative Treatment Options.png",
        "Crowley-County-Colorado.png",
        "Denver Public Schools.png",
        "GSN logo white background.png",
        "PDPHE-1.png",
        "Purezone-HRSA-Logo-1.png",
        "SECAHEC High Quality.png",
        "SLV_AHEC_logo.png",
        "SpringTransits-2.png",
        "bent_county.png",
        "otero_county_LOGO-tm-sm.png",
        "southeast.png"
    ];

    return (
        <section id="partners" className="py-20 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <span className="text-primary font-black tracking-[0.3em] uppercase text-xs mb-4 block underline underline-offset-8">Community Force</span>
                    <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tight mb-6">Our Supporters & Partners</h2>
                    <p className="text-xl text-slate-600 leading-relaxed mb-8 font-medium max-w-3xl mx-auto">
                        TSRG works with local, regional and federal organizations to find solutions to the opioid and benzodiazepine crises. Through a collaborative, concerted effort, TSRG can grow and continue to aim to find solutions.
                    </p>
                </div>

                {/* Logo Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-20">
                    {logos.map((logo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all h-32 md:h-40"
                        >
                            <img
                                src={`/Community partners/${logo}`}
                                alt={`Partner logo ${index}`}
                                className="max-w-full max-h-full object-contain transition-all duration-300"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Support Button */}
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

export default PartnersSection;
