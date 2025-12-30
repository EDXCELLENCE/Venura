import React from 'react'

export default function WhyVenuraSection() {
  const features = [
    { icon: '🤖', title: 'AI-Powered Smart Learning', desc: 'Personalized learning paths, analytics, and intelligent recommendations.' },
    { icon: '🧭', title: 'Career Navigation System', desc: 'AI-guided roadmaps aligned to internships and job roles.' },
    { icon: '💬', title: 'Mentorship Intelligence', desc: 'Industry mentors, 24/7 AI feedback, and peer communities.' },
    { icon: '🧩', title: 'Project-Driven Growth', desc: 'Build deployable projects from idea to product.' },
    { icon: '🌍', title: 'Global Collaboration', desc: 'Learn and collaborate with peers across countries.' },
    { icon: '🚀', title: 'Startup Launch Support', desc: 'Pitch ideas, gain mentorship, and access startup ecosystems.' },
  ]

  return (
    <section className="relative bg-white py-16 text-[#0A2342] border-t-2 border-[#0A2342]" style={{ backgroundImage: 'url("/image copy 2.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Why <span className="text-[#FF7A00]">Venura</span> Stands Out
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#FF7A00] to-transparent mx-auto mt-4"></div>
        </div>
        <p className="text-center text-lg text-[#0A2342]/70 max-w-2xl mx-auto mb-10">
          We merge AI-powered learning, mentorship, and real-world experience to build future-ready professionals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl p-8 shadow-lg border-t-4 border-[#FF7A00] hover:-translate-y-2 transition"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#FF7A00]/15 flex items-center justify-center text-3xl mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-[#0A2342]/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
