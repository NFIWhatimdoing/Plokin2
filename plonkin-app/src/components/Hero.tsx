import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bone">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-terracotta/5"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Floating shapes */}
        <motion.div
          className="absolute top-20 right-[15%] w-24 h-24 border-4 border-terracotta/20 rounded-lg rotate-45"
          animate={{ rotate: [45, 90, 45], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 left-[10%] w-16 h-16 bg-tobacco/15 rounded-full"
          animate={{ scale: [1, 1.3, 1], x: [0, 30, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-terracotta/10 text-terracotta rounded-full text-sm font-medium mb-8"
        >
          <Zap className="w-4 h-4" />
          Powered by Sau5
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-ink leading-[0.95] tracking-tight mb-6"
        >
          Hire in{' '}
          <motion.span
            className="text-terracotta inline-block"
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Hours
          </motion.span>
          ,
          <br />
          Not Weeks.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-warm-gray max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Short-term staffing for restaurants, trades, cleaning & more.
          <br className="hidden md:block" />
          1-3 day engagements. Global reach.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-terracotta text-white rounded-full text-lg font-semibold hover:bg-terracotta-dark transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Hiring
            <ArrowRight className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-ink text-ink rounded-full text-lg font-semibold hover:bg-ink hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See How It Works
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { value: '48h', label: 'Avg. Time to Hire' },
            { value: '12K+', label: 'Shifts Filled' },
            { value: '35+', label: 'Countries' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-extrabold text-terracotta">{stat.value}</div>
              <div className="text-sm text-warm-gray mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-ink/30 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-terracotta rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
