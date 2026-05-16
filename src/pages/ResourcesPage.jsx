import React from 'react';
import PageHero from '../components/PageHero';

const ResourcesPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageHero 
                title="Resources" 
                backgroundImage={`${import.meta.env.BASE_URL}Header%20Images/Header.png`}
            />
            <section className="pt-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl text-center md:text-left">
                    <p className="text-xl md:text-3xl font-black text-secondary leading-tight tracking-tight max-w-4xl">
                        Exploring the impact and evidence behind our resource initiatives.
                    </p>
                </div>
            </section>
            <section className="py-24">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="bg-slate-50 rounded-[3rem] p-12 md:p-24 text-center border border-slate-100">
                        <h2 className="text-3xl font-black text-secondary mb-6">Section Under Design</h2>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                            We are currently migrating the full Resources content to our new platform. 
                            Stay tuned for a modernized, interactive experience.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ResourcesPage;
