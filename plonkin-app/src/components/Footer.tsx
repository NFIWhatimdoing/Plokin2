import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-ink border-t border-white/5 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">Plonkin</h3>
              <p className="text-white/40 max-w-sm leading-relaxed">
                Short-term hiring, simplified. Built for businesses that need workers now.
              </p>
            </motion.div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-white/60 text-xs uppercase tracking-widest mb-4">Business</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/40 hover:text-terracotta transition-colors">Post a Shift</a></li>
              <li><a href="#" className="text-white/40 hover:text-terracotta transition-colors">Pricing</a></li>
              <li><a href="#" className="text-white/40 hover:text-terracotta transition-colors">Enterprise</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-white/60 text-xs uppercase tracking-widest mb-4">Workers</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/40 hover:text-terracotta transition-colors">Find Shifts</a></li>
              <li><a href="#" className="text-white/40 hover:text-terracotta transition-colors">How It Works</a></li>
              <li><a href="#" className="text-white/40 hover:text-terracotta transition-colors">Safety</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-white/60 text-xs uppercase tracking-widest mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/40 hover:text-terracotta transition-colors">About</a></li>
              <li><a href="#" className="text-white/40 hover:text-terracotta transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/40 hover:text-terracotta transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-sm">© 2026 Plonkin. All rights reserved.</p>
          <p className="text-white/20 text-sm">
            Powered by <a href="#" className="text-terracotta hover:text-terracotta-light transition-colors">Sau5</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
