import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import g1 from '../assets/images/g1.jpg'
import g2 from '../assets/images/g2.jpg'
import g3 from '../assets/images/g3.jpg'
import g4 from '../assets/images/g4.jpg'
import g5 from '../assets/images/g5.jpg'
import g6 from '../assets/images/g6.jpg'
import g7 from '../assets/images/g7.jpg'
import g8 from '../assets/images/g8.jpg'
import g9 from '../assets/images/g9.jpg'
import g10 from '../assets/images/g10.jpg'
import g11 from '../assets/images/g11.jpg'
import g12 from '../assets/images/g12.jpg'
import g13 from '../assets/images/g13.jpg'
import g14 from '../assets/images/g14.jpg'
import g15 from '../assets/images/g15.jpg'
import g16 from '../assets/images/g16.jpg'
import g17 from '../assets/images/g17.jpg'
import g18 from '../assets/images/g18.jpg'

const images = [
  { src: g5, alt: 'Saravana Villas exterior in Villupuram, Tamil Nadu', category: 'residential' },
  { src: g12, alt: 'Kumar Complex modern office facade in Velachery, Chennai', category: 'commercial', span: true },
  { src: g1, alt: 'Aerial drone view of construction site in Villupuram, Tamil Nadu', category: 'drone' },
  { src: g8, alt: 'Construction progress at Balaji Nagar Apartments, Villupuram', category: 'progress' },
  { src: g15, alt: 'Rajaji Nagar modern white residential building in Tamil Nadu', category: 'residential' },
  { src: g3, alt: 'Lakshmi Textiles contemporary showroom in Tindivanam, Tamil Nadu', category: 'commercial' },
  { src: g10, alt: 'Drone view of construction site development in Tamil Nadu', category: 'drone' },
  { src: g17, alt: 'Bricklayers working on construction site in Villupuram', category: 'progress' },
  { src: g2, alt: 'Anand Villa modern bungalow with stone columns in Chromepet, Chennai', category: 'residential' },
  { src: g7, alt: 'Chettinad Grand Hotel modern architecture in Cuddalore, Tamil Nadu', category: 'commercial' },
  { src: g14, alt: 'Aerial view of construction project at sunset in Tindivanam, Tamil Nadu', category: 'drone' },
  { src: g18, alt: 'RCC concrete post construction by SJB C&C team in Villupuram, Tamil Nadu', category: 'progress' },
  { src: g4, alt: 'Residential construction project in Tamil Nadu', category: 'residential' },
  { src: g9, alt: 'Commercial building project in Tamil Nadu', category: 'commercial' },
  { src: g13, alt: 'Drone aerial view of construction in Tamil Nadu', category: 'drone' },
  { src: g6, alt: 'Construction progress at SJB C&C project site', category: 'progress' },
  { src: g11, alt: 'Residential villa construction in Tamil Nadu', category: 'residential' },
  { src: g16, alt: 'Commercial interior construction in Tamil Nadu', category: 'commercial' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState({ open: false, index: 0 })

  function openLightbox(index) {
    setLightbox({ open: true, index })
  }

  function closeLightbox() {
    setLightbox({ open: false, index: 0 })
  }

  function prevImage() {
    setLightbox(prev => ({ ...prev, index: (prev.index - 1 + images.length) % images.length }))
  }

  function nextImage() {
    setLightbox(prev => ({ ...prev, index: (prev.index + 1) % images.length }))
  }

  return (
    <>
      <SEO title="Photo Gallery | Construction Projects Tamil Nadu" description="Visual showcase of SJB C&C budget-friendly construction projects across Tamil Nadu — residential, commercial, drone footage, and progress photos." />
      {/* Hero */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1464146072230-91cabc968266?w=1920&q=80" alt="SJB C&C construction projects across Tamil Nadu" className="w-full h-full object-cover opacity-30" />
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

      {/* Gallery Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-primary mb-4">Our Project Gallery</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Visual journey through our construction projects across Tamil Nadu.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, i) => (
              <div
                key={i}
                className={`gallery-item rounded-2xl overflow-hidden shadow-lg cursor-pointer ${img.span ? 'md:row-span-2' : ''}`}
                data-category={img.category}
                data-aos="fade-up"
                data-aos-delay={i * 50}
                onClick={() => openLightbox(i)}
              >
                <img src={img.src} alt={img.alt} className={`w-full ${img.span ? 'h-full min-h-[300px]' : 'h-64'} object-cover hover:scale-110 transition-transform duration-500`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox.open && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center" onClick={closeLightbox}>
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox() }}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Close lightbox"
          ><i className="fas fa-times text-xl" /></button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Previous image"
          ><i className="fas fa-chevron-left text-xl" /></button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Next image"
          ><i className="fas fa-chevron-right text-xl" /></button>
          <img
            src={images[lightbox.index].src}
            alt={images[lightbox.index].alt}
            loading="lazy" className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
