import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Briefcase, Clock3, Code2, FolderKanban, IndianRupee, Rocket, Sparkles, Star, TrendingUp, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime = null
    let animationId = null

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = (timestamp - startTime) / duration
      
      if (progress < 1) {
        setCount(Math.floor(target * progress))
        animationId = requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [target, duration])

  const formatNumber = (num) => {
    if (suffix === 'K+') return `${(num / 1000).toFixed(0)}K+`
    if (suffix === '%') return `${num}%`
    if (suffix === '+') return `${String(num).padStart(2, '0')}+`
    return num
  }

  return <>{formatNumber(count)}</>
}

export default function ProgramsPage() {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
const [activeFilter, setActiveFilter] = useState('All')
const heroPillsRef = useRef(null)
const [cursorGlow, setCursorGlow] = useState({ x: 0, y: 0 })
const [heroWordIndex, setHeroWordIndex] = useState(0)

const heroPills = [
{ text: 'Industry Certification', icon: Sparkles, color: 'from-emerald-400 to-cyan-400' },
{ text: 'Real Projects', icon: Code2, color: 'from-blue-400 to-indigo-400' },
{ text: 'Flexible Schedule', icon: Clock3, color: 'from-violet-400 to-purple-400' },
{ text: 'Expert Mentors', icon: Users, color: 'from-rose-400 to-pink-400' },
{ text: 'Career Launch', icon: Rocket, color: 'from-orange-400 to-red-400' },
{ text: 'Portfolio Ready', icon: FolderKanban, color: 'from-amber-400 to-yellow-400' },
]

const heroWords = ['Tech Career', 'AI - Journey', 'Web Development', 'Data Science', 'Cloud Computing']

useEffect(() => {
const slider = heroPillsRef.current

if (!slider || (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) {
return undefined
}

const isMobile = () => window.matchMedia('(max-width: 767px)').matches

if (!isMobile()) {
return undefined
}

let running = true
let frameId = null
const speed = 0.35
const loopWidth = slider.scrollWidth / 2

const tick = () => {
if (!running) return
slider.scrollLeft += speed
if (slider.scrollLeft >= loopWidth) {
slider.scrollLeft -= loopWidth
}
frameId = requestAnimationFrame(tick)
}

const stop = () => {
running = false
}

const start = () => {
if (running) return
running = true
frameId = requestAnimationFrame(tick)
}

frameId = requestAnimationFrame(tick)
slider.addEventListener('mouseenter', stop)
slider.addEventListener('mouseleave', start)
slider.addEventListener('touchstart', stop, { passive: true })
slider.addEventListener('touchend', start)

const onResize = () => {
if (!isMobile()) {
stop()
} else {
start()
}
}

window.addEventListener('resize', onResize)

return () => {
cancelAnimationFrame(frameId)
slider.removeEventListener('mouseenter', stop)
slider.removeEventListener('mouseleave', start)
slider.removeEventListener('touchstart', stop)
slider.removeEventListener('touchend', start)
window.removeEventListener('resize', onResize)
}
}, [])

useEffect(() => {
const intervalId = setInterval(() => {
setHeroWordIndex((current) => (current + 1) % heroWords.length)
}, 3000)

return () => clearInterval(intervalId)
}, [heroWords.length])

useEffect(() => {
const handleMouseMove = (event) => {
setCursorGlow({
x: (event.clientX / window.innerWidth) * 100,
y: (event.clientY / window.innerHeight) * 100,
})
}

window.addEventListener('mousemove', handleMouseMove)

return () => window.removeEventListener('mousemove', handleMouseMove)
}, [])

const handleNavClick = (e) => {
if (e) e.preventDefault()
setMobileMenuOpen(false)
}

const handleApplyNow = () => {
window.open('https://forms.gle/DyDigMebuEbwED347', '_blank')
}

const programs = [
{
title: 'AI & ML',
subtitle: 'Artificial Intelligence & Machine Learning',
desc: 'Build intelligent systems from scratch — train ML models, deploy GenAI apps, and work on real-world AI projects that employers value.',
image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1000&h=600&fit=crop&q=95',
duration: '3 months',
level: 'Advanced',
path: '/programs/ai-ml',
salary: '₹8–18 LPA',
placement: '92%',
bestFor: 'ML Engineers',
badge: 'Highest Salary',
badgeColor: 'bg-purple-600',
},
{
title: 'Data Science',
subtitle: 'Data Analysis & Visualization',
desc: 'Turn raw data into actionable insights using industry tools. Build dashboards, predictive models, and data-driven products.',
image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&h=600&fit=crop&q=95',
duration: '3 months',
level: 'Advanced',
path: '/programs/data-science',
salary: '₹6–14 LPA',
placement: '90%',
bestFor: 'Data Analysts',
badge: 'Most Popular',
badgeColor: 'bg-[#FF7A00]',
},
{
title: 'Full-Stack Web',
subtitle: 'Modern Web Development',
desc: 'Go from zero to deploying full-stack apps with React, Node.js, and databases. Build portfolio projects that get you hired.',
image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1000&h=600&fit=crop&q=95',
duration: '3 months',
level: 'Intermediate',
path: '/programs/full-stack',
salary: '₹5–12 LPA',
placement: '88%',
bestFor: 'Web Developers',
badge: 'Best for Freshers',
badgeColor: 'bg-green-600',
},
{
title: 'Java Backend',
subtitle: 'Enterprise Backend Systems',
desc: 'Master Spring Boot, REST APIs, and microservices — the stack powering Fortune 500 companies. Ideal for enterprise-track careers.',
image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1000&h=600&fit=crop&q=95',
duration: '3 months',
level: 'Advanced',
path: '/programs/java-backend',
salary: '₹6–15 LPA',
placement: '89%',
bestFor: 'Backend Engineers',
badge: 'Enterprise Track',
badgeColor: 'bg-blue-700',
},
{
title: 'Cybersecurity',
subtitle: 'Information Security & Ethical Hacking',
desc: 'Learn to think like an attacker. Hands-on labs in threat analysis, penetration testing, and security hardening.',
image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1000&h=600&fit=crop&q=95',
duration: '3 months',
level: 'Advanced',
path: '/programs/cybersecurity',
salary: '₹7–16 LPA',
placement: '87%',
bestFor: 'Security Analysts',
badge: 'High Demand',
badgeColor: 'bg-red-600',
},
{
title: 'Python',
subtitle: 'Python Programming & Backend',
desc: 'Start fast with Python — the most beginner-friendly yet powerful language. Build APIs, automate workflows, and enter tech confidently.',
image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=1000&h=600&fit=crop&q=95',
duration: '3 months',
level: 'Beginner',
path: '/programs/python',
salary: '₹4–10 LPA',
placement: '85%',
bestFor: 'Career Switchers',
badge: 'Best for Beginners',
badgeColor: 'bg-teal-600',
},
]

const filters = ['All', 'Beginner', 'Intermediate', 'Advanced']
const filtered = activeFilter === 'All' ? programs : programs.filter(p => p.level === activeFilter)

return (
<div className="w-full">
<Header
mobileMenuOpen={mobileMenuOpen}
setMobileMenuOpen={setMobileMenuOpen}
handleNavClick={handleNavClick}
handleLogoClick={() => setMobileMenuOpen(false)}
/>

<section
id="home"
aria-labelledby="hero-heading"
className="relative flex items-center justify-center overflow-hidden bg-gradient-to-t from-blue-50 via-transparent px-0 pt-20 md:px-6"
>
  <div className="pointer-events-none absolute inset-0 h-[80%]" aria-hidden="true">
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `
          linear-gradient(90deg, rgba(59, 130, 246, 0.35) 1px, transparent 1px),
    </div>
          linear-gradient(0deg, rgba(59, 130, 246, 0.35) 1px, transparent 1px)
        `,
        backgroundSize: '70px 70px',
        backgroundPosition: '0 0',
        mixBlendMode: 'multiply',
        opacity: 1,
      }}
    />
  </div>
  <div className="relative z-20 mx-auto w-full" style={{ paddingTop: 'calc(var(--site-header-offset, 4rem) + 1rem)' }}>
    <div className="relative overflow-hidden backdrop-blur-xl">
      <div className="absolute -inset-0.5 opacity-30 blur-sm" />

      <div className="relative overflow-hidden backdrop-blur-md">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${cursorGlow.x}% ${cursorGlow.y}%, rgba(56, 189, 248, 0.3) 0%, transparent 50%)`,
          }}
        />

        <div className="relative z-10 px-2 py-3 text-center md:px-8 md:py-12">
          <h1 className="group relative mx-auto w-fit overflow-hidden rounded-full px-0.5 py-0.5 text-center">
            <div className="animate-gradient-x absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500 bg-[length:200%_200%] opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10 rounded-full border border-white/30 bg-gradient-to-r from-white/95 via-blue-50/95 to-white/95 px-6 py-3 text-xl font-bold uppercase tracking-tight backdrop-blur-sm md:text-2xl">
              <span className="text-black">Learn With Purpose. Grow With Confidence.</span>
            </div>
            <div className="absolute inset-0 -z-10 rounded-full shadow-lg shadow-cyan-500/20 transition-shadow duration-500 group-hover:shadow-cyan-500/40" />
          </h1>

          <div
            ref={heroPillsRef}
            className="no-scrollbar mx-auto mt-10 mb-8 flex flex-nowrap items-center justify-start gap-3 overflow-x-auto px-2 py-2 md:flex-wrap md:justify-center md:gap-4 md:overflow-visible"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {heroPills.map((pill, index) => {
              const Icon = pill.icon

              return (
                <motion.div
                  key={`${pill.text}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="shrink-0"
                >
                  <div
                    className={`flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r px-5 py-3 text-sm font-medium text-white shadow-lg md:text-base ${pill.color}`}
                    role="note"
                  >
                    <Icon className="text-white" size={16} />
                    <span className="whitespace-nowrap">{pill.text}</span>
                    <Briefcase className="ml-1 text-white/50" size={12} />
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 px-2 text-4xl font-bold leading-tight tracking-tight text-gray-700 md:mb-8 md:text-5xl"
          >
            Launch your{' '}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-50 via-blue-50 to-violet-50 opacity-70 blur-xl" />
              <motion.span
                key={heroWordIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="animate-gradient-x relative bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text font-black text-transparent"
              >
                {heroWords[heroWordIndex]}
              </motion.span>
            </span>{' '}
            with real-world experience
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mb-10 max-w-4xl text-lg leading-relaxed tracking-wide text-slate-600 md:mb-12 md:text-xl"
          >
            Join 5,000+ students who transformed their careers with hands-on projects, expert mentorship,
            and industry-recognized certifications in cutting-edge technologies.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              { target: 10000, suffix: 'K+', label: 'Students Trained', color: 'text-cyan-400' },
              { target: 98, suffix: '%', label: 'Success Rate', color: 'text-emerald-400' },
              { target: 3, suffix: '+', label: 'Years of Excellence', color: 'text-violet-400' },
              { target: 50, suffix: '', label: 'Program', color: 'text-rose-400' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className={`mb-1 text-3xl font-bold md:text-4xl ${stat.color}`}>
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-700 md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>{`
    @keyframes gradient-x {
      0%,
      100% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
    }

    .animate-gradient-x {
      background-size: 200% 200%;
      animation: gradient-x 3s ease infinite;
    }

    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
  `}</style>
</section>

<section className="py-12 md:py-16 px-6 bg-[#f6f8fb] border-t-2 border-[#0A2342]">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-10">
<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Choose Your Learning Path</h2>
<div className="w-24 h-1 bg-[#FF7A00] mx-auto mb-4" />
<p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
Pick from 6+ in-demand domains. Each program is designed to make you industry-ready.
</p>

{/* Filter tabs */}
<div className="flex flex-wrap justify-center gap-2 mb-8">
{filters.map(f => (
<button
key={f}
onClick={() => setActiveFilter(f)}
className={`px-5 py-2 rounded-full font-semibold text-sm transition-all border-2 ${
activeFilter === f
? 'bg-[#0A2342] text-white border-[#0A2342]'
: 'bg-white text-slate-600 border-slate-200 hover:border-[#FF7A00] hover:text-[#FF7A00]'
}`}
>
{f}
</button>
))}
</div>

{/* Compare CTA */}
<Link
to="/programs/compare"
className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF7A00] to-[#ff8f2a] hover:from-[#e56d00] hover:to-[#FF7A00] text-white font-bold px-8 py-3.5 rounded-xl transition-all text-sm shadow-lg hover:shadow-xl shadow-orange-200"
>
⚖️ Compare Programs Side-by-Side
</Link>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
{filtered.map((program, index) => (
<div
key={index}
className="bg-white rounded-3xl border border-slate-200 hover:border-[#FF7A00] hover:border-2 shadow-sm overflow-hidden hover:shadow-xl transition-all flex flex-col relative group"
>
<div className="h-48 w-full overflow-hidden relative">
<img
src={program.image}
alt={`${program.title} - ${program.subtitle} program`}
className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
loading="lazy"
/>
{/* Badge */}
<div className={`absolute top-3 left-3 ${program.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow`}>
{program.badge}
</div>
<div className="absolute bottom-3 left-3 right-3 flex gap-2">
<div className="flex items-center gap-1 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
<Clock3 className="w-3.5 h-3.5 text-[#FF7A00]" />
<span className="text-xs font-bold text-[#0A2342]">{program.duration}</span>
</div>
<div className="flex items-center gap-1 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
<TrendingUp className="w-3.5 h-3.5 text-[#FF7A00]" />
<span className="text-xs font-bold text-[#0A2342]">{program.level}</span>
</div>
</div>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#FF7A00] transition-colors">{program.title}</h3>
<p className="text-sm text-[#FF7A00] font-semibold mb-3">{program.subtitle}</p>
<p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">{program.desc}</p>

{/* Stats row */}
<div className="grid grid-cols-3 gap-2 mb-4 bg-slate-50 rounded-xl p-3">
<div className="text-center">
<div className="flex items-center justify-center gap-0.5 text-[#FF7A00] font-bold text-sm">
<IndianRupee className="w-3 h-3" />
<span>{program.salary.replace('₹', '')}</span>
</div>
<p className="text-xs text-slate-500 mt-0.5">Avg Salary</p>
</div>
<div className="text-center border-x border-slate-200">
<div className="flex items-center justify-center gap-1 text-green-600 font-bold text-sm">
<Star className="w-3 h-3 fill-green-600" />
<span>{program.placement}</span>
</div>
<p className="text-xs text-slate-500 mt-0.5">Placement</p>
</div>
<div className="text-center">
<div className="flex items-center justify-center gap-1 text-blue-600 font-bold text-sm">
<Users className="w-3 h-3" />
<span className="truncate text-xs">{program.bestFor}</span>
</div>
<p className="text-xs text-slate-500 mt-0.5">Best For</p>
</div>
<Link
to={program.path}
className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF7A00] to-[#ff8f2a] hover:from-[#e56d00] hover:to-[#FF7A00] text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 group/btn"
>
<span>View Details</span>
<ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
</Link>
</div>
</div>
</div>
))}
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16 px-6 bg-gradient-to-br from-[#0A2342] to-[#1a3a5f] border-t-2 border-[#0A2342]">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">Not Sure Which Program to Pick?</h2>
<p className="text-lg md:text-xl text-slate-200 mb-8">
We&apos;ll help you find the right fit — whether you&apos;re just starting out or switching careers.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button
onClick={handleApplyNow}
className="bg-[#FF7A00] hover:bg-[#e56d00] text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors duration-200 w-full sm:w-auto"
>
Enroll Now
</button>
<Link
to="/programs/compare"
className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors duration-200 border-2 border-white/30 hover:border-white/60 w-full sm:w-auto"
>
⚖️ Compare All Programs
</Link>
<Link
to="/faq"
className="text-slate-300 hover:text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 underline underline-offset-4 w-full sm:w-auto text-center"
>
Browse FAQs
</Link>
</div>
</div>
</section>

<Footer handleNavClick={handleNavClick} />
</div>
)
}
