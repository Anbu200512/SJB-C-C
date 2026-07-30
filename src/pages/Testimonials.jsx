import { Link } from 'react-router-dom'
import Counter from '../components/Counter'
import SEO, { ReviewSchema } from '../components/SEO'

export default function Testimonials() {
  return (
    <>
      <SEO title="Client Reviews | Tamil Nadu's Trusted Builders" description="Read what our clients in Villupuram, Chennai, Pondicherry, Tindivanam, and Cuddalore say about SJB C&C budget-friendly construction. 35+ satisfied customers. 4.9 Google Rating." />
      <ReviewSchema />
      {/* Hero */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80" alt="Happy SJB C&C clients in Tamil Nadu" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up">
            <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase">Testimonials</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white mt-4 mb-6">What Our<br /><span className="text-amber-500">Clients Say</span></h1>
            <p className="text-gray-400 text-lg max-w-xl">35+ satisfied clients across Tamil Nadu and Pondicherry who trust SJB C&C for their construction needs.</p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-primary">Our Track Record</h2>
          <p className="text-gray-500 mt-2">35+ satisfied clients trust SJB C&C — your local builder near me.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div data-aos="fade-up">
              <Counter target={35} suffix="+" className="text-3xl font-poppins font-bold text-amber-500" />
              <p className="text-gray-500 text-sm mt-1">Happy Clients</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <span className="text-3xl font-poppins font-bold text-amber-500">4.9</span>
              <p className="text-gray-500 text-sm mt-1">Google Rating</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <Counter target={98} suffix="%" className="text-3xl font-poppins font-bold text-amber-500" />
              <p className="text-gray-500 text-sm mt-1">On-Time Delivery</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <Counter target={35} suffix="+" className="text-3xl font-poppins font-bold text-amber-500" />
              <p className="text-gray-500 text-sm mt-1">Projects Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-primary mb-4">Client Testimonials</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Hear from homeowners and businesses across Tamil Nadu who chose SJB C&C as their local contractor.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300" data-aos="fade-up">
              <div className="flex gap-1 mb-4"><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /></div>
              <p className="text-gray-600 mb-6 leading-relaxed">&quot;SJB C&C delivered our Saravana Villas project in Villupuram 2 weeks ahead of schedule. Their attention to DTCP-approved plans and quality of work is exceptional. The entire process from design to handover was seamless.&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center"><span className="text-amber-600 font-bold text-sm">KR</span></div>
                <div><h4 className="font-semibold text-primary text-sm">K. Ravi</h4><p className="text-gray-400 text-xs">Saravana Villas, Villupuram</p></div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
              <div className="flex gap-1 mb-4"><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /></div>
              <p className="text-gray-600 mb-6 leading-relaxed">&quot;We hired SJB C&C for our Kumar Complex commercial building in Velachery. They managed every aspect professionally and delivered an IGBC-certified facility that our tenants love. Truly world-class construction.&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center"><span className="text-blue-600 font-bold text-sm">PS</span></div>
                <div><h4 className="font-semibold text-primary text-sm">Priya Shankar</h4><p className="text-gray-400 text-xs">Kumar Complex, Velachery, Chennai</p></div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
              <div className="flex gap-1 mb-4"><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /></div>
              <p className="text-gray-600 mb-6 leading-relaxed">&quot;The Lakshmi Textiles Showroom in Tindivanam was a complex project, but SJB C&C handled it brilliantly. They worked around our business hours and delivered a stunning 3-storey commercial space on time.&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center"><span className="text-green-600 font-bold text-sm">MV</span></div>
                <div><h4 className="font-semibold text-primary text-sm">M. Venkatesh</h4><p className="text-gray-400 text-xs">Lakshmi Textiles, Tindivanam</p></div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
              <div className="flex gap-1 mb-4"><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star-half-alt text-amber-400" /></div>
              <p className="text-gray-600 mb-6 leading-relaxed">&quot;From the initial consultation to the final handover, SJB C&C maintained the highest professional standards. Our Balaji Nagar apartment project in Villupuram was completed on time and within our budget-friendly plan. Highly recommended.&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center"><span className="text-purple-600 font-bold text-sm">SK</span></div>
                <div><h4 className="font-semibold text-primary text-sm">Suresh Kumar</h4><p className="text-gray-400 text-xs">Balaji Nagar Apartments, Villupuram</p></div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="400">
              <div className="flex gap-1 mb-4"><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /></div>
              <p className="text-gray-600 mb-6 leading-relaxed">&quot;The Sree Krishna Restaurant project in Cuddalore was executed beautifully. SJB C&C understood our vision for an AC dining space and delivered a restaurant that our customers absolutely love. Their Vastu-compliant design was a bonus.&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center"><span className="text-pink-600 font-bold text-sm">AD</span></div>
                <div><h4 className="font-semibold text-primary text-sm">Anita Devi</h4><p className="text-gray-400 text-xs">Sree Krishna Restaurant, Cuddalore</p></div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="500">
              <div className="flex gap-1 mb-4"><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /></div>
              <p className="text-gray-600 mb-6 leading-relaxed">&quot;The Murugan Heritage Home renovation in Pondicherry was a sensitive project. SJB C&C preserved the original Chettinad architecture while modernizing every system. We have since given them 2 more projects in our family.&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center"><span className="text-red-600 font-bold text-sm">RM</span></div>
                <div><h4 className="font-semibold text-primary text-sm">Rajesh Menon</h4><p className="text-gray-400 text-xs">Murugan Heritage Home, Pondicherry</p></div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="600">
              <div className="flex gap-1 mb-4"><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /></div>
              <p className="text-gray-600 mb-6 leading-relaxed">&quot;Building Anand Villa in Chromepet with SJB C&C was a wonderful experience. They were transparent with costs, kept us updated throughout, and the final bungalow with pool exceeded our expectations completely.&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center"><span className="text-teal-600 font-bold text-sm">DK</span></div>
                <div><h4 className="font-semibold text-primary text-sm">Deepa Krishnan</h4><p className="text-gray-400 text-xs">Anand Villa, Chromepet, Chennai</p></div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="700">
              <div className="flex gap-1 mb-4"><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /></div>
              <p className="text-gray-600 mb-6 leading-relaxed">&quot;As a real estate developer in Villupuram, I need reliable construction partners. SJB C&C has consistently delivered quality projects on time, handling CMDA and DTCP approvals seamlessly. They are our go-to contractor.&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center"><span className="text-orange-600 font-bold text-sm">GB</span></div>
                <div><h4 className="font-semibold text-primary text-sm">Ganesh Babu</h4><p className="text-gray-400 text-xs">Rajaji Nagar Layout, Ulundurpet</p></div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="800">
              <div className="flex gap-1 mb-4"><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star-half-alt text-amber-400" /></div>
              <p className="text-gray-600 mb-6 leading-relaxed">&quot;The Chettinad Grand Hotel renovation in Cuddalore is a masterpiece. SJB C&C used locally sourced Chettinad granite and traditional materials to create an authentic yet modern hospitality space. Their understanding of Tamil Nadu heritage is impressive.&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center"><span className="text-indigo-600 font-bold text-sm">KR</span></div>
                <div><h4 className="font-semibold text-primary text-sm">K. Ramanathan</h4><p className="text-gray-400 text-xs">Chettinad Grand Hotel, Cuddalore</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews CTA */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
              <i className="fab fa-google text-white text-2xl" />
            </div>
            <div className="text-left">
              <span className="text-3xl font-poppins font-bold text-primary">4.9</span>
              <div className="flex gap-1"><i className="fas fa-star text-amber-400 text-sm" /><i className="fas fa-star text-amber-400 text-sm" /><i className="fas fa-star text-amber-400 text-sm" /><i className="fas fa-star text-amber-400 text-sm" /><i className="fas fa-star text-amber-400 text-sm" /></div>
              <p className="text-gray-400 text-sm">Based on Google Reviews from Tamil Nadu clients</p>
            </div>
          </div>
          <a href="https://g.page/sjbcc/review" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full text-sm font-semibold transition-all duration-300" target="_blank" rel="noreferrer">
            <i className="fab fa-google" /> Read All Reviews on Google
          </a>
        </div>
      </section>
    </>
  )
}
