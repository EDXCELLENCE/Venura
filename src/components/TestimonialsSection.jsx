
import { Briefcase, MapPin, Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Software Engineer',
    company: 'Google',
    location: 'Bangalore',
    image: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=FF7A00&color=fff&size=200',
    rating: 5,
    text: "Venura's Full-Stack program transformed my career. The project-first training and mentorship helped me secure my role at Google.",
    program: 'Full-Stack Development',
  },
  {
    name: 'Rahul Verma',
    role: 'Data Scientist',
    company: 'Microsoft',
    location: 'Hyderabad',
    image: 'https://ui-avatars.com/api/?name=Rahul+Verma&background=0A2342&color=fff&size=200',
    rating: 5,
    text: "The Data Science program gave me practical skills I could apply immediately. Real-world projects and mentorship helped me transition into Microsoft.",
    program: 'Data Science',
  },
  {
    name: 'Anjali Patel',
    role: 'ML Engineer',
    company: 'Amazon',
    location: 'Mumbai',
    image: 'https://ui-avatars.com/api/?name=Anjali+Patel&background=FF7A00&color=fff&size=200',
    rating: 5,
    text: 'From zero AI knowledge to building production-ready ML models in 3 months. The AI & ML track is practical, structured, and career-focused.',
    program: 'AI & ML',
  },
  {
    name: 'Arjun Singh',
    role: 'Backend Developer',
    company: 'Flipkart',
    location: 'Delhi',
    image: 'https://ui-avatars.com/api/?name=Arjun+Singh&background=0A2342&color=fff&size=200',
    rating: 5,
    text: 'The Java Backend track covered Spring Boot through microservices. Internship exposure helped me gain real experience before course completion.',
    program: 'Java Backend',
  },
  {
    name: 'Sneha Reddy',
    role: 'Security Analyst',
    company: 'Cisco',
    location: 'Pune',
    image: 'https://ui-avatars.com/api/?name=Sneha+Reddy&background=FF7A00&color=fff&size=200',
    rating: 5,
    text: 'The Cybersecurity program gave me hands-on exposure to real tools and scenarios. Mentor guidance helped me confidently move into Cisco.',
    program: 'Cybersecurity',
  },
  {
    name: 'Vikram Desai',
    role: 'Full-Stack Developer',
    company: 'Paytm',
    location: 'Noida',
    image: 'https://ui-avatars.com/api/?name=Vikram+Desai&background=0A2342&color=fff&size=200',
    rating: 5,
    text: 'A strong learning experience. The project-based model and career support helped me transition from a non-tech background into development.',
    program: 'Full-Stack Development',
  },
]

export default function TestimonialsSection() {
  const track = [...testimonials, ...testimonials]

  return (
    <section className="bg-[#f6f8fb] border-t-2 border-[#0A2342] py-14 md:py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#FF7A00]/10 text-[#FF7A00] text-sm font-semibold px-4 py-1.5 rounded-full border border-[#FF7A00]/30 mb-4">
            ⭐ Student Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2342] mb-3">
            Hear From Our <span className="text-[#FF7A00]">Graduates</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#FF7A00] to-transparent mx-auto mb-4" />
          <p className="text-[#0A2342]/60 text-lg max-w-2xl mx-auto">
            Real stories from students who transformed their careers with Venura.
          </p>
        </div>

        {/* Scrolling track */}
        <div className="relative">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex gap-6 animate-scroll-testimonials items-stretch">
            {track.map((t, idx) => (
              <article
                key={idx}
                className="flex-shrink-0 w-[360px] bg-white rounded-3xl border-2 border-slate-100 hover:border-[#FF7A00] p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Quote icon */}
                <div className="w-11 h-11 rounded-full bg-[#FF7A00]/10 flex items-center justify-center mb-4">
                  <Quote className="w-5 h-5 text-[#FF7A00]" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FF7A00] text-[#FF7A00]" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-slate-600 leading-relaxed mb-5 flex-grow text-sm">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Program tag */}
                <span className="inline-block self-start bg-[#0A2342] text-white text-xs font-semibold px-3 py-1 rounded-full mb-5">
                  {t.program}
                </span>

                {/* Author */}
                <div className="flex items-center gap-4 border-t border-slate-100 pt-4">
                  <img
                    src={t.image}
                    alt={`${t.name} – ${t.role} at ${t.company}`}
                    className="rounded-full border-2 border-[#FF7A00] w-12 h-12 flex-shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-bold text-[#0A2342] text-sm">{t.name}</p>
                    <div className="flex items-center gap-1 text-xs text-slate-500 mt-0.5">
                      <Briefcase className="w-3 h-3" />
                      <span>{t.role}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-semibold text-[#FF7A00] mt-0.5">
                      <span>{t.company}</span>
                      <span className="text-slate-300">|</span>
                      <MapPin className="w-3 h-3" />
                      <span>{t.location}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes scroll-testimonials {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-testimonials {
          width: max-content;
          animation: scroll-testimonials 30s linear infinite;
        }
        .animate-scroll-testimonials:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-testimonials {
            animation: none;
            transform: none;
            width: auto;
          }
        }
      `}</style>
    </section>
  )
}
