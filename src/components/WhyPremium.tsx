import React, { useState } from 'react';
import {
  Sparkles,
  Check,
  ShoppingCart,
  Heart,
  ZoomIn,
  Layers,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  Globe,
  Star,
} from 'lucide-react';
import { PREMIUM_SHOWCASE_ITEMS } from '../data/landingData';

export const WhyPremium: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('p-variations');

  // Interactive mock state for demonstrations
  const [selectedColor, setSelectedColor] = useState<string>('Navy');
  const [selectedSize, setSelectedSize] = useState<string>('L');
  const [wishlistActive, setWishlistActive] = useState<boolean>(true);
  const [currencySelected, setCurrencySelected] = useState<string>('BDT');

  const activeItem =
    PREMIUM_SHOWCASE_ITEMS.find((item) => item.id === activeTab) || PREMIUM_SHOWCASE_ITEMS[0];

  return (
    <section id="why-premium" className="py-20 md:py-28 bg-[#090d16] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2 block">
            Conversion Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Give Your Customers a Better Shopping Experience
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Premium isn't just extra code—it's proven e-commerce UX that reduces cart abandonment and boosts average order value.
          </p>
        </div>

        {/* 2-Column Layout: Left Tab Selector, Right Interactive Live UI Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Feature Buttons */}
          <div className="lg:col-span-5 space-y-2.5">
            {PREMIUM_SHOWCASE_ITEMS.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                    isActive
                      ? 'bg-slate-900 border-indigo-500 shadow-md shadow-indigo-950/40 text-white'
                      : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/60 text-slate-300'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold ${
                      isActive
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className={`text-sm font-bold ${isActive ? 'text-white' : 'text-slate-200'}`}>
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                      {item.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Live Interactive Visual Mockup Preview */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative min-h-[480px] flex flex-col justify-between">
            {/* Top Bar Description */}
            <div className="pb-5 border-b border-slate-800 flex items-start justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400 block mb-1">
                  Premium Feature Visual Demo
                </span>
                <h3 className="text-xl font-extrabold text-white">{activeItem.title}</h3>
                <p className="text-xs text-slate-300 mt-1">{activeItem.benefit}</p>
              </div>
              <span className="shrink-0 bg-indigo-950/80 border border-indigo-700/60 text-indigo-300 text-[11px] font-bold px-2.5 py-1 rounded-md">
                Included in Premium
              </span>
            </div>

            {/* Simulated UI Mockup Container */}
            <div className="my-6 bg-slate-950 rounded-2xl border border-slate-800 p-5 sm:p-6 overflow-hidden">
              {/* Dynamic View based on Active Tab */}
              {activeTab === 'p-variations' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
                    <span className="font-semibold text-slate-200">Interactive Swatch Demo</span>
                    <span className="text-emerald-400 font-mono">In Stock (14 items left)</span>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-slate-300 block mb-2">
                      Color Swatches: <strong className="text-white">{selectedColor}</strong>
                    </span>
                    <div className="flex items-center gap-2">
                      {[
                        { name: 'Navy', hex: '#1e3a8a' },
                        { name: 'Olive', hex: '#3f6212' },
                        { name: 'Charcoal', hex: '#334155' },
                        { name: 'Cream', hex: '#fef08a' },
                      ].map((col) => (
                        <button
                          key={col.name}
                          onClick={() => setSelectedColor(col.name)}
                          className={`w-9 h-9 rounded-full flex items-center justify-center border-2 transition-transform cursor-pointer ${
                            selectedColor === col.name
                              ? 'border-white scale-110 shadow-md'
                              : 'border-transparent opacity-80 hover:opacity-100'
                          }`}
                          style={{ backgroundColor: col.hex }}
                        >
                          {selectedColor === col.name && (
                            <Check className="w-4 h-4 text-white drop-shadow" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-slate-300 block mb-2">
                      Size Selection: <strong className="text-white">{selectedSize}</strong>
                    </span>
                    <div className="flex items-center gap-2">
                      {['S', 'M', 'L', 'XL', 'XXL'].map((sz) => (
                        <button
                          key={sz}
                          onClick={() => setSelectedSize(sz)}
                          className={`px-3.5 py-1.5 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                            selectedSize === sz
                              ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm'
                              : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 flex items-center justify-between text-xs bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                    <span className="text-slate-400">Calculated Variation Price:</span>
                    <span className="font-extrabold text-base text-white">৳2,450 BDT</span>
                  </div>
                </div>
              )}

              {activeTab === 'p-sticky' && (
                <div className="space-y-4">
                  <div className="text-xs text-slate-400 pb-2 border-b border-slate-800">
                    <span>Simulated Mobile Scroll Position (70% down page)</span>
                  </div>

                  <div className="p-3 bg-slate-900 rounded-xl space-y-2 text-xs text-slate-400">
                    <div className="h-3 bg-slate-800 rounded w-3/4" />
                    <div className="h-3 bg-slate-800 rounded w-full" />
                    <div className="h-3 bg-slate-800 rounded w-2/3" />
                  </div>

                  {/* The Floating / Sticky Bar Mockup */}
                  <div className="bg-slate-900 border-2 border-indigo-500/80 rounded-xl p-3 shadow-xl flex items-center justify-between gap-3 animate-pulse">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-lg bg-indigo-950 flex items-center justify-center text-xl">
                        🧥
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Denim Outer Jacket</div>
                        <div className="text-xs font-extrabold text-indigo-400">৳2,450</div>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-lg flex items-center gap-1.5 shadow-md">
                      <ShoppingCart className="w-3.5 h-3.5" />
                      <span>Instant Add to Cart</span>
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-400 text-center">
                    Stays anchored to the phone screen bottom so users never have to scroll back up to buy.
                  </p>
                </div>
              )}

              {activeTab === 'p-gallery' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
                    <span>Pinch & High-Res Zoom Visualizer</span>
                    <span className="text-indigo-400 font-medium">4K Multi-Angle</span>
                  </div>
                  <div className="relative aspect-video rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-5xl overflow-hidden group">
                    <span>🧥</span>
                    <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                      <div className="bg-slate-900/90 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-semibold text-white flex items-center gap-1.5 shadow-lg">
                        <ZoomIn className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Hover to Inspect Weave & Stitch Details</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {['Front', 'Back Angle', 'Collar Stitch', 'Fabric Macro'].map((angle, idx) => (
                      <div
                        key={idx}
                        className={`p-2 rounded-lg text-center text-[10px] font-semibold border ${
                          idx === 0
                            ? 'bg-indigo-950/60 border-indigo-600 text-white'
                            : 'bg-slate-900 border-slate-800 text-slate-400'
                        }`}
                      >
                        {angle}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'p-upsell' && (
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-slate-200">
                    Frequently Bought Together (Smart Bundle)
                  </div>
                  <div className="bg-slate-900 rounded-xl p-3 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded bg-slate-800 flex items-center justify-center text-lg">
                        🧥
                      </div>
                      <span className="text-white font-bold text-xs">+</span>
                      <div className="w-9 h-9 rounded bg-slate-800 flex items-center justify-center text-lg">
                        👕
                      </div>
                      <span className="text-white font-bold text-xs">+</span>
                      <div className="w-9 h-9 rounded bg-slate-800 flex items-center justify-center text-lg">
                        👖
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-400">
                        Bundle Price:{' '}
                        <span className="line-through text-slate-500">৳5,150</span>
                      </div>
                      <div className="text-sm font-extrabold text-emerald-400">৳4,490 (Save ৳660)</div>
                    </div>
                    <button className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold cursor-pointer">
                      Add All 3 to Cart
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'p-wishlist' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
                    <span>Persistent Customer Wishlist</span>
                    <span className="text-rose-400 font-semibold">Saved for Payday</span>
                  </div>
                  <div className="bg-slate-900 rounded-xl p-3 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-2xl">
                        🎧
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Active Noise Earbuds</div>
                        <div className="text-xs text-slate-400">৳2,950 BDT</div>
                      </div>
                    </div>
                    <button
                      onClick={() => setWishlistActive(!wishlistActive)}
                      className="p-2 rounded-lg bg-rose-950/60 border border-rose-800/60 text-rose-400 cursor-pointer"
                    >
                      <Heart
                        className={`w-4 h-4 ${wishlistActive ? 'fill-current text-rose-500' : ''}`}
                      />
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Allows indecisive shoppers to save products to their device without losing their intent.
                  </p>
                </div>
              )}

              {activeTab === 'p-checkout' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
                    <span className="font-semibold text-white">Express One-Page Fast Checkout</span>
                    <span className="text-emerald-400">0 Page Reloads</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-slate-900 p-2 rounded border border-slate-800 text-slate-300">
                      1. Your Full Name & Phone
                    </div>
                    <div className="bg-slate-900 p-2 rounded border border-slate-800 text-slate-300">
                      2. Delivery Address (Dhaka / Outside)
                    </div>
                  </div>
                  <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-300">Payment Method:</span>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 font-bold border border-emerald-800">
                        bKash Instant
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                        Cash on Delivery
                      </span>
                    </div>
                  </div>
                  <button className="w-full py-2 bg-indigo-600 text-white font-bold text-xs rounded-lg">
                    Confirm Order (৳2,450)
                  </button>
                </div>
              )}

              {activeTab === 'p-currency' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
                    <span>Multi-Currency International Switcher</span>
                    <Globe className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    {[
                      { code: 'BDT', symbol: '৳', price: '৳2,450' },
                      { code: 'USD', symbol: '$', price: '$24.00' },
                      { code: 'EUR', symbol: '€', price: '€22.50' },
                      { code: 'GBP', symbol: '£', price: '£19.00' },
                    ].map((curr) => (
                      <button
                        key={curr.code}
                        onClick={() => setCurrencySelected(curr.code)}
                        className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                          currencySelected === curr.code
                            ? 'bg-indigo-600 text-white border-indigo-500 shadow-md'
                            : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                        }`}
                      >
                        <div className="text-xs font-extrabold">{curr.code}</div>
                        <div className="text-[11px] font-mono mt-0.5">{curr.price}</div>
                      </button>
                    ))}
                  </div>
                  <p className="text-[11px] text-slate-400 text-center">
                    Enables sales to NRBs, Bangladeshi diaspora, and international clients with live exchange rates.
                  </p>
                </div>
              )}

              {activeTab === 'p-priority' && (
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-indigo-300">
                    Priority WhatsApp & Technical Launch Support
                  </div>
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-2 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Direct line with senior e-commerce deployment engineer</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Domain DNS, SSL, and server optimization inspection</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Post-launch checkout testing & test payment verification</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Proof Note */}
            <div className="pt-2 text-xs text-slate-400 flex items-center justify-between">
              <span>All 8 capabilities come standard with the PickBox Pro Premium Tier.</span>
              <a href="#pricing" className="text-indigo-400 hover:text-indigo-300 font-bold">
                View Pricing →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
