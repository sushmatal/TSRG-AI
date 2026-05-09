import React from 'react';
import PageHero from '../components/PageHero';

const ResearchPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageHero 
                title="Research Initiatives" 
                subtitle="Methodologies built for rural contexts, addressing the most pressing public health challenges of our time."
                breadcrumbs={[{ name: 'Work', href: '#' }]}
                backgroundImage={`${import.meta.env.BASE_URL}Header%20Images/Generic%20Banner.png`}
            />
            <section className="py-24">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="bg-slate-50 rounded-[3rem] p-12 md:p-24 text-center border border-slate-100">
                        <h2 className="text-3xl font-black text-secondary mb-6">Section Under Design</h2>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                            We are currently migrating our full Research Initiatives content to our new platform. 
                            Stay tuned for a modernized, interactive experience.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ResearchPage;
