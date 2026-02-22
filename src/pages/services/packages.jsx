import React from 'react';
import ServiceSection from '../../components/services/ServiceSection';
import PackageCard from '../../components/services/PackageCard';
import { serviceData } from '../../components/services/data';

const tableFeatures = [
  { label: "Government Fees Payment",          basic: true,  standard: true,  premium: true  },
  { label: "Document Preparation",             basic: true,  standard: true,  premium: true  },
  { label: "Certificate of Incorporation",     basic: true,  standard: true,  premium: true  },
  { label: "Company Secretary (1st Year)",     basic: false, standard: true,  premium: true  },
  { label: "Registered Office Address (1st Yr)",basic: false, standard: true,  premium: true  },
  { label: "Priority Processing",              basic: false, standard: true,  premium: true  },
  { label: "Bank Account Assistance",          basic: false, standard: false, premium: true  },
  { label: "Company Seals & Chops",            basic: false, standard: false, premium: true  },
  { label: "Virtual Office Setup (3 months)",  basic: false, standard: false, premium: true  },
  { label: "Dedicated Account Manager",        basic: false, standard: false, premium: true  },
];

const PackagesPage = () => {
  const handlePackageSelect = (pkg) => {
    alert(`You selected the ${pkg.name} package! Redirecting to contact form...`);
  };

  return (
    <ServiceSection
      title="Incorporation Packages"
      subtitle="All-in-one solutions engineered for different business needs — from essential setup to a complete corporate infrastructure."
      breadcrumb={["Packages"]}
      ctaText="Customize Package"
      heroBgImage="https://images.unsplash.com/photo-1597763594938-fa022d4846a9?q=80&w=870&auto=format&fit=crop"
    >

      {/* Package Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start mb-20">
        {serviceData.packages.map(pkg => (
          <PackageCard
            key={pkg.id}
            package={pkg}
            isRecommended={pkg.recommended}
            onSelect={handlePackageSelect}
          />
        ))}
      </div>

      {/* Comparison Table */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-px bg-yellow-600" />
          <h3 className="text-slate-900 text-lg font-semibold font-serif">Package Comparison</h3>
        </div>
        <div className="overflow-x-auto bg-white border border-slate-200 rounded-sm">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-slate-100">
                <th className="p-5 text-left text-[11px] text-slate-400 uppercase tracking-widest font-semibold w-[40%]">Feature</th>
                <th className="p-5 text-center text-[11px] text-slate-700 uppercase tracking-widest font-bold">Basic</th>
                <th className="p-5 text-center text-[11px] text-yellow-600 uppercase tracking-widest font-bold bg-slate-950">Standard</th>
                <th className="p-5 text-center text-[11px] text-slate-700 uppercase tracking-widest font-bold">Premium</th>
              </tr>
            </thead>
            <tbody>
              {tableFeatures.map((row, i) => (
                <tr key={i} className={`border-b border-slate-50 ${i % 2 === 0 ? 'bg-white' : 'bg-stone-50'}`}>
                  <td className="p-4 text-sm text-slate-600 font-medium">{row.label}</td>
                  <td className="p-4 text-center">
                    {row.basic
                      ? <span className="text-emerald-600 font-bold text-base">✓</span>
                      : <span className="text-slate-300 text-base">—</span>}
                  </td>
                  <td className="p-4 text-center bg-slate-950/[0.03]">
                    {row.standard
                      ? <span className="text-yellow-600 font-bold text-base">✓</span>
                      : <span className="text-slate-300 text-base">—</span>}
                  </td>
                  <td className="p-4 text-center">
                    {row.premium
                      ? <span className="text-emerald-600 font-bold text-base">✓</span>
                      : <span className="text-slate-300 text-base">—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Why Us */}
      <div className="bg-slate-950 border-t-4 border-yellow-600 p-10 rounded-sm">
        <p className="text-yellow-600 text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Why Choose Us</p>
        <h3 className="text-white text-2xl font-serif font-normal mb-8">What Sets Our Packages Apart</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: '🏆', title: 'Expert Team',         desc: 'Licensed professionals with deep HK regulatory knowledge.' },
            { icon: '⚡', title: 'Fast Processing',     desc: 'Incorporation completed in as little as 3–5 working days.' },
            { icon: '🛡️', title: 'Full Compliance',    desc: '100% aligned with Companies Ordinance requirements.' },
            { icon: '💰', title: 'No Hidden Fees',      desc: 'Transparent, all-inclusive pricing with no surprises.' },
          ].map((item, i) => (
            <div key={i} className="border-t border-yellow-600/25 pt-5">
              <div className="text-2xl mb-3">{item.icon}</div>
              <h4 className="text-white font-semibold font-serif mb-2">{item.title}</h4>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </ServiceSection>
  );
};

export default PackagesPage;