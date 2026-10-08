import React from 'react';
import {
  Wrench,
  Sliders,
  Package,
  CreditCard,
  BookOpen,
  HeadphonesIcon,
  CheckCircle2,
  Rocket,
  Palette,
  Eye,
  ArrowRight,
} from 'lucide-react';

interface NotJustAWebsiteProps {
  onExploreDemos: () => void;
}

export const NotJustAWebsite: React.FC<NotJustAWebsiteProps> = ({ onExploreDemos }) => {
  const cards = [
    {
      icon: Wrench,
      title: '1. Setup on Your Domain',
      description:
        'We help prepare your website for launch directly on your domain and web hosting, ensuring security and SSL certificates are active.',
    },
    {
      icon: Sliders,
      title: '2. Brand Customization',
      description:
        'Your selected demo is tailored to your business: your logo, brand colors, typography, and menu navigation are properly updated.',
    },
    {
      icon: Package,
      title: '3. Product & Category Setup',
      description:
        'Products, categories, and inventory structure are prepared so you have a working template to continue adding your catalog.',
    },
    {
      icon: CreditCard,
      title: '4. Payment Configuration',
      description:
        'We configure Cash on Delivery (COD) as well as supported mobile banking gateways (bKash, Nagad, Rocket) and card processing.',
    },
    {
      icon: BookOpen,
      title: '5. Dashboard Guidance',
      description:
        'We walk you through how to manage your store: adding new products, editing prices, processing orders, and checking sales.',
    },
    {
      icon: HeadphonesIcon,
      title: '6. Post-Launch Support',
      description:
        'You can reach out to us when you need assistance after purchase. We ensure your launch is smooth and answer operational questions.',
    },
  ];

  const steps = [
    {
      num: '01',
      title: 'Choose a Demo',
      desc: 'Browse the available ready-made website designs and pick the one that matches your brand vision.',
      icon: Eye,
    },
    {
      num: '02',
      title: 'Choose Package',
      desc: 'Select Basic for an essential starter store or Premium for an advanced shopping experience.',
      icon: Sliders,
    },
    {
      num: '03',
      title: 'Customize',
      desc: 'Send us your logo, brand colors, product catalog, contact numbers, and payment details.',
      icon: Palette,
    },
    {
      num: '04',
      title: 'Launch & Sell',
      desc: 'We configure and test your store, hand over the admin credentials, and get you ready to sell online.',
      icon: Rocket,
    },
  ];

  return (
    <section id="support" className="py-20 md:py-28 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 px-3.5 py-1 rounded-full mb-3 inline-block">
            Comprehensive Support
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            You're Not Just Buying a Website.
          </h2>
          <p className="text-lg sm:text-xl text-slate-600">
            We help you get your online store ready for business. Instead of leaving you with raw files, we make sure your store actually operates.
          </p>
        </div>

        {/* 6 Support Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-20">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white border-2 border-slate-200/90 rounded-2xl p-7 hover:border-indigo-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-start"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center mb-5 shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Brand Promise Callout */}
        <div className="bg-indigo-600 rounded-3xl p-8 sm:p-10 text-white text-center max-w-4xl mx-auto shadow-xl shadow-indigo-600/20 mb-20">
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
            "We Don't Just Build Websites. We Help You Start Online."
          </h3>
          <p className="text-base sm:text-lg text-indigo-100 max-w-2xl mx-auto">
            Professional, affordable, and ready-to-customize online stores for small businesses, Facebook sellers, and new entrepreneurs.
          </p>
        </div>

        {/* Streamlined 4-Step Timeline */}
        <div className="pt-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              From Demo to Your Online Store in 4 Simple Steps
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Launch in days instead of waiting weeks for custom development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-indigo-300 hover:shadow-lg transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-black text-indigo-600 font-mono">
                        {step.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1.5">{step.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-150 text-[11px] font-mono text-slate-400">
                    Step {step.num} of 04
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={onExploreDemos}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <span>Explore Available Store Demos</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
