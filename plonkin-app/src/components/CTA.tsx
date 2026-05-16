import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="signup" className="py-24 bg-terracotta relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: `${300 + i * 100}px`,
              height: `${300 + i * 100}px`,
              left: `${-10 + i * 30}%`,
              top: `${-20 + i * 20}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Ready to{' '}
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              Plonkin
            </motion.span>
            ?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">
            Join thousands of businesses hiring smarter, faster, and more flexibly.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-terracotta rounded-full text-lg font-bold hover:bg-bone transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Hiring Free
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full text-lg font-bold hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              I'm a Worker
            </motion.a>
          </motion.div>

          <p className="text-white/50 text-sm mt-6">
            No credit card required. Free for first 3 shifts.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
