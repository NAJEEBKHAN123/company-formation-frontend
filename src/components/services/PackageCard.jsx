import React from 'react';

const PackageCard = ({ package: pkg, isRecommended = false, onSelect }) => {
  const tierStyles = {
    basic: {
      topBorder: 'border-t-slate-500',
      accentText: 'text-slate-600',
      iconBg: 'bg-slate-100',
      iconColor: 'text-slate-600',
      checkColor: 'text-slate-500',
      btn: 'bg-slate-900 hover:bg-slate-800 text-white',
      label: 'Essential',
    },
    standard: {
      topBorder: 'border-t-yellow-600',
      accentText: 'text-yellow-500',
      iconBg: 'bg-yellow-900/30',
      iconColor: 'text-yellow-500',
      checkColor: 'text-yellow-500',
      btn: 'bg-yellow-600 hover:bg-yellow-700 text-slate-950',
      label: 'Most Popular',
    },
    premium: {
      topBorder: 'border-t-violet-500',
      accentText: 'text-violet-400',
      iconBg: 'bg-violet-100',
      iconColor: 'text-violet-600',
      checkColor: 'text-violet-500',
      btn: 'bg-violet-700 hover:bg-violet-800 text-white',
      label: 'Enterprise',
    },
  };

  const t = tierStyles[pkg.id] || tierStyles.basic;

  const cardBase = isRecommended
    ? 'bg-slate-950 border-2 border-yellow-600 shadow-2xl -translate-y-3'
    : `bg-white border-2 border-slate-200 border-t-4 ${t.topBorder} shadow-md hover:shadow-xl`;

  const titleColor = isRecommended ? 'text-white' : 'text-slate-900';
  const tagColor = isRecommended ? 'text-white/50' : 'text-slate-400';
  const priceColor = isRecommended ? 'text-yellow-500' : t.accentText.replace('text-', 'text-').replace('slate-600', 'slate-700');
  const featureColor = isRecommended ? 'text-white/75' : 'text-slate-600';
  const dividerColor = isRecommended ? 'border-white/10' : 'border-slate-100';
  const sectionLabelColor = isRecommended ? 'text-white/40' : 'text-slate-400';
  const excludeColor = isRecommended ? 'text-white/30' : 'text-slate-300';
  const timerColor = isRecommended ? 'text-white/35' : 'text-slate-400';

  return (
    <div className={`relative rounded-sm flex flex-col h-full transition-all duration-300 ${cardBase}`}>

      {/* Most Popular badge */}
      {isRecommended && (
        <div className="absolute -top-px left-1/2 -translate-x-1/2">
          <div className="bg-yellow-600 text-slate-950 text-[10px] font-bold uppercase tracking-[0.2em] px-5 py-1.5">
            Most Popular
          </div>
        </div>
      )}

      <div className="p-8 flex flex-col h-full">

        {/* Tier label + icon */}
        <div className="flex items-center gap-3 mb-6 mt-2">
          <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${t.iconBg} ${isRecommended ? 'bg-yellow-900/30' : ''}`}>
            {pkg.id === 'standard' ? (
              <svg className={`w-5 h-5 ${isRecommended ? 'text-yellow-500' : t.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            ) : pkg.id === 'premium' ? (
              <svg className={`w-5 h-5 ${t.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            ) : (
              <svg className={`w-5 h-5 ${t.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            )}
          </div>
          <span className={`text-[10px] uppercase tracking-[0.18em] font-bold ${isRecommended ? 'text-yellow-500' : t.accentText}`}>
            {t.label}
          </span>
        </div>

        {/* Name + tagline */}
        <h3 className={`text-2xl font-serif font-normal mb-1 ${titleColor}`}>{pkg.name}</h3>
        {pkg.tagline && <p className={`text-sm mb-5 ${tagColor}`}>{pkg.tagline}</p>}

        {/* Price */}
        <div className={`pb-5 mb-5 border-b ${dividerColor}`}>
          <div className={`text-3xl font-bold tracking-tight ${isRecommended ? 'text-yellow-500' : 'text-slate-800'}`}>
            {pkg.price}
          </div>
          <p className={`text-xs mt-1 ${timerColor}`}>One-time setup fee</p>
        </div>

        {/* Features */}
        <div className="flex-grow">
          <p className={`text-[10px] uppercase tracking-[0.18em] font-semibold mb-3 ${sectionLabelColor}`}>What's Included</p>
          <ul className="space-y-2.5">
            {pkg.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isRecommended ? 'text-yellow-500' : t.checkColor}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className={`text-sm leading-relaxed ${featureColor}`}>{f}</span>
              </li>
            ))}
          </ul>

          {pkg.excludes?.length > 0 && (
            <div className="mt-4">
              <p className={`text-[10px] uppercase tracking-[0.18em] font-semibold mb-2.5 ${sectionLabelColor}`}>Not Included</p>
              <ul className="space-y-1.5">
                {pkg.excludes.map((ex, i) => (
                  <li key={i} className={`flex items-center gap-2 text-sm line-through ${excludeColor}`}>
                    <span className="text-xs">—</span>{ex}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className={`mt-7 pt-6 border-t ${dividerColor}`}>
          <button
            onClick={() => onSelect && onSelect(pkg)}
            className={`w-full py-3.5 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 ${t.btn} ${isRecommended ? 'bg-yellow-600 hover:bg-yellow-700 text-slate-950' : ''}`}
          >
            Select Package
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          <div className={`flex items-center justify-center gap-1.5 mt-3 text-xs ${timerColor}`}>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Setup in 3–5 working days
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;