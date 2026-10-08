import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { PLACEHOLDERS } from '../data/landingData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 py-12 md:py-16">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5 text-slate-900">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-1.5 font-extrabold text-2xl tracking-tight text-slate-900">
                <span>PickBox</span>
                <span className="text-xs font-bold uppercase tracking-wider bg-indigo-100 text-indigo-700 border border-indigo-200 px-1.5 py-0.5 rounded-md">
                  PRO
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed max-w-md">
              Ready-made websites and digital solutions for businesses, entrepreneurs and creators.
            </p>

            <div className="text-xs text-slate-500 font-medium">
              Dhaka, Bangladesh · Official E-Commerce Store Platform
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Quick Navigation
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#demos" className="hover:text-indigo-600 transition-colors">
                  Website Demos
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-indigo-600 transition-colors">
                  Packages & Pricing
                </a>
              </li>
              <li>
                <a href="#included" className="hover:text-indigo-600 transition-colors">
                  What's Included
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-indigo-600 transition-colors">
                  Setup & Support
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-600 transition-colors">
                  Contact & Orders
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Social */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Assurance & Policies
            </div>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <span className="hover:text-slate-900 cursor-pointer">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="hover:text-slate-900 cursor-pointer">
                  Terms & Conditions
                </span>
              </li>
              <li>
                <span className="hover:text-slate-900 cursor-pointer">
                  Refund & Handover Policy
                </span>
              </li>
              <li className="pt-2 text-xs">
                <span>Social: [FACEBOOK_PAGE] · [INSTAGRAM_PAGE]</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} PickBox Pro. All rights reserved.
          </div>
          <div className="font-semibold text-slate-600">
            "We Don't Just Build Websites. We Help You Start Online."
          </div>
        </div>
      </div>
    </footer>
  );
};
