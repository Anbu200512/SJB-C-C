import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollProgress from './ScrollProgress'
import BackToTop from './BackToTop'
import WhatsAppFloat from './WhatsAppFloat'

function initAOS() {
  if (window.AOS) {
    window.AOS.init({ duration: 800, once: true, offset: 50 })
  } else {
    const check = setInterval(() => {
      if (window.AOS) {
        window.AOS.init({ duration: 800, once: true, offset: 50 })
        clearInterval(check)
      }
    }, 100)
    setTimeout(() => clearInterval(check), 5000)
  }
}

export default function Layout({ children }) {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    initAOS()
  }, [location.pathname])

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <BackToTop />
      <WhatsAppFloat />
    </>
  )
}
