import React from 'react'
import { ChevronsRight } from 'lucide-react'

export default function LearningPyramidSection() {
  const levels = [
    {
      level: "Level 1 — Foundation",
      title: "Basics & Mini Projects",
      duration: "4 weeks • Skill Certificate",
      color: "border-red-400 bg-red-50",
      dot: "bg-red-400",
      hoverShadow: "hover:shadow-red-400/30",
      hoverBorder: "hover:border-red-500",
      points: [
        "Core concepts & tools",
        "Weekly check-ins",
        "Starter portfolio piece",
      ],
    },
    {
      level: "Level 2 — Builder",
      title: "Mentor Projects",
      duration: "4–6 weeks • Major Project • Evaluation",
      color: "border-[#FF7A00] bg-orange-50",
      dot: "bg-[#FF7A00]",
      hoverShadow: "hover:shadow-[#FF7A00]/30",
      hoverBorder: "hover:border-[#FF7A00]",
      points: [
        "End-to-end app or case study",
        "Code / Design reviews",
        "Demo day",
      ],
    },
    {
      level: "Level 3 — Pro-Intern",
      title: "Internship Tasks",
      duration: "4–6 weeks • Real Tasks • Internship",
      color: "border-green-400 bg-green-50",
      dot: "bg-green-400",
      hoverShadow: "hover:shadow-green-400/30",
      hoverBorder: "hover:border-green-500",
      points: [
        "Work with startups / NGOs",
        "Mentor feedback",
        "Portfolio presentation",
      ],
    },
  ]

  return (
    <section className="py-16 px-6 bg-white border-t-2 border-[#0A2342]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2342] mb-2">
            FutureX <span className="text-[#FF7A00]">3-Layer</span> Learning Pyramid
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#FF7A00] to-transparent mx-auto mb-4"></div>
          <p className="text-[#0A2342]/70 text-lg">
            3 progressive levels, each lasting 4–6 weeks and ending with a tangible deliverable.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6">
          {levels.map((item, index) => (
            <React.Fragment key={index}>
              <div
                className={`flex-1 max-w-sm group rounded-3xl border-2 p-8 shadow-md bg-white ${item.color} hover:shadow-2xl ${item.hoverShadow} hover:-translate-y-2 ${item.hoverBorder} transition-all duration-300 cursor-pointer`}
              >
                {/* Level Header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className={`w-3 h-3 rounded-full ${item.dot} group-hover:scale-125 transition-transform duration-300`} />
                  <span className="text-sm font-semibold text-[#0A2342]/70 group-hover:text-[#FF7A00] transition-colors duration-300">
                    {item.level}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#0A2342] group-hover:text-[#FF7A00] transition-colors duration-300 mb-2">
                  {item.title}
                </h3>

                {/* Duration */}
                <p className="text-[#0A2342]/70 group-hover:text-[#0A2342] transition-colors duration-300 mb-6">{item.duration}</p>

                {/* Points */}
                <ul className="space-y-3">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#0A2342]/80 group-hover:text-[#0A2342] transition-colors duration-300">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Arrows between cards (hidden on mobile, shown on md+) */}
              {index === 0 && (
                <div className="hidden md:flex items-center flex-shrink-0 gap-2">
                  <ChevronsRight className="text-orange-300" size={40} strokeWidth={2.5} />
                  <ChevronsRight className="text-[#FF7A00]" size={40} strokeWidth={2.5} />
                </div>
              )}
              {index === 1 && (
                <div className="hidden md:flex items-center flex-shrink-0 gap-2">
                  <ChevronsRight className="text-green-300" size={40} strokeWidth={2.5} />
                  <ChevronsRight className="text-green-500" size={40} strokeWidth={2.5} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
