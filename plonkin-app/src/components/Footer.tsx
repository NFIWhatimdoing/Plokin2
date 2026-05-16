import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-ink text-paper/60 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-extrabold text-white mb-4">Plonkin</h3>
              <p className="max-w-sm leading-relaxed">
                Short-term hiring, simplified. Powered by Sau5. Built for businesses that need workers now.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-bold text-white mb-4">For Business</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-terracotta transition-colors">Post a Shift</a></li>
              <li><a href="#" className="hover:text-terracotta transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-terracotta transition-colors">Enterprise</a></li>
              <li><a href="#" className="hover:text-terracotta transition-colors">Success Stories</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold text-white mb-4">For Workers</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-terracotta transition-colors">Find Shifts</a></li>
              <li><a href="#" className="hover:text-terracotta transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-terracotta transition-colors">Safety</a></li>
              <li><a href="#" className="hover:text-terracotta transition-colors">Community</a></li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-paper/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© 2026 Plonkin. All rights reserved.</p>
          <p className="text-sm">
            Powered by{' '}
            <a href="#" className="text-terracotta hover:text-terracotta-dark transition-colors font-semibold">Sau5</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
