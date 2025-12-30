
import React from 'react';
import { Target, Users, TrendingUp, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const Solutions: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-slate-900 py-32 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8">AI Solutions for the Entire Talent Lifecycle</h1>
          <p className="text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
            LeapIn helps enterprises solve their most critical workforce challenges with intelligence — not intuition.
          </p>
        </div>
      </section>

      {/* Solutions List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Hire Smarter',
                desc: 'Predict skills, potential, and fit with AI — faster and fairer.',
                icon: <Target size={40} className="text-blue-600" />,
                color: 'bg-blue-50'
              },
              {
                title: 'Mobilize Talent',
                desc: 'Unlock internal mobility and reduce external hiring dependency.',
                icon: <Users size={40} className="text-blue-600" />,
                color: 'bg-blue-50'
              },
              {
                title: 'Develop Faster',
                desc: 'Build future-ready capabilities with precision and purpose.',
                icon: <TrendingUp size={40} className="text-blue-600" />,
                color: 'bg-blue-50'
              }
            ].map((sol, idx) => (
              <div key={idx} className={`${sol.color} p-12 rounded-3xl border border-slate-100 flex flex-col h-full hover:shadow-xl transition-all group`}>
                <div className="mb-8 p-4 bg-white rounded-2xl shadow-sm inline-block w-fit group-hover:scale-110 transition-transform">{sol.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{sol.title}</h3>
                <p className="text-lg text-slate-600 flex-grow leading-relaxed mb-8">{sol.desc}</p>
                <button className="flex items-center gap-2 font-bold text-blue-600 hover:text-blue-800 transition-colors">
                  Learn More <ArrowRight size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border border-slate-100 shadow-2xl rounded-[3rem] p-16 text-center">
          <div className="inline-flex items-center gap-2 text-blue-600 font-bold mb-6">
            <ShieldCheck /> <span>Enterprise Ready</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-8">Ready to Transform Your Workforce?</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Discover how LeapIn can tailor our AI models to your specific business goals and talent needs.
          </p>
          <button className="bg-blue-600 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30">
            Talk to Sales
          </button>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
