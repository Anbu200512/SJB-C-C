import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function Careers() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', location: '', position: '', experience: '', skills: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState(null)
  const fileInputRef = useRef(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setStatus(null)
    try {
      const payload = { ...form }
      const file = fileInputRef.current?.files?.[0]
      if (file) {
        payload.resumeName = file.name
        payload.resumeData = await new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.onload = () => resolve(reader.result.split(',')[1])
          reader.onerror = reject
          reader.readAsDataURL(file)
        })
      }
      const res = await fetch('/api/careers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setForm({ name: '', email: '', phone: '', location: '', position: '', experience: '', skills: '', message: '' })
      if (fileInputRef.current) fileInputRef.current.value = ''
    } catch {
      setStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <SEO title="Careers | Join SJB C&C Construction Team" description="Join Tamil Nadu's fastest-growing budget-friendly construction startup. Explore career opportunities in Villupuram, Chennai, and across the region." />
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
              <form className="career-form space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm" placeholder="+91 96295 28219" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Current Location</label>
                    <input type="text" name="location" value={form.location} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm" placeholder="City, District (e.g., Villupuram, Chennai)" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Position Interested In *</label>
                    <select name="position" value={form.position} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm">
                      <option value="">Select a position</option>
                      <option value="Civil Engineer">Civil Engineer</option>
                      <option value="Site Supervisor">Site Supervisor</option>
                      <option value="Project Manager">Project Manager</option>
                      <option value="Architect / Designer">Architect / Designer</option>
                      <option value="Interior Designer">Interior Designer</option>
                      <option value="Quantity Surveyor">Quantity Surveyor</option>
                      <option value="Skilled Labor (Mason, Carpenter, etc.)">Skilled Labor (Mason, Carpenter, etc.)</option>
                      <option value="Safety Officer">Safety Officer</option>
                      <option value="Office Administrator">Office Administrator</option>
                      <option value="Intern (Civil Engineering)">Intern (Civil Engineering)</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Years of Experience</label>
                    <select name="experience" value={form.experience} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm">
                      <option value="">Select experience</option>
                      <option value="Fresher / 0 - 1 year">Fresher / 0 - 1 year</option>
                      <option value="1 - 3 years">1 - 3 years</option>
                      <option value="3 - 5 years">3 - 5 years</option>
                      <option value="5 - 10 years">5 - 10 years</option>
                      <option value="10+ years">10+ years</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Key Skills</label>
                  <input type="text" name="skills" value={form.skills} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm" placeholder="e.g., AutoCAD, Project Management, Masonry, Vastu Knowledge" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Why do you want to join SJB C&C? *</label>
                  <textarea rows="4" name="message" value={form.message} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm resize-none" placeholder="Tell us about yourself, your experience, and why you'd like to join our team in Tamil Nadu..." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Upload Resume / CV</label>
                  <div className="relative">
                    <input type="file" ref={fileInputRef} accept=".pdf,.doc,.docx" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-amber-50 file:text-amber-600 hover:file:bg-amber-100 cursor-pointer" />
                  </div>
                  <p className="text-gray-400 text-xs mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                </div>
                {status === 'success' && <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm text-center">Application submitted successfully! We'll be in touch.</div>}
                {status === 'error' && <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm text-center">Failed to submit. Please try again later.</div>}
                <button type="submit" disabled={submitting} className="btn-ripple w-full py-4 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30 min-h-[48px] text-base">
                  <i className="fas fa-paper-plane mr-2" /> {submitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
