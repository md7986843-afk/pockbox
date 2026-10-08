import React from 'react';
import {
  Layout,
  ShoppingBag,
  Layers,
  ShoppingCart,
  CreditCard,
  DollarSign,
  Grid,
  Smartphone,
  Palette,
  Search,
  Zap,
  ShieldCheck,
  Eye,
  MessageCircle,
  Headphones,
} from 'lucide-react';
import { CORE_FEATURES } from '../data/landingData';

const iconMap: Record<string, React.ElementType> = {
  Layout,
  ShoppingBag,
  Layers,
  ShoppingCart,
  CreditCard,
  DollarSign,
  Grid,
  Smartphone,
  Palette,
  Search,
  Zap,
  ShieldCheck,
  Eye,
  MessageCircle,
  Headphones,
};

export const FeaturesGrid: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-[#090d16] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2 block">
            Complete E-commerce Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Everything You Need to Start Selling Online
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Every ready-made website includes the essential e-commerce architecture configured and tested before handover.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_FEATURES.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon] || ShoppingBag;
            return (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800/90 rounded-2xl p-6 hover:border-slate-700 hover:bg-slate-900/90 transition-all duration-150 flex flex-col justify-start"
              >
                <div className="w-11 h-11 rounded-xl bg-indigo-950/70 border border-indigo-800/50 text-indigo-400 flex items-center justify-center mb-4 shrink-0 shadow-sm">
                  <IconComponent className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Note */}
        <div className="mt-12 text-center text-xs text-slate-400 flex flex-wrap items-center justify-center gap-4">
          <span>✓ 100% Full Site Ownership</span>
          <span>·</span>
          <span>✓ No Hidden Monthly Commissions</span>
          <span>·</span>
          <span>✓ WordPress & WooCommerce Standard</span>
        </div>
      </div>
    </section>
  );
};
