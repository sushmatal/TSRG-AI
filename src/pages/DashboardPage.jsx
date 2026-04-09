import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import { BarChart3, MapPin, Package, Users, Activity, ExternalLink, Download, Filter } from 'lucide-react';

const DataCard = ({ icon: Icon, label, value, trend, suffix, color, delay }) => (
    <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
    >
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${color} bg-opacity-10 text-${color.split('-')[1]}-600`}>
            <Icon size={24} />
        </div>
        <div className="flex flex-col">
            <span className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1">{label}</span>
            <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-secondary tracking-tighter">{value}</span>
                <span className="text-lg font-black text-slate-400">{suffix}</span>
            </div>
            {trend && (
                <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-accent">
                    <Activity size={12} />
                    <span>+{trend}% since last quarter</span>
                </div>
            )}
        </div>
    </motion.div>
);

const DashboardPage = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            <PageHero 
                title="Impact Dashboard" 
                subtitle="Real-time transparency into our community outreach, clinical resources, and harm reduction metrics."
                breadcrumbs={[{ name: 'Programs', href: '/programs' }]}
            />

            {/* Toolbar */}
            <section className="sticky top-24 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 py-4">
                <div className="container mx-auto px-6 max-w-7xl flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-slate-500">
                        <Filter size={16} />
                        <span>Filter By:</span>
                        <select className="bg-slate-100 border-none rounded-full px-4 py-2 cursor-pointer focus:ring-2 ring-primary transition-all">
                            <option>All Regions</option>
                            <option>Northern Rural</option>
                            <option>Central Valley</option>
                        </select>
                        <select className="bg-slate-100 border-none rounded-full px-4 py-2 cursor-pointer focus:ring-2 ring-primary transition-all">
                            <option>Last 12 Months</option>
                            <option>Q1 2024</option>
                            <option>Full 2023</option>
                        </select>
                    </div>
                    <div className="flex gap-2">
                        <button className="p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors text-slate-500">
                            <Download size={18} />
                        </button>
                        <button className="bg-primary text-white px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg active:scale-95">
                            <BarChart3 size={16} />
                            Export PDF
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-12">
                <div className="container mx-auto px-6 max-w-7xl">
                    {/* Key Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        <DataCard 
                            icon={MapPin} 
                            label="Treatment Locations" 
                            value="135" 
                            suffix="+" 
                            trend="12" 
                            color="bg-blue-500"
                            delay={0.1}
                        />
                        <DataCard 
                            icon={Package} 
                            label="Outreach Kits" 
                            value="12.4" 
                            suffix="K" 
                            trend="24" 
                            color="bg-emerald-500"
                            delay={0.2}
                        />
                        <DataCard 
                            icon={Users} 
                            label="People Trained" 
                            value="850" 
                            suffix="+" 
                            trend="8" 
                            color="bg-amber-500"
                            delay={0.3}
                        />
                        <DataCard 
                            icon={Activity} 
                            label="Potential Lives Saved" 
                            value="42" 
                            suffix="" 
                            trend="15" 
                            color="bg-rose-500"
                            delay={0.4}
                        />
                    </div>

                    {/* Main Analytics Panels */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                        <div className="lg:col-span-2 bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm relative overflow-hidden group">
                            <div className="flex items-center justify-between mb-10">
                                <div>
                                    <h3 className="text-2xl font-black text-secondary tracking-tight">Community Engagement</h3>
                                    <p className="text-slate-400 text-sm font-medium">Monthly outreach events vs. goal capacity</p>
                                </div>
                                <div className="flex gap-2">
                                    <div className="flex items-center gap-2 text-[10px] font-black uppercase text-primary">
                                        <div className="w-2 h-2 rounded-full bg-primary" /> Actual
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-200">
                                        <div className="w-2 h-2 rounded-full bg-slate-200" /> Target
                                    </div>
                                </div>
                            </div>
                            
                            {/* SVG Placeholder Chart */}
                            <div className="aspect-[21/9] w-full flex items-end gap-3 px-4">
                                {[60, 45, 80, 55, 90, 75, 85, 95, 70, 80, 100, 85].map((h, i) => (
                                    <div key={i} className="flex-1 flex flex-col items-center gap-2 group/bar">
                                        <motion.div 
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${h}%` }}
                                            className="w-full bg-primary/10 rounded-t-xl group-hover/bar:bg-primary transition-all relative overflow-hidden"
                                        >
                                            <div className="absolute inset-x-0 top-0 h-1 bg-primary/20" />
                                        </motion.div>
                                        <span className="text-[10px] font-black text-slate-300 uppercase tracking-tighter">
                                            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm flex flex-col">
                            <h3 className="text-2xl font-black text-secondary tracking-tight mb-8">Resource Distribution</h3>
                            <div className="flex-1 flex flex-col gap-6">
                                {[
                                    { label: 'Harm Reduction Kits', pct: 85, color: 'bg-emerald-500' },
                                    { label: 'Resource Guides', pct: 62, color: 'bg-blue-500' },
                                    { label: 'Medical Samples', pct: 45, color: 'bg-amber-500' },
                                    { label: 'Fentanyl Strips', pct: 92, color: 'bg-rose-500' }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-black text-slate-600 uppercase tracking-widest">{item.label}</span>
                                            <span className="text-xs font-black text-secondary">{item.pct}%</span>
                                        </div>
                                        <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${item.pct}%` }}
                                                className={`h-full ${item.color}`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="mt-8 py-4 w-full rounded-2xl border-2 border-slate-50 text-xs font-black uppercase text-slate-400 tracking-widest hover:border-primary/20 hover:text-primary transition-all">
                                View Detailed Audit
                            </button>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="bg-secondary rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
                        <div className="absolute inset-0 grayscale opacity-20 pointer-events-none">
                            <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" />
                        </div>
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <MapPin className="mx-auto mb-6 text-accent" size={48} />
                            <h2 className="text-3xl font-black mb-6">Interactive Service Map</h2>
                            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                                Our geospatial dashboard allows you to filter and find clinical and community resources across the entire state.
                            </p>
                            <button className="bg-white text-secondary px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs flex items-center gap-3 mx-auto hover:-translate-y-1 transition-all">
                                Open Full-Screen Map <ExternalLink size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DashboardPage;
