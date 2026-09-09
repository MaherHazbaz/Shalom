import React from 'react';
import { 
  Quote, 
  Sparkles, 
  Phone,
  CheckCircle2
} from 'lucide-react';
import { CHURCH_INFO } from '../data/churchInfo';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import ContactCTA from '../components/ContactCTA';

export default function About({ onOpenPlanVisit, onOpenPrayerRequest }) {
  const { founder } = CHURCH_INFO;

  const beliefs = [
    {
      title: "The Holy Scriptures",
      desc: "We believe the Bible is the inspired, infallible, authoritative Word of God, our supreme rule of faith and practice."
    },
    {
      title: "The Eternal Godhead",
      desc: "We believe in one God, eternally existent in three persons: Father, Son, and Holy Spirit."
    },
    {
      title: "Salvation Through Jesus Christ",
      desc: "We believe that through the sacrificial death and resurrection of Jesus Christ, salvation and forgiveness of sins is freely offered to all who believe."
    },
    {
      title: "The Holy Spirit & Power",
      desc: "We believe in the present ministry of the Holy Spirit, equipping believers with spiritual gifts, fruit, and boldness to witness."
    },
    {
      title: "The Great Commission",
      desc: "We believe in the urgent mandate to proclaim the Gospel to every tongue, tribe, and nation through compassionate deeds and preaching."
    },
    {
      title: "The Blessed Hope",
      desc: "We believe in the victorious return of our Lord Jesus Christ, the resurrection of believers, and eternal life in His presence."
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="About Us | Jehovah Shalom International Missions"
        description="Learn about Jehovah Shalom International Missions (JSM Ministries) founded by Pastor Philip. M. Murugan. Explore our history, biblical beliefs, vision, and heart for spreading the Gospel in Usilampatti, Tamil Nadu, and across nations."
        canonicalPath="/about"
        keywords="About Jehovah Shalom International Missions, Jehovah Shalom, Pastor Philip M Murugan, JSM Ministries history, Christian beliefs Usilampatti"
        breadcrumbs={[{ name: "About Us", path: "/about" }]}
      />
      
      {/* Page Header Hero (Bright Pleasant Theme) */}
      <section className="relative py-24 md:py-32 bg-slate-50 text-slate-900 overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1920&auto=format&fit=crop"
            alt="About Jehovah Shalom International Missions"
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
              Our Calling &amp; Identity
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-slate-900 tracking-tight leading-tight mb-4">
              About Jehovah Shalom International Missions
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              "Building lives, strengthening families, and taking the love of Christ to communities around the world."
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story & Vision Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Text (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal animation="slide-right">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase bg-gold-500/10 text-gold-800 border border-gold-500/20">
                  <span>Our Heart &amp; History</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
                  A Ministry Founded on God's Peace &amp; Global Commission
                </h2>

                <div className="flex items-center gap-3">
                  <div className="h-[2px] w-12 bg-gold-500"></div>
                  <div className="w-2 h-2 rotate-45 bg-gold-500"></div>
                </div>

                <p className="text-slate-700 text-base leading-relaxed">
                  <strong>JEHOVAH SHALOM INTERNATIONAL MISSIONS (JSM Ministries)</strong> was birthed with a singular spiritual burden: to manifest the peace (<em>Shalom</em>), restoration, and life-changing grace of Jesus Christ to broken souls and unreached regions.
                </p>

                <p className="text-slate-600 text-sm leading-relaxed">
                  Under the spiritual guidance of <strong>Pastor Philip. M. Murugan, M.A., M.Min., M.Div.</strong>, the ministry has steadily grown as a vibrant church community and a launching pad for pioneering international missions.
                </p>

                <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-gold-500 space-y-2 shadow-sm">
                  <Quote className="w-6 h-6 text-gold-600" />
                  <p className="font-serif italic text-base sm:text-lg text-slate-900 font-semibold">
                    "{CHURCH_INFO.motto}"
                  </p>
                  <p className="text-xs text-slate-500 font-bold uppercase">
                    — Jehovah Shalom Ministry Pillar
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Visual Image (5 cols) */}
            <div className="lg:col-span-5">
              <ScrollReveal animation="slide-left">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                  <img
                    src="/images/pastor and pastors wife praying.jpeg"
                    alt="Pastor Philip and his wife leading prayer"
                    className="w-full h-[450px] object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="font-serif font-bold text-lg text-gold-300">Faith, Prayer &amp; God's Presence</p>
                    <p className="text-xs text-slate-200 mt-1">Pastor Philip &amp; pastoral family leading in prayer for the nations.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Dedicated Founder Profile (Bright Theme) */}
      <section className="py-20 md:py-28 bg-slate-50 text-slate-900 relative border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            badge="Leadership & Ministry Oversight"
            title="Founder & General Secretary"
            subtitle="Honoring God's servant appointed to pioneer and shepherd the work of JSM Ministries."
          />

          <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-gold-500/30 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Pastor Portrait Placeholder (5 cols) */}
              <div className="md:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[4/5] group">
                  <img
                    src={founder.image}
                    alt={founder.fullTitle}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md text-center border border-gold-500/30 shadow-md">
                    <p className="font-serif font-bold text-slate-900 text-base leading-tight">{founder.name}</p>
                    <p className="text-xs text-gold-700 font-bold font-sans mt-0.5">{founder.qualifications}</p>
                  </div>
                </div>
              </div>

              {/* Bio & Official Credentials (7 cols) */}
              <div className="md:col-span-7 space-y-5">
                <div>
                  <span className="px-3 py-1 bg-gold-500/10 text-gold-800 font-bold text-xs rounded uppercase tracking-wider border border-gold-500/30">
                    Founder Profile
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-2 leading-tight">
                    {founder.name}, <span className="text-gold-700 font-sans text-xl">{founder.qualifications}</span>
                  </h3>
                  <p className="text-sm font-bold text-gold-800 uppercase tracking-wider mt-1">
                    {founder.roleDisplay}
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 italic text-slate-700 text-sm font-serif">
                  "{founder.visionQuote}"
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {founder.bioPlaceholder}
                </p>

                <div className="pt-2 flex flex-wrap gap-4">
                  <a
                    href={`tel:${CHURCH_INFO.phones[0].tel}`}
                    className="px-5 py-2.5 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md transition-all flex items-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call: {CHURCH_INFO.phones[0].display}</span>
                  </a>
                  <button
                    onClick={onOpenPrayerRequest}
                    className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs rounded-full border border-slate-300 hover:border-gold-500/40 transition-all shadow-sm"
                  >
                    Request Pastoral Prayer
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Statement of Faith / Core Beliefs */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            badge="Theological Foundation"
            title="What We Believe"
            subtitle="Our statement of faith reflects historical, sound biblical doctrine centered around the Gospel of Jesus Christ."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {beliefs.map((belief, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 80}>
                <div className="p-7 bg-slate-50 rounded-2xl border border-slate-200 hover:border-gold-500/40 hover:bg-white hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-gold-500/15 text-gold-700 flex items-center justify-center font-bold text-sm mb-4">
                      0{idx + 1}
                    </div>
                    <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">
                      {belief.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {belief.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-200 flex items-center gap-1 text-[11px] font-bold text-gold-800">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Biblically Grounded</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA onOpenPrayerRequest={onOpenPrayerRequest} onOpenPlanVisit={onOpenPlanVisit} />

    </div>
  );
}
