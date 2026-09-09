import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Heart, MessageSquare, Sparkles } from 'lucide-react';
import { CHURCH_INFO } from '../data/churchInfo';
import ScrollReveal from './ScrollReveal';

export default function ContactCTA({ onOpenPrayerRequest, onOpenPlanVisit }) {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200/80">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold-500/5 rounded-l-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 text-slate-900 shadow-xl border border-gold-500/30 relative overflow-hidden">
            
            {/* Background pattern & gentle glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Text Info (7 cols) */}
              <div className="lg:col-span-7 space-y-4 text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-gold-500/10 text-gold-800 border border-gold-500/30">
                  <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                  Need Prayer or Have a Question?
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
                  We Are Here for You
                </h2>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
                  Whether you would like to learn more about our ministry, join us in worship, request prayer, or connect with our team, we would love to hear from you.
                </p>

                {/* Clickable Phone Number Display Badges */}
                <div className="pt-2 flex flex-wrap gap-4">
                  <a
                    href={`tel:${CHURCH_INFO.phones[0].tel}`}
                    className="flex items-center gap-3 px-5 py-3.5 bg-slate-50 hover:bg-gold-50/50 rounded-2xl border border-slate-200 hover:border-gold-500/50 shadow-sm transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gold-500/15 text-gold-700 flex items-center justify-center font-bold shadow-sm group-hover:bg-gold-600 group-hover:text-white transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold">Direct Call</span>
                      <span className="text-slate-900 font-serif font-bold text-base sm:text-lg group-hover:text-gold-700">{CHURCH_INFO.phones[0].display}</span>
                    </div>
                  </a>

                  <a
                    href={`tel:${CHURCH_INFO.phones[1].tel}`}
                    className="flex items-center gap-3 px-5 py-3.5 bg-slate-50 hover:bg-gold-50/50 rounded-2xl border border-slate-200 hover:border-gold-500/50 shadow-sm transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gold-500/15 text-gold-700 flex items-center justify-center font-bold shadow-sm group-hover:bg-gold-600 group-hover:text-white transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold">Prayer Line</span>
                      <span className="text-slate-900 font-serif font-bold text-base sm:text-lg group-hover:text-gold-700">{CHURCH_INFO.phones[1].display}</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Action Buttons & Fast Forms (5 cols) */}
              <div className="lg:col-span-5 flex flex-col gap-3.5">
                <a
                  href={`tel:${CHURCH_INFO.phones[0].tel}`}
                  className="w-full py-4 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-gold-500/25 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now ({CHURCH_INFO.phones[0].display})</span>
                </a>

                <Link
                  to="/contact"
                  className="w-full py-4 bg-white hover:bg-slate-50 text-slate-800 hover:text-gold-700 font-bold text-sm rounded-xl border border-slate-300 hover:border-gold-500/50 transition-all flex items-center justify-center gap-2 text-center shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-gold-600" />
                  <span>Contact Us &amp; Send Message</span>
                </Link>

                <button
                  onClick={onOpenPrayerRequest}
                  className="w-full py-3.5 bg-gold-50 hover:bg-gold-100/70 text-gold-900 font-bold text-xs uppercase tracking-wider rounded-xl border border-gold-300 transition-all flex items-center justify-center gap-2"
                >
                  <Heart className="w-3.5 h-3.5 fill-gold-500/30 text-gold-700" />
                  <span>Request Urgent Pastoral Prayer</span>
                </button>
              </div>

            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
