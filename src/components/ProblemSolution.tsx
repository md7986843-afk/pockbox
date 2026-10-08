import React from 'react';
import { DollarSign, Clock, HelpCircle, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProblemSolutionProps {
  onExploreDemos: () => void;
}

export const ProblemSolution: React.FC<ProblemSolutionProps> = ({ onExploreDemos }) => {
  const problems = [
    {
      icon: DollarSign,
      title: 'Custom websites can be expensive.',
      description:
        'Hiring traditional development agencies often requires tens of thousands in upfront fees, scope creep, and unexpected maintenance retainers.',
    },
    {
      icon: Clock,
      title: 'Building everything from zero takes time.',
      description:
        'Designing pages, configuring servers, setting up themes, and testing checkouts can easily take 6 to 8 weeks before making your first sale.',
    },
    {
      icon: HelpCircle,
      title: 'Choosing the right design, plugins and e-commerce features can be confusing.',
      description:
        'Untested plugins frequently conflict, crash payment gateways, slow down mobile speeds, and leave small businesses frustrated.',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2 block">
            The Smarter Path
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Starting an Online Store Doesn't Have to Be Complicated.
          </h2>
        </div>

        {/* 3 Common Problems Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <div
                key={idx}
                className="bg-slate-950 border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-rose-950/60 border border-rose-800/40 text-rose-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {prob.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {prob.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clean Solution Banner */}
        <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 border border-indigo-800/40 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start gap-4 text-center sm:text-left">
            <div className="hidden sm:flex w-11 h-11 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 items-center justify-center shrink-0 mt-0.5">
              <CheckCircle2 className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-1">
                The PickBox Pro Solution
              </div>
              <p className="text-lg sm:text-xl font-bold text-white">
                Pick a ready-made website, customize it for your business, and get your store ready to launch.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Skip the guesswork. Inspect the exact design beforehand, receive complete setup assistance, and start accepting customer orders in days.
              </p>
            </div>
          </div>

          <button
            onClick={onExploreDemos}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-md transition-colors cursor-pointer"
          >
            <span>See Available Demos</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
