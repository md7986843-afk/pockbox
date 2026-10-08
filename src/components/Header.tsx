import React, { useState, useEffect } from 'react';
import { ShoppingBag, MessageCircle, Menu, X, ArrowRight } from 'lucide-react';
import { PLACEHOLDERS } from '../data/landingData';

interface HeaderProps {
  onGetStarted: () => void;
  onOpenWhatsApp: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onGetStarted, onOpenWhatsApp }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Website Demos', href: '#demos' },
    { label: 'Packages & Pricing', href: '#pricing' },
    { label: "What's Included", href: '#included' },
    { label: 'Setup & Support', href: '#support' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-slate-200 shadow-md shadow-slate-900/5'
          : 'bg-white border-slate-150'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: PickBox Pro Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-slate-900 group focus:outline-none rounded-lg py-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 flex items-center justify-center text-white shadow-md shadow-indigo-600/25 group-hover:scale-105 transition-transform duration-200">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <div className="flex items-center gap-1.5 font-extrabold text-2xl tracking-tight text-slate-900">
              <span>PickBox</span>
              <span className="text-xs font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-200 px-1.5 py-0.5 rounded-md">
                PRO
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Clean Text Typography) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-base font-semibold text-slate-700 hover:text-indigo-600 transition-colors relative py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenWhatsApp}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-emerald-800 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100/90 border border-emerald-300 rounded-xl transition-all duration-200 cursor-pointer shadow-sm hover:shadow"
              title="Talk to us on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Talk to Us</span>
            </button>

            <button
              onClick={onGetStarted}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl shadow-md shadow-indigo-600/25 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Explore Demos</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenWhatsApp}
              className="p-2 text-emerald-700 hover:bg-emerald-50 rounded-lg border border-emerald-200"
              aria-label="WhatsApp Contact"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg border border-slate-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-3.5 py-3 rounded-lg text-base font-semibold text-slate-800 hover:text-indigo-600 hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-none"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 grid grid-cols-2 gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsApp();
              }}
              className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 rounded-xl"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onGetStarted();
              }}
              className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md"
            >
              <span>Explore Demos</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
