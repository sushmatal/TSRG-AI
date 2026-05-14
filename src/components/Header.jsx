import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, Search, ChevronDown, Plus, Minus } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileExpanded, setMobileExpanded] = useState({});
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menus on navigation
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
        setIsSearchOpen(false);
    }, [location]);

    const navigation = [
        {
            name: 'About',
            href: '/about',
                submenu: [
                    { name: 'Contact', href: '/about/contact' },
                    { name: 'Our Team', href: '/about/team' },
                ]
        },
        {
            name: 'Our Work',
            href: '/about/explore-our-work',
            submenu: [
                { 
                    name: 'Research', 
                    href: '/insights/research',
                    subsubmenu: [
                        { name: 'Benzodiazepines', href: '/insights/research/benzodiazepines' },
                        { name: 'Opioids', href: '/insights/research/opioids' }
                    ]
                },
                { name: 'Community Outreach', href: '/programs/outreach' },
                { name: 'Data Dashboard', href: '/programs/dashboard' },
            ]
        },
        {
            name: 'Partner Up',
            href: '/about/partners',
            submenu: [
                { name: 'WFD Workgroup', href: '/programs/workgroups' },
                { name: 'Data & Research', href: '/insights/research' },
                { name: 'Community Engagement', href: '/programs/outreach' },
            ]
        },
        {
            name: 'Resources',
            href: '/insights',
            submenu: [
                { name: 'Blogs', href: '/about/blog' },
                { name: 'Events', href: '/insights/events' },
                { name: 'Podcasts', href: '/programs/podcasts' },
            ]
        }
    ];

    const toggleMobileSection = (name) => {
        setMobileExpanded(prev => ({
            ...prev,
            [name]: !prev[name]
        }));
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // Implement search logic here or navigate to a search page
        console.log("Searching for:", searchQuery);
        setIsSearchOpen(false);
    };

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg py-3' : 'bg-white py-5 border-b border-slate-100'
            }`}
        >
            <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
                <Link to="/" className="flex items-center group">
                    <img
                        src={`${import.meta.env.BASE_URL}TSRGlogo.png`}
                        alt="TSRG Logo"
                        className="h-[60px] md:h-[80px] w-auto object-contain transition-all duration-500 group-hover:scale-105"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden xl:flex items-center gap-6">
                    {navigation.map((item) => (
                        <div 
                            key={item.name} 
                            className="relative"
                            onMouseEnter={() => setActiveDropdown(item.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link
                                to={item.href}
                                className={`flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 ${
                                    location.pathname.startsWith(item.href) ? 'text-primary' : 'text-slate-500 hover:text-primary'
                                }`}
                            >
                                {item.name}
                                {item.submenu && <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />}
                            </Link>

                            <AnimatePresence>
                                {activeDropdown === item.name && item.submenu && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full -left-4 pt-4 min-w-[260px]"
                                    >
                                        <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-2">
                                            {item.submenu.map((sub) => (
                                                <div key={sub.name} className="relative group/sub">
                                                    <Link
                                                        to={sub.href}
                                                        className="flex items-center justify-between px-4 py-3 text-xs font-bold text-slate-600 hover:text-primary hover:bg-slate-50 rounded-xl transition-all"
                                                    >
                                                        {sub.name}
                                                        {sub.subsubmenu && <ChevronDown size={12} className="-rotate-90 group-hover/sub:translate-x-1 transition-all" />}
                                                    </Link>
                                                    {sub.subsubmenu && (
                                                        <div className="absolute top-0 left-full ml-1 w-48 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 z-50">
                                                            <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-2">
                                                                {sub.subsubmenu.map(subsub => (
                                                                    <Link
                                                                        key={subsub.name}
                                                                        to={subsub.href}
                                                                        className="block px-4 py-3 text-[11px] font-bold text-slate-600 hover:text-primary hover:bg-slate-50 rounded-xl transition-all"
                                                                    >
                                                                        {subsub.name}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                    
                    <div className="h-4 w-px bg-slate-200 mx-2" />
                    
                    {/* Search Component */}
                    <div className="relative flex items-center">
                        <AnimatePresence>
                            {isSearchOpen && (
                                <motion.form 
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={{ width: 200, opacity: 1 }}
                                    exit={{ width: 0, opacity: 0 }}
                                    onSubmit={handleSearch}
                                    className="absolute right-10 overflow-hidden"
                                >
                                    <input 
                                        autoFocus
                                        type="text" 
                                        placeholder="Search TSRG..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full bg-slate-50 border border-slate-100 px-4 py-2 rounded-full text-xs font-bold focus:outline-none focus:ring-2 focus:ring-primary/20"
                                    />
                                </motion.form>
                            )}
                        </AnimatePresence>
                        <button 
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className="text-slate-400 hover:text-primary transition-colors p-2"
                        >
                            {isSearchOpen ? <X size={18} /> : <Search size={18} />}
                        </button>
                    </div>

                    <Link to="/get-involved/donate" className="bg-primary text-white shadow-primary/20 hover:bg-primary/90 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 shadow-lg hover:-translate-y-1">
                        <Heart size={14} className="fill-white text-white" />
                        Donate
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 xl:hidden">
                    <button 
                        className="text-slate-400"
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                    >
                        <Search size={20} />
                    </button>
                    <button
                        className="text-slate-600 p-2 hover:bg-slate-100 rounded-xl transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="xl:hidden bg-white border-t border-slate-100 overflow-hidden shadow-2xl"
                    >
                        <div className="px-6 py-8 flex flex-col gap-2 max-h-[80vh] overflow-y-auto">
                            {isSearchOpen && (
                                <form onSubmit={handleSearch} className="mb-6">
                                    <input 
                                        type="text" 
                                        placeholder="Search TSRG..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/20"
                                    />
                                </form>
                            )}
                            
                            {navigation.map((item) => (
                                <div key={item.name} className="flex flex-col">
                                    <div className="flex items-center justify-between py-3 border-b border-slate-50">
                                        <Link
                                            to={item.href}
                                            className="text-lg font-black text-secondary uppercase tracking-tight"
                                            onClick={() => !item.submenu && setIsMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                        {item.submenu && (
                                            <button 
                                                onClick={() => toggleMobileSection(item.name)}
                                                className="p-2 text-slate-400"
                                            >
                                                {mobileExpanded[item.name] ? <Minus size={20} /> : <Plus size={20} />}
                                            </button>
                                        )}
                                    </div>
                                    
                                    <AnimatePresence>
                                        {mobileExpanded[item.name] && item.submenu && (
                                            <motion.div 
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="bg-slate-50 rounded-2xl mt-2 overflow-hidden flex flex-col"
                                            >
                                                {item.submenu.map((sub) => (
                                                    <div key={sub.name}>
                                                        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100/50">
                                                            <Link
                                                                to={sub.href}
                                                                className="text-sm font-bold text-slate-500 active:text-primary transition-colors"
                                                                onClick={() => !sub.subsubmenu && setIsMobileMenuOpen(false)}
                                                            >
                                                                {sub.name}
                                                            </Link>
                                                            {sub.subsubmenu && (
                                                                <button 
                                                                    onClick={() => toggleMobileSection(`${item.name}-${sub.name}`)}
                                                                    className="p-1 text-slate-400"
                                                                >
                                                                    {mobileExpanded[`${item.name}-${sub.name}`] ? <Minus size={16} /> : <Plus size={16} />}
                                                                </button>
                                                            )}
                                                        </div>
                                                        <AnimatePresence>
                                                            {mobileExpanded[`${item.name}-${sub.name}`] && sub.subsubmenu && (
                                                                <motion.div
                                                                    initial={{ opacity: 0, height: 0 }}
                                                                    animate={{ opacity: 1, height: 'auto' }}
                                                                    exit={{ opacity: 0, height: 0 }}
                                                                    className="bg-slate-100/50 p-2 flex flex-col"
                                                                >
                                                                    {sub.subsubmenu.map(subsub => (
                                                                        <Link
                                                                            key={subsub.name}
                                                                            to={subsub.href}
                                                                            className="block px-8 py-3 text-xs font-bold text-slate-400 active:text-primary transition-colors hover:bg-white rounded-xl"
                                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                                        >
                                                                            • {subsub.name}
                                                                        </Link>
                                                                    ))}
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                            <Link 
                                to="/get-involved/donate"
                                className="bg-primary text-white px-5 py-4 rounded-2xl text-center font-black uppercase tracking-widest mt-6 flex items-center justify-center gap-3 shadow-xl"
                            >
                                <Heart size={18} className="fill-white" />
                                Support Our Mission
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
