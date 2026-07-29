import { Link } from 'react-router-dom'
import Counter from '../components/Counter'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80" alt="Construction site in Tamil Nadu" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/50" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-down" data-aos-duration="800">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Trusted Startup Since 2026
            </span>
          </div>

          <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-bold text-white leading-tight mb-6">
            Building Dreams<br />
            <span className="gradient-text">Across Tamil Nadu</span>
          </h1>

          <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Your trusted local construction partner in Villupuram, Chennai &amp; surrounding districts. We deliver quality homes, commercial spaces, and renovations with modern craftsmanship.
          </p>

          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-ripple group inline-flex items-center gap-3 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 transform hover:-translate-y-1">
              <i className="fas fa-hard-hat text-sm" />
              Get Free Quote
              <i className="fas fa-arrow-right text-sm transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/projects" className="btn-ripple inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <i className="fas fa-play text-sm" />
              View Our Projects
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-indicator">
          <span className="text-gray-400 text-xs tracking-widest uppercase">Scroll Down</span>
          <i className="fas fa-chevron-down text-amber-500" />
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 sm:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="text-center" data-aos="fade-up" data-aos-delay="0">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-amber-500/10 flex items-center justify-center">
                <i className="fas fa-calendar-alt text-amber-500 text-2xl" />
              </div>
              <Counter target={1} suffix="+" className="text-4xl lg:text-5xl font-poppins font-bold text-slate-900" />
              <p className="text-gray-500 text-sm mt-2">Year in Business</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-amber-500/10 flex items-center justify-center">
                <i className="fas fa-building text-amber-500 text-2xl" />
              </div>
              <Counter target={35} suffix="+" className="text-4xl lg:text-5xl font-poppins font-bold text-slate-900" />
              <p className="text-gray-500 text-sm mt-2">Projects Delivered</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-amber-500/10 flex items-center justify-center">
                <i className="fas fa-smile text-amber-500 text-2xl" />
              </div>
              <Counter target={40} suffix="+" className="text-4xl lg:text-5xl font-poppins font-bold text-slate-900" />
              <p className="text-gray-500 text-sm mt-2">Happy Families</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-amber-500/10 flex items-center justify-center">
                <i className="fas fa-star text-amber-500 text-2xl" />
              </div>
              <Counter target={100} suffix="%" className="text-4xl lg:text-5xl font-poppins font-bold text-slate-900" />
              <p className="text-gray-500 text-sm mt-2">Client Satisfaction</p>
            </div>
            <div className="text-center col-span-2 md:col-span-3 lg:col-span-1" data-aos="fade-up" data-aos-delay="400">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-amber-500/10 flex items-center justify-center">
                <i className="fas fa-users text-amber-500 text-2xl" />
              </div>
              <Counter target={25} suffix="+" className="text-4xl lg:text-5xl font-poppins font-bold text-slate-900" />
              <p className="text-gray-500 text-sm mt-2">Skilled Workers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-sm font-semibold mb-4">What We Do</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-primary mb-4">Our Premium Services</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Comprehensive construction solutions for homes, shops, and offices across Villupuram, Chennai, and Tamil Nadu.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="service-card group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-amber-200 cursor-pointer" data-aos="fade-up" data-aos-delay="0">
              <div className="service-icon w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center mb-6 transition-all duration-300">
                <i className="fas fa-home text-amber-500 text-xl" />
              </div>
              <h3 className="text-lg font-poppins font-semibold text-primary mb-3">Home Construction</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">Build your dream home in Villupuram, Chennai or anywhere in Tamil Nadu with quality materials and expert craftsmanship.</p>
              <Link to="/services" className="inline-flex items-center gap-2 text-amber-500 text-sm font-semibold group-hover:gap-3 transition-all duration-300">Learn More <i className="fas fa-arrow-right text-xs" /></Link>
            </div>

            <div className="service-card group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-amber-200 cursor-pointer" data-aos="fade-up" data-aos-delay="100">
              <div className="service-icon w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center mb-6 transition-all duration-300">
                <i className="fas fa-store text-amber-500 text-xl" />
              </div>
              <h3 className="text-lg font-poppins font-semibold text-primary mb-3">Commercial Spaces</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">Shops, offices, and commercial buildings designed to attract customers and maximize your business potential.</p>
              <Link to="/services" className="inline-flex items-center gap-2 text-amber-500 text-sm font-semibold group-hover:gap-3 transition-all duration-300">Learn More <i className="fas fa-arrow-right text-xs" /></Link>
            </div>

            <div className="service-card group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-amber-200 cursor-pointer" data-aos="fade-up" data-aos-delay="200">
              <div className="service-icon w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center mb-6 transition-all duration-300">
                <i className="fas fa-couch text-amber-500 text-xl" />
              </div>
              <h3 className="text-lg font-poppins font-semibold text-primary mb-3">Interior Design</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">Transform your spaces with modern interiors that blend Tamil tradition with contemporary style and functionality.</p>
              <Link to="/services" className="inline-flex items-center gap-2 text-amber-500 text-sm font-semibold group-hover:gap-3 transition-all duration-300">Learn More <i className="fas fa-arrow-right text-xs" /></Link>
            </div>

            <div className="service-card group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-amber-200 cursor-pointer" data-aos="fade-up" data-aos-delay="300">
              <div className="service-icon w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center mb-6 transition-all duration-300">
                <i className="fas fa-tools text-amber-500 text-xl" />
              </div>
              <h3 className="text-lg font-poppins font-semibold text-primary mb-3">Renovation</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">Give your old home or office a fresh new look with our expert renovation and remodeling services.</p>
              <Link to="/services" className="inline-flex items-center gap-2 text-amber-500 text-sm font-semibold group-hover:gap-3 transition-all duration-300">Learn More <i className="fas fa-arrow-right text-xs" /></Link>
            </div>

            <div className="service-card group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-amber-200 cursor-pointer" data-aos="fade-up" data-aos-delay="400">
              <div className="service-icon w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center mb-6 transition-all duration-300">
                <i className="fas fa-drafting-compass text-amber-500 text-xl" />
              </div>
              <h3 className="text-lg font-poppins font-semibold text-primary mb-3">Architecture</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">Vastu-compliant architectural designs that blend traditional South Indian aesthetics with modern living needs.</p>
              <Link to="/services" className="inline-flex items-center gap-2 text-amber-500 text-sm font-semibold group-hover:gap-3 transition-all duration-300">Learn More <i className="fas fa-arrow-right text-xs" /></Link>
            </div>

            <div className="service-card group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-amber-200 cursor-pointer" data-aos="fade-up" data-aos-delay="500">
              <div className="service-icon w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center mb-6 transition-all duration-300">
                <i className="fas fa-building text-amber-500 text-xl" />
              </div>
              <h3 className="text-lg font-poppins font-semibold text-primary mb-3">House Renovation</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">Complete home makeovers including kitchen, bathroom, flooring, and exterior upgrades at affordable rates.</p>
              <Link to="/services" className="inline-flex items-center gap-2 text-amber-500 text-sm font-semibold group-hover:gap-3 transition-all duration-300">Learn More <i className="fas fa-arrow-right text-xs" /></Link>
            </div>

            <div className="service-card group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-amber-200 cursor-pointer" data-aos="fade-up" data-aos-delay="600">
              <div className="service-icon w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center mb-6 transition-all duration-300">
                <i className="fas fa-road text-amber-500 text-xl" />
              </div>
              <h3 className="text-lg font-poppins font-semibold text-primary mb-3">Civil Contracting</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">Roads, compound walls, boundary structures, and public works built to government standards.</p>
              <Link to="/services" className="inline-flex items-center gap-2 text-amber-500 text-sm font-semibold group-hover:gap-3 transition-all duration-300">Learn More <i className="fas fa-arrow-right text-xs" /></Link>
            </div>

            <div className="service-card group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-amber-200 cursor-pointer" data-aos="fade-up" data-aos-delay="700">
              <div className="service-icon w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center mb-6 transition-all duration-300">
                <i className="fas fa-tasks text-amber-500 text-xl" />
              </div>
              <h3 className="text-lg font-poppins font-semibold text-primary mb-3">Project Management</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">We manage your entire construction project from start to finish, saving you time, money, and stress.</p>
              <Link to="/services" className="inline-flex items-center gap-2 text-amber-500 text-sm font-semibold group-hover:gap-3 transition-all duration-300">Learn More <i className="fas fa-arrow-right text-xs" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="relative" data-aos="fade-right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" alt="SJB C&C construction team at work in Tamil Nadu" className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <span className="text-4xl font-poppins font-bold block">35+</span>
                <span className="text-sm">Projects<br />Delivered</span>
              </div>
            </div>

            <div data-aos="fade-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-sm font-semibold mb-4">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-primary mb-6">Your Local Partner<br />for Quality Construction</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">As a startup rooted in Tamil Nadu, we understand the local climate, building materials, Vastu traditions, and the unique needs of families in Villupuram, Chennai, and surrounding areas. We combine modern techniques with local expertise.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-xs" /></div>
                  <span className="text-slate-700 text-sm font-medium">T Nadu Registered</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-xs" /></div>
                  <span className="text-slate-700 text-sm font-medium">Vastu Compliant Designs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-xs" /></div>
                  <span className="text-slate-700 text-sm font-medium">Quality Materials</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-xs" /></div>
                  <span className="text-slate-700 text-sm font-medium">Transparent Pricing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-xs" /></div>
                  <span className="text-slate-700 text-sm font-medium">On-Time Delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-xs" /></div>
                  <span className="text-slate-700 text-sm font-medium">BBMP/DTCP Approvals</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-xs" /></div>
                  <span className="text-slate-700 text-sm font-medium">Climate-Resistant Build</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-green-600 text-xs" /></div>
                  <span className="text-slate-700 text-sm font-medium">24/7 Support on WhatsApp</span>
                </div>
              </div>

              <Link to="/contact" className="btn-ripple inline-flex items-center gap-3 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 transform hover:-translate-y-1">
                <i className="fas fa-phone-alt text-sm" />
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-sm font-semibold mb-4">Google Reviews</span>
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-primary mb-4">Rated 4.9/5 on Google</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Trusted by homeowners and businesses across Tamil Nadu.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12" data-aos="fade-up">
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-center">
                <span className="text-5xl font-poppins font-bold text-primary block">4.9</span>
                <div className="flex gap-0.5 mt-1 justify-center"><i className="fas fa-star text-amber-400 text-sm" /><i className="fas fa-star text-amber-400 text-sm" /><i className="fas fa-star text-amber-400 text-sm" /><i className="fas fa-star text-amber-400 text-sm" /><i className="fas fa-star text-amber-400 text-sm" /></div>
                <p className="text-gray-400 text-xs mt-1">Google Rating</p>
              </div>
              <div className="w-px h-16 bg-slate-200" />
              <div className="text-center">
                <span className="text-5xl font-poppins font-bold text-primary block">35+</span>
                <p className="text-gray-400 text-xs mt-1">Total Reviews</p>
              </div>
            </div>
            <div className="flex gap-3 flex-wrap justify-center">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100">
                <i className="fab fa-google text-green-600 text-sm" />
                <span className="text-green-700 text-sm font-medium">Verified on Google</span>
              </div>
              <a href="https://g.page/sjbcc" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500 text-white text-sm font-semibold hover:bg-amber-600 transition-colors" rel="noreferrer">
                <i className="fas fa-external-link-alt text-xs" /> Write a Review
              </a>
            </div>
          </div>

          <div className="swiper google-review-swiper pb-14">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 h-full">
                  <div className="flex gap-0.5 mb-3"><i className="fas fa-star text-amber-400 text-sm" /><i className="fas fa-star text-amber-400 text-sm" /><i className="fas fa-star text-amber-400 text-sm" /><i className="fas fa-star text-amber-400 text-sm" /><i className="fas fa-star text-amber-400 text-sm" /></div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">&quot;Excellent construction quality! SJB C&C built our home in Villupuram with great attention to detail. The team was professional and delivered on time.&quot;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center"><span className="text-amber-600 font-bold text-xs">AR</span></div>
                    <div><p className="text-primary text-sm font-semibold">Arun Raj</p><p className="text-gray-400 text-xs">2 weeks ago</p></div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 h-full">
                  <div className="flex gap-0.5 mb-3"><i className="fas fa-star text-amber-400 text-sm" /><i className="fas fa-star text-amber-400 text-sm" /><i className="fas fa-star text-amber-400 text-sm" /><i className="fas fa-star text-amber-400 text-sm" /><i className="fas fa-star text-amber-400 text-sm" /></div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">&quot;Best builder in Chennai! They completed our office interior in Velachery within the deadline. Transparent pricing and no hidden costs. Highly recommended.&quot;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center"><span className="text-blue-600 font-bold text-xs">PM</span></div>
                    <div><p className="text-primary text-sm font-semibold">Priya Murugan</p><p className="text-gray-400 text-xs">1 month ago</p></div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 h-full">
                  <div className="flex gap-0.5 mb-3"><i className="fas fa-star text-amber-400 text-sm" /><i className="fas fa-star text-amber-400 text-sm" /><i className="fas fa-star text-amber-400 text-sm" /><i className="fas fa-star text-amber-400 text-sm" /><i className="fas fa-star text-amber-400 text-sm" /></div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">&quot;Renovated our ancestral home in Tindivanam beautifully. They preserved the traditional Chettinad style while adding modern amenities. Wonderful experience!&quot;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center"><span className="text-green-600 font-bold text-xs">SK</span></div>
                    <div><p className="text-primary text-sm font-semibold">Senthil Kumar</p><p className="text-gray-400 text-xs">3 weeks ago</p></div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 h-full">
                  <div className="flex gap-0.5 mb-3"><i className="fas fa-star text-amber-400 text-sm" /><i className="fas fa-star text-amber-400 text-sm" /><i className="fas fa-star text-amber-400 text-sm" /><i className="fas fa-star text-amber-400 text-sm" /><i className="fas fa-star-half-alt text-amber-400 text-sm" /></div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">&quot;Got our showroom built near Pondicherry. The design suggestions were very helpful and the DTCP approval was handled smoothly. Good team to work with.&quot;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center"><span className="text-purple-600 font-bold text-xs">MV</span></div>
                    <div><p className="text-primary text-sm font-semibold">Meena Velu</p><p className="text-gray-400 text-xs">2 months ago</p></div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 h-full">
                  <div className="flex gap-0.5 mb-3"><i className="fas fa-star text-amber-400 text-sm" /><i className="fas fa-star text-amber-400 text-sm" /><i className="fas fa-star text-amber-400 text-sm" /><i className="fas fa-star text-amber-400 text-sm" /><i className="fas fa-star text-amber-400 text-sm" /></div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">&quot;SJB C&C is truly professional. From the first meeting to the final walkthrough, everything was transparent. Our commercial complex in Cuddalore looks amazing!&quot;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center"><span className="text-red-600 font-bold text-xs">RK</span></div>
                    <div><p className="text-primary text-sm font-semibold">Rajesh Kannan</p><p className="text-gray-400 text-xs">1 month ago</p></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="google-review-pagination mt-6" />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-sm font-semibold mb-4">Our Process</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-primary mb-4">How We Work</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">A simple, transparent process designed to make your construction experience stress-free.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="relative text-center md:text-left" data-aos="fade-up" data-aos-delay="0">
              <div className="w-14 h-14 rounded-full bg-amber-500 text-white flex items-center justify-center mx-auto md:mx-0 mb-6 text-xl font-poppins font-bold relative z-10 shadow-lg shadow-amber-500/30">1</div>
              <h3 className="text-xl font-poppins font-semibold text-primary mb-3">Free Site Visit</h3>
              <p className="text-gray-500 text-sm leading-relaxed">We visit your site in Villupuram, Chennai, or nearby areas to understand your requirements, plot size, and budget.</p>
            </div>
            <div className="relative text-center md:text-left" data-aos="fade-up" data-aos-delay="150">
              <div className="w-14 h-14 rounded-full bg-amber-500 text-white flex items-center justify-center mx-auto md:mx-0 mb-6 text-xl font-poppins font-bold relative z-10 shadow-lg shadow-amber-500/30">2</div>
              <h3 className="text-xl font-poppins font-semibold text-primary mb-3">Design &amp; Estimate</h3>
              <p className="text-gray-500 text-sm leading-relaxed">We create 3D designs, floor plans, and a detailed cost estimate with no hidden charges before we begin.</p>
            </div>
            <div className="relative text-center md:text-left" data-aos="fade-up" data-aos-delay="300">
              <div className="w-14 h-14 rounded-full bg-amber-500 text-white flex items-center justify-center mx-auto md:mx-0 mb-6 text-xl font-poppins font-bold relative z-10 shadow-lg shadow-amber-500/30">3</div>
              <h3 className="text-xl font-poppins font-semibold text-primary mb-3">Build &amp; Handover</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Our skilled team builds your project with quality materials and hands it over on time with all approvals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-sm font-semibold mb-4">Our Portfolio</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-primary mb-4">Recent Projects</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Homes and spaces we have built for happy families across Tamil Nadu.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up">
            <button className="project-filter-btn px-5 py-2 rounded-full text-sm font-medium bg-amber-500 text-white border border-amber-500 transition-all duration-300" data-filter="all">All</button>
            <button className="project-filter-btn px-5 py-2 rounded-full text-sm font-medium bg-white text-slate-700 border border-slate-200 hover:border-amber-300 transition-all duration-300" data-filter="residential">Residential</button>
            <button className="project-filter-btn px-5 py-2 rounded-full text-sm font-medium bg-white text-slate-700 border border-slate-200 hover:border-amber-300 transition-all duration-300" data-filter="commercial">Commercial</button>
            <button className="project-filter-btn px-5 py-2 rounded-full text-sm font-medium bg-white text-slate-700 border border-slate-200 hover:border-amber-300 transition-all duration-300" data-filter="renovation">Renovation</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="project-card group rounded-2xl overflow-hidden bg-white shadow-lg" data-category="residential" data-aos="fade-up">
              <div className="project-img relative h-64 overflow-hidden">
                <img src="images/project-1.jpg" alt="Modern 3BHK independent house in Villupuram" className="w-full h-full object-cover transition-transform duration-500" />
                <div className="project-overlay absolute inset-0 bg-slate-900/60 opacity-0 transition-opacity duration-300 flex items-center justify-center">
                  <Link to="/projects" className="px-6 py-3 bg-amber-500 text-white rounded-full text-sm font-semibold hover:bg-amber-600 transition-colors">View Details</Link>
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full">Residential</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-poppins font-semibold text-primary mb-2">Saravana Villas - Phase 1</h3>
                <p className="text-gray-500 text-sm mb-4 flex items-center gap-2"><i className="fas fa-map-marker-alt text-amber-500" /> Villupuram Town</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span><i className="fas fa-clock mr-1" /> 8 Months</span>
                  <span className="text-amber-500 font-semibold">45L - 65L</span>
                </div>
              </div>
            </div>

            <div className="project-card group rounded-2xl overflow-hidden bg-white shadow-lg" data-category="commercial" data-aos="fade-up" data-aos-delay="100">
              <div className="project-img relative h-64 overflow-hidden">
                <img src="images/project-2.jpg" alt="Commercial complex near Villupuram bus stand" className="w-full h-full object-cover transition-transform duration-500" />
                <div className="project-overlay absolute inset-0 bg-slate-900/60 opacity-0 transition-opacity duration-300 flex items-center justify-center">
                  <Link to="/projects" className="px-6 py-3 bg-amber-500 text-white rounded-full text-sm font-semibold hover:bg-amber-600 transition-colors">View Details</Link>
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">Commercial</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-poppins font-semibold text-primary mb-2">Kumar Shopping Complex</h3>
                <p className="text-gray-500 text-sm mb-4 flex items-center gap-2"><i className="fas fa-map-marker-alt text-amber-500" /> Villupuram Bus Stand Road</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span><i className="fas fa-clock mr-1" /> 10 Months</span>
                  <span className="text-amber-500 font-semibold">85L - 1.2Cr</span>
                </div>
              </div>
            </div>

            <div className="project-card group rounded-2xl overflow-hidden bg-white shadow-lg" data-category="residential" data-aos="fade-up" data-aos-delay="200">
              <div className="project-img relative h-64 overflow-hidden">
                <img src="images/project-3.jpg" alt="Traditional South Indian home in Chennai" className="w-full h-full object-cover transition-transform duration-500" />
                <div className="project-overlay absolute inset-0 bg-slate-900/60 opacity-0 transition-opacity duration-300 flex items-center justify-center">
                  <Link to="/projects" className="px-6 py-3 bg-amber-500 text-white rounded-full text-sm font-semibold hover:bg-amber-600 transition-colors">View Details</Link>
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full">Residential</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-poppins font-semibold text-primary mb-2">Murugan Heritage Home</h3>
                <p className="text-gray-500 text-sm mb-4 flex items-center gap-2"><i className="fas fa-map-marker-alt text-amber-500" /> Chromepet, Chennai</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span><i className="fas fa-clock mr-1" /> 12 Months</span>
                  <span className="text-amber-500 font-semibold">75L - 95L</span>
                </div>
              </div>
            </div>

            <div className="project-card group rounded-2xl overflow-hidden bg-white shadow-lg" data-category="renovation" data-aos="fade-up" data-aos-delay="300">
              <div className="project-img relative h-64 overflow-hidden">
                <img src="images/project-4.jpg" alt="Office renovation in Tindivanam" className="w-full h-full object-cover transition-transform duration-500" />
                <div className="project-overlay absolute inset-0 bg-slate-900/60 opacity-0 transition-opacity duration-300 flex items-center justify-center">
                  <Link to="/projects" className="px-6 py-3 bg-amber-500 text-white rounded-full text-sm font-semibold hover:bg-amber-600 transition-colors">View Details</Link>
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">Renovation</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-poppins font-semibold text-primary mb-2">Lakshmi Textiles Renovation</h3>
                <p className="text-gray-500 text-sm mb-4 flex items-center gap-2"><i className="fas fa-map-marker-alt text-amber-500" /> Tindivanam</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span><i className="fas fa-clock mr-1" /> 3 Months</span>
                  <span className="text-amber-500 font-semibold">12L - 18L</span>
                </div>
              </div>
            </div>

            <div className="project-card group rounded-2xl overflow-hidden bg-white shadow-lg" data-category="residential" data-aos="fade-up" data-aos-delay="400">
              <div className="project-img relative h-64 overflow-hidden">
                <img src="images/project-5.jpg" alt="Modern house in Pondicherry" className="w-full h-full object-cover transition-transform duration-500" />
                <div className="project-overlay absolute inset-0 bg-slate-900/60 opacity-0 transition-opacity duration-300 flex items-center justify-center">
                  <Link to="/projects" className="px-6 py-3 bg-amber-500 text-white rounded-full text-sm font-semibold hover:bg-amber-600 transition-colors">View Details</Link>
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full">Residential</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-poppins font-semibold text-primary mb-2">Anand Villa</h3>
                <p className="text-gray-500 text-sm mb-4 flex items-center gap-2"><i className="fas fa-map-marker-alt text-amber-500" /> Villianur, Pondicherry</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span><i className="fas fa-clock mr-1" /> 10 Months</span>
                  <span className="text-amber-500 font-semibold">55L - 70L</span>
                </div>
              </div>
            </div>

            <div className="project-card group rounded-2xl overflow-hidden bg-white shadow-lg" data-category="commercial" data-aos="fade-up" data-aos-delay="500">
              <div className="project-img relative h-64 overflow-hidden">
                <img src="images/project-6.jpg" alt="Restaurant interior design in Chennai" className="w-full h-full object-cover transition-transform duration-500" />
                <div className="project-overlay absolute inset-0 bg-slate-900/60 opacity-0 transition-opacity duration-300 flex items-center justify-center">
                  <Link to="/projects" className="px-6 py-3 bg-amber-500 text-white rounded-full text-sm font-semibold hover:bg-amber-600 transition-colors">View Details</Link>
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">Commercial</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-poppins font-semibold text-primary mb-2">Sree Krishna Restaurant</h3>
                <p className="text-gray-500 text-sm mb-4 flex items-center gap-2"><i className="fas fa-map-marker-alt text-amber-500" /> Velachery, Chennai</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span><i className="fas fa-clock mr-1" /> 5 Months</span>
                  <span className="text-amber-500 font-semibold">35L - 50L</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <Link to="/projects" className="btn-ripple inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-slate-800 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              View All Projects <i className="fas fa-arrow-right text-sm" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 cta-section relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80" alt="" className="w-full h-full object-cover opacity-20" aria-hidden="true" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="zoom-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-white mb-6">Your Dream Home Starts Here</h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">Get a free site visit and detailed estimate for your dream home in Villupuram, Chennai, or anywhere in Tamil Nadu. Let's turn your vision into reality.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-ripple inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/30 transform hover:-translate-y-1">
                <i className="fas fa-home text-sm" />
                Plan Your Home
              </Link>
              <a href="tel:+919629528219" className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 transition-all duration-300">
                <i className="fas fa-phone-alt text-sm" />
                +91 96295 28219
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-sm font-semibold mb-4">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-primary mb-4">What Our Clients Say</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Hear from families and businesses who trusted us with their construction projects.</p>
          </div>

          <div className="swiper testimonial-swiper pb-16">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="flex gap-1 mb-4"><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /></div>
                  <p className="text-gray-600 mb-6 leading-relaxed">&quot;SJB C&C built our 2BHK home in Villupuram within 8 months. The quality is excellent and they completed it within our budget of 45 lakhs. Very professional team!&quot;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center"><span className="text-amber-600 font-bold">KR</span></div>
                    <div><h4 className="font-semibold text-primary">K. Ravi</h4><p className="text-gray-400 text-sm">Villupuram Town</p></div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="flex gap-1 mb-4"><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /></div>
                  <p className="text-gray-600 mb-6 leading-relaxed">&quot;We got our restaurant interior designed by SJB C&C in Velachery. The design is beautiful and our customers love the ambiance. Highly recommend them for commercial projects.&quot;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center"><span className="text-blue-600 font-bold">PS</span></div>
                    <div><h4 className="font-semibold text-primary">Priya Shankar</h4><p className="text-gray-400 text-sm">Velachery, Chennai</p></div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="flex gap-1 mb-4"><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /></div>
                  <p className="text-gray-600 mb-6 leading-relaxed">&quot;SJB C&C renovated our 30-year-old ancestral home in Tindivanam. They modernized everything while keeping the traditional Tamil architecture feel. Excellent work!&quot;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center"><span className="text-green-600 font-bold">MV</span></div>
                    <div><h4 className="font-semibold text-primary">M. Venkatesh</h4><p className="text-gray-400 text-sm">Tindivanam</p></div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="flex gap-1 mb-4"><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star text-amber-400" /><i className="fas fa-star-half-alt text-amber-400" /></div>
                  <p className="text-gray-600 mb-6 leading-relaxed">&quot;From the first meeting to the final handover, SJB C&C was transparent and professional. Our shopping complex near Villupuram bus stand was delivered on time. Great team!&quot;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center"><span className="text-purple-600 font-bold">SK</span></div>
                    <div><h4 className="font-semibold text-primary">Suresh Kumar</h4><p className="text-gray-400 text-sm">Villupuram</p></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-pagination mt-8" />
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10" data-aos="fade-up">
            <h3 className="text-xl font-poppins font-semibold text-primary">Areas We Serve</h3>
            <p className="text-gray-500 text-sm mt-2">Proudly building across Tamil Nadu and Pondicherry</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3" data-aos="fade-up">
            <span className="px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium hover:border-amber-300 hover:text-amber-600 transition-colors"><i className="fas fa-map-pin text-amber-500 mr-1" /> Villupuram</span>
            <span className="px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium hover:border-amber-300 hover:text-amber-600 transition-colors"><i className="fas fa-map-pin text-amber-500 mr-1" /> Chennai</span>
            <span className="px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium hover:border-amber-300 hover:text-amber-600 transition-colors"><i className="fas fa-map-pin text-amber-500 mr-1" /> Tindivanam</span>
            <span className="px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium hover:border-amber-300 hover:text-amber-600 transition-colors"><i className="fas fa-map-pin text-amber-500 mr-1" /> Cuddalore</span>
            <span className="px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium hover:border-amber-300 hover:text-amber-600 transition-colors"><i className="fas fa-map-pin text-amber-500 mr-1" /> Pondicherry</span>
            <span className="px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium hover:border-amber-300 hover:text-amber-600 transition-colors"><i className="fas fa-map-pin text-amber-500 mr-1" /> Ulundurpet</span>
            <span className="px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium hover:border-amber-300 hover:text-amber-600 transition-colors"><i className="fas fa-map-pin text-amber-500 mr-1" /> Gingee</span>
            <span className="px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium hover:border-amber-300 hover:text-amber-600 transition-colors"><i className="fas fa-map-pin text-amber-500 mr-1" /> Vanur</span>
          </div>
        </div>
      </section>
    </>
  )
}
