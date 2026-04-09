import React from 'react';
import { motion } from 'framer-motion';
import { Quote, HeartPulse } from 'lucide-react';

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Donna Rohde",
            role: "Community Partner",
            image: "/Testimonials/Donna.png",
            quote: "TSRG has been instrumental in bringing together community partners to systemically work to reduce opioid use in our region. They bring additional capacity to the region to gather and analyze data and utilize it to implement the region’s priorities. The expertise, professionalism and strong desire to be an active support for the region is invaluable."
        },
        {
            name: "Jay Billups",
            role: "Collaborative Creator",
            image: "/Testimonials/Jay Billups.png",
            quote: "My experience working with Terri and TSRG has been excellent. It is motivating working with an organization that takes the time and energy to collaborate with creators to produce the best possible products for their clients and community."
        },
        {
            name: "Ruth Horn, MA, MS, LPC, NCC",
            role: "Behavioral Health Professional",
            logo: "/Community partners/SLV_AHEC_logo.png",
            quote: "TSRG has been vital in assisting us to expand our harm reduction services to the communities of the San Luis Valley. Their coalition-building expertise and partnership have opened doors for the betterment of the entire region."
        },
        {
            name: "Rick Ritter",
            role: "Otero County Health Department",
            logo: "/Community partners/otero_county_LOGO-tm-sm.png",
            quote: "Please accept Otero County Health Department's passionate support of TSRG! TSRG has not only done a wonderful job of bringing our data to life and analyzing our needs, but they have brought new hope and direction to reduce opioid overdoses for those suffering from an opioid use disorder/substance use disorder."
        }
    ];

    return (
        <section id="testimonials" className="py-16 bg-white relative">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className="text-primary font-black tracking-[0.3em] uppercase text-xs mb-4 block">Voice of Support</span>
                    <h2 className="text-3xl md:text-5xl font-black text-secondary tracking-tight">What Our Partners Say</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-50 p-8 md:p-12 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col items-start relative overflow-hidden group"
                        >
                            <Quote size={80} className="absolute -top-6 -right-6 text-primary/5 group-hover:text-primary/10 transition-colors" />

                            <div className="flex items-center gap-6 mb-8 w-full">
                                <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                                    {testimonial.image ? (
                                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                                    ) : (
                                        <img src={testimonial.logo} alt={testimonial.role} className="w-full h-full object-contain p-2" />
                                    )}
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-black text-secondary text-lg uppercase tracking-tight leading-tight">{testimonial.name}</span>
                                    <span className="text-[10px] text-primary font-black uppercase tracking-widest mt-1">{testimonial.role}</span>
                                </div>
                            </div>

                            <p className="text-slate-600 italic text-base md:text-lg leading-relaxed mb-6 font-medium relative z-10">
                                "{testimonial.quote}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
