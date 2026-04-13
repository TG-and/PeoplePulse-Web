import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Brain, Users, Sparkles } from 'lucide-react';

const aiIcons = {
  predictive: Brain,
  recruiting: Users,
  experience: Sparkles,
};

export default function AIDriven() {
  const { t } = useTranslation();

  const aiFeatures = [
    { key: 'predictive', icon: aiIcons.predictive },
    { key: 'recruiting', icon: aiIcons.recruiting },
    { key: 'experience', icon: aiIcons.experience },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold text-[#0080ff] tracking-wider uppercase"
            >
              {t('ai.eyebrow')}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0a0a]"
            >
              {t('ai.title')}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[#4a4949]"
            >
              {t('ai.description')}
            </motion.p>

            {/* AI Features List */}
            <div className="space-y-6">
              {aiFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.key}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.15 }}
                    className="group flex gap-4 p-4 rounded-xl hover:bg-[#0080ff]/5 transition-colors cursor-pointer"
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-12 h-12 bg-[#0080ff]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#0080ff] group-hover:scale-110 transition-all">
                      <Icon className="w-6 h-6 text-[#0080ff] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0a0a0a] mb-1 group-hover:text-[#0080ff] transition-colors">
                        {t(`ai.items.${feature.key}.title`)}
                      </h3>
                      <p className="text-[#4a4949] text-sm leading-relaxed">
                        {t(`ai.items.${feature.key}.description`)}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
            style={{ perspective: '1000px' }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#0080ff]/10 to-purple-500/10 rounded-3xl blur-2xl" />
              
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/ai-dashboard.jpg"
                  alt="AI Dashboard"
                  className="w-full h-auto"
                />
              </div>

              {/* Floating AI Badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#0080ff] to-purple-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#0a0a0a]">AI Powered</div>
                    <div className="text-xs text-[#4a4949]">Smart Insights</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
