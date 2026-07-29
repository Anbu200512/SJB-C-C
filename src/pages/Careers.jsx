import { Link } from 'react-router-dom'

export default function Careers() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80" alt="Join SJB C&C team" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up">
            <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase">Careers</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white mt-4 mb-6">Join Our<br /><span className="text-amber-500">Growing Team</span></h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-xl">Be part of Tamil Nadu's most promising construction startup. We're looking for passionate individuals to build with us.</p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-sm font-semibold mb-4">Why Join SJB C&C?</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-primary mb-4">Build Your Career With Us</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">We're a young, fast-growing company that values talent, hard work, and innovation. Here's what we offer.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all duration-300" data-aos="fade-up">
              <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center mb-4"><i className="fas fa-graduation-cap text-white text-lg" /></div>
              <h3 className="text-lg font-poppins font-semibold text-primary mb-2">Learning &amp; Growth</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Hands-on experience on real projects across Tamil Nadu with mentorship from seasoned professionals.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
              <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center mb-4"><i className="fas fa-shield-alt text-white text-lg" /></div>
              <h3 className="text-lg font-poppins font-semibold text-primary mb-2">Safety First Culture</h3>
              <p className="text-gray-500 text-sm leading-relaxed">We prioritize your well-being with strict safety protocols, training, and equipment on every site.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
              <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center mb-4"><i className="fas fa-rocket text-white text-lg" /></div>
              <h3 className="text-lg font-poppins font-semibold text-primary mb-2">Fast-Paced Environment</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Work on diverse projects from day one and grow with a company that's expanding across Tamil Nadu.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-sm font-semibold mb-4">Apply Now</span>
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-primary mb-4">Submit Your Application</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Fill out the form below and our team will get back to you if your profile matches our current openings.</p>
          </div>
          <div data-aos="fade-up">
            <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-slate-100 shadow-xl">
              <form className="career-form space-y-5 sm:space-y-6">
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
                    <label className="block text-sm font-medium text-slate-700 mb-2">Current Location</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm" placeholder="City, District (e.g., Villupuram, Chennai)" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Position Interested In *</label>
                    <select required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm">
                      <option value="">Select a position</option>
                      <option>Civil Engineer</option>
                      <option>Site Supervisor</option>
                      <option>Project Manager</option>
                      <option>Architect / Designer</option>
                      <option>Interior Designer</option>
                      <option>Quantity Surveyor</option>
                      <option>Skilled Labor (Mason, Carpenter, etc.)</option>
                      <option>Safety Officer</option>
                      <option>Office Administrator</option>
                      <option>Intern (Civil Engineering)</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Years of Experience</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm">
                      <option value="">Select experience</option>
                      <option>Fresher / 0 - 1 year</option>
                      <option>1 - 3 years</option>
                      <option>3 - 5 years</option>
                      <option>5 - 10 years</option>
                      <option>10+ years</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Key Skills</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm" placeholder="e.g., AutoCAD, Project Management, Masonry, Vastu Knowledge" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Why do you want to join SJB C&C? *</label>
                  <textarea rows="4" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm resize-none" placeholder="Tell us about yourself, your experience, and why you'd like to join our team in Tamil Nadu..." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Upload Resume / CV</label>
                  <div className="relative">
                    <input type="file" accept=".pdf,.doc,.docx" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-amber-50 file:text-amber-600 hover:file:bg-amber-100 cursor-pointer" />
                  </div>
                  <p className="text-gray-400 text-xs mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                </div>
                <button type="submit" className="btn-ripple w-full py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30 min-h-[48px] text-base">
                  <i className="fas fa-paper-plane mr-2" /> Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
