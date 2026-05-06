import React from "react";
import { BookOpen, Award, Briefcase } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    label: "Level 1",
    title: "Foundation Program",
    desc: "4–8 weeks • Foundation Project • Certificate",
    category: "Foundation",
    points: [
      "Build your fundamental knowledge base",
      "Weekly mentor check-ins and progress tracking",
      "Complete Foundation Project for your portfolio",
    ],
    border: "#FF7A00",
    iconBg: "#FFF3E8",
    iconColor: "#FF7A00",
    labelColor: "#FF7A00",
    labelBg: "#FFF3E8",
  },
  {
    icon: Briefcase,
    label: "Level 2",
    title: "Builder Program",
    desc: "4–6 weeks • Intermediate Project • Evaluation",
    category: "Builder",
    points: [
      "Apply concepts with hands-on projects",
      "Receive expert code reviews and guidance",
      "Develop Intermediate Project with best practices",
    ],
    border: "#0A2342",
    iconBg: "#E8EDF4",
    iconColor: "#0A2342",
    labelColor: "#0A2342",
    labelBg: "#E8EDF4",
  },
  {
    icon: Award,
    label: "Level 3",
    title: "Pro-Intern Program",
    desc: "4–8 weeks • Advanced & Capstone Projects • Internship",
    category: "Pro-Intern",
    points: [
      "Master advanced concepts and real-world applications",
      "Complete Advanced Project and Capstone Project",
      "Gain hands-on internship experience with certificate",
    ],
    border: "#22c55e",
    iconBg: "#EDFBF3",
    iconColor: "#16a34a",
    labelColor: "#16a34a",
    labelBg: "#EDFBF3",
  },
];

export default function ProgramsSection() {
  return (
    <section className="py-14 md:py-16 bg-white border-t-2 border-[#0A2342]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2342] mb-3">
            FutureX <span className="text-[#FF7A00]">3-Layer</span> Learning Pyramid
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#FF7A00] to-transparent mx-auto mb-4" />
          <p className="text-[#0A2342]/60 text-lg max-w-2xl mx-auto">
            3 progressive levels, each lasting 4–6 weeks and ending with a tangible deliverable.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-2">
          {programs.map((program, idx) => {
            const Icon = program.icon;
            return (
              <React.Fragment key={idx}>
                <div
                  className="relative bg-white rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col flex-1 group"
                  style={{ border: `2px solid ${program.border}` }}
                >
                  {/* Level badge */}
                  <span
                    className="absolute -top-3.5 left-8 text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: program.labelBg, color: program.labelColor, border: `1px solid ${program.border}` }}
                  >
                    {program.label}
                  </span>

                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: program.iconBg }}
                  >
                    <Icon className="w-7 h-7" style={{ color: program.iconColor }} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#0A2342] mb-1">{program.title}</h3>

                  {/* Desc */}
                  <p className="text-sm font-medium mb-5" style={{ color: program.border }}>{program.desc}</p>

                  {/* Divider */}
                  <div className="h-px bg-gray-100 mb-5" />

                  {/* Points */}
                  <ul className="space-y-3 flex-grow">
                    {program.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#0A2342]/75 text-sm">
                        <span
                          className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                          style={{ background: program.iconBg, color: program.iconColor }}
                        >
                          ✓
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>

                  {/* Category tag */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <span
                      className="inline-block text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ background: program.iconBg, color: program.iconColor }}
                    >
                      {program.category}
                    </span>
                  </div>
                </div>

                {/* Arrow between cards */}
                {idx < programs.length - 1 && (
                  <div className="hidden md:flex items-center justify-center flex-shrink-0 px-1">
                    <span className="inline-flex items-center justify-center min-w-14 h-11 px-3 rounded-xl border border-[#FF7A00]/35 bg-[#FFF3E8] text-2xl font-black tracking-tight text-[#FF7A00] shadow-sm">
                      &gt;&gt;
                    </span>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-14">
          <a
            href="https://forms.gle/DyDigMebuEbwED347"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF7A00] hover:bg-[#ff8f2a] text-white font-bold px-12 py-4 rounded-2xl text-lg shadow-lg transition-all duration-300 hover:shadow-[#FF7A00]/30 hover:shadow-xl hover:-translate-y-0.5"
          >
            Apply Now →
          </a>
        </div>
      </div>
    </section>
  );
}

