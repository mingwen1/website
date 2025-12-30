
import React from 'react';
import { Shield, Smartphone, Factory, HeartPulse, ShoppingCart, Flame, Briefcase, Globe, ArrowRight } from 'lucide-react';

const Industries: React.FC = () => {
  const industries = [
    { name: 'Financial Services', icon: <Shield /> },
    { name: 'Technology', icon: <Smartphone /> },
    { name: 'Manufacturing', icon: <Factory /> },
    { name: 'Healthcare', icon: <HeartPulse /> },
    { name: 'Retail', icon: <ShoppingCart /> },
    { name: 'Energy', icon: <Flame /> },
    { name: 'Professional Services', icon: <Briefcase /> },
    { name: 'Public Sector', icon: <Globe /> }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-slate-50 py-32 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6">Industry-Specific Intelligence. Real-World Accuracy.</h1>
          <p className="text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            LeapIn’s AI models are tailored to the unique talent challenges of each industry.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, idx) => (
              <div key={idx} className="p-10 border border-slate-100 rounded-3xl bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all group flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-white rounded-2xl shadow-sm text-blue-600 group-hover:scale-110 transition-transform">
                  {ind.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{ind.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it Matters */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-10">Why Industry-Specific AI Matters</h2>
          <div className="bg-slate-800/50 backdrop-blur-md p-12 rounded-3xl border border-slate-700">
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10">
              Each industry has distinct skill demands, talent risks, and regulatory realities. LeapIn adapts its models to ensure relevance, accuracy, and impact for every sector.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all flex items-center gap-2 mx-auto">
              Explore Industry Use Cases <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
