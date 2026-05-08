
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BadgeDollarSign,
  BadgeCheck,
  Briefcase,
  CalendarCheck,
  CheckCircle2,
  CircleDollarSign,
  GraduationCap,
  Layers3,
  Megaphone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { Button } from './ui/button'

const valuePillars = [
  {
    icon: Megaphone,
    title: 'Lead on campus',
    description: 'Run awareness, create community moments, and become the face of Venura in your college ecosystem.'
  },
  {
    icon: BadgeDollarSign,
    title: 'Earn through trusted referrals',
    description: 'Get a clean referral system that rewards verified enrollments instead of noisy affiliate spam.'
  },
  {
    icon: Briefcase,
    title: 'Build career proof',
    description: 'Turn outreach, leadership, and growth work into resume strength, portfolio evidence, and interview stories.'
  },
]

const tracks = [
  {
    title: 'Campus Ambassador',
    tone: 'Identity-driven',
    description: 'For student leaders who want visibility, recognition, and a stronger personal brand on campus.',
    bullets: ['Represent Venura in events and communities', 'Unlock certificates, recognition, and special access', 'Build leadership stories that actually matter'],
    accent: 'bg-[#0A2342] text-white'
  },
  {
    title: 'Refer & Earn',
    tone: 'Reward-driven',
    description: 'For students and alumni who want a simple, performance-based way to share Venura and earn.',
    bullets: ['Get your own referral code and assets', 'Track signups and conversions cleanly', 'Earn on successful verified enrollments'],
    accent: 'bg-[#FF7A00] text-[#0A2342]'
  }
]

const momentumStats = [
  { value: '01', label: 'Single application flow' },
  { value: '02', label: 'Two growth paths' },
  { value: '100%', label: 'Student-first positioning' },
]

const roleMoments = [
  {
    icon: Users,
    title: 'Community builder',
    description: 'Bring Venura into WhatsApp groups, clubs, societies, student circles, and peer recommendations.'
  },
  {
    icon: Layers3,
    title: 'Content amplifier',
    description: 'Use ready-made assets and your own content style to create awareness without sounding repetitive or salesy.'
  },
  {
    icon: CalendarCheck,
    title: 'Event activator',
    description: 'Support micro-events, webinars, info sessions, and campus touchpoints that create real interest.'
  },
  {
    icon: CircleDollarSign,
    title: 'Outcome driver',
    description: 'Track interest, influence decisions, and convert attention into verified enrollments and rewards.'
  },
]

const activationSteps = [
  {
    step: '01',
    title: 'Apply once',
    description: 'Tell us about your campus, reach, community involvement, and why you want to represent Venura.'
  },
  {
    step: '02',
    title: 'Get activated',
    description: 'Receive onboarding, brand assets, messaging support, and your referral setup.'
  },
  {
    step: '03',
    title: 'Drive influence',
    description: 'Promote programs through peer communities, student circles, events, and content.'
  },
  {
    step: '04',
    title: 'Earn and grow',
    description: 'Get recognized for impact, unlock rewards, and build a visible leadership footprint.'
  }
]

const whoItsFor = [
  'Club leads, event organizers, and active campus contributors',
  'Students with strong peer networks or creator instincts',
  'Learners who want side income without looking overly salesy',
  'People who care about credibility, community, and career signal'
]

const perks = [
  'Personal referral code and share-ready assets',
  'Early access to launches, offers, and Venura updates',
  'Recognition for top ambassadors and top-performing referrals',
  'Priority consideration for community, internship, or partnership opportunities'
]

const rewardTiers = [
  {
    title: 'Starter',
    subtitle: 'For new ambassadors entering the ecosystem',
    perks: ['Onboarding + referral code', 'Campaign assets', 'Foundational recognition'],
  },
  {
    title: 'Momentum',
    subtitle: 'For active ambassadors generating consistent referrals',
    perks: ['Higher visibility', 'Priority support', 'Better reward opportunities'],
  },
  {
    title: 'Lead Circle',
    subtitle: 'For standout campus operators with measurable impact',
    perks: ['Top ambassador recognition', 'Closer brand collaboration', 'Future opportunities with Venura'],
  },
]

const quickAnswers = [
  {
    question: 'Do I need to be an influencer?',
    answer: 'No. We care more about trust, consistency, and real campus presence than follower count.'
  },
  {
    question: 'Can I join only for referrals?',
    answer: 'Yes. The page combines both paths, so you can lean into the reward side if that is your primary interest.'
  },
  {
    question: 'Is this only for college students?',
    answer: 'The core positioning is student-first, but strong alumni and community connectors can also be a fit.'
  },
  {
    question: 'How do rewards work?',
    answer: 'Rewards are tied to verified enrollments and ambassador contribution. The exact structure can be shared during onboarding.'
  },
]

export default function AmbassadorProgramPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLogoClick = () => {
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (event) => {
    if (event) event.preventDefault()
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        handleNavClick={handleNavClick}
        handleLogoClick={handleLogoClick}
      />

      <section
        style={{ paddingTop: 'calc(var(--site-header-offset, 5.5rem) + 2rem)' }}
        className="relative overflow-hidden bg-[#091a31] px-6 pb-20 text-white"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,122,0,0.28),_transparent_28%),radial-gradient(circle_at_85%_20%,_rgba(255,255,255,0.08),_transparent_18%),linear-gradient(135deg,#091a31_0%,#0b2748_55%,#10243b_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="absolute left-[8%] top-20 h-40 w-40 rounded-full bg-[#FF7A00]/40 blur-3xl" />
        <div className="absolute bottom-10 right-[10%] h-64 w-64 rounded-full bg-[#FF7A00]/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-slate-100">
                <Sparkles size={14} className="text-[#FF7A00]" /> Venura growth network
              </div>
              <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.05] md:text-6xl xl:text-7xl">
                Build campus influence.
                <span className="block text-[#FF7A00]">Turn referrals into real upside.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
                This is not a random affiliate page. It is a student-led growth program that combines campus visibility, trusted peer referrals, and career-building recognition under one system.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  className="rounded-full bg-[#FF7A00] px-8 py-6 text-base font-bold text-[#0A2342] hover:bg-[#ff8f2a]"
                  onClick={() => window.location.assign('/contact')}
                >
                  Apply for the Program <ArrowRight className="ml-2" size={18} />
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-white/25 bg-white/5 px-8 py-6 text-base font-bold text-white hover:bg-white hover:text-[#0A2342]"
                  onClick={() => window.location.assign('/programs')}
                >
                  See What You’ll Promote
                </Button>
              </div>

              <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
                {momentumStats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/8 px-4 py-5 backdrop-blur-sm">
                    <div className="text-2xl font-extrabold text-[#FF7A00]">{item.value}</div>
                    <div className="mt-1 text-sm text-slate-200">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[30px] border border-white/12 bg-white/8 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-md">
                <div className="rounded-[26px] bg-[#f5efe6] p-5 text-[#0A2342]">
                  <div className="flex items-start justify-between gap-4 border-b border-[#0A2342]/10 pb-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#FF7A00]">Program Snapshot</p>
                      <h2 className="mt-2 text-2xl font-extrabold">Two tracks. One identity.</h2>
                    </div>
                    <div className="rounded-2xl bg-[#0A2342] px-3 py-2 text-xs font-bold text-white">Student-first</div>
                  </div>

                  <div className="mt-5 space-y-4">
                    {tracks.map((track, index) => (
                      <div key={track.title} className="rounded-3xl border border-[#0A2342]/10 bg-white px-5 py-5 shadow-sm">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="text-xs font-bold uppercase tracking-[0.22em] text-[#FF7A00]">{track.tone}</div>
                            <h3 className="mt-1 text-2xl font-extrabold text-[#0A2342]">{track.title}</h3>
                          </div>
                          <div className={`rounded-full px-3 py-1 text-xs font-bold ${track.accent}`}>
                            {index === 0 ? 'Lead' : 'Earn'}
                          </div>
                        </div>
                        <p className="mt-3 text-sm leading-6 text-gray-600">{track.description}</p>
                        <div className="mt-4 space-y-2">
                          {track.bullets.map((bullet) => (
                            <div key={bullet} className="flex items-start gap-2 text-sm text-gray-700">
                              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#FF7A00]" />
                              <span>{bullet}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#FF7A00]">What you actually do</p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#0A2342] md:text-5xl">This is a real campus growth role, not a generic promo page.</h2>
            </div>
            <div className="max-w-xl text-base leading-7 text-gray-600">
              The role is designed around trust, conversation, and influence. That makes it more credible for students and more useful for Venura.
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {roleMoments.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-[28px] border border-slate-200 bg-[#fffaf5] p-6 shadow-[0_16px_40px_rgba(10,35,66,0.06)]"
                >
                  <div className="inline-flex rounded-2xl bg-[#0A2342] p-3 text-[#FF7A00]">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-[#0A2342]">{item.title}</h3>
                  <p className="mt-3 leading-7 text-gray-600">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-t-2 border-[#0A2342] bg-[#fffaf5] px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#FF7A00]">Why this works better</p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#0A2342] md:text-5xl">A campus role that feels premium, not promotional.</h2>
            </div>
            <div className="max-w-xl text-sm leading-7 text-gray-600 md:text-base">
              The strongest student programs do not look like generic affiliate pages. They create status, trust, and a clear reason to participate.
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {valuePillars.map((benefit, index) => {
              const Icon = benefit.icon

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-[28px] border border-[#0A2342]/10 bg-white p-7 shadow-[0_20px_60px_rgba(10,35,66,0.08)]"
                >
                  <div className="inline-flex rounded-2xl bg-[#0A2342] p-3 text-[#FF7A00]">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold leading-tight text-[#0A2342]">{benefit.title}</h3>
                  <p className="mt-3 leading-7 text-gray-600">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#0A2342] px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#FF7A00]">Rewards structure</p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">The program should feel like progression, not just payouts.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Strong ambassador ecosystems work when recognition and growth sit alongside incentives. These tiers make the model feel more credible and aspirational.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {rewardTiers.map((tier, index) => (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`rounded-[30px] border p-7 ${index === 1 ? 'border-[#FF7A00] bg-white text-[#0A2342] shadow-[0_20px_60px_rgba(255,122,0,0.18)]' : 'border-white/10 bg-white/6 text-white'}`}
              >
                <div className={`inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] ${index === 1 ? 'bg-[#FF7A00] text-[#0A2342]' : 'bg-white/10 text-[#FF7A00]'}`}>
                  {index === 1 ? 'Recommended' : 'Tier'}
                </div>
                <h3 className="mt-5 text-3xl font-extrabold">{tier.title}</h3>
                <p className={`mt-3 leading-7 ${index === 1 ? 'text-gray-600' : 'text-slate-300'}`}>{tier.subtitle}</p>
                <div className="mt-6 space-y-3">
                  {tier.perks.map((perk) => (
                    <div key={perk} className="flex items-start gap-3">
                      <BadgeCheck size={18} className="mt-1 shrink-0 text-[#FF7A00]" />
                      <span className={index === 1 ? 'text-gray-700' : 'text-slate-200'}>{perk}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#FF7A00]">Activation path</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0A2342] md:text-5xl">Simple enough to start. Strong enough to scale.</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              The funnel is intentionally compact: one program page, one application intent, two value paths. That keeps the pitch clean for students and easier for your team to operate.
            </p>

            <div className="mt-8 rounded-[28px] bg-[#0A2342] p-6 text-white">
              <div className="flex items-center gap-3 text-[#FF7A00]">
                <GraduationCap size={20} />
                <span className="text-sm font-bold uppercase tracking-[0.25em]">What you get</span>
              </div>
              <div className="mt-5 space-y-4">
                {perks.map((perk) => (
                  <div key={perk} className="flex items-start gap-3 text-sm leading-6 text-slate-200">
                    <Star size={16} className="mt-1 shrink-0 text-[#FF7A00]" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            {activationSteps.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="grid gap-4 rounded-[28px] border border-slate-200 bg-slate-50 p-5 shadow-sm md:grid-cols-[88px_1fr] md:items-center"
              >
                <div className="flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-[#FF7A00] text-2xl font-extrabold text-[#0A2342]">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0A2342]">{item.title}</h3>
                  <p className="mt-2 leading-7 text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf5] px-6 py-16">
        <div className="mx-auto max-w-7xl rounded-[36px] border border-[#0A2342]/10 bg-white px-8 py-10 shadow-[0_24px_70px_rgba(10,35,66,0.08)] md:px-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#FF7A00]">Who this is for</p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#0A2342] md:text-5xl">Best for people who can move conversations, not just links.</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                The ideal ambassador is not necessarily a big influencer. It is someone with credibility, consistency, and enough social proof to help peers take action.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {whoItsFor.map((item) => (
                <div key={item} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                  <ShieldCheck size={18} className="text-[#FF7A00]" />
                  <p className="mt-3 text-sm leading-7 text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#FF7A00]">Quick answers</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0A2342] md:text-5xl">The practical questions people will ask before joining.</h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {quickAnswers.map((item, index) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-[26px] border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-xl font-bold text-[#0A2342]">{item.question}</h3>
                <p className="mt-3 leading-7 text-gray-600">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[#0A2342] px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-[#FF7A00]">
                <Megaphone size={16} className="mr-2" /> Ready to launch this properly?
              </div>
              <h2 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight md:text-5xl">
                Join the program, represent Venura, and turn your network into measurable growth.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Start with one application. We will guide you on positioning, referral mechanics, and how to make the most of your campus presence.
              </p>
            </div>

            <div className="rounded-[30px] bg-white/8 p-6 backdrop-blur-sm">
              <div className="text-sm font-bold uppercase tracking-[0.22em] text-[#FF7A00]">Next steps</div>
              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-200">
                <p>1. Apply through the contact flow.</p>
                <p>2. Mention that you are interested in the Ambassador Program.</p>
                <p>3. Our team will evaluate fit and share the next activation steps.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              className="rounded-full bg-[#FF7A00] px-8 py-6 text-base font-bold text-[#0A2342] hover:bg-[#ff8f2a]"
              onClick={() => window.location.assign('/contact')}
            >
              Start Your Application
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-[#0A2342] px-8 py-6 text-base font-bold text-[#0A2342] hover:bg-[#0A2342] hover:text-white"
              onClick={() => window.location.assign('/faq')}
            >
              Read FAQs
            </Button>
          </div>
          <p className="mt-6 text-sm text-slate-400">
            Prefer a broader partnership conversation? Use the <Link to="/contact" className="font-semibold text-[#FF7A00]">contact page</Link> and mention campus collaboration.
          </p>
        </div>
      </section>

      <Footer handleNavClick={handleNavClick} />
    </div>
  )
}