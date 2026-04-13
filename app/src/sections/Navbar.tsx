import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { languages } from '@/i18n';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    document.documentElement.dir = languages.find((l) => l.code === code)?.dir || 'ltr';
  };

  const navLinks = [
    { key: 'home', href: '/', isRoute: true },
    { key: 'features', href: isHomePage ? '#features' : '/features.html', isRoute: !isHomePage },
    { key: 'pricing', href: isHomePage ? '#pricing' : '/pricing.html', isRoute: !isHomePage },
    { key: 'blog', href: isHomePage ? '#blog' : '/blog.html', isRoute: !isHomePage },
    { key: 'contact', href: isHomePage ? '#contact' : '/contact.html', isRoute: !isHomePage },
  ];

  const NavLink = ({ link }: { link: { key: string; href: string; isRoute: boolean } }) => {
    if (link.isRoute) {
      return (
        <motion.div whileHover={{ y: -2 }}>
          <Link
            to={link.href}
            className="text-[#4a4949] hover:text-[#0080ff] font-medium transition-colors relative group"
          >
            {t(`nav.${link.key}`)}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0080ff] transition-all duration-300 group-hover:w-full" />
          </Link>
        </motion.div>
      );
    }
    return (
      <motion.a
        href={link.href}
        className="text-[#4a4949] hover:text-[#0080ff] font-medium transition-colors relative group"
        whileHover={{ y: -2 }}
      >
        {t(`nav.${link.key}`)}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0080ff] transition-all duration-300 group-hover:w-full" />
      </motion.a>
    );
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="PeoplePulse AI"
                className="w-10 h-10 object-contain"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.key} link={link} />
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <Globe className="w-5 h-5 text-[#4a4949]" />
                  <span className="text-sm font-medium text-[#4a4949]">
                    {currentLang.flag} {currentLang.name}
                  </span>
                  <ChevronDown className="w-4 h-4 text-[#4a4949]" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 max-h-80 overflow-y-auto">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`flex items-center gap-2 cursor-pointer ${
                      i18n.language === lang.code ? 'bg-[#0080ff]/10 text-[#0080ff]' : ''
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/portal.html"
                className="px-6 py-2.5 bg-[#0080ff] text-white font-medium rounded-full hover:bg-[#0066cc] transition-colors shadow-lg shadow-[#0080ff]/25"
              >
                {t('nav.clientPortal')}
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#0a0a0a]" />
            ) : (
              <Menu className="w-6 h-6 text-[#0a0a0a]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.key}
                    to={link.href}
                    className="block text-lg font-medium text-[#4a4949] hover:text-[#0080ff] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t(`nav.${link.key}`)}
                  </Link>
                ) : (
                  <a
                    key={link.key}
                    href={link.href}
                    className="block text-lg font-medium text-[#4a4949] hover:text-[#0080ff] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t(`nav.${link.key}`)}
                  </a>
                )
              ))}
              
              {/* Mobile Language Selector */}
              <div className="pt-4 border-t">
                <p className="text-sm text-[#bfbfbf] mb-2">{t('language.title')}</p>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        i18n.language === lang.code
                          ? 'bg-[#0080ff] text-white'
                          : 'bg-gray-100 text-[#4a4949] hover:bg-gray-200'
                      }`}
                    >
                      {lang.flag} {lang.name}
                    </button>
                  ))}
                </div>
              </div>

              <Link
                to="/portal.html"
                className="block w-full text-center px-6 py-3 bg-[#0080ff] text-white font-medium rounded-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.clientPortal')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
