export default function LearningPyramidSection() {
  const badges = [
    { icon: '🛡️', title: 'ISO 9001:2015', sub: 'Quality Certified', bg: 'bg-blue-50', border: 'border-blue-200' },
    { icon: '🏅', title: '95% Success Rate', sub: 'Student Outcomes', bg: 'bg-green-50', border: 'border-green-200' },
    { icon: '✅', title: 'Industry Recognized', sub: 'Certificates', bg: 'bg-orange-50', border: 'border-[#FF7A00]' },
    { icon: '📈', title: '2000+ Placements', sub: 'Career Success', bg: 'bg-purple-50', border: 'border-purple-200' },
  ]

  const companies = ['Microsoft', 'IBM', 'Accenture', 'Deloitte', 'Cisco', 'Google', 'TCS', 'Wipro']

  return (
    <section className="py-14 md:py-16 px-6 bg-white border-t-2 border-[#0A2342]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2342] mb-2">
            Trusted by Thousands of Learners &amp; Top Companies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#FF7A00] to-transparent mx-auto mb-3" />
          <p className="text-[#0A2342]/60 text-lg">Industry-recognized certifications and a proven track record</p>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {badges.map((b, i) => (
            <div key={i} className={`${b.bg} rounded-2xl p-6 flex flex-col items-center border-2 ${b.border} shadow-sm hover:-translate-y-1 transition-transform duration-300`}>
              <span className="text-4xl mb-3">{b.icon}</span>
              <div className="text-base font-bold text-[#0A2342] mb-1 text-center">{b.title}</div>
              <div className="text-sm text-gray-500 text-center">{b.sub}</div>
            </div>
          ))}
        </div>

        {/* Section label */}
        <p className="text-center text-sm font-semibold text-[#0A2342]/50 uppercase tracking-widest mb-4">Our graduates work at</p>

        {/* Company marquee */}
        <div className="overflow-x-hidden w-full py-2">
          <div className="flex gap-6 animate-marquee whitespace-nowrap">
            {[...companies, ...companies].map((company, idx) => (
              <div key={company + idx} className="px-6 py-3 bg-white border border-gray-200 rounded-xl text-lg font-bold text-gray-700 shadow-sm min-w-[140px] text-center hover:border-[#FF7A00] transition-colors duration-300">
                {company}
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
