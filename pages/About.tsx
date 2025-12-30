
import React from 'react';
import { Users, Target, Heart, CheckCircle2, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-8">Reinventing How the World Understands Talent</h1>
          <div className="max-w-3xl mx-auto">
            <div className="p-8 bg-blue-50 border-l-4 border-blue-600 rounded-r-2xl mb-8">
              <p className="text-2xl font-semibold text-blue-900 leading-snug">
                "Talent decisions should be intelligent, fair, and future-focused."
              </p>
            </div>
            <p className="text-xl text-slate-600 leading-relaxed">
              LeapIn was founded on a simple belief that visibility into human potential is the key to organizational success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-12 rounded-[2rem] border border-slate-100 shadow-xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Target className="text-blue-600" size={32} /> Our Mission
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              To help organizations see people clearly — and unlock their full potential through AI.
            </p>
          </div>
          <div className="bg-white p-12 rounded-[2rem] border border-slate-100 shadow-xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Zap className="text-blue-600" size={32} /> Our Vision
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              A world where skills, potential, and opportunity are visible — for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Team Work',
                desc: 'Collaborating globally to solve complex talent challenges.',
                img: 'https://picsum.photos/400/300?random=20',
                icon: <Users className="text-white" size={24} />,
                color: 'bg-blue-600'
              },
              {
                title: 'Get Things Done',
                desc: 'Bias for action and delivering measurable ROI for our partners.',
                img: 'https://picsum.photos/400/300?random=21',
                icon: <Target className="text-white" size={24} />,
                color: 'bg-slate-900'
              },
              {
                title: 'AI For Good',
                desc: 'Building ethical AI that reduces bias and increases fairness.',
                img: 'https://picsum.photos/400/300?random=22',
                icon: <Heart className="text-white" size={24} />,
                color: 'bg-green-600'
              },
              {
                title: 'Have Fun',
                desc: 'Building the future of work should be an inspiring journey.',
                img: 'https://picsum.photos/400/300?random=23',
                icon: <Zap className="text-white" size={24} />,
                color: 'bg-orange-500'
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 group hover:shadow-2xl transition-all">
                <div className="h-48 relative overflow-hidden">
                  <img src={value.img} alt={value.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className={`absolute top-4 left-4 ${value.color} p-2 rounded-xl`}>{value.icon}</div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-8">Become Part of the Revolution</h2>
          <p className="text-xl text-blue-100 mb-12">
            We are always looking for visionary partners and brilliant minds to join our mission.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <button className="bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition-all shadow-xl">
              Partner With Us
            </button>
            <button className="bg-blue-700 text-white border border-blue-500 px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-800 transition-all">
              Join Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
