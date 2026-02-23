import React from 'react';
import { Link } from 'react-router-dom';

const colorMap = {
  blue:    { icon: 'bg-blue-50 text-blue-600',    badge: 'bg-blue-50 text-blue-700 border-blue-200',    top: 'border-t-blue-600',    hover: 'hover:border-blue-200',    btn: 'text-blue-600 hover:bg-blue-600' },
  violet:  { icon: 'bg-violet-50 text-violet-600', badge: 'bg-violet-50 text-violet-700 border-violet-200', top: 'border-t-violet-600', hover: 'hover:border-violet-200', btn: 'text-violet-600 hover:bg-violet-600' },
  amber:   { icon: 'bg-amber-50 text-amber-600',   badge: 'bg-amber-50 text-amber-700 border-amber-200',   top: 'border-t-amber-600',   hover: 'hover:border-amber-200',   btn: 'text-amber-600 hover:bg-amber-600' },
  rose:    { icon: 'bg-rose-50 text-rose-600',     badge: 'bg-rose-50 text-rose-700 border-rose-200',     top: 'border-t-rose-600',     hover: 'hover:border-rose-200',     btn: 'text-rose-600 hover:bg-rose-600' },
  slate:   { icon: 'bg-slate-100 text-slate-600',  badge: 'bg-slate-50 text-slate-700 border-slate-200',  top: 'border-t-slate-500',   hover: 'hover:border-slate-200',   btn: 'text-slate-600 hover:bg-slate-600' },
  emerald: { icon: 'bg-emerald-50 text-emerald-600',badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',top: 'border-t-emerald-600',hover: 'hover:border-emerald-200',btn: 'text-emerald-600 hover:bg-emerald-600' },
  orange:  { icon: 'bg-orange-50 text-orange-600', badge: 'bg-orange-50 text-orange-700 border-orange-200', top: 'border-t-orange-600', hover: 'hover:border-orange-200', btn: 'text-orange-600 hover:bg-orange-600' },
  teal:    { icon: 'bg-teal-50 text-teal-600',     badge: 'bg-teal-50 text-teal-700 border-teal-200',     top: 'border-t-teal-600',     hover: 'hover:border-teal-200',     btn: 'text-teal-600 hover:bg-teal-600' },
};

const svgIcons = {
  "trading-import-export": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
    </svg>
  ),
  "technology-startups": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  "financial-services": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  "ecommerce-retail": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  ),
  "professional-consulting": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  "logistics-supply-chain": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2M8 4v4h8V4M8 4h8" />
    </svg>
  ),
  "hospitality-tourism": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  "real-estate-property": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
};

const IndustryCard = ({ industry, index = 0 }) => {
  const c = colorMap[industry.color] || colorMap.slate;

  return (
    <Link
      to={`/industries/${industry.id}`}
      className={`
        group bg-white border border-slate-200 border-t-4 ${c.top}
        rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1.5
        transition-all duration-300 flex flex-col overflow-hidden
      `}
    >
      {/* Card body */}
      <div className="p-7 flex-1 flex flex-col">

        {/* Icon + badge row */}
        <div className="flex items-start justify-between mb-5">
          <div className={`w-12 h-12 rounded-xl ${c.icon} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
            {svgIcons[industry.id]}
          </div>
          <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm border ${c.badge}`}>
            {industry.stats.companies} cos.
          </span>
        </div>

        {/* Name & tagline */}
        <h3 className="text-slate-900 text-lg font-semibold leading-snug mb-2 font-serif group-hover:text-slate-700 transition-colors">
          {industry.label}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">
          {industry.description.slice(0, 120)}...
        </p>

        {/* Key benefits (top 3) */}
        <ul className="space-y-2 mb-6">
          {industry.benefits.slice(0, 3).map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
              <svg className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${c.icon.split(' ')[1]}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {b}
            </li>
          ))}
        </ul>

        {/* Stats row */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100 mb-5">
          <div>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-0.5">Growth</p>
            <p className={`text-base font-bold ${c.icon.split(' ')[1]}`}>{industry.stats.growth}</p>
          </div>
          <div>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-0.5">Avg. Setup</p>
            <p className="text-base font-bold text-slate-800">{industry.stats.avgSetup}</p>
          </div>
        </div>
      </div>

      {/* Card footer CTA */}
      <div className={`px-7 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between`}>
        <span className={`text-xs font-bold uppercase tracking-widest ${c.icon.split(' ')[1]} transition-colors`}>
          Explore Industry
        </span>
        <div className={`w-8 h-8 rounded-full border ${c.icon.split(' ')[1].replace('text-', 'border-').replace('600', '200')} flex items-center justify-center group-hover:bg-current transition-all duration-300`}>
          <svg className={`w-3.5 h-3.5 ${c.icon.split(' ')[1]} group-hover:translate-x-0.5 transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default IndustryCard;
export { svgIcons, colorMap };