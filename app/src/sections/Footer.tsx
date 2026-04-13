import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useTranslation();

  const footerLinks = {
    product: {
      title: t('footer.columns.product.title'),
      links: [
        { key: 'features', label: t('nav.features'), href: '/features.html' },
        { key: 'pricing', label: t('nav.pricing'), href: '/pricing.html' },
        { key: 'testimonials', label: t('testimonials.title'), href: '/#testimonials' },
        { key: 'api', label: 'API', href: '#' },
        { key: 'integrations', label: 'Integrations', href: '#' },
      ],
    },
    resources: {
      title: t('footer.columns.resources.title'),
      links: [
        { key: 'blog', label: t('nav.blog'), href: '/blog.html' },
        { key: 'documentation', label: t('footer.links.documentation'), href: '#' },
        { key: 'helpCenter', label: t('footer.links.helpCenter'), href: '#' },
        { key: 'webinars', label: t('footer.links.webinars'), href: '#' },
        { key: 'caseStudies', label: t('footer.links.caseStudies'), href: '#' },
      ],
    },
    company: {
      title: t('footer.columns.company.title'),
      links: [
        { key: 'aboutUs', label: t('footer.links.aboutUs'), href: '/about.html' },
        { key: 'careers', label: t('footer.links.careers'), href: '/contact.html' },
        { key: 'contact', label: t('nav.contact'), href: '/contact.html' },
        { key: 'privacyPolicy', label: t('footer.links.privacyPolicy'), href: '/privacy.html' },
        { key: 'termsOfService', label: t('footer.links.termsOfService'), href: '/terms.html' },
      ],
    },
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer id="contact" className="bg-[#0a0a0a] text-white">
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0080ff] to-[#00c6ff] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-xl font-bold">
                PeoplePulse<span className="bg-gradient-to-r from-[#0080ff] to-[#00c6ff] bg-clip-text text-transparent font-extrabold">AI</span>
              </span>
            </Link>
            <p className="text-[#bfbfbf] max-w-sm mb-6">
              {t('footer.description')}
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#0080ff] transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, section], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <h3 className="font-bold text-lg mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.key}>
                    <Link
                      to={link.href}
                      className="text-[#bfbfbf] hover:text-[#0080ff] hover:translate-x-1 inline-block transition-all"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-[#bfbfbf] text-sm">
            {t('footer.copyright')}
          </p>
          <div className="flex gap-6">
            <Link to="/privacy.html" className="text-[#bfbfbf] text-sm hover:text-[#0080ff] transition-colors">
              {t('footer.links.privacyPolicy')}
            </Link>
            <Link to="/terms.html" className="text-[#bfbfbf] text-sm hover:text-[#0080ff] transition-colors">
              {t('footer.links.termsOfService')}
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
