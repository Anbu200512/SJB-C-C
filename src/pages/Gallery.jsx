import { Link } from 'react-router-dom'

export default function Gallery() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1512914689875-a021d0a6d9b7?w=1920&q=80" alt="SJB C&C construction projects across Tamil Nadu" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up">
            <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase">Gallery</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white mt-4 mb-6">Visual<br /><span className="text-amber-500">Showcase</span></h1>
            <p className="text-gray-400 text-lg max-w-xl">Explore our construction projects across Tamil Nadu through photos, drone footage, and progress documentation.</p>
          </div>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-16" data-aos="fade-up">
            <button className="gallery-filter-btn px-6 py-2.5 rounded-full text-sm font-medium bg-amber-500 text-white border border-amber-500 transition-all duration-300" data-filter="all">All</button>
            <button className="gallery-filter-btn px-6 py-2.5 rounded-full text-sm font-medium bg-white text-slate-700 border border-slate-200 hover:border-amber-300 transition-all duration-300" data-filter="residential">Residential</button>
            <button className="gallery-filter-btn px-6 py-2.5 rounded-full text-sm font-medium bg-white text-slate-700 border border-slate-200 hover:border-amber-300 transition-all duration-300" data-filter="commercial">Commercial</button>
            <button className="gallery-filter-btn px-6 py-2.5 rounded-full text-sm font-medium bg-white text-slate-700 border border-slate-200 hover:border-amber-300 transition-all duration-300" data-filter="drone">Drone</button>
            <button className="gallery-filter-btn px-6 py-2.5 rounded-full text-sm font-medium bg-white text-slate-700 border border-slate-200 hover:border-amber-300 transition-all duration-300" data-filter="progress">Progress</button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="gallery-item rounded-2xl overflow-hidden shadow-lg cursor-pointer" data-category="residential" data-aos="fade-up">
              <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&q=80" alt="Saravana Villas exterior in Villupuram, Tamil Nadu" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="gallery-item rounded-2xl overflow-hidden shadow-lg cursor-pointer md:row-span-2" data-category="commercial" data-aos="fade-up" data-aos-delay="50">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&q=80" alt="Kumar Complex glass facade in Velachery, Chennai" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 min-h-[300px]" />
            </div>
            <div className="gallery-item rounded-2xl overflow-hidden shadow-lg cursor-pointer" data-category="drone" data-aos="fade-up" data-aos-delay="100">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=80" alt="Aerial drone view of construction site in Villupuram, Tamil Nadu" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="gallery-item rounded-2xl overflow-hidden shadow-lg cursor-pointer" data-category="progress" data-aos="fade-up" data-aos-delay="150">
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&q=80" alt="Construction progress at Balaji Nagar Apartments, Villupuram" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="gallery-item rounded-2xl overflow-hidden shadow-lg cursor-pointer" data-category="residential" data-aos="fade-up" data-aos-delay="200">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&q=80" alt="Murugan Heritage Home courtyard in Pondicherry" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="gallery-item rounded-2xl overflow-hidden shadow-lg cursor-pointer" data-category="commercial" data-aos="fade-up" data-aos-delay="250">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80" alt="Lakshmi Textiles Showroom interior in Tindivanam, Tamil Nadu" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="gallery-item rounded-2xl overflow-hidden shadow-lg cursor-pointer" data-category="drone" data-aos="fade-up" data-aos-delay="300">
              <img src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=500&q=80" alt="Drone view of Rajaji Nagar Layout in Villupuram, Tamil Nadu" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="gallery-item rounded-2xl overflow-hidden shadow-lg cursor-pointer" data-category="progress" data-aos="fade-up" data-aos-delay="350">
              <img src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=500&q=80" alt="Structural work in progress at Meenakshi Amman Residency, Chromepet" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="gallery-item rounded-2xl overflow-hidden shadow-lg cursor-pointer" data-category="residential" data-aos="fade-up" data-aos-delay="400">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=80" alt="Anand Villa bungalow in Chromepet, Chennai" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="gallery-item rounded-2xl overflow-hidden shadow-lg cursor-pointer" data-category="commercial" data-aos="fade-up" data-aos-delay="450">
              <img src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=500&q=80" alt="Chettinad Grand Hotel renovation at night in Cuddalore, Tamil Nadu" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="gallery-item rounded-2xl overflow-hidden shadow-lg cursor-pointer" data-category="drone" data-aos="fade-up" data-aos-delay="500">
              <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&q=80" alt="Aerial view of completed project in Tindivanam, Tamil Nadu" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="gallery-item rounded-2xl overflow-hidden shadow-lg cursor-pointer" data-category="progress" data-aos="fade-up" data-aos-delay="550">
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=80" alt="SJB C&C team reviewing construction plans in Villupuram, Tamil Nadu" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <div id="lightbox" className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300">
        <button id="lightbox-close" className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors" aria-label="Close lightbox"><i className="fas fa-times text-xl" /></button>
        <button id="lightbox-prev" className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors" aria-label="Previous image"><i className="fas fa-chevron-left" /></button>
        <button id="lightbox-next" className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors" aria-label="Next image"><i className="fas fa-chevron-right" /></button>
        <img id="lightbox-img" src="" alt="" className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg" />
      </div>
    </>
  )
}
