import { motion } from 'framer-motion'
import { BadgeCheck, HelpCircle, Laptop, Users } from 'lucide-react'

export default function WhyVenuraSection() {
  const features = [
    {
      icon: HelpCircle,
      title: 'AI-Powered Smart Learning',
      desc: 'Personalized learning paths and performance analytics that help you close skill gaps faster and stay interview-ready.',
    },
    {
      icon: Laptop,
      title: 'Career Navigation System',
      desc: 'Role-based roadmaps aligned to internships and entry-level job tracks with clear weekly milestones.',
    },
    {
      icon: Users,
      title: 'Mentorship Intelligence',
      desc: 'Continuous mentor feedback on code, communication, and problem-solving to improve delivery confidence.',
    },
    {
      icon: BadgeCheck,
      title: 'Project-Driven Growth',
      desc: 'Build and ship deployable projects from idea to product, creating a stronger portfolio for hiring.',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-12 md:py-16 lg:py-20 text-[#0A2342] border-t border-[#d9e0ea]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/4 h-52 w-52 rounded-full bg-[#FF7A00]/12 blur-3xl" />
        <div className="absolute -bottom-16 right-1/4 h-56 w-56 rounded-full bg-[#0A2342]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mb-8 text-center md:mb-10 lg:mb-12"
        >
          <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-[1.12] tracking-[-0.02em] text-[#0A2342] md:text-4xl">
            Why <span className="text-[#FF7A00]">Venura</span> Stands Out
          </h2>
          <div className="mx-auto mt-4 h-1 w-28 bg-[#FF7A00]" />
          <p className="mx-auto mt-5 max-w-4xl text-lg leading-relaxed text-[#0A2342]/80 md:text-[20px]">
            We merge AI-powered learning, mentorship, and real-world experience to build future-ready
            professionals.
          </p>
        </motion.div>

        <div className="grid items-start gap-8 lg:items-center lg:gap-10 lg:grid-cols-[1.02fr_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative px-2 pt-2 md:px-4 md:pt-4">
              <div className="relative overflow-hidden rounded-[32px] border border-[#d9e0ea] bg-white shadow-[0_32px_70px_-42px_rgba(10,35,66,0.55)]">
                <img
                  src="/image copy.png"
                  alt="Students building projects in a collaborative environment"
                  className="h-[360px] w-full object-cover md:h-[420px] lg:h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06152b]/86 via-[#06152b]/18 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7 md:pr-[120px]">
                  <h3 className="text-[20px] font-black italic leading-none text-white whitespace-nowrap md:text-[18px] lg:text-[22px]">
                    Real Development Environment
                  </h3>
                  <div className="mt-4 flex flex-nowrap gap-2 overflow-x-auto text-xs font-semibold [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    <span className="rounded-full bg-[#FF7A00] px-4 py-2 text-white shadow-sm whitespace-nowrap">Live Coding</span>
                    <span className="rounded-full bg-[#FF7A00] px-4 py-2 text-white shadow-sm whitespace-nowrap">Code Reviews</span>
                    <span className="rounded-full bg-[#FF7A00] px-4 py-2 text-white shadow-sm whitespace-nowrap">Portfolio Building</span>
                  </div>
                </div>
              </div>

              <div className="absolute left-0 top-0 hidden w-[258px] rounded-[22px] border border-[#d9e0ea] bg-white px-4 py-4 text-xs text-[#0A2342]/75 shadow-[0_18px_36px_-20px_rgba(10,35,66,0.35)] md:block">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF7A00] text-sm font-bold text-white">
                    AJ
                  </div>
                  <div>
                    <p className="text-[13px] font-extrabold text-[#0A2342]">Alex Johnson</p>
                    <p className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#FF7A00]">Senior Engineer</p>
                  </div>
                </div>
                <p className="mt-4 text-[13px] italic leading-[1.6] text-[#0A2342]/78">
                  "Our interns consistently ship production code with the practical skills from this program."
                </p>
              </div>

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <h3 className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.015em] text-[#0A2342] md:text-[34px]">
              Built for Measurable Career Outcomes
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#0A2342]/75 md:mt-4 md:text-[15px]">
              Our training programs bridge academic learning and real-world requirements, helping you become job-ready with confidence.
            </p>

            <div className="mt-7 space-y-3">
              {features.map((item, idx) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                    className="rounded-2xl border border-[#d9e0ea] bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 rounded-xl bg-[#FF7A00]/12 p-2.5 text-[#FF7A00]">
                        <Icon size={18} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-[#0A2342]">{item.title}</h4>
                        <p className="mt-1 text-sm text-[#0A2342]/70">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
