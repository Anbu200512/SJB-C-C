import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-amber-500/5 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 pt-16 sm:pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          <div className="space-y-5 sm:space-y-6 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/30 transition-shadow">
                <i className="fas fa-hard-hat text-white text-lg sm:text-xl" />
              </div>
              <div>
                <span className="text-lg sm:text-xl font-bold text-white font-poppins">SJB</span>
                <span className="text-lg sm:text-xl font-bold text-amber-500 font-poppins"> C&C</span>
                <p className="text-[8px] text-gray-500 tracking-[0.15em] uppercase font-medium -mt-0.5">Construction &amp; Contracting</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">Tamil Nadu's trusted construction startup delivering residential, commercial, and renovation projects with quality, safety, and modern innovation since 2026.</p>
            <div className="flex gap-2.5">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5 group" aria-label="Facebook"><i className="fab fa-facebook-f text-sm text-gray-400 group-hover:text-white transition-colors" /></a>
              <a href="https://www.instagram.com/sjbcc_tn32?utm_source=qr&igsh=aWs4MHBrMHpuMGRi" target="_blank" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5 group" aria-label="Instagram"><i className="fab fa-instagram text-sm text-gray-400 group-hover:text-white transition-colors" /></a>
              <a href="https://www.youtube.com/@SJBConstructionandcontracts" target="_blank" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-red-600 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5 group" aria-label="YouTube"><i className="fab fa-youtube text-sm text-gray-400 group-hover:text-white transition-colors" /></a>
              <a href="https://wa.me/919629528219" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-green-600 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5 group" aria-label="WhatsApp"><i className="fab fa-whatsapp text-sm text-gray-400 group-hover:text-white transition-colors" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 relative pb-3">Quick Links<span className="absolute bottom-0 left-0 w-8 h-0.5 bg-amber-500" /></h4>
            <ul className="space-y-2.5 sm:space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm flex items-center gap-2 py-1 group"><i className="fas fa-chevron-right text-xs text-amber-500/50 group-hover:translate-x-1 transition-transform" /> About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm flex items-center gap-2 py-1 group"><i className="fas fa-chevron-right text-xs text-amber-500/50 group-hover:translate-x-1 transition-transform" /> Services</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm flex items-center gap-2 py-1 group"><i className="fas fa-chevron-right text-xs text-amber-500/50 group-hover:translate-x-1 transition-transform" /> Projects</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm flex items-center gap-2 py-1 group"><i className="fas fa-chevron-right text-xs text-amber-500/50 group-hover:translate-x-1 transition-transform" /> Gallery</Link></li>
              <li><Link to="/testimonials" className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm flex items-center gap-2 py-1 group"><i className="fas fa-chevron-right text-xs text-amber-500/50 group-hover:translate-x-1 transition-transform" /> Testimonials</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm flex items-center gap-2 py-1 group"><i className="fas fa-chevron-right text-xs text-amber-500/50 group-hover:translate-x-1 transition-transform" /> FAQ</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm flex items-center gap-2 py-1 group"><i className="fas fa-chevron-right text-xs text-amber-500/50 group-hover:translate-x-1 transition-transform" /> Careers</Link></li>
              <li><Link to="/service-areas/villupuram" className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm flex items-center gap-2 py-1 group"><i className="fas fa-chevron-right text-xs text-amber-500/50 group-hover:translate-x-1 transition-transform" /> Villupuram</Link></li>
              <li><Link to="/service-areas/chennai" className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm flex items-center gap-2 py-1 group"><i className="fas fa-chevron-right text-xs text-amber-500/50 group-hover:translate-x-1 transition-transform" /> Chennai</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 relative pb-3">Our Services<span className="absolute bottom-0 left-0 w-8 h-0.5 bg-amber-500" /></h4>
            <ul className="space-y-2.5 sm:space-y-3">
              <li><Link to="/services" className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm flex items-center gap-2 py-1 group"><i className="fas fa-chevron-right text-xs text-amber-500/50 group-hover:translate-x-1 transition-transform" /> Home Construction</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm flex items-center gap-2 py-1 group"><i className="fas fa-chevron-right text-xs text-amber-500/50 group-hover:translate-x-1 transition-transform" /> Commercial Projects</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm flex items-center gap-2 py-1 group"><i className="fas fa-chevron-right text-xs text-amber-500/50 group-hover:translate-x-1 transition-transform" /> Interior Design</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm flex items-center gap-2 py-1 group"><i className="fas fa-chevron-right text-xs text-amber-500/50 group-hover:translate-x-1 transition-transform" /> Renovation</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm flex items-center gap-2 py-1 group"><i className="fas fa-chevron-right text-xs text-amber-500/50 group-hover:translate-x-1 transition-transform" /> Architecture</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm flex items-center gap-2 py-1 group"><i className="fas fa-chevron-right text-xs text-amber-500/50 group-hover:translate-x-1 transition-transform" /> Project Management</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 relative pb-3">Contact Us<span className="absolute bottom-0 left-0 w-8 h-0.5 bg-amber-500" /></h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex gap-3 items-start">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5"><i className="fas fa-map-marker-alt text-amber-500 text-xs sm:text-sm" /></div>
                <div>
                  <p className="text-gray-400 text-sm">No. 24, Karumara Street, Sithathur, Kandachipuram Tk</p>
                  <p className="text-gray-400 text-sm">Villupuram, Tamil Nadu 605602</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5"><i className="fas fa-map-marker-alt text-amber-500 text-xs sm:text-sm" /></div>
                <div>
                  <p className="text-gray-400 text-sm">No. 10, Kennedy Street, MG Nagar, Tharamani</p>
                  <p className="text-gray-400 text-sm">Chennai, Tamil Nadu</p>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0"><i className="fas fa-phone-alt text-amber-500 text-xs sm:text-sm" /></div>
                <div>
                  <a href="tel:+919629528219" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">+91 96295 28219</a>
                  <p className="text-gray-500 text-xs">Mon - Sat: 9AM - 6PM</p>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0"><i className="fas fa-envelope text-amber-500 text-xs sm:text-sm" /></div>
                <div>
                  <a href="mailto:sjbconstructionandcontracts@gmail.com" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">sjbconstructionandcontracts@gmail.com</a>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0"><i className="fas fa-clock text-amber-500 text-xs sm:text-sm" /></div>
                <div>
                  <p className="text-gray-400 text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-500 text-sm">Sunday: Emergency Only</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
            <p className="text-gray-500 text-xs sm:text-sm">&copy; 2026 SJB C&C. All Rights Reserved. | Made with <i className="fas fa-heart text-red-500" /> in Tamil Nadu</p>
            <div className="flex gap-4 sm:gap-6">
              <Link to="/privacy" className="text-gray-500 hover:text-amber-500 text-xs sm:text-sm transition-colors">Privacy</Link>
              <Link to="/terms" className="text-gray-500 hover:text-amber-500 text-xs sm:text-sm transition-colors">Terms</Link>
              <a href="https://g.page/sjbcc/review" target="_blank" className="text-gray-500 hover:text-amber-500 text-xs sm:text-sm transition-colors">Google Review</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
