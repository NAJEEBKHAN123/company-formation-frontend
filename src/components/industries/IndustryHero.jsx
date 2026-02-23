import React from 'react';
import { Link } from 'react-router-dom';

const IndustryHero = () => {
  return (
    <div
      className="relative overflow-hidden min-h-[540px] flex items-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop')`,
      }}
    >
      {/* Layered overlay */}
      <div className="absolute inset-0 bg-slate-950/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-transparent" />

      {/* Gold top rule */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-700/30 to-transparent" />

      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Corner ornament */}
      <div className="absolute top-8 right-8 opacity-10 hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <rect x="1" y="1" width="118" height="118" stroke="#CA8A04" strokeWidth="1"/>
          <rect x="14" y="14" width="92" height="92" stroke="#CA8A04" strokeWidth="0.5"/>
          <circle cx="60" cy="60" r="30" stroke="#CA8A04" strokeWidth="0.5"/>
        </svg>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-12 md:px-16 py-28">
        <div className="max-w-5xl mx-auto">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-8">
            <Link to="/" className="text-yellow-600/60 hover:text-yellow-500 text-xs uppercase tracking-widest transition-colors">Home</Link>
            <span className="text-white/20 text-xs">›</span>
            <span className="text-yellow-500 text-xs uppercase tracking-widest">Industries</span>
          </nav>

          {/* Gold rule + label */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-yellow-600" />
            <span className="text-yellow-600 text-xs uppercase tracking-[0.2em] font-semibold">Hong Kong Business Sectors</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-white leading-tight mb-6">
            Industries We<br />
            <span className="italic text-yellow-400">Serve</span>
          </h1>

          <p className="text-lg text-white/65 max-w-2xl leading-relaxed font-light mb-10">
            From fintech to logistics, trading to technology — we help businesses across every sector establish and grow their Hong Kong presence with precision and confidence.
          </p>

          {/* Stat pills */}
          <div className="flex flex-wrap gap-3">
            {[
              { value: '8 Sectors', label: 'Covered' },
              { value: '1.3M+', label: 'Companies in HK' },
              { value: '16.5%', label: 'Max Corp Tax' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/8 backdrop-blur-sm border border-white/12 rounded-full px-5 py-2.5">
                <span className="text-yellow-400 font-bold text-sm">{stat.value}</span>
                <span className="text-white/50 text-xs">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryHero;