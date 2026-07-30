import { Link } from 'react-router-dom'
import SEO, { ServiceSchema } from '../components/SEO'

export default function Chennai() {
  return (
    <>
      <SEO
        title="Best Builders in Chennai | Construction Company Chennai | SJB C&C"
        description="SJB C&C offers professional budget-friendly construction services in Chennai — residential, commercial, and renovation. CMDA approved. Office in Tharamani. Get free quote today."
        path="/service-areas/chennai"
      />
      <ServiceSchema
        serviceName="Construction Services in Chennai"
        serviceDescription="Professional residential and commercial construction services in Chennai, Tamil Nadu. CMDA approved."
      />

      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
           <img src="https://upload.wikimedia.org/wikipedia/commons/7/72/Chennai-Skyline-from-Mount.jpg" alt="Chennai city skyline" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up">
            <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase">Service Area</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white mt-4 mb-6">Building in<br /><span className="text-amber-500">Chennai</span></h1>
            <p className="text-gray-400 text-lg max-w-xl">Reliable construction services in Chennai — from Velachery to Tharamani. We build homes, offices, and commercial spaces with CMDA approval and modern quality standards.</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div data-aos="fade-right">
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-sm font-semibold mb-4">Building in Chennai</span>
              <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-primary mb-6">Chennai's Growing Construction Partner</h2>
              <p className="text-gray-500 mb-4 leading-relaxed">With our Chennai office in Tharamani, SJB C&C serves clients across the city — from Velachery and Chromepet to OMR and beyond. We handle CMDA approvals, design for coastal humidity, and deliver projects on time and on budget.</p>
              <p className="text-gray-500 mb-6 leading-relaxed">Whether you need a new home, a commercial showroom, or a complete office interior, our Chennai team brings the same quality and transparency that has earned us 35+ satisfied clients across Tamil Nadu.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full text-sm font-semibold transition-all duration-300">Get Free Quote in Chennai <i className="fas fa-arrow-right text-xs" /></Link>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Chennai_Skyline_Anna_Salai.jpg" alt="Construction projects in Chennai" className="w-full h-[300px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-primary mb-4">Our Services in Chennai</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Tailored construction solutions for Chennai's dynamic real estate market.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'fa-home', title: 'Home Construction', desc: 'Modern homes and apartments built to Chennai\'s coastal climate standards with CMDA approval.' },
              { icon: 'fa-building', title: 'Commercial Projects', desc: 'Showrooms, offices, and retail spaces in Chennai\'s prime commercial corridors.' },
              { icon: 'fa-paint-roller', title: 'Interior Design', desc: 'Premium interior design and fit-outs for homes and offices across Chennai.' },
              { icon: 'fa-hard-hat', title: 'Renovation', desc: 'Full-scale renovation and remodeling services for Chennai properties.' },
              { icon: 'fa-drafting-compass', title: 'Architecture', desc: 'Vastu-compliant and modern architectural designs tailored for Chennai.' },
              { icon: 'fa-clipboard-check', title: 'Project Management', desc: 'Complete construction management from concept to handover in Chennai.' },
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
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-primary mb-4">Building in Chennai?</h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-8">Visit our Tharamani office or call for a free consultation.</p>
            <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition-all duration-300"><i className="fas fa-phone-alt" /> Call +91 96295 28219</Link>
          </div>
        </div>
      </section>
    </>
  )
}
