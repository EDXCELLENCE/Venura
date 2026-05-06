import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from './ui/button'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white border-b-2 border-[#0A2342] pt-32" style={{ backgroundImage: 'url("/image copy.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-[#0A2342]/45" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl mx-auto px-6 text-center text-white"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 rounded-full border border-white/30 bg-white/10 text-sm font-bold">
          <Sparkles size={14} className="text-[#FF7A00]" /> AI-guided learning path & Training
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Learn. Build. <span className="text-[#FF7A00]">Launch</span>.
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-lg text-white max-w-2xl mx-auto">
          Venura is a next-generation Tech platform combining AI-guided learning,
          real-world projects, and structured internships.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button 
            className="bg-[#FF7A00] hover:bg-[#ff8f2a] text-[#0A2342] font-semibold px-8 py-6 text-lg rounded-xl"
            onClick={() => window.open('https://forms.gle/DyDigMebuEbwED347', '_blank')}
          >
            Apply for Next Batch <ArrowRight className="ml-2" size={18} />
          </Button>
          <Button
            variant="outline"
            className="border-white/40 text-white px-8 py-6 text-lg rounded-xl hover:border-[#FF7A00] bg-white/10"
            onClick={() => document.getElementById('learning-paths')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Programs
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
