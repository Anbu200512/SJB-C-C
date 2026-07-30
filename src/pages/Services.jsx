import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import homeConstructionImg from '../assets/images/Home Construction.jpg'
import interiorImg from '../assets/images/Interior Design.jpg'
import renovationImg from '../assets/images/Renovation & Remodeling.jpg'
import architectureImg from '../assets/images/Architecture & Vastu Design.jpg'
import civilImg from '../assets/images/Civil Contracting.jpg'
import projectMgmtImg from '../assets/images/Project Management.jpg'
import plumbingImg from '../assets/images/p13.jpg'
import p9 from '../assets/images/p9.jpg'

export default function Services() {
  return (
    <>
      <SEO title="Construction Services | Home, Commercial & Renovation" description="SJB C&C offers budget-friendly construction services near you in Tamil Nadu — home construction, plumbing, electrical, painting, interior design, and more. Local builder in Chennai, Villupuram. Get free quote." />
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
            <p className="text-gray-400 text-lg max-w-xl">From blueprint to handover, we deliver end-to-end construction solutions across Chennai, Villupuram, Tindivanam, Cuddalore &amp; Pondicherry — built for Tamil Nadu's climate and crafted with Vastu precision. Your trusted local contractor near me.</p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">

          {/* 01 - Home Construction */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch" data-aos="fade-up">
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
            <div className="order-1 lg:order-2 relative h-full">
              <div className="rounded-3xl overflow-hidden shadow-2xl h-full">
                <img src={homeConstructionImg} alt="Home construction in Villupuram Tamil Nadu" loading="lazy" className="w-full h-full object-cover object-top" />
              </div>
            </div>
          </div>

          {/* 02 - Commercial Spaces */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch" data-aos="fade-up">
            <div className="relative h-full">
              <div className="rounded-3xl overflow-hidden shadow-2xl h-full">
                <img src="https://images.pexels.com/photos/32826199/pexels-photo-32826199.jpeg?auto=compress&cs=tinysrgb" alt="Commercial building construction and development in Chennai" loading="lazy" className="w-full h-full object-cover" />
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
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch" data-aos="fade-up">
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
            <div className="order-1 lg:order-2 relative h-full">
              <div className="rounded-3xl overflow-hidden shadow-2xl h-full">
                <img src={interiorImg} alt="Interior design in Pondicherry and Chennai" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* 04 - Renovation */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch" data-aos="fade-up">
            <div className="relative h-full">
              <div className="rounded-3xl overflow-hidden shadow-2xl h-full">
                <img src={renovationImg} alt="Home renovation and remodeling in Tamil Nadu" loading="lazy" className="w-full h-full object-cover" />
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
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch" data-aos="fade-up">
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
            <div className="order-1 lg:order-2 relative h-full">
              <div className="rounded-3xl overflow-hidden shadow-2xl h-full">
                <img src={architectureImg} alt="Vastu compliant architecture Tamil Nadu" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* 06 - Civil Contracting */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch" data-aos="fade-up">
            <div className="relative h-full">
              <div className="rounded-3xl overflow-hidden shadow-2xl h-full">
                <img src={civilImg} alt="Civil contracting and infrastructure development with concrete columns and earthwork" loading="lazy" className="w-full h-full object-cover" />
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
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch" data-aos="fade-up">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-sm font-semibold mb-4">07</span>
              <h2 className="text-3xl font-poppins font-semibold text-primary mb-4">Project Management</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">We manage your project from land survey to final handover — handling DTCP/CMDA approvals, municipal permissions, contractor coordination, and material procurement. Our budget-friendly pricing means no hidden surprises, and our site supervisors ensure quality at every milestone.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">DTCP/CMDA Plan Approval Assistance</span></li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Budget-Friendly Planning &amp; Transparent Cost Tracking</span></li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Material Procurement &amp; Vendor Management</span></li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Weekly Progress Reports &amp; Photo Updates</span></li>
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full text-sm font-semibold transition-all duration-300">Get a Free Quote <i className="fas fa-arrow-right text-xs" /></Link>
            </div>
            <div className="order-1 lg:order-2 relative h-full">
              <div className="rounded-3xl overflow-hidden shadow-2xl h-full">
                <img src={projectMgmtImg} alt="Construction project management with detailed quality tracking and progress monitoring" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* 08 - Plumbing Services */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch" data-aos="fade-up">
            <div className="relative h-full">
              <div className="rounded-3xl overflow-hidden shadow-2xl h-full">
                <img src={plumbingImg} alt="Professional plumbing services in Villupuram and Chennai" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-sm font-semibold mb-4">08</span>
              <h2 className="text-3xl font-poppins font-bold text-primary mb-4">Plumbing Services</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">Complete plumbing solutions for residential and commercial projects across Tamil Nadu. From water supply and drainage systems to bathroom fittings and rainwater harvesting — our licensed plumbers ensure ISI-standard installations that comply with local municipal codes and last for decades.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Water Supply &amp; Drainage Systems</span></li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Bathroom &amp; Kitchen Plumbing Fit-Out</span></li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Rainwater Harvesting &amp; Septic Systems</span></li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Overhead Tank, Sump &amp; Bore Well Connections</span></li>
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full text-sm font-semibold transition-all duration-300">Get a Free Quote <i className="fas fa-arrow-right text-xs" /></Link>
            </div>
          </div>

          {/* 09 - Electrical Works */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch" data-aos="fade-up">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-sm font-semibold mb-4">09</span>
              <h2 className="text-3xl font-poppins font-bold text-primary mb-4">Electrical Works</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">Full-spectrum electrical contracting services for homes, offices, and commercial buildings in Tamil Nadu. Our certified electricians design and install safe, code-compliant wiring systems with proper earthing, surge protection, and energy-efficient LED layouts — all meeting Tamil Nadu Electricity Board standards.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Complete House &amp; Office Wiring (TNEB Compliant)</span></li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">3-Phase Power Connection &amp; Distribution Boards</span></li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Smart Home Automation &amp; Security Systems</span></li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Solar Panel Wiring &amp; Energy-Efficient Lighting</span></li>
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full text-sm font-semibold transition-all duration-300">Get a Free Quote <i className="fas fa-arrow-right text-xs" /></Link>
            </div>
            <div className="order-1 lg:order-2 relative h-full">
              <div className="rounded-3xl overflow-hidden shadow-2xl h-full">
                <img src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80" alt="Professional electrical works and wiring in Tamil Nadu homes and offices" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* 10 - Painting Services */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch" data-aos="fade-up">
            <div className="relative h-full">
              <div className="rounded-3xl overflow-hidden shadow-2xl h-full">
                <img src={p9} alt="Interior and exterior painting services in Chennai and Villupuram" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-sm font-semibold mb-4">10</span>
              <h2 className="text-3xl font-poppins font-bold text-primary mb-4">Painting Services</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">Transform your spaces with professional painting services from SJB C&C. We use Asian Paints and Berger weatherproof coatings designed for Tamil Nadu's humid climate. Our skilled painters deliver flawless finishes for interiors, exteriors, and commercial spaces — with proper surface preparation and long-lasting results.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Interior Wall Painting &amp; Texture Finishes</span></li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Exterior Weatherproof Coatings &amp; Waterproofing</span></li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Wood Polish, Distemper &amp; Wallpaper Installation</span></li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Commercial &amp; Industrial Painting Projects</span></li>
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full text-sm font-semibold transition-all duration-300">Get a Free Quote <i className="fas fa-arrow-right text-xs" /></Link>
            </div>
          </div>

          {/* 11 - Exterior Design */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch" data-aos="fade-up">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-sm font-semibold mb-4">11</span>
              <h2 className="text-3xl font-poppins font-bold text-primary mb-4">Exterior Design</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">Enhance your property's curb appeal with our exterior design services. From elegant facade designs and landscaping to compound walls, gate structures, and outdoor lighting — we create stunning first impressions that blend modern aesthetics with Tamil Nadu's architectural heritage and climate considerations.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Building Facade &amp; Elevation Design</span></li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Landscaping, Gardens &amp; Outdoor Spaces</span></li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Compound Walls, Gates &amp; Parking Areas</span></li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-[10px]" /></div><span className="text-gray-600 text-sm">Outdoor Lighting, Water Features &amp; Decorative Elements</span></li>
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full text-sm font-semibold transition-all duration-300">Get a Free Quote <i className="fas fa-arrow-right text-xs" /></Link>
            </div>
            <div className="order-1 lg:order-2 relative h-full">
              <div className="rounded-3xl overflow-hidden shadow-2xl h-full">
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80" alt="Exterior design and landscaping services in Tamil Nadu" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 cta-section relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/34629416/pexels-photo-34629416.jpeg?auto=compress&cs=tinysrgb" alt="" className="w-full h-full object-cover opacity-20" aria-hidden="true" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="zoom-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-white mb-6">Find the Right Service for You</h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">From Vastu-compliant homes in Villupuram to commercial complexes in Chennai and renovations in Pondicherry — we tailor every service to your unique needs and budget-friendly approach.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-ripple inline-flex items-center gap-3 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 transform hover:-translate-y-1">
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
