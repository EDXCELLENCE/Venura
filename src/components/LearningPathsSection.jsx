
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const paths = [
  {
    title: "AI & ML",
    desc: "Artificial Intelligence & Machine Learning",
    path: "/programs/ai-ml",
    image: "/image copy.png",
    tag: "Trending",
    tagColor: "#7c3aed",
    gradient: "from-purple-500 to-purple-800",
  },
  {
    title: "Data Science",
    desc: "Data Analysis & Visualization",
    path: "/programs/data-science",
    image: "/image copy.png",
    tag: "Most Popular",
    tagColor: "#FF7A00",
    gradient: "from-orange-400 to-orange-600",
  },
  {
    title: "Full-Stack Web",
    desc: "Modern Web Development",
    path: "/programs/full-stack",
    image: "/fullstack.png",
    tag: "Best for Freshers",
    tagColor: "#16a34a",
    gradient: "from-green-500 to-green-800",
  },
  {
    title: "Java Backend",
    desc: "Enterprise Backend Systems",
    path: "/programs/java-backend",
    image: "/image copy.png",
    tag: "Industry Favourite",
    tagColor: "#0A2342",
    gradient: "from-blue-500 to-blue-800",
  },
  {
    title: "Cybersecurity",
    desc: "Information Security & Ethical Hacking",
    path: "/programs/cybersecurity",
    image: "/image copy.png",
    tag: "High Demand",
    tagColor: "#dc2626",
    gradient: "from-red-500 to-red-800",
  },
  {
    title: "Python",
    desc: "Python Programming & Backend",
    path: "/programs/python",
    image: "/image copy.png",
    tag: "Best for Beginners",
    tagColor: "#0ea5a0",
    gradient: "from-teal-500 to-cyan-700",
  },
]

export default function LearningPathsSection() {
  const navigate = useNavigate()
  const scrollerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    const updateActiveFromScroll = () => {
      const firstCard = el.querySelector('article')
      if (!firstCard) return

      const firstCardWidth = firstCard.getBoundingClientRect().width
      const style = window.getComputedStyle(el.firstElementChild || el)
      const gap = parseFloat(style.columnGap || style.gap || '0') || 0
      const step = firstCardWidth + gap
      const nextIndex = Math.round(el.scrollLeft / step)
      const clamped = Math.max(0, Math.min(paths.length - 1, nextIndex))
      setActiveIndex(clamped)
    }

    updateActiveFromScroll()
    el.addEventListener('scroll', updateActiveFromScroll, { passive: true })
    window.addEventListener('resize', updateActiveFromScroll)

    return () => {
      el.removeEventListener('scroll', updateActiveFromScroll)
      window.removeEventListener('resize', updateActiveFromScroll)
    }
  }, [])

  return (
    <section id="learning-paths" className="relative px-6 py-14 md:py-16 bg-[linear-gradient(180deg,#f8fbff_0%,#f4f8fd_45%,#f6f8fb_100%)] border-t-2 border-[#0A2342] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(10,35,66,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(10,35,66,0.05) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF7A00]">Learning Journey</p>
          <h2 className="mt-3 text-3xl md:text-[42px] md:leading-[1.05] font-extrabold text-[#0A2342]">
            Popular <span className="text-[#FF7A00]">Learning Paths</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base md:text-lg">
            Swipe through focused tracks and choose the one that matches your next career move.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
            <span className="rounded-full border border-[#0A2342]/10 bg-white px-3 py-1 text-xs font-semibold text-slate-700">6 Career Tracks</span>
            <span className="rounded-full border border-[#0A2342]/10 bg-white px-3 py-1 text-xs font-semibold text-slate-700">Mentor Guided</span>
            <span className="rounded-full border border-[#0A2342]/10 bg-white px-3 py-1 text-xs font-semibold text-slate-700">Project Focused</span>
          </div>
          <button
            className="mt-6 rounded-full bg-[#0A2342] px-6 py-3 text-sm font-semibold text-white hover:bg-[#14345d] transition-colors"
            onClick={() => navigate('/programs')}
          >
            View All Programs
          </button>
          <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-slate-400">Swipe or scroll to explore tracks</p>
        </div>

        <div ref={scrollerRef} className="relative z-10 mt-10 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-8 bg-gradient-to-r from-[#f8fbff] to-transparent" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-8 bg-gradient-to-l from-[#f8fbff] to-transparent" />
          <div className="pointer-events-none absolute left-0 right-0 top-[92px] hidden h-[2px] bg-gradient-to-r from-transparent via-[#0A2342]/25 to-transparent md:block" />

          <div className="flex min-w-max snap-x snap-mandatory gap-5 pr-4">
            {paths.map((path, index) => (
              <article
                key={index}
                className="group w-[300px] md:w-[332px] snap-start overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_10px_30px_-22px_rgba(2,22,49,0.45)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#FF7A00]/45 hover:shadow-[0_20px_40px_-24px_rgba(2,22,49,0.55)]"
              >
                <div className={`relative h-36 bg-gradient-to-br ${path.gradient}`}>
                  {path.image ? (
                    <img
                      src={path.image}
                      alt={path.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-end justify-between p-5">
                      <span className="text-5xl font-black leading-none text-white/30">
                        {path.title.split(' ').map((w) => w[0]).join('').slice(0, 3)}
                      </span>

                    </div>
                  )}
                  <span
                    className="absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-bold text-white shadow-md"
                    style={{ background: path.tagColor }}
                  >
                    {path.tag}
                  </span>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-slate-900">{path.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{path.desc}</p>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Career Track</span>
                    <button
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#FF7A00]/35 bg-[#fff5eb] px-4 py-2 text-sm font-semibold text-[#d76100] hover:bg-[#ffe8d4] transition-colors"
                      onClick={() => !path.comingSoon && navigate(path.path)}
                    >
                      {path.comingSoon ? 'Notify Me' : 'Start Learning'}
                      {!path.comingSoon && <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="relative z-10 mt-4 flex items-center justify-center gap-2">
          {paths.map((path, index) => {
            const active = index === activeIndex
            return (
              <button
                key={`${path.title}-dot`}
                type="button"
                aria-label={`Go to ${path.title}`}
                onClick={() => {
                  const el = scrollerRef.current
                  if (!el) return
                  const firstCard = el.querySelector('article')
                  if (!firstCard) return
                  const firstCardWidth = firstCard.getBoundingClientRect().width
                  const style = window.getComputedStyle(el.firstElementChild || el)
                  const gap = parseFloat(style.columnGap || style.gap || '0') || 0
                  const step = firstCardWidth + gap
                  el.scrollTo({ left: step * index, behavior: 'smooth' })
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${active ? 'w-7 bg-[#FF7A00]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'}`}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
