import React, { useState } from 'react';
import { Eye, ShieldCheck, CheckCircle2, ShoppingBag, Smartphone, CreditCard, Laptop } from 'lucide-react';
import { PLACEHOLDERS } from '../data/landingData';

export const TrustProof: React.FC = () => {
  const [activeProofTab, setActiveProofTab] = useState<'checkout' | 'product' | 'mobile' | 'admin'>('checkout');

  return (
    <section className="py-20 md:py-28 bg-[#0b0f19] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2 block">
            Transparent Proof
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            See Before You Buy
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            No blind faith or template surprises. You can inspect the real storefront layouts, test mobile speed, and review every checkout step before spending a single taka.
          </p>
        </div>

        {/* Visual Proof Interactive Showcase */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl max-w-5xl mx-auto">
          {/* Tab Selector */}
          <div className="flex flex-wrap items-center justify-center gap-2 pb-6 border-b border-slate-800">
            {[
              { id: 'checkout', label: '1. Fast Mobile Checkout', icon: CreditCard },
              { id: 'product', label: '2. High-Converting Product Page', icon: ShoppingBag },
              { id: 'mobile', label: '3. Responsive Phone Experience', icon: Smartphone },
              { id: 'admin', label: '4. Easy WordPress Admin', icon: Laptop },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeProofTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveProofTab(tab.id as any)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                      : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Interactive Screen Display */}
          <div className="pt-8">
            {activeProofTab === 'checkout' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase text-indigo-400">Checkout Experience</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Designed to Stop Abandoned Orders
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Most e-commerce websites lose 70% of potential buyers at the checkout screen due to complicated account creation requirements. Our stores offer smooth guest checkout with simple delivery fields and instant mobile banking selection.
                  </p>
                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>One-page streamlined customer form</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>bKash / Nagad payment instructions clearly displayed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Cash on Delivery (COD) pre-configured</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 text-xs text-slate-300 space-y-3 shadow-inner">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-800 font-bold text-white">
                    <span>Order Summary</span>
                    <span className="text-emerald-400">৳2,450 BDT</span>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 space-y-1">
                    <div className="text-[11px] text-slate-400">Customer Details:</div>
                    <div className="text-white font-medium">Name: Karim Ahmed</div>
                    <div className="text-white font-medium">Phone: 01700-000000</div>
                    <div className="text-slate-400">Area: Mirpur, Dhaka</div>
                  </div>
                  <div className="bg-emerald-950/60 p-3 rounded-lg border border-emerald-800/60 text-emerald-300 text-[11px]">
                    ✓ Ready to submit with 1-click confirmation SMS & WhatsApp notice.
                  </div>
                </div>
              </div>
            )}

            {activeProofTab === 'product' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase text-indigo-400">Product Layout</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Clear Imagery, Live Pricing, and Variations
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Shoppers want to inspect details quickly. Product pages include high-resolution gallery thumbnails, size charts, descriptions, and dynamic price updates when variations change.
                  </p>
                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Optimized image galleries with smooth touch swipe</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Stock inventory counter to generate healthy urgency</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 text-center space-y-3">
                  <div className="text-5xl my-2">🛍️</div>
                  <div className="text-sm font-bold text-white">Interactive Single Product Page</div>
                  <div className="text-xs text-slate-400 max-w-xs mx-auto">
                    Full Elementor support allows adding custom video embeds, trust badges, or measurement charts anytime.
                  </div>
                </div>
              </div>
            )}

            {activeProofTab === 'mobile' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase text-indigo-400">Mobile Optimization</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Engineered for Smartphone Shoppers
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Over 85% of ad traffic from Facebook and Instagram arrives on mobile devices. Every template is strictly tested to load fast over 4G networks with sticky buttons and accessible touch targets.
                  </p>
                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Zero horizontal page shifting or broken menus</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Thumb-friendly bottom navigation and quick checkout</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center">
                  <div className="inline-block p-4 rounded-2xl bg-slate-900 border border-slate-700 shadow-md">
                    <Smartphone className="w-12 h-12 text-indigo-400 mx-auto mb-2" />
                    <div className="text-xs font-bold text-white">Mobile-First Testing</div>
                    <div className="text-[11px] text-slate-400 mt-1">iOS & Android Responsive</div>
                  </div>
                </div>
              </div>
            )}

            {activeProofTab === 'admin' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase text-indigo-400">Store Management</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Manage Orders and Products With Ease
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    You do not need to be a programmer to operate your store. Add new products, edit prices, view today's orders, and export customer data via the straightforward WordPress admin dashboard.
                  </p>
                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Simple forms for new product titles and images</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Direct CSV export of orders for courier delivery</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 text-xs font-mono text-slate-400 space-y-2">
                  <div className="text-white font-bold pb-2 border-b border-slate-800">
                    WordPress Dashboard Preview
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-900">
                    <span>📦 Orders Received Today</span>
                    <span className="text-emerald-400 font-bold">12 Orders</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-900">
                    <span>💵 Gross Sales</span>
                    <span className="text-white font-bold">৳28,400</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>🛒 Average Order Value</span>
                    <span className="text-indigo-400 font-bold">৳2,360</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Real Testimonial Placeholders (Strictly Honoring User Instructions) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
              <span className="font-bold text-white">{PLACEHOLDERS.REAL_TESTIMONIAL_1.client}</span>
              <span className="text-indigo-400 font-mono text-[11px]">[REAL_TESTIMONIAL_1]</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
              "{PLACEHOLDERS.REAL_TESTIMONIAL_1.text}"
            </p>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
              <span>{PLACEHOLDERS.REAL_TESTIMONIAL_1.niche}</span>
              <span className="text-emerald-400 font-medium">✓ Client Verification</span>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
              <span className="font-bold text-white">{PLACEHOLDERS.REAL_TESTIMONIAL_2.client}</span>
              <span className="text-indigo-400 font-mono text-[11px]">[REAL_TESTIMONIAL_2]</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
              "{PLACEHOLDERS.REAL_TESTIMONIAL_2.text}"
            </p>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
              <span>{PLACEHOLDERS.REAL_TESTIMONIAL_2.niche}</span>
              <span className="text-emerald-400 font-medium">✓ Client Verification</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
