import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="signup" className="py-32 bg-ink relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] mb-8"
          >
            Ready to
            <br />
            <motion.span
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-terracotta italic inline-block"
            >
              Plonkin?
            </motion.span>
          </motion.h2>
          
          <p className="text-xl text-white/40 mb-12 max-w-md mx-auto">
            Start hiring smarter, faster, and more flexibly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-terracotta text-white text-lg font-bold hover:bg-terracotta-dark transition-colors group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Hiring Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white text-lg font-bold hover:bg-white/5 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              I'm a Worker
            </motion.a>
          </div>

          <p className="text-white/30 text-sm mt-8">
            No credit card. First 3 shifts free.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
