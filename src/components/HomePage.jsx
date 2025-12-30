import React from 'react'
import { Toaster } from 'react-hot-toast'
import toast from 'react-hot-toast'
import Header from './Header'
import HeroSection from './HeroSection'
import TrustedBySection from './TrustedBySection'
import WhyVenuraSection from './WhyVenuraSection'
import LearningPathsSection from './LearningPathsSection'
import LearningPyramidSection from './LearningPyramidSection'
import CTASection from './CTASection'
import Footer from './Footer'

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  const handleNavClick = (e, label) => {
    e.preventDefault()
    toast.success(`${label} - Coming Soon!`, {
      duration: 3000,
      position: 'top-center',
      style: {
        background: '#0A2342',
        color: '#fff',
        fontWeight: 'bold',
      },
      iconTheme: {
        primary: '#FF7A00',
        secondary: '#fff',
      },
    })
    setMobileMenuOpen(false)
  }

  return (
    <div className="w-full">
      <Toaster />
      
      <Header 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        handleNavClick={handleNavClick}
      />
      
      <HeroSection />
      
      <TrustedBySection />
      
      <WhyVenuraSection />
      
      <LearningPathsSection />
      
      <LearningPyramidSection />
      
      <CTASection />
      
      <Footer handleNavClick={handleNavClick} />
    </div>
  )
}
