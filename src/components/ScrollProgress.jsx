import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const barRef = useRef(null)

  useEffect(() => {
    let ticking = false
    function handleScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          const h = document.documentElement.scrollHeight - window.innerHeight
          if (barRef.current) {
            barRef.current.style.width = (h > 0 ? (window.scrollY / h * 100) : 0) + '%'
          }
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={barRef}
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-secondary to-accent z-[9999]"
      style={{ width: '0%' }}
    />
  )
}
