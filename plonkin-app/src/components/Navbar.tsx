import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-ink/90 backdrop-blur-md border-b border-white/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold text-white tracking-tight"
          >
            Plonkin
          </motion.a>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href="#"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              I'm a Worker
            </motion.a>
            <motion.a
              href="#signup"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-terracotta text-white text-sm font-bold hover:bg-terracotta-dark transition-colors"
            >
              Start Hiring Free
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4 space-y-4"
          >
            <a href="#" className="block text-white/60 hover:text-white transition-colors">
              I'm a Worker
            </a>
            <a
              href="#signup"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-terracotta text-white text-sm font-bold"
            >
              Start Hiring Free
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
