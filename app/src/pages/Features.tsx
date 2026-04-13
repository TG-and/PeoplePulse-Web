import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  UserPlus, 
  BarChart3, 
  Target, 
  ShieldCheck, 
  Brain,
  Users,
  Zap,
  Globe,
  Lock,
  Clock,
  FileText,
  MessageSquare,
  ArrowRight,
  Calculator,
  Store,
  Factory,
  CalendarDays
} from 'lucide-react';
import { Link } from 'react-router-dom';

const featureIcons = {
  smartOnboarding: UserPlus,
  aiAnalytics: BarChart3,
  performance: Target,
  compliance: ShieldCheck,
  predictive: Brain,
  recruiting: Users,
  automation: Zap,
  global: Globe,
  security: Lock,
  attendance: Clock,
  documents: FileText,
  selfService: MessageSquare,
  oneClickPayroll: Calculator,
  oneClickStoreScheduling: Store,
  oneClickFactoryScheduling: Factory,
  smartScheduling: CalendarDays,
};

const featureKeys = [
  'smartOnboarding', 'aiAnalytics', 'performance', 'compliance',
  'predictive', 'recruiting', 'automation', 'global',
  'security', 'attendance', 'documents', 'selfService',
  'oneClickPayroll', 'oneClickStoreScheduling', 'oneClickFactoryScheduling', 'smartScheduling'
];

export default function FeaturesPage() {
  const { t } = useTranslation();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#0080ff]/5 via-white to-[#0080ff]/5">
        <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-sm font-semibold text-[#0080ff] tracking-wider uppercase mb-4"
            >
              {t('featuresPage.eyebrow')}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0a0a0a] mb-6"
            >
              {t('featuresPage.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-[#4a4949] mb-10"
            >
              {t('featuresPage.description')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                to="/portal.html"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0080ff] text-white font-semibold rounded-full hover:bg-[#0066cc] transition-all shadow-lg shadow-[#0080ff]/30"
              >
                {t('featuresPage.cta')} <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureKeys.map((key, index) => {
              const Icon = featureIcons[key as keyof typeof featureIcons];
              const feature = t(`featuresPage.features.${key}`, { returnObjects: true }) as {title: string, description: string, benefits: string[]};
              
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-[#f7f7f7] rounded-2xl p-8 hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 bg-[#0080ff]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0080ff] transition-colors">
                    <Icon className="w-7 h-7 text-[#0080ff] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0a0a0a] mb-3">{feature.title}</h3>
                  <p className="text-[#4a4949] mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-[#4a4949]">
                        <span className="w-1.5 h-1.5 bg-[#0080ff] rounded-full" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
