import { Link } from 'react-router-dom'
import SEO, { ServiceSchema } from '../components/SEO'

export default function Villupuram() {
  return (
    <>
      <SEO
        title="Home Construction in Villupuram | Best Builders in Villupuram"
        description="SJB C&C - Villupuram's trusted local budget-friendly construction company. We build homes, commercial spaces, and renovations across Villupuram district. DTCP approved, Vastu compliant. Get free quote."
        path="/service-areas/villupuram"
      />
      <ServiceSchema
        serviceName="Construction Services in Villupuram"
        serviceDescription="Professional residential and commercial construction services in Villupuram, Tamil Nadu. DTCP approved, Vastu compliant."
      />

      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80" alt="Construction services in Villupuram" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up">
            <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase">Service Area</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white mt-4 mb-6">Builders in<br /><span className="text-amber-500">Villupuram</span></h1>
            <p className="text-gray-400 text-lg max-w-xl">Your local construction partner in Villupuram — building quality homes, commercial spaces, and renovations with modern craftsmanship and Vastu precision.</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div data-aos="fade-right">
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-sm font-semibold mb-4">Why Choose Us in Villupuram</span>
              <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-primary mb-6">Villupuram's Trusted Construction Company</h2>
              <p className="text-gray-500 mb-4 leading-relaxed">Headquartered in Villupuram, SJB C&C understands the local construction landscape better than anyone. We work with trusted local material suppliers, know the DTCP approval process inside out, and design homes that suit Villupuram's climate and community needs.</p>
              <p className="text-gray-500 mb-6 leading-relaxed">From independent houses and villas to commercial showrooms and renovation projects, our team delivers quality craftsmanship backed by years of local experience.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full text-sm font-semibold transition-all duration-300">Get Free Quote in Villupuram <i className="fas fa-arrow-right text-xs" /></Link>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.pexels.com/photos/34591376/pexels-photo-34591376.jpeg?auto=compress&cs=tinysrgb" alt="Modern residential construction projects in Villupuram Tamil Nadu" className="w-full h-[300px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-primary mb-4">Our Services in Villupuram</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Comprehensive construction services tailored for Villupuram homeowners and businesses.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'fa-home', title: 'Home Construction', desc: 'Independent houses, villas, and apartments designed for Villupuram\'s climate with Vastu compliance and DTCP approval.' },
              { icon: 'fa-building', title: 'Commercial Spaces', desc: 'Showrooms, offices, and retail spaces built to attract customers in Villupuram\'s growing commercial hubs.' },
              { icon: 'fa-paint-roller', title: 'Renovation & Remodeling', desc: 'Modernize your existing property with expert renovation services across Villupuram.' },
              { icon: 'fa-drafting-compass', title: 'Architecture & Design', desc: 'Custom floor plans and 3D designs that match your vision and local regulations.' },
              { icon: 'fa-tools', title: 'Civil Contracting', desc: 'Reliable civil works for contractors and developers in the Villupuram region.' },
              { icon: 'fa-clipboard-check', title: 'Project Management', desc: 'End-to-end project management from permits to handover — stress-free building.' },
            ].map((s, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay={i * 50}>
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4"><i className={`fas ${s.icon} text-amber-600 text-lg`} /></div>
                <h3 className="text-lg font-poppins font-semibold text-primary mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-primary mb-4">Ready to Build in Villupuram?</h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-8">Contact us for a free site visit and no-obligation quote.</p>
            <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition-all duration-300"><i className="fas fa-phone-alt" /> Call +91 96295 28219</Link>
          </div>
        </div>
      </section>
    </>
  )
}
