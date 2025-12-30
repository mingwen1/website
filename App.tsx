
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Mail, Globe, Shield, ArrowRight, BrainCircuit, Users, Target, BarChart3, ShieldCheck, Zap } from 'lucide-react';

// Pages
import Home from './pages/Home';
import Platform from './pages/Platform';
import Solutions from './pages/Solutions';
import Industries from './pages/Industries';
import About from './pages/About';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Platform', path: '/platform' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Industries', path: '/industries' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white group-hover:bg-blue-700 transition-colors">
              <Zap size={24} fill="currentColor" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">LeapIn</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
              Request a Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-blue-600 p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 absolute w-full left-0 py-4 px-4 shadow-xl">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-700 hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-blue-600 text-white w-full py-3 rounded-xl font-semibold hover:bg-blue-700">
              Request a Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white">
                <Zap size={18} fill="currentColor" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">LeapIn</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              The AI Talent Intelligence Platform helping global enterprises hire smarter, develop faster, and build future-ready workforces.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Platform</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/platform" className="hover:text-blue-400 transition-colors">AI Talent Acquisition</Link></li>
              <li><Link to="/platform" className="hover:text-blue-400 transition-colors">AI Talent Marketplace</Link></li>
              <li><Link to="/platform" className="hover:text-blue-400 transition-colors">AI Talent Development</Link></li>
              <li><Link to="/solutions" className="hover:text-blue-400 transition-colors">Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/industries" className="hover:text-blue-400 transition-colors">Industries</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About LeapIn</Link></li>
              <li><a href="mailto:info@leapin.io" className="hover:text-blue-400 transition-colors">Contact Support</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-blue-400" />
                <a href="mailto:info@leapin.io">info@leapin.io</a>
              </li>
              <li className="flex items-center gap-3">
                <Globe size={16} className="text-blue-400" />
                <a href="https://www.leapin-ai.com/" target="_blank" rel="noopener noreferrer">leapin-ai.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Shield size={16} className="text-blue-400" />
                <span>Enterprise Secure</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} LeapIn AI Talent Intelligence Platform. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
