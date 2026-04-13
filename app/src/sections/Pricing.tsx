import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const { t } = useTranslation();

  const plans = ['starter', 'professional', 'enterprise'] as const;

  return (
    <section id="pricing" className="py-24 bg-[#f7f7f7]">
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-[#0080ff] tracking-wider uppercase mb-4"
          >
            {t('pricing.eyebrow')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0a0a] mb-6"
          >
            {t('pricing.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#4a4949]"
          >
            {t('pricing.description')}
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => {
            const features = t(`pricing.plans.${plan}.features`, { returnObjects: true }) as string[];
            const isPopular = plan === 'professional';
            
            return (
              <motion.div
                key={plan}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: isPopular ? -20 : 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                className={`relative bg-white rounded-2xl p-8 flex flex-col h-full ${
                  isPopular
                    ? 'shadow-2xl shadow-[#0080ff]/20 border-2 border-[#0080ff]'
                    : 'shadow-lg border border-[#bfbfbf]/30'
                }`}
                whileHover={{ y: isPopular ? -25 : -10 }}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 px-4 py-1.5 bg-[#0080ff] text-white text-sm font-semibold rounded-full">
                      <Sparkles className="w-4 h-4" />
                      {t('pricing.plans.professional.badge')}
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-[#0a0a0a] mb-2">
                    {t(`pricing.plans.${plan}.name`)}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-[#0a0a0a]">
                      {t(`pricing.plans.${plan}.price`)}
                    </span>
                  </div>
                  <p className="text-sm text-[#4a4949] mt-1">
                    {t(`pricing.plans.${plan}.period`)}
                  </p>
                  <p className="text-sm text-[#4a4949] mt-4">
                    {t(`pricing.plans.${plan}.description`)}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {features.map((feature, fIndex) => (
                    <motion.li
                      key={fIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + fIndex * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isPopular ? 'bg-[#0080ff]' : 'bg-green-500'
                      }`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-[#4a4949]">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-auto"
                >
                  <Link
                    to={plan === 'enterprise' ? '/contact.html' : '/portal.html'}
                    className={`block w-full text-center py-3 px-6 rounded-full font-semibold transition-all ${
                      isPopular
                        ? 'bg-[#0080ff] text-white hover:bg-[#0066cc] shadow-lg shadow-[#0080ff]/30'
                        : 'bg-[#f7f7f7] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white border-2 border-[#bfbfbf] hover:border-[#0a0a0a]'
                    }`}
                  >
                    {t(`pricing.plans.${plan}.cta`)}
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
