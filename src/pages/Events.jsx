import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Sparkles, 
  Search
} from 'lucide-react';
import { EVENTS, EVENT_CATEGORIES } from '../data/events';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import EventCard from '../components/EventCard';
import ContactCTA from '../components/ContactCTA';

export default function Events({ onRegisterEvent, onOpenPlanVisit, onOpenPrayerRequest }) {
  const [selectedCategory, setSelectedCategory] = useState('All Events');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = EVENTS.filter((ev) => {
    const matchesCategory = selectedCategory === 'All Events' || ev.category === selectedCategory;
    const matchesSearch = 
      ev.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white">
      <SEO 
        title="Upcoming Events & Calendar | Jehovah Shalom International Missions"
        description="Join special church services, revival conferences, prayer vigils, and community outreaches at Jehovah Shalom International Missions (JSM Ministries)."
        canonicalPath="/events"
        keywords="Jehovah Shalom events, church calendar Usilampatti, Christian meetings Tamil Nadu, Sunday worship calendar"
        breadcrumbs={[{ name: "Events", path: "/events" }]}
      />
      
      {/* Page Header (Bright Pleasant Theme) */}
      <section className="relative py-24 md:py-32 bg-slate-50 text-slate-900 overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Kulathupatti.jpeg"
            alt="Events at Jehovah Shalom International Missions"
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
              Church Life &amp; Gatherings
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-slate-900 tracking-tight leading-tight mb-4">
              Events &amp; Calendar
            </h1>
            <p className="text-xl sm:text-2xl font-serif text-gold-800 font-medium mb-3">
              Jehovah Shalom International Missions
            </p>
            <p className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Join us for special revival conferences, worship nights, fellowships, and community outreaches in Usilampatti and beyond.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {EVENT_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search event title..."
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <ScrollReveal key={event.id} animation="fade-up">
                  <EventCard event={event} onRegister={onRegisterEvent} />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 shadow-sm">
              <CalendarIcon className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-serif font-bold text-slate-900">No Events Found</h3>
              <p className="text-slate-500 text-sm mt-1">Please check back soon for newly scheduled services and gatherings.</p>
            </div>
          )}

        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA onOpenPrayerRequest={onOpenPrayerRequest} onOpenPlanVisit={onOpenPlanVisit} />

    </div>
  );
}
