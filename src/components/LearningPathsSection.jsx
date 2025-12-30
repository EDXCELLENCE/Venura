import React from 'react'

export default function LearningPathsSection() {
  const paths = [
    {
      title: "AI & ML",
      desc: "Python • ML models • GenAI apps",
      image: "/aiml.png",
    },
    {
      title: "Data Science",
      desc: "Pandas • Dashboards • Insights",
      image: "/datascience.png",
    },
    {
      title: "Full-Stack Web",
      desc: "React • Node • DB • Deploy",
      image: "/fullstack.png",
    },
    {
      title: "Java Backend Development",
      desc: "Spring Boot • REST APIs • Microservices",
      image: "/java.png",
    },
    {
      title: "Cybersecurity",
      desc: "Threats • Tools • Hardening",
      image: "/cybersecurity.png",
    },
    {
      title: "Cloud & DevOps",
      desc: "AWS • CI/CD • Docker",
      image: "/devops.png",
      comingSoon: true,
    },
  ]

  return (
    <section id="learning-paths" className="py-16 px-6 bg-slate-50 border-t-2 border-[#0A2342]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-2">
            Popular Learning Paths
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#FF7A00] to-transparent mx-auto mb-4"></div>
          <p className="text-slate-600 text-lg">
            Pick from 6+ in-demand domains. Each maps cleanly to the FutureX pyramid.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paths.map((path, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-slate-200 hover:border-[#FF7A00] hover:border-2 shadow-sm overflow-hidden hover:shadow-md transition-all flex flex-col h-80 relative group"
            >
              {/* Coming Soon Badge */}
              {path.comingSoon && (
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <span className="bg-[#FF7A00] text-white font-bold px-6 py-3 rounded-xl text-lg">
                    Coming Soon
                  </span>
                </div>
              )}
              
              {/* Image - 60% */}
              <div className="h-[60%] w-full overflow-hidden relative">
                <img
                  src={path.image}
                  alt={path.title}
                  className="w-full h-full object-cover"
                  style={{ imageRendering: '-webkit-optimize-contrast' }}
                />
              </div>

              {/* Content - 40% */}
              <div className="h-[40%] p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    {path.title}
                  </h3>

                  <p className="text-sm text-slate-600">
                    {path.desc}
                  </p>
                </div>

                <button 
                  className="text-orange-500 font-medium flex items-center gap-2 hover:gap-3 transition-all text-sm"
                  onClick={() => window.open('https://forms.gle/DyDigMebuEbwED347', '_blank')}
                >
                  Start <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
