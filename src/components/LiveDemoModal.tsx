import React, { useState } from 'react';
import { X, Laptop, Tablet, Smartphone, ShoppingCart, Check, Star, ArrowRight } from 'lucide-react';
import { DemoItem } from '../data/landingData';

interface LiveDemoModalProps {
  demo: DemoItem | null;
  onClose: () => void;
  onSelectAndProceed: (demo: DemoItem) => void;
}

type Viewport = 'desktop' | 'tablet' | 'mobile';

export const LiveDemoModal: React.FC<LiveDemoModalProps> = ({
  demo,
  onClose,
  onSelectAndProceed,
}) => {
  const [viewport, setViewport] = useState<Viewport>('desktop');
  const [cartItems, setCartItems] = useState<string[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  if (!demo) return null;

  const handleAddToCart = (productName: string) => {
    setCartItems((prev) => [...prev, productName]);
    setNotification(`Added "${productName}" to demo store cart!`);
    setTimeout(() => setNotification(null), 2500);
  };

  const getViewportWidth = () => {
    switch (viewport) {
      case 'mobile':
        return 'max-w-[400px]';
      case 'tablet':
        return 'max-w-[768px]';
      case 'desktop':
      default:
        return 'w-full';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white border border-slate-300 w-full max-w-6xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Top Control Bar */}
        <div className="bg-slate-50 px-5 py-3.5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
          {/* Demo Details */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-black text-slate-900">{demo.name}</span>
                <span className="text-xs text-indigo-700 font-extrabold px-2.5 py-0.5 rounded-md bg-indigo-50 border border-indigo-200">
                  {demo.category} Store
                </span>
              </div>
              <div className="text-xs font-mono text-slate-500 flex items-center gap-1.5 mt-0.5">
                <span>{demo.demoUrlPlaceholder}</span>
                <span>·</span>
                <span className="text-emerald-700 font-bold">Interactive Sandbox</span>
              </div>
            </div>
          </div>

          {/* Viewport Switcher Controls */}
          <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200 shadow-xs">
            <button
              onClick={() => setViewport('desktop')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                viewport === 'desktop'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Laptop className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Desktop</span>
            </button>
            <button
              onClick={() => setViewport('tablet')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                viewport === 'tablet'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Tablet className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Tablet</span>
            </button>
            <button
              onClick={() => setViewport('mobile')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                viewport === 'mobile'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Mobile</span>
            </button>
          </div>

          {/* Top Right Action & Close */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => {
                onSelectAndProceed(demo);
                onClose();
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-black text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm cursor-pointer"
            >
              <span>Get This Website</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Simulated Store Preview Canvas */}
        <div className="flex-1 bg-slate-100 p-3 sm:p-6 overflow-y-auto flex justify-center items-start min-h-[480px]">
          <div
            className={`transition-all duration-300 mx-auto rounded-2xl shadow-xl bg-white text-slate-900 border border-slate-300 overflow-hidden ${getViewportWidth()}`}
          >
            {/* Storefront Nav Header */}
            <div className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-sm"
                  style={{ backgroundColor: demo.accentColor }}
                >
                  {demo.name.charAt(0)}
                </div>
                <div>
                  <div className="font-extrabold text-sm text-slate-900 tracking-tight">
                    {demo.name.toUpperCase()}
                  </div>
                  <div className="text-[10px] text-slate-500">{demo.tagline}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-4 text-xs font-semibold text-slate-600">
                  <span className="hover:text-indigo-600 cursor-pointer">Shop</span>
                  <span className="hover:text-indigo-600 cursor-pointer">Categories</span>
                  <span className="hover:text-indigo-600 cursor-pointer">Deals</span>
                </div>

                <div className="relative flex items-center gap-1.5 bg-slate-100 text-slate-800 px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer">
                  <ShoppingCart className="w-4 h-4 text-slate-700" />
                  <span>Cart</span>
                  <span
                    className="ml-1 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold"
                    style={{ backgroundColor: demo.accentColor }}
                  >
                    {cartItems.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Notification Banner */}
            {notification && (
              <div className="bg-emerald-600 text-white text-xs px-4 py-2 font-bold flex items-center justify-between">
                <span>✓ {notification}</span>
                <span className="text-[11px]">Cart: {cartItems.length}</span>
              </div>
            )}

            {/* Store Hero Banner */}
            <div
              className={`p-6 sm:p-8 text-white bg-gradient-to-r ${demo.previewBg} relative overflow-hidden`}
            >
              <div className="max-w-md space-y-2 relative z-10">
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-white/20 backdrop-blur-sm text-white">
                  Featured Collection
                </span>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                  Welcome to {demo.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {demo.description}
                </p>
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => handleAddToCart('Featured Collection Item')}
                    className="text-xs font-extrabold px-4 py-2 rounded-lg bg-white text-slate-950 hover:bg-slate-100 shadow-sm cursor-pointer"
                  >
                    Shop This Category
                  </button>
                  <span className="text-xs text-slate-200">bKash & Cards Ready</span>
                </div>
              </div>
            </div>

            {/* Features Tags Bar */}
            <div className="bg-slate-50 border-y border-slate-200 px-4 py-2 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
              <span className="font-bold text-slate-800">Store Features:</span>
              <div className="flex flex-wrap items-center gap-2">
                {demo.features.map((feat, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-700"
                  >
                    <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />
                    <span>{feat}</span>
                    {idx < demo.features.length - 1 && <span className="text-slate-300 ml-1">·</span>}
                  </span>
                ))}
              </div>
            </div>

            {/* Sample Catalog Products */}
            <div className="p-4 sm:p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide">
                    Live Sample Products
                  </h4>
                  <p className="text-xs text-slate-500">Click to test instant add to cart</p>
                </div>
                <span className="text-xs font-bold text-indigo-600">Free Delivery Available</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {demo.sampleProducts.map((prod, pIdx) => (
                  <div
                    key={pIdx}
                    className="border border-slate-200 rounded-2xl p-3.5 bg-white hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-square rounded-xl bg-slate-100 flex items-center justify-center text-4xl mb-3">
                        {prod.image}
                        <span className="absolute top-2 left-2 bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                          {prod.tag}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-amber-500 mb-1">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span className="font-bold text-slate-800">{prod.rating}</span>
                        <span className="text-slate-400 text-[10px]">(Verified)</span>
                      </div>
                      <div className="text-xs font-bold text-slate-900 line-clamp-1 mb-1">
                        {prod.name}
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm font-extrabold text-slate-900">
                          ৳{prod.priceBDT.toLocaleString()}
                        </span>
                        <span className="text-xs text-slate-400">(${prod.priceUSD})</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleAddToCart(prod.name)}
                      className="mt-3.5 w-full py-2 text-xs font-extrabold text-white rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                      style={{ backgroundColor: demo.accentColor }}
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                ))}
              </div>

              {/* Bottom Choose Design Prompt */}
              <div className="mt-4 p-4 bg-indigo-50 rounded-2xl border border-indigo-200 text-xs text-slate-700 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="font-medium">
                  We configure this exact store with your logo, colors, and initial products.
                </span>
                <button
                  onClick={() => {
                    onSelectAndProceed(demo);
                    onClose();
                  }}
                  className="font-extrabold text-indigo-700 hover:text-indigo-800 whitespace-nowrap cursor-pointer text-sm"
                >
                  Choose this design →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="bg-slate-50 px-5 py-3.5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            <span>Demo Placeholder: </span>
            <code className="text-indigo-700 font-mono bg-white px-2 py-0.5 rounded border border-slate-200">
              {demo.demoUrlPlaceholder}
            </code>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-2.5 text-xs font-bold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 rounded-xl border border-slate-300 transition-colors cursor-pointer"
            >
              Close Preview
            </button>
            <button
              onClick={() => {
                onSelectAndProceed(demo);
                onClose();
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-black text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm transition-colors cursor-pointer"
            >
              <span>Get This Website ({demo.name})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
