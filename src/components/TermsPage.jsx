import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function TermsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const handleNavClick = (e) => {
    if (e) e.preventDefault()
    setMobileMenuOpen(false)
  }

  return (
    <div className="w-full min-h-screen bg-white">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} handleNavClick={handleNavClick} handleLogoClick={() => setMobileMenuOpen(false)} />
      <main className="pt-28 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0A2342] mb-6">Terms and Conditions</h1>
          <div className="space-y-5 text-slate-700 leading-relaxed">
            <p>By enrolling in Venura programs, you agree to follow community guidelines, payment terms, and respectful conduct policies.</p>
            <p>Program access includes learning content, support channels, and updates as described on each program page.</p>
            <p>Certification and placement support eligibility depend on successful completion of required milestones and activities.</p>
            <p>For official legal clarifications, please contact info@venuratech.com.</p>
          </div>
        </div>
      </main>
      <Footer handleNavClick={handleNavClick} />
    </div>
  )
}
