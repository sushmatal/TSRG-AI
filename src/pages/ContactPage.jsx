import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, Heart } from 'lucide-react';

const ContactInfoCard = ({ icon: Icon, title, content, link, delay }) => (
    <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="flex gap-6 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
    >
        <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
            <Icon size={24} />
        </div>
        <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-2">{title}</h4>
            {link ? (
                <a href={link} className="text-lg font-black text-secondary hover:text-primary transition-colors">{content}</a>
            ) : (
                <p className="text-lg font-black text-secondary">{content}</p>
            )}
        </div>
    </motion.div>
);

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageHero 
                title="Contact Us" 
                subtitle="Have a question about our research or want to partner with us? Reach out and start the conversation."
                breadcrumbs={[{ name: 'Connect', href: '#' }]}
            />

            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 transform translate-x-1/2" />
                
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Contact Form */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl border border-slate-50"
                        >
                            <h2 className="text-3xl font-black text-secondary mb-8">Send a Message</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                                        <input type="text" className="w-full bg-slate-50 border-none px-8 py-5 rounded-3xl focus:ring-2 ring-primary transition-all" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Email Address</label>
                                        <input type="email" className="w-full bg-slate-50 border-none px-8 py-5 rounded-3xl focus:ring-2 ring-primary transition-all" placeholder="john@example.com" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Subject</label>
                                    <select className="w-full bg-slate-50 border-none px-8 py-5 rounded-3xl focus:ring-2 ring-primary transition-all appearance-none">
                                        <option>General Inquiry</option>
                                        <option>Partnership Proposal</option>
                                        <option>Media Request</option>
                                        <option>Donation Question</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Your Message</label>
                                    <textarea rows="5" className="w-full bg-slate-50 border-none px-8 py-5 rounded-3xl focus:ring-2 ring-primary transition-all" placeholder="How can we help?"></textarea>
                                </div>
                                <button className="w-full bg-primary text-white py-6 rounded-3xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:-translate-y-1 transition-all shadow-xl shadow-primary/20">
                                    Send Message <Send size={16} />
                                </button>
                            </form>
                        </motion.div>

                        {/* Info Column */}
                        <div className="flex flex-col gap-8 justify-center">
                            <div className="mb-12">
                                <span className="text-primary font-black tracking-[0.3em] uppercase text-xs mb-4 block">Get in Touch</span>
                                <h2 className="text-4xl md:text-5xl font-black text-secondary leading-tight mb-6">Let's build rural <br />resilience together.</h2>
                                <p className="text-slate-500 text-lg leading-relaxed max-w-md">
                                    TSRG operates as a backbone partner, and we're always looking for new collaborators to strengthen the network.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <ContactInfoCard 
                                    icon={Mail} 
                                    title="Email Us" 
                                    content="info@tsrg.org" 
                                    link="mailto:info@tsrg.org"
                                    delay={0.1}
                                />
                                <ContactInfoCard 
                                    icon={Phone} 
                                    title="Call Us" 
                                    content="Contact for details" 
                                    delay={0.2}
                                />
                                <ContactInfoCard 
                                    icon={MapPin} 
                                    title="Main Office" 
                                    content="California, United States" 
                                    delay={0.3}
                                />
                            </div>

                            <div className="mt-12 p-8 bg-slate-900 rounded-[2.5rem] text-white flex items-center justify-between group">
                                <div>
                                    <h4 className="text-xl font-black mb-2">Support Our Work</h4>
                                    <p className="text-slate-400 text-sm">Every contribution fuels rural research.</p>
                                </div>
                                <Link to="/get-involved/donate" className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white group-hover:bg-primary transition-all">
                                    <Heart size={24} className="group-hover:fill-white" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="h-[400px] w-full bg-slate-200 grayscale relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                        <span className="text-xs font-black uppercase tracking-widest text-secondary">Service Region: California Hub</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
