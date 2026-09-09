import React from 'react';
import { Play, Calendar, User, Clock, BookOpen } from 'lucide-react';

export default function SermonCard({ sermon, onPlay }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-100 hover:border-gold-500/30 transition-all duration-300 flex flex-col justify-between group">
      
      {/* Media Thumbnail with Play Overlay */}
      <div className="relative aspect-video overflow-hidden bg-navy-950 cursor-pointer" onClick={() => onPlay(sermon)}>
        <img
          src={sermon.image}
          alt={sermon.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy-950/40 group-hover:bg-navy-950/20 transition-colors flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
            <Play className="w-6 h-6 fill-navy-950 ml-1" />
          </div>
        </div>

        {/* Category Badge */}
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-navy-950/85 text-gold-300 border border-gold-500/20 backdrop-blur-sm">
          {sermon.category}
        </span>

        {/* Duration */}
        <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded text-[10px] font-semibold bg-black/75 text-white flex items-center gap-1 backdrop-blur-sm">
          <Clock className="w-3 h-3" />
          {sermon.duration}
        </span>
      </div>

      {/* Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-gold-600" />
              {sermon.date}
            </span>
            <span>&bull;</span>
            <span className="text-royal-700 font-semibold truncate">{sermon.series}</span>
          </div>

          <h3 
            className="text-lg font-serif font-bold text-navy-900 group-hover:text-gold-700 transition-colors mb-2 line-clamp-2 cursor-pointer"
            onClick={() => onPlay(sermon)}
          >
            {sermon.title}
          </h3>

          <p className="text-xs text-slate-500 flex items-center gap-1.5 mb-3">
            <User className="w-3.5 h-3.5 text-slate-400" />
            <span>{sermon.speaker}</span>
          </p>

          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {sermon.description}
          </p>
        </div>

        {/* Footer */}
        <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[11px] text-slate-500 font-mono flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5 text-gold-600" />
            <span className="truncate max-w-[170px]">{sermon.scripture}</span>
          </span>

          <button
            onClick={() => onPlay(sermon)}
            className="text-xs font-bold text-navy-900 hover:text-gold-600 flex items-center gap-1 transition-colors"
          >
            <span>Watch / Listen</span>
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
