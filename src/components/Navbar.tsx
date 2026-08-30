import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Mail } from 'lucide-react';
import { profileData } from '../data/profileData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/cv', label: 'CV' },
    { to: '/research', label: 'Research' },
    { to: '/projects', label: 'Projects' },
    { to: '/talks', label: 'Talks & Events' },
    { to: '/teaching', label: 'Teaching' },
    { to: '/more', label: 'More' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-nav shadow-lg border-b border-navy-800/80 py-2.5' 
        : 'bg-navy-900 border-b border-navy-800 py-3.5'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand / Logo */}
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-3 text-left focus:outline-none focus:ring-2 focus:ring-teal/50 rounded-lg p-1"
          >
            <div className="w-8 h-8 rounded-full border border-teal/40 overflow-hidden bg-navy-800 flex-shrink-0">
              <img 
                src={profileData.headshot} 
                alt={profileData.name} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div>
              <span className="text-lg font-bold font-heading text-white tracking-wide block leading-tight">
                {profileData.name}
              </span>
              <span className="text-xs text-teal-light font-medium block">
                Astroparticle Physics
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-teal text-white shadow-sm font-semibold'
                      : 'text-slate-200 hover:text-white hover:bg-navy-800/70'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Social / Academic Badges */}
          <div className="hidden lg:flex items-center space-x-2.5 pl-3 border-l border-navy-700/60">
            {/* KU Profile */}
            <a
              href={profileData.kuProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-slate-300 hover:text-white hover:bg-navy-800 transition-colors"
              title="Khalifa University Profile"
              aria-label="Khalifa University Profile"
            >
              <img src="/images/KU_logo.png" alt="KU" className="h-5 w-auto object-contain filter brightness-110" />
            </a>

            {/* Google Scholar */}
            <a
              href={profileData.scholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-slate-300 hover:text-white hover:bg-navy-800 transition-colors"
              title="Google Scholar Profile"
              aria-label="Google Scholar Profile"
            >
              <img src="/images/Google_Scholar_logo.svg" alt="Scholar" className="h-4 w-4" />
            </a>

            {/* ORCID */}
            <a
              href={`https://orcid.org/${profileData.orcid}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-slate-300 hover:text-white hover:bg-navy-800 transition-colors"
              title="ORCID Profile"
              aria-label="ORCID Profile"
            >
              <img src="/images/ORCID_iD.svg" alt="ORCID" className="h-4 w-4" />
            </a>

            {/* LinkedIn */}
            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-slate-300 hover:text-white hover:bg-navy-800 transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <img src="/images/LinkedIn_icon.svg" alt="LinkedIn" className="h-4 w-4" />
            </a>

            {/* Email */}
            <a
              href={`mailto:${profileData.email.primary}`}
              className="p-1.5 rounded-md text-slate-300 hover:text-white hover:bg-navy-800 transition-colors"
              title={`Email: ${profileData.email.primary}`}
              aria-label="Email Ankit Yadav"
            >
              <img src="/images/Gmail_icon_(2020).svg" alt="Email" className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`mailto:${profileData.email.primary}`}
              className="p-2 text-slate-300 hover:text-white"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-teal"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-950 border-b border-navy-800 animate-fade-in px-4 pt-3 pb-6 space-y-3">
          <div className="space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `w-full block px-3.5 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-teal text-white font-semibold'
                      : 'text-slate-200 hover:bg-navy-800 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Academic & Social Links Bar */}
          <div className="pt-4 border-t border-navy-800">
            <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold px-3 mb-2">
              Academic & Social Links
            </p>
            <div className="grid grid-cols-5 gap-2 px-2">
              <a
                href={profileData.kuProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-2 rounded-lg bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white transition-colors"
                title="Khalifa University"
              >
                <img src="/images/KU_logo.png" alt="KU" className="h-5 w-auto object-contain" />
                <span className="text-[10px] mt-1 text-slate-400">KU</span>
              </a>

              <a
                href={profileData.scholarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-2 rounded-lg bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white transition-colors"
                title="Google Scholar"
              >
                <img src="/images/Google_Scholar_logo.svg" alt="Scholar" className="h-5 w-5" />
                <span className="text-[10px] mt-1 text-slate-400">Scholar</span>
              </a>

              <a
                href={`https://orcid.org/${profileData.orcid}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-2 rounded-lg bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white transition-colors"
                title="ORCID"
              >
                <img src="/images/ORCID_iD.svg" alt="ORCID" className="h-5 w-5" />
                <span className="text-[10px] mt-1 text-slate-400">ORCID</span>
              </a>

              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-2 rounded-lg bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white transition-colors"
                title="LinkedIn"
              >
                <img src="/images/LinkedIn_icon.svg" alt="LinkedIn" className="h-5 w-5" />
                <span className="text-[10px] mt-1 text-slate-400">LinkedIn</span>
              </a>

              <a
                href={`mailto:${profileData.email.primary}`}
                className="flex flex-col items-center justify-center p-2 rounded-lg bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white transition-colors"
                title="Email"
              >
                <img src="/images/Gmail_icon_(2020).svg" alt="Email" className="h-4 w-4" />
                <span className="text-[10px] mt-1 text-slate-400">Email</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
