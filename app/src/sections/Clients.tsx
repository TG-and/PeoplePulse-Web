import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

// Company logos as SVG components
const MicrosoftLogo = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8">
    <rect x="5" y="5" width="40" height="40" fill="#f25022" />
    <rect x="50" y="5" width="40" height="40" fill="#7fba00" />
    <rect x="5" y="50" width="40" height="40" fill="#00a4ef" />
    <rect x="50" y="50" width="40" height="40" fill="#ffb900" />
  </svg>
);

const GoogleLogo = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8">
    <path d="M50 25c13.8 0 25 11.2 25 25S63.8 75 50 75 25 63.8 25 50s11.2-25 25-25z" fill="none" stroke="#4285f4" strokeWidth="8"/>
    <path d="M50 25c13.8 0 25 11.2 25 25h-25V25z" fill="#ea4335"/>
    <path d="M75 50c0 13.8-11.2 25-25 25V50h25z" fill="#34a853"/>
    <path d="M50 75c-13.8 0-25-11.2-25-25h25v25z" fill="#fbbc05"/>
  </svg>
);

const AmazonLogo = () => (
  <svg viewBox="0 0 120 60" className="w-16 h-8">
    <text x="10" y="40" fontSize="28" fontWeight="bold" fill="#232f3e" fontFamily="Arial">amazon</text>
    <path d="M10 45 Q60 55 110 45" stroke="#ff9900" strokeWidth="4" fill="none"/>
    <path d="M100 42 L110 45 L100 48" fill="#ff9900"/>
  </svg>
);

const AppleLogo = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8">
    <path d="M65 25c-5 0-10 3-13 8-3-5-8-8-13-8-10 0-18 8-18 20 0 15 12 28 20 35 3 3 6 5 11 5s8-2 11-5c8-7 20-20 20-35 0-12-8-20-18-20z" fill="#000"/>
    <path d="M55 15c0-5 3-10 8-12-2-2-5-3-8-3-8 0-14 6-14 14 0 1 0 2 1 3 4-2 9-2 13-2z" fill="#000"/>
  </svg>
);

const MetaLogo = () => (
  <svg viewBox="0 0 120 60" className="w-16 h-8">
    <text x="10" y="42" fontSize="32" fontWeight="bold" fill="#0081fb" fontFamily="Arial">Meta</text>
  </svg>
);

const NetflixLogo = () => (
  <svg viewBox="0 0 120 60" className="w-16 h-8">
    <rect x="10" y="5" width="100" height="50" rx="5" fill="#e50914"/>
    <text x="25" y="40" fontSize="24" fontWeight="bold" fill="#fff" fontFamily="Arial">NETFLIX</text>
  </svg>
);

const SlackLogo = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8">
    <path d="M35 15a10 10 0 1 1 0 20H20a10 10 0 1 1 0-20h15z" fill="#e01e5a"/>
    <path d="M35 35a10 10 0 1 1 20 0v15a10 10 0 1 1-20 0V35z" fill="#36c5f0"/>
    <path d="M55 65a10 10 0 1 1 0-20h15a10 10 0 1 1 0 20H55z" fill="#2eb67d"/>
    <path d="M55 45a10 10 0 1 1-20 0V30a10 10 0 1 1 20 0v15z" fill="#ecb22e"/>
  </svg>
);

const SpotifyLogo = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8">
    <circle cx="50" cy="50" r="45" fill="#1ed760"/>
    <path d="M70 45c-12-7-32-8-44-4-2 1-3-1-2-2 12-8 34-6 46 2 2 1 0 4-2 4zm-4 12c-10-6-26-8-38-4-2 1-3-1-2-2 10-7 28-6 40 2 2 1 1 4-2 4zm-4 11c-8-5-21-7-32-3-1 0-2-1-1-2 9-6 24-5 34 2 1 1 0 3-1 3z" fill="#000"/>
  </svg>
);

const clients = [
  { name: 'Microsoft', Logo: MicrosoftLogo },
  { name: 'Google', Logo: GoogleLogo },
  { name: 'Amazon', Logo: AmazonLogo },
  { name: 'Apple', Logo: AppleLogo },
  { name: 'Meta', Logo: MetaLogo },
  { name: 'Netflix', Logo: NetflixLogo },
  { name: 'Slack', Logo: SlackLogo },
  { name: 'Spotify', Logo: SpotifyLogo },
];

export default function Clients() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-[#f7f7f7] overflow-hidden">
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[#4a4949] font-medium mb-10"
        >
          {t('clients.title')}
        </motion.p>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f7f7f7] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f7f7f7] to-transparent z-10" />

        {/* Scrolling Content */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: [0, -1200] }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...clients, ...clients, ...clients].map((client, index) => {
              const LogoComponent = client.Logo;
              return (
                <motion.div
                  key={index}
                  className="flex-shrink-0 px-8 py-5 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all cursor-pointer group"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <div className="flex items-center gap-3">
                    <LogoComponent />
                    <span className="text-lg font-semibold text-[#4a4949] group-hover:text-[#0080ff] transition-colors">
                      {client.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
