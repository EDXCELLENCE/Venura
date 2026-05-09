import { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Users, Clock3, BadgeCheck, Layers3 } from 'lucide-react'
import Header from './Header'
import Footer from './Footer'

export default function ProgramDetailTemplate({ programData }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCurriculumTab, setActiveCurriculumTab] = useState('foundation')
  const [activeFeatureSection, setActiveFeatureSection] = useState(null)

  useEffect(() => {
    if (programData?.title) document.title = `${programData.title} | Venura`
  }, [programData?.title])

  const handleNavClick = (e) => {
    if (e) e.preventDefault()
    setMobileMenuOpen(false)
  }

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  const handleDownloadSyllabus = () => {
    if (programData.syllabusUrl) {
      window.open(programData.syllabusUrl, '_blank')
      return
    }

    const lines = [
      `${programData.title} - Syllabus`,
      `Duration: ${programData.duration || 'N/A'}`,
      `Level: ${programData.level || 'N/A'}`,
      '',
      'Topics:',
      ...(programData.topics || []).map((topic, idx) => `${idx + 1}. ${topic.title} - ${topic.description}`),
      '',
      'Curriculum:',
      ...(programData.curriculum || []).flatMap((module, idx) => [
        `${idx + 1}. ${module.title} (${module.duration})`,
        `   ${module.description}`,
      ]),
    ]

    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = `${(programData.title || 'program').replace(/\s+/g, '-').toLowerCase()}-syllabus.txt`
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
    URL.revokeObjectURL(url)
  }

  const programPath = programData?.path || 'default'
  const availableSections = [
    { key: 'topics', label: 'What You\'ll Learn', icon: '🧠', enabled: !!programData?.topics },
    { key: 'prerequisites', label: 'Prerequisites', icon: '📌', enabled: !!programData?.prerequisites },
    { key: 'curriculum', label: 'Curriculum', icon: '🗺️', enabled: !!programData?.curriculum },
    { key: 'projects', label: 'Projects', icon: '🛠️', enabled: !!programData?.projects },
    { key: 'pricing', label: 'Pricing', icon: '💳', enabled: true },
    { key: 'certifications', label: 'Certifications', icon: '🎓', enabled: !!programData?.certifications },
    { key: 'outcomes', label: 'Career Outcomes', icon: '📈', enabled: true },
    { key: 'instructors', label: 'Instructors', icon: '👨‍🏫', enabled: !!programData?.instructors },
    { key: 'reviews', label: 'Reviews', icon: '⭐', enabled: !!programData?.reviews },
    { key: 'comparison', label: 'Why Choose Venura?', icon: '⚖️', enabled: !!programData?.competitorComparison },
    { key: 'certificate', label: 'Certificate', icon: '📜', enabled: !!programData?.certificatePreview },
    { key: 'faqs', label: 'FAQs', icon: '❓', enabled: !!programData?.faqs },
  ].filter((section) => section.enabled)
  const defaultSectionKey = availableSections[0]?.key || null

  const renderSourceLinks = (source, className = 'text-xs text-slate-500 mt-3') => {
    if (!source) return null
    if (Array.isArray(source)) {
      return (
        <p className={className}>
          Sources:{' '}
          {source.map((item, idx) => (
            <Fragment key={`${item.label}-${idx}`}>
              <a href={item.url} target="_blank" rel="noreferrer" className="underline hover:text-[#0A2342]">{item.label}</a>
              {idx < source.length - 1 ? ', ' : ''}
            </Fragment>
          ))}
        </p>
      )
    }

    return <p className={className}>{source}</p>
  }

  useEffect(() => {
    if (!activeFeatureSection && defaultSectionKey) {
      const storageKey = `program-sidebar-section-${programPath}`
      const savedSection = window.localStorage.getItem(storageKey)
      const isValidSaved = savedSection && availableSections.some((section) => section.key === savedSection)
      setActiveFeatureSection(isValidSaved ? savedSection : defaultSectionKey)
    }
  }, [activeFeatureSection, defaultSectionKey, availableSections, programPath])

  useEffect(() => {
    if (activeFeatureSection) {
      const storageKey = `program-sidebar-section-${programPath}`
      window.localStorage.setItem(storageKey, activeFeatureSection)
    }
  }, [activeFeatureSection, programPath])

  if (!programData) return null

  const curriculum = programData.curriculum || []
  const hasPhaseData = curriculum.some((module) => module.phase)
  const oneThird = Math.ceil(curriculum.length / 3)
  const foundationModules = hasPhaseData ? curriculum.filter((module) => module.phase === 'foundation') : curriculum.slice(0, oneThird)
  const intermediateModules = hasPhaseData ? curriculum.filter((module) => module.phase === 'intermediate') : curriculum.slice(oneThird, oneThird * 2)
  const advancedModules = hasPhaseData ? curriculum.filter((module) => module.phase === 'advanced') : curriculum.slice(oneThird * 2)
  const seatsAvailable = programData.batchInfo?.seatsAvailable
  const totalSeats = programData.batchInfo?.totalSeats
  const enrolledCount = typeof seatsAvailable === 'number' && typeof totalSeats === 'number'
    ? Math.max(totalSeats - seatsAvailable, 0)
    : null

  const contentCardClass = 'motion-card bg-gradient-to-br from-white to-slate-50 rounded-2xl p-4 border border-slate-200 shadow-sm hover:shadow-md transition-all'
  const sectionTitleClass = 'text-2xl font-extrabold text-[#0A2342] mb-5 tracking-tight'

  const renderSidebarContent = () => {
    if (!activeFeatureSection) {
      return (
        <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
          <p className="text-sm font-semibold text-slate-700">Select a section to begin</p>
          <p className="text-xs text-slate-500 mt-1">Use the sidebar options to explore the program details.</p>
        </div>
      )
    }

    if (activeFeatureSection === 'topics') {
      return (
        <div>
          <h3 className={sectionTitleClass}>What You&apos;ll Learn</h3>
          <div className="grid md:grid-cols-2 gap-4 motion-grid">
            {(programData.topics || []).map((topic, idx) => (
              <div key={idx} className={contentCardClass}>
                <p className="font-semibold text-slate-900">{topic.title}</p>
                <p className="text-sm text-slate-600 mt-1">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      )
    }

    if (activeFeatureSection === 'prerequisites') {
      return (
        <div>
          <h3 className={sectionTitleClass}>Prerequisites</h3>
          <div className="grid md:grid-cols-3 gap-4 motion-grid">
            <div className={`${contentCardClass} border-t-4 border-green-500`}>
              <p className="font-semibold text-slate-900 mb-2">Required</p>
              <div className="space-y-2">{(programData.prerequisites?.required || []).map((i, idx) => <p key={idx} className="text-sm text-slate-600">• {i}</p>)}</div>
            </div>
            <div className={`${contentCardClass} border-t-4 border-[#FF7A00]`}>
              <p className="font-semibold text-slate-900 mb-2">Recommended</p>
              <div className="space-y-2">{(programData.prerequisites?.recommended || []).map((i, idx) => <p key={idx} className="text-sm text-slate-600">• {i}</p>)}</div>
            </div>
            <div className={`${contentCardClass} border-t-4 border-[#0A2342]`}>
              <p className="font-semibold text-slate-900 mb-2">Ideal For</p>
              <div className="space-y-2">{(programData.prerequisites?.idealFor || []).map((i, idx) => <p key={idx} className="text-sm text-slate-600">• {i}</p>)}</div>
            </div>
          </div>
        </div>
      )
    }

    if (activeFeatureSection === 'curriculum') {
      const modules = activeCurriculumTab === 'foundation' ? foundationModules : activeCurriculumTab === 'intermediate' ? intermediateModules : advancedModules
      return (
        <div>
          <h3 className={sectionTitleClass}>Program Curriculum</h3>
          <div className="flex gap-2 mb-4 flex-wrap">
            <button onClick={() => setActiveCurriculumTab('foundation')} className={`px-4 py-2 rounded-lg text-sm font-semibold ${activeCurriculumTab === 'foundation' ? 'bg-[#FF7A00] text-white' : 'bg-white border border-[#FF7A00]/40 text-[#FF7A00]'}`}>Foundation</button>
            <button onClick={() => setActiveCurriculumTab('intermediate')} className={`px-4 py-2 rounded-lg text-sm font-semibold ${activeCurriculumTab === 'intermediate' ? 'bg-[#14345d] text-white' : 'bg-white border border-[#14345d]/30 text-[#14345d]'}`}>Intermediate</button>
            <button onClick={() => setActiveCurriculumTab('advanced')} className={`px-4 py-2 rounded-lg text-sm font-semibold ${activeCurriculumTab === 'advanced' ? 'bg-[#0A2342] text-white' : 'bg-white border border-[#0A2342]/30 text-[#0A2342]'}`}>Advanced</button>
          </div>
          <div className="grid md:grid-cols-2 gap-4 motion-grid">
            {modules.map((module, idx) => (
                <div key={idx} className={contentCardClass}>
                <p className="font-semibold text-slate-900">{module.title}</p>
                <p className="text-xs text-[#FF7A00] font-bold mt-1">{module.duration}</p>
                <p className="text-sm text-slate-600 mt-2">{module.description}</p>
                <div className="space-y-1 mt-3">
                  {(module.topics || []).map((topic, topicIdx) => (
                    <p key={topicIdx} className="text-xs text-slate-600">• {topic}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }

    if (activeFeatureSection === 'projects') {
      return (
        <div>
          <h3 className={sectionTitleClass}>Projects</h3>
          <div className="grid md:grid-cols-2 gap-4 motion-grid">
            {(programData.projects || []).map((project, idx) => (
              <div key={idx} className={contentCardClass}>
                <p className="font-semibold text-slate-900">{project.title}</p>
                <p className="text-sm text-slate-600 mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {(project.technologies || []).map((tech, techIdx) => (
                    <span key={techIdx} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }

    if (activeFeatureSection === 'pricing') {
      return (
        <div>
          <h3 className={sectionTitleClass}>Pricing</h3>
          <div className="grid md:grid-cols-3 gap-4 motion-grid">
            {Object.values(programData.costDetails || {}).map((plan) => (
              <div key={plan.name} className={contentCardClass}>
                <p className="font-semibold text-slate-900">{plan.name}</p>
                <p className="text-xl font-bold text-[#FF7A00] mt-1">{plan.price}</p>
                <p className="text-xs text-slate-500">{plan.duration}</p>
                <div className="space-y-1 mt-3">
                  {(plan.features || []).map((feature, featureIdx) => (
                    <p key={featureIdx} className="text-xs text-slate-600">• {feature}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {programData.pricingComparison && (
              <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 mt-4 shadow-sm">
              <table className="w-full min-w-[720px]">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="text-left px-4 py-2 text-sm">Feature</th>
                    <th className="text-left px-4 py-2 text-sm">Foundation</th>
                    <th className="text-left px-4 py-2 text-sm">Professional</th>
                    <th className="text-left px-4 py-2 text-sm">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {programData.pricingComparison.map((row, idx) => (
                    <tr key={idx} className="border-t border-slate-200">
                      <td className="px-4 py-2 text-sm font-semibold text-slate-700">{row.feature}</td>
                      <td className="px-4 py-2 text-sm text-slate-600">{row.foundation}</td>
                      <td className="px-4 py-2 text-sm text-slate-600">{row.professional}</td>
                      <td className="px-4 py-2 text-sm text-slate-600">{row.premium}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )
    }

    if (activeFeatureSection === 'certifications') {
      return (
        <div>
          <h3 className={sectionTitleClass}>Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4 motion-grid">
            {(programData.certifications || []).map((cert, idx) => (
              <div key={idx} className={`${contentCardClass} text-center`}>
                <p className="text-2xl">{cert.icon}</p>
                <p className="font-semibold text-slate-900 mt-2">{cert.name}</p>
                <p className="text-sm text-slate-600">{cert.provider}</p>
              </div>
            ))}
          </div>
        </div>
      )
    }

    if (activeFeatureSection === 'outcomes') {
      return (
        <div>
          <h3 className={sectionTitleClass}>Career Outcomes</h3>
          <div className="grid md:grid-cols-2 gap-4 motion-grid">
            <div className={contentCardClass}>
              <p className="font-semibold text-slate-900 mb-2">Roles and Salary</p>
              {(programData.salaryRanges || []).map((salary, idx) => (
                <p key={idx} className="text-sm text-slate-600">{salary.role}: <span className="font-semibold text-[#FF7A00]">{salary.range}</span></p>
              ))}
            </div>
            <div className={contentCardClass}>
              <p className="font-semibold text-slate-900 mb-2">Top Companies</p>
              <div className="flex flex-wrap gap-2">{(programData.hiringCompanies || []).map((company, idx) => <span key={idx} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">{company}</span>)}</div>
            </div>
          </div>
          <div className={`${contentCardClass} mt-4`}>
              <p className="font-semibold text-slate-900 mb-2">Skills You&apos;ll Master</p>
            <div className="flex flex-wrap gap-2">{(programData.skills || []).map((skill, idx) => <span key={idx} className="text-xs bg-[#FF7A00] text-white px-2 py-1 rounded-full">{skill}</span>)}</div>
          </div>
          {programData.growthStats && (
            <div className="grid md:grid-cols-3 gap-3 mt-4 motion-grid">
              {programData.growthStats.map((stat, idx) => (
                <div key={idx} className={contentCardClass}>
                  <p className="text-lg font-extrabold text-[#FF7A00]">{stat.value}</p>
                  <p className="text-sm font-semibold text-slate-900">{stat.label}</p>
                  <p className="text-xs text-slate-600 mt-1">{stat.description}</p>
                </div>
              ))}
            </div>
          )}
          {programData.futureOutlook && (
            <div className={`${contentCardClass} mt-4`}>
              <p className="text-sm text-slate-700">{programData.futureOutlook}</p>
            </div>
          )}
          {renderSourceLinks(programData.marketDataSource)}
        </div>
      )
    }

    if (activeFeatureSection === 'instructors') {
      return (
        <div>
          <h3 className={sectionTitleClass}>Instructors</h3>
          <div className="grid md:grid-cols-2 gap-4 motion-grid">
            {(programData.instructors || []).map((instructor, idx) => (
              <div key={idx} className={contentCardClass}>
                <div className="flex items-center gap-3 mb-2">
                  <img src={instructor.image} alt={instructor.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-slate-900">{instructor.name}</p>
                    <p className="text-xs text-slate-600">{instructor.role}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-700">{instructor.specialization}</p>
                <p className="text-xs text-slate-600 mt-1">{instructor.experience}</p>
                <p className="text-xs text-slate-600 mt-1">{instructor.credentials}</p>
              </div>
            ))}
          </div>
        </div>
      )
    }

    if (activeFeatureSection === 'reviews') {
      return (
        <div>
          <h3 className={sectionTitleClass}>Student Reviews</h3>
          <div className="grid md:grid-cols-2 gap-4 motion-grid">
            {(programData.reviews || []).map((review, idx) => (
              <div key={idx} className={contentCardClass}>
                <div className="flex items-center gap-3 mb-2">
                  <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-slate-900">{review.name}</p>
                    <p className="text-xs text-slate-600">{review.role}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-1">&ldquo;{review.text}&rdquo;</p>
                {review.company && <p className="text-xs text-slate-500 mt-2">Now at {review.company}</p>}
              </div>
            ))}
          </div>
        </div>
      )
    }

    if (activeFeatureSection === 'comparison') {
      return (
        <div>
          <h3 className={sectionTitleClass}>Why Choose Venura?</h3>
          <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full min-w-[820px]">
              <thead>
                <tr className="bg-slate-50">
                  <th className="text-left px-4 py-2 text-sm">Feature</th>
                  <th className="text-left px-4 py-2 text-sm">Venura</th>
                  <th className="text-left px-4 py-2 text-sm">Coursera</th>
                  <th className="text-left px-4 py-2 text-sm">Udemy</th>
                  <th className="text-left px-4 py-2 text-sm">Bootcamps</th>
                </tr>
              </thead>
              <tbody>
                {(programData.competitorComparison || []).map((row, idx) => (
                  <tr key={idx} className="border-t border-slate-200">
                    <td className="px-4 py-2 text-sm font-semibold text-slate-700">{row.feature}</td>
                    <td className="px-4 py-2 text-sm text-[#FF7A00] font-bold">{row.venura}</td>
                    <td className="px-4 py-2 text-sm text-slate-600">{row.coursera}</td>
                    <td className="px-4 py-2 text-sm text-slate-600">{row.udemy}</td>
                    <td className="px-4 py-2 text-sm text-slate-600">{row.bootcamp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {renderSourceLinks(programData.comparisonSource)}
        </div>
      )
    }

    if (activeFeatureSection === 'certificate') {
      return (
        <div>
          <h3 className={sectionTitleClass}>Certificate Preview</h3>
          <div className="bg-white rounded-2xl border border-slate-200 p-3 shadow-sm">
            <img src={programData.certificatePreview} alt="Certificate preview" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      )
    }

    if (activeFeatureSection === 'faqs') {
      return (
        <div>
          <h3 className={sectionTitleClass}>FAQs</h3>
          <div className="space-y-3 motion-grid">
            {(programData.faqs || []).map((faq, idx) => (
              <details key={idx} className="bg-gradient-to-br from-white to-slate-50 rounded-xl p-4 border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <summary className="font-semibold text-slate-900 cursor-pointer">{faq.question}</summary>
                <p className="text-sm text-slate-600 mt-2">{faq.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#0A2342] hover:bg-[#14345d] text-white font-bold py-2.5 px-5 rounded-lg transition-all text-sm">
              <Mail className="w-4 h-4" /> Contact Us
            </Link>
          </div>
        </div>
      )
    }

    return <p className="text-sm text-slate-700">Section content unavailable.</p>
  }

  return (
    <div className="w-full min-h-screen bg-white">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} handleNavClick={handleNavClick} handleLogoClick={handleLogoClick} />

      <main>
        <section className="relative overflow-hidden bg-[#0A2342] text-white" style={{ marginTop: 'var(--site-header-offset, 4rem)' }}>
          <div className="absolute inset-y-0 right-0 w-full lg:w-[52%]">
            <img src={programData.image} alt={programData.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(to_left,rgba(8,17,31,0.18),rgba(8,17,31,0.42))]" />
          </div>
          <div className="absolute inset-y-0 left-0 w-full lg:w-[68%] bg-[linear-gradient(90deg,#0A2342_0%,#0A2342_58%,rgba(10,35,66,0.92)_72%,rgba(10,35,66,0)_100%)]" />
          <div className="absolute inset-y-0 left-[52%] hidden w-24 -skew-x-[22deg] bg-[#FF7A00] lg:block" />
          <div className="pointer-events-none absolute left-[-120px] top-[-80px] h-80 w-80 rounded-full bg-[#FF7A00]/14 blur-[100px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28">
            <div className="max-w-3xl">
              <Link to="/programs" className="inline-flex items-center text-slate-300 hover:text-white text-sm font-semibold mb-6 transition-colors">
                ← Back to Programs
              </Link>
              <p className="text-[#FFB273] text-sm font-bold uppercase tracking-widest mb-3">{programData.category}</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 leading-tight">{programData.title}</h1>
              <p className="text-[#FF7A00] text-lg md:text-xl font-semibold mb-5">{programData.subtitle}</p>
              <p className="max-w-2xl text-slate-200 leading-relaxed mb-6">{programData.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {programData.duration && <span className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm font-semibold backdrop-blur-sm">{programData.duration}</span>}
                {programData.level && <span className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm font-semibold backdrop-blur-sm">{programData.level}</span>}
                {programData.enrolled && <span className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm font-semibold backdrop-blur-sm">{programData.enrolled}</span>}
                {programData.batchInfo?.nextBatchDate && <span className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm font-semibold backdrop-blur-sm">Next Batch: {programData.batchInfo.nextBatchDate}</span>}
              </div>

              {typeof seatsAvailable === 'number' && (
                <div className="mb-6 max-w-xl rounded-xl border border-[#FF7A00]/40 bg-[#FF7A00]/15 p-4 backdrop-blur-sm">
                  <p className="text-[#ffd0aa] font-bold text-sm">🔥 Only {seatsAvailable} seats left!</p>
                  {typeof totalSeats === 'number' && <p className="text-slate-200 text-sm mt-1">Seats left: {seatsAvailable} of {totalSeats}{enrolledCount !== null ? ` • Enrolled: ${enrolledCount}` : ''}</p>}
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => window.open(programData.enrollUrl || 'https://forms.gle/DyDigMebuEbwED347', '_blank')}
                  className="bg-[#FF7A00] hover:bg-[#e06800] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-[0_8px_24px_-8px_rgba(255,122,0,0.55)]"
                >
                  Enroll Now
                </button>
                <button
                  onClick={handleDownloadSyllabus}
                  className="bg-white/10 border border-white/30 hover:bg-white/20 text-white font-bold px-6 py-3.5 rounded-xl transition-all backdrop-blur-sm"
                >
                  Download Syllabus
                </button>
              </div>
            </div>
          </div>
        </section>


        {programData.quickStats && (
          <section className="py-8 px-6 bg-[#f6f8fb]">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
              {programData.quickStats.map((stat, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-center">
                  <p className="text-xl mb-1">{stat.icon}</p>
                  <p className="text-2xl font-extrabold text-[#0A2342]">{stat.value}</p>
                  <p className="text-xs text-slate-600 font-semibold mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {programData.learningFormat && (
          <section className="py-8 md:py-12 px-6 bg-[#f6f8fb]">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Learning Experience</h2>
                <div className="w-24 h-1 bg-[#FF7A00] mx-auto mb-4" />
                <p className="text-slate-600 text-lg">Structured live learning with mentor support</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 shadow-lg border-l-4 border-[#0A2342]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-[#0A2342] rounded-full p-3"><Layers3 className="w-6 h-6 text-white" /></div>
                    <h3 className="font-bold text-slate-900 text-lg">Learning Mode</h3>
                  </div>
                  <p className="text-slate-700 text-sm">{programData.learningFormat.mode}</p>
                </div>

                <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 shadow-lg border-l-4 border-[#FF7A00]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-[#FF7A00] rounded-full p-3"><Users className="w-6 h-6 text-white" /></div>
                    <h3 className="font-bold text-slate-900 text-lg">Batch Size</h3>
                  </div>
                  <p className="text-slate-700 text-sm">{programData.learningFormat.groupSize}</p>
                </div>

                <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 shadow-lg border-l-4 border-[#14345d]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-[#14345d] rounded-full p-3"><BadgeCheck className="w-6 h-6 text-white" /></div>
                    <h3 className="font-bold text-slate-900 text-lg">Community Access</h3>
                  </div>
                  <p className="text-slate-700 text-sm">{programData.learningFormat.communityAccess}</p>
                </div>

                <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 shadow-lg border-l-4 border-[#d46300]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-[#d46300] rounded-full p-3"><Clock3 className="w-6 h-6 text-white" /></div>
                    <h3 className="font-bold text-slate-900 text-lg">Session Duration</h3>
                  </div>
                  <p className="text-slate-700 font-semibold mb-2">{programData.learningFormat.liveSessionDuration}</p>
                  <p className="text-slate-600 text-sm">{programData.learningFormat.additionalSupport}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {availableSections.length > 0 && (
          <section className="py-8 px-6 bg-[#f6f8fb]">
            <div className="max-w-7xl mx-auto lg:hidden mb-4">
              <h3 className="text-sm font-bold text-slate-900 mb-3">Explore Program Sections</h3>
              <div className="grid grid-cols-2 gap-2">
                {availableSections.map((section) => (
                  <button
                    key={`mobile-${section.key}`}
                    onClick={() => setActiveFeatureSection(section.key)}
                    className={`text-left px-3 py-2 rounded-xl text-sm font-semibold transition-all border ${activeFeatureSection === section.key ? 'bg-[#0A2342] text-white border-[#0A2342] shadow-md sidebar-active-pulse' : 'bg-white text-slate-700 border-slate-200 hover:border-[#FF7A00]/40 hover:shadow-sm'}`}
                  >
                    <span className="mr-2">{section.icon}</span>{section.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-4">
              <aside className="hidden lg:block lg:col-span-1 bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
                <h3 className="text-sm font-bold text-slate-900 mb-1">Explore Program Sections</h3>
                <p className="text-xs text-slate-500 mb-3">Choose one section to focus on</p>
                <div className="space-y-2">
                  {availableSections.map((section) => (
                    <button
                      key={section.key}
                      onClick={() => setActiveFeatureSection(section.key)}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold transition-all border ${activeFeatureSection === section.key ? 'bg-gradient-to-r from-[#0A2342] to-[#1a3a5f] text-white border-[#0A2342] shadow-md sidebar-active-pulse' : 'text-slate-700 border-slate-200 hover:border-[#FF7A00]/40 hover:bg-orange-50/40 hover:shadow-sm'}`}
                    >
                      <span className="mr-2">{section.icon}</span>{section.label}
                    </button>
                  ))}
                </div>
              </aside>

              <div className="lg:col-span-3 col-span-1 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                {activeFeatureSection && (
                  <div className="mb-4 inline-flex items-center gap-2 bg-[#0A2342]/5 text-[#0A2342] border border-[#0A2342]/15 px-3 py-1.5 rounded-full text-xs font-bold">
                    <span>{availableSections.find((section) => section.key === activeFeatureSection)?.icon}</span>
                    <span>{availableSections.find((section) => section.key === activeFeatureSection)?.label}</span>
                  </div>
                )}
                <div key={activeFeatureSection || 'empty'} className="sidebar-content-panel section-switch-anim">
                  {renderSidebarContent()}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer handleNavClick={handleNavClick} />
    </div>
  )
}
