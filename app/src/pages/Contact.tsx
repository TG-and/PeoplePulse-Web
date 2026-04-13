import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              {t('contact.eyebrow')}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0a0a0a] mb-6"
            >
              {t('contact.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[#4a4949]"
            >
              {t('contact.description')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#0a0a0a] mb-2">
                        {t('contact.form.name')}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[#bfbfbf] focus:border-[#0080ff] focus:ring-2 focus:ring-[#0080ff]/20 outline-none transition-all"
                        placeholder={t('contact.form.name')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0a0a0a] mb-2">
                        {t('contact.form.email')}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[#bfbfbf] focus:border-[#0080ff] focus:ring-2 focus:ring-[#0080ff]/20 outline-none transition-all"
                        placeholder={t('contact.form.email')}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#0a0a0a] mb-2">
                        {t('contact.form.company')}
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#bfbfbf] focus:border-[#0080ff] focus:ring-2 focus:ring-[#0080ff]/20 outline-none transition-all"
                        placeholder={t('contact.form.company')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0a0a0a] mb-2">
                        {t('contact.form.phone')}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#bfbfbf] focus:border-[#0080ff] focus:ring-2 focus:ring-[#0080ff]/20 outline-none transition-all"
                        placeholder={t('contact.form.phone')}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0a0a0a] mb-2">
                      {t('contact.form.subject')}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#bfbfbf] focus:border-[#0080ff] focus:ring-2 focus:ring-[#0080ff]/20 outline-none transition-all"
                      placeholder={t('contact.form.subject')}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0a0a0a] mb-2">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-[#bfbfbf] focus:border-[#0080ff] focus:ring-2 focus:ring-[#0080ff]/20 outline-none transition-all resize-none"
                      placeholder={t('contact.form.message')}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-[#0080ff] text-white font-semibold rounded-full hover:bg-[#0066cc] transition-all shadow-lg shadow-[#0080ff]/30 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    {t('contact.form.submit')}
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0a0a0a] mb-4">
                    {t('contact.form.success')}
                  </h3>
                </motion.div>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0080ff]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#0080ff]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0a0a0a] mb-1">{t('contact.info.email')}</h3>
                      <p className="text-[#4a4949]">contact@peoplepulseai.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0080ff]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#0080ff]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0a0a0a] mb-1">{t('contact.info.phone')}</h3>
                      <p className="text-[#4a4949]">+1 (888) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0080ff]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#0080ff]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0a0a0a] mb-1">{t('contact.info.address')}</h3>
                      <p className="text-[#4a4949]">123 Innovation Drive, Suite 500<br />San Francisco, CA 94105</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0080ff]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#0080ff]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0a0a0a] mb-1">{t('contact.info.hours')}</h3>
                      <p className="text-[#4a4949]">24/7 Technical Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
