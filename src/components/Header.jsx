import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from './ui/button'

export default function Header({ mobileMenuOpen, setMobileMenuOpen, handleNavClick, handleLogoClick }) {
  const location = useLocation()
  
  return (
    <>
      {/* Announcement Banner */}
      <div className="bg-[#FF7A00] text-white text-center py-2 text-sm font-semibold">
        🎯 Limited Offer: Enroll in any program by May 15th and get 20% off! 
        <a href="/contact" className="ml-2 underline hover:opacity-80">Learn more →</a>
      </div>

      <header className="fixed top-9 inset-x-0 z-50 border-b transition-colors bg-white border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3">
          {/* Main Header Row */}
          <div className="flex items-center justify-between mb-3">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink-0" onClick={handleLogoClick}>
              <img src="/logoicon.png" alt="Venura Icon" className="h-11 sm:h-12 md:h-14 w-auto object-contain" />
              <img src="/logoname.png" alt="Venura" className="h-7 sm:h-8 md:h-10 w-auto object-contain" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-6 text-sm text-gray-700">
              <Link to="/about" className={`font-bold hover:text-[#FF7A00] cursor-pointer transition ${location.pathname === '/about' ? 'text-[#FF7A00]' : ''}`}>About</Link>
              <Link to="/programs" className={`font-bold hover:text-[#FF7A00] cursor-pointer transition ${location.pathname.startsWith('/programs') ? 'text-[#FF7A00]' : ''}`}>Programs</Link>
              <Link to="/ambassador-program" className={`font-bold hover:text-[#FF7A00] cursor-pointer transition ${location.pathname === '/ambassador-program' ? 'text-[#FF7A00]' : ''}`}>Ambassador</Link>
              <Link to="/faq" className={`font-bold hover:text-[#FF7A00] cursor-pointer transition ${location.pathname === '/faq' ? 'text-[#FF7A00]' : ''}`}>FAQ</Link>
              <Link to="/contact" className={`font-bold hover:text-[#FF7A00] cursor-pointer transition ${location.pathname === '/contact' ? 'text-[#FF7A00]' : ''}`}>Contact</Link>
            </nav>

            {/* Header Right CTAs */}
            <div className="flex items-center gap-4">
              {/* Primary CTA - Student Login */}
              <Button
                className="hidden md:block rounded-full bg-[#FF7A00] hover:bg-[#ff8f2a] text-[#0A2342] font-bold px-6"
                onClick={() => window.open('https://venuratech.com/dashboard/student/login', '_blank')}
              >
                Student Login
              </Button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 transition text-[#0A2342] hover:text-[#FF7A00]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t transition-colors border-gray-200 bg-white"
          >
            <nav className="max-w-7xl mx-auto px-6 py-4 space-y-3">
              <Link to="/about" className={`block font-bold py-2 hover:text-[#FF7A00] transition ${location.pathname === '/about' ? 'text-[#FF7A00]' : 'text-gray-700'}`} onClick={() => setMobileMenuOpen(false)}>
                About Us
              </Link>
              <Link to="/programs" className={`block font-bold py-2 hover:text-[#FF7A00] transition ${location.pathname.startsWith('/programs') ? 'text-[#FF7A00]' : 'text-gray-700'}`} onClick={() => setMobileMenuOpen(false)}>
                Programs
              </Link>
              <Link to="/ambassador-program" className={`block font-bold py-2 hover:text-[#FF7A00] transition ${location.pathname === '/ambassador-program' ? 'text-[#FF7A00]' : 'text-gray-700'}`} onClick={() => setMobileMenuOpen(false)}>
                Ambassador Program
              </Link>
              <Link to="/faq" className={`block font-bold py-2 hover:text-[#FF7A00] transition ${location.pathname === '/faq' ? 'text-[#FF7A00]' : 'text-gray-700'}`} onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </Link>
              <Link to="/contact" className={`block font-bold py-2 hover:text-[#FF7A00] transition ${location.pathname === '/contact' ? 'text-[#FF7A00]' : 'text-gray-700'}`} onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>

              <div className="pt-3 border-t border-gray-200">
                <Button
                  className="w-full rounded-full bg-[#FF7A00] hover:bg-[#ff8f2a] text-[#0A2342] font-bold"
                  onClick={() => {
                    window.open('https://venuratech.com/dashboard/student/login', '_blank')
                    setMobileMenuOpen(false)
                  }}
                >
                  Student Login
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </header>
    </>
  )
}
