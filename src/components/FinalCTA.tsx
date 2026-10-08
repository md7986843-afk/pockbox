import React, { useState } from 'react';
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  ArrowRight,
  ShoppingBag,
} from 'lucide-react';
import { PLACEHOLDERS, WEBSITE_DEMOS, DemoItem } from '../data/landingData';

interface FinalCTAProps {
  selectedDemo: DemoItem | null;
  selectedPackage: 'Basic' | 'Premium';
  onExploreDemos: () => void;
  onOpenWhatsAppDirect: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  selectedDemo,
  selectedPackage,
  onExploreDemos,
  onOpenWhatsAppDirect,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [pkgChoice, setPkgChoice] = useState<'Basic' | 'Premium'>(selectedPackage);
  const [demoChoice, setDemoChoice] = useState<string>(
    selectedDemo ? selectedDemo.name : 'Aura Trendwear (Fashion)'
  );
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (selectedDemo) {
      setDemoChoice(selectedDemo.name);
    }
  }, [selectedDemo]);

  React.useEffect(() => {
    setPkgChoice(selectedPackage);
  }, [selectedPackage]);

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();

    let text = `Hello PickBox Pro! I would like to get my ready-made e-commerce website.\n\n`;
    text += `• Selected Package: ${pkgChoice}\n`;
    text += `• Preferred Website Demo: ${demoChoice}\n`;
    if (name) text += `• My Name: ${name}\n`;
    if (phone) text += `• Contact/WhatsApp: ${phone}\n`;
    if (businessType) text += `• Business Category: ${businessType}\n`;
    if (notes) text += `• Notes / Requirements: ${notes}\n`;

    const cleanNum = PLACEHOLDERS.WHATSAPP_NUMBER.replace(/[^0-9]/g, '');
    const url = `https://wa.me/${cleanNum}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Please provide your name and phone/WhatsApp number.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 px-3.5 py-1 rounded-full mb-3 inline-block">
            Start Selling Online
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Ready to Start Your Online Store?
          </h2>
          <p className="text-lg sm:text-xl text-slate-600">
            Choose a design you like and let us help you turn it into your business website.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onExploreDemos}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-extrabold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Explore Website Demos</span>
            </button>
            <button
              onClick={onOpenWhatsAppDirect}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-bold text-emerald-800 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border-2 border-emerald-300 rounded-xl transition-all cursor-pointer shadow-sm"
            >
              <MessageCircle className="w-5 h-5 text-emerald-600" />
              <span>Talk to Us on WhatsApp</span>
            </button>
          </div>
        </div>

        {/* 2-Column Form & Direct Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 border-2 border-slate-200 rounded-3xl p-7 sm:p-8 space-y-6 shadow-sm">
              <div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight mb-2">
                  Direct Contact & Support
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Have questions before getting started? You can message us directly on WhatsApp or call our support line.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4 text-sm">
                {/* WhatsApp */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">
                      WhatsApp: [WHATSAPP_NUMBER]
                    </div>
                    <div className="text-slate-900 font-extrabold text-base">
                      {PLACEHOLDERS.WHATSAPP_NUMBER}
                    </div>
                    <div className="text-xs text-emerald-600 font-bold">Fast Response on WhatsApp</div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">
                      Phone: [PHONE_NUMBER]
                    </div>
                    <div className="text-slate-900 font-extrabold text-base">
                      {PLACEHOLDERS.PHONE_NUMBER}
                    </div>
                    <div className="text-xs text-slate-500">10:00 AM – 10:00 PM Everyday</div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">
                      Email: [EMAIL_ADDRESS]
                    </div>
                    <div className="text-slate-900 font-extrabold text-base">
                      {PLACEHOLDERS.EMAIL_ADDRESS}
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">
                      Address: [BUSINESS_ADDRESS]
                    </div>
                    <div className="text-slate-900 font-extrabold text-base">
                      {PLACEHOLDERS.BUSINESS_ADDRESS}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Order Form */}
          <div className="lg:col-span-7 bg-white border-2 border-slate-200 rounded-3xl p-7 sm:p-9 shadow-lg">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Thank You, {name}!
                </h3>
                <p className="text-base text-slate-600 max-w-md mx-auto">
                  We have received your request for the <strong>{pkgChoice}</strong> package ({demoChoice}). We will contact you via WhatsApp / phone shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 text-sm font-bold text-indigo-600 hover:text-white bg-indigo-50 hover:bg-indigo-600 rounded-xl border border-indigo-200 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleWhatsAppSend} className="space-y-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    Get Your Ready-Made Website
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Select your demo and package to start setup with our team.
                  </p>
                </div>

                {/* Package & Demo Selectors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Selected Package:
                    </label>
                    <select
                      value={pkgChoice}
                      onChange={(e) => setPkgChoice(e.target.value as any)}
                      className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:border-indigo-600"
                    >
                      <option value="Basic">Basic Package (৳4,999 / $49)</option>
                      <option value="Premium">Premium Package (৳9,999 / $99) — Most Popular</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Selected Store Demo:
                    </label>
                    <select
                      value={demoChoice}
                      onChange={(e) => setDemoChoice(e.target.value)}
                      className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:border-indigo-600"
                    >
                      {WEBSITE_DEMOS.map((d) => (
                        <option key={d.id} value={d.name}>
                          {d.name} ({d.category})
                        </option>
                      ))}
                      <option value="Custom Requirement">Other / Custom Category</option>
                    </select>
                  </div>
                </div>

                {/* User Info Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Name: *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tanvir Hossain"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone / WhatsApp Number: *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 01700-000000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Business Category / Products:
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Clothing brand, Organic food, Gadgets, Restaurant"
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Additional Notes or Questions (Optional):
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Do you already have a domain/hosting? Any specific gateway requirements?"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 resize-none"
                  />
                </div>

                {/* Submit Actions */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-black text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/25 transition-all hover:-translate-y-0.5 cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleDirectSubmit}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-black text-sm text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/25 transition-all hover:-translate-y-0.5 cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                    <span>Submit Inquiry</span>
                  </button>
                </div>

                <div className="text-xs text-slate-500 text-center pt-1 font-medium">
                  We respond promptly via WhatsApp or phone call.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
