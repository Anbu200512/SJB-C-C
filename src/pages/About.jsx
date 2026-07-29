import { Link } from 'react-router-dom'
import Counter from '../components/Counter'
import ceoImg from '../assets/images/ceo.jpeg'

export default function About() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1504919935241-ea3e9cb3f91c?w=1920&q=80" alt="SJB C&C construction team at work in Tamil Nadu" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up">
            <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase">About Us</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white mt-4 mb-6">Our Story of<br /><span className="text-amber-500">Building Tamil Nadu</span></h1>
            <p className="text-gray-400 text-lg max-w-xl">A young, dynamic construction company rooted in Villupuram — delivering quality builds across Chennai, Pondicherry, Cuddalore and beyond since 2026.</p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div data-aos="fade-right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" alt="SJB C&C construction team working on a project in Tamil Nadu" className="w-full h-[280px] sm:h-[350px] lg:h-[450px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-500 rounded-2xl -z-10 hidden lg:block" />
            </div>
            <div data-aos="fade-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-sm font-semibold mb-4">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-primary mb-6">From Villupuram to Tamil Nadu's Trusted Builder</h2>
              <p className="text-gray-500 mb-4 leading-relaxed">Founded in 2026 by SJB, a young and ambitious entrepreneur from Tamil Nadu, SJB C&C started as a small contracting firm with a bold vision — to bring modern, technology-driven construction to Villupuram and the surrounding regions. What began with a small team of dedicated professionals has quickly grown into one of the most promising construction companies in the region.</p>
              <p className="text-gray-500 mb-6 leading-relaxed">In a short time, we have successfully delivered projects spanning residential, commercial, and institutional sectors across Villupuram, Chennai, Tindivanam, Cuddalore, and Pondicherry. Our youthful energy, combined with a commitment to quality, safety, and client satisfaction, has earned us the trust of homeowners and businesses throughout Tamil Nadu.</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-slate-50">
                  <span className="text-3xl font-poppins font-bold text-amber-500">25+</span>
                  <p className="text-gray-500 text-sm mt-1">Projects Delivered</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50">
                  <span className="text-3xl font-poppins font-bold text-amber-500">40+</span>
                  <p className="text-gray-500 text-sm mt-1">Team Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-sm font-semibold mb-4">Our Foundation</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-primary">Mission, Vision &amp; Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="0">
              <div className="w-14 h-14 rounded-xl bg-amber-500 flex items-center justify-center mb-6">
                <i className="fas fa-bullseye text-white text-xl" />
              </div>
              <h3 className="text-xl font-poppins font-semibold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-500 leading-relaxed">To deliver high-quality, affordable construction solutions to homes and businesses across Tamil Nadu — combining modern techniques with traditional values of honesty, craftsmanship, and respect for every client.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="150">
              <div className="w-14 h-14 rounded-xl bg-slate-900 flex items-center justify-center mb-6">
                <i className="fas fa-eye text-white text-xl" />
              </div>
              <h3 className="text-xl font-poppins font-semibold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-500 leading-relaxed">To become Tamil Nadu's most trusted and innovative construction company — setting new benchmarks for quality, sustainability, and technology in the building industry across the southern districts.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
              <div className="w-14 h-14 rounded-xl bg-green-500 flex items-center justify-center mb-6">
                <i className="fas fa-heart text-white text-xl" />
              </div>
              <h3 className="text-xl font-poppins font-semibold text-primary mb-4">Our Values</h3>
              <p className="text-gray-500 leading-relaxed">Integrity, transparency, quality workmanship, safety, and community commitment form the core of everything we do. These Tamil values guide every decision and project we undertake.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-sm font-semibold mb-4">Our Team</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-primary mb-4">Leadership Team</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Meet the driven professionals leading SJB C&C's mission to build a better Tamil Nadu.</p>
          </div>
          <div className="flex justify-center" data-aos="fade-up">
            <div className="group text-center max-w-sm w-full">
              <div className="relative rounded-2xl overflow-hidden mb-6 shadow-lg">
                <img src={ceoImg} alt="Balachandiran - Founder & CEO of SJB C&C" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-3">
                    <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-amber-500 transition-colors"><i className="fab fa-linkedin-in text-xs" /></a>
                    <a href="mailto:sjbconstructionandcontracts@gmail.com" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-amber-500 transition-colors"><i className="fas fa-envelope text-xs" /></a>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-poppins font-semibold text-primary">Balachandiran</h3>
              <p className="text-amber-500 text-sm font-medium">Founder &amp; CEO</p>
              <p className="text-gray-400 text-sm mt-2">Young Tamil Nadu entrepreneur &amp; civil engineer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Commitment */}
      <section className="py-16 sm:py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80" alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div data-aos="fade-right">
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-sm font-semibold mb-4">Safety First</span>
              <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-white mb-6">Our Commitment to Safety</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">At SJB C&C, safety is not just a protocol — it is our culture. Every project follows strict safety guidelines as per Indian Standards (IS), regular training programs, and comprehensive risk assessments to ensure the well-being of our workers and clients across all Tamil Nadu sites.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center"><i className="fas fa-check text-green-400 text-xs" /></div>
                  <span className="text-gray-300 text-sm">Zero Accident Policy</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center"><i className="fas fa-check text-green-400 text-xs" /></div>
                  <span className="text-gray-300 text-sm">Weekly Safety Drills</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center"><i className="fas fa-check text-green-400 text-xs" /></div>
                  <span className="text-gray-300 text-sm">IS Standards Compliance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center"><i className="fas fa-check text-green-400 text-xs" /></div>
                  <span className="text-gray-300 text-sm">Risk Assessment</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6" data-aos="fade-left">
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
                <Counter target={200} suffix="+" className="text-4xl font-poppins font-bold text-amber-400" />
                <p className="text-gray-400 text-sm mt-2">Safe Working Days</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
                <span className="text-4xl font-poppins font-bold text-amber-400">0</span>
                <p className="text-gray-400 text-sm mt-2">Lost Time Incidents</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
                <Counter target={100} suffix="%" className="text-4xl font-poppins font-bold text-amber-400" />
                <p className="text-gray-400 text-sm mt-2">PPE Compliance</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
                <Counter target={12} suffix="+" className="text-4xl font-poppins font-bold text-amber-400" />
                <p className="text-gray-400 text-sm mt-2">Safety Trainings/Year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-sm font-semibold mb-4">Recognition</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-primary">Awards &amp; Certifications</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 rounded-2xl bg-slate-50 hover:shadow-lg transition-shadow duration-300" data-aos="fade-up">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-amber-100 flex items-center justify-center"><i className="fas fa-award text-amber-600 text-2xl" /></div>
              <h4 className="font-poppins font-semibold text-primary mb-2">CPWD Registered</h4>
              <p className="text-gray-400 text-sm">Central Public Works Department, Govt. of India</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-slate-50 hover:shadow-lg transition-shadow duration-300" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-blue-100 flex items-center justify-center"><i className="fas fa-certificate text-blue-600 text-2xl" /></div>
              <h4 className="font-poppins font-semibold text-primary mb-2">PWD Tamil Nadu</h4>
              <p className="text-gray-400 text-sm">Public Works Department, Govt. of Tamil Nadu</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-slate-50 hover:shadow-lg transition-shadow duration-300" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-green-100 flex items-center justify-center"><i className="fas fa-leaf text-green-600 text-2xl" /></div>
              <h4 className="font-poppins font-semibold text-primary mb-2">GRIHA Certified</h4>
              <p className="text-gray-400 text-sm">Green Rating for Integrated Habitat Assessment</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-slate-50 hover:shadow-lg transition-shadow duration-300" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-purple-100 flex items-center justify-center"><i className="fas fa-medal text-purple-600 text-2xl" /></div>
              <h4 className="font-poppins font-semibold text-primary mb-2">IOA Registered</h4>
              <p className="text-gray-400 text-sm">Indian Oil Association Approved Contractor</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 cta-section relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80" alt="" className="w-full h-full object-cover opacity-20" aria-hidden="true" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="zoom-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-white mb-6">Become Part of Our Story</h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">Whether it's your first home, a dream office, or a commercial venture — let's write the next chapter together. SJB C&C is built on trust, quality, and Tamil pride.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-ripple inline-flex items-center gap-3 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 transform hover:-translate-y-1">
                <i className="fas fa-handshake text-sm" /> Let's Work Together
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
