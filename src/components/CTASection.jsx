import { Button } from './ui/button'
import AnimatedCounter from './AnimatedCounter'

export default function CTASection() {
  const stats = [
    { value: "10K+", label: "Active Learners", icon: "👥" },
    { value: "250+", label: "Expert Mentors", icon: "🎓" },
    { value: "98%", label: "Success Rate", icon: "🎯" },
    { value: "120+", label: "Industry Partners", icon: "🤝" }
  ]

  return (
    <section className="relative py-14 md:py-16 bg-gradient-to-br from-[#0A2342] via-[#0A2342]/95 to-[#0A2342] text-white overflow-hidden border-t-2 border-[#0A2342]">
      <div className="absolute top-0 left-0 right-0 h-px bg-white/20"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,122,0,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* LEFT TEXT */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
              Start Your <span className="text-[#FF7A00]">Journey</span> with Venura
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#FF7A00] to-transparent mb-6"></div>

            <p className="text-slate-300 text-lg mb-6 max-w-xl">
              Limited seats • Rolling cohorts. Get your personalized roadmap after applying.
            </p>

            <ul className="text-slate-300 space-y-3 mb-10">
              <li>• Three-level structured learning with dedicated mentor support</li>
              <li>• Skill, project, and internship certifications</li>
              <li>• Internship pathways with startup and NGO partners</li>
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-[#FF7A00] hover:bg-[#ff8f2a] text-white font-semibold px-8 py-4 rounded-xl shadow-lg"
                onClick={() => window.open('https://forms.gle/DyDigMebuEbwED347', '_blank')}
              >
                Apply Now
              </Button>

              <Button 
                variant="outline" 
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20"
                onClick={() => document.getElementById('learning-paths')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Programs
              </Button>
            </div>
          </div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <div 
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-[#FF7A00] mb-2">
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.value.includes('K') ? 'K+' : stat.value.includes('%') ? '%' : '+'} 
                  />
                </div>
                <div className="text-slate-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
