import React, { useState } from 'react';
import { Eye, ArrowRight, ExternalLink, Check, ShoppingBag, Sparkles } from 'lucide-react';
import { WEBSITE_DEMOS, DemoItem } from '../data/landingData';

interface WebsiteDemosProps {
  onSelectDemo: (demo: DemoItem) => void;
  onOpenLiveDemoModal: (demo: DemoItem) => void;
}

export const WebsiteDemos: React.FC<WebsiteDemosProps> = ({
  onSelectDemo,
  onOpenLiveDemoModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Fashion',
    'Grocery',
    'Cosmetics',
    'Electronics',
    'Restaurant',
    'General Store',
    'Other',
  ];

  const filteredDemos =
    activeCategory === 'All'
      ? WEBSITE_DEMOS
      : WEBSITE_DEMOS.filter((item) => item.category === activeCategory);

  return (
    <section id="demos" className="py-20 md:py-28 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 px-3.5 py-1 rounded-full mb-3 inline-block">
            Choose Your Store Design
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Choose the Website That Fits Your Business
          </h2>
          <p className="text-lg sm:text-xl text-slate-600">
            Preview the design and mobile shopping cart before you buy. Every store includes WooCommerce, product setup, and bKash payment readiness.
          </p>
        </div>

        {/* Category Filter Tabs (Segmented Buttons) */}
        <div className="flex justify-center mb-14 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex items-center gap-1.5 p-1.5 bg-white border-2 border-slate-200 rounded-2xl shadow-sm">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all duration-150 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 scale-[1.02]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Demos Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-9">
          {filteredDemos.map((demo) => (
            <div
              key={demo.id}
              className="group bg-white border-2 border-slate-200/90 hover:border-indigo-500 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Large Dominant Screenshot Preview */}
                <div
                  onClick={() => onOpenLiveDemoModal(demo)}
                  className="relative aspect-[16/10] bg-slate-950 overflow-hidden cursor-pointer border-b border-slate-200"
                >
                  {/* Browser frame title bar inside card */}
                  <div className="bg-slate-900 px-3.5 py-2 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="truncate max-w-[170px] text-slate-300 font-semibold">{demo.demoUrlPlaceholder}</span>
                    <span className="text-emerald-400 font-sans font-bold text-[11px] bg-emerald-950 px-2 py-0.5 rounded">
                      Live
                    </span>
                  </div>

                  {/* Simulated Store Mockup Canvas */}
                  <div
                    className={`h-full w-full bg-gradient-to-br ${demo.previewBg} p-5 text-white flex flex-col justify-between group-hover:scale-[1.03] transition-transform duration-300`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 bg-slate-950/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 shadow-sm">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: demo.accentColor }}
                        />
                        <span className="text-xs font-bold text-white tracking-wide">
                          {demo.name}
                        </span>
                      </div>
                      <span className="text-xs bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-md text-white font-bold">
                        WooCommerce
                      </span>
                    </div>

                    {/* Middle preview info */}
                    <div className="space-y-1.5 my-auto py-2">
                      <div className="text-base font-black text-white tracking-tight drop-shadow-sm">
                        {demo.tagline}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                        <span>Includes Sample Products</span>
                        <span>·</span>
                        <span>bKash & Cards Ready</span>
                      </div>

                      {/* Mini Product Pill Previews */}
                      <div className="grid grid-cols-3 gap-2 pt-2">
                        {demo.sampleProducts.map((p, pIdx) => (
                          <div
                            key={pIdx}
                            className="bg-slate-950/80 backdrop-blur-md rounded-xl p-2 border border-white/10 text-center shadow-sm"
                          >
                            <div className="text-2xl">{p.image}</div>
                            <div className="text-[10px] font-bold text-slate-200 truncate mt-1">
                              {p.name}
                            </div>
                            <div className="text-[10px] font-black text-indigo-300">
                              ৳{p.priceBDT.toLocaleString()}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Hover Hint Overlay */}
                    <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2">
                      <span className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-extrabold flex items-center gap-2 shadow-xl hover:bg-indigo-700">
                        <Eye className="w-4 h-4" />
                        <span>Interactive Live Preview</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 space-y-4">
                  {/* Category & Name */}
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
                      <span className="font-extrabold uppercase tracking-wider text-indigo-700">
                        {demo.category} Store
                      </span>
                      <span className="font-mono text-xs text-slate-400">
                        {demo.demoUrlPlaceholder}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {demo.name}
                    </h3>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                      {demo.description}
                    </p>
                  </div>

                  {/* Feature Tags (Unboxed Text with Separators) */}
                  <div className="pt-3 border-t border-slate-150 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-600">
                    {demo.features.map((feat, fIdx) => (
                      <React.Fragment key={fIdx}>
                        <span className="font-semibold text-slate-700">{feat}</span>
                        {fIdx < demo.features.length - 1 && (
                          <span className="text-slate-300" aria-hidden="true">
                            ·
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="p-6 sm:p-7 pt-0 grid grid-cols-2 gap-3">
                <button
                  onClick={() => onOpenLiveDemoModal(demo)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl border border-slate-300 transition-colors cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-indigo-600" />
                  <span>Live Demo</span>
                </button>

                <button
                  onClick={() => onSelectDemo(demo)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-extrabold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md shadow-indigo-600/20 transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Get Website</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Niche Inquiry Banner */}
        <div className="mt-14 text-center p-7 bg-white border-2 border-slate-200 rounded-3xl max-w-3xl mx-auto shadow-sm">
          <h4 className="text-lg font-bold text-slate-900">
            Need a store for a different category or specialized products?
          </h4>
          <p className="text-sm text-slate-600 mt-1.5 max-w-xl mx-auto">
            We adapt any ready-made design for restaurants, electronics, books, accessories, or wholesale stores with your specific color palette.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 mt-3 text-sm font-extrabold text-indigo-600 hover:text-indigo-700"
          >
            <span>Ask us for custom niche setup</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
