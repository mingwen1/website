
import React, { useState } from 'react';
// Added BrainCircuit to the lucide-react imports
import { ArrowRight, CheckCircle2, TrendingUp, Users, Target, ShieldCheck, Zap, MinusCircle, AlertCircle, BarChart3, ChevronRight, BrainCircuit } from 'lucide-react';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'CHRO' | 'Business Leaders' | 'Talent Teams'>('CHRO');

  const tabsContent = {
    'CHRO': {
      title: 'Drive Strategic Impact',
      points: ['Gain real-time skills visibility across the enterprise', 'Predict future workforce gaps', 'Build a culture of internal mobility']
    },
    'Business Leaders': {
      title: 'Agile Resource Allocation',
      points: ['Assemble high-performing teams faster', 'Identify and retain high-potential talent', 'Align skills with strategic priorities']
    },
    'Talent Teams': {
      title: 'Precision in Execution',
      points: ['Reduce bias in hiring and promotions', 'Automate skill matching processes', 'Deliver personalized career growth at scale']
    }
  };

  return (
    <div className="overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-3/5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <Zap size={16} fill="currentColor" />
                <span>Next-Gen Talent Intelligence</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-8">
                AI Talent Intelligence for <span className="text-blue-600">Global Enterprises</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Predict skills. Match talent. Build future-ready teams — at enterprise scale. 
                LeapIn helps Fortune 500 organizations hire smarter, develop faster, and retain top talent.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl flex items-center gap-2">
                  Request a Demo <ArrowRight size={20} />
                </button>
                <button className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-50 transition-all">
                  Talk to Sales
                </button>
              </div>
            </div>
            <div className="lg:w-2/5 relative">
              <div className="relative z-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100">
                {/* Visual Representation of AI Intelligence */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                      <Target size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Skill Matching</div>
                      <div className="font-semibold text-slate-800">98% Fit Accuracy</div>
                    </div>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 w-4/5"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 border border-slate-100 rounded-xl bg-slate-50">
                      <div className="text-xs text-slate-500 mb-1">Time Saved</div>
                      <div className="text-lg font-bold text-blue-600">72%</div>
                    </div>
                    <div className="p-3 border border-slate-100 rounded-xl bg-slate-50">
                      <div className="text-xs text-slate-500 mb-1">Mobility</div>
                      <div className="text-lg font-bold text-blue-600">3.5x</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/10 blur-3xl rounded-full"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/10 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="py-12 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-[0.2em] mb-8">Trusted by Global Enterprises</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
             {/* Placeholders for logos */}
             {['Fortune 500', 'Top Retail', 'Global Tech', 'FinServ Giant', 'HealthCare Inc'].map(name => (
               <span key={name} className="text-xl font-bold text-slate-400 grayscale hover:grayscale-0 transition-all cursor-default">{name}</span>
             ))}
          </div>
        </div>
      </section>

      {/* 3. The Problem Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-16">
            <div className="lg:w-1/3 sticky top-32">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Talent Is Now a Board-Level Risk</h2>
              <p className="text-lg text-slate-600 mb-8">
                In a world of constant disruption, your greatest bottleneck isn't technology — it's talent.
              </p>
              <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
                <p className="font-semibold text-red-900">The result:</p>
                <p className="text-red-700 italic">Talent becomes a constraint — not a competitive advantage.</p>
              </div>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Slow Hiring', desc: 'Months to fill critical roles', icon: <MinusCircle className="text-red-500" /> },
                { title: 'High Costs', desc: 'Recruitment spend is spiraling', icon: <AlertCircle className="text-red-500" /> },
                { title: 'Hidden Bias', desc: 'Intuition-based hiring risks', icon: <AlertCircle className="text-red-500" /> },
                { title: 'No Skills Visibility', desc: 'Flying blind on capabilities', icon: <MinusCircle className="text-red-500" /> },
                { title: 'Low Mobility', desc: 'Internal talent feels stuck', icon: <MinusCircle className="text-red-500" /> },
                { title: 'Poor Scalability', desc: 'Global ops disconnected', icon: <AlertCircle className="text-red-500" /> },
              ].map((item, idx) => (
                <div key={idx} className="p-8 border border-slate-100 rounded-2xl hover:shadow-lg transition-all group hover:border-blue-100 bg-slate-50/30">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Solution Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">One Platform. Total Talent Intelligence.</h2>
            <p className="text-xl text-slate-400">
              LeapIn brings intelligence to every talent decision by predicting skills, potential, and fit using behavioral AI — all on a single enterprise platform.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'AI Talent Acquisition',
                subtitle: 'Hire for skills and potential — not resumes.',
                desc: 'Predict on-the-job success with behavioral AI that delivers faster, fairer, and more consistent hiring.',
                icon: <BrainCircuit className="text-blue-400" size={32} />
              },
              {
                title: 'AI Talent Marketplace',
                subtitle: 'Make skills visible. Unlock internal mobility.',
                desc: 'Create a dynamic internal talent marketplace with predictive skill profiling and role matching.',
                icon: <Users className="text-blue-400" size={32} />
              },
              {
                title: 'AI Talent Development',
                subtitle: 'Develop people with precision.',
                desc: 'Personalize growth and succession planning using real skill gaps and business priorities.',
                icon: <TrendingUp className="text-blue-400" size={32} />
              }
            ].map((pillar, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm p-10 rounded-3xl border border-slate-700 hover:border-blue-500 transition-all flex flex-col group">
                <div className="mb-6">{pillar.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{pillar.title}</h3>
                <p className="font-semibold text-blue-400 mb-4">{pillar.subtitle}</p>
                <p className="text-slate-400 flex-grow leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="inline-flex items-center gap-2 text-white font-bold text-lg hover:text-blue-400 transition-colors group">
              Explore the Platform <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. ROI & Impact */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Proven ROI at Enterprise Scale</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { val: '10×', label: 'Faster Hiring' },
              { val: '87%', label: 'Cost Savings in recruitment spend' },
              { val: '80%', label: 'Lower Turnover through fit prediction' },
              { val: '3–5×', label: 'Increase in internal mobility' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-6xl font-black mb-4 tracking-tight">{stat.val}</div>
                <p className="text-blue-100 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xl font-medium text-blue-50 max-w-2xl mx-auto">
            LeapIn turns talent data into measurable business outcomes.
          </p>
        </div>
      </section>

      {/* 6. Why LeapIn (Differentiation) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <img src="https://picsum.photos/800/600?random=1" alt="Enterprise AI" className="rounded-3xl shadow-2xl" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">Built for Enterprises That Can’t Afford Talent Mistakes</h2>
            <ul className="space-y-6">
              {[
                'Patented behavioral AI models',
                'Trained on billions of data points',
                'Industry-specific models (8 major sectors)',
                '20+ languages, global-ready compliance',
                'Secure, scalable, and API-first architecture'
              ].map((point, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                  <span className="text-lg text-slate-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7. WHO IT’S FOR */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Who Is LeapIn For?</h2>
            <p className="text-slate-600">Empowering every level of your organization with intelligence.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="flex border-b border-slate-100 overflow-x-auto">
              {(Object.keys(tabsContent) as Array<keyof typeof tabsContent>).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-8 py-5 text-sm font-bold transition-all whitespace-nowrap ${activeTab === tab ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-blue-600'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="p-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{tabsContent[activeTab].title}</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tabsContent[activeTab].points.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <CheckCircle2 className="text-blue-600" size={20} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Turn Talent Into Your Competitive Advantage</h2>
          <p className="text-xl text-slate-400 mb-10">
            See how LeapIn helps global enterprises make smarter talent decisions with AI.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <button className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20">
              Request a Demo
            </button>
            <button className="bg-slate-800 text-white border border-slate-700 px-10 py-4 rounded-full text-lg font-bold hover:bg-slate-700 transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;