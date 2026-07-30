import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../assets/logo.png'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      const savedScrollY = window.scrollY
      document.body.classList.add('menu-open')
      document.body.style.top = `-${savedScrollY}px`
    } else {
      const savedScrollY = parseInt(document.body.style.top || '0', 10) * -1
      document.body.classList.remove('menu-open')
      document.body.style.top = ''
      window.scrollTo(0, savedScrollY || 0)
    }
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header id="navbar" className={`navbar-premium fixed top-0 left-0 w-full z-50 ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-glass" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0 relative z-[60] group">
            <img src={logoImg} alt="SJB C&C" className="h-10 sm:h-12 w-auto rounded-lg" />
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-lg sm:text-xl font-extrabold text-white font-poppins tracking-tight">SJB</span>
                <span className="text-lg sm:text-xl font-extrabold text-amber-400 font-poppins tracking-tight">C&C</span>
              </div>
              <p className="text-[8px] sm:text-[9px] text-gray-400 -mt-0.5 tracking-[0.2em] uppercase hidden sm:block font-medium">Construction &amp; Contracting</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link ${location.pathname === link.to ? 'is-active' : ''}`}
              >
                <span className="nav-link-text">{link.label}</span>
                <span className="nav-link-bar" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 relative z-[60]">
            <a href="tel:+919629528219" className="hidden lg:inline-flex items-center justify-center w-9 h-9 rounded-xl bg-green-500/10 hover:bg-green-500/20 transition-colors" aria-label="Call us">
              <i className="fas fa-phone-alt text-green-400 text-sm" />
            </a>
            <Link to="/contact" className="cta-quote-btn hidden lg:inline-flex">
              <span className="cta-quote-bg" />
              <span className="cta-quote-content">
                <i className="fas fa-bolt text-xs" />
                <span>Get Free Quote</span>
              </span>
            </Link>

            <a href="tel:+919629528219" className="lg:hidden phone-btn" aria-label="Call us">
              <div className="phone-ring" />
              <i className="fas fa-phone-alt text-sm" />
            </a>

            <button
              onClick={() => setMenuOpen(o => !o)}
              className={`lg:hidden hamburger-btn ${menuOpen ? 'is-active' : ''}`}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span className="hamburger-box">
                <span className="hamburger-line top-line" />
                <span className="hamburger-line mid-line" />
                <span className="hamburger-line bot-line" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="navbar-border" />

      <div id="mobile-menu" className={`mobile-menu lg:hidden ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-bg" />
        <div className="mobile-menu-panel">
          <div className="mobile-menu-header">
            <div className="mobile-menu-logo">
              <img src={logoImg} alt="SJB C&C" className="h-10 sm:h-12 w-auto rounded-lg" />
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg sm:text-xl font-extrabold text-white font-poppins">SJB</span>
                  <span className="text-lg sm:text-xl font-extrabold text-amber-400 font-poppins">C&C</span>
                </div>
                <p className="text-[8px] sm:text-[9px] text-gray-400 -mt-0.5 tracking-[0.2em] uppercase font-medium">Construction &amp; Contracting</p>
              </div>
            </div>
            <button onClick={closeMenu} className="close-menu-btn" aria-label="Close menu">
              <i className="fas fa-times" />
            </button>
          </div>

          <div className="mobile-menu-divider" />

          <nav className="mobile-menu-nav">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="mobile-link"
                style={location.pathname === link.to ? { color: '#F59E0B', background: 'rgba(245,158,11,0.08)', borderColor: 'rgba(245,158,11,0.12)' } : {}}
              >
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>

          <div className="mobile-menu-divider" />

          <div className="mobile-cta">
            <Link to="/contact" className="cta-primary-mobile" onClick={closeMenu}>
              <i className="fas fa-bolt" />
              <span>Get Free Quote</span>
            </Link>
            <a href="tel:+919629528219" className="cta-call-mobile">
              <i className="fas fa-phone-alt" />
              <span>Call Now</span>
            </a>
          </div>

              <div className="mobile-menu-footer">
                <a href="tel:+919629528219"><i className="fas fa-phone-alt" /> +91 96295 28219</a>
                <a href="mailto:sjbconstructionandcontracts@gmail.com"><i className="fas fa-envelope" /> sjbconstructionandcontracts@gmail.com</a>
                <a href="https://g.page/sjbcc/review" target="_blank"><i className="fab fa-google" /> Review us on Google</a>
              </div>
        </div>
      </div>
    </header>
  )
}
