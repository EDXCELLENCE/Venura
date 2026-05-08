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
    <section className="relative overflow-hidden border-t-2 border-[#0A2342] bg-[#f6f8fb] py-10 text-[#0A2342] md:py-12 lg:py-14">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_28%,rgba(66,121,255,0.08),transparent_34%),radial-gradient(circle_at_74%_62%,rgba(255,122,0,0.08),transparent_30%)]" />
        <div className="absolute left-[14%] top-[28%] h-1.5 w-1.5 rounded-full bg-[#7fa2ff]/70" />
        <div className="absolute left-[24%] top-[41%] h-1 w-1 rounded-full bg-[#7fa2ff]/60" />
        <div className="absolute right-[26%] top-[40%] h-1.5 w-1.5 rounded-full bg-[#7fa2ff]/65" />
        <div className="absolute right-[34%] top-[58%] h-1 w-1 rounded-full bg-[#7fa2ff]/55" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mb-7 text-center md:mb-8 lg:mb-9"
        >
          <h2 className="mx-auto max-w-4xl text-3xl font-extrabold leading-[1.14] text-slate-900 md:text-4xl">
            Why <span className="text-[#FF7A00]">Venura</span> Stands Out
          </h2>
          <div className="mx-auto mt-3 h-1 w-32 bg-gradient-to-r from-transparent via-[#FF7A00] to-transparent" />
          <p className="mx-auto mt-4 max-w-4xl text-base leading-relaxed text-[#0A2342]/70 md:text-xl">
            We merge AI-powered learning, mentorship, and real-world experience to build future-ready
            professionals.
          </p>
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-[1.02fr_1fr] lg:items-center lg:gap-9">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative px-2 pt-3 md:px-3 md:pt-4">
              <div className="relative overflow-hidden rounded-[24px] border border-[#d9e0ea] bg-white shadow-[0_26px_58px_-36px_rgba(10,35,66,0.6)]">
                <img
                  src="/image copy.png"
                  alt="Students building projects in a collaborative environment"
                  className="h-[350px] w-full object-cover md:h-[420px] lg:h-[470px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071931]/88 via-[#071931]/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7 md:pr-[120px]">
                  <h3 className="whitespace-nowrap text-[20px] font-black italic leading-none text-white md:text-[18px] lg:text-[22px]">
                    Real Development Environment
                  </h3>
                  <div className="mt-4 flex flex-nowrap gap-2 overflow-x-auto text-xs font-semibold [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    <span className="whitespace-nowrap rounded-full bg-[#FF7A00] px-4 py-2 text-white shadow-sm">Live Coding</span>
                    <span className="whitespace-nowrap rounded-full bg-[#FF7A00] px-4 py-2 text-white shadow-sm">Code Reviews</span>
                    <span className="whitespace-nowrap rounded-full bg-[#FF7A00] px-4 py-2 text-white shadow-sm">Portfolio Building</span>
                  </div>
                </div>
              </div>

              <div className="absolute -left-3 top-[-10px] hidden w-[250px] rounded-[18px] border border-[#ffbf80]/35 bg-[#0A2342]/95 px-4 py-4 text-xs text-white shadow-[0_22px_40px_-24px_rgba(10,35,66,0.72)] md:block">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF7A00] text-sm font-bold text-white">
                    AJ
                  </div>
                  <div>
                    <p className="text-[13px] font-extrabold text-white">Alex Johnson</p>
                    <p className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#ffc485]">Senior Engineer</p>
                  </div>
                </div>
                <p className="mt-4 text-[13px] italic leading-[1.6] text-white/85">
                  &ldquo;Our interns consistently ship production code with the practical skills from this program.&rdquo;
                </p>
              </div>

              <div className="absolute -bottom-4 right-[-4px] hidden w-[190px] rounded-[16px] bg-gradient-to-br from-[#0A2342] to-[#14355f] px-4 py-4 text-white shadow-[0_18px_36px_-18px_rgba(10,35,66,0.65)] md:block">
                <p className="text-[34px] font-black leading-none">03+</p>
                <p className="mt-2 text-[13px] font-semibold">Years of Excellence</p>
                <p className="mt-2 text-[11px] leading-relaxed text-white/80">Helping students transition into tech careers</p>
                <div className="mt-3 space-y-2 text-[10px]">
                  <div>
                    <div className="flex items-center justify-between text-white/85">
                      <span>Placement rate</span>
                      <span>92%</span>
                    </div>
                    <div className="mt-1 h-1.5 rounded-full bg-white/25">
                      <div className="h-full w-[92%] rounded-full bg-[#67e58c]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-white/85">
                      <span>Student satisfaction</span>
                      <span>98%</span>
                    </div>
                    <div className="mt-1 h-1.5 rounded-full bg-white/25">
                      <div className="h-full w-[98%] rounded-full bg-[#ffb14b]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <h3 className="text-3xl font-extrabold leading-[1.14] text-slate-900 md:text-4xl">
              Built for Measurable Career Outcomes
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#0A2342]/72 md:mt-4 md:text-[15px]">
              Our training programs bridge academic learning and real-world requirements, helping you become job-ready with confidence.
            </p>

            <div className="mt-7 space-y-3">
              {features.map((item, idx) => {
                const Icon = item.icon
                const panelStyles = [
                  'border-[#cfe0fb] bg-[#eaf4ff]',
                  'border-[#d7eadc] bg-[#edf9f0]',
                  'border-[#ead8f0] bg-[#f8effb]',
                  'border-[#f0e1ca] bg-[#fbf4e8]',
                ]
                const iconStyles = [
                  'bg-[#2f72ff] text-white',
                  'bg-[#29b36b] text-white',
                  'bg-[#bc55d5] text-white',
                  'bg-[#ef9635] text-white',
                ]

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                    className={`rounded-xl border p-4 shadow-[0_8px_22px_-18px_rgba(10,35,66,0.42)] ${panelStyles[idx]}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`mt-0.5 rounded-xl p-2.5 ${iconStyles[idx]}`}>
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
