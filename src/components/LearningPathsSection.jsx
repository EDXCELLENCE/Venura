import React from 'react'
import { useNavigate } from 'react-router-dom'

const paths = [
  {
    title: "AI & ML",
    desc: "Artificial Intelligence & Machine Learning",
    path: "/programs/ai-ml",
    image: null,
    tag: "Trending",
    tagColor: "#7c3aed",
    gradient: "from-purple-500 to-purple-800",
  },
  {
    title: "Data Science",
    desc: "Data Analysis & Visualization",
    path: "/programs/data-science",
    image: null,
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
    image: null,
    tag: "Industry Favourite",
    tagColor: "#0A2342",
    gradient: "from-blue-500 to-blue-800",
  },
  {
    title: "Cybersecurity",
    desc: "Information Security & Ethical Hacking",
    path: "/programs/cybersecurity",
    image: null,
    tag: "High Demand",
    tagColor: "#dc2626",
    gradient: "from-red-500 to-red-800",
  },
  {
    title: "Python",
    desc: "Python Programming & Backend",
    path: "/programs/python",
    image: null,
    tag: "Best for Beginners",
    tagColor: "#0ea5a0",
    gradient: "from-teal-500 to-cyan-700",
  },
]

export default function LearningPathsSection() {
  const navigate = useNavigate()

  return (
    <section id="learning-paths" className="py-14 md:py-16 px-6 bg-white border-t-2 border-[#0A2342]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
            Popular <span className="text-[#FF7A00]">Learning Paths</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#FF7A00] to-transparent mx-auto mb-4" />
          <p className="text-slate-600 text-lg">
            Industry-aligned programs designed for real-world career outcomes.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paths.map((path, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border-2 border-slate-100 hover:border-[#FF7A00] shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group relative"
            >
              {/* Coming Soon Overlay */}
              {path.comingSoon && (
                <div className="absolute inset-0 bg-slate-900/50 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl">
                  <span className="bg-[#FF7A00] text-white font-bold px-6 py-3 rounded-xl text-lg">
                    Coming Soon
                  </span>
                </div>
              )}

              {/* Image / Gradient Banner */}
              <div className="h-48 w-full overflow-hidden relative flex-shrink-0">
                {path.image ? (
                  <img
                    src={path.image}
                    alt={path.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${path.gradient} flex items-end p-5`}>
                    <span className="text-white/30 text-6xl font-black leading-none select-none">
                      {path.title.split(' ').map(w => w[0]).join('').slice(0, 3)}
                    </span>
                  </div>
                )}
                {/* Tag badge */}
                <span
                  className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full shadow"
                  style={{ background: path.tagColor }}
                >
                  {path.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-slate-900 mb-1">{path.title}</h3>
                <p className="text-sm text-slate-500 mb-4">{path.desc}</p>

                <div className="mt-auto">
                  <button
                    className="flex items-center gap-1 text-[#FF7A00] font-semibold text-sm hover:gap-2 transition-all duration-200"
                    onClick={() => !path.comingSoon && navigate(path.path)}
                  >
                    {path.comingSoon ? 'Notify Me' : 'Start Learning'} →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
