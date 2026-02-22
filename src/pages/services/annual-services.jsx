import React, { useState } from 'react';
import ServiceSection from '../../components/services/ServiceSection';
import ServiceCard from '../../components/services/ServiceCard';
import { serviceData } from '../../components/services/data';

const AnnualServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = selectedCategory === 'all'
    ? serviceData.annualServices
    : serviceData.annualServices.filter(s =>
        selectedCategory === 'mandatory' ? s.note?.includes('Required') : !s.note?.includes('Required')
      );

  const tabs = [
    { key: 'all', label: 'All Services' },
    { key: 'mandatory', label: 'Mandatory' },
    { key: 'optional', label: 'Optional' },
  ];

  return (
    <ServiceSection
      title="Annual Services"
      subtitle="Ongoing compliance, accounting, and maintenance to keep your Hong Kong company in good legal standing year after year."
      breadcrumb={["Annual Services"]}
      ctaText="Get Annual Support"
      heroBgImage="https://images.unsplash.com/photo-1566033615552-053315feb433?q=80&w=870&auto=format&fit=crop"
    >

      {/* Filter Tabs */}
      <div className="mb-8">
        <div className="flex gap-1 bg-white border border-slate-200 p-1 w-fit rounded-sm mb-5">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setSelectedCategory(tab.key)}
              className={`px-5 py-2 text-[11px] font-bold uppercase tracking-widest transition-all duration-200 rounded-sm ${
                selectedCategory === tab.key
                  ? 'bg-slate-950 text-yellow-500'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {selectedCategory === 'mandatory' && (
          <div className="bg-red-50 border border-red-200 border-l-4 border-l-red-600 px-4 py-3 text-red-700 text-sm font-medium rounded-sm">
            ⚖️ &nbsp;Mandatory services are required by Hong Kong law for all active companies.
          </div>
        )}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filteredServices.map(service => (
          <ServiceCard key={service.id} service={service} type="annual" />
        ))}
      </div>

      {/* Compliance Timeline */}
      <div className="bg-white border border-slate-200 p-9 mb-8 rounded-sm">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-px bg-yellow-600" />
          <h3 className="text-slate-900 text-lg font-semibold font-serif">Annual Compliance Timeline</h3>
        </div>
        <div className="space-y-0">
          {[
            {
              num: '01', color: 'bg-blue-600',
              title: 'Company Secretary & Registered Address',
              desc: 'Required throughout the year. Both must be maintained continuously — renewal is typically annual.',
            },
            {
              num: '02', color: 'bg-emerald-600',
              title: 'Annual Return Filing',
              desc: 'Due on your company incorporation anniversary date each year. Filed with the Companies Registry.',
            },
            {
              num: '03', color: 'bg-yellow-600',
              title: 'Audit & Tax Filing',
              desc: 'Typically due 9 months after your financial year end. Required by law for all active companies.',
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-5 pb-8 relative last:pb-0">
              {i < 2 && <div className="absolute left-5 top-10 bottom-0 w-px bg-slate-100" />}
              <div className={`w-10 h-10 rounded-full ${item.color} text-white text-xs font-bold flex items-center justify-center flex-shrink-0 z-10`}>
                {item.num}
              </div>
              <div className="pt-2">
                <h4 className="text-slate-900 font-semibold font-serif mb-1.5">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bundle Banner */}
      <div className="bg-slate-950 border-t-4 border-yellow-600 p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 rounded-sm">
        <div>
          <p className="text-yellow-600 text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Save 15%</p>
          <h3 className="text-white text-2xl font-serif font-normal mb-2">Annual Compliance Bundle</h3>
          <p className="text-white/50 text-sm">Bundle all annual services together and save 15% on the combined cost.</p>
        </div>
        <div className="flex-shrink-0 text-right">
          <div className="text-yellow-500 text-3xl font-bold tracking-tight leading-none mb-3">From HK$12,000/yr</div>
          <button className="bg-yellow-600 hover:bg-yellow-700 text-slate-950 font-bold text-xs uppercase tracking-widest px-7 py-3.5 transition-all hover:-translate-y-0.5">
            Get Bundle Quote
          </button>
        </div>
      </div>

    </ServiceSection>
  );
};

export default AnnualServicesPage;