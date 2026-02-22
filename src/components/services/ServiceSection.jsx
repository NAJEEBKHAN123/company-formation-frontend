import React from 'react';
import { Link } from 'react-router-dom';

const ServiceSection = ({
  title,
  subtitle,
  children,
  breadcrumb = [],
  ctaText = "Get Started",
  ctaLink = "/contact",
  heroBgImage = "https://plus.unsplash.com/premium_photo-1661964011313-124f788fcb65?q=80&w=870&auto=format&fit=crop"
}) => {
  return (
    <div className="min-h-screen bg-stone-50">

      {/* Hero */}
      <div
        className="relative overflow-hidden min-h-[520px] flex items-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('${heroBgImage}')` }}
      >
        <div className="absolute inset-0 bg-slate-950/80" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-700/40 to-transparent" />

        {/* Decorative corner SVG */}
        <div className="absolute top-8 right-8 opacity-10 hidden md:block">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <rect x="1" y="1" width="98" height="98" stroke="#CA8A04" strokeWidth="1"/>
            <rect x="12" y="12" width="76" height="76" stroke="#CA8A04" strokeWidth="0.5"/>
          </svg>
        </div>

        <div className="relative z-10 w-full px-6 sm:px-12 md:px-20 py-24 md:py-32">
          <div className="max-w-5xl mx-auto">

            {/* Breadcrumb */}
            {breadcrumb.length > 0 && (
              <nav className="flex items-center gap-2 mb-8">
                <Link to="/" className="text-yellow-600/70 hover:text-yellow-500 text-xs uppercase tracking-widest transition-colors">Home</Link>
                <span className="text-white/20 text-xs">›</span>
                <Link to="/services" className="text-yellow-600/70 hover:text-yellow-500 text-xs uppercase tracking-widest transition-colors">Services</Link>
                {breadcrumb.map((item, i) => (
                  <React.Fragment key={i}>
                    <span className="text-white/20 text-xs">›</span>
                    <span className="text-yellow-500 text-xs uppercase tracking-widest">{item}</span>
                  </React.Fragment>
                ))}
              </nav>
            )}

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-yellow-600" />
              <span className="text-yellow-600 text-xs uppercase tracking-[0.2em] font-semibold">Hong Kong Corporate Services</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-white leading-tight mb-5">
              {title}
            </h1>

            {subtitle && (
              <p className="text-lg text-white/70 max-w-2xl leading-relaxed font-light">
                {subtitle}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-4 mt-10">
              <Link
                to={ctaLink}
                className="inline-flex items-center gap-3 bg-yellow-600 hover:bg-yellow-700 text-slate-950 font-bold text-xs uppercase tracking-widest px-8 py-4 transition-all hover:-translate-y-0.5"
              >
                {ctaText}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link to="/services" className="text-white/50 hover:text-white text-sm tracking-wide transition-colors">
                All Services →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 py-16">
        {children}
      </div>

      {/* Footer CTA */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 pb-20">
        <div className="bg-slate-950 border-t-4 border-yellow-600 p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-yellow-600 text-xs uppercase tracking-[0.2em] font-semibold mb-2">Our Expertise</p>
            <h3 className="text-white text-2xl font-serif font-normal">Explore Our Full Range of Services</h3>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-3 border border-yellow-600/50 text-yellow-600 hover:bg-yellow-600 hover:text-slate-950 text-xs uppercase tracking-widest font-bold px-7 py-4 transition-all whitespace-nowrap"
          >
            View All Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default ServiceSection;