import { Button } from "./ui/button";
import AnimatedCounter from "./AnimatedCounter";

export default function CTASection() {
  const stats = [
    { value: "10K+", label: "Active Learners", icon: "👥" },
    { value: "250+", label: "Expert Mentors", icon: "🎓" },
    { value: "98%", label: "Success Rate", icon: "🎯" },
    { value: "120+", label: "Industry Partners", icon: "🤝" },
  ];

  return (
    <section className="relative overflow-hidden border-t-2 border-[#0A2342] py-14 text-white md:py-16">
      <div className="absolute inset-0 bg-[linear-gradient(130deg,#061528_0%,#0A2342_42%,#123861_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>
      <div className="pointer-events-none absolute -left-20 top-12 h-56 w-56 rounded-full bg-[#FF7A00]/14 blur-3xl" />
      <div className="pointer-events-none absolute right-[-80px] top-12 h-64 w-64 rounded-full bg-[#FF7A00]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="rounded-[30px] border border-white/20 bg-white/[0.06] p-6 shadow-[0_28px_70px_-36px_rgba(0,0,0,0.6)] backdrop-blur-xl md:p-8 lg:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div>
              <p className="inline-flex rounded-full border border-white/25 bg-white/[0.08] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#ffd8b8]">
                Enrolment
              </p>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight md:text-4xl">
                Start Your <span className="text-[#FF7A00]">Journey</span> with
                Venura
              </h2>
              <p className="mt-4 max-w-xl text-base text-slate-100 md:text-lg">
                Limited seats • Rolling cohorts. Get your personalized roadmap
                after applying.
              </p>

              <ul className="mt-6 space-y-3 text-slate-100/95">
                <li>
                  • Three-level structured learning with dedicated mentor
                  support
                </li>
                <li>• Skill, project, and internship certifications</li>
                <li>• Internship pathways with startup and NGO partners</li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  className="rounded-xl bg-white px-8 py-4 font-semibold text-[#0A2342] shadow-lg hover:bg-slate-100"
                  onClick={() =>
                    window.open(
                      "https://venuratech.com/dashboard/student/login",
                      "_blank",
                    )
                  }>
                  Apply Now
                </Button>

                <Button
                  variant="outline"
                  className="rounded-xl border border-white/40 bg-white/[0.10] px-8 py-4 font-semibold text-white hover:bg-white/[0.18]"
                  onClick={() =>
                    document
                      .getElementById("learning-paths")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }>
                  View Programs
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-5 lg:pl-3">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/25 bg-white/[0.10] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.16]">
                  <div className="mb-3 text-4xl">{stat.icon}</div>
                  <div className="mb-1 text-3xl font-bold text-[#FF7A00]">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={
                        stat.value.includes("K")
                          ? "K+"
                          : stat.value.includes("%")
                            ? "%"
                            : "+"
                      }
                    />
                  </div>
                  <div className="text-sm text-slate-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
