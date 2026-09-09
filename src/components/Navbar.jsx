import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Heart, Sparkles, ChevronRight } from 'lucide-react';
import { CHURCH_INFO } from '../data/churchInfo';

export default function Navbar({ onOpenPlanVisit, onOpenPrayerRequest }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Ministries', path: '/ministries' },
    { name: 'Sermons', path: '/sermons' },
    { name: 'Events', path: '/events' },
    { name: 'Missions', path: '/missions' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Top Notification / Quick Phone Strip (Bright White/Ivory Style) */}
      <div className="bg-slate-50 text-slate-600 text-xs py-2 px-4 border-b border-slate-200/70 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-gold-700 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              {CHURCH_INFO.tagline}
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-500 font-medium">Sunday Worship: 9:00 AM &amp; 11:00 AM</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-gold-600" />
              <span className="text-slate-500">Call Us:</span>
              <a 
                href={`tel:${CHURCH_INFO.phones[0].tel}`} 
                className="font-semibold text-slate-800 hover:text-gold-600 transition-colors"
              >
                {CHURCH_INFO.phones[0].display}
              </a>
              <span className="text-slate-300">/</span>
              <a 
                href={`tel:${CHURCH_INFO.phones[1].tel}`} 
                className="font-semibold text-slate-800 hover:text-gold-600 transition-colors"
              >
                {CHURCH_INFO.phones[1].display}
              </a>
            </div>

            <button
              onClick={onOpenPrayerRequest}
              className="inline-flex items-center gap-1.5 text-gold-700 hover:text-gold-800 font-semibold transition-colors"
            >
              <Heart className="w-3.5 h-3.5 fill-gold-500/20 text-gold-600" />
              Need Prayer?
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar (Bright Clean White with Glassmorphism) */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80' 
            : 'bg-white/90 backdrop-blur-sm py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo with Attached Emblem */}
          <Link to="/" className="flex items-center gap-3.5 group focus:outline-none">
            <div className="relative w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-gold-500/40 via-white to-gold-400/30 shadow-sm group-hover:scale-105 transition-transform overflow-hidden border border-gold-500/30">
              <img 
                src="/logo.png" 
                alt="Jehovah Shalom Logo" 
                className="w-full h-full object-contain rounded-full bg-white"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg sm:text-xl tracking-wider text-slate-900 group-hover:text-gold-700 transition-colors leading-none">
                JEHOVAH SHALOM
              </span>
              <span className="text-[10px] sm:text-xs font-sans tracking-[0.2em] uppercase text-gold-700 font-bold mt-1">
                INTERNATIONAL MISSIONS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all relative ${
                    isActive 
                      ? 'text-gold-700 bg-gold-500/10' 
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-gold-600 rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA & Phone */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${CHURCH_INFO.phones[0].tel}`}
              className="hidden xl:flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-gold-600" />
              <span>{CHURCH_INFO.phones[0].display}</span>
            </a>

            <button
              onClick={onOpenPlanVisit}
              className="px-5 py-2.5 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-white text-sm font-bold tracking-wide rounded-full shadow-md shadow-gold-500/20 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Join Us
            </button>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenPlanVisit}
              className="sm:hidden px-3.5 py-1.5 bg-gold-600 text-white text-xs font-bold rounded-full shadow-sm"
            >
              Join
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-gold-600" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Navigation Drawer (Bright White Mode) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-white/98 backdrop-blur-xl animate-fade-in flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Jehovah Shalom Logo" 
                className="w-10 h-10 rounded-full object-contain border border-slate-200"
              />
              <div>
                <div className="font-serif font-bold text-slate-900 text-sm">JEHOVAH SHALOM</div>
                <div className="text-[9px] tracking-widest text-gold-700 uppercase font-bold">INTERNATIONAL MISSIONS</div>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100"
            >
              <X className="w-6 h-6 text-gold-600" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-gold-500/15 text-gold-800 font-bold border-l-4 border-gold-600'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}

            {/* Mobile Actions */}
            <div className="pt-6 mt-6 border-t border-slate-100 space-y-3">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenPlanVisit(); }}
                className="w-full py-3.5 bg-gradient-to-r from-gold-600 to-gold-500 text-white font-bold text-sm tracking-wider uppercase rounded-xl shadow-md flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Plan Your Visit
              </button>

              <button
                onClick={() => { setMobileMenuOpen(false); onOpenPrayerRequest(); }}
                className="w-full py-3 bg-slate-50 hover:bg-slate-100 text-gold-800 font-semibold text-sm rounded-xl border border-gold-500/30 flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 fill-gold-500/20 text-gold-600" />
                Submit Prayer Request
              </button>
            </div>

            {/* Mobile Phone Quick Links */}
            <div className="pt-6 mt-4 border-t border-slate-100 text-xs text-slate-500 space-y-2">
              <p className="font-semibold text-slate-700 uppercase tracking-wider text-[11px]">Connect With Us</p>
              <div className="flex flex-col gap-2">
                <a
                  href={`tel:${CHURCH_INFO.phones[0].tel}`}
                  className="flex items-center gap-2 text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-200 font-semibold"
                >
                  <Phone className="w-4 h-4 text-gold-600" />
                  <span>Call: {CHURCH_INFO.phones[0].display}</span>
                </a>
                <a
                  href={`tel:${CHURCH_INFO.phones[1].tel}`}
                  className="flex items-center gap-2 text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-200 font-semibold"
                >
                  <Phone className="w-4 h-4 text-gold-600" />
                  <span>Call: {CHURCH_INFO.phones[1].display}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
