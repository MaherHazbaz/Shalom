import React, { useState } from 'react';
import { 
  Globe, 
  MapPin, 
  HeartHandshake, 
  CheckCircle2, 
  HandHeart, 
  Church, 
  GraduationCap,
  X
} from 'lucide-react';
import { MISSIONS_DATA } from '../data/missions';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';
import ContactCTA from '../components/ContactCTA';

export default function Missions({ onOpenPlanVisit, onOpenPrayerRequest }) {
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [partnerSuccess, setPartnerSuccess] = useState(false);
  const [partnerFormData, setPartnerFormData] = useState({
    name: '',
    phone: '',
    email: '',
    supportType: 'Volunteer for Missions Trip',
    initiative: 'Rural Village Gospel & Medical Mission'
  });

  const handlePartnerSubmit = (e) => {
    e.preventDefault();
    setPartnerSuccess(true);
  };

  return (
    <div className="bg-white">
      <SEO 
        title="Global Missions & Outreach | Jehovah Shalom International Missions"
        description="Discover global missions, village evangelism, church planting in Kulathupatti and Usilampatti, and community transformation by Jehovah Shalom International Missions (JSM Ministries)."
        canonicalPath="/missions"
        keywords="Jehovah Shalom International Missions, JSM missions, church planting Tamil Nadu, village preaching Usilampatti, Christian mission field"
        breadcrumbs={[{ name: "Missions", path: "/missions" }]}
      />
      
      {/* Page Header (Bright Pleasant Theme) */}
      <section className="relative py-24 md:py-32 bg-slate-50 text-slate-900 overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Missions1.jpeg"
            alt="JSM International Missions — village outreach, prayer, and children's ministry"
            className="w-full h-full object-cover opacity-20 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-slate-50"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="fade-down">
            <div className="w-16 h-16 rounded-full p-1 bg-white shadow-md border border-gold-500/30 mx-auto mb-4">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain rounded-full" />
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-gold-500/10 text-gold-800 border border-gold-500/30 mb-4">
              <Globe className="w-3.5 h-3.5 text-gold-600" />
              JSM Global Outreach
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-slate-900 tracking-tight leading-tight mb-4">
              Taking the Gospel Beyond Borders
            </h1>
            <p className="text-xl sm:text-2xl font-serif text-gold-800 font-medium mb-3">
              Jehovah Shalom International Missions
            </p>
            <p className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              "{MISSIONS_DATA.overview}"
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Statistics Section with Animated Counters (Bright White Theme) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {MISSIONS_DATA.stats.map((stat, idx) => (
              <ScrollReveal key={idx} animation="zoom-in" delay={idx * 100}>
                <div className="p-6 sm:p-8 bg-slate-50 rounded-3xl border border-slate-200/80 text-center shadow-sm hover:shadow-md hover:border-gold-500/40 hover:bg-white transition-all">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gold-700 mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Core Mission Pillars */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            badge="Strategic Focus"
            title="Our Three Mission Pillars"
            subtitle="How JSM Ministries mobilizes resources and workers to carry Christ's light across boundaries."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:border-gold-500/40 hover:shadow-lg transition-all h-full">
                <div className="w-14 h-14 rounded-2xl bg-gold-500/15 text-gold-700 flex items-center justify-center font-bold mb-6 shadow-sm">
                  <Church className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">
                  Church Planting &amp; Discipleship
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Establishing self-sustaining local churches in remote and unreached communities, discipling believers to become mature leaders.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:border-gold-500/40 hover:shadow-lg transition-all h-full">
                <div className="w-14 h-14 rounded-2xl bg-gold-500/15 text-gold-700 flex items-center justify-center font-bold mb-6 shadow-sm">
                  <HandHeart className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">
                  Humanitarian Relief &amp; Care
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Providing clean drinking water, emergency nutrition, medical supplies, and educational kits to impoverished families.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:border-gold-500/40 hover:shadow-lg transition-all h-full">
                <div className="w-14 h-14 rounded-2xl bg-gold-500/15 text-gold-700 flex items-center justify-center font-bold mb-6 shadow-sm">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">
                  Missionary Training &amp; Support
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Equipping indigenous pastors and native missionaries with theological grounding, travel support, and ongoing intercession.
                </p>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Active Mission Initiatives */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            badge="Current Field Works"
            title="Active Missionary Initiatives"
            subtitle="Explore our ongoing frontline projects and see how God is opening doors for the Gospel."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {MISSIONS_DATA.initiatives.map((init) => (
              <ScrollReveal key={init.id} animation="fade-up">
                <div className="bg-slate-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-md border border-slate-200/80 hover:border-gold-500/40 transition-all flex flex-col justify-between group">
                  <div className="relative h-60 overflow-hidden bg-slate-100">
                    <img
                      src={init.image}
                      alt={init.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                    <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold uppercase bg-white text-slate-900 shadow-sm border border-slate-200">
                      {init.status}
                    </span>
                    <span className="absolute bottom-4 left-4 text-xs font-bold text-white flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-gold-400" />
                      {init.region}
                    </span>
                  </div>

                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-serif font-bold text-slate-900">
                        {init.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {init.description}
                      </p>
                      <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm text-xs text-slate-700">
                        <strong className="text-slate-900 uppercase tracking-wider block mb-1">Key Goals:</strong>
                        {init.goals}
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-slate-200">
                      <button
                        onClick={() => {
                          setPartnerFormData({ ...partnerFormData, initiative: init.title });
                          setPartnerSuccess(false);
                          setPartnerModalOpen(true);
                        }}
                        className="w-full py-3 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
                      >
                        <HeartHandshake className="w-4 h-4" />
                        <span>Support or Volunteer for This Mission</span>
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                setPartnerSuccess(false);
                setPartnerModalOpen(true);
              }}
              className="px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-500 text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-md hover:scale-105 transition-all"
            >
              Partner with JSM International Missions
            </button>
          </div>

        </div>
      </section>

      {/* Partner / Volunteer Modal */}
      {partnerModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-gold-500/30 overflow-hidden">
            <div className="bg-slate-50 text-slate-900 p-6 relative border-b border-slate-200">
              <button 
                onClick={() => setPartnerModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-200/50"
              >
                <X className="w-5 h-5" />
              </button>
              <span className="text-xs font-bold uppercase tracking-wider text-gold-700">Global Partnership</span>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mt-1">Missions Partnership</h3>
              <p className="text-slate-600 text-xs mt-1">Stand with JSM Ministries to take the Gospel to every nation.</p>
            </div>

            <div className="p-6">
              {partnerSuccess ? (
                <div className="text-center py-6">
                  <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-slate-900 mb-2">Thank You for Standing with Us!</h4>
                  <p className="text-slate-600 text-sm mb-4">
                    Thank you, <strong>{partnerFormData.name}</strong>. Our Global Missions Board has received your interest for <strong>{partnerFormData.initiative}</strong>.
                  </p>
                  <button
                    onClick={() => setPartnerModalOpen(false)}
                    className="px-6 py-2 bg-slate-900 text-white font-bold rounded-full text-xs uppercase"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handlePartnerSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={partnerFormData.name}
                      onChange={(e) => setPartnerFormData({ ...partnerFormData, name: e.target.value })}
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
                        value={partnerFormData.phone}
                        onChange={(e) => setPartnerFormData({ ...partnerFormData, phone: e.target.value })}
                        placeholder="e.g. 7708263471"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Email</label>
                      <input
                        type="email"
                        value={partnerFormData.email}
                        onChange={(e) => setPartnerFormData({ ...partnerFormData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">How Would You Like to Partner?</label>
                    <select
                      value={partnerFormData.supportType}
                      onChange={(e) => setPartnerFormData({ ...partnerFormData, supportType: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    >
                      <option value="Volunteer for Missions Trip">Volunteer for Missions Field Trip</option>
                      <option value="Monthly Prayer Partner">Monthly Prayer Intercessor</option>
                      <option value="Sponsor a Native Pastor">Sponsor a Native Pastor</option>
                      <option value="Clean Water Project Support">Clean Water Project Support</option>
                      <option value="Medical & Care Kit Donor">Medical &amp; Care Kit Donor</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-md"
                    >
                      Confirm Partnership Interest
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
