import React, { useState } from 'react';
import {
  CreditCard,
  Zap,
  Grid,
  Truck,
  MessageCircle,
  Cpu,
  Info,
  Check,
  ExternalLink,
} from 'lucide-react';
import { PLUGINS_CATALOG, PluginItem } from '../data/landingData';

interface PluginsAddonsProps {
  onSelectPluginForInquiry: (plugin: PluginItem) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Payment: CreditCard,
  Checkout: Zap,
  'Product Experience': Grid,
  Performance: Cpu,
  'Order Management': Truck,
  'Customer & Marketing': MessageCircle,
};

export const PluginsAddons: React.FC<PluginsAddonsProps> = ({ onSelectPluginForInquiry }) => {
  const [selectedPlugin, setSelectedPlugin] = useState<PluginItem | null>(null);

  return (
    <section id="plugins" className="py-20 md:py-28 bg-[#0b0f19] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Clear Secondary Emphasis */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">
            <span>Optional Add-Ons</span>
            <span className="text-slate-600">·</span>
            <span className="text-indigo-400">Website Remains Core Product</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Need More Features? Add the Tools You Need.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            We also provide useful e-commerce and WordPress plugins as optional add-ons to expand your store whenever you are ready.
          </p>
        </div>

        {/* Plugin Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLUGINS_CATALOG.map((plugin) => {
            const Icon = iconMap[plugin.category] || Zap;
            return (
              <div
                key={plugin.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-lg"
              >
                <div>
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-950/70 border border-indigo-800/60 text-indigo-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-indigo-400 bg-indigo-950/80 px-2.5 py-0.5 rounded-md border border-indigo-800/40">
                      {plugin.badge}
                    </span>
                  </div>

                  {/* Plugin Name & Category */}
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">
                    {plugin.category}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {plugin.name}
                  </h3>
                  <div className="text-[11px] font-mono text-slate-500 mb-2">
                    Placeholder: {plugin.namePlaceholder}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                    {plugin.description}
                  </p>
                </div>

                {/* Bottom Row: Price & Details CTA */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm sm:text-base font-extrabold text-white">
                      {plugin.priceBDT}{' '}
                      <span className="text-xs text-slate-400 font-normal">({plugin.priceUSD})</span>
                    </div>
                    <div className="text-[10px] font-mono text-slate-500">
                      {plugin.pricePlaceholder}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedPlugin(plugin);
                      onSelectPluginForInquiry(plugin);
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors cursor-pointer"
                  >
                    <span>View Details</span>
                    <Info className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Compatibility */}
        <div className="mt-12 text-center text-xs text-slate-400">
          All add-ons are 100% compatible with PickBox Pro Basic and Premium websites. Installation and testing included.
        </div>
      </div>
    </section>
  );
};
