import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function TermsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#0080ff]/5 via-white to-[#0080ff]/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-block text-sm font-semibold text-[#0080ff] tracking-wider uppercase mb-4">
              Legal
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#0a0a0a] mb-4">
              Terms of Service
            </h1>
            <p className="text-[#4a4949]">
              Last updated: April 6, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none prose-headings:text-[#0a0a0a] prose-p:text-[#4a4949] prose-strong:text-[#0a0a0a] prose-a:text-[#0080ff]"
          >
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using PeoplePulse's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
            <p>
              These Terms constitute a legally binding agreement between you and PeoplePulse, Inc. ("PeoplePulse," "we," "our," or "us") regarding your use of our HR management platform and related services.
            </p>

            <h2>2. Description of Services</h2>
            <p>
              PeoplePulse provides a cloud-based human resources management platform that includes tools for:
            </p>
            <ul>
              <li>Employee record management</li>
              <li>Time and attendance tracking</li>
              <li>Payroll processing</li>
              <li>Performance management</li>
              <li>Recruiting and onboarding</li>
              <li>Analytics and reporting</li>
              <li>Compliance management</li>
            </ul>

            <h2>3. Account Registration</h2>
            <p>To use our services, you must:</p>
            <ul>
              <li>Be at least 18 years old</li>
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Promptly notify us of any unauthorized use of your account</li>
            </ul>
            <p>
              You are responsible for all activities that occur under your account.
            </p>

            <h2>4. Subscription and Payment</h2>
            <h3>4.1 Pricing</h3>
            <p>
              Our services are offered on a subscription basis. Current pricing is available on our <Link to="/pricing.html">Pricing page</Link>. All fees are exclusive of taxes unless stated otherwise.
            </p>

            <h3>4.2 Billing</h3>
            <p>
              You agree to pay all fees associated with your subscription. Payments are processed automatically using your chosen payment method. Failed payments may result in service suspension.
            </p>

            <h3>4.3 Cancellation</h3>
            <p>
              You may cancel your subscription at any time. Cancellations take effect at the end of the current billing period. No refunds will be provided for partial months.
            </p>

            <h2>5. Data and Privacy</h2>
            <p>
              Your use of our services is also governed by our <Link to="/privacy.html">Privacy Policy</Link>. By using our services, you consent to the collection and use of information as described in the Privacy Policy.
            </p>
            <p>
              You retain ownership of all data you input into our platform. We will not access, use, or disclose your data except as necessary to provide our services or as required by law.
            </p>

            <h2>6. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use our services for any illegal purpose</li>
              <li>Upload or transmit viruses, malware, or other harmful code</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with other users' access to our services</li>
              <li>Scrape, crawl, or use automated means to access our services</li>
              <li>Resell, sublicense, or commercially exploit our services without authorization</li>
            </ul>

            <h2>7. Intellectual Property</h2>
            <p>
              PeoplePulse retains all rights, title, and interest in and to our services, including all intellectual property rights. These Terms do not grant you any rights to use our trademarks, logos, or other brand elements.
            </p>
            <p>
              You may provide feedback to us about our services. We may use this feedback without restriction and without obligation to compensate you.
            </p>

            <h2>8. Confidentiality</h2>
            <p>
              Both parties agree to maintain the confidentiality of any proprietary information disclosed during the course of using our services. This obligation survives termination of these Terms.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, PeoplePulse shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our services.
            </p>
            <p>
              Our total liability for any claim arising from these Terms shall not exceed the amount you paid us in the 12 months preceding the claim.
            </p>

            <h2>10. Disclaimer of Warranties</h2>
            <p>
              Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, timely, secure, or error-free.
            </p>

            <h2>11. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless PeoplePulse and its officers, directors, employees, and agents from any claims, damages, losses, and expenses arising out of your use of our services or violation of these Terms.
            </p>

            <h2>12. Termination</h2>
            <p>
              We may suspend or terminate your access to our services at any time, with or without cause, with or without notice. Upon termination, your right to use our services immediately ceases.
            </p>
            <p>
              Provisions that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.
            </p>

            <h2>13. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
            </p>

            <h2>14. Dispute Resolution</h2>
            <p>
              Any dispute arising from these Terms shall first be addressed through good faith negotiation. If negotiation fails, disputes shall be resolved through binding arbitration in San Francisco, California.
            </p>

            <h2>15. Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. We will notify you of significant changes by email or through our services. Your continued use after changes constitutes acceptance of the modified Terms.
            </p>

            <h2>16. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable, the remaining provisions shall remain in full force and effect.
            </p>

            <h2>17. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and PeoplePulse regarding our services.
            </p>

            <h2>18. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:legal@peoplepulse.com">legal@peoplepulse.com</a><br />
              <strong>Address:</strong> 123 Innovation Drive, San Francisco, CA 94105, USA
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-[#bfbfbf]/30 text-center"
          >
            <p className="text-[#4a4949]">
              Also see our{' '}
              <Link to="/privacy.html" className="text-[#0080ff] hover:underline">
                Privacy Policy
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
