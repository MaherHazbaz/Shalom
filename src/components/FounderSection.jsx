import React from 'react';
import { Link } from 'react-router-dom';
import { Award, BookOpen, Quote, ChevronRight, Phone } from 'lucide-react';
import { CHURCH_INFO } from '../data/churchInfo';
import ScrollReveal from './ScrollReveal';

export default function FounderSection() {
  const { founder } = CHURCH_INFO;

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white text-slate-800 relative overflow-hidden border-y border-slate-100">
      {/* Subtle background ambient light */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-royal-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-gold-500/10 text-gold-800 border border-gold-500/25 mb-4">
            <Award className="w-3.5 h-3.5 text-gold-600" />
            Spiritual Leadership &amp; Apostolic Vision
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Meet Our Founder
          </h2>
          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-[2px] w-12 bg-gold-500"></div>
            <div className="w-2 h-2 rotate-45 bg-gold-500"></div>
            <div className="h-[2px] w-12 bg-gold-500"></div>
          </div>
          <p className="text-slate-600 text-base md:text-lg">
            Guiding the ministry with unwavering faith, biblical integrity, and a global mission for Christ.
          </p>
        </ScrollReveal>

        {/* Two-Column Dignified Bright Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Dignified Pastor Portrait Placeholder (5 cols) */}
          <div className="lg:col-span-5">
            <ScrollReveal animation="slide-right" delay={100}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative gold backdrop frame */}
                <div className="absolute -inset-3 bg-gradient-to-tr from-gold-500/20 via-transparent to-royal-600/10 rounded-3xl blur-md -z-10"></div>
                <div className="absolute -inset-1 border-2 border-gold-500/30 rounded-3xl -z-10"></div>

                <div className="relative rounded-2xl overflow-hidden bg-white shadow-2xl border-4 border-white aspect-[4/5] group">
                  <img
                    src={founder.image}
                    alt={founder.fullTitle}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Gentle gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                  {/* Badge floating over image */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-gold-500/30 shadow-lg text-slate-900">
                    <p className="font-serif font-bold text-lg text-slate-900 leading-tight">
                      {founder.name}
                    </p>
                    <p className="text-xs text-gold-700 font-bold mt-0.5">
                      {founder.qualifications}
                    </p>
                    <p className="text-[11px] text-slate-600 uppercase tracking-wider font-semibold mt-1">
                      {founder.roleDisplay}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Ministry Message & Credentials (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal animation="slide-left" delay={200}>
              
              {/* Official Title Block */}
              <div className="border-b border-slate-200 pb-6">
                <div className="inline-block px-3 py-1 bg-gold-500/10 text-gold-800 text-xs font-bold uppercase tracking-wider rounded-md border border-gold-500/25 mb-3">
                  Founder &amp; General Secretary
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-slate-900 leading-tight">
                  {founder.name}
                </h3>
                
                {/* Qualifications & Organization */}
                <div className="mt-2 flex flex-wrap items-center gap-2 sm:gap-3 text-sm">
                  <span className="px-3 py-1 rounded-md bg-gold-50 text-gold-800 font-bold border border-gold-200">
                    {founder.qualifications}
                  </span>
                  <span className="text-slate-300 hidden sm:inline">&bull;</span>
                  <span className="text-slate-600 font-medium">
                    Founder &amp; General Secretary — <strong className="text-slate-900 font-serif">{founder.organization}</strong>
                  </span>
                </div>
              </div>

              {/* Founder Vision Quote */}
              <div className="p-6 bg-white rounded-2xl border-l-4 border-gold-500 shadow-md relative">
                <Quote className="w-8 h-8 text-gold-500/20 absolute top-4 right-4" />
                <p className="text-slate-800 font-serif italic text-base sm:text-lg leading-relaxed">
                  "{founder.visionQuote}"
                </p>
                <p className="text-xs font-bold text-gold-700 mt-2.5 uppercase tracking-wider">
                  — {founder.name}, {founder.qualifications}
                </p>
              </div>

              {/* Ministry Biography Placeholder */}
              <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  {founder.bioPlaceholder}
                </p>
                <p className="text-xs text-slate-500 italic bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm">
                  [Note: Pastor Philip. M. Murugan oversees church planting, missionary mobilization, and pastoral mentoring across JSM Ministries.]
                </p>
              </div>

              {/* Pastoral Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-gold-500/15 text-gold-700 flex items-center justify-center shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Theological Grounding</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Expository preaching &amp; sound biblical doctrine</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-royal-600/10 text-royal-700 flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Global Mission Heart</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Reaching cross-border communities for Christ</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  to="/about"
                  className="px-6 py-3 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-white font-bold text-sm tracking-wide rounded-full shadow-md shadow-gold-500/20 transition-all flex items-center gap-2 group"
                >
                  <span>Read Our Story</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/contact"
                  className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 hover:text-gold-700 font-semibold text-sm rounded-full border border-slate-300 hover:border-gold-500/40 transition-all flex items-center gap-2 shadow-sm"
                >
                  <span>Connect With Leadership</span>
                </Link>
              </div>

            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
