import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function Terms() {
  return (
    <>
      <SEO title="Terms of Service" description="SJB C&C terms of service — guidelines and legal terms for using our website and construction services in Tamil Nadu." />
      {/* Hero */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=1920&q=80" alt="Terms of Service" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase">Legal</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-white mt-4 mb-6">Terms of Service</h1>
            <p className="text-gray-400 text-lg max-w-xl">Last updated: July 2026</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none space-y-8">

            <div>
              <h2 className="text-xl font-poppins font-bold text-primary mb-3">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">By accessing and using the SJB C&C website (sjbcc.in), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.</p>
            </div>

            <div>
              <h2 className="text-xl font-poppins font-bold text-primary mb-3">2. Services</h2>
              <p className="text-gray-600 leading-relaxed">SJB C&C provides construction, contracting, renovation, interior design, and project management services across Tamil Nadu and Pondicherry. All services are subject to:</p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1 ml-4">
                <li>Availability and scheduling</li>
                <li>Site assessment and feasibility</li>
                <li>Mutual agreement on scope, timeline, and pricing</li>
                <li>Applicable local building regulations (DTCP, CMDA, RERA)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-poppins font-bold text-primary mb-3">3. Quotations &amp; Pricing</h2>
              <p className="text-gray-600 leading-relaxed">All quotations provided through this website or via communication are estimates only. Final pricing is determined after:</p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1 ml-4">
                <li>On-site inspection and assessment</li>
                <li>Detailed discussion of project requirements</li>
                <li>Finalization of materials and specifications</li>
                <li>Written agreement signed by both parties</li>
              </ul>
              <p className="text-gray-600 mt-2">Quotations are valid for 30 days from the date of issue unless otherwise specified.</p>
            </div>

            <div>
              <h2 className="text-xl font-poppins font-bold text-primary mb-3">4. Project Timeline</h2>
              <p className="text-gray-600 leading-relaxed">Project timelines are estimated based on standard conditions. Delays may occur due to:</p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1 ml-4">
                <li>Monsoon seasons and weather conditions</li>
                <li>Government approval delays (DTCP, CMDA, RERA)</li>
                <li>Changes in project scope requested by the client</li>
                <li>Force majeure events</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-poppins font-bold text-primary mb-3">5. Payment Terms</h2>
              <p className="text-gray-600 leading-relaxed">Payment schedules are outlined in the individual project contract. Generally:</p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1 ml-4">
                <li>An advance payment is required before work begins</li>
                <li>Subsequent payments are tied to project milestones</li>
                <li>Final payment is due upon project completion and handover</li>
                <li>All payments are to be made in INR (Indian Rupees)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-poppins font-bold text-primary mb-3">6. Warranty</h2>
              <p className="text-gray-600 leading-relaxed">SJB C&C provides the following warranties on completed projects:</p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1 ml-4">
                <li><strong>Structural warranty:</strong> 10 years on foundation, structure, and load-bearing elements</li>
                <li><strong>Finishes warranty:</strong> 2 years on finishes, fittings, and non-structural elements</li>
              </ul>
              <p className="text-gray-600 mt-2">Warranty claims must be reported in writing. Damage caused by misuse, neglect, or third-party modifications is not covered.</p>
            </div>

            <div>
              <h2 className="text-xl font-poppins font-bold text-primary mb-3">7. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">All content on this website including text, images, logos, designs, and graphics are the property of SJB C&C and are protected by copyright laws. You may not reproduce, distribute, or use any content without written permission.</p>
            </div>

            <div>
              <h2 className="text-xl font-poppins font-bold text-primary mb-3">8. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">SJB C&C shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or services. Our liability is limited to the amount paid by the client for the specific project in question.</p>
            </div>

            <div>
              <h2 className="text-xl font-poppins font-bold text-primary mb-3">9. Dispute Resolution</h2>
              <p className="text-gray-600 leading-relaxed">Any disputes arising from our services shall first be resolved through mutual discussion. If unresolved, disputes will be subject to the jurisdiction of courts in Villupuram, Tamil Nadu, India.</p>
            </div>

            <div>
              <h2 className="text-xl font-poppins font-bold text-primary mb-3">10. Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">SJB C&C reserves the right to modify these terms at any time. Updated terms will be posted on this page with a revised date. Continued use of our website constitutes acceptance of any changes.</p>
            </div>

            <div>
              <h2 className="text-xl font-poppins font-bold text-primary mb-3">11. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">For questions about these Terms of Service, contact us at:</p>
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
