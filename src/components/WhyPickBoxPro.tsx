import React from 'react';
import {
  CheckCircle2,
  Sparkles,
  DollarSign,
  Monitor,
  ShoppingBag,
  Sliders,
  Headphones,
} from 'lucide-react';

export const WhyPickBoxPro: React.FC = () => {
  const reasons = [
    {
      icon: CheckCircle2,
      title: 'Ready-Made Solutions',
      description:
        'Launch immediately using proven layouts instead of dealing with months of delayed agency custom code.',
    },
    {
      icon: DollarSign,
      title: 'Affordable for New Businesses',
      description:
        'A single transparent setup price. Save budget for inventory, marketing, and ad spend rather than bloated web fees.',
    },
    {
      icon: Monitor,
      title: 'Professional Designs',
      description:
        'Aesthetics built specifically for modern digital retail: typography hierarchy, clean mobile grids, and fast interactions.',
    },
    {
      icon: ShoppingBag,
      title: 'E-commerce Focused',
      description:
        'Engineered solely around sales conversion: responsive cart, one-page checkout, bKash/Nagad readiness, and product management.',
    },
    {
      icon: Sliders,
      title: 'Customization Available',
      description:
        'Your selected store is adapted to your brand identity, colors, logo, and inventory structure before delivery.',
    },
    {
      icon: Headphones,
      title: 'Support After Purchase',
      description:
        'Direct onboarding support to ensure you feel confident processing orders and managing products on your live website.',
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-[#090d16] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2 block">
            Honest Foundations
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            Why Choose PickBox Pro?
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Real software, tested stores, and practical help to launch your business online.
          </p>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-950/70 border border-indigo-800/60 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1.5 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
