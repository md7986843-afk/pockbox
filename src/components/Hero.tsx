import React, { useState } from 'react';
import { ArrowRight, MessageCircle, Check, ShoppingCart, Star, ShieldCheck, Smartphone, Zap, Search, Eye } from 'lucide-react';

interface HeroProps {
  onExploreDemos: () => void;
  onTalkToUs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreDemos, onTalkToUs }) => {
  const [cartCount, setCartCount] = useState(2);
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const handleSimulatedAdd = (itemName: string) => {
    setCartCount((prev) => prev + 1);
    setAddedItem(itemName);
    setTimeout(() => setAddedItem(null), 2500);
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 bg-white border-b border-slate-200">
      {/* Subtle Warm/Cool Ambient Mesh Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-tr from-indigo-100/60 via-blue-50/40 to-indigo-50/70 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Headline, Value Proposition, Action CTAs */}
          <div className="lg:col-span-6 space-y-7 text-center lg:text-left">
            {/* Live Kicker */}
            <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold text-indigo-700 bg-indigo-50 border border-indigo-200/80 px-4 py-2 rounded-full shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Ready-Made WooCommerce E-commerce Websites</span>
            </div>

            {/* Main Headline (Increased font size & weight) */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[3.75rem] font-black text-slate-900 tracking-tight leading-[1.12]">
              Launch Your Online Store With a{' '}
              <span className="text-indigo-600 underline decoration-indigo-200 decoration-wavy decoration-2">
                Ready-Made
              </span>{' '}
              Website
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Choose a professional ready-made store, customize it for your business, and start selling online without the cost, delays, and complexity of building from scratch.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onExploreDemos}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-extrabold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <span>Explore Website Demos</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onTalkToUs}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-bold text-slate-800 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-300 rounded-xl shadow-xs hover:shadow-sm transition-all duration-200 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>Talk to Us on WhatsApp</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2.5 text-sm font-semibold text-slate-600">
              <span className="inline-flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                WooCommerce Ready
              </span>
              <span className="inline-flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                100% Mobile Responsive
              </span>
              <span className="inline-flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                Affordable Setup
              </span>
              <span className="inline-flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                Live Setup Support
              </span>
            </div>
          </div>

          {/* Right Column: Premium Interactive Browser Mockup */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none rounded-2xl bg-white border-2 border-slate-200 shadow-2xl shadow-indigo-950/10 overflow-hidden hover:border-indigo-300 transition-all duration-300 group">
              {/* Browser Header Bar */}
              <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                </div>

                <div className="flex-1 max-w-xs mx-4 bg-white border border-slate-200 rounded-lg px-3 py-1 flex items-center justify-center gap-2 text-xs font-mono text-slate-600 shadow-xs">
                  <span className="text-emerald-600">🔒</span>
                  <span className="truncate font-semibold">https://yourstore.pickboxpro.com</span>
                </div>

                <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200 uppercase tracking-wider">
                  Live Preview
                </span>
              </div>

              {/* Storefront Content */}
              <div className="p-5 sm:p-6 bg-white space-y-4 select-none">
                {/* Store Navigation */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-150">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white text-sm font-extrabold shadow-sm">
                      P
                    </div>
                    <div>
                      <div className="text-sm font-extrabold text-slate-900 tracking-tight">
                        AURA TRENDWEAR
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium">Fashion Store Demo</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="hidden sm:flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1 rounded-lg text-xs text-slate-500">
                      <Search className="w-3.5 h-3.5 text-slate-400" />
                      <span>Search clothes, bags...</span>
                    </div>

                    <div className="relative flex items-center gap-1.5 bg-indigo-50 border border-indigo-200 text-indigo-700 px-3 py-1.5 rounded-lg text-xs font-bold shadow-xs">
                      <ShoppingCart className="w-4 h-4" />
                      <span>Cart</span>
                      <span className="ml-1 bg-indigo-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">
                        {cartCount}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Promotional Hero Banner */}
                <div className="rounded-xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-4 sm:p-5 flex items-center justify-between shadow-md">
                  <div className="space-y-1">
                    <span className="inline-block bg-indigo-500/30 text-indigo-200 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                      New Season 2026
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold text-white tracking-tight">
                      Exclusive Spring Drops
                    </h3>
                    <p className="text-xs text-slate-300">Fast delivery across Bangladesh & bKash Ready</p>
                  </div>
                  <button
                    onClick={() => handleSimulatedAdd('Spring Collection')}
                    className="text-xs font-bold bg-white text-slate-950 px-3.5 py-2 rounded-lg hover:bg-slate-100 transition-colors shadow-sm cursor-pointer"
                  >
                    Shop Now
                  </button>
                </div>

                {/* Temporary Toast notification */}
                {addedItem && (
                  <div className="p-2.5 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-800 text-xs font-bold flex items-center justify-between animate-fadeIn shadow-xs">
                    <span>✓ Added "{addedItem}" to demo store cart!</span>
                    <span className="text-[11px] text-emerald-700">Total: {cartCount} items</span>
                  </div>
                )}

                {/* 3 Real Product Cards */}
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                      Featured Products
                    </span>
                    <span
                      onClick={onExploreDemos}
                      className="text-xs font-bold text-indigo-600 hover:text-indigo-700 cursor-pointer"
                    >
                      View All Demos →
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {/* Item 1 */}
                    <div className="border border-slate-200 hover:border-indigo-300 rounded-xl p-3 bg-white hover:shadow-md transition-all flex flex-col justify-between">
                      <div className="relative aspect-square rounded-lg bg-indigo-50 flex items-center justify-center text-4xl mb-2">
                        🧥
                        <span className="absolute top-1 left-1 bg-indigo-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                          HOT
                        </span>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 truncate">Denim Jacket</div>
                        <div className="flex items-center gap-1 text-[11px] text-amber-500 my-0.5">
                          <Star className="w-3 h-3 fill-current" />
                          <span className="font-bold text-slate-800">4.9</span>
                        </div>
                        <div className="text-xs font-extrabold text-slate-900">৳2,450</div>
                      </div>
                      <button
                        onClick={() => handleSimulatedAdd('Denim Jacket')}
                        className="mt-2 w-full py-1.5 text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-600 hover:text-white rounded-lg transition-colors cursor-pointer"
                      >
                        + Add to Cart
                      </button>
                    </div>

                    {/* Item 2 */}
                    <div className="border border-slate-200 hover:border-indigo-300 rounded-xl p-3 bg-white hover:shadow-md transition-all flex flex-col justify-between">
                      <div className="relative aspect-square rounded-lg bg-emerald-50 flex items-center justify-center text-4xl mb-2">
                        👕
                        <span className="absolute top-1 left-1 bg-emerald-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                          NEW
                        </span>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 truncate">Relax Cotton Tee</div>
                        <div className="flex items-center gap-1 text-[11px] text-amber-500 my-0.5">
                          <Star className="w-3 h-3 fill-current" />
                          <span className="font-bold text-slate-800">4.8</span>
                        </div>
                        <div className="text-xs font-extrabold text-slate-900">৳850</div>
                      </div>
                      <button
                        onClick={() => handleSimulatedAdd('Relax Cotton Tee')}
                        className="mt-2 w-full py-1.5 text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-600 hover:text-white rounded-lg transition-colors cursor-pointer"
                      >
                        + Add to Cart
                      </button>
                    </div>

                    {/* Item 3 */}
                    <div className="border border-slate-200 hover:border-indigo-300 rounded-xl p-3 bg-white hover:shadow-md transition-all flex flex-col justify-between">
                      <div className="relative aspect-square rounded-lg bg-purple-50 flex items-center justify-center text-4xl mb-2">
                        👖
                        <span className="absolute top-1 left-1 bg-purple-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                          TREND
                        </span>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 truncate">Tailored Pants</div>
                        <div className="flex items-center gap-1 text-[11px] text-amber-500 my-0.5">
                          <Star className="w-3 h-3 fill-current" />
                          <span className="font-bold text-slate-800">4.7</span>
                        </div>
                        <div className="text-xs font-extrabold text-slate-900">৳1,850</div>
                      </div>
                      <button
                        onClick={() => handleSimulatedAdd('Tailored Pants')}
                        className="mt-2 w-full py-1.5 text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-600 hover:text-white rounded-lg transition-colors cursor-pointer"
                      >
                        + Add to Cart
                      </button>
                    </div>
                  </div>
                </div>

                {/* Footer preview note */}
                <div className="pt-2 border-t border-slate-150 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1 text-emerald-700 font-bold">
                    <Check className="w-3.5 h-3.5" /> bKash & Card Ready
                  </span>
                  <span className="font-medium">Fast 1-Page Checkout</span>
                </div>
              </div>
            </div>

            {/* Floating badges around preview */}
            <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-white border border-slate-200 p-3.5 rounded-2xl shadow-xl items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-extrabold text-slate-900">100% Mobile Ready</div>
                <div className="text-[11px] text-slate-500">Fast thumb-friendly checkout</div>
              </div>
            </div>

            <div className="hidden sm:flex absolute -top-4 -right-4 bg-white border border-slate-200 p-3.5 rounded-2xl shadow-xl items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-extrabold text-slate-900">Ready in 48-72h</div>
                <div className="text-[11px] text-slate-500">Full Setup & Launch Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
