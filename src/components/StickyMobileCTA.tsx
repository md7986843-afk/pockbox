import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { PLACEHOLDERS } from '../data/landingData';

interface StickyMobileCTAProps {
  onGetStarted: () => void;
  onOpenWhatsApp: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({
  onGetStarted,
  onOpenWhatsApp,
}) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3.5 py-2.5 shadow-2xl flex items-center justify-between gap-3 max-h-[64px]">
      <div className="flex-1 truncate">
        <div className="text-[11px] font-medium text-slate-500 truncate">
          PickBox Pro Ready-Made Store
        </div>
        <div className="text-xs font-black text-slate-900 truncate">
          Launch Your Website
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={onOpenWhatsApp}
          className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-700 active:scale-95 transition-transform cursor-pointer"
          aria-label="WhatsApp Contact"
        >
          <MessageCircle className="w-4 h-4" />
        </button>

        <button
          onClick={onGetStarted}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-black text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md transition-transform active:scale-95 cursor-pointer whitespace-nowrap"
        >
          <span>Get Started</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
