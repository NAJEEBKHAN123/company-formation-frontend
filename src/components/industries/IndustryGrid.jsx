import React, { useState } from 'react';
import IndustryCard from './IndustryCard';
import { industries } from './industryData';

const filters = ['All', 'Trading', 'Finance', 'Technology', 'Services', 'Other'];

const filterMap = {
  'All': () => true,
  'Trading': (i) => ['trading-import-export', 'ecommerce-retail', 'logistics-supply-chain'].includes(i.id),
  'Finance': (i) => ['financial-services', 'real-estate-property'].includes(i.id),
  'Technology': (i) => ['technology-startups'].includes(i.id),
  'Services': (i) => ['professional-consulting', 'hospitality-tourism'].includes(i.id),
  'Other': (i) => ['logistics-supply-chain'].includes(i.id),
};

const IndustryGrid = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = industries.filter(filterMap[activeFilter] || (() => true));

  return (
    <div className="bg-stone-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 md:px-16">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-px bg-yellow-600" />
              <p className="text-slate-400 text-[11px] uppercase tracking-[0.18em] font-semibold">All Sectors</p>
            </div>
            <h2 className="text-slate-900 text-3xl font-serif font-normal leading-tight">
              Choose Your Industry
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-1 bg-white border border-slate-200 p-1 rounded-sm flex-wrap">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 text-[11px] font-bold uppercase tracking-widest rounded-sm transition-all duration-200 ${
                  activeFilter === f
                    ? 'bg-slate-950 text-yellow-500'
                    : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((industry, i) => (
            <IndustryCard key={industry.id} industry={industry} index={i} />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-sm">No industries match this filter.</p>
          </div>
        )}

        {/* Bottom note */}
        <p className="text-center text-slate-400 text-xs mt-8 tracking-wide">
          Don't see your industry? <a href="/contact" className="text-blue-600 hover:underline font-semibold">Contact us</a> — we serve all business types in Hong Kong.
        </p>
      </div>
    </div>
  );
};

export default IndustryGrid;