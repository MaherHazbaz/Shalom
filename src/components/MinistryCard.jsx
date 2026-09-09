import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Music, 
  Flame, 
  Sparkles, 
  HeartHandshake, 
  Shield, 
  HandHeart, 
  Users, 
  Globe, 
  ArrowRight 
} from 'lucide-react';

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

export default function MinistryCard({ ministry, onSelect }) {
  const IconComponent = ICON_MAP[ministry.icon] || Sparkles;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-100 hover:border-gold-500/30 transition-all duration-300 flex flex-col justify-between group">
      
      {/* Top Image Banner */}
      <div className="relative h-44 overflow-hidden bg-navy-900">
        <img 
          src={ministry.image} 
          alt={ministry.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>

        {/* Floating Category Tag */}
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold bg-navy-950/80 text-gold-300 border border-gold-500/20 backdrop-blur-sm">
          {ministry.category}
        </span>

        {/* Floating Icon */}
        <div className="absolute -bottom-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-tr from-navy-900 to-navy-800 border-2 border-gold-500 flex items-center justify-center text-gold-400 shadow-lg group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all duration-300">
          <IconComponent className="w-6 h-6" />
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 pt-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-serif font-bold text-navy-900 group-hover:text-gold-700 transition-colors mb-2">
            {ministry.title}
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
            {ministry.description}
          </p>

          <div className="text-xs text-slate-500 space-y-1 mb-4">
            <p><strong>Meets:</strong> {ministry.schedule}</p>
          </div>
        </div>

        {/* Explore Ministry Link */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <Link
            to="/ministries"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-navy-900 group-hover:text-gold-600 transition-colors"
          >
            <span>Explore Ministry</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform text-gold-600" />
          </Link>

          <span className="text-[11px] text-slate-400 font-medium">
            JSM
          </span>
        </div>
      </div>
    </div>
  );
}
