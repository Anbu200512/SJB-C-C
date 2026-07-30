import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found | SJB C&C" description="The page you're looking for doesn't exist or has been moved. Visit SJB C&C for construction services in Villupuram, Chennai, and across Tamil Nadu." />
      <div className="min-h-screen bg-slate-900 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
      </div>
      <div className="text-center px-4 relative z-10">
        <div className="mb-6">
          <span className="text-[10rem] sm:text-[12rem] font-poppins font-black text-amber-500 leading-none select-none">404</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-poppins font-bold text-white mb-3">Page Not Found</h1>
        <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved to a new location.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-3 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 transform hover:-translate-y-0.5"
        >
          <i className="fas fa-arrow-left text-sm" />
          Back to Home
        </Link>
      </div>
      </div>
    </>
  )
}
