import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function PlanComparisonPage() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const programData = location.state?.programData

  const handleNavClick = (e) => {
    if (e) e.preventDefault()
    setMobileMenuOpen(false)
  }

  if (!programData?.pricingComparison?.length) {
    return (
      <div className="w-full min-h-screen bg-white">
        <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} handleNavClick={handleNavClick} handleLogoClick={() => setMobileMenuOpen(false)} />
        <main className="pt-28 px-6 max-w-5xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-[#0A2342] mb-4">Plan Comparison</h1>
          <p className="text-slate-600 mb-8">No comparison data found. Open this page from a program details page.</p>
          <Link to="/programs" className="bg-[#FF7A00] hover:bg-[#e56d00] text-white font-bold py-3 px-8 rounded-xl">Back to Programs</Link>
        </main>
        <Footer handleNavClick={handleNavClick} />
      </div>
    )
  }

  return (
    <div className="w-full min-h-screen bg-white">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} handleNavClick={handleNavClick} handleLogoClick={() => setMobileMenuOpen(false)} />

      <main className="pt-28 pb-14 px-6 bg-slate-50 min-h-[80vh]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0A2342] mb-2">{programData.title} Plan Comparison</h1>
            <p className="text-slate-600">Compare all plans feature-by-feature</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[780px] text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#0A2342] to-[#1a3a5f]">
                  <th className="px-6 py-4 text-left text-white font-bold">Feature</th>
                  <th className="px-6 py-4 text-center text-white font-bold">Foundation</th>
                  <th className="px-6 py-4 text-center text-white font-bold">Professional</th>
                  <th className="px-6 py-4 text-center text-white font-bold bg-[#FF7A00]/30">Premium</th>
                </tr>
              </thead>
              <tbody>
                {programData.pricingComparison.map((row, idx) => (
                  <tr key={row.feature} className={idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-semibold text-slate-900 border-b border-slate-200">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-slate-700 border-b border-slate-200">{row.foundation}</td>
                    <td className="px-6 py-4 text-center text-slate-700 border-b border-slate-200">{row.professional}</td>
                    <td className="px-6 py-4 text-center font-bold text-[#FF7A00] border-b border-slate-200 bg-[#FF7A00]/5">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <Link to={programData.path || '/programs'} className="bg-[#FF7A00] hover:bg-[#e56d00] text-white font-bold py-3 px-8 rounded-xl">Back to Program</Link>
          </div>
        </div>
      </main>

      <Footer handleNavClick={handleNavClick} />
    </div>
  )
}
