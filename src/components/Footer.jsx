import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Heart, MessageCircle, ArrowUp, Sparkles } from 'lucide-react';
import { CHURCH_INFO } from '../data/churchInfo';

export default function Footer({ onOpenPlanVisit, onOpenPrayerRequest }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 text-slate-600 relative border-t border-slate-200/80 pt-16 pb-8 overflow-hidden">
      {/* Subtle warm glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gold-500/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* Col 1: Brand & Logo & Founder Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-3.5 group">
              <div className="w-12 h-12 rounded-full p-0.5 bg-white border border-gold-500/40 shadow-sm overflow-hidden flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="Jehovah Shalom Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif font-bold text-lg text-slate-900 block tracking-wider leading-none group-hover:text-gold-700 transition-colors">
                  JEHOVAH SHALOM
                </span>
                <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-gold-700 font-bold mt-1 block">
                  INTERNATIONAL MISSIONS
                </span>
              </div>
            </Link>

            <p className="text-slate-600 text-sm leading-relaxed">
              {CHURCH_INFO.missionStatement}
            </p>

            {/* Official Founder Citation Card */}
            <div className="p-4 bg-white rounded-2xl border border-gold-500/30 shadow-sm space-y-1">
              <div className="text-[11px] uppercase tracking-wider text-gold-700 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-gold-600" />
                Ministry Leadership
              </div>
              <div className="text-slate-900 text-sm font-serif font-bold">
                {CHURCH_INFO.founder.name}, <span className="text-gold-700 font-sans text-xs">{CHURCH_INFO.founder.qualifications}</span>
              </div>
              <div className="text-slate-500 text-xs">
                {CHURCH_INFO.founder.roleDisplay}
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-slate-900 font-serif text-lg font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-600"></span>
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-600 hover:text-gold-700 transition-colors flex items-center gap-1.5 font-medium">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-600 hover:text-gold-700 transition-colors flex items-center gap-1.5 font-medium">
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/ministries" className="text-slate-600 hover:text-gold-700 transition-colors flex items-center gap-1.5 font-medium">
                  <span>Ministries</span>
                </Link>
              </li>
              <li>
                <Link to="/sermons" className="text-slate-600 hover:text-gold-700 transition-colors flex items-center gap-1.5 font-medium">
                  <span>Sermons &amp; Media</span>
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-slate-600 hover:text-gold-700 transition-colors flex items-center gap-1.5 font-medium">
                  <span>Events &amp; Calendar</span>
                </Link>
              </li>
              <li>
                <Link to="/missions" className="text-slate-600 hover:text-gold-700 transition-colors flex items-center gap-1.5 font-medium">
                  <span>Global Missions</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-gold-700 transition-colors flex items-center gap-1.5 font-medium">
                  <span>Contact &amp; Visit</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Weekly Gatherings */}
          <div>
            <h3 className="text-slate-900 font-serif text-lg font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-600"></span>
              Service Gatherings
            </h3>
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                <span className="text-gold-700 font-bold block uppercase tracking-wider text-[10px]">Sunday Morning Worship</span>
                <span className="text-slate-900 text-sm font-bold">9:00 AM &amp; 11:00 AM</span>
                <span className="text-slate-500 block mt-0.5">{CHURCH_INFO.services[0].location}</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                <span className="text-gold-700 font-bold block uppercase tracking-wider text-[10px]">Wednesday Bible Study</span>
                <span className="text-slate-900 text-sm font-bold">7:00 PM</span>
                <span className="text-slate-500 block mt-0.5">{CHURCH_INFO.services[2].location}</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                <span className="text-gold-700 font-bold block uppercase tracking-wider text-[10px]">Friday Intercessory Prayer</span>
                <span className="text-slate-900 text-sm font-bold">7:00 PM</span>
                <span className="text-slate-500 block mt-0.5">{CHURCH_INFO.services[3].location}</span>
              </div>
            </div>
          </div>

          {/* Col 4: Official Contact & Socials */}
          <div className="space-y-4">
            <h3 className="text-slate-900 font-serif text-lg font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-600"></span>
              Get In Touch
            </h3>

            <div className="space-y-2.5 text-sm">
              {/* Phone 1 */}
              <a 
                href={`tel:${CHURCH_INFO.phones[0].tel}`}
                className="flex items-center gap-3 p-3 bg-white rounded-xl hover:bg-gold-50/50 border border-slate-200 shadow-sm transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-gold-500/15 text-gold-700 flex items-center justify-center group-hover:bg-gold-600 group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block font-medium">{CHURCH_INFO.phones[0].label}</span>
                  <span className="text-slate-900 font-bold group-hover:text-gold-700">{CHURCH_INFO.phones[0].display}</span>
                </div>
              </a>

              {/* Phone 2 */}
              <a 
                href={`tel:${CHURCH_INFO.phones[1].tel}`}
                className="flex items-center gap-3 p-3 bg-white rounded-xl hover:bg-gold-50/50 border border-slate-200 shadow-sm transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-gold-500/15 text-gold-700 flex items-center justify-center group-hover:bg-gold-600 group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block font-medium">{CHURCH_INFO.phones[1].label}</span>
                  <span className="text-slate-900 font-bold group-hover:text-gold-700">{CHURCH_INFO.phones[1].display}</span>
                </div>
              </a>

              {/* Address Placeholder */}
              <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200/80 text-xs shadow-sm">
                <MapPin className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 block font-semibold">Location:</span>
                  <span className="text-slate-700 font-medium">{CHURCH_INFO.contact.address}</span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-slate-500 block mb-2 font-bold">Follow Our Ministry</span>
              <div className="flex items-center gap-2">
                <a 
                  href={CHURCH_INFO.socials[0].url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-9 h-9 rounded-lg bg-white border border-slate-200 hover:border-red-400 hover:bg-red-50 hover:text-red-600 flex items-center justify-center text-slate-600 transition-all shadow-sm"
                  aria-label="YouTube Channel"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a 
                  href={CHURCH_INFO.socials[1].url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-9 h-9 rounded-lg bg-white border border-slate-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 flex items-center justify-center text-slate-600 transition-all shadow-sm"
                  aria-label="Facebook Page"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href={CHURCH_INFO.socials[2].url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-9 h-9 rounded-lg bg-white border border-slate-200 hover:border-pink-400 hover:bg-pink-50 hover:text-pink-600 flex items-center justify-center text-slate-600 transition-all shadow-sm"
                  aria-label="Instagram Profile"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                <a 
                  href={CHURCH_INFO.socials[3].url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-9 h-9 rounded-lg bg-white border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-600 flex items-center justify-center text-slate-600 transition-all shadow-sm"
                  aria-label="WhatsApp Connect"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Copyright & Scroll to Top */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Jehovah Shalom International Missions. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-gold-700 font-semibold tracking-wide flex items-center gap-1.5">
              <Heart className="w-3 h-3 fill-gold-500 text-gold-600" />
              Built with Faith &amp; Purpose
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-white hover:bg-slate-100 text-slate-700 rounded-lg border border-slate-200 transition-colors flex items-center gap-1 text-xs shadow-sm"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5 text-gold-600" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
