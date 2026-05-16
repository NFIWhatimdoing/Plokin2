import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Restaurant Owner',
    location: 'Melbourne',
    text: 'Needed 3 servers for a Friday night rush. Posted at 2pm, had staff by 5pm. Saved our weekend.',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'Electrical Contractor',
    location: 'London',
    text: 'Found a licensed electrician for a 2-day commercial job. Verified, skilled, no hassle.',
    rating: 5,
  },
  {
    name: 'Elena Rodriguez',
    role: 'Salon Manager',
    location: 'Medellín',
    text: 'Our stylist called in sick. Found a replacement in 30 minutes. The client never knew.',
    rating: 5,
  },
];

const SocialProof = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-32 bg-bone relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-warm-gray text-xs uppercase tracking-[0.2em]">Testimonials</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-[0.9] mt-4">
            Loved by
            <br />
            <span className="text-terracotta italic">real people.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-ink/5 rounded-2xl overflow-hidden">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="bg-bone p-8 md:p-10 group hover:bg-ink/[0.02] transition-colors"
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-terracotta text-terracotta" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl font-medium text-ink leading-snug mb-8">
                "{t.text}"
              </blockquote>
              <div className="border-t border-ink/10 pt-6">
                <p className="font-bold text-ink">{t.name}</p>
                <p className="text-warm-gray text-sm">{t.role} — {t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '4.9', label: 'Average Rating' },
            { value: '12,000', label: 'Shifts Done' },
            { value: '98%', label: 'Fill Rate' },
            { value: '2.4h', label: 'Time to Fill' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-terracotta">{stat.value}</div>
              <div className="text-warm-gray text-xs uppercase tracking-widest mt-2">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
