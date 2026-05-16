import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Calendar, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Post a Shift',
    description: 'Describe the role, location, and duration. Set your budget. Takes 2 minutes.',
    color: 'bg-terracotta',
  },
  {
    icon: Calendar,
    number: '02',
    title: 'Match Instantly',
    description: 'Our algorithm finds verified workers available for your dates. No waiting.',
    color: 'bg-tobacco',
  },
  {
    icon: CheckCircle,
    number: '03',
    title: 'Work Done',
    description: 'Worker shows up, job gets done, payment released. Simple as that.',
    color: 'bg-ink',
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-24 bg-paper">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-ink mb-4">
            How It{' '}
            <span className="text-terracotta">Works
</span>
          </h2>
          <p className="text-lg text-warm-gray max-w-xl mx-auto">
            Three simple steps to fill any short-term role.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-terracotta/30 via-tobacco/30 to-ink/30">
            <motion.div
              className="h-full bg-terracotta"
              initial={{ width: '0%' }}
              animate={isInView ? { width: '100%' } : {}}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.2 }}
              className="relative"
            >
              <div className="bg-bone rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300 border border-ink/5">
                {/* Step number */}
                <div className={`${step.color} text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 text-lg font-bold relative z-10`}>
                  <step.icon className="w-6 h-6" />
                </div>

                <div className="text-5xl font-extrabold text-ink/10 mb-2">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-ink mb-3">{step.title}</h3>
                <p className="text-warm-gray leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
