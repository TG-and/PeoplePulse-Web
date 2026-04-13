import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Lock, Mail, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ClientPortal() {
  const { t } = useTranslation();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-[#0080ff]/5 via-white to-[#0080ff]/5 flex items-center justify-center py-12">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-0 bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-[#0080ff] to-[#0066cc] p-12 text-white"
          >
            <div>
              <div className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                  <span className="text-[#0080ff] font-bold text-xl">P</span>
                </div>
                <span className="text-xl font-bold">PeoplePulse<span className="font-extrabold">AI</span></span>
              </div>

              <h2 className="text-3xl font-bold mb-6">
                {t('clientPortal.welcomeTitle')}
              </h2>
              <p className="text-white/80 mb-8">
                {t('clientPortal.welcomeDesc')}
              </p>

              <div className="space-y-4">
                {(t('clientPortal.features', { returnObjects: true }) as string[]).map((feature: string, index: number) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-white/80" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-sm text-white/60">
              © 2026 PeoplePulseAI. All rights reserved.
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-8 sm:p-12"
          >
            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-[#0080ff] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-xl font-bold text-[#0a0a0a]">PeoplePulse<span className="text-[#0080ff] font-extrabold">AI</span></span>
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-[#0a0a0a] mb-4">
                  {t('clientPortal.comingSoon')}
                </h3>
                <p className="text-[#4a4949] mb-6">
                  {t('clientPortal.comingSoonDesc')}
                </p>
                <Link
                  to="/contact.html"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0080ff] text-white font-semibold rounded-full hover:bg-[#0066cc] transition-colors"
                >
                  {t('clientPortal.contactUs')} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-[#0a0a0a] mb-2">
                    {isLogin ? t('clientPortal.signInTitle') : t('clientPortal.signUpTitle')}
                  </h2>
                  <p className="text-[#4a4949]">
                    {isLogin ? (
                      <>
                        {t('clientPortal.noAccount')}{' '}
                        <button
                          onClick={() => setIsLogin(false)}
                          className="text-[#0080ff] font-semibold hover:underline"
                        >
                          {t('clientPortal.signUp')}
                        </button>
                      </>
                    ) : (
                      <>
                        {t('clientPortal.hasAccount')}{' '}
                        <button
                          onClick={() => setIsLogin(true)}
                          className="text-[#0080ff] font-semibold hover:underline"
                        >
                          {t('clientPortal.signIn')}
                        </button>
                      </>
                    )}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#0a0a0a] mb-2">
                      {t('clientPortal.email')}
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#bfbfbf]" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#bfbfbf]/30 focus:outline-none focus:border-[#0080ff] transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0a0a0a] mb-2">
                      {t('clientPortal.password')}
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#bfbfbf]" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full pl-12 pr-12 py-3 rounded-xl border border-[#bfbfbf]/30 focus:outline-none focus:border-[#0080ff] transition-colors"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#bfbfbf] hover:text-[#4a4949]"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {isLogin && (
                    <div className="flex items-center justify-between">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4 rounded border-[#bfbfbf]" />
                        <span className="text-sm text-[#4a4949]">{t('clientPortal.rememberMe')}</span>
                      </label>
                      <button type="button" className="text-sm text-[#0080ff] hover:underline">
                        {t('clientPortal.forgotPassword')}
                      </button>
                    </div>
                  )}

                  {!isLogin && (
                    <div className="flex items-start gap-2">
                      <input type="checkbox" required className="w-4 h-4 rounded border-[#bfbfbf] mt-0.5" />
                      <span className="text-sm text-[#4a4949]">
                        {t('clientPortal.agreeTerms')}{' '}
                        <Link to="/terms.html" className="text-[#0080ff] hover:underline">{t('clientPortal.termsOfService')}</Link>
                        {' '}{t('clientPortal.and')}{' '}
                        <Link to="/privacy.html" className="text-[#0080ff] hover:underline">{t('clientPortal.privacyPolicy')}</Link>
                      </span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#0080ff] text-white font-semibold rounded-full hover:bg-[#0066cc] transition-colors shadow-lg shadow-[#0080ff]/30"
                  >
                    {isLogin ? t('clientPortal.signIn') : t('clientPortal.createAccount')}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>

                <div className="mt-8 text-center">
                  <p className="text-sm text-[#4a4949]">
                    {t('clientPortal.needHelp')}{' '}
                    <Link to="/contact.html" className="text-[#0080ff] hover:underline">
                      {t('clientPortal.contactSupport')}
                    </Link>
                  </p>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
