import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { UtensilsCrossed, Plug, Sparkles, Scissors, Truck, PartyPopper, HardHat, HeartPulse } from 'lucide-react';

const categories = [
  { icon: UtensilsCrossed, name: 'Restaurants', count: '2,400+' },
  { icon: Plug, name: 'Electricians', count: '890+' },
  { icon: Sparkles, name: 'Cleaners', count: '3,100+' },
  { icon: Scissors, name: 'Hairdressers', count: '1,200+' },
  { icon: Truck, name: 'Delivery', count: '1,800+' },
  { icon: PartyPopper, name: 'Events', count: '950+' },
  { icon: HardHat, name: 'Trades', count: '1,500+' },
  { icon: HeartPulse, name: 'Care Work', count: '760+' },
];

const RoleCategories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-32 bg-ink relative overflow-hidden">
      {/* Large background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="text-[20vw] font-bold text-white/[0.06] whitespace-nowrap">
          ROLES
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
          <span className="text-white/40 text-xs uppercase tracking-[0.2em]">Industries</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.9] mt-4">
            Every role.
            <br />
            <span className="text-terracotta italic">Everywhere.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: index * 0.08 }}
              whileHover={{ backgroundColor: 'rgba(200, 80, 30, 0.1)' }}
              className="bg-ink p-6 md:p-8 group cursor-pointer transition-colors"
            >
              <div className="flex flex-col h-full justify-between min-h-[160px]">
                <div>
                  <cat.icon className="w-8 h-8 text-white/30 group-hover:text-terracotta transition-colors mb-4" />
                  <h3 className="text-xl font-bold text-white group-hover:text-terracotta transition-colors">{cat.name}</h3>
                </div>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-white/25 group-hover:text-terracotta/40 transition-colors">{cat.count}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoleCategories;
