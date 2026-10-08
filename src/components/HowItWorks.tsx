import React from 'react';
import { Eye, CheckSquare, Palette, Rocket, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onExploreDemos: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onExploreDemos }) => {
  const steps = [
    {
      num: '01',
      title: 'Choose a Demo',
      description: 'Browse the available ready-made website designs and pick the layout that best fits your business niche.',
      icon: Eye,
    },
    {
      num: '02',
      title: 'Choose Your Package',
      description: 'Select Basic for an essential starter store or Premium for an advanced shopping experience and higher conversions.',
      icon: CheckSquare,
    },
    {
      num: '03',
      title: 'Customize',
      description: 'Share your logo, brand colors, product catalog, contact numbers, and preferred payment gateways.',
      icon: Palette,
    },
    {
      num: '04',
      title: 'Launch',
      description: 'We configure and test your store, hand over the admin credentials, and get your business ready to start selling online.',
      icon: Rocket,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#090d16] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2 block">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            From Demo to Your Online Store in 4 Simple Steps
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Skip months of development delays. Launch your professional store in a straightforward, guided flow.
          </p>
        </div>

        {/* Timeline: Desktop Horizontal / Mobile Vertical */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-lg"
                >
                  <div>
                    {/* Top Row: Number & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-3xl sm:text-4xl font-black text-indigo-500/80 font-mono tracking-tight">
                        {step.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-indigo-950/70 border border-indigo-800/60 text-indigo-400 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-500">
                    Step {step.num} of 04
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-14 text-center">
          <button
            onClick={onExploreDemos}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-md transition-colors cursor-pointer"
          >
            <span>Start Step 01: Browse Demos</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
