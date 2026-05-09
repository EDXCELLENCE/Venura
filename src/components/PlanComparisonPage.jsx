import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import PageHero from './PageHero'
import { Button } from './ui/button'

export default function PlanComparisonPage() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const programData = location.state?.programData

  const handleNavClick = (e) => {
    if (e) e.preventDefault()
    setMobileMenuOpen(false)
  }

  if (!programData?.pricingComparison?.length) {
    return (
      <div className="w-full min-h-screen bg-white">
        <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} handleNavClick={handleNavClick} handleLogoClick={() => setMobileMenuOpen(false)} />
        <main style={{ paddingTop: 'var(--site-header-offset, 4rem)' }}>
          <PageHero
            eyebrow="Programs"
            title="Plan"
            highlight="Comparison"
            description="Compare plans side-by-side to pick the right option for your goals, budget, and learning pace."
            badges={['Feature-by-Feature', 'Transparent Pricing', 'Outcome Focused']}
            className="px-6 pt-8"
          >
            <div className="mt-7">
              <p className="text-slate-200 mb-4">No comparison data found. Open this page from a program details page.</p>
              <Button asChild className="font-bold px-8 py-3 rounded-xl">
                <Link to="/programs">Back to Programs</Link>
              </Button>
            </div>
          </PageHero>
        </main>
        <Footer handleNavClick={handleNavClick} />
      </div>
    )
  }

  return (
    <div className="w-full min-h-screen bg-white">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} handleNavClick={handleNavClick} handleLogoClick={() => setMobileMenuOpen(false)} />

      <main className="pb-14 bg-slate-50 min-h-[80vh]" style={{ paddingTop: 'var(--site-header-offset, 4rem)' }}>
        <PageHero
          eyebrow="Programs"
          title={`${programData.title}`}
          highlight="Plan Comparison"
          description="Compare all plans feature-by-feature and choose the best path for your learning and placement goals."
          badges={['Foundation vs Professional vs Premium', 'Built for Clarity']}
          className="px-6 pt-8"
        />

        <div className="px-6 mt-8">
        <div className="max-w-6xl mx-auto">
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
            <Button asChild className="font-bold px-8 py-3 rounded-xl">
              <Link to={programData.path || '/programs'}>Back to Program</Link>
            </Button>
          </div>
        </div>
        </div>
      </main>

      <Footer handleNavClick={handleNavClick} />
    </div>
  )
}
