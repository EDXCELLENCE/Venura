import React from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'

export default function Header({ mobileMenuOpen, setMobileMenuOpen, handleNavClick }) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-0">
          <img
            src="/logoicon.png"
            alt="Venura Icon"
            className="h-14 w-auto"
          />
          <img
            src="/logoname.png"
            alt="Venura"
            className="h-10 w-auto mt-3"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-16 text-sm text-gray-700">
          <a href="#About" onClick={(e) => handleNavClick(e, 'About')} className="hover:text-[#FF7A00] cursor-pointer">About</a>
          <a href="#Programs" onClick={(e) => handleNavClick(e, 'Programs')} className="hover:text-[#FF7A00] cursor-pointer">Programs</a>
          <a href="#internships" onClick={(e) => handleNavClick(e, 'Internships')} className="hover:text-[#FF7A00] cursor-pointer">Internships</a>
          <a href="#Become Affiliate" onClick={(e) => handleNavClick(e, 'Become Affiliate')} className="hover:text-[#FF7A00] cursor-pointer">Become Affiliate</a>
        </nav>

        {/* Desktop CTA */}
        <Button 
          className="hidden md:block rounded-full bg-[#FF7A00] hover:bg-[#ff8f2a] text-[#0A2342] font-bold px-6"
          onClick={() => window.open('https://forms.gle/DyDigMebuEbwED347', '_blank')}
        >
          Apply Now
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[#0A2342] hover:text-[#FF7A00] transition"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-gray-200 bg-white"
        >
          <nav className="flex flex-col px-6 py-4 space-y-4">
            <a href="#About" onClick={(e) => handleNavClick(e, 'About')} className="text-gray-700 hover:text-[#FF7A00] py-2 cursor-pointer">About</a>
            <a href="#Programs" onClick={(e) => handleNavClick(e, 'Programs')} className="text-gray-700 hover:text-[#FF7A00] py-2 cursor-pointer">Programs</a>
            <a href="#internships" onClick={(e) => handleNavClick(e, 'Internships')} className="text-gray-700 hover:text-[#FF7A00] py-2 cursor-pointer">Internships</a>
            <a href="#Become Affiliate" onClick={(e) => handleNavClick(e, 'Become Affiliate')} className="text-gray-700 hover:text-[#FF7A00] py-2 cursor-pointer">Become Affiliate</a>
            <Button 
              className="rounded-full bg-[#FF7A00] hover:bg-[#ff8f2a] text-[#0A2342] font-bold px-6 w-full"
              onClick={() => {
                window.open('https://forms.gle/DyDigMebuEbwED347', '_blank')
                setMobileMenuOpen(false)
              }}
            >
              Apply Now
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  )
}
