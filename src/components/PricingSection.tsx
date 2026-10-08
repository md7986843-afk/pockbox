import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck, ShoppingCart, Zap, CreditCard, Smartphone, Layout, Headphones } from 'lucide-react';
import { PLACEHOLDERS } from '../data/landingData';

interface PricingSectionProps {
  onSelectPackage: (pkg: 'Basic' | 'Premium') => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackage }) => {
  const [currency, setCurrency] = useState<'BDT' | 'USD'>('BDT');

  const basicInclusions = [
    'Ready-Made E-commerce Website',
    'WooCommerce Core Engine',
    'Responsive Mobile Layout',
    'Product & Category Setup',
    'Shopping Cart & Checkout',
    'Payment Integration (COD & bKash)',
    'Basic Store Customization',
    'Basic Onboarding Support',
  ];

  const premiumInclusions = [
    'Everything in Basic Package',
    'Advanced High-Converting Product Page',
    'Visual Variation Swatches (Colors & Sizes)',
    'High-Resolution Gallery & Pinch Zoom',
    'Sticky Add to Cart Bar on Mobile',
    'Related Products & Smart Upsell Bundles',
    'Persistent Customer Wishlist',
    'Express One-Page Fast Checkout',
    'Multiple Currency Switcher (BDT / USD)',
    'Extended Visual & Brand Customization',
    'Priority Direct WhatsApp Support',
  ];

  const coreIncludedFeatures = [
    {
      icon: Layout,
      title: 'Professional Storefront',
      desc: 'Mobile-first homepage, category banners, and featured product spotlights.',
    },
    {
      icon: ShoppingCart,
      title: 'WooCommerce & Cart',
      desc: 'Full data ownership, inventory tracking, coupon codes, and order management.',
    },
    {
      icon: CreditCard,
      title: 'bKash, Nagad & Cards',
      desc: 'Ready for Cash on Delivery (COD) as well as automated mobile banking gateways.',
    },
    {
      icon: Smartphone,
      title: '100% Mobile Responsive',
      desc: 'Fast, smooth shopping experience tested across iPhone and Android screens.',
    },
    {
      icon: Zap,
      title: 'Speed & Security Setup',
      desc: 'Image compression, cache acceleration, and SSL protection pre-configured.',
    },
    {
      icon: Headphones,
      title: 'Handover & Support',
      desc: 'Personal guidance on adding products and processing customer orders easily.',
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 px-3.5 py-1 rounded-full mb-3 inline-block">
            Straightforward Investment
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Choose the Package That Fits Your Business
          </h2>
          <p className="text-lg sm:text-xl text-slate-600">
            One-time setup price with full website ownership. No monthly platform commissions or hidden agency fees.
          </p>

          {/* Currency Toggle */}
          <div className="mt-8 inline-flex items-center gap-2 p-1.5 bg-slate-100 border-2 border-slate-200 rounded-2xl shadow-xs">
            <span className="text-xs font-bold text-slate-600 px-3">Currency:</span>
            <button
              onClick={() => setCurrency('BDT')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                currency === 'BDT'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              BDT (৳)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                currency === 'USD'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto items-stretch mb-20">
          {/* BASIC Package Card */}
          <div className="bg-white border-2 border-slate-200 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-md hover:border-slate-300 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900">BASIC</h3>
                  <p className="text-sm font-medium text-slate-500 mt-1">Everything you need to start.</p>
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                  Starter Store
                </span>
              </div>

              {/* Price */}
              <div className="my-6 pb-6 border-b border-slate-150">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                    {currency === 'BDT' ? PLACEHOLDERS.BASIC_PRICE_BDT : PLACEHOLDERS.BASIC_PRICE_USD}
                  </span>
                  <span className="text-sm text-slate-500 font-bold">One-Time Setup</span>
                </div>
                <div className="text-xs font-mono text-slate-400 mt-1">
                  Editable Placeholder: [BASIC_PRICE]
                </div>
              </div>

              {/* Inclusions */}
              <div className="space-y-3.5 mb-8">
                <div className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                  What's Included in Basic:
                </div>
                {basicInclusions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[3]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onSelectPackage('Basic')}
              className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-bold text-base text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors cursor-pointer"
            >
              <span>Choose Basic Package</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* PREMIUM Package Card (Prominent & Featured) */}
          <div className="relative bg-white border-3 border-indigo-600 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xl shadow-indigo-600/10 hover:shadow-2xl hover:shadow-indigo-600/20 transition-all">
            {/* "Most Popular" Ribbon */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white text-xs font-black uppercase tracking-wider px-5 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Most Popular Choice</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-1">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-indigo-700">PREMIUM</h3>
                  <p className="text-sm font-medium text-slate-500 mt-1">
                    For a more advanced shopping experience.
                  </p>
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-lg border border-indigo-200">
                  High-Converting
                </span>
              </div>

              {/* Price */}
              <div className="my-6 pb-6 border-b border-indigo-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                    {currency === 'BDT' ? PLACEHOLDERS.PREMIUM_PRICE_BDT : PLACEHOLDERS.PREMIUM_PRICE_USD}
                  </span>
                  <span className="text-sm text-indigo-600 font-bold">One-Time Setup</span>
                </div>
                <div className="text-xs font-mono text-indigo-400 mt-1">
                  Editable Placeholder: [PREMIUM_PRICE]
                </div>
              </div>

              {/* Inclusions */}
              <div className="space-y-3.5 mb-8">
                <div className="text-xs font-extrabold uppercase tracking-wider text-indigo-700">
                  Everything in Basic, Plus:
                </div>
                {premiumInclusions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-800 font-semibold">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[3]" />
                    <span className={idx === 0 ? 'text-indigo-700 font-extrabold' : ''}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onSelectPackage('Premium')}
              className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-black text-base text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 shadow-lg shadow-indigo-600/30 transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Choose Premium Package</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* What You Get / Core Inclusions Summary Grid */}
        <div id="included" className="pt-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Everything You Need to Start Selling Online
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Every ready-made store comes pre-configured with the core foundation needed to process customer transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreIncludedFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 border-2 border-slate-200/80 rounded-2xl p-6 hover:bg-white hover:border-indigo-400 hover:shadow-lg transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1.5">{feat.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
