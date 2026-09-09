import React, { useState } from 'react';
import { 
  Play, 
  Search, 
  Sparkles, 
  BookOpen
} from 'lucide-react';
import { SERMONS, SERMON_CATEGORIES } from '../data/sermons';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import SermonCard from '../components/SermonCard';
import ContactCTA from '../components/ContactCTA';

export default function Sermons({ onPlaySermon, onOpenPlanVisit, onOpenPrayerRequest }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const latestSermon = SERMONS[0];

  const filteredSermons = SERMONS.filter((sermon) => {
    const matchesSearch = 
      sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.scripture.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.series.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === 'All Categories' || sermon.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-white">
      <SEO 
        title="Sermons & Messages | Jehovah Shalom International Missions"
        description="Listen to uplifting biblical sermons and Gospel messages by Pastor Philip. M. Murugan and guest ministers at Jehovah Shalom International Missions (JSM Ministries)."
        canonicalPath="/sermons"
        keywords="Jehovah Shalom sermons, Pastor Philip M Murugan preaching, Christian messages Tamil Nadu, Bible teachings Usilampatti"
        breadcrumbs={[{ name: "Sermons", path: "/sermons" }]}
      />
      
      {/* Page Header (Bright Pleasant Theme) */}
      <section className="relative py-24 md:py-32 bg-slate-50 text-slate-900 overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=1920&auto=format&fit=crop"
            alt="Sermon Archive - Jehovah Shalom International Missions"
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
              Word of God &amp; Media
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-slate-900 tracking-tight leading-tight mb-4">
              Sermons &amp; Messages
            </h1>
            <p className="text-xl sm:text-2xl font-serif text-gold-800 font-medium mb-3">
              Jehovah Shalom International Missions
            </p>
            <p className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              "Faith comes by hearing, and hearing by the Word of God." — Romans 10:17
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Latest Message Hero (Bright Theme) */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200/90 text-slate-900 grid grid-cols-1 lg:grid-cols-12 items-center">
              
              {/* Media Preview (7 cols) */}
              <div 
                className="lg:col-span-7 relative aspect-video bg-slate-100 cursor-pointer group"
                onClick={() => onPlaySermon(latestSermon)}
              >
                <img
                  src={latestSermon.image}
                  alt={latestSermon.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-gold-500 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-8 sm:w-10 h-8 sm:h-10 fill-white ml-1.5" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 px-3.5 py-1.5 bg-white/95 text-slate-900 font-bold text-xs rounded-full uppercase tracking-wider shadow-sm border border-slate-200">
                  Latest Message
                </div>
              </div>

              {/* Sermon Brief (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 space-y-4">
                <div className="flex items-center gap-2 text-xs text-gold-700 font-bold uppercase tracking-wider">
                  <span>{latestSermon.category}</span>
                  <span>&bull;</span>
                  <span>{latestSermon.date}</span>
                </div>

                <h2 
                  onClick={() => onPlaySermon(latestSermon)}
                  className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 hover:text-gold-700 transition-colors cursor-pointer leading-tight"
                >
                  {latestSermon.title}
                </h2>

                <div className="text-xs text-slate-600 space-y-1">
                  <p className="font-bold text-slate-800">{latestSermon.speaker}</p>
                  <p className="text-slate-500 font-mono font-medium">Scripture: {latestSermon.scripture}</p>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                  {latestSermon.description}
                </p>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => onPlaySermon(latestSermon)}
                    className="px-6 py-3 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md flex items-center gap-2"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>Watch / Listen</span>
                  </button>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Search & Category Filter Bar */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by topic, speaker, or scripture..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>

            {/* Category Select / Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {SERMON_CATEGORIES.map((cat) => (
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
          </div>

          {/* Sermons Grid */}
          {filteredSermons.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSermons.map((sermon) => (
                <SermonCard key={sermon.id} sermon={sermon} onPlay={onPlaySermon} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-serif font-bold text-slate-900">No Sermons Found</h3>
              <p className="text-slate-500 text-sm mt-1">Try clearing your search query or selecting another category.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All Categories'); }}
                className="mt-4 px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA onOpenPrayerRequest={onOpenPrayerRequest} onOpenPlanVisit={onOpenPlanVisit} />

    </div>
  );
}
