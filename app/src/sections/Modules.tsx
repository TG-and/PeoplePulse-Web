import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Users,
  Wallet,
  Clock,
  GraduationCap,
  Shield,
  Trophy,
  UserCheck,
  Briefcase,
} from 'lucide-react';

const moduleIcons = {
  portal: LayoutDashboard,
  hr: Users,
  payroll: Wallet,
  attendance: Clock,
  training: GraduationCap,
  benefits: Shield,
  performance: Trophy,
  talent: UserCheck,
  recruiting: Briefcase,
};

export default function Modules() {
  const { t } = useTranslation();

  const modules = [
    { key: 'portal', icon: moduleIcons.portal },
    { key: 'hr', icon: moduleIcons.hr },
    { key: 'payroll', icon: moduleIcons.payroll },
    { key: 'attendance', icon: moduleIcons.attendance },
    { key: 'training', icon: moduleIcons.training },
    { key: 'benefits', icon: moduleIcons.benefits },
    { key: 'performance', icon: moduleIcons.performance },
    { key: 'talent', icon: moduleIcons.talent },
    { key: 'recruiting', icon: moduleIcons.recruiting },
  ];

  return (
    <section className="py-24 bg-[#f7f7f7]">
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-[#0080ff] tracking-wider uppercase mb-4"
          >
            {t('modules.eyebrow')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0a0a] mb-6"
          >
            {t('modules.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#4a4949]"
          >
            {t('modules.description')}
          </motion.p>
        </div>

        {/* Modules Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => {
            const Icon = module.icon;
            const features = t(`modules.items.${module.key}.features`, { returnObjects: true }) as string[];
            
            return (
              <motion.div
                key={module.key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group bg-white rounded-2xl p-6 hover:shadow-xl hover:shadow-[#0080ff]/10 transition-all duration-300 border border-transparent hover:border-[#0080ff]/20"
                whileHover={{ y: -8 }}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0080ff] to-[#0066cc] rounded-xl flex items-center justify-center shadow-lg shadow-[#0080ff]/25 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0a0a0a] group-hover:text-[#0080ff] transition-colors">
                    {t(`modules.items.${module.key}.title`)}
                  </h3>
                </div>

                {/* Features List */}
                <ul className="space-y-3">
                  {features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-[#4a4949]">
                      <span className="w-1.5 h-1.5 bg-[#0080ff] rounded-full flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[
            { value: '100%', label: 'Business Coverage' },
            { value: '360°', label: 'Employee View' },
            { value: 'Real-time', label: 'Data Sync' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#0080ff]">{stat.value}</div>
              <div className="text-sm text-[#4a4949] mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
