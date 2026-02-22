import React from 'react';
import { Link } from 'react-router-dom';
import ServiceSection from '../../components/services/ServiceSection';
import ServiceCard from '../../components/services/ServiceCard';
import PackageCard from '../../components/services/PackageCard';
import { serviceData } from '../../components/services/data';

const pillars = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    top: 'border-t-blue-600', iconBg: 'bg-blue-50', iconColor: 'text-blue-600',
    title: 'Expert Guidance', desc: 'Licensed professionals navigating the full complexity of HK company law.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    top: 'border-t-red-600', iconBg: 'bg-red-50', iconColor: 'text-red-600',
    title: 'Full Compliance', desc: '100% alignment with Companies Ordinance and Inland Revenue regulations.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    top: 'border-t-emerald-600', iconBg: 'bg-emerald-50', iconColor: 'text-emerald-600',
    title: 'End-to-End Service', desc: 'Everything from initial incorporation to ongoing annual compliance.',
  },
];

const navLinks = [
  { to: '/services/government-fees',  title: 'Government Fees',        desc: 'Mandatory fees paid to government authorities',   leftBorder: 'border-l-red-600',     arrow: 'text-red-600'     },
  { to: '/services/annual-services',  title: 'Annual Services',         desc: 'Yearly compliance and maintenance requirements',  leftBorder: 'border-l-blue-600',    arrow: 'text-blue-600'    },
  { to: '/services/one-off-services', title: 'One-off Services',        desc: 'Specialist services for specific milestones',     leftBorder: 'border-l-emerald-600', arrow: 'text-emerald-600' },
  { to: '/services/packages',         title: 'Incorporation Packages',  desc: 'All-in-one solutions for complete setup',         leftBorder: 'border-l-yellow-600',  arrow: 'text-yellow-600'  },
];

const ServicesOverview = () => {
  const featured = [
    { service: serviceData.mandatoryFees[0], type: 'mandatory' },
    { service: serviceData.annualServices[0], type: 'annual' },
    { service: serviceData.oneOffServices[0], type: 'oneoff' },
  ];

  return (
    <ServiceSection
      title="Hong Kong Company Services"
      subtitle="Complete solutions for company incorporation, compliance, and ongoing operations — everything your business needs, in one place."
      breadcrumb={["Overview"]}
    >

      {/* Three Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
        {pillars.map((p, i) => (
          <div key={i} className={`bg-white border border-slate-200 border-t-4 ${p.top} p-7 rounded-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}>
            <div className={`w-12 h-12 rounded-xl ${p.iconBg} ${p.iconColor} flex items-center justify-center mb-4`}>{p.icon}</div>
            <h3 className="text-slate-900 font-semibold font-serif text-lg mb-2">{p.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Quick Nav */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-px bg-yellow-600" />
          <p className="text-slate-400 text-[11px] uppercase tracking-[0.18em] font-semibold">Explore Services</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.to}
              className={`bg-white border border-slate-200 border-l-4 ${link.leftBorder} p-5 flex items-center justify-between gap-4 rounded-sm hover:shadow-md hover:translate-x-1 transition-all duration-250 no-underline group`}
            >
              <div>
                <h4 className="text-slate-900 font-semibold font-serif mb-1 group-hover:text-slate-700">{link.title}</h4>
                <p className="text-slate-400 text-sm">{link.desc}</p>
              </div>
              <span className={`text-lg flex-shrink-0 ${link.arrow}`}>→</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Services */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-px bg-yellow-600" />
            <h2 className="text-slate-900 text-lg font-semibold font-serif">Featured Services</h2>
          </div>
          <Link to="/services" className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">View All →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map(({ service, type }, i) => (
            <ServiceCard key={i} service={service} type={type} />
          ))}
        </div>
      </div>

      {/* Government Fees */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-px bg-red-600" />
              <h2 className="text-slate-900 text-lg font-semibold font-serif">Government Fees</h2>
            </div>
            <p className="text-slate-400 text-sm pl-[52px]">Mandatory fees paid to Hong Kong government</p>
          </div>
          <Link to="/services/government-fees" className="text-red-600 hover:text-red-700 text-sm font-medium transition-colors whitespace-nowrap">View All →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceData.mandatoryFees.map(fee => (
            <ServiceCard key={fee.id} service={fee} type="mandatory" />
          ))}
        </div>
      </div>

      {/* Packages */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-px bg-yellow-600" />
              <h2 className="text-slate-900 text-lg font-semibold font-serif">Incorporation Packages</h2>
            </div>
            <p className="text-slate-400 text-sm pl-[52px]">All-in-one solutions for different business needs</p>
          </div>
          <Link to="/services/packages" className="text-yellow-600 hover:text-yellow-700 text-sm font-medium transition-colors whitespace-nowrap">View All →</Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {serviceData.packages.map(pkg => (
            <PackageCard key={pkg.id} package={pkg} isRecommended={pkg.recommended} />
          ))}
        </div>
      </div>

    </ServiceSection>
  );
};

export default ServicesOverview;