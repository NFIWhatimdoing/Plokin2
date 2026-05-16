import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { UtensilsCrossed, Plug, Sparkles, Scissors, Truck, PartyPopper, Building2, HeartPulse } from 'lucide-react';

const categories = [
  { icon: UtensilsCrossed, name: 'Restaurants', count: '2,400+ workers', color: 'bg-terracotta/10 text-terracotta' },
  { icon: Plug, name: 'Electricians', count: '890+ workers', color: 'bg-tobacco/10 text-tobacco' },
  { icon: Sparkles, name: 'Cleaners', count: '3,100+ workers', color: 'bg-ink/10 text-ink' },
  { icon: Scissors, name: 'Hairdressers', count: '1,200+ workers', color: 'bg-terracotta/10 text-terracotta' },
  { icon: Truck, name: 'Delivery', count: '1,800+ workers', color: 'bg-tobacco/10 text-tobacco' },
  { icon: PartyPopper, name: 'Events', count: '950+ workers', color: 'bg-ink/10 text-ink' },
  { icon: Building2, name: 'Construction', count: '1,500+ workers', color: 'bg-terracotta/10 text-terracotta' },
  { icon: HeartPulse, name: 'Care Work', count: '760+ workers', color: 'bg-tobacco/10 text-tobacco' },
];

const RoleCategories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-24 bg-bone">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-ink mb-4">
            Every{' '}
            <span className="text-terracotta">Role
</span>
            , Covered.
          </h2>
          <p className="text-lg text-warm-gray max-w-xl mx-auto">
            From hospitality to trades, find skilled workers for any short-term need.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ 
                y: -8, 
                rotateX: 5,
                rotateY: index % 2 === 0 ? 3 : -3,
                transition: { duration: 0.3 }
              }}
              className="bg-paper rounded-2xl p-6 md:p-8 text-center cursor-pointer border border-ink/5 hover:border-terracotta/30 hover:shadow-lg transition-colors duration-300 group"
              style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
            >
              <motion.div
                className={`${cat.color} w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
              >
                <cat.icon className="w-7 h-7" />
              </motion.div>
              <h3 className="text-lg font-bold text-ink mb-1">{cat.name}</h3>
              <p className="text-sm text-warm-gray">{cat.count}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoleCategories;
