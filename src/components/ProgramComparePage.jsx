import { useState, useEffect } from 'react'
import { Info, CheckCircle2, Star, TrendingUp, XCircle, Trophy, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const programData = {
  'AI & ML': {
    duration: '3 months',
    level: 'Advanced',
    prerequisites: 'Basic Python',
    careerRoles: 'ML Engineer, AI Developer, Data Scientist',
    avgSalary: '₹8-15 LPA',
    topSkills: ['Python', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision'],
    projects: '10+ hands-on projects',
    internship: 'Yes',
    certification: 'Industry Recognized',
    pricing: '₹4,999 - ₹8,499',
    path: '/programs/ai-ml',
    keyHighlight: '🚀 Highest Demand - 2024',
    placementRate: '92%',
    studentRating: '4.9',
  },
  'Full-Stack': {
    duration: '3 months',
    level: 'Intermediate to Advanced',
    prerequisites: 'Basic HTML/CSS',
    careerRoles: 'Full-Stack Developer, Web Developer, Software Engineer',
    avgSalary: '₹6-12 LPA',
    topSkills: ['React', 'Node.js', 'MongoDB', 'Express', 'REST APIs'],
    projects: '12+ full-stack applications',
    internship: 'Yes',
    certification: 'Industry Recognized',
    pricing: '₹4,999 - ₹8,499',
    path: '/programs/full-stack',
    keyHighlight: '⭐ Most Popular Choice',
    placementRate: '89%',
    studentRating: '4.8',
  },
  'Data Science': {
    duration: '3 months',
    level: 'Intermediate',
    prerequisites: 'Basic Math & Statistics',
    careerRoles: 'Data Analyst, Data Scientist, Business Analyst',
    avgSalary: '₹7-14 LPA',
    topSkills: ['Python', 'Pandas', 'SQL', 'Tableau', 'Machine Learning'],
    projects: '8+ analytics projects',
    internship: 'Yes',
    certification: 'Industry Recognized',
    pricing: '₹4,999 - ₹8,499',
    path: '/programs/data-science',
    keyHighlight: '💼 Best for Career Switch',
    placementRate: '87%',
    studentRating: '4.7',
  },
  'Java Backend': {
    duration: '3 months',
    level: 'Intermediate to Advanced',
    prerequisites: 'Basic Java',
    careerRoles: 'Backend Developer, Java Developer, API Engineer',
    avgSalary: '₹6-13 LPA',
    topSkills: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'MySQL'],
    projects: '10+ backend systems',
    internship: 'Yes',
    certification: 'Industry Recognized',
    pricing: '₹4,999 - ₹8,499',
    path: '/programs/java-backend',
    keyHighlight: '🏢 Enterprise Ready',
    placementRate: '90%',
    studentRating: '4.8',
  },
  Cybersecurity: {
    duration: '3 months',
    level: 'Advanced',
    prerequisites: 'Networking basics',
    careerRoles: 'Security Analyst, Penetration Tester, SOC Analyst',
    avgSalary: '₹7-16 LPA',
    topSkills: ['Ethical Hacking', 'Network Security', 'SIEM', 'Kali Linux', 'Forensics'],
    projects: '8+ security labs',
    internship: 'Yes',
    certification: 'Industry Recognized',
    pricing: '₹4,999 - ₹8,499',
    path: '/programs/cybersecurity',
    keyHighlight: '🔒 Highest Paying',
    placementRate: '91%',
    studentRating: '4.9',
  },
  Python: {
    duration: '3 months',
    level: 'Beginner to Intermediate',
    prerequisites: 'Basic programming logic',
    careerRoles: 'Python Developer, Backend Developer, Automation Engineer',
    avgSalary: '₹6-12 LPA',
    topSkills: ['Python', 'Django', 'Flask', 'REST APIs', 'SQL'],
    projects: '9+ backend and automation projects',
    internship: 'Yes',
    certification: 'Industry Recognized',
    pricing: '₹4,999 - ₹8,499',
    path: '/programs/python',
    keyHighlight: '⚡ Fastest Ramp-Up',
    placementRate: '90%',
    studentRating: '4.8',
  },
}

const ALL_PROGRAMS = ['AI & ML', 'Full-Stack', 'Data Science', 'Java Backend', 'Cybersecurity', 'Python']

const compareRows = [
  { key: 'keyHighlight', label: 'Key Highlight', icon: Trophy },
  { key: 'duration', label: 'Duration' },
  { key: 'level', label: 'Difficulty Level' },
  { key: 'prerequisites', label: 'Prerequisites' },
  { key: 'studentRating', label: 'Student Rating', icon: Star },
  { key: 'placementRate', label: 'Placement Rate', icon: TrendingUp },
  { key: 'careerRoles', label: 'Career Roles' },
  { key: 'avgSalary', label: 'Average Salary' },
  { key: 'topSkills', label: 'Top Skills' },
  { key: 'projects', label: 'Projects' },
  { key: 'internship', label: 'Internship' },
  { key: 'certification', label: 'Certification' },
  { key: 'pricing', label: 'Pricing' },
]

function CellValue({ rowKey, value }) {
  if (rowKey === 'studentRating') {
    return (
      <div className="flex items-center justify-center gap-1">
        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        <span className="font-bold text-lg">{value}</span>
        <span className="text-slate-500 text-sm">/5</span>
      </div>
    )
  }
  if (rowKey === 'placementRate') {
    return (
      <div className="flex items-center justify-center gap-2">
        <TrendingUp className="w-5 h-5 text-green-600" />
        <span className="font-bold text-lg text-green-600">{value}</span>
      </div>
    )
  }
  if (rowKey === 'keyHighlight') {
    return (
      <div className="bg-gradient-to-r from-[#FF7A00]/10 to-[#FF7A00]/5 border border-[#FF7A00]/30 rounded-lg px-3 py-2 inline-block">
        <span className="font-semibold text-[#FF7A00]">{value}</span>
      </div>
    )
  }
  if (Array.isArray(value)) {
    return (
      <div className="flex flex-wrap gap-2 justify-center">
        {value.map((s, i) => (
          <span key={i} className="bg-[#FF7A00]/10 text-[#FF7A00] px-3 py-1 rounded-full text-xs font-semibold">
            {s}
          </span>
        ))}
      </div>
    )
  }
  if (value === 'Yes') return <CheckCircle2 className="w-6 h-6 text-green-600 mx-auto" />
  if (value === 'No') return <XCircle className="w-6 h-6 text-red-500 mx-auto" />
  return <span className="font-medium">{value}</span>
}

export default function ProgramComparePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selected, setSelected] = useState(['AI & ML', 'Full-Stack', 'Data Science'])

  useEffect(() => {
    document.title = 'Compare Programs | Venura'
  }, [])

  const handleNavClick = (e) => {
    if (e) e.preventDefault()
    setMobileMenuOpen(false)
  }

  const toggle = (name) => {
    setSelected(prev =>
      prev.includes(name)
        ? prev.filter(n => n !== name)
        : prev.length < 3
          ? [...prev, name]
          : prev
    )
  }

  const selectedData = selected.map(n => ({ name: n, ...programData[n] }))

  return (
    <div className="w-full min-h-screen bg-white">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        handleNavClick={handleNavClick}
        handleLogoClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileMenuOpen(false) }}
      />

      <main style={{ paddingTop: 'calc(var(--site-header-offset, 4rem) + 1rem)' }}>
        {/* Hero */}
        <section className="relative pt-14 pb-12 px-6 bg-gradient-to-br from-[#0A2342] via-[#1a3a5f] to-[#0A2342]">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
              <Link to="/programs" className="hover:text-[#FF7A00] transition-colors">Programs</Link>
              <span>/</span>
              <span className="text-white">Compare Programs</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Compare <span className="text-[#FF7A00]">Programs</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              Find the perfect program for your career goals. Compare curriculum, duration, and outcomes side-by-side.
            </p>
          </div>
        </section>

        <section className="py-16 px-6 bg-gradient-to-b from-slate-50 to-white border-t-2 border-[#0A2342]">
          <div className="max-w-7xl mx-auto">

            {/* Program selector */}
            <div className="mb-10 bg-white rounded-2xl border-2 border-slate-200 p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Info className="w-6 h-6 text-[#FF7A00]" />
                Select Programs to Compare (Choose up to 3)
              </h2>
              <div className="flex flex-wrap gap-3">
                {ALL_PROGRAMS.map(name => {
                  const isOn = selected.includes(name)
                  const disabled = !isOn && selected.length >= 3
                  return (
                    <button
                      key={name}
                      onClick={() => toggle(name)}
                      disabled={disabled}
                      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2
                        ${isOn ? 'bg-[#FF7A00] text-white shadow-lg' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}
                        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {name}
                      {isOn && <CheckCircle2 className="w-4 h-4" />}
                    </button>
                  )
                })}
              </div>
              {selected.length < 3 && (
                <p className="text-sm text-slate-500 mt-3 flex items-center gap-1">
                  <Info className="w-4 h-4" />
                  Select {3 - selected.length} more program{3 - selected.length > 1 ? 's' : ''} for better comparison
                </p>
              )}
            </div>

            {/* Stats bar */}
            <div className="mb-8 bg-gradient-to-r from-[#FF7A00]/10 via-white to-[#FF7A00]/10 rounded-2xl border border-[#FF7A00]/20 p-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#FF7A00] mb-1">90%</div>
                  <div className="text-sm text-slate-600">Average Placement Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#FF7A00] mb-1">4.8★</div>
                  <div className="text-sm text-slate-600">Average Student Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#FF7A00] mb-1">3 Months</div>
                  <div className="text-sm text-slate-600">Program Duration</div>
                </div>
              </div>
            </div>

            {/* Comparison table */}
            {selected.length > 0 && (
              <div className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden shadow-lg">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[800px]">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#0A2342] to-[#1a3a5f]">
                        <th className="p-4 text-left text-white font-bold sticky left-0 bg-[#0A2342] z-10 w-44">
                          Feature
                        </th>
                        {selectedData.map(p => (
                          <th key={p.name} className="p-4 text-center text-white font-bold min-w-[250px]">
                            <div className="mb-3 text-lg">{p.name}</div>
                            <div className="flex flex-col gap-2">
                              <Link
                                to={p.path}
                                className="inline-block bg-white/20 hover:bg-white/30 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors border border-white/30"
                              >
                                View Details
                              </Link>
                              <button
                                onClick={() => window.open('https://forms.gle/DyDigMebuEbwED347', '_blank')}
                                className="inline-block bg-[#FF7A00] hover:bg-[#e56d00] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                              >
                                Enroll Now
                              </button>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {compareRows.map((row, idx) => (
                        <tr key={row.key} className={idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                          <td className="p-4 font-semibold text-slate-900 border-r border-slate-200 sticky left-0 bg-inherit z-10">
                            <div className="flex items-center gap-2">
                              {row.icon && <row.icon className="w-4 h-4 text-[#FF7A00]" />}
                              {row.label}
                            </div>
                          </td>
                          {selectedData.map(p => (
                            <td key={p.name} className="p-4 text-center text-slate-700">
                              <CellValue rowKey={row.key} value={p[row.key]} />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-12 text-center bg-gradient-to-br from-[#0A2342] to-[#1a3a5f] rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Still Can't Decide?</h2>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Talk to our career counselor for personalized guidance based on your background and goals.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-[#FF7A00] hover:bg-[#e56d00] text-white font-bold px-8 py-4 rounded-xl transition-colors inline-flex items-center gap-2"
                >
                  Talk to Counselor <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl border-2 border-white/30 transition-colors"
                >
                  Compare Again
                </button>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer handleNavClick={handleNavClick} />
    </div>
  )
}
