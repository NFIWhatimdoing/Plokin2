import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDownRight, Zap } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-ink"
      aria-label="Hero section"
    >
      {/* Background image - trades workers */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ y }}
      >
        <img 
          src="/images/trades-bg.png" 
          alt=""
          className="w-full h-full object-cover opacity-50 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-ink/60" />
      </motion.div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20"
        style={{ opacity, scale }}
      >
        <div className="grid lg:grid-cols-12 gap-8 items-end min-h-[75dvh] pb-20">
          {/* Left column */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 border border-terracotta/30 text-terracotta rounded-full text-xs font-medium tracking-widest uppercase"
              >
                <Zap className="w-3 h-3" />
                Powered by Sau5
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-bold text-white leading-[0.85] tracking-tighter mb-8"
            >
              Hire
              <br />
              <span className="text-terracotta italic">Fast.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-white/50 max-w-lg leading-relaxed"
            >
              Short-term staffing for restaurants, trades, cleaning & more.
              1-3 day engagements. Worldwide.
            </motion.p>
          </div>

          {/* Right column - Stats */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              {[
                { num: '48h', label: 'Avg. Hire Time' },
                { num: '12K+', label: 'Shifts Filled' },
                { num: '35+', label: 'Countries' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.15 }}
                  className="border-t border-white/10 pt-4"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white">{stat.num}</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              href="#how-it-works"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="inline-flex items-center gap-3 mt-10 group"
            >
              <span className="text-white/60 text-sm uppercase tracking-widest group-hover:text-white transition-colors">
                Explore
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-terracotta group-hover:bg-terracotta transition-all"
              >
                <ArrowDownRight className="w-4 h-4 text-white" />
              </motion.div>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
