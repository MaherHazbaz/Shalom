import React from 'react';

export default function SectionTitle({
  badge,
  title,
  subtitle,
  centered = true,
  className = ''
}) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-3.5 transition-all duration-300 bg-gold-500/10 text-gold-800 border border-gold-500/25">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-600 animate-pulse"></span>
          {badge}
        </div>
      )}

      {title && (
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight leading-tight mb-4 text-slate-900">
          {title}
        </h2>
      )}

      {/* Decorative Gold Accent Divider */}
      <div className={`flex items-center gap-3 my-4 ${centered ? 'justify-center' : 'justify-start'}`}>
        <div className="h-[2px] w-12 bg-gold-500/50"></div>
        <div className="w-2 h-2 rotate-45 bg-gold-600"></div>
        <div className="h-[2px] w-12 bg-gold-500/50"></div>
      </div>

      {subtitle && (
        <p className={`max-w-2xl text-base md:text-lg leading-relaxed text-slate-600 ${
          centered ? 'mx-auto' : ''
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
