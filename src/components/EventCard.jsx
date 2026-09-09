import React from 'react';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';

export default function EventCard({ event, onRegister }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-100 hover:border-gold-500/30 transition-all duration-300 flex flex-col justify-between group">
      
      {/* Top Image */}
      <div className="relative h-44 overflow-hidden bg-navy-950">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent"></div>

        {/* Date Badge */}
        <div className="absolute top-3 left-3 bg-navy-900/90 text-white rounded-xl p-2 text-center shadow-lg border border-gold-500/30 backdrop-blur-sm min-w-[52px]">
          <span className="block text-[10px] font-bold tracking-wider text-gold-400 uppercase">{event.date.month}</span>
          <span className="block text-xl font-serif font-bold text-white leading-none">{event.date.day}</span>
        </div>

        {/* Category Badge */}
        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-navy-950/80 text-slate-200 border border-navy-700 backdrop-blur-sm">
          {event.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-serif font-bold text-navy-900 group-hover:text-gold-700 transition-colors mb-2">
            {event.title}
          </h3>

          {/* Time & Location */}
          <div className="space-y-1.5 text-xs text-slate-500 mb-4">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-gold-600 shrink-0" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-gold-600 shrink-0" />
              <span className="truncate">{event.location}</span>
            </div>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
            {event.description}
          </p>
        </div>

        {/* Register Button */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[11px] text-slate-400 font-medium">Free Admission</span>
          <button
            onClick={() => onRegister(event)}
            className="px-4 py-2 bg-navy-900 hover:bg-gold-500 text-white hover:text-navy-950 text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-sm"
          >
            Register / RSVP
          </button>
        </div>
      </div>
    </div>
  );
}
