import React from 'react';
import ServiceSection from '../../components/services/ServiceSection';
import ServiceCard from '../../components/services/ServiceCard';
import { serviceData } from '../../components/services/data';

const categories = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: 'Banking Services',
    desc: 'Corporate account opening and banking support.',
    topColor: 'border-t-blue-600',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Legal & IP',
    desc: 'Trademark registration and IP protection.',
    topColor: 'border-t-emerald-600',
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: 'Immigration',
    desc: 'Employment visas and work permit assistance.',
    topColor: 'border-t-violet-600',
    iconColor: 'text-violet-600',
    iconBg: 'bg-violet-50',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Company Changes',
    desc: 'Name changes and formal deregistration.',
    topColor: 'border-t-red-600',
    iconColor: 'text-red-600',
    iconBg: 'bg-red-50',
  },
];

const OneOffServicesPage = () => {
  return (
    <ServiceSection
      title="One-off Services"
      subtitle="Specialist services for specific business milestones — requested as needed, delivered with precision."
      breadcrumb={["One-off Services"]}
      ctaText="Request Service"
      heroBgImage="https://images.unsplash.com/photo-1567164420628-f8e5e96fc3e0?auto=format&fit=crop&w=2340&q=90"
    >

      {/* Categories */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-px bg-yellow-600" />
          <p className="text-slate-400 text-[11px] uppercase tracking-[0.18em] font-semibold">Service Categories</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`bg-white border border-slate-200 border-t-4 ${cat.topColor} p-6 rounded-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            >
              <div className={`w-10 h-10 rounded-lg ${cat.iconBg} ${cat.iconColor} flex items-center justify-center mb-3`}>
                {cat.icon}
              </div>
              <h4 className="text-slate-900 font-semibold font-serif mb-1.5">{cat.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
        {serviceData.oneOffServices.map(service => (
          <ServiceCard key={service.id} service={service} type="oneoff" />
        ))}
      </div>

      {/* Most Requested */}
      <div className="bg-white border border-slate-200 p-9 mb-8 rounded-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-px bg-yellow-600" />
          <h3 className="text-slate-900 text-lg font-semibold font-serif">Most Requested Services</h3>
        </div>
        <div className="space-y-3">
          {serviceData.oneOffServices
            .filter(s => s.id === 101 || s.id === 103)
            .map(service => (
              <div
                key={service.id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-5 bg-stone-50 border-l-4 border-emerald-600 rounded-sm"
              >
                <div>
                  <h4 className="text-slate-900 font-semibold font-serif mb-1">{service.name}</h4>
                  <p className="text-slate-500 text-sm">{service.description}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-emerald-600 text-xl font-bold tracking-tight mb-2">{service.price}</div>
                  <button className="text-emerald-600 border border-emerald-200 hover:bg-emerald-600 hover:text-white text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 transition-all duration-200">
                    Request →
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Custom CTA */}
      <div className="bg-slate-950 border-t-4 border-yellow-600 p-12 text-center rounded-sm">
        <p className="text-yellow-600 text-[10px] uppercase tracking-[0.2em] font-bold mb-3">Bespoke Solutions</p>
        <h3 className="text-white text-3xl font-serif font-normal mb-3">Need a Custom Service?</h3>
        <p className="text-white/50 text-sm max-w-lg mx-auto leading-relaxed mb-8">
          We offer tailored solutions for unique business requirements. Schedule a complimentary consultation to discuss your specific needs.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button className="bg-yellow-600 hover:bg-yellow-700 text-slate-950 font-bold text-xs uppercase tracking-widest px-8 py-4 transition-all hover:-translate-y-0.5">
            Schedule Consultation
          </button>
          <button className="border border-white/20 hover:border-white/50 text-white/60 hover:text-white font-semibold text-xs uppercase tracking-widest px-8 py-4 transition-all">
            Contact Us
          </button>
        </div>
      </div>

    </ServiceSection>
  );
};

export default OneOffServicesPage;