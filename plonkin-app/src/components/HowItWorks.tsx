import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Post',
    description: 'Describe the role, set dates, set budget. Two minutes tops.',
  },
  {
    number: '02',
    title: 'Match',
    description: 'Verified workers see your shift instantly. No waiting lists.',
  },
  {
    number: '03',
    title: 'Done',
    description: 'They show up. Work gets done. Payment released automatically.',
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-32 bg-bone relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="text-warm-gray text-xs uppercase tracking-[0.2em]">How It Works</span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-[0.9] mt-4">
                Three steps.
                <br />
                <span className="text-terracotta italic">Zero bullshit.</span>
              </h2>
            </div>
            <p className="text-warm-gray max-w-sm md:text-right">
              No contracts. No middlemen. No waiting weeks for someone to maybe show up.
            </p>
          </div>
        </motion.div>

        <div className="space-y-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
              className="group border-t border-ink/10 py-12 md:py-16 cursor-pointer hover:bg-ink/[0.02] transition-colors"
            >
              <div className="grid md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-1">
                  <span className="text-5xl md:text-6xl font-bold text-ink/10 group-hover:text-terracotta/20 transition-colors">
                    {step.number}
                  </span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-3xl md:text-4xl font-bold text-ink">{step.title}</h3>
                </div>
                <div className="md:col-span-6">
                  <p className="text-warm-gray text-lg">{step.description}</p>
                </div>
                <div className="md:col-span-2 flex justify-end">
                  <motion.div
                    className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center group-hover:border-terracotta group-hover:bg-terracotta transition-all"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ArrowRight className="w-5 h-5 text-ink/30 group-hover:text-white transition-colors" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
