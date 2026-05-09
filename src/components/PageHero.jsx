import { motion } from 'framer-motion'

export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  badges = [],
  stats = [],
  children,
  className = '',
  contentClassName = '',
  theme = 'default',
}) {
  const themeMap = {
    default: {
      bgGradient: 'bg-gradient-to-br from-[#071a33] via-[#0A2342] to-[#123861]',
      gridOpacity: 'opacity-35',
      glowLeft: 'bg-[#FF7A00]/30',
      glowRight: 'bg-cyan-400/20',
      eyebrow: 'text-[#ffd8b8]',
      highlight: 'text-[#FF9C4A]',
      statValue: 'text-[#FF9C4A]',
    },
    calm: {
      bgGradient: 'bg-gradient-to-br from-[#102a43] via-[#1e3a8a] to-[#0f766e]',
      gridOpacity: 'opacity-24',
      glowLeft: 'bg-cyan-300/22',
      glowRight: 'bg-teal-300/16',
      eyebrow: 'text-[#d1fae5]',
      highlight: 'text-[#67e8f9]',
      statValue: 'text-[#5eead4]',
    },
  }

  const activeTheme = themeMap[theme] || themeMap.default

  return (
    <section className={`relative overflow-hidden px-6 pb-16 pt-24 ${className}`}>
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className={`absolute inset-0 ${activeTheme.bgGradient}`} />
        <div
          className={`absolute inset-0 ${activeTheme.gridOpacity}`}
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px),
              linear-gradient(0deg, rgba(255,255,255,0.12) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />
        <div className={`absolute -left-12 top-10 h-72 w-72 rounded-full blur-3xl ${activeTheme.glowLeft}`} />
        <div className={`absolute -right-16 bottom-0 h-96 w-96 rounded-full blur-3xl ${activeTheme.glowRight}`} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className={`rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl md:p-10 ${contentClassName}`}
        >
          {eyebrow && (
            <p className={`inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] ${activeTheme.eyebrow}`}>
              {eyebrow}
            </p>
          )}

          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
            {title}
            {highlight && <span className={`block ${activeTheme.highlight}`}>{highlight}</span>}
          </h1>

          {description && <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-200 md:text-xl">{description}</p>}

          {badges.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span key={badge} className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-semibold text-white">
                  {badge}
                </span>
              ))}
            </div>
          )}

          {children}

          {stats.length > 0 && (
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3">
                  <p className={`text-2xl font-extrabold ${activeTheme.statValue}`}>{stat.value}</p>
                  <p className="text-sm text-slate-200">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
