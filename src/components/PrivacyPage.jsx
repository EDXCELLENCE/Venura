import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold text-[#0A2342] mb-6">Privacy Policy</h1>
          <div className="space-y-5 text-slate-700 leading-relaxed">
            <p>We collect only necessary information for admissions, communication, and learner support.</p>
            <p>We do not sell personal information. Data is used to improve learning outcomes and user experience.</p>
            <p id="cookies">Cookie usage helps us remember preferences and understand traffic patterns.</p>
            <p>You can request data updates or deletion by contacting info@venuratech.com.</p>
          </div>
        </div>
      </main>
      <Footer handleNavClick={handleNavClick} />
    </div>
  )
}
