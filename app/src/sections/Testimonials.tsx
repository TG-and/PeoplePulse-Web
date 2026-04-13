import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Testimonials() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = t('testimonials.items', { returnObjects: true }) as Array<{
    quote: string;
    name: string;
    company: string;
  }>;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-[#0080ff] tracking-wider uppercase mb-4"
          >
            {t('testimonials.eyebrow')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0a0a] mb-6"
          >
            {t('testimonials.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#4a4949]"
          >
            {t('testimonials.description')}
          </motion.p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto" style={{ perspective: '1200px' }}>
          {/* Quote Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: 'spring' }}
            className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#0080ff] rounded-full flex items-center justify-center z-10"
          >
            <Quote className="w-8 h-8 text-white" />
          </motion.div>

          {/* Cards Container */}
          <div className="relative h-[400px] sm:h-[350px]">
            {testimonials.map((testimonial, index) => {
              const offset = index - activeIndex;
              const isActive = index === activeIndex;
              
              return (
                <motion.div
                  key={index}
                  className="absolute inset-0 flex items-center justify-center"
                  initial={false}
                  animate={{
                    x: offset * 100,
                    scale: isActive ? 1 : 0.8,
                    opacity: isActive ? 1 : 0.3,
                    rotateY: offset * 15,
                    zIndex: isActive ? 10 : 1,
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className="bg-[#f7f7f7] rounded-3xl p-8 sm:p-12 max-w-2xl w-full mx-4 shadow-xl">
                    <p className="text-lg sm:text-xl text-[#0a0a0a] leading-relaxed mb-8 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#0080ff] to-[#0066cc] rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-[#0a0a0a]">{testimonial.name}</div>
                        <div className="text-[#4a4949]">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-[#bfbfbf] flex items-center justify-center hover:border-[#0080ff] hover:bg-[#0080ff] hover:text-white transition-all group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5 text-[#4a4949] group-hover:text-white" />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border-2 border-[#bfbfbf] flex items-center justify-center hover:border-[#0080ff] hover:bg-[#0080ff] hover:text-white transition-all group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5 text-[#4a4949] group-hover:text-white" />
            </motion.button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? 'w-8 bg-[#0080ff]'
                    : 'bg-[#bfbfbf] hover:bg-[#4a4949]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
