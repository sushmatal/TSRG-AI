import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import { Heart, ShieldCheck, Phone, Mail, FileText, Smartphone, CreditCard, ExternalLink, Info, CheckCircle2 } from 'lucide-react';

const DonationTierCard = ({ title, description, link, icon: Icon, delay }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="group bg-white rounded-3xl p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
    >
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
        
        <div className="w-16 h-16 bg-slate-50 text-slate-500 group-hover:bg-primary group-hover:text-white rounded-2xl flex items-center justify-center mb-8 transition-colors shadow-sm relative z-10">
            <Icon size={28} />
        </div>
        
        <h3 className="text-2xl font-black text-secondary mb-4 relative z-10">{title}</h3>
        <p className="text-slate-500 leading-relaxed mb-8 flex-1 relative z-10">
            {description}
        </p>
        
        <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-auto flex items-center justify-center gap-2 bg-slate-50 text-secondary hover:bg-primary hover:text-white w-full py-4 rounded-full font-black text-xs uppercase tracking-widest transition-all relative z-10 shadow-sm group-[.hover]:shadow-xl"
        >
            Donate via {title} <ExternalLink size={14} />
        </a>
    </motion.div>
);

const DonatePage = () => {
    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            <PageHero 
                title="Support Our Mission" 
                subtitle="Your donation will support our internship program, our research, and contribute to our operating budget. For every dollar you contribute, we are one step closer to finding wide-ranging solutions to the opioid epidemic."
                breadcrumbs={[{ name: 'Donate', href: '#' }]}
            />

            {/* Digital Donation Platforms */}
            <section className="py-24 -mt-10 relative z-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <DonationTierCard 
                            title="PayPal"
                            description="A globally recognized platform offering secure, fast, and easy transactions, allowing you to donate with just a few clicks."
                            link="https://www.paypal.com/donate/?hosted_button_id=RZ246ZFAXA8AN"
                            icon={CreditCard}
                            delay={0.1}
                        />
                        <DonationTierCard 
                            title="ColoradoGives"
                            description="With over 3,800 nonprofits, it provides a secure and convenient way to donate using various payment methods, making giving accessible."
                            link="https://www.coloradogives.org/organization/TheSchreiberResearchGroup"
                            icon={Heart}
                            delay={0.2}
                        />
                        <DonationTierCard 
                            title="Venmo"
                            description="A simple, mobile-friendly payment option for quick, hassle-free donations directly from your Venmo balance or linked account."
                            link="https://venmo.com/u/TheSchreiberResearchGroup"
                            icon={Smartphone}
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>

            {/* Alternative Methods Section */}
            <section className="py-20 bg-white border-y border-slate-200">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black text-secondary mb-4">Other Ways To Give</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">We accommodate various forms of organizational and traditional giving specifically tailored to suit your operational needs.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Mail Donations */}
                        <div className="bg-slate-50 rounded-[2.5rem] p-10 flex flex-col items-center text-center shadow-inner">
                            <div className="w-14 h-14 bg-white shadow-sm rounded-full flex items-center justify-center text-primary mb-6">
                                <Mail size={24} />
                            </div>
                            <h3 className="text-2xl font-black text-secondary mb-4">Donate by Mail</h3>
                            <p className="text-slate-500 mb-8 leading-relaxed max-w-md">
                                If you prefer to mail your donation, please download and complete our donation form and send it with your check or credit card information. Make checks payable to <strong>The Schreiber Research Group</strong>.
                            </p>
                            <div className="w-full space-y-4">
                                <a 
                                    href="https://11a03917-ba8b-4f82-9aef-7a15ce757ddb.usrfiles.com/ugd/11a039_72424c7e72374c369280430121511244.docx" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 w-full bg-secondary text-white py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-primary transition-all shadow-lg"
                                >
                                    <FileText size={16} /> Download Form
                                </a>
                                <a 
                                    href="mailto:terri@tsrg.org" 
                                    className="flex items-center justify-center gap-3 w-full bg-white text-secondary py-4 rounded-full font-black uppercase text-xs tracking-widest hover:text-primary transition-all border-2 border-slate-200"
                                >
                                    Email For Mailing Address
                                </a>
                            </div>
                        </div>

                        {/* DAF Donations */}
                        <div className="bg-slate-50 rounded-[2.5rem] p-10 flex flex-col justify-center shadow-inner">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-white shadow-sm rounded-full flex items-center justify-center text-primary">
                                    <ShieldCheck size={20} />
                                </div>
                                <h3 className="text-xl font-black text-secondary">Donor Advised Fund (DAF)</h3>
                            </div>
                            <p className="text-slate-500 mb-6 leading-relaxed">
                                We are eligible and accept donations from all Donor Advised Funds (DAF). We are officially listed in the IRS Business Master File.
                            </p>
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 mb-6">
                                <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Federal Tax ID (FEIN)</span>
                                <span className="text-2xl font-black tracking-widest text-secondary">83-2233301</span>
                            </div>
                            <a href="tel:+17202348191" className="inline-flex items-center gap-3 text-secondary font-black text-sm hover:text-primary transition-colors">
                                <Phone size={18} className="text-primary" /> Need Help? Call 720-234-8191 (9 AM-5 PM MST)
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us & Tax Info */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50" />
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-5">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-primary font-black text-[10px] uppercase tracking-widest mb-6">
                                <Info size={14} /> Tax Deductible Status
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Your impact is <br />guaranteed.</h2>
                            <p className="text-slate-300 leading-relaxed mb-8">
                                The Schreiber Research Group (TSRG) is a Colorado-based 501(c)(3) organization. All monetary donations are fully tax-deductible per IRS regulations. Please check with your financial advisor if you have any questions regarding your specific contribution.
                            </p>
                        </div>
                        
                        <div className="lg:col-span-1" />

                        <div className="lg:col-span-6 bg-white/5 border border-white/10 rounded-[3rem] p-10 md:p-12 backdrop-blur-md">
                            <h3 className="text-2xl font-black mb-8 border-b border-white/10 pb-6">Why Choose Us?</h3>
                            <ul className="space-y-6">
                                {[
                                    "A team of experts across public policy, public health, nursing, economics, data analytics, and research.",
                                    "Works directly across rural and urban communities to find solutions to the opioid epidemic and benzo injury.",
                                    "Singularly focused on generating positive outcomes for the substance use epidemic.",
                                    "Identifies concrete gaps in knowledge through research to inform far more comprehensive community responses."
                                ].map((point, index) => (
                                    <li key={index} className="flex gap-4 items-start">
                                        <CheckCircle2 className="shrink-0 text-primary mt-1" size={20} />
                                        <span className="text-slate-300 leading-relaxed text-sm">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DonatePage;
