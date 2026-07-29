import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function Contact() {
  return (
    <>
      <SEO title="Contact Us | Free Construction Quote Tamil Nadu" description="Contact SJB C&C for a free budget-friendly construction quote in Villupuram, Chennai, and across Tamil Nadu. Call +91 96295 28219 or visit our office." />
      {/* Hero */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80" alt="Contact SJB C&C" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up">
            <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase">Contact Us</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white mt-4 mb-6">Let's Build<br /><span className="text-amber-500">Together</span></h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-xl">Ready to start your project in Tamil Nadu? Get in touch for a free consultation and quote.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8" data-aos="fade-right">
              <div>
                <h2 className="text-xl sm:text-2xl font-poppins font-bold text-primary mb-4 sm:mb-6">Get In Touch</h2>
                <p className="text-gray-500 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">Have a question or ready to start your project? Reach out to us through any of the following channels. Our team responds within 24 hours.</p>
              </div>

              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0"><i className="fas fa-map-marker-alt text-amber-500 text-sm" /></div>
                  <div>
                    <h4 className="font-poppins font-semibold text-primary text-sm">Office Addresses</h4>
                    <p className="text-gray-500 text-sm mt-1">No. 24, Karumara Street, Sithathur, Kandachipuram Tk<br />Villupuram, Tamil Nadu 605602</p>
                    <p className="text-gray-500 text-sm mt-2">No. 10, Kennedy Street, MG Nagar, Tharamani<br />Chennai, Tamil Nadu</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0"><i className="fas fa-phone-alt text-amber-500 text-sm" /></div>
                  <div>
                    <h4 className="font-poppins font-semibold text-primary text-sm">Phone Number</h4>
                    <a href="tel:+919629528219" className="text-gray-500 text-sm mt-1 block hover:text-amber-500 transition-colors">+91 96295 28219</a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0"><i className="fas fa-envelope text-amber-500 text-sm" /></div>
                  <div>
                    <h4 className="font-poppins font-semibold text-primary text-sm">Email Address</h4>
                    <a href="mailto:sjbconstructionandcontracts@gmail.com" className="text-gray-500 text-sm mt-1 block hover:text-amber-500 transition-colors">sjbconstructionandcontracts@gmail.com</a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0"><i className="fab fa-whatsapp text-amber-500 text-lg" /></div>
                  <div>
                    <h4 className="font-poppins font-semibold text-primary text-sm">WhatsApp</h4>
                    <a href="https://wa.me/919629528219" className="text-gray-500 text-sm mt-1 block hover:text-amber-500 transition-colors">+91 96295 28219</a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0"><i className="fas fa-clock text-amber-500 text-sm" /></div>
                  <div>
                    <h4 className="font-poppins font-semibold text-primary text-sm">Business Hours</h4>
                    <p className="text-gray-500 text-sm mt-1">Monday - Saturday: 9:00 AM - 6:00 PM<br />Sunday: Emergency Only</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-amber-500 hover:text-white flex items-center justify-center text-slate-600 transition-all duration-300" aria-label="Facebook"><i className="fab fa-facebook-f text-sm" /></a>
                <a href="https://www.instagram.com/sjbcc_tn32?utm_source=qr&igsh=aWs4MHBrMHpuMGRi" target="_blank" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-amber-500 hover:text-white flex items-center justify-center text-slate-600 transition-all duration-300" aria-label="Instagram" rel="noreferrer"><i className="fab fa-instagram text-sm" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-amber-500 hover:text-white flex items-center justify-center text-slate-600 transition-all duration-300" aria-label="LinkedIn"><i className="fab fa-linkedin-in text-sm" /></a>
                <a href="https://www.youtube.com/@SJBConstructionandcontracts" target="_blank" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-amber-500 hover:text-white flex items-center justify-center text-slate-600 transition-all duration-300" aria-label="YouTube" rel="noreferrer"><i className="fab fa-youtube text-sm" /></a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3" data-aos="fade-left">
              <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-slate-50 border border-slate-100">
                <h3 className="text-lg sm:text-xl font-poppins font-bold text-primary mb-2">Send Us a Message</h3>
                <p className="text-gray-500 text-sm mb-6 sm:mb-8">Fill out the form below and we will get back to you within 24 hours.</p>

                <form className="contact-form space-y-5 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm" placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                      <input type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                      <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm" placeholder="+91 96295 28219" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Service Interested In</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm">
                        <option value="">Select a service</option>
                        <option>Home Construction</option>
                        <option>Commercial Spaces</option>
                        <option>Interior Design</option>
                        <option>Renovation &amp; Remodeling</option>
                        <option>Architecture &amp; Vastu Design</option>
                        <option>Civil Contracting</option>
                        <option>Project Management</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Project Location</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm" placeholder="City, Area (e.g., Villupuram Town, Chennai)" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Estimated Budget</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm">
                      <option value="">Select budget range</option>
                      <option>Budget Friendly</option>
                      <option>Standard</option>
                      <option>Premium</option>
                      <option>Luxury</option>
                      <option>Large Scale</option>
                      <option>To Be Discussed</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Your Message *</label>
                    <textarea rows="5" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm resize-none" placeholder="Tell us about your project requirements, timeline, and any specific needs..." />
                  </div>
                  <button type="submit" className="btn-ripple w-full py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30 min-h-[48px]">
                    <i className="fas fa-paper-plane mr-2" /> Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 sm:py-20 bg-slate-50" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-poppins font-bold text-primary">Our Office Locations</h3>
            <p className="text-gray-500 text-sm mt-2">Visit us at either of our offices</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <div className="p-4 bg-white">
                <h4 className="font-poppins font-semibold text-primary text-sm mb-1"><i className="fas fa-map-marker-alt text-amber-500 mr-2" />Villupuram Office</h4>
                <p className="text-gray-500 text-xs">No. 24, Karumara Street, Sithathur, Kandachipuram Tk, Villupuram</p>
              </div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.6!2d79.4858!3d11.9416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDU2JzI5LjgiTiA3OcKwMjknMDguOSJF!5e0!3m2!1sen!2sin!4v1" width="100%" height="300" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="SJB C&C Villupuram Office" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <div className="p-4 bg-white">
                <h4 className="font-poppins font-semibold text-primary text-sm mb-1"><i className="fas fa-map-marker-alt text-amber-500 mr-2" />Chennai Office</h4>
                <p className="text-gray-500 text-xs">No. 10, Kennedy Street, MG Nagar, Tharamani, Chennai</p>
              </div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d80.25!3d12.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzQ4LjAiTiA4MMKwMTUnMDAuMCJF!5e0!3m2!1sen!2sin!4v1" width="100%" height="300" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="SJB C&C Chennai Office" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10" data-aos="fade-up">
            <h3 className="text-lg sm:text-xl font-poppins font-bold text-primary">Our Service Areas</h3>
            <p className="text-gray-500 text-sm mt-2">Proudly building across Tamil Nadu and Pondicherry</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3" data-aos="fade-up">
            <span className="px-4 sm:px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium min-h-[44px] flex items-center"><i className="fas fa-map-pin text-amber-500 mr-2" /> Villupuram</span>
            <span className="px-4 sm:px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium min-h-[44px] flex items-center"><i className="fas fa-map-pin text-amber-500 mr-2" /> Chennai</span>
            <span className="px-4 sm:px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium min-h-[44px] flex items-center"><i className="fas fa-map-pin text-amber-500 mr-2" /> Tindivanam</span>
            <span className="px-4 sm:px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium min-h-[44px] flex items-center"><i className="fas fa-map-pin text-amber-500 mr-2" /> Cuddalore</span>
            <span className="px-4 sm:px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium min-h-[44px] flex items-center"><i className="fas fa-map-pin text-amber-500 mr-2" /> Pondicherry</span>
            <span className="px-4 sm:px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium min-h-[44px] flex items-center"><i className="fas fa-map-pin text-amber-500 mr-2" /> Ulundurpet</span>
            <span className="px-4 sm:px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium min-h-[44px] flex items-center"><i className="fas fa-map-pin text-amber-500 mr-2" /> Gingee</span>
            <span className="px-4 sm:px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium min-h-[44px] flex items-center"><i className="fas fa-map-pin text-amber-500 mr-2" /> Vanur</span>
          </div>
        </div>
      </section>
    </>
  )
}
