import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80" alt="Construction services in Tamil Nadu" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up">
            <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase">Serving Tamil Nadu Since Inception</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white mt-4 mb-6">Our Construction<br /><span className="text-amber-500">Services</span></h1>
            <p className="text-gray-400 text-lg max-w-xl">From blueprint to handover, we deliver end-to-end construction solutions across Chennai, Villupuram, Tindivanam, Cuddalore &amp; Pondicherry — built for Tamil Nadu's climate and crafted with Vastu precision.</p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">

          {/* 01 - Home Construction */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center" data-aos="fade-up">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-sm font-semibold mb-4">01</span>
              <h2 className="text-3xl font-poppins font-bold text-primary mb-4">Home Construction</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">We build homes designed for Tamil Nadu's tropical climate — ventilated, Vastu-compliant, and constructed with locally sourced materials like Chettinad granite and red brickyards from Villupuram. Every home is DTCP-approved and built to withstand monsoons and coastal humidity.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Independent Houses &amp; Villas (DTCP Approved)</span></li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Gated Community Developments</span></li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Custom Vastu-Compliant Floor Plans</span></li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Climate-Responsive Design &amp; Rainwater Harvesting</span></li>
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full text-sm font-semibold transition-all duration-300">Get a Free Quote <i className="fas fa-arrow-right text-xs" /></Link>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80" alt="Home construction in Villupuram Tamil Nadu" className="w-full h-[280px] sm:h-[350px] lg:h-[400px] object-cover" />
              </div>
            </div>
          </div>

          {/* 02 - Commercial Spaces */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center" data-aos="fade-up">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" alt="Commercial building construction in Chennai" className="w-full h-[280px] sm:h-[350px] lg:h-[400px] object-cover" />
              </div>
            </div>
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-sm font-semibold mb-4">02</span>
              <h2 className="text-3xl font-poppins font-bold text-primary mb-4">Commercial Spaces</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">We deliver commercial buildings that meet Tamil Nadu's local body regulations and fire safety norms. From showroom fit-outs in Pondicherry to office complexes in Chennai, our structures are engineered for durability, aesthetics, and compliance with CMDA/DTCP approvals.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Office Buildings &amp; Showrooms</span></li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Retail Outlets &amp; Restaurants</span></li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Warehouses &amp; godowns (Cuddalore/Tindivanam)</span></li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Multi-Storey Commercial Complexes</span></li>
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full text-sm font-semibold transition-all duration-300">Get a Free Quote <i className="fas fa-arrow-right text-xs" /></Link>
            </div>
          </div>

          {/* 03 - Interior Design */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center" data-aos="fade-up">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-sm font-semibold mb-4">03</span>
              <h2 className="text-3xl font-poppins font-bold text-primary mb-4">Interior Design</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">Our interior studio blends contemporary aesthetics with traditional Tamil Nadu sensibilities. We use local hardwoods, Chettinad stone accents, and moisture-resistant finishes suited for the region's humid climate to craft stunning interiors for homes and businesses alike.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Residential Interior Fit-Out</span></li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Office &amp; Commercial Interiors</span></li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">3D Walkthroughs &amp; Material Sampling</span></li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Custom Teakwood Furniture &amp; Modular Kitchens</span></li>
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full text-sm font-semibold transition-all duration-300">Get a Free Quote <i className="fas fa-arrow-right text-xs" /></Link>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80" alt="Interior design in Pondicherry and Chennai" className="w-full h-[280px] sm:h-[350px] lg:h-[400px] object-cover" />
              </div>
            </div>
          </div>

          {/* 04 - Renovation */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center" data-aos="fade-up">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" alt="Home renovation and remodeling in Tamil Nadu" className="w-full h-[280px] sm:h-[350px] lg:h-[400px] object-cover" />
              </div>
            </div>
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-sm font-semibold mb-4">04</span>
              <h2 className="text-3xl font-poppins font-bold text-primary mb-4">Renovation &amp; Remodeling</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">Breathe new life into aging properties across Tamil Nadu. We specialize in upgrading heritage homes in Pondicherry's French Quarter, modernizing traditional Chettinad-style houses, and retrofitting buildings to meet current earthquake-resistant and rainwater harvesting mandates.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Full Home Renovation &amp; Structural Strengthening</span></li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Heritage &amp; Colonial Property Restoration</span></li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Kitchen &amp; Bathroom Remodeling</span></li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Roof Waterproofing &amp; Termite Treatment</span></li>
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full text-sm font-semibold transition-all duration-300">Get a Free Quote <i className="fas fa-arrow-right text-xs" /></Link>
            </div>
          </div>

          {/* 05 - Architecture (Vastu-Compliant) */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center" data-aos="fade-up">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-sm font-semibold mb-4">05</span>
              <h2 className="text-3xl font-poppins font-bold text-primary mb-4">Architecture &amp; Vastu Design</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">Every design we create honors Vastu Shastra principles — a cornerstone of Tamil Nadu's building tradition. Our architects blend ancient wisdom with modern engineering, ensuring your home or commercial space channels positive energy while complying with CMDA/DTCP planning norms.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Vastu-Compliant Floor Plans &amp; Elevation Design</span></li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">3D Rendering &amp; Virtual Walkthroughs</span></li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Structural &amp; Civil Drawings for Approval</span></li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Climate-Adaptive Design for Tamil Nadu's Heat &amp; Rain</span></li>
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full text-sm font-semibold transition-all duration-300">Get a Free Quote <i className="fas fa-arrow-right text-xs" /></Link>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" alt="Vastu compliant architecture Tamil Nadu" className="w-full h-[280px] sm:h-[350px] lg:h-[400px] object-cover" />
              </div>
            </div>
          </div>

          {/* 06 - Civil Contracting */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center" data-aos="fade-up">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80" alt="Civil contracting and infrastructure in Tamil Nadu" className="w-full h-[280px] sm:h-[350px] lg:h-[400px] object-cover" />
              </div>
            </div>
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-sm font-semibold mb-4">06</span>
              <h2 className="text-3xl font-poppins font-bold text-primary mb-4">Civil Contracting</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">From road widening projects in Villupuram district to drainage infrastructure in Cuddalore, we handle large-scale civil works. Our team is well-versed with Tamil Nadu PWD specifications, local municipal corporation requirements, and NHAI standards for highway-adjacent projects.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Roads, Drains &amp; Public Infrastructure</span></li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Foundation &amp; Soil Testing (Black Cotton Soil Expertise)</span></li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Compound Walls, Septic Systems &amp; Bore Wells</span></li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Government &amp; Municipal Tender Projects</span></li>
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full text-sm font-semibold transition-all duration-300">Get a Free Quote <i className="fas fa-arrow-right text-xs" /></Link>
            </div>
          </div>

          {/* 07 - Project Management */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center" data-aos="fade-up">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-sm font-semibold mb-4">07</span>
              <h2 className="text-3xl font-poppins font-semibold text-primary mb-4">Project Management</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">We manage your project from land survey to final handover — handling DTCP/CMDA approvals, municipal permissions, contractor coordination, and material procurement. Our transparent pricing in ₹ Lakhs means no hidden surprises, and our site supervisors ensure quality at every milestone.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">DTCP/CMDA Plan Approval Assistance</span></li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Budget Planning &amp; Transparent Cost Tracking (₹ Lakhs)</span></li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Material Procurement &amp; Vendor Management</span></li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Weekly Progress Reports &amp; Photo Updates</span></li>
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full text-sm font-semibold transition-all duration-300">Get a Free Quote <i className="fas fa-arrow-right text-xs" /></Link>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" alt="Project management for construction in Tamil Nadu" className="w-full h-[280px] sm:h-[350px] lg:h-[400px] object-cover" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 cta-section relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80" alt="" className="w-full h-full object-cover opacity-20" aria-hidden="true" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="zoom-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-white mb-6">Find the Right Service for You</h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">From Vastu-compliant homes in Villupuram to commercial complexes in Chennai and renovations in Pondicherry — we tailor every service to your unique needs and budget.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-ripple inline-flex items-center gap-3 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-1">
              <i className="fas fa-cogs text-sm" /> Explore Services
            </Link>
            <a href="tel:+919629528219" className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 transition-all duration-300">
              <i className="fas fa-phone-alt text-sm" /> +91 96295 28219
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
