import { Link } from 'react-router-dom'

export default function FAQ() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80" alt="SJB C&C construction FAQ - Tamil Nadu building projects" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up">
            <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase">FAQ</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white mt-4 mb-6">Frequently Asked<br /><span className="text-amber-500">Questions</span></h1>
            <p className="text-gray-400 text-lg max-w-xl">Find answers to the most common questions about our construction services, Tamil Nadu regulations, and building process.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* General */}
          <h2 className="text-2xl font-poppins font-bold text-primary mb-8" data-aos="fade-up">General Questions</h2>
          <div className="space-y-4 mb-16">
            <div className="faq-item rounded-2xl border border-slate-100 bg-white p-6 cursor-pointer transition-all duration-300" data-aos="fade-up">
              <div className="faq-question flex items-center justify-between">
                <h3 className="text-base font-poppins font-semibold text-primary pr-4">What services does SJB C&C offer in Tamil Nadu?</h3>
                <i className="fas fa-chevron-down text-amber-500 text-sm flex-shrink-0 faq-icon transition-transform duration-300" />
              </div>
              <div className="faq-answer mt-4" style={{ maxHeight: 0, opacity: 0 }}>
                <p className="text-gray-500 text-sm leading-relaxed">SJB C&C offers a comprehensive range of construction services across Tamil Nadu including residential construction (independent houses, villas, apartments), commercial construction (showrooms, offices, hotels), industrial construction, interior design, renovation &amp; remodeling, architecture &amp; design, civil contracting, and full project management. We handle projects from initial concept through to final handover, including DTCP and CMDA approvals.</p>
              </div>
            </div>

            <div className="faq-item rounded-2xl border border-slate-100 bg-white p-6 cursor-pointer transition-all duration-300" data-aos="fade-up" data-aos-delay="50">
              <div className="faq-question flex items-center justify-between">
                <h3 className="text-base font-poppins font-semibold text-primary pr-4">How long has SJB C&C been operating in Tamil Nadu?</h3>
                <i className="fas fa-chevron-down text-amber-500 text-sm flex-shrink-0 faq-icon transition-transform duration-300" />
              </div>
              <div className="faq-answer mt-4" style={{ maxHeight: 0, opacity: 0 }}>
                <p className="text-gray-500 text-sm leading-relaxed">SJB C&C was founded in 2026 and is a fast-growing construction company based in Villupuram, Tamil Nadu. We have already delivered 35+ projects across Villupuram, Chennai, Tindivanam, Cuddalore, Pondicherry, and surrounding areas. We have deep expertise in Tamil Nadu construction norms and local building regulations.</p>
              </div>
            </div>

            <div className="faq-item rounded-2xl border border-slate-100 bg-white p-6 cursor-pointer transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
              <div className="faq-question flex items-center justify-between">
                <h3 className="text-base font-poppins font-semibold text-primary pr-4">Which cities and districts in Tamil Nadu do you serve?</h3>
                <i className="fas fa-chevron-down text-amber-500 text-sm flex-shrink-0 faq-icon transition-transform duration-300" />
              </div>
              <div className="faq-answer mt-4" style={{ maxHeight: 0, opacity: 0 }}>
                <p className="text-gray-500 text-sm leading-relaxed">We currently have active operations in Villupuram (headquarters), Chennai, Tindivanam, Cuddalore, Pondicherry, and Ulundurpet. We also take on special projects in other districts across Tamil Nadu including Kanchipuram, Chengalpattu, and Villupuram district on a case-by-case basis. Contact us to discuss projects in your area.</p>
              </div>
            </div>
          </div>

          {/* Cost & Payment */}
          <h2 className="text-2xl font-poppins font-bold text-primary mb-8" data-aos="fade-up">Cost &amp; Payment</h2>
          <div className="space-y-4 mb-16">
            <div className="faq-item rounded-2xl border border-slate-100 bg-white p-6 cursor-pointer transition-all duration-300" data-aos="fade-up">
              <div className="faq-question flex items-center justify-between">
                <h3 className="text-base font-poppins font-semibold text-primary pr-4">How much does it cost to build a house in Tamil Nadu?</h3>
                <i className="fas fa-chevron-down text-amber-500 text-sm flex-shrink-0 faq-icon transition-transform duration-300" />
              </div>
              <div className="faq-answer mt-4" style={{ maxHeight: 0, opacity: 0 }}>
                <p className="text-gray-500 text-sm leading-relaxed">Construction costs in Tamil Nadu vary based on location, design, materials, and finishes. As a general guide: basic construction starts from ₹1,800 per sq ft, mid-range from ₹2,500 per sq ft, and premium/luxury from ₹3,500+ per sq ft. For example, a 1,500 sq ft house in Villupuram may cost ₹30–50 Lakhs, while the same in Chennai could range from ₹45–75 Lakhs. We provide detailed, transparent quotations in INR after an initial consultation and site assessment.</p>
              </div>
            </div>

            <div className="faq-item rounded-2xl border border-slate-100 bg-white p-6 cursor-pointer transition-all duration-300" data-aos="fade-up" data-aos-delay="50">
              <div className="faq-question flex items-center justify-between">
                <h3 className="text-base font-poppins font-semibold text-primary pr-4">What payment options do you accept?</h3>
                <i className="fas fa-chevron-down text-amber-500 text-sm flex-shrink-0 faq-icon transition-transform duration-300" />
              </div>
              <div className="faq-answer mt-4" style={{ maxHeight: 0, opacity: 0 }}>
                <p className="text-gray-500 text-sm leading-relaxed">We accept bank transfers (NEFT/RTGS/IMPS), cheques, UPI payments, and online payments. Our standard payment structure is milestone-based in INR Lakhs: typically 15–20% advance, followed by progress-linked payments at key construction milestones (foundation, first floor, roof, finishing). We provide detailed GST-compliant invoices at every stage so you always know exactly what you are paying for.</p>
              </div>
            </div>

            <div className="faq-item rounded-2xl border border-slate-100 bg-white p-6 cursor-pointer transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
              <div className="faq-question flex items-center justify-between">
                <h3 className="text-base font-poppins font-semibold text-primary pr-4">Is the initial consultation free?</h3>
                <i className="fas fa-chevron-down text-amber-500 text-sm flex-shrink-0 faq-icon transition-transform duration-300" />
              </div>
              <div className="faq-answer mt-4" style={{ maxHeight: 0, opacity: 0 }}>
                <p className="text-gray-500 text-sm leading-relaxed">Yes, our initial consultation is completely free and comes with no obligations. We will visit your site anywhere in Tamil Nadu, discuss your vision, understand your requirements, check land documents and Vastu preferences, and provide a preliminary estimate. This helps both of us determine if we are a good fit for your project.</p>
              </div>
            </div>
          </div>

          {/* Timeline & Process */}
          <h2 className="text-2xl font-poppins font-bold text-primary mb-8" data-aos="fade-up">Timeline &amp; Process</h2>
          <div className="space-y-4 mb-16">
            <div className="faq-item rounded-2xl border border-slate-100 bg-white p-6 cursor-pointer transition-all duration-300" data-aos="fade-up">
              <div className="faq-question flex items-center justify-between">
                <h3 className="text-base font-poppins font-semibold text-primary pr-4">How long does a typical construction project take in Tamil Nadu?</h3>
                <i className="fas fa-chevron-down text-amber-500 text-sm flex-shrink-0 faq-icon transition-transform duration-300" />
              </div>
              <div className="faq-answer mt-4" style={{ maxHeight: 0, opacity: 0 }}>
                <p className="text-gray-500 text-sm leading-relaxed">Timeline depends on project size and complexity. A standard residential house (1,000–2,000 sq ft) typically takes 10–14 months. Larger homes and commercial buildings can take 18–30 months. We factor in the Tamil Nadu monsoon season (October–December northeast monsoon and June–September southwest monsoon) when scheduling exterior and foundation work. We provide a detailed project schedule with milestones during the planning phase.</p>
              </div>
            </div>

            <div className="faq-item rounded-2xl border border-slate-100 bg-white p-6 cursor-pointer transition-all duration-300" data-aos="fade-up" data-aos-delay="50">
              <div className="faq-question flex items-center justify-between">
                <h3 className="text-base font-poppins font-semibold text-primary pr-4">Do you handle DTCP and CMDA approvals?</h3>
                <i className="fas fa-chevron-down text-amber-500 text-sm flex-shrink-0 faq-icon transition-transform duration-300" />
              </div>
              <div className="faq-answer mt-4" style={{ maxHeight: 0, opacity: 0 }}>
                <p className="text-gray-500 text-sm leading-relaxed">Yes, we handle all necessary approvals and permits required in Tamil Nadu. This includes DTCP (Directorate of Town and Country Planning) plan approval, CMDA (Chennai Metropolitan Development Authority) permissions for Chennai properties, local panchayat or municipality building permissions, RERA registration, environmental clearances, and any other documentation required by Tamil Nadu state regulations. Our team has extensive experience working with local authorities across all districts we serve.</p>
              </div>
            </div>

            <div className="faq-item rounded-2xl border border-slate-100 bg-white p-6 cursor-pointer transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
              <div className="faq-question flex items-center justify-between">
                <h3 className="text-base font-poppins font-semibold text-primary pr-4">How do you handle construction during the Tamil Nadu monsoon season?</h3>
                <i className="fas fa-chevron-down text-amber-500 text-sm flex-shrink-0 faq-icon transition-transform duration-300" />
              </div>
              <div className="faq-answer mt-4" style={{ maxHeight: 0, opacity: 0 }}>
                <p className="text-gray-500 text-sm leading-relaxed">Tamil Nadu receives significant rainfall during the northeast monsoon (October–December) and to a lesser extent during the southwest monsoon (June–September). We plan our construction schedules accordingly — critical foundation and structural work is ideally completed before the monsoon peak. During rainy periods, we focus on interior work, electrical, and plumbing. We use proper waterproofing techniques, ensure adequate site drainage, and follow Tamil Nadu Public Works Department guidelines for monsoon-resilient construction.</p>
              </div>
            </div>
          </div>

          {/* Warranty & Materials */}
          <h2 className="text-2xl font-poppins font-bold text-primary mb-8" data-aos="fade-up">Warranty &amp; Materials</h2>
          <div className="space-y-4 mb-16">
            <div className="faq-item rounded-2xl border border-slate-100 bg-white p-6 cursor-pointer transition-all duration-300" data-aos="fade-up">
              <div className="faq-question flex items-center justify-between">
                <h3 className="text-base font-poppins font-semibold text-primary pr-4">What warranty do you provide on your construction work?</h3>
                <i className="fas fa-chevron-down text-amber-500 text-sm flex-shrink-0 faq-icon transition-transform duration-300" />
              </div>
              <div className="faq-answer mt-4" style={{ maxHeight: 0, opacity: 0 }}>
                <p className="text-gray-500 text-sm leading-relaxed">We provide a comprehensive structural warranty of 10 years on all our construction projects, covering the foundation, structure, and load-bearing elements — in compliance with Tamil Nadu RERA guidelines. Additionally, we offer a 2-year warranty on finishes, fittings, and non-structural elements. Any issues arising within the warranty period are addressed promptly at no additional cost.</p>
              </div>
            </div>

            <div className="faq-item rounded-2xl border border-slate-100 bg-white p-6 cursor-pointer transition-all duration-300" data-aos="fade-up" data-aos-delay="50">
              <div className="faq-question flex items-center justify-between">
                <h3 className="text-base font-poppins font-semibold text-primary pr-4">What quality of materials does SJB C&C use?</h3>
                <i className="fas fa-chevron-down text-amber-500 text-sm flex-shrink-0 faq-icon transition-transform duration-300" />
              </div>
              <div className="faq-answer mt-4" style={{ maxHeight: 0, opacity: 0 }}>
                <p className="text-gray-500 text-sm leading-relaxed">We exclusively use premium-grade materials sourced locally and from trusted manufacturers. Our standard specifications include ACC/Ambuja cement, Grade Fe-500 TMT steel, Chettinad granite for flooring and countertops, and ISI-certified electrical and plumbing fixtures. For finishing, we use Asian Paints or Berger with weatherproof coatings suited for Tamil Nadu's humid climate. We also offer upgraded material packages for clients who want specific brands or premium finishes.</p>
              </div>
            </div>

            <div className="faq-item rounded-2xl border border-slate-100 bg-white p-6 cursor-pointer transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
              <div className="faq-question flex items-center justify-between">
                <h3 className="text-base font-poppins font-semibold text-primary pr-4">Is SJB C&C licensed and certified to operate in Tamil Nadu?</h3>
                <i className="fas fa-chevron-down text-amber-500 text-sm flex-shrink-0 faq-icon transition-transform duration-300" />
              </div>
              <div className="faq-answer mt-4" style={{ maxHeight: 0, opacity: 0 }}>
                <p className="text-gray-500 text-sm leading-relaxed">Yes, SJB C&C is fully licensed and registered. We hold registration with the Tamil Nadu RERA (Real Estate Regulatory Authority), ISO 9001:2015 certification for quality management, and are registered with all relevant local and state authorities including DTCP, local panchayats, and municipal corporations. We also follow National Building Code of India (NBC) standards and Tamil Nadu Combined Development and Building Rules 2019 for all construction work.</p>
              </div>
            </div>
          </div>

          {/* Still Have Questions */}
          <div className="text-center p-12 rounded-2xl bg-slate-50 border border-slate-100" data-aos="fade-up">
            <h3 className="text-xl font-poppins font-bold text-primary mb-3">Still Have Questions?</h3>
            <p className="text-gray-500 mb-6">Cannot find the answer you are looking for? Feel free to reach out to our team in Villupuram.</p>
            <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30">
              <i className="fas fa-envelope text-sm" /> Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
