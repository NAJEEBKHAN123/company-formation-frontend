import React from 'react';
import { industryStats, whyHongKong } from './industryData';

const IndustryStats = () => {
  return (
    <div className="bg-white">

      {/* ── HK Stats Bar ── */}
      <div className="bg-slate-950 border-t-4 border-yellow-600">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {industryStats.map((stat, i) => (
              <div key={i} className={`text-center ${i < 3 ? 'lg:border-r lg:border-white/10' : ''}`}>
                <p className="text-yellow-500 text-3xl md:text-4xl font-bold tracking-tight leading-none mb-2">
                  {stat.value}
                </p>
                <p className="text-white text-sm font-semibold mb-1">{stat.label}</p>
                <p className="text-white/40 text-xs">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Why Hong Kong Section ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-20">
        <div className="flex flex-col lg:flex-row lg:items-start gap-12">

          {/* Left label column */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-yellow-600" />
              <p className="text-slate-400 text-[11px] uppercase tracking-[0.18em] font-semibold">The Advantage</p>
            </div>
            <h2 className="text-slate-900 text-3xl font-serif font-normal leading-tight mb-4">
              Why Hong Kong?
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Hong Kong's unique combination of low taxes, rule of law, free trade, and China access makes it unmatched as Asia's premier business hub.
            </p>
          </div>

          {/* Right grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyHongKong.map((item, i) => (
              <div
                key={i}
                className="bg-stone-50 border border-slate-100 rounded-sm p-6 hover:bg-white hover:border-slate-200 hover:shadow-md transition-all duration-300 group"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h4 className="text-slate-900 font-semibold font-serif text-base mb-2 group-hover:text-slate-700">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default IndustryStats;