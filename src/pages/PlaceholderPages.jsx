import React from 'react';
import PageHero from '../components/PageHero';

const ComingSoon = ({ title, category }) => (
    <div className="min-h-screen bg-white">
        <PageHero 
            title={title} 
            subtitle={`Exploring the impact and evidence behind our ${title.toLowerCase()} efforts.`}
            breadcrumbs={[{ name: category, href: '#' }]}
        />
        <section className="py-24">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="bg-slate-50 rounded-[3rem] p-12 md:p-24 text-center border border-slate-100">
                    <h2 className="text-3xl font-black text-secondary mb-6">Section Under Design</h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                        We are currently migrating the full {title} content to our new platform. 
                        Stay tuned for a modernized, interactive experience.
                    </p>
                </div>
            </div>
        </section>
    </div>
);

// About
export const BlogPage = () => <ComingSoon title="Blog (News & Updates)" category="About" />;
export const FAQsPage = () => <ComingSoon title="FAQs" category="About" />;
export const PartnersPage = () => <ComingSoon title="Partners & Collaborators" category="About" />;

// Programs & Work
export const GatewayToWorkPage = () => <ComingSoon title="Gateway to work" category="Programs & Work" />;
export const PodcastsPage = () => <ComingSoon title="Podcasts" category="Programs & Work" />;
export const PIMSFormsPage = () => <ComingSoon title="PIMS Forms" category="Programs & Work" />;
export const ScholarshipsPage = () => <ComingSoon title="Scholarships" category="Programs & Work" />;
export const WorkgroupsPage = () => <ComingSoon title="Workgroups" category="Programs & Work" />;
export const OutreachPage = () => <ComingSoon title="Community Outreach" category="Programs & Work" />;

// Insights
export const EventsPage = () => <ComingSoon title="Events" category="Insights" />;
export const PublicationsPage = () => <ComingSoon title="Publications" category="Insights" />;
export const BenzodiazepinesPage = () => <ComingSoon title="Benzodiazepines Research" category="Research" />;
export const OpioidsPage = () => <ComingSoon title="Opioids Research" category="Research" />;
