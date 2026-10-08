import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WebsiteDemos } from './components/WebsiteDemos';
import { PricingSection } from './components/PricingSection';
import { NotJustAWebsite } from './components/NotJustAWebsite';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { LiveDemoModal } from './components/LiveDemoModal';
import { DemoItem, PLACEHOLDERS } from './data/landingData';

export default function App() {
  const [selectedDemo, setSelectedDemo] = useState<DemoItem | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<'Basic' | 'Premium'>('Premium');
  const [modalDemo, setModalDemo] = useState<DemoItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenWhatsApp = (customMessage?: string) => {
    const cleanNumber = PLACEHOLDERS.WHATSAPP_NUMBER.replace(/[^0-9]/g, '');
    const defaultText =
      'Hello PickBox Pro! I saw your ready-made e-commerce websites and would like to learn more about launching my online store.';
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
      customMessage || defaultText
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSelectDemo = (demo: DemoItem) => {
    setSelectedDemo(demo);
    showToast(`Selected "${demo.name}". Fill in your details below to get started.`);
    scrollToSection('contact');
  };

  const handleSelectPackage = (pkg: 'Basic' | 'Premium') => {
    setSelectedPackage(pkg);
    showToast(`Selected "${pkg}" Package. Choose your design below.`);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-5 z-50 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl text-sm font-bold flex items-center gap-3 animate-fadeIn border border-slate-700">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header (Clean white sticky) */}
      <Header
        onGetStarted={() => scrollToSection('demos')}
        onOpenWhatsApp={() => handleOpenWhatsApp()}
      />

      {/* Main Streamlined Content Area */}
      <main className="flex-1">
        {/* 1. HERO SECTION (Enlarged, ultra-attractive light design) */}
        <Hero
          onExploreDemos={() => scrollToSection('demos')}
          onTalkToUs={() => handleOpenWhatsApp()}
        />

        {/* 2. PRODUCT / WEBSITE DEMOS SECTION (Immediately Section 2 as requested!) */}
        <WebsiteDemos
          onSelectDemo={handleSelectDemo}
          onOpenLiveDemoModal={(demo) => setModalDemo(demo)}
        />

        {/* 3. PACKAGES, PRICING & INCLUSIONS SECTION */}
        <PricingSection onSelectPackage={handleSelectPackage} />

        {/* 4. SETUP, CUSTOMIZATION, TRUST & 4-STEP HOW IT WORKS */}
        <NotJustAWebsite onExploreDemos={() => scrollToSection('demos')} />

        {/* 5. FINAL CTA & WHATSAPP / ORDER FORM */}
        <FinalCTA
          selectedDemo={selectedDemo}
          selectedPackage={selectedPackage}
          onExploreDemos={() => scrollToSection('demos')}
          onOpenWhatsAppDirect={() => handleOpenWhatsApp()}
        />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* STICKY MOBILE CTA (Bottom mobile bar) */}
      <StickyMobileCTA
        onGetStarted={() => scrollToSection('contact')}
        onOpenWhatsApp={() => handleOpenWhatsApp()}
      />

      {/* INTERACTIVE LIVE DEMO PREVIEW MODAL */}
      <LiveDemoModal
        demo={modalDemo}
        onClose={() => setModalDemo(null)}
        onSelectAndProceed={handleSelectDemo}
      />
    </div>
  );
}
