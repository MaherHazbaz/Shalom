import React, { useState } from 'react';
import { 
  Music, 
  Flame, 
  Sparkles, 
  HeartHandshake, 
  Shield, 
  HandHeart, 
  Users, 
  Globe, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  X
} from 'lucide-react';
import { MINISTRIES, MINISTRY_FOCUSES } from '../data/ministries';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import ContactCTA from '../components/ContactCTA';

const ICON_MAP = {
  Music,
  Flame,
  Sparkles,
  HeartHandshake,
  Shield,
  HandHeart,
  Users,
  Globe
};

export default function Ministries({ onOpenPlanVisit, onOpenPrayerRequest }) {
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [joinSuccess, setJoinSuccess] = useState(false);
  const [joinFormData, setJoinFormData] = useState({ name: '', phone: '', email: '', ministry: '' });

  const handleOpenJoin = (ministryName) => {
    setJoinFormData({ ...joinFormData, ministry: ministryName });
    setJoinSuccess(false);
    setJoinModalOpen(true);
  };

  const handleJoinSubmit = (e) => {
    e.preventDefault();
    setJoinSuccess(true);
  };

  return (
    <div className="bg-white">
      <SEO 
        title="Our Ministries | Jehovah Shalom International Missions"
        description="Explore the ministries of Jehovah Shalom International Missions (JSM Ministries) — Evangelism, Church Planting, Community Transformation, Worship, Youth, Children, and Prayer."
        canonicalPath="/ministries"
        keywords="Jehovah Shalom ministries, Evangelism Usilampatti, Church planting Tamil Nadu, Community outreach JSM, Christian ministries"
        breadcrumbs={[{ name: "Ministries", path: "/ministries" }]}
      />
      
      {/* Page Header (Bright Pleasant Theme) */}
      <section className="relative py-24 md:py-32 bg-slate-50 text-slate-900 overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/pastor and pastors wife praying.jpeg"
            alt="Ministries at Jehovah Shalom International Missions"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-slate-50"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="fade-down">
            <div className="w-16 h-16 rounded-full p-1 bg-white shadow-md border border-gold-500/30 mx-auto mb-4">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain rounded-full" />
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-gold-500/10 text-gold-800 border border-gold-500/30 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              Service &amp; Discipleship
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-slate-900 tracking-tight leading-tight mb-4">
              Ministries of Jehovah Shalom International Missions
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Every member has a unique calling. Find where God is leading you to serve, grow, and make a lasting impact.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================
          OUR MINISTRY FOCUSES — 3 CORE PILLARS
          1. Evangelism 
          2. Church Planting 
          3. Community Transformation
          ========================================================= */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            badge="Strategic Priorities"
            title="Our Ministry Focuses"
            subtitle="The three foundational pillars that define our calling, empower our outreach, and drive our mission for the Kingdom of God."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {MINISTRY_FOCUSES.map((focus, idx) => (
              <ScrollReveal key={focus.id} animation="fade-up" delay={idx * 150}>
                <div className="h-full bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-gold-500/50 transition-all duration-300 flex flex-col group">
                  {/* Photo Header */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={focus.image}
                      alt={focus.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-xs font-bold text-slate-900 border border-gold-500/30 shadow-sm">
                        Focus {focus.number}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gold-300 block">{focus.badge} &bull; {focus.scripture}</span>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-snug">{focus.title}</h3>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                    <div>
                      <p className="text-gold-700 font-serif font-semibold text-sm mb-2">{focus.tagline}</p>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">{focus.description}</p>
                      
                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Key Ministry Action</span>
                        {focus.points.map((pt, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => handleOpenJoin(focus.title)}
                      className="w-full py-2.5 px-4 bg-slate-50 hover:bg-gold-500 hover:text-white text-slate-800 font-bold text-xs uppercase tracking-wider rounded-xl border border-slate-200 hover:border-gold-500 transition-all flex items-center justify-center gap-2 group-hover:border-gold-500/40"
                    >
                      <span>Partner in {focus.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* Ministries Showcase Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            badge="Find Your Place"
            title="Growing Together in Faith & Service"
            subtitle="Explore our 8 vibrant ministry branches designed to nurture spiritual growth across every generation."
          />

          <div className="space-y-16">
            {MINISTRIES.map((ministry, idx) => {
              const IconComp = ICON_MAP[ministry.icon] || Sparkles;
              const isEven = idx % 2 === 1;

              return (
                <ScrollReveal key={ministry.id} animation="fade-up">
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-gold-500/40 transition-all ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}>
                    
                    {/* Visual Media (5 cols) */}
                    <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : ''}`}>
                      <div className="relative rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-slate-100 group border-2 border-white">
                        <img
                          src={ministry.image}
                          alt={ministry.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                        <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-gold-500 text-white flex items-center justify-center font-bold shadow-md">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <span className="text-[10px] uppercase font-bold tracking-wider text-gold-300 block">{ministry.category}</span>
                          <span className="text-base font-serif font-bold">{ministry.title}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content & Activities (7 cols) */}
                    <div className={`lg:col-span-7 space-y-4 ${isEven ? 'lg:order-1' : ''}`}>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-gold-500/10 text-gold-800 text-xs font-bold uppercase tracking-wider rounded-full border border-gold-500/20">
                          {ministry.category}
                        </span>
                        <span className="text-xs text-slate-500 font-semibold">Lead: {ministry.lead}</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                        {ministry.title}
                      </h3>

                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        {ministry.fullDescription}
                      </p>

                      <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-gold-600" />
                          <span>Meeting Schedule:</span> <span className="font-normal text-slate-600">{ministry.schedule}</span>
                        </h4>
                        
                        <div className="pt-2 border-t border-slate-100">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Core Activities</span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700">
                            {ministry.activities.map((act, aIdx) => (
                              <div key={aIdx} className="flex items-center gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                                <span>{act}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={() => handleOpenJoin(ministry.title)}
                          className="px-6 py-3 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md transition-all inline-flex items-center gap-2"
                        >
                          <span>Get Involved in {ministry.title}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* Join Ministry Modal */}
      {joinModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-gold-500/30 overflow-hidden">
            <div className="bg-slate-50 text-slate-900 p-6 relative border-b border-slate-200">
              <button 
                onClick={() => setJoinModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-200/50"
              >
                <X className="w-5 h-5" />
              </button>
              <span className="text-xs font-bold uppercase tracking-wider text-gold-700">Volunteer &amp; Serve</span>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mt-1">Join {joinFormData.ministry}</h3>
              <p className="text-slate-600 text-xs mt-1">Fill out your information and the ministry leader will connect with you.</p>
            </div>

            <div className="p-6">
              {joinSuccess ? (
                <div className="text-center py-6">
                  <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-slate-900 mb-2">Inquiry Submitted!</h4>
                  <p className="text-slate-600 text-sm mb-4">
                    Thank you, <strong>{joinFormData.name}</strong>. The coordinator for <strong>{joinFormData.ministry}</strong> has received your interest and will reach out soon!
                  </p>
                  <button
                    onClick={() => setJoinModalOpen(false)}
                    className="px-6 py-2 bg-slate-900 text-white font-bold rounded-full text-xs uppercase"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleJoinSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={joinFormData.name}
                      onChange={(e) => setJoinFormData({ ...joinFormData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={joinFormData.phone}
                        onChange={(e) => setJoinFormData({ ...joinFormData, phone: e.target.value })}
                        placeholder="e.g. 7708263471"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Email</label>
                      <input
                        type="email"
                        value={joinFormData.email}
                        onChange={(e) => setJoinFormData({ ...joinFormData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-md"
                    >
                      Submit Ministry Interest
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Contact CTA */}
      <ContactCTA onOpenPrayerRequest={onOpenPrayerRequest} onOpenPlanVisit={onOpenPlanVisit} />

    </div>
  );
}
