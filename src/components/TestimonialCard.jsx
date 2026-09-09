import React from 'react';
import { Quote, Heart } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-2xl p-7 sm:p-8 shadow-lg shadow-slate-200/50 border border-slate-100 flex flex-col justify-between relative group hover:border-gold-500/40 transition-all duration-300">
      
      {/* Decorative Quote Icon */}
      <div className="absolute top-6 right-6 text-gold-500/20 group-hover:text-gold-500/40 transition-colors">
        <Quote className="w-10 h-10" />
      </div>

      <div className="relative z-10 mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-gold-500/10 text-gold-700 border border-gold-500/20 mb-4">
          <Heart className="w-3 h-3 fill-gold-500 text-gold-600" />
          {testimonial.scriptureTag}
        </div>

        <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
          "{testimonial.quote}"
        </p>
      </div>

      {/* Member Profile */}
      <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-gold-500/40 shadow-sm"
          loading="lazy"
        />
        <div>
          <h4 className="text-base font-serif font-bold text-navy-900 leading-tight">
            {testimonial.name}
          </h4>
          <p className="text-xs text-slate-500 mt-0.5">
            {testimonial.role}
          </p>
        </div>
      </div>

    </div>
  );
}
