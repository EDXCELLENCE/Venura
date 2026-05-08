import { Award, BadgeCheck, ShieldCheck, TrendingUp } from 'lucide-react'

export default function LearningPyramidSection() {
  const badges = [
    {
      icon: ShieldCheck,
      title: 'ISO 9001:2015',
      sub: 'Quality Certified',
      panel: 'border-[#cfe0fb] bg-[#eaf4ff]',
      iconTone: 'bg-[#2f72ff] text-white',
    },
    {
      icon: Award,
      title: '95% Success Rate',
      sub: 'Student Outcomes',
      panel: 'border-[#d7eadc] bg-[#edf9f0]',
      iconTone: 'bg-[#29b36b] text-white',
    },
    {
      icon: BadgeCheck,
      title: 'Industry Recognized',
      sub: 'Certificates',
      panel: 'border-[#ead8f0] bg-[#f8effb]',
      iconTone: 'bg-[#bc55d5] text-white',
    },
    {
      icon: TrendingUp,
      title: '2000+ Placements',
      sub: 'Career Success',
      panel: 'border-[#f0e1ca] bg-[#fbf4e8]',
      iconTone: 'bg-[#ef9635] text-white',
    },
  ]

  const companies = [
    { name: 'Reliance', logo: '/company-logos/reliance.svg' },
    { name: 'Oracle', logo: '/company-logos/oracle.svg' },
    { name: 'NTPC', logo: '/company-logos/ntpc.svg' },
    { name: 'Microsoft', logo: '/company-logos/microsoft.svg' },
    { name: 'Mahindra', logo: '/company-logos/mahindra.svg' },
    { name: 'Infosys', logo: '/company-logos/infosys.svg' },
    { name: 'HCL', logo: '/company-logos/hcl.svg' },
  ]

  return (
    <section className="py-14 md:py-16 px-6 bg-[#f6f8fb] border-t-2 border-[#0A2342]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2342] mb-2">
            Trusted by Learners. Recognized by Industry.
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#FF7A00] to-transparent mx-auto mb-3" />
          <p className="text-[#0A2342]/60 text-lg">Industry-recognized certifications and real career outcomes that speak for themselves.</p>
        </div>

        {/* Trust badges */}
        <div className="mb-10 rounded-3xl border border-[#dbe5f2] bg-white p-3 shadow-[0_20px_50px_-38px_rgba(10,35,66,0.55)] md:p-4">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {badges.map((b, i) => (
              <div key={i} className={`rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-28px_rgba(10,35,66,0.45)] ${b.panel}`}>
                <div className={`mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl ${b.iconTone}`}>
                  <b.icon size={20} strokeWidth={2.2} />
                </div>
                <div className="text-lg font-extrabold leading-tight text-[#0A2342]">{b.title}</div>
                <div className="mt-1 text-sm font-medium text-[#0A2342]/65">{b.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section label */}
        <p className="mt-12 text-center text-sm font-extrabold text-[#0A2342]/65 uppercase tracking-widest mb-4">Our graduates work at</p>

        {/* Company marquee */}
        <div className="overflow-x-hidden w-full py-2">
          <div className="flex items-stretch gap-5 animate-marquee whitespace-nowrap">
            {[...companies, ...companies].map((company, idx) => (
              <div
                key={company.name + idx}
                className="flex h-[86px] min-w-[170px] items-center justify-center rounded-2xl border border-[#e5e9f2] bg-white px-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF7A00]/45"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-h-11 w-auto object-contain opacity-95 transition-all duration-300 hover:opacity-100"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            width: max-content;
            animation: marquee 22s linear infinite;
          }
        `}</style>
      </div>
    </section>
  )
}
