import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check, Sparkles, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const planKeys = ['starter', 'professional', 'enterprise'];

const comparisons = [
  { featureKey: 'employeeManagement', starter: true, professional: true, enterprise: true },
  { featureKey: 'timeTracking', starter: true, professional: true, enterprise: true },
  { featureKey: 'documentStorage', starter: '5GB', professional: '50GB', enterprise: 'Unlimited' },
  { featureKey: 'aiAnalytics', starter: false, professional: true, enterprise: true },
  { featureKey: 'performanceReviews', starter: false, professional: true, enterprise: true },
  { featureKey: 'trainingManagement', starter: false, professional: true, enterprise: true },
  { featureKey: 'apiAccess', starter: false, professional: 'Limited', enterprise: 'Full' },
  { featureKey: 'customWorkflows', starter: false, professional: false, enterprise: true },
  { featureKey: 'dedicatedSupport', starter: false, professional: false, enterprise: true },
  { featureKey: 'slaGuarantee', starter: false, professional: false, enterprise: true },
];

export default function PricingPage() {
  const { t } = useTranslation();

  const faqs = t('pricingPage.faqs', { returnObjects: true }) as Array<{question: string, answer: string}>;

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
              {t('pricingPage.eyebrow')}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0a0a0a] mb-6"
            >
              {t('pricingPage.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-[#4a4949]"
            >
              {t('pricingPage.description')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {planKeys.map((planKey, index) => {
              const plan = t(`pricing.plans.${planKey}`, { returnObjects: true }) as {name: string, price: string, period: string, description: string, features: string[], cta: string};
              const isPopular = planKey === 'professional';
              
              return (
                <motion.div
                  key={planKey}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: isPopular ? -20 : 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className={`relative bg-white rounded-2xl p-8 flex flex-col h-full ${
                    isPopular
                      ? 'shadow-2xl shadow-[#0080ff]/20 border-2 border-[#0080ff]'
                      : 'shadow-lg border border-[#bfbfbf]/30'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="flex items-center gap-1 px-4 py-1.5 bg-[#0080ff] text-white text-sm font-semibold rounded-full">
                        <Sparkles className="w-4 h-4" />
                        {t('pricingPage.mostPopular')}
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-xl font-bold text-[#0a0a0a] mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-[#0a0a0a]">{plan.price}</span>
                    </div>
                    <p className="text-sm text-[#4a4949] mt-1">{plan.period}</p>
                    <p className="text-sm text-[#4a4949] mt-4">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isPopular ? 'bg-[#0080ff]' : 'bg-green-500'
                        }`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-[#4a4949]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={planKey === 'enterprise' ? '/contact.html' : '/portal.html'}
                    className={`block w-full text-center py-3 px-6 rounded-full font-semibold transition-all mt-auto ${
                      isPopular
                        ? 'bg-[#0080ff] text-white hover:bg-[#0066cc] shadow-lg shadow-[#0080ff]/30'
                        : 'bg-[#f7f7f7] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white border-2 border-[#bfbfbf] hover:border-[#0a0a0a]'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-[#f7f7f7]">
        <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0a0a0a] mb-4">{t('pricingPage.comparePlans')}</h2>
            <p className="text-[#4a4949]">{t('pricingPage.compareDesc')}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#0a0a0a] text-white">
                    <th className="text-left p-6 font-semibold">{t('pricingPage.feature')}</th>
                    <th className="p-6 font-semibold text-center">
                      {t('pricing.plans.starter.name')}
                    </th>
                    <th className="p-6 font-semibold text-center bg-[#0080ff]">
                      {t('pricing.plans.professional.name')}
                    </th>
                    <th className="p-6 font-semibold text-center">
                      {t('pricing.plans.enterprise.name')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row, index) => (
                    <tr key={row.featureKey} className={index % 2 === 0 ? 'bg-[#f7f7f7]' : 'bg-white'}>
                      <td className="p-6 font-medium text-[#0a0a0a]">{t(`pricingPage.features.${row.featureKey}`)}</td>
                      <td className="p-6 text-center">
                        {typeof row.starter === 'boolean' ? (
                          row.starter ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-[#bfbfbf]">—</span>
                          )
                        ) : (
                          <span className="text-[#4a4949]">{row.starter}</span>
                        )}
                      </td>
                      <td className="p-6 text-center bg-[#0080ff]/5">
                        {typeof row.professional === 'boolean' ? (
                          row.professional ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-[#bfbfbf]">—</span>
                          )
                        ) : (
                          <span className="text-[#4a4949]">{row.professional}</span>
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {typeof row.enterprise === 'boolean' ? (
                          row.enterprise ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-[#bfbfbf]">—</span>
                          )
                        ) : (
                          <span className="text-[#4a4949]">{row.enterprise}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0a0a0a] mb-4">{t('pricingPage.faq')}</h2>
            <p className="text-[#4a4949]">{t('pricingPage.faqDesc')}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-[#bfbfbf]/30 rounded-xl px-6">
                  <AccordionTrigger className="text-left font-semibold text-[#0a0a0a] hover:text-[#0080ff] py-4">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#0080ff] flex-shrink-0" />
                      {faq.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4a4949] pb-4 pl-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#f7f7f7]">
        <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0080ff] to-[#0066cc] p-12 sm:p-16 lg:p-20 text-center"
          >
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                {t('pricingPage.stillQuestions')}
              </h2>
              <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                {t('pricingPage.stillQuestionsDesc')}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact.html"
                  className="px-8 py-4 bg-white text-[#0080ff] font-semibold rounded-full hover:bg-[#f7f7f7] transition-all shadow-xl"
                >
                  {t('pricingPage.contactSales')}
                </Link>
                <a
                  href="mailto:sales@peoplepulse.com"
                  className="px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all"
                >
                  {t('pricingPage.emailUs')}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
