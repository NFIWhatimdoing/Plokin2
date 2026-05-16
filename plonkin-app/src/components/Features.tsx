import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Shield, Clock, CreditCard } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Access workers in 35+ countries. Local talent, international coverage.',
  },
  {
    icon: Shield,
    title: 'Verified Workers',
    description: 'Every worker is ID-verified, skill-tested, and rated by previous employers.',
  },
  {
    icon: Clock,
    title: 'Same-Day Start',
    description: 'Post a shift in the morning, have someone on-site by afternoon.',
  },
  {
    icon: CreditCard,
    title: 'Secure Payments',
    description: 'Escrow-protected payments. Release funds only when work is complete.',
  },
];

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-24 bg-ink text-paper">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Built for{' '}
            <span className="text-terracotta">Speed
</span>
            {' '}& Trust
          </h2>
          <p className="text-lg text-paper/60 max-w-xl mx-auto">
            Enterprise-grade reliability with consumer-grade simplicity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="bg-paper/5 backdrop-blur-sm rounded-2xl p-8 border border-paper/10 hover:border-terracotta/50 transition-colors duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="bg-terracotta/20 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-terracotta" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-paper/60 leading-relaxed">{feature.description}</p>
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
