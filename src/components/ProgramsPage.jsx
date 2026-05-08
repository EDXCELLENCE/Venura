import { useState } from 'react'
import { Clock3, TrendingUp, ArrowRight, IndianRupee, Users, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function ProgramsPage() {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
const [activeFilter, setActiveFilter] = useState('All')

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

<section className="relative pb-12 md:pb-16 px-6 bg-gradient-to-br from-[#0A2342] via-[#1a3a5f] to-[#0A2342] overflow-hidden" style={{ paddingTop: 'calc(var(--site-header-offset, 4rem) + 2rem)' }}>
<div className="absolute inset-0 opacity-10">
<div className="absolute top-20 left-10 w-72 h-72 bg-[#FF7A00] rounded-full blur-3xl" />
<div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF7A00] rounded-full blur-3xl" />
</div>
<div className="max-w-7xl mx-auto text-center relative z-10">
<div className="inline-block mb-4">
<span className="bg-[#FF7A00]/20 text-[#FF7A00] px-4 py-2 rounded-full text-sm font-semibold border border-[#FF7A00]/30">
6+ Industry-Aligned Programs
</span>
</div>
<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
Transform Your Career
<br />
<span className="text-[#FF7A00]">One Program at a Time</span>
</h1>
<p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
Master in-demand skills with hands-on projects, expert mentorship, and a proven learning framework
</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
{[
{ label: 'Programs', value: '6+' },
{ label: 'Success Rate', value: '95%' },
{ label: 'Avg. Duration', value: '3 Months' },
{ label: 'Career Support', value: '100%' },
].map((stat, index) => (
<div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
<p className="text-3xl font-bold text-[#FF7A00]">{stat.value}</p>
<p className="text-slate-300 text-sm mt-1">{stat.label}</p>
</div>
))}
</div>
</div>
</section>

<section className="py-12 md:py-16 px-6 bg-gradient-to-b from-slate-50 to-white border-t-2 border-[#0A2342]">
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
</div>

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
))}
</div>
</div>
</section>

<section className="py-12 md:py-16 px-6 bg-gradient-to-br from-[#0A2342] to-[#1a3a5f] border-t-2 border-[#0A2342]">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">Not Sure Which Program to Pick?</h2>
<p className="text-lg md:text-xl text-slate-200 mb-8">
We'll help you find the right fit — whether you're just starting out or switching careers.
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
