import React from 'react';
import { Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#1a1a1a] text-white py-16 border-t border-slate-800">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start">

                    {/* Left Column: Candid Seal */}
                    <div className="md:col-span-3 flex justify-center md:justify-start">
                        <img
                            src={`${import.meta.env.BASE_URL}TSRG gold seal 2025.svg`}
                            alt="Candid Gold Transparency 2025 Seal"
                            className="w-36 h-36 object-contain"
                        />
                    </div>

                    {/* Middle Column: Disclaimers */}
                    <div className="md:col-span-6 text-[10px] md:text-xs text-slate-300 leading-relaxed space-y-4 text-justify md:text-left font-medium">
                        <p>
                            Disclaimer (Last updated: May 1, 2026) The information contained on the tsrg.org website is for general information purposes only. The Schreiber Research Group does not take a policy position and reserves the right to make additions, deletions, or modifications to the contents at any time without prior notice.
                        </p>
                        <p>
                            Images created using AI tools. (Homepage, About Us, Blog, Contact Us, Donate, Our Team and Research). Artwork on the Benzodiazepine webpage was created by Akhtar Badshah (Kirkland, WA). The Empower Forward logo was designed by Salem Hansen (Aurora, CO, Los Angeles, CA).
                        </p>
                    </div>

                    {/* Right Column: Contact Us */}
                    <div className="md:col-span-3 flex flex-col items-center md:items-end text-sm space-y-1 text-slate-200">
                        <h4 className="text-lg font-bold text-white mb-2">Contact Us</h4>
                        <p>Phone: +1 720-234-8191</p>
                        <p>
                            Email: <a href="mailto:info@tsrg.org" className="hover:text-primary transition-colors hover:underline">info@tsrg.org</a>
                        </p>
                        <p>P.O. Box 371342</p>
                        <p>Denver, CO 80237</p>
                        <p>FEIN: 83-2233301</p>

                        <div className="flex gap-4 pt-4">
                            <a href="#" className="text-white hover:text-primary transition-colors">
                                <Facebook className="fill-white hover:fill-primary transition-colors" size={24} />
                            </a>
                            <a href="#" className="text-white hover:text-primary transition-colors">
                                <Linkedin className="fill-white hover:fill-primary transition-colors" size={24} />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
