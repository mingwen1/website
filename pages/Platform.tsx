
import React from 'react';
import { BrainCircuit, Users, TrendingUp, Sparkles, Target, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

const Platform: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6">The LeapIn Talent Intelligence Platform</h1>
          <p className="text-2xl text-slate-600 max-w-4xl mx-auto mb-10 leading-relaxed">
            A single AI platform to hire, develop, and mobilize talent — globally and at scale.
          </p>
          <div className="max-w-3xl mx-auto bg-blue-100/50 text-blue-800 p-6 rounded-2xl border border-blue-200">
            LeapIn moves beyond traditional HR systems to deliver skills-based intelligence across your entire workforce.
          </div>
        </div>
      </section>

      {/* CORE PLATFORM PILLARS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">Core Platform Pillars</h2>
          <div className="space-y-32">
            {[
              {
                title: 'AI Talent Acquisition',
                subtitle: 'Predict skills before you hire.',
                desc: 'LeapIn predicts skills, potential, and fit using behavioral AI — enabling faster, fairer, and more accurate hiring decisions at scale.',
                outcomes: ['Faster time-to-hire', 'Reduced bias', 'Higher quality of hire'],
                icon: <BrainCircuit size={48} className="text-blue-600" />,
                img: 'https://picsum.photos/800/600?random=10'
              },
              {
                title: 'AI Talent Marketplace',
                subtitle: 'Turn hidden talent into strategic advantage.',
                desc: 'LeapIn continuously maps skills and potential to internal roles, projects, and succession needs.',
                outcomes: ['Higher internal mobility', 'Stronger succession pipelines', 'Improved retention'],
                icon: <Users size={48} className="text-blue-600" />,
                img: 'https://picsum.photos/800/600?random=11',
                reverse: true
              },
              {
                title: 'AI Talent Development',
                subtitle: 'Align people growth with business strategy.',
                desc: 'LeapIn identifies skill gaps and delivers personalized development pathways aligned to business priorities.',
                outcomes: ['Stronger leadership pipelines', 'Future-ready workforce', 'Continuous upskilling'],
                icon: <TrendingUp size={48} className="text-blue-600" />,
                img: 'https://picsum.photos/800/600?random=12'
              }
            ].map((pillar, idx) => (
              <div key={idx} className={`flex flex-col ${pillar.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
                <div className="lg:w-1/2">
                  <div className="mb-6">{pillar.icon}</div>
                  <h3 className="text-4xl font-bold text-slate-900 mb-4">{pillar.title}</h3>
                  <p className="text-xl font-bold text-blue-600 mb-6">{pillar.subtitle}</p>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">{pillar.desc}</p>
                  <div className="space-y-4">
                    <p className="font-bold text-sm uppercase tracking-wider text-slate-400">Key Outcomes</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {pillar.outcomes.map((outcome, oIdx) => (
                        <div key={oIdx} className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                          <CheckCircle2 className="text-green-500" size={20} />
                          <span className="font-semibold text-slate-700">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <img src={pillar.img} alt={pillar.title} className="rounded-3xl shadow-2xl border border-slate-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLIED AI AGENTS */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-blue-600/10 blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-1 rounded-full text-sm font-bold mb-6 border border-blue-500/30">
                <Sparkles size={16} />
                <span>Featured Intelligence Agent</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">AI Sales Coach</h2>
              <p className="text-2xl text-blue-400 font-bold mb-6">Scale winning sales behavior — faster.</p>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                Powered by LeapIn’s behavioral intelligence, AI Sales Coach helps sales teams ramp faster and perform consistently.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { val: '50%', label: 'Faster ramp time' },
                  { val: 'Scale', label: 'Consistent Performance' },
                  { val: 'Boost', label: 'Win Rates' }
                ].map((item, i) => (
                  <div key={i} className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                    <div className="text-2xl font-bold text-white mb-1">{item.val}</div>
                    <div className="text-sm text-slate-400 uppercase tracking-wider">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-3xl shadow-3xl">
                  {/* Abstract UI representation */}
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 mb-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white"><Target /></div>
                    <div className="flex-grow">
                      <div className="h-2 w-32 bg-white/20 rounded-full mb-2"></div>
                      <div className="h-2 w-48 bg-white/40 rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 mb-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white"><Zap /></div>
                    <div className="flex-grow">
                      <div className="h-2 w-24 bg-white/20 rounded-full mb-2"></div>
                      <div className="h-2 w-40 bg-white/40 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-4 border border-white/20 rounded-xl">
                    <p className="text-sm font-medium">Real-time Coach Insight:</p>
                    <p className="italic text-slate-100 mt-1">"Focus on stakeholder alignment in the next phase."</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHARED INTELLIGENCE LAYER */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-white mx-auto mb-8 shadow-2xl shadow-blue-500/40">
            <Zap size={40} fill="currentColor" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Shared Intelligence Layer</h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-12">
            All LeapIn capabilities operate on a single intelligence core — ensuring hiring, mobility, development, and performance are aligned around the same skills and outcomes.
          </p>
          <button className="bg-blue-600 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-blue-700 transition-all flex items-center gap-2 mx-auto">
            Request a Platform Demo <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Platform;
