import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    slug: 'maximizing-employee-engagement',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=HR%20team%20meeting%20discussing%20employee%20engagement%20strategies%2C%20professional%20office%20setting%2C%20people%20collaborating%2C%20modern%20business%20attire%2C%20professional%20photography&image_size=landscape_4_3',
    categoryKey: 'blog.categories.engagement',
    date: 'April 26, 2025',
    titleKey: 'blog.posts.maximizingemployeeengagement.title',
  },
  {
    id: 2,
    slug: 'data-driven-performance-management',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=manager%20providing%20performance%20feedback%20to%20employee%20in%20office%2C%20professional%20setting%2C%20constructive%20discussion%2C%20modern%20business%20environment%2C%20professional%20photography&image_size=landscape_4_3',
    categoryKey: 'blog.categories.performance',
    date: 'April 26, 2025',
    titleKey: 'blog.posts.datadrivenperformancemanagement.title',
  },
  {
    id: 3,
    slug: 'ai-hr-software-employee-connection',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=HR%20professional%20using%20AI-powered%20HR%20software%20dashboard%2C%20analyzing%20employee%20data%2C%20modern%20office%2C%20professional%20business%20attire%2C%20professional%20photography&image_size=landscape_4_3',
    categoryKey: 'blog.categories.ai',
    date: 'April 26, 2025',
    titleKey: 'blog.posts.aihrsoftwareemployeeconnection.title',
  },
  {
    id: 4,
    slug: 'employee-onboarding-best-practices',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=HR%20manager%20onboarding%20new%20employee%2C%20providing%20laptop%20and%20welcome%20packet%2C%20professional%20office%20setting%2C%20friendly%20interaction%2C%20professional%20photography&image_size=landscape_4_3',
    categoryKey: 'blog.categories.onboarding',
    date: 'April 26, 2025',
    titleKey: 'blog.posts.employeeonboardingbestpractices.title',
  },
  {
    id: 5,
    slug: 'employee-retention-strategies',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=HR%20team%20brainstorming%20employee%20retention%20strategies%2C%20professional%20meeting%20room%2C%20collaborative%20discussion%2C%20modern%20office%2C%20professional%20photography&image_size=landscape_4_3',
    categoryKey: 'blog.categories.retention',
    date: 'April 12, 2025',
    titleKey: 'blog.posts.employeeretentionstrategies.title',
  },
  {
    id: 6,
    slug: 'workplace-diversity-inclusion-guide',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=diverse%20HR%20team%20meeting%20about%20diversity%20and%20inclusion%2C%20professional%20office%20setting%2C%20people%20from%20different%20backgrounds%2C%20collaborative%20discussion%2C%20professional%20photography&image_size=landscape_4_3',
    categoryKey: 'blog.categories.diversity',
    date: 'April 10, 2025',
    titleKey: 'blog.posts.workplacediversityinclusionguide.title',
  },
  {
    id: 7,
    slug: 'hr-metrics-dashboard-guide',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=HR%20analyst%20reviewing%20HR%20metrics%20dashboard%2C%20data%20visualization%2C%20modern%20office%20setting%2C%20professional%20attire%2C%20professional%20photography&image_size=landscape_4_3',
    categoryKey: 'blog.categories.metrics',
    date: 'April 8, 2025',
    titleKey: 'blog.posts.hrmetricsdashboardguide.title',
  },
  {
    id: 8,
    slug: 'remote-team-management-best-practices',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=HR%20manager%20leading%20remote%20team%20meeting%20via%20video%20conference%2C%20professional%20home%20office%20setup%2C%20modern%20technology%2C%20professional%20photography&image_size=landscape_4_3',
    categoryKey: 'blog.categories.remote',
    date: 'April 5, 2025',
    titleKey: 'blog.posts.remoteteammanagementbestpractices.title',
  },
];

export default function Blog() {
  const { t } = useTranslation();

  return (
    <section id="blog" className="py-24 bg-[#f7f7f7]">
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold text-[#0080ff] tracking-wider uppercase mb-4"
            >
              {t('blog.eyebrow')}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0a0a]"
            >
              {t('blog.title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[#4a4949] mt-4 max-w-xl"
            >
              {t('blog.description')}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/blog.html"
              className="group inline-flex items-center gap-2 text-[#0080ff] font-semibold hover:underline"
            >
              {t('blog.viewAll')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.slice(0, 8).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              whileHover={{ y: -10 }}
            >
              <Link
                to={`/blog/${post.slug}.html`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <motion.img
                    src={post.image}
                    alt={t(post.categoryKey)}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-[#0080ff] uppercase tracking-wider">
                      {t(post.categoryKey)}
                    </span>
                    <span className="text-[#bfbfbf]">•</span>
                    <span className="flex items-center gap-1 text-xs text-[#4a4949]">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0a0a0a] mb-3 line-clamp-2 group-hover:text-[#0080ff] transition-colors">
                    {t(post.titleKey)}
                  </h3>

                  <span className="group/link inline-flex items-center gap-2 text-sm font-semibold text-[#4a4949] group-hover:text-[#0080ff] transition-colors">
                    {t('blog.readMore')}
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
