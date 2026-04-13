import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Award, Briefcase } from 'lucide-react';

const statIcons = {
  users: Users,
  projects: Briefcase,
  awards: Award,
  employees: Users,
};

const statSuffixes: Record<string, string> = {
  users: '%',
  projects: '+',
  awards: '+',
  employees: 'M+',
};

function AnimatedNumber({ value, suffix = '' }: { value: string; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Extract numeric part and any prefix/suffix letters (like M in 1M+)
  const numericMatch = value.match(/[0-9]+/);
  const numericValue = numericMatch ? parseInt(numericMatch[0]) : 0;
  const letterPrefix = value.match(/^[^0-9]*/)?.[0] || '';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const startTime = Date.now();

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setDisplayValue(Math.floor(easeOut * numericValue));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [numericValue, hasAnimated]);

  const formattedValue = displayValue.toLocaleString();

  return (
    <div ref={ref} className="tabular-nums">
      {letterPrefix}{formattedValue}{suffix}
    </div>
  );
}

export default function Stats() {
  const { t } = useTranslation();

  const stats = [
    { key: 'users', icon: statIcons.users, suffix: statSuffixes.users },
    { key: 'projects', icon: statIcons.projects, suffix: statSuffixes.projects },
    { key: 'awards', icon: statIcons.awards, suffix: statSuffixes.awards },
    { key: 'employees', icon: statIcons.employees, suffix: statSuffixes.employees },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-[#0080ff] tracking-wider uppercase mb-4"
          >
            {t('stats.eyebrow')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0a0a] mb-6"
          >
            {t('stats.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#4a4949]"
          >
            {t('stats.description')}
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const value = t(`stats.items.${stat.key}.value`);
            const growth = t(`stats.items.${stat.key}.growth`);
            
            return (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
                className="group bg-[#f7f7f7] rounded-2xl p-8 text-center hover:bg-white hover:shadow-xl hover:shadow-[#0080ff]/10 transition-all duration-300 border border-transparent hover:border-[#0080ff]/20"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-[#0080ff]/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#0080ff] group-hover:rotate-12 transition-all duration-300">
                  <Icon className="w-7 h-7 text-[#0080ff] group-hover:text-white transition-colors" />
                </div>

                {/* Value */}
                <div className="text-4xl sm:text-5xl font-bold text-[#0a0a0a] mb-2 group-hover:text-[#0080ff] transition-colors">
                  <AnimatedNumber value={value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <div className="text-[#4a4949] mb-4">
                  {t(`stats.items.${stat.key}.label`)}
                </div>

                {/* Growth Badge */}
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                  <TrendingUp className="w-4 h-4" />
                  {growth}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
