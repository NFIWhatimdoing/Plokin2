import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Clock, Users, Globe } from 'lucide-react';

const badges = [
  {
    icon: Shield,
    title: 'ID Verified',
    description: 'Every worker is identity verified',
  },
  {
    icon: Clock,
    title: 'Same-Day Start',
    description: 'Hire in hours, not days',
  },
  {
    icon: Users,
    title: '12,000+ Workers',
    description: 'Global pool of skilled talent',
  },
  {
    icon: Globe,
    title: '35+ Countries',
    description: 'Available worldwide',
  },
];

const TrustBadges = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-16 bg-bone">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-8 md:gap-12"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center">
                <badge.icon className="w-5 h-5 text-terracotta" />
              </div>
              <div>
                <p className="font-bold text-ink text-sm">{badge.title}</p>
                <p className="text-warm-gray text-xs">{badge.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges;
