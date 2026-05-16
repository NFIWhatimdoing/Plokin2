import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Restaurant Owner',
    location: 'Melbourne, AU',
    text: 'Needed 3 servers for a Friday night rush. Posted at 2pm, had staff by 5pm. Saved our weekend.',
    rating: 5,
    avatar: 'SC',
  },
  {
    name: 'Marcus Johnson',
    role: 'Electrical Contractor',
    location: 'London, UK',
    text: 'Found a licensed electrician for a 2-day commercial job. Verified, skilled, no hassle.',
    rating: 5,
    avatar: 'MJ',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Salon Manager',
    location: 'Medellín, CO',
    text: 'Our stylist called in sick. Found a replacement in 30 minutes. The client never knew.',
    rating: 5,
    avatar: 'ER',
  },
  {
    name: 'James Wilson',
    role: 'Event Coordinator',
    location: 'Toronto, CA',
    text: 'Staffed a 500-person corporate event with 12 temps. Flawless execution.',
    rating: 5,
    avatar: 'JW',
  },
];

const SocialProof = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-24 bg-paper relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-terracotta/20 to-transparent" />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-ink mb-4">
            Loved by{' '}
            <motion.span
              className="text-terracotta inline-block"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Businesses
            </motion.span>
          </h2>
          <p className="text-lg text-warm-gray max-w-xl mx-auto">
            Thousands of companies trust Plonkin for their short-term staffing needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-bone rounded-2xl p-8 border border-ink/5 hover:border-terracotta/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {t.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-terracotta text-terracotta" />
                    ))}
                  </div>
                  <p className="text-ink leading-relaxed mb-4">"{t.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-ink text-sm">{t.name}</p>
                      <p className="text-warm-gray text-sm">{t.role}</p>
                    </div>
                    <span className="text-warm-gray text-sm">{t.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-ink rounded-2xl p-8 md:p-12 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '4.9', label: 'Average Rating', suffix: '/5' },
              { value: '12,000', label: 'Shifts Completed', suffix: '+' },
              { value: '98%', label: 'Fill Rate', suffix: '' },
              { value: '2.4h', label: 'Avg. Time to Fill', suffix: '' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + i * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-extrabold text-terracotta">
                  {stat.value}
                  <span className="text-paper/40">{stat.suffix}</span>
                </div>
                <div className="text-paper/60 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
