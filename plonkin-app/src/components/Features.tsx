import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Shield, Clock, CreditCard } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Global Reach',
    description: '35+ countries. Local talent, international coverage.',
  },
  {
    icon: Shield,
    title: 'Verified',
    description: 'ID-checked, skill-tested, rated by employers.',
  },
  {
    icon: Clock,
    title: 'Same-Day',
    description: 'Morning post, afternoon start. No waiting.',
  },
  {
    icon: CreditCard,
    title: 'Secure Pay',
    description: 'Escrow-protected. Pay only when work\'s done.',
  },
];

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-32 bg-terracotta relative overflow-hidden">
      {/* Large background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="text-[25vw] font-bold text-white/[0.05] whitespace-nowrap">
          WHY
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-white/50 text-xs uppercase tracking-[0.2em]">Features</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.9] mt-4">
            Built for
            <br />
            <span className="italic">speed.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
              className="bg-terracotta p-8 md:p-12 group cursor-pointer transition-colors"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors"
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/70 text-lg">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
