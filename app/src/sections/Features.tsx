import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calculator, Shield, Code, Brain } from 'lucide-react';

const featureIcons = {
  salaryEngine: Calculator,
  insuranceIntegration: Shield,
  lowCodePlatform: Code,
  aiNative: Brain,
};

export default function Features() {
  const { t } = useTranslation();

  const features = [
    { key: 'salaryEngine', icon: featureIcons.salaryEngine },
    { key: 'insuranceIntegration', icon: featureIcons.insuranceIntegration },
    { key: 'lowCodePlatform', icon: featureIcons.lowCodePlatform },
    { key: 'aiNative', icon: featureIcons.aiNative },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, rotateY: -30 },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-[#0080ff] tracking-wider uppercase mb-4"
          >
            {t('features.eyebrow')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0a0a] mb-6"
          >
            {t('features.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#4a4949]"
          >
            {t('features.description')}
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          style={{ perspective: '1000px' }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.key}
                variants={itemVariants}
                className={`group relative bg-white rounded-2xl p-8 border border-[#bfbfbf]/30 hover:border-[#0080ff]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#0080ff]/10 ${
                  index % 2 === 1 ? 'lg:mt-10' : ''
                }`}
                whileHover={{ y: -12, rotateX: 5 }}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-[#0080ff]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0080ff] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Icon className="w-7 h-7 text-[#0080ff] group-hover:text-white transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#0a0a0a] mb-3 group-hover:text-[#0080ff] transition-colors">
                  {t(`features.items.${feature.key}.title`)}
                </h3>
                <p className="text-[#4a4949] leading-relaxed">
                  {t(`features.items.${feature.key}.description`)}
                </p>

                {/* Hover Gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0080ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
