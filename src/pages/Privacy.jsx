import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy" description="SJB C&C privacy policy — how we collect, use, and protect your personal information when you visit our website or use our construction services." />
      {/* Hero */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80" alt="Privacy Policy" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase">Legal</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-white mt-4 mb-6">Privacy Policy</h1>
            <p className="text-gray-400 text-lg max-w-xl">Last updated: July 2026</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none space-y-8">

            <div>
              <h2 className="text-xl font-poppins font-bold text-primary mb-3">1. Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed">When you visit our website, fill out our contact form, or communicate with us, we may collect the following personal information:</p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1 ml-4">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Project location and details</li>
                <li>Estimated budget information</li>
                <li>Any other information you voluntarily provide in messages</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-poppins font-bold text-primary mb-3">2. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed">We use the collected information for the following purposes:</p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1 ml-4">
                <li>To respond to your inquiries and provide project quotations</li>
                <li>To communicate about our construction services</li>
                <li>To schedule site visits and consultations</li>
                <li>To improve our website and services</li>
                <li>To send project updates (only with your consent)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-poppins font-bold text-primary mb-3">3. Information Sharing</h2>
              <p className="text-gray-600 leading-relaxed">We do not sell, trade, or rent your personal information to third parties. We may share your information only with:</p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1 ml-4">
                <li>Our internal project management team for project execution</li>
                <li>Government authorities when required for DTCP/CMDA/RERA approvals</li>
                <li>Trusted vendors and suppliers solely for your project requirements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-poppins font-bold text-primary mb-3">4. Data Security</h2>
              <p className="text-gray-600 leading-relaxed">We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
            </div>

            <div>
              <h2 className="text-xl font-poppins font-bold text-primary mb-3">5. Cookies &amp; Tracking</h2>
              <p className="text-gray-600 leading-relaxed">Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can choose to disable cookies through your browser settings.</p>
            </div>

            <div>
              <h2 className="text-xl font-poppins font-bold text-primary mb-3">6. Your Rights</h2>
              <p className="text-gray-600 leading-relaxed">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1 ml-4">
                <li>Request access to your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-poppins font-bold text-primary mb-3">7. Third-Party Links</h2>
              <p className="text-gray-600 leading-relaxed">Our website may contain links to third-party websites (Google Maps, YouTube, social media). We are not responsible for the privacy practices of these external sites.</p>
            </div>

            <div>
              <h2 className="text-xl font-poppins font-bold text-primary mb-3">8. Children's Privacy</h2>
              <p className="text-gray-600 leading-relaxed">Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.</p>
            </div>

            <div>
              <h2 className="text-xl font-poppins font-bold text-primary mb-3">9. Changes to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
            </div>

            <div>
              <h2 className="text-xl font-poppins font-bold text-primary mb-3">10. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">If you have any questions about this Privacy Policy, please contact us at:</p>
              <div className="mt-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-gray-700 font-medium">SJB C&amp;C - Construction &amp; Contracting</p>
                <p className="text-gray-500 text-sm mt-1"><i className="fas fa-envelope text-amber-500 mr-2" />sjbconstructionandcontracts@gmail.com</p>
                <p className="text-gray-500 text-sm mt-1"><i className="fas fa-phone-alt text-amber-500 mr-2" />+91 96295 28219</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
