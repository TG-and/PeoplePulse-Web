import { motion } from 'framer-motion';
import { Users, Lightbulb, Heart, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const values = [
  {
    icon: Users,
    title: 'People First',
    description: 'We believe that people are the heart of every successful organization. Our platform is designed to empower employees and HR teams alike.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We constantly push the boundaries of what HR technology can do, leveraging AI and automation to solve complex challenges.',
  },
  {
    icon: Heart,
    title: 'Customer Success',
    description: 'Your success is our success. Were committed to providing exceptional support and continuously improving based on your feedback.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We hold ourselves to the highest standards in everything we do, from product development to customer service.',
  },
];

const team = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Co-Founder',
    image: '/avatar-1.jpg',
    bio: 'Former HR executive with 15+ years of experience in building high-performing teams.',
  },
  {
    name: 'Michael Rodriguez',
    role: 'CTO & Co-Founder',
    image: '/avatar-2.jpg',
    bio: 'Tech visionary with a passion for using AI to solve real-world HR challenges.',
  },
  {
    name: 'Emily Thompson',
    role: 'Chief Product Officer',
    image: '/avatar-3.jpg',
    bio: 'Product leader focused on creating intuitive, user-centered HR solutions.',
  },
];

const milestones = [
  { year: '2020', event: 'PeoplePulse founded in San Francisco' },
  { year: '2021', event: 'Launched first AI-powered analytics module' },
  { year: '2022', event: 'Reached 1,000+ customers worldwide' },
  { year: '2023', event: 'Expanded to 50+ countries' },
  { year: '2024', event: 'Named Top HR Tech Company by Industry Awards' },
  { year: '2025', event: 'Serving 10,000+ companies globally' },
];

export default function AboutPage() {
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
              About Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0a0a0a] mb-6"
            >
              We're on a Mission to Transform HR
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-[#4a4949]"
            >
              PeoplePulse was founded with a simple belief: that great HR technology should empower people, not replace them.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-[#4a4949] leading-relaxed">
                <p>
                  PeoplePulse was born from a frustration shared by HR professionals everywhere: existing HR software was either too complex, too expensive, or simply didn't deliver on its promises.
                </p>
                <p>
                  In 2020, our founders—Sarah Chen, a seasoned HR executive, and Michael Rodriguez, a tech innovator—came together to build something better. They envisioned a platform that would combine the power of artificial intelligence with an intuitive, user-friendly interface.
                </p>
                <p>
                  Today, PeoplePulse serves over 10,000 companies across 50+ countries, helping HR teams of all sizes streamline their operations and focus on what matters most: their people.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#f7f7f7] rounded-3xl p-8"
            >
              <h3 className="text-xl font-bold text-[#0a0a0a] mb-6">Our Journey</h3>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-16 flex-shrink-0">
                      <span className="text-lg font-bold text-[#0080ff]">{milestone.year}</span>
                    </div>
                    <div className="flex-1 pb-6 border-l-2 border-[#bfbfbf]/30 pl-4 relative">
                      <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-[#0080ff] rounded-full" />
                      <p className="text-[#4a4949]">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#f7f7f7]">
        <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a] mb-4">
              Our Values
            </h2>
            <p className="text-[#4a4949] max-w-2xl mx-auto">
              These core principles guide everything we do at PeoplePulse.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 bg-[#0080ff]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-7 h-7 text-[#0080ff]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0a0a0a] mb-3">{value.title}</h3>
                  <p className="text-[#4a4949] text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a] mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-[#4a4949] max-w-2xl mx-auto">
              The passionate people behind PeoplePulse.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#0a0a0a] mb-1">{member.name}</h3>
                <p className="text-[#0080ff] font-medium mb-3">{member.role}</p>
                <p className="text-[#4a4949] text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#0a0a0a] text-white">
        <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '10,000+', label: 'Companies Served' },
              { value: '50+', label: 'Countries' },
              { value: '1M+', label: 'Employees Managed' },
              { value: '98%', label: 'Customer Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl sm:text-5xl font-bold text-[#0080ff] mb-2">{stat.value}</div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
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
                Join Our Team
              </h2>
              <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                We're always looking for talented people who are passionate about transforming HR. Check out our open positions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact.html"
                  className="px-8 py-4 bg-white text-[#0080ff] font-semibold rounded-full hover:bg-[#f7f7f7] transition-all shadow-xl"
                >
                  View Careers
                </Link>
                <Link
                  to="/contact.html"
                  className="px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
