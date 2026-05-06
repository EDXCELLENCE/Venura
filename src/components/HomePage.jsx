import { useState } from 'react'
import Header from './Header'
import ProgramsSection from './ProgramsSection'
import HeroSection from './HeroSection'
import WhyVenuraSection from './WhyVenuraSection'
import LearningPathsSection from './LearningPathsSection'
import LearningPyramidSection from './LearningPyramidSection'
import TestimonialsSection from './TestimonialsSection'
import CTASection from './CTASection'
import Footer from './Footer'

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  const handleNavClick = (e) => {
    if (e) e.preventDefault()
    setMobileMenuOpen(false)
  }

  return (
    <div className="w-full">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        handleNavClick={handleNavClick}
        handleLogoClick={handleLogoClick}
      />
      
      <HeroSection />
      <WhyVenuraSection />
      <LearningPathsSection />
      <ProgramsSection />
      
      <LearningPyramidSection />
      <TestimonialsSection />
      
      <CTASection />
      
      <Footer handleNavClick={handleNavClick} />
    </div>
  )
}
