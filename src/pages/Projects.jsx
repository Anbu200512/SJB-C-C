import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80" alt="Construction projects in Tamil Nadu" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up">
            <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase">Portfolio</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white mt-4 mb-6">Our Completed<br /><span className="text-amber-500">Projects</span></h1>
            <p className="text-gray-400 text-lg max-w-xl">Explore our projects delivered with excellence across Tamil Nadu and Pondicherry.</p>
          </div>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16" data-aos="fade-up">
            <button className="project-filter-btn px-6 py-2.5 rounded-full text-sm font-medium bg-amber-500 text-white border border-amber-500 transition-all duration-300" data-filter="all">All Projects</button>
            <button className="project-filter-btn px-6 py-2.5 rounded-full text-sm font-medium bg-white text-slate-700 border border-slate-200 hover:border-amber-300 transition-all duration-300" data-filter="residential">Residential</button>
            <button className="project-filter-btn px-6 py-2.5 rounded-full text-sm font-medium bg-white text-slate-700 border border-slate-200 hover:border-amber-300 transition-all duration-300" data-filter="commercial">Commercial</button>
            <button className="project-filter-btn px-6 py-2.5 rounded-full text-sm font-medium bg-white text-slate-700 border border-slate-200 hover:border-amber-300 transition-all duration-300" data-filter="renovation">Renovation</button>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* 1. Saravana Villas */}
            <div className="project-card group rounded-2xl overflow-hidden bg-white shadow-lg" data-category="residential" data-aos="fade-up">
              <div className="project-img relative h-72 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80" alt="Saravana Villas" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="project-overlay absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-amber-400 text-sm font-semibold">Residential</span>
                  <h3 className="text-white text-xl font-poppins font-bold mt-1">Saravana Villas</h3>
                  <p className="text-gray-300 text-sm mt-1"><i className="fas fa-map-marker-alt mr-1" /> Villupuram, Tamil Nadu</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span><i className="fas fa-clock mr-1" /> 14 Months</span>
                  <span><i className="fas fa-ruler-combined mr-1" /> 45,000 sq ft</span>
                  <span className="text-amber-500 font-semibold">₹1.2 Cr</span>
                </div>
                <div className="flex gap-3">
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">12 Units</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">4 Story</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">Smart Home</span>
                </div>
              </div>
            </div>

            {/* 2. Kumar Complex */}
            <div className="project-card group rounded-2xl overflow-hidden bg-white shadow-lg" data-category="commercial" data-aos="fade-up" data-aos-delay="100">
              <div className="project-img relative h-72 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80" alt="Kumar Complex" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="project-overlay absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-blue-400 text-sm font-semibold">Commercial</span>
                  <h3 className="text-white text-xl font-poppins font-bold mt-1">Kumar Complex</h3>
                  <p className="text-gray-300 text-sm mt-1"><i className="fas fa-map-marker-alt mr-1" /> Velachery, Chennai</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span><i className="fas fa-clock mr-1" /> 24 Months</span>
                  <span><i className="fas fa-ruler-combined mr-1" /> 1,20,000 sq ft</span>
                  <span className="text-amber-500 font-semibold">₹4.5 Cr</span>
                </div>
                <div className="flex gap-3">
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">12 Story</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">IGBC Certified</span>
                </div>
              </div>
            </div>

            {/* 3. Murugan Heritage Home */}
            <div className="project-card group rounded-2xl overflow-hidden bg-white shadow-lg" data-category="residential" data-aos="fade-up" data-aos-delay="200">
              <div className="project-img relative h-72 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80" alt="Murugan Heritage Home" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="project-overlay absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-amber-400 text-sm font-semibold">Residential</span>
                  <h3 className="text-white text-xl font-poppins font-bold mt-1">Murugan Heritage Home</h3>
                  <p className="text-gray-300 text-sm mt-1"><i className="fas fa-map-marker-alt mr-1" /> Pondicherry</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span><i className="fas fa-clock mr-1" /> 12 Months</span>
                  <span><i className="fas fa-ruler-combined mr-1" /> 8,500 sq ft</span>
                  <span className="text-amber-500 font-semibold">₹85 L</span>
                </div>
                <div className="flex gap-3">
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">Heritage Style</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">Courtyard</span>
                </div>
              </div>
            </div>

            {/* 4. Lakshmi Textiles */}
            <div className="project-card group rounded-2xl overflow-hidden bg-white shadow-lg" data-category="commercial" data-aos="fade-up" data-aos-delay="300">
              <div className="project-img relative h-72 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=600&q=80" alt="Lakshmi Textiles Showroom" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="project-overlay absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-blue-400 text-sm font-semibold">Commercial</span>
                  <h3 className="text-white text-xl font-poppins font-bold mt-1">Lakshmi Textiles Showroom</h3>
                  <p className="text-gray-300 text-sm mt-1"><i className="fas fa-map-marker-alt mr-1" /> Tindivanam, Tamil Nadu</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span><i className="fas fa-clock mr-1" /> 8 Months</span>
                  <span><i className="fas fa-ruler-combined mr-1" /> 12,000 sq ft</span>
                  <span className="text-amber-500 font-semibold">₹45 L</span>
                </div>
                <div className="flex gap-3">
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">3 Story</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">Showroom</span>
                </div>
              </div>
            </div>

            {/* 5. Anand Villa */}
            <div className="project-card group rounded-2xl overflow-hidden bg-white shadow-lg" data-category="residential" data-aos="fade-up" data-aos-delay="400">
              <div className="project-img relative h-72 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" alt="Anand Villa" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="project-overlay absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-amber-400 text-sm font-semibold">Residential</span>
                  <h3 className="text-white text-xl font-poppins font-bold mt-1">Anand Villa</h3>
                  <p className="text-gray-300 text-sm mt-1"><i className="fas fa-map-marker-alt mr-1" /> Chromepet, Chennai</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span><i className="fas fa-clock mr-1" /> 10 Months</span>
                  <span><i className="fas fa-ruler-combined mr-1" /> 3,200 sq ft</span>
                  <span className="text-amber-500 font-semibold">₹52 L</span>
                </div>
                <div className="flex gap-3">
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">Bungalow</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">Pool</span>
                </div>
              </div>
            </div>

            {/* 6. Sree Krishna Restaurant */}
            <div className="project-card group rounded-2xl overflow-hidden bg-white shadow-lg" data-category="commercial" data-aos="fade-up" data-aos-delay="500">
              <div className="project-img relative h-72 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80" alt="Sree Krishna Restaurant" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="project-overlay absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-blue-400 text-sm font-semibold">Commercial</span>
                  <h3 className="text-white text-xl font-poppins font-bold mt-1">Sree Krishna Restaurant</h3>
                  <p className="text-gray-300 text-sm mt-1"><i className="fas fa-map-marker-alt mr-1" /> Cuddalore, Tamil Nadu</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span><i className="fas fa-clock mr-1" /> 6 Months</span>
                  <span><i className="fas fa-ruler-combined mr-1" /> 4,800 sq ft</span>
                  <span className="text-amber-500 font-semibold">₹28 L</span>
                </div>
                <div className="flex gap-3">
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">Restaurant</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">AC Dining</span>
                </div>
              </div>
            </div>

            {/* 7. Rajaji Nagar Residential Layout */}
            <div className="project-card group rounded-2xl overflow-hidden bg-white shadow-lg" data-category="residential" data-aos="fade-up" data-aos-delay="600">
              <div className="project-img relative h-72 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80" alt="Rajaji Nagar Residential Layout" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="project-overlay absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-amber-400 text-sm font-semibold">Residential</span>
                  <h3 className="text-white text-xl font-poppins font-bold mt-1">Rajaji Nagar Layout</h3>
                  <p className="text-gray-300 text-sm mt-1"><i className="fas fa-map-marker-alt mr-1" /> Villupuram, Tamil Nadu</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span><i className="fas fa-clock mr-1" /> 18 Months</span>
                  <span><i className="fas fa-ruler-combined mr-1" /> 25,000 sq ft</span>
                  <span className="text-amber-500 font-semibold">₹78 L</span>
                </div>
                <div className="flex gap-3">
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">8 Villas</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">Gated</span>
                </div>
              </div>
            </div>

            {/* 8. Aruna Medicals & Pharmacy */}
            <div className="project-card group rounded-2xl overflow-hidden bg-white shadow-lg" data-category="commercial" data-aos="fade-up" data-aos-delay="700">
              <div className="project-img relative h-72 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80" alt="Aruna Medicals & Pharmacy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="project-overlay absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-blue-400 text-sm font-semibold">Commercial</span>
                  <h3 className="text-white text-xl font-poppins font-bold mt-1">Aruna Medicals &amp; Pharmacy</h3>
                  <p className="text-gray-300 text-sm mt-1"><i className="fas fa-map-marker-alt mr-1" /> Tindivanam, Tamil Nadu</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span><i className="fas fa-clock mr-1" /> 5 Months</span>
                  <span><i className="fas fa-ruler-combined mr-1" /> 2,200 sq ft</span>
                  <span className="text-amber-500 font-semibold">₹18 L</span>
                </div>
                <div className="flex gap-3">
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">Pharmacy</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">Mezzanine</span>
                </div>
              </div>
            </div>

            {/* 9. Velammal Heritage Home Renovation */}
            <div className="project-card group rounded-2xl overflow-hidden bg-white shadow-lg" data-category="renovation" data-aos="fade-up" data-aos-delay="800">
              <div className="project-img relative h-72 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" alt="Velammal Heritage Home Renovation" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="project-overlay absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-green-400 text-sm font-semibold">Renovation</span>
                  <h3 className="text-white text-xl font-poppins font-bold mt-1">Velammal Heritage Home</h3>
                  <p className="text-gray-300 text-sm mt-1"><i className="fas fa-map-marker-alt mr-1" /> Pondicherry</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span><i className="fas fa-clock mr-1" /> 8 Months</span>
                  <span><i className="fas fa-ruler-combined mr-1" /> 5,600 sq ft</span>
                  <span className="text-amber-500 font-semibold">₹35 L</span>
                </div>
                <div className="flex gap-3">
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">Heritage</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">Full Remodel</span>
                </div>
              </div>
            </div>

            {/* 10. Balaji Nagar Apartments */}
            <div className="project-card group rounded-2xl overflow-hidden bg-white shadow-lg" data-category="residential" data-aos="fade-up" data-aos-delay="200">
              <div className="project-img relative h-72 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80" alt="Balaji Nagar Apartments" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="project-overlay absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-amber-400 text-sm font-semibold">Residential</span>
                  <h3 className="text-white text-xl font-poppins font-bold mt-1">Balaji Nagar Apartments</h3>
                  <p className="text-gray-300 text-sm mt-1"><i className="fas fa-map-marker-alt mr-1" /> Villupuram, Tamil Nadu</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span><i className="fas fa-clock mr-1" /> 16 Months</span>
                  <span><i className="fas fa-ruler-combined mr-1" /> 68,000 sq ft</span>
                  <span className="text-amber-500 font-semibold">₹2.8 Cr</span>
                </div>
                <div className="flex gap-3">
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">32 Units</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">10 Story</span>
                </div>
              </div>
            </div>

            {/* 11. Chettinad Grand Hotel Renovation */}
            <div className="project-card group rounded-2xl overflow-hidden bg-white shadow-lg" data-category="renovation" data-aos="fade-up" data-aos-delay="300">
              <div className="project-img relative h-72 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80" alt="Chettinad Grand Hotel Renovation" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="project-overlay absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-green-400 text-sm font-semibold">Renovation</span>
                  <h3 className="text-white text-xl font-poppins font-bold mt-1">Chettinad Grand Hotel</h3>
                  <p className="text-gray-300 text-sm mt-1"><i className="fas fa-map-marker-alt mr-1" /> Cuddalore, Tamil Nadu</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span><i className="fas fa-clock mr-1" /> 10 Months</span>
                  <span><i className="fas fa-ruler-combined mr-1" /> 18,000 sq ft</span>
                  <span className="text-amber-500 font-semibold">₹65 L</span>
                </div>
                <div className="flex gap-3">
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">Hotel</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">Interior Redesign</span>
                </div>
              </div>
            </div>

            {/* 12. Meenakshi Amman Residency */}
            <div className="project-card group rounded-2xl overflow-hidden bg-white shadow-lg" data-category="residential" data-aos="fade-up" data-aos-delay="400">
              <div className="project-img relative h-72 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80" alt="Meenakshi Amman Residency" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="project-overlay absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-amber-400 text-sm font-semibold">Residential</span>
                  <h3 className="text-white text-xl font-poppins font-bold mt-1">Meenakshi Amman Residency</h3>
                  <p className="text-gray-300 text-sm mt-1"><i className="fas fa-map-marker-alt mr-1" /> Chromepet, Chennai</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span><i className="fas fa-clock mr-1" /> 20 Months</span>
                  <span><i className="fas fa-ruler-combined mr-1" /> 82,000 sq ft</span>
                  <span className="text-amber-500 font-semibold">₹5.5 Cr</span>
                </div>
                <div className="flex gap-3">
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">40 Units</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">14 Story</span>
                </div>
              </div>
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-white mb-6">Let's Build Something Great Together</h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">Every project in our portfolio started with a conversation. Share your ideas with us and let's create a landmark that Tamil Nadu will remember.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-ripple inline-flex items-center gap-3 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 transform hover:-translate-y-1">
              <i className="fas fa-rocket text-sm" /> Start Your Project
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
