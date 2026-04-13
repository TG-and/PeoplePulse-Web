import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    slug: 'maximizing-employee-engagement',
    image: '/blog-1.jpg',
    category: 'Employee Engagement',
    date: 'April 26, 2025',
    readTime: '5 min read',
    author: 'Sarah Johnson',
    featured: true,
  },
  {
    id: 2,
    slug: 'data-driven-performance-management',
    image: '/blog-2.jpg',
    category: 'Performance Management',
    date: 'April 24, 2025',
    readTime: '7 min read',
    author: 'Michael Chen',
    featured: false,
  },
  {
    id: 3,
    slug: 'ai-hr-software-employee-connection',
    image: '/blog-3.jpg',
    category: 'AI Technology',
    date: 'April 22, 2025',
    readTime: '6 min read',
    author: 'Emily Rodriguez',
    featured: false,
  },
  {
    id: 4,
    slug: 'employee-onboarding-best-practices',
    image: '/blog-4.jpg',
    category: 'Onboarding',
    date: 'April 20, 2025',
    readTime: '8 min read',
    author: 'David Kim',
    featured: false,
  },
  {
    id: 5,
    slug: 'employee-retention-strategies',
    image: '/blog-1.jpg',
    category: 'Employee Engagement',
    date: 'April 18, 2025',
    readTime: '6 min read',
    author: 'Lisa Thompson',
    featured: false,
  },
  {
    id: 6,
    slug: 'hr-compliance-2025',
    image: '/blog-2.jpg',
    category: 'Compliance',
    date: 'April 15, 2025',
    readTime: '10 min read',
    author: 'Robert Martinez',
    featured: false,
  },
  {
    id: 7,
    slug: 'workplace-diversity-inclusion-guide',
    image: '/blog-3.jpg',
    category: 'Culture',
    date: 'April 12, 2025',
    readTime: '9 min read',
    author: 'Sarah Johnson',
    featured: false,
  },
  {
    id: 8,
    slug: 'hr-metrics-dashboard-guide',
    image: '/blog-4.jpg',
    category: 'Analytics',
    date: 'April 10, 2025',
    readTime: '7 min read',
    author: 'Michael Chen',
    featured: false,
  },
  {
    id: 9,
    slug: 'remote-team-management-best-practices',
    image: '/blog-1.jpg',
    category: 'Remote Work',
    date: 'April 8, 2025',
    readTime: '6 min read',
    author: 'Lisa Thompson',
    featured: false,
  },
  {
    id: 10,
    slug: 'employee-wellness-programs-guide',
    image: '/blog-2.jpg',
    category: 'Wellness',
    date: 'April 5, 2025',
    readTime: '8 min read',
    author: 'David Kim',
    featured: false,
  },
  {
    id: 11,
    slug: 'talent-management-strategies',
    image: '/blog-3.jpg',
    category: 'Talent Management',
    date: 'April 3, 2025',
    readTime: '9 min read',
    author: 'Emily Rodriguez',
    featured: false,
  },
  {
    id: 12,
    slug: 'change-management-hr-guide',
    image: '/blog-4.jpg',
    category: 'Change Management',
    date: 'March 30, 2025',
    readTime: '7 min read',
    author: 'Michael Chen',
    featured: false,
  },
];

const categoryKeys = ['all', 'employeeEngagement', 'performanceManagement', 'aiTechnology', 'onboarding', 'remoteWork', 'compliance', 'culture', 'analytics', 'wellness', 'talentManagement', 'changeManagement'];

export default function BlogPage() {
  const { t } = useTranslation();
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

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
              {t('blogPage.eyebrow')}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0a0a0a] mb-6"
            >
              {t('blogPage.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-[#4a4949]"
            >
              {t('blogPage.description')}
            </motion.p>
          </div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mt-10"
          >
            {categoryKeys.map((categoryKey) => (
              <button
                key={categoryKey}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  categoryKey === 'all'
                    ? 'bg-[#0080ff] text-white'
                    : 'bg-white text-[#4a4949] hover:bg-[#0080ff]/10 hover:text-[#0080ff] border border-[#bfbfbf]/30'
                }`}
              >
                {t(`blogPage.categories.${categoryKey}`)}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/blog/${featuredPost.slug}.html`}
                className="group grid lg:grid-cols-2 gap-8 items-center bg-[#f7f7f7] rounded-3xl overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="relative aspect-video lg:aspect-auto lg:h-full overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={t(`blog.posts.${featuredPost.slug.replace(/-/g, '')}.title`)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#0080ff] text-white text-sm font-semibold rounded-full">
                      {t('blogPage.featured')}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm font-semibold text-[#0080ff]">{featuredPost.category}</span>
                    <span className="text-[#bfbfbf]">•</span>
                    <span className="flex items-center gap-1 text-sm text-[#4a4949]">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                    <span className="text-[#bfbfbf]">•</span>
                    <span className="flex items-center gap-1 text-sm text-[#4a4949]">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0a0a0a] mb-4 group-hover:text-[#0080ff] transition-colors">
                    {t(`blog.posts.${featuredPost.slug.replace(/-/g, '')}.title`)}
                  </h2>
                  <p className="text-[#4a4949] text-lg mb-6 leading-relaxed">
                    {t(`blog.posts.${featuredPost.slug.replace(/-/g, '')}.excerpt`)}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#0080ff] rounded-full flex items-center justify-center text-white font-bold">
                        {featuredPost.author.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-[#0a0a0a]">{featuredPost.author}</span>
                    </div>
                    <span className="flex items-center gap-2 text-[#0080ff] font-semibold group-hover:gap-3 transition-all">
                      {t('blogPage.readArticle')} <ArrowRight className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/blog/${post.slug}.html`}
                  className="group block bg-[#f7f7f7] rounded-2xl overflow-hidden hover:shadow-xl transition-all h-full"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={t(`blog.posts.${post.slug.replace(/-/g, '')}.title`)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold text-[#0080ff] uppercase">{post.category}</span>
                      <span className="text-[#bfbfbf]">•</span>
                      <span className="text-xs text-[#4a4949]">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#0a0a0a] mb-3 line-clamp-2 group-hover:text-[#0080ff] transition-colors">
                      {t(`blog.posts.${post.slug.replace(/-/g, '')}.title`)}
                    </h3>
                    <p className="text-sm text-[#4a4949] line-clamp-2 mb-4">
                      {t(`blog.posts.${post.slug.replace(/-/g, '')}.excerpt`)}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-[#4a4949]">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-[#f7f7f7]">
        <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0080ff] to-[#0066cc] p-12 sm:p-16 lg:p-20 text-center"
          >
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t('blogPage.newsletterTitle')}
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
                {t('blogPage.newsletterDesc')}
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={t('blogPage.emailPlaceholder')}
                  className="flex-1 px-6 py-4 rounded-full text-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-[#0080ff] font-semibold rounded-full hover:bg-[#f7f7f7] transition-colors"
                >
                  {t('blogPage.subscribe')}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
