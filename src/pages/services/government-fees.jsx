import React from 'react';
import ServiceSection from '../../components/services/ServiceSection';
import ServiceCard from '../../components/services/ServiceCard';
import { serviceData } from '../../components/services/data';

const GovernmentFeesPage = () => {
  return (
    <ServiceSection
      title="Government Fees"
      subtitle="Mandatory fees paid directly to the Hong Kong government authorities — a fixed, non-negotiable cost of incorporation."
      breadcrumb={["Government Fees"]}
      ctaText="Start Incorporation"
      heroBgImage="https://plus.unsplash.com/premium_photo-1661964011313-124f788fcb65?q=80&w=2070&auto=format&fit=crop"
    >

      {/* Alert Banner */}
      <div className="bg-red-50 border border-red-200 border-l-4 border-l-red-600 p-6 mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p className="text-red-700 text-[10px] uppercase tracking-[0.18em] font-bold mb-1.5">Mandatory Government Payment</p>
          <h3 className="text-slate-900 text-xl font-semibold font-serif mb-1.5">Total Basic Government Fees: HK$3,745</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            These fees must be paid to legally incorporate your company — entirely separate from any service provider or agent fees.
          </p>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="text-red-600 text-4xl font-bold tracking-tight leading-none">HK$3,745</div>
          <p className="text-slate-400 text-xs mt-1">Minimum Required</p>
        </div>
      </div>

      {/* Fees Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {serviceData.mandatoryFees.map(fee => (
          <ServiceCard key={fee.id} service={fee} type="mandatory" />
        ))}
      </div>

      {/* Important Notes */}
      <div className="bg-white border border-slate-200 p-9 mb-10 rounded-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-px bg-yellow-600" />
          <h3 className="text-slate-900 text-lg font-semibold font-serif">Important Notes</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: '⚖️', text: 'These fees are mandatory and cannot be avoided or negotiated.' },
            { icon: '🏛️', text: 'Paid directly to Companies Registry and Inland Revenue Department.' },
            { icon: '🔒', text: 'Completely separate from any service provider charges.' },
            { icon: '⚡', text: 'Electronic registration typically takes 1–2 working days.' },
          ].map((note, i) => (
            <div key={i} className="flex items-start gap-3 bg-stone-50 p-4 rounded-sm">
              <span className="text-lg flex-shrink-0">{note.icon}</span>
              <p className="text-slate-600 text-sm leading-relaxed">{note.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-slate-950 border-t-4 border-yellow-600 p-10 rounded-sm">
        <p className="text-yellow-600 text-[10px] uppercase tracking-[0.2em] font-semibold mb-2">After Incorporation</p>
        <h3 className="text-white text-2xl font-serif font-normal mb-8">Next Steps After Paying Government Fees</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { step: '01', title: 'Company Secretary', desc: 'Appoint a Company Secretary within 6 months — a legal requirement for all HK companies.' },
            { step: '02', title: 'Business Address', desc: 'Register a local Hong Kong address for official government correspondence.' },
            { step: '03', title: 'Bank Account', desc: 'Open a corporate bank account to begin commercial operations.' },
          ].map((item) => (
            <div key={item.step} className="border-t border-yellow-600/30 pt-5">
              <div className="text-yellow-600 text-[11px] tracking-widest font-bold mb-2">Step {item.step}</div>
              <h4 className="text-white text-base font-semibold font-serif mb-2">{item.title}</h4>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </ServiceSection>
  );
};

export default GovernmentFeesPage;