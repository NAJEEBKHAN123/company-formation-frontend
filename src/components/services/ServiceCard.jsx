import React from 'react';

const typeConfig = {
  mandatory: {
    topBorder: 'border-t-red-600',
    badge: 'bg-red-50 text-red-700 border border-red-200',
    badgeLabel: 'Mandatory',
    iconBg: 'bg-red-50',
    iconColor: 'text-red-600',
    price: 'text-red-600',
    accent: 'text-red-600',
    bullet: 'text-red-500',
    ctaBg: 'bg-red-50 text-red-600 border-red-200 hover:bg-red-600 hover:text-white',
    noteDot: 'text-red-500',
  },
  annual: {
    topBorder: 'border-t-blue-600',
    badge: 'bg-blue-50 text-blue-700 border border-blue-200',
    badgeLabel: 'Annual',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    price: 'text-blue-600',
    accent: 'text-blue-600',
    bullet: 'text-blue-500',
    ctaBg: 'bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-600 hover:text-white',
    noteDot: 'text-blue-500',
  },
  oneoff: {
    topBorder: 'border-t-emerald-600',
    badge: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    badgeLabel: 'One-off',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    price: 'text-emerald-600',
    accent: 'text-emerald-600',
    bullet: 'text-emerald-500',
    ctaBg: 'bg-emerald-50 text-emerald-600 border-emerald-200 hover:bg-emerald-600 hover:text-white',
    noteDot: 'text-emerald-500',
  },
  package: {
    topBorder: 'border-t-violet-600',
    badge: 'bg-violet-50 text-violet-700 border border-violet-200',
    badgeLabel: 'Package',
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
    price: 'text-violet-600',
    accent: 'text-violet-600',
    bullet: 'text-violet-500',
    ctaBg: 'bg-violet-50 text-violet-600 border-violet-200 hover:bg-violet-600 hover:text-white',
    noteDot: 'text-violet-500',
  },
  regular: {
    topBorder: 'border-t-slate-400',
    badge: null,
    badgeLabel: null,
    iconBg: 'bg-slate-100',
    iconColor: 'text-slate-500',
    price: 'text-slate-800',
    accent: 'text-slate-600',
    bullet: 'text-slate-400',
    ctaBg: 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-700 hover:text-white',
    noteDot: 'text-slate-400',
  },
};

const icons = {
  mandatory: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  ),
  annual: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  oneoff: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  package: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  regular: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
    </svg>
  ),
};

const ServiceCard = ({ service, type = 'regular', onClick }) => {
  const cfg = typeConfig[type] || typeConfig.regular;

  return (
    <div
      onClick={() => onClick && onClick(service)}
      className={`
        group bg-white border border-slate-200 border-t-4 ${cfg.topBorder}
        rounded-sm shadow-sm hover:shadow-lg hover:-translate-y-1
        transition-all duration-300 p-7 flex flex-col h-full
        ${onClick ? 'cursor-pointer' : ''}
      `}
    >
      {/* Header row */}
      <div className="flex items-start justify-between mb-5">
        <div className={`w-10 h-10 rounded-lg ${cfg.iconBg} ${cfg.iconColor} flex items-center justify-center flex-shrink-0`}>
          {icons[type] || icons.regular}
        </div>
        {cfg.badge && (
          <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm ${cfg.badge}`}>
            {cfg.badgeLabel}
          </span>
        )}
      </div>

      {/* Name */}
      <h3 className="text-slate-900 text-lg font-semibold leading-snug mb-2 font-serif">
        {service.name}
      </h3>

      {/* Price */}
      <div className="flex items-baseline gap-2 mb-4">
        <span className={`text-2xl font-bold tracking-tight ${cfg.price}`}>{service.price}</span>
        {service.duration && <span className="text-slate-400 text-sm">{service.duration}</span>}
      </div>

      {/* Description */}
      {service.description && (
        <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-grow">
          {service.description}
        </p>
      )}

      {/* Features */}
      {service.features?.length > 0 && (
        <div className="mb-4">
          <p className="text-slate-400 text-[10px] uppercase tracking-[0.15em] font-semibold mb-2.5">Includes</p>
          <ul className="space-y-1.5">
            {service.features.slice(0, 3).map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                <span className={`mt-1 text-[10px] font-bold ${cfg.bullet}`}>▪</span>
                {f}
              </li>
            ))}
            {service.features.length > 3 && (
              <li className="text-xs text-slate-400 pl-4">+{service.features.length - 3} more</li>
            )}
          </ul>
        </div>
      )}

      {/* Note */}
      {service.note && (
        <div className="border-t border-dashed border-slate-200 pt-3 mt-3">
          <p className={`flex items-start gap-1.5 text-xs text-slate-400`}>
            <svg className={`w-3 h-3 mt-0.5 flex-shrink-0 ${cfg.noteDot}`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            {service.note}
          </p>
        </div>
      )}

      {/* CTA */}
      <div className="border-t border-slate-100 pt-4 mt-4">
        {onClick ? (
          <button className={`w-full py-2.5 text-xs font-bold uppercase tracking-widest border transition-all duration-200 ${cfg.ctaBg}`}>
            Select Service →
          </button>
        ) : (
          <div className="flex items-center justify-between">
            <span className="text-slate-400 text-xs">Available now</span>
            <span className={`text-xs font-semibold ${cfg.accent}`}>Details →</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;