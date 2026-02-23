import React from 'react';
import { Link } from 'react-router-dom';

const IndustryCTA = () => {
  return (
    <div className="bg-stone-50 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 md:px-16">

        {/* Main CTA block */}
        <div className="bg-slate-950 border-t-4 border-yellow-600 rounded-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left: text */}
            <div className="px-10 py-14 lg:px-14 lg:py-16">
              <p className="text-yellow-600 text-[10px] uppercase tracking-[0.22em] font-bold mb-3">
                Ready to Incorporate?
              </p>
              <h2 className="text-white text-3xl md:text-4xl font-serif font-normal leading-tight mb-4">
                Start Your Hong Kong<br />
                <span className="text-yellow-400 italic">Company Today</span>
              </h2>
              <p className="text-white/55 text-sm leading-relaxed mb-8 max-w-md">
                Whatever your industry, our team of Hong Kong incorporation specialists will guide you through every step — from registration to banking to annual compliance.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/services/packages"
                  className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-slate-950 font-bold text-xs uppercase tracking-widest px-7 py-4 transition-all hover:-translate-y-0.5"
                >
                  View Packages
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-semibold text-xs uppercase tracking-widest px-7 py-4 transition-all"
                >
                  Free Consultation
                </Link>
              </div>
            </div>

            {/* Right: process steps */}
            <div className="bg-white/4 border-l border-white/8 px-10 py-14 lg:px-12 lg:py-16">
              <p className="text-yellow-600 text-[10px] uppercase tracking-[0.2em] font-bold mb-6">
                How It Works
              </p>
              <div className="space-y-0">
                {[
                  { step: '01', title: 'Choose Your Package', desc: 'Select from Basic, Standard, or Premium — or build a custom solution.' },
                  { step: '02', title: 'Submit Documents', desc: 'We handle all filings with the Companies Registry and IRD.' },
                  { step: '03', title: 'Receive Your Certificate', desc: 'Your Certificate of Incorporation is issued in 3–5 working days.' },
                  { step: '04', title: 'Ongoing Support', desc: 'Annual compliance, banking, and secretarial handled end-to-end.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 pb-7 relative last:pb-0">
                    {i < 3 && <div className="absolute left-[18px] top-9 bottom-0 w-px bg-white/10" />}
                    <div className="w-9 h-9 rounded-full border border-yellow-600/40 flex items-center justify-center flex-shrink-0 z-10 bg-slate-950">
                      <span className="text-yellow-500 text-[11px] font-bold">{item.step}</span>
                    </div>
                    <div className="pt-1.5">
                      <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                      <p className="text-white/45 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick service links below */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
          {[
            { label: 'Government Fees', to: '/services/government-fees', color: 'border-l-rose-500' },
            { label: 'Packages',        to: '/services/packages',         color: 'border-l-amber-500' },
            { label: 'Annual Services', to: '/services/annual-services',  color: 'border-l-blue-500' },
            { label: 'One-off Services',to: '/services/one-off-services', color: 'border-l-emerald-500' },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`bg-white border border-slate-200 border-l-4 ${link.color} px-5 py-4 rounded-sm hover:shadow-md hover:translate-x-1 transition-all duration-200 group`}
            >
              <p className="text-slate-800 font-semibold text-sm font-serif">{link.label}</p>
              <p className="text-blue-600 text-xs mt-0.5 group-hover:translate-x-0.5 transition-transform">Learn more →</p>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default IndustryCTA;