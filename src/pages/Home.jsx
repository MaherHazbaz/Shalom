import React from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown,
  Sparkles,
  Clock,
  ArrowRight,
  Heart,
  Globe,
  BookOpen,
  Play,
  Quote,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { CHURCH_INFO } from '../data/churchInfo';
import { MINISTRIES, MINISTRY_FOCUSES } from '../data/ministries';
import { SERMONS } from '../data/sermons';
import { EVENTS } from '../data/events';
import { MISSIONS_DATA } from '../data/missions';
import { TESTIMONIALS } from '../data/testimonials';

import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';
import FounderSection from '../components/FounderSection';
import ContactCTA from '../components/ContactCTA';
import ServiceCard from '../components/ServiceCard';
import MinistryCard from '../components/MinistryCard';
import SermonCard from '../components/SermonCard';
import EventCard from '../components/EventCard';
import TestimonialCard from '../components/TestimonialCard';

export default function Home({ onOpenPlanVisit, onOpenPrayerRequest, onPlaySermon, onRegisterEvent }) {
  const featuredSermons = SERMONS.slice(0, 3);
  const featuredEvents = EVENTS.slice(0, 3);
  const featuredMinistries = MINISTRIES.slice(0, 8);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white overflow-hidden">
      <SEO 
        title="Jehovah Shalom International Missions | Official Website | Usilampatti, Madurai"
        description="Official website of Jehovah Shalom International Missions (JSM Ministries), founded by Pastor Philip. M. Murugan. Sunday Worship Gatherings at 9:00 AM & 11:00 AM in Usilampatti, Madurai, Tamil Nadu."
        canonicalPath="/"
        keywords="Jehovah Shalom International Missions, jehovah shalom international missions, Jehovah Shalom, JSM Ministries, Pastor Philip M Murugan, Usilampatti Church, Madurai Church, Sunday worship Usilampatti"
      />

      {/* =========================================================
          HERO SECTION (Bright, Radiant, White & Gold Aesthetics)
          ========================================================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-slate-900 overflow-hidden bg-white">
        {/* Luminous Background Image with Gentle White/Ivory Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1438032005730-c779502df39b?q=80&w=1920&auto=format&fit=crop"
            alt="Jehovah Shalom Sanctuary Worship"
            className="w-full h-full object-cover object-center scale-105 opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white"></div>
          <div className="absolute inset-0 bg-radial-glow"></div>
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col items-center text-center">

          {/* Logo Emblem Hero Badge */}
          <ScrollReveal animation="fade-down" delay={100}>
            <div className="mb-6 flex flex-col items-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-white shadow-lg border-2 border-gold-500/40 mb-3 hover:scale-105 transition-transform">
                <img
                  src="/logo.png"
                  alt="Jehovah Shalom Emblem"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase bg-white/90 text-gold-800 border border-gold-500/30 backdrop-blur-md shadow-sm">
                <Sparkles className="w-4 h-4 text-gold-600 animate-spin" style={{ animationDuration: '8s' }} />
                <span>WELCOME TO JEHOVAH SHALOM INTERNATIONAL MISSIONS</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Main Heading */}
          <ScrollReveal animation="fade-up" delay={200} className="max-w-5xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-900 tracking-tight leading-[1.15] mb-4">
              Jehovah Shalom <span className="text-gold-gradient block sm:inline">International Missions</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-slate-700 tracking-wide mb-6">
              A Place of <span className="text-gold-gradient">Faith</span>, <span className="text-gold-gradient">Hope</span> &amp; God's Presence
            </p>
          </ScrollReveal>

          {/* Supporting Text */}
          <ScrollReveal animation="fade-up" delay={300} className="max-w-2xl">
            <p className="text-slate-600 text-lg sm:text-xl font-normal leading-relaxed mb-8 sm:mb-10 text-balance">
              "Building lives, strengthening families, and taking the love of Christ to communities around the world."
            </p>
          </ScrollReveal>

          {/* Primary Hero CTAs */}
          <ScrollReveal animation="fade-up" delay={400} className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto">
            <button
              onClick={onOpenPlanVisit}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-white font-bold text-base tracking-wide rounded-full shadow-lg shadow-gold-500/25 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>Join Us This Sunday</span>
            </button>

            <Link
              to="/missions"
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 hover:text-gold-700 font-bold text-base rounded-full border border-slate-300 hover:border-gold-500/40 shadow-sm transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Discover Our Mission</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-gold-600" />
            </Link>
          </ScrollReveal>

          {/* Floating Sunday Worship Schedule Card (Bright White Theme) */}
          <ScrollReveal animation="zoom-in" delay={500}>
            <div className="bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl border border-gold-500/30 shadow-xl flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-left animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-500/15 text-gold-700 flex items-center justify-center border border-gold-500/30">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gold-800 block">Sunday Worship Gatherings</span>
                  <span className="text-slate-900 font-serif font-bold text-base sm:text-lg">9:00 AM &amp; 11:00 AM</span>
                </div>
              </div>

              <div className="hidden sm:block h-8 w-[1px] bg-slate-200"></div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-medium">Main Sanctuary</span>
                <button
                  onClick={onOpenPlanVisit}
                  className="px-3.5 py-1.5 bg-gold-500/10 hover:bg-gold-500 text-gold-800 hover:text-white font-bold text-xs rounded-lg transition-all border border-gold-500/30"
                >
                  Plan Visit
                </button>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Subtle Scroll Down Indicator */}
        <button
          onClick={() => scrollToSection('welcome-section')}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 hover:text-gold-600 transition-colors flex flex-col items-center gap-1 text-xs uppercase tracking-widest focus:outline-none"
          aria-label="Scroll to Welcome Section"
        >
          <span>Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </section>

      {/* =========================================================
          WELCOME SECTION
          ========================================================= */}
      <section id="welcome-section" className="py-20 md:py-28 bg-slate-50 relative border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Text on Left (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal animation="slide-right">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-gold-500/10 text-gold-800 border border-gold-500/25 mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                  Christ-Centered Fellowship
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
                  Welcome to Jehovah Shalom
                </h2>

                {/* Decorative Gold Accent */}
                <div className="flex items-center gap-3 my-2">
                  <div className="h-[2px] w-12 bg-gold-500"></div>
                  <div className="w-2 h-2 rotate-45 bg-gold-500"></div>
                </div>

                <p className="text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
                  At <strong>Jehovah Shalom International Missions</strong>, we are passionately committed to spreading the Gospel, serving communities, strengthening families, and helping people grow in a vibrant, life-changing relationship with Jesus Christ.
                </p>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Whether you are stepping into a church for the very first time or looking for a loving spiritual home to deepen your faith, our doors and hearts are wide open for you and your family.
                </p>

                {/* Small Spiritual Quote Card */}
                <div className="p-5 bg-white rounded-2xl border-l-4 border-gold-500 shadow-sm">
                  <Quote className="w-6 h-6 text-gold-600 mb-2" />
                  <p className="font-serif italic text-lg sm:text-xl text-slate-900 font-semibold">
                    "Where there is faith, there is hope."
                  </p>
                  <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-bold">
                    — Ministry Motto, Jehovah Shalom
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    to="/about"
                    className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-full shadow-md transition-all flex items-center gap-2 group"
                  >
                    <span>Learn More About Us</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-gold-400" />
                  </Link>

                  <button
                    onClick={onOpenPlanVisit}
                    className="px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm rounded-full border border-slate-300 shadow-sm transition-all"
                  >
                    Plan Your Visit
                  </button>
                </div>
              </ScrollReveal>
            </div>

            {/* Beautiful Church/Worship Image on Right (5 cols) */}
            <div className="lg:col-span-5">
              <ScrollReveal animation="slide-left" delay={200}>
                <div className="relative">
                  {/* Decorative Frame */}
                  <div className="absolute -inset-4 bg-gradient-to-tr from-gold-500/20 to-royal-600/10 rounded-3xl -z-10 blur-sm"></div>

                  <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                    <img
                      src="/images/Missions1.jpeg"
                      alt="JSM Ministry field work — village preaching, prayer circles and children's outreach"
                      className="w-full h-[460px] object-cover hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />

                    {/* Badge Floating on Image */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-gold-500/30 text-slate-900 shadow-lg">
                      <p className="font-serif font-bold text-sm text-gold-800">Real Ministry. Real Lives. Real Impact.</p>
                      <p className="text-xs text-slate-600 mt-0.5">Village preaching, prayer circles, and children's outreach across Tamil Nadu.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT SECTION / 3 CORE VALUES
          ========================================================= */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionTitle
            badge="Our Guiding Principles"
            title="Our Heart. Our Faith. Our Mission."
            subtitle="Anchored in eternal biblical truths, we strive to reflect Christ's character in every outreach, service, and interaction."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

            {/* Card 1: Faith */}
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 hover:border-gold-500/40 hover:shadow-xl hover:bg-white transition-all duration-300 h-full flex flex-col justify-between group">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white border border-gold-500/30 text-gold-700 flex items-center justify-center font-bold text-xl mb-6 shadow-sm group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                    <ShieldCheck className="w-7 h-7" />
                  </div>

                  <span className="text-xs font-mono font-bold text-gold-700 uppercase tracking-widest block mb-1">01 / Foundation</span>
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3 group-hover:text-gold-700 transition-colors">
                    Faith
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Standing firmly on the Word of God and trusting His promises in every season of life.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 text-xs font-serif italic text-slate-500">
                  "Now faith is confidence in what we hope for..." — Heb 11:1
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: Love */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 hover:border-gold-500/40 hover:shadow-xl hover:bg-white transition-all duration-300 h-full flex flex-col justify-between group">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white border border-gold-500/30 text-gold-700 flex items-center justify-center font-bold text-xl mb-6 shadow-sm group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                    <Heart className="w-7 h-7" />
                  </div>

                  <span className="text-xs font-mono font-bold text-gold-700 uppercase tracking-widest block mb-1">02 / Compassion</span>
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3 group-hover:text-gold-700 transition-colors">
                    Love
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Serving people with compassion, humility, generosity, and Christ-centered unconditional love.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 text-xs font-serif italic text-slate-500">
                  "And now these three remain: faith, hope, and love..." — 1 Cor 13:13
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3: Mission */}
            <ScrollReveal animation="fade-up" delay={300}>
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 hover:border-gold-500/40 hover:shadow-xl hover:bg-white transition-all duration-300 h-full flex flex-col justify-between group">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white border border-gold-500/30 text-gold-700 flex items-center justify-center font-bold text-xl mb-6 shadow-sm group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                    <Globe className="w-7 h-7" />
                  </div>

                  <span className="text-xs font-mono font-bold text-gold-700 uppercase tracking-widest block mb-1">03 / Purpose</span>
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3 group-hover:text-gold-700 transition-colors">
                    Mission
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Taking the Gospel beyond our walls and into communities, remote villages, and nations.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 text-xs font-serif italic text-slate-500">
                  "Go and make disciples of all nations..." — Matt 28:19
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Large Scripture-Inspired Visual Element & CTA (Bright White Theme) */}
          <ScrollReveal animation="fade-up" delay={400}>
            <div className="bg-gradient-to-r from-slate-50 via-gold-50/50 to-slate-50 rounded-3xl p-8 sm:p-12 text-slate-900 text-center relative overflow-hidden shadow-md border border-gold-500/30">
              <div className="max-w-3xl mx-auto space-y-6">
                <Quote className="w-10 h-10 text-gold-600/40 mx-auto" />
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 leading-relaxed">
                  "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future."
                </h3>
                <p className="text-gold-700 font-mono text-sm tracking-wider uppercase font-bold">
                  Jeremiah 29:11
                </p>
                <div className="pt-2">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-gold-600 to-gold-500 text-white font-bold rounded-full text-sm uppercase tracking-wider shadow-md hover:scale-105 transition-all"
                  >
                    <span>Our Story &amp; Full History</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* =========================================================
          FOUNDER SECTION (Pastor Philip. M. Murugan - Bright Theme)
          ========================================================= */}
      <FounderSection />

      {/* =========================================================
          CHURCH SERVICE / WEEKLY GATHERINGS
          ========================================================= */}
      <section className="py-20 md:py-28 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionTitle
            badge="Gathering In Fellowship"
            title="Weekly Gatherings & Worship Times"
            subtitle="Join our church family throughout the week for vibrant praise, life-transforming biblical preaching, and earnest prayer."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {CHURCH_INFO.services.map((service, index) => (
              <ScrollReveal key={service.id} animation="fade-up" delay={index * 100}>
                <ServiceCard service={service} onPlanVisit={onOpenPlanVisit} />
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={onOpenPlanVisit}
              className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full text-sm uppercase tracking-wider shadow-md transition-all inline-flex items-center gap-2 group"
            >
              <span>Plan Your Visit Today</span>
              <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================
          OUR MINISTRY FOCUSES — 3 CORE PILLARS
          1. Evangelism 
          2. Church Planting 
          3. Community Transformation
          ========================================================= */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionTitle
            badge="Strategic Priorities"
            title="Our Ministry Focuses"
            subtitle="The three divine mandates guiding our calling across villages, towns, and unreached regions."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-10">
            {MINISTRY_FOCUSES.map((focus, idx) => (
              <ScrollReveal key={focus.id} animation="fade-up" delay={idx * 150}>
                <div className="h-full bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-gold-500/50 transition-all duration-300 flex flex-col group">
                  {/* Visual Header */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={focus.image}
                      alt={focus.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
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

                  {/* Body Content */}
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

                    <Link
                      to="/ministries"
                      className="w-full py-2.5 px-4 bg-slate-50 hover:bg-gold-500 hover:text-white text-slate-800 font-bold text-xs uppercase tracking-wider rounded-xl border border-slate-200 hover:border-gold-500 transition-all flex items-center justify-center gap-2 group-hover:border-gold-500/40"
                    >
                      <span>Learn More About {focus.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          MINISTRIES SECTION
          ========================================================= */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionTitle
            badge="Connect & Grow"
            title="Ministries for Every Life Stage"
            subtitle="Discover purpose, build meaningful Christian friendships, and use your God-given gifts to serve others."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
            {featuredMinistries.map((ministry, index) => (
              <ScrollReveal key={ministry.id} animation="fade-up" delay={index * 80}>
                <MinistryCard ministry={ministry} />
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/ministries"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-50 hover:bg-gold-50 text-slate-900 font-bold rounded-full text-sm uppercase tracking-wider border border-slate-300 hover:border-gold-500/50 shadow-sm transition-all"
            >
              <span>View All Ministry Opportunities</span>
              <ArrowRight className="w-4 h-4 text-gold-600" />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================
          MISSIONS SECTION (Taking the Gospel Beyond Borders - Bright Theme)
          ========================================================= */}
      <section className="py-20 md:py-28 bg-slate-50 text-slate-900 relative overflow-hidden border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-gold-500/10 text-gold-800 border border-gold-500/30 mb-4">
              <Globe className="w-3.5 h-3.5 text-gold-600" />
              Global Vision &amp; Harvest
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight">
              Taking the Gospel Beyond Borders
            </h2>
            <div className="flex items-center justify-center gap-3 my-4">
              <div className="h-[2px] w-12 bg-gold-500"></div>
              <div className="w-2 h-2 rotate-45 bg-gold-500"></div>
              <div className="h-[2px] w-12 bg-gold-500"></div>
            </div>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              "Our mission extends beyond our local community. We are committed to reaching people, serving communities and sharing the hope of Jesus Christ across nations."
            </p>
          </div>

          {/* Animated Statistics Counters in Clean White Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {MISSIONS_DATA.stats.map((stat, idx) => (
              <ScrollReveal key={idx} animation="zoom-in" delay={idx * 100}>
                <div className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200/80 text-center shadow-sm hover:shadow-md transition-all group hover:border-gold-500/50">
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

          {/* Missions Callout Banner (Bright Theme) */}
          <ScrollReveal animation="fade-up" delay={300}>
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gold-500/30 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-2 text-left max-w-2xl">
                <span className="text-xs font-mono uppercase tracking-widest text-gold-700 font-bold">Get Involved Internationally</span>
                <h3 className="text-2xl font-serif font-bold text-slate-900">
                  Partner with Us to Reach Unreached Communities
                </h3>
                <p className="text-slate-600 text-sm">
                  Support native missionaries, clean water projects, and children's education in rural regions.
                </p>
              </div>

              <Link
                to="/missions"
                className="px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-md transition-all shrink-0"
              >
                Explore Our Missions
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* =========================================================
          MINISTRY IN PICTURES — Real Photo Gallery
          ========================================================= */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionTitle
            badge="Ministry in Pictures"
            title="Glimpses From the Mission Field"
            subtitle="Real moments from our frontline mission work — preaching in villages, worshipping under open skies, and touching lives across Tamil Nadu."
          />

          {/* Asymmetric 7-photo Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">

            {/* Feature 1: Kulathupatti village church preaching */}
            <ScrollReveal animation="fade-up" delay={100} className="col-span-2 lg:col-span-1 row-span-2">
              <div className="relative rounded-3xl overflow-hidden h-full min-h-[300px] lg:min-h-[520px] group shadow-md border border-slate-200 hover:border-gold-500/40 hover:shadow-xl transition-all duration-300">
                <img
                  src="/images/Kulathupatti.jpeg"
                  alt="Sunday service at Kulathupatti village church"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-gold-400 mb-1">Kulathupatti, Tamil Nadu</span>
                  <p className="text-white font-serif font-bold text-base sm:text-lg leading-snug">Sunday Gospel Service in the Village Fellowship Hall</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Feature 2: Pastor Philip and wife leading fervent prayer */}
            <ScrollReveal animation="fade-up" delay={150} className="col-span-2 sm:col-span-1 lg:col-span-1 row-span-2">
              <div className="relative rounded-3xl overflow-hidden h-full min-h-[300px] lg:min-h-[520px] group shadow-md border border-slate-200 hover:border-gold-500/40 hover:shadow-xl transition-all duration-300">
                <img
                  src="/images/pastor and pastors wife praying.jpeg"
                  alt="Pastor Philip and his wife leading congregational prayer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-gold-400 mb-1">Pastoral Leadership</span>
                  <p className="text-white font-serif font-bold text-base sm:text-lg leading-snug">Pastor Philip &amp; His Wife Leading in Fervent Intercessory Prayer</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Missions1 — multi-scene collage */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="relative rounded-3xl overflow-hidden aspect-square group shadow-md border border-slate-200 hover:border-gold-500/40 hover:shadow-xl transition-all duration-300">
                <img
                  src="/images/Missions1.jpeg"
                  alt="Village gospel outreach, prayer circles, and children's Bible study"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white font-serif font-bold text-sm leading-snug">Village Preaching, Prayer &amp; Bible Study</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Worship under construction Usilampatti */}
            <ScrollReveal animation="fade-up" delay={250}>
              <div className="relative rounded-3xl overflow-hidden aspect-square group shadow-md border border-slate-200 hover:border-gold-500/40 hover:shadow-xl transition-all duration-300">
                <img
                  src="/images/worship while construction on process usilampatti.jpeg"
                  alt="Children praying inside the under-construction Usilampatti church building"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white font-serif font-bold text-sm leading-snug">Worship Amid Construction — Faith That Won't Wait</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Awareness Programs — school outreach */}
            <ScrollReveal animation="fade-up" delay={300}>
              <div className="relative rounded-3xl overflow-hidden aspect-square group shadow-md border border-slate-200 hover:border-gold-500/40 hover:shadow-xl transition-all duration-300">
                <img
                  src="/images/awareness programs.jpg"
                  alt="RPI SHE Centre awareness program at government primary school"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white font-serif font-bold text-sm leading-snug">School Awareness Program — RPI &amp; SHE Centre</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Missions2 — outdoor children street ministry */}
            <ScrollReveal animation="fade-up" delay={350}>
              <div className="relative rounded-3xl overflow-hidden aspect-square group shadow-md border border-slate-200 hover:border-gold-500/40 hover:shadow-xl transition-all duration-300">
                <img
                  src="/images/Missions2.jpeg"
                  alt="Outdoor children's gospel outreach in Tamil Nadu streets"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white font-serif font-bold text-sm leading-snug">Children's Street Gospel Rallies</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Usilampatti rented church */}
            <ScrollReveal animation="fade-up" delay={400} className="col-span-2 lg:col-span-1">
              <div className="relative rounded-3xl overflow-hidden aspect-square group shadow-md border border-slate-200 hover:border-gold-500/40 hover:shadow-xl transition-all duration-300">
                <img
                  src="/images/Usilamappti church rented.jpeg"
                  alt="Christmas gathering at the Usilampatti rented church fellowship"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-gold-400 mb-1">Usilampatti</span>
                  <p className="text-white font-serif font-bold text-sm leading-snug">Christmas Celebration at Our Rented Fellowship</p>
                </div>
              </div>
            </ScrollReveal>

          </div>

          <div className="text-center mt-10">
            <Link
              to="/missions"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-50 hover:bg-gold-50 text-slate-900 font-bold rounded-full text-sm uppercase tracking-wider border border-slate-300 hover:border-gold-500/50 shadow-sm transition-all"
            >
              <span>See All Our Mission Work</span>
              <ArrowRight className="w-4 h-4 text-gold-600" />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================
          SERMONS & MEDIA SECTION
          ========================================================= */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionTitle
            badge="Spiritual Nourishment"
            title="Messages That Inspire & Transform"
            subtitle="Explore practical, Christ-centered sermons to equip your everyday faith and draw you closer to God."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredSermons.map((sermon, index) => (
              <ScrollReveal key={sermon.id} animation="fade-up" delay={index * 100}>
                <SermonCard sermon={sermon} onPlay={onPlaySermon} />
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/sermons"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full text-sm uppercase tracking-wider shadow-md transition-all"
            >
              <Play className="w-4 h-4 fill-gold-400 text-gold-400" />
              <span>View All Sermons &amp; Media</span>
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================
          FULL-WIDTH SCRIPTURE SECTION (Psalm 23:1 - Bright & Ethereal Theme)
          ========================================================= */}
      <section className="relative py-28 md:py-36 text-slate-900 text-center overflow-hidden bg-slate-50 border-y border-slate-200/80">
        {/* Background Image with Bright Luminous Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/worship while construction on process usilampatti.jpeg"
            alt="Children worshipping inside the under-construction Usilampatti church — faith that doesn't wait for walls"
            className="w-full h-full object-cover opacity-20"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white/95"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="w-14 h-14 mx-auto rounded-full bg-gold-500/15 text-gold-700 flex items-center justify-center mb-6 border border-gold-500/30 shadow-sm">
              <BookOpen className="w-7 h-7" />
            </div>

            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight tracking-tight mb-6">
              "The Lord is my shepherd; I shall not want."
            </p>

            <div className="flex items-center justify-center gap-4 my-6">
              <div className="h-[2px] w-16 bg-gold-500"></div>
              <span className="text-gold-700 font-serif font-bold text-lg sm:text-xl tracking-wider uppercase">
                Psalm 23:1
              </span>
              <div className="h-[2px] w-16 bg-gold-500"></div>
            </div>

            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto font-medium">
              He makes me lie down in green pastures, He leads me beside quiet waters, He refreshes my soul.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================
          UPCOMING EVENTS SECTION
          ========================================================= */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionTitle
            badge="Mark Your Calendar"
            title="Upcoming Church Events"
            subtitle="Experience powerful conferences, worship nights, fellowships, and community service days."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredEvents.map((event, index) => (
              <ScrollReveal key={event.id} animation="fade-up" delay={index * 100}>
                <EventCard event={event} onRegister={onRegisterEvent} />
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-50 hover:bg-gold-50 text-slate-900 font-bold rounded-full text-sm uppercase tracking-wider border border-slate-300 hover:border-gold-500/50 shadow-sm transition-all"
            >
              <span>View Full Events Calendar</span>
              <ArrowRight className="w-4 h-4 text-gold-600" />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================
          TESTIMONIALS SECTION (Stories of Faith)
          ========================================================= */}
      <section className="py-20 md:py-28 bg-slate-50 relative border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionTitle
            badge="Living Testimonies"
            title="Stories of Faith & Transformation"
            subtitle="Hear how God's presence, prayer, and community at Jehovah Shalom have touched and restored lives."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {TESTIMONIALS.map((testimonial, index) => (
              <ScrollReveal key={testimonial.id} animation="fade-up" delay={index * 100}>
                <TestimonialCard testimonial={testimonial} />
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          CALL TO ACTION (Come As You Are - Bright Luxury White Theme)
          ========================================================= */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 relative overflow-hidden border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal animation="fade-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-gold-500/10 text-gold-800 border border-gold-500/30 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              You Are Always Welcome Here
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight mb-6">
              Come As You Are. Grow in Faith. Walk in Purpose.
            </h2>

            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              "Whether you are visiting for the first time or looking for a church family, there is a place for you here."
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenPlanVisit}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-lg shadow-gold-500/25 transition-all"
              >
                Plan Your Visit
              </button>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 hover:text-gold-700 font-bold text-sm rounded-full border border-slate-300 shadow-sm transition-all"
              >
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================
          CONTACT CTA SECTION (We Are Here for You with Official Phones)
          ========================================================= */}
      <ContactCTA
        onOpenPrayerRequest={onOpenPrayerRequest}
        onOpenPlanVisit={onOpenPlanVisit}
      />

    </div>
  );
}
