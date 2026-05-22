import { Fragment } from "react";
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
    border: "#1d4b7a",
    iconBg: "#e9f1fb",
    iconColor: "#1d4b7a",
    labelColor: "#1d4b7a",
    labelBg: "#e9f1fb",
  },
];

export default function ProgramsSection() {
  return (
    <section className="py-14 md:py-16 bg-[#f6f8fb] border-t-2 border-[#0A2342]">
      <div className="px-6 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2342] mb-3">
            How Venura&apos;s <span className="text-[#FF7A00]">3-Layer</span> Program Works
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#FF7A00] to-transparent mx-auto mb-4" />
          <p className="text-[#0A2342]/60 text-lg max-w-2xl mx-auto">
            Move from fundamentals to internship readiness through three structured learning stages.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col items-stretch justify-center gap-4 md:flex-row md:gap-2">
          {programs.map((program, idx) => {
            const Icon = program.icon;
            return (
              <Fragment key={idx}>
                <div
                  className="relative flex flex-col flex-1 p-8 transition-all duration-300 bg-white shadow-md rounded-3xl hover:shadow-xl hover:-translate-y-1 group"
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
                    className="flex items-center justify-center mb-5 transition-transform duration-300 w-14 h-14 rounded-2xl group-hover:scale-110"
                    style={{ background: program.iconBg }}
                  >
                    <Icon className="w-7 h-7" style={{ color: program.iconColor }} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#0A2342] mb-1">{program.title}</h3>

                  {/* Desc */}
                  <p className="mb-5 text-sm font-medium" style={{ color: program.border }}>{program.desc}</p>

                  {/* Divider */}
                  <div className="h-px mb-5 bg-gray-100" />

                  {/* Points */}
                  <ul className="flex-grow space-y-3">
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
                  <div className="pt-4 mt-6 border-t border-gray-100">
                    <span
                      className="inline-block px-3 py-1 text-xs font-semibold rounded-full"
                      style={{ background: program.iconBg, color: program.iconColor }}
                    >
                      {program.category}
                    </span>
                  </div>
                </div>

                {/* Arrow between cards */}
                {idx < programs.length - 1 && (
                  <div className="items-center justify-center flex-shrink-0 hidden px-1 md:flex">
                    <span className="inline-flex items-center justify-center min-w-14 h-11 px-3 rounded-xl border border-[#FF7A00]/35 bg-[#FFF3E8] text-2xl font-black tracking-tight text-[#FF7A00] shadow-sm">
                      &gt;&gt;
                    </span>
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-14">
          <a
            href="https://venuratech.com/dashboard/student/login"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0A2342] hover:bg-[#14345d] text-white font-bold px-12 py-4 rounded-2xl text-lg shadow-lg transition-all duration-300 hover:shadow-[#0A2342]/30 hover:shadow-xl hover:-translate-y-0.5"
          >
            Apply Now →
          </a>
        </div>
      </div>
    </section>
  );
}

