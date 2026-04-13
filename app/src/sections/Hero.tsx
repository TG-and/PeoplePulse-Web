import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-[#f7f7f7] to-[#e6f2ff]"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#0080ff]/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#0080ff]/5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="relative max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#0080ff]/10 rounded-full"
            >
              <span className="w-2 h-2 bg-[#0080ff] rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-[#0080ff] tracking-wider uppercase">
                {t('hero.eyebrow')}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0a0a0a] leading-tight"
            >
              {t('hero.title')}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg sm:text-xl text-[#4a4949] max-w-xl leading-relaxed"
            >
              {t('hero.description')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact.html"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-[#0080ff] text-white font-semibold rounded-full hover:bg-[#0066cc] transition-all shadow-xl shadow-[#0080ff]/30"
                >
                  {t('hero.ctaPrimary')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/features.html"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0a0a0a] font-semibold rounded-full border-2 border-[#bfbfbf] hover:border-[#0080ff] hover:text-[#0080ff] transition-all"
                >
                  <Play className="w-5 h-5" />
                  {t('hero.ctaSecondary')}
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-8 pt-8 border-t border-[#bfbfbf]/50"
            >
              {[
                { value: '10K+', label: 'Active Users' },
                { value: '98%', label: 'Satisfaction' },
                { value: '50+', label: 'Countries' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#0a0a0a]">{stat.value}</div>
                  <div className="text-sm text-[#4a4949]">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dashboard Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:pl-8"
            style={{ perspective: '1000px' }}
          >
            <motion.div
              className="relative"
              whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}
              transition={{ duration: 0.4 }}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#0080ff]/20 to-[#0080ff]/5 rounded-3xl blur-2xl" />
              
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#0a0a0a]/20">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20HR%20team%20working%20with%20modern%20HR%20software%20dashboard%20in%20office%20setting%2C%20people%20interacting%20with%20computer%2C%20collaborative%20workspace%2C%20blue%20color%20scheme%2C%20professional%20photography&image_size=landscape_16_9"
                  alt="PeoplePulse Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
