import React from 'react';
import { Clock, MapPin, Calendar, Sparkles } from 'lucide-react';

export default function ServiceCard({ service, onPlanVisit }) {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-gold-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Day & Type Tag */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-navy-900 text-gold-300">
            <Calendar className="w-3.5 h-3.5 text-gold-400" />
            {service.day}
          </span>
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            {service.type}
          </span>
        </div>

        {/* Title & Time */}
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-navy-900 group-hover:text-gold-700 transition-colors mb-2">
          {service.title}
        </h3>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-ivory-200 text-navy-900 rounded-lg text-sm font-bold mb-4 border border-gold-500/20">
          <Clock className="w-4 h-4 text-gold-600" />
          <span>{service.time}</span>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {service.description}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <MapPin className="w-3.5 h-3.5 text-gold-500" />
          <span>{service.location}</span>
        </div>

        <button
          onClick={onPlanVisit}
          className="text-xs font-bold text-royal-700 hover:text-royal-900 group-hover:underline flex items-center gap-1"
        >
          Plan Visit &rarr;
        </button>
      </div>
    </div>
  );
}
