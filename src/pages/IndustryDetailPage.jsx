import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { industries } from '../components/industries/industryData';
import { svgIcons, colorMap } from '../components/industries/IndustryCard';
import IndustryCTA from '../components/industries/IndustryCTA';

const IndustryDetailPage = () => {
  const { id } = useParams();
  const industry = industries.find((ind) => ind.id === id);

  if (!industry) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-400 text-lg mb-4">Industry not found.</p>
          <Link to="/industries" className="text-blue-600 hover:underline font-semibold">← Back to Industries</Link>
        </div>
      </div>
    );
  }

  const c = colorMap[industry.color] || colorMap.slate;

  return (
    <div className="min-h-screen bg-stone-50">

      {/* ── Hero ── */}
      <div
        className="relative overflow-hidden min-h-[480px] flex items-center bg-slate-950 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-slate-950/85" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-700/30 to-transparent" />

        <div className="relative z-10 w-full px-6 sm:px-12 md:px-20 py-24">
          <div className="max-w-5xl mx-auto">

            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 mb-8">
              <Link to="/" className="text-yellow-600/60 hover:text-yellow-500 text-xs uppercase tracking-widest transition-colors">Home</Link>
              <span className="text-white/20 text-xs">›</span>
              <Link to="/industries" className="text-yellow-600/60 hover:text-yellow-500 text-xs uppercase tracking-widest transition-colors">Industries</Link>
              <span className="text-white/20 text-xs">›</span>
              <span className="text-yellow-500 text-xs uppercase tracking-widest">{industry.label}</span>
            </nav>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-yellow-600" />
              <span className="text-yellow-600 text-xs uppercase tracking-[0.2em] font-semibold">Industry Guide</span>
            </div>

            {/* Icon + title */}
            <div className="flex items-start gap-5 mb-5">
              <div className={`w-14 h-14 rounded-2xl ${c.icon} flex items-center justify-center flex-shrink-0`}>
                {svgIcons[industry.id]}
              </div>
              <div>
                <h1 className="text-3xl md:text-5xl font-serif font-normal text-white leading-tight">
                  {industry.label}
                </h1>
                <p className="text-yellow-400/80 text-base mt-1 italic">{industry.tagline}</p>
              </div>
            </div>

            <p className="text-white/65 text-base leading-relaxed max-w-2xl mb-8">
              {industry.description}
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Companies', value: industry.stats.companies },
                { label: 'Annual Growth', value: industry.stats.growth },
                { label: 'Avg Setup', value: industry.stats.avgSetup },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/8 border border-white/12 rounded-full px-5 py-2.5">
                  <span className="text-yellow-400 font-bold text-sm">{s.value}</span>
                  <span className="text-white/45 text-xs">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left: main content */}
          <div className="lg:col-span-2 space-y-10">

            {/* Benefits */}
            <div className="bg-white border border-slate-200 border-t-4 border-t-yellow-600 rounded-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-yellow-600" />
                <h2 className="text-slate-900 text-xl font-serif font-semibold">Key Benefits</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industry.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3 bg-stone-50 border border-slate-100 rounded-sm p-4">
                    <div className={`w-7 h-7 rounded-lg ${c.icon} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed font-medium">{b}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white border border-slate-200 rounded-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-yellow-600" />
                <h2 className="text-slate-900 text-xl font-serif font-semibold">Setup Requirements</h2>
              </div>
              <div className="space-y-3">
                {industry.requirements.map((r, i) => (
                  <div key={i} className="flex items-center gap-4 py-3 border-b border-slate-50 last:border-0">
                    <span className={`w-6 h-6 rounded-full ${c.icon} flex items-center justify-center flex-shrink-0 text-[10px] font-bold`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-slate-700 text-sm">{r}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white border border-slate-200 rounded-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-yellow-600" />
                <h2 className="text-slate-900 text-xl font-serif font-semibold">Frequently Asked</h2>
              </div>
              <div className="space-y-5">
                {industry.faqs.map((faq, i) => (
                  <div key={i} className="border-l-2 border-yellow-600 pl-5">
                    <p className="text-slate-900 font-semibold text-sm mb-2">{faq.q}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="space-y-6">

            {/* Recommended services */}
            <div className="bg-slate-950 border-t-4 border-yellow-600 rounded-sm p-6">
              <p className="text-yellow-600 text-[10px] uppercase tracking-[0.2em] font-bold mb-1">Recommended For You</p>
              <h3 className="text-white text-lg font-serif font-normal mb-5">Relevant Services</h3>
              <div className="space-y-2">
                {industry.services.map((s, i) => (
                  <div key={i} className="flex items-center justify-between py-2.5 border-b border-white/8 last:border-0">
                    <span className="text-white/70 text-sm">{s}</span>
                    <svg className="w-4 h-4 text-yellow-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                ))}
              </div>
              <Link
                to="/services"
                className="mt-6 flex items-center justify-center gap-2 w-full py-3 bg-yellow-600 hover:bg-yellow-700 text-slate-950 font-bold text-xs uppercase tracking-widest transition-all hover:-translate-y-0.5"
              >
                All Services →
              </Link>
            </div>

            {/* Contact card */}
            <div className="bg-white border border-slate-200 rounded-sm p-6">
              <p className="text-slate-400 text-[10px] uppercase tracking-widest font-semibold mb-2">Free Consultation</p>
              <h3 className="text-slate-900 text-lg font-serif mb-3">Speak to an Expert</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                Not sure which services you need? Our specialists will guide you through the ideal setup for your {industry.label.toLowerCase()} business.
              </p>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 w-full py-3 border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold text-xs uppercase tracking-widest transition-all duration-200"
              >
                Book a Consultation
              </Link>
            </div>

            {/* Other industries */}
            <div className="bg-white border border-slate-200 rounded-sm p-6">
              <p className="text-slate-400 text-[10px] uppercase tracking-widest font-semibold mb-4">Other Industries</p>
              <div className="space-y-1">
                {industries
                  .filter((ind) => ind.id !== id)
                  .slice(0, 5)
                  .map((ind) => (
                    <Link
                      key={ind.id}
                      to={`/industries/${ind.id}`}
                      className="flex items-center justify-between py-2.5 px-3 rounded-sm hover:bg-stone-50 transition-colors group"
                    >
                      <span className="text-slate-700 text-sm group-hover:text-blue-600 transition-colors">{ind.label}</span>
                      <svg className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                <Link to="/industries" className="block text-center text-blue-600 hover:text-blue-700 text-xs font-semibold pt-3">
                  View all industries →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      <IndustryCTA />
    </div>
  );
};

export default IndustryDetailPage;