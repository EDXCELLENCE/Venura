import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from './ui/button'

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-[88vh] items-center justify-center overflow-hidden border-b border-[#0A2342]/20 bg-white pt-24 md:min-h-[92vh] md:pt-28"
      style={{ backgroundImage: 'url("/image copy.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-[#0A2342]/58" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,122,0,0.20),transparent_45%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A2342]/20 via-[#0A2342]/45 to-[#0A2342]/75" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto w-full max-w-5xl px-6 text-center text-white"
      >
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/20 bg-white/10 px-6 py-8 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.65)] backdrop-blur-[3px] md:px-10 md:py-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white/95 md:text-xs">
            <Sparkles size={14} className="text-[#FF7A00]" /> AI-Guided Learning and Career Training
          </div>

          <h1 className="text-[34px] font-extrabold leading-[1.08] tracking-[-0.02em] text-white sm:text-[44px] md:text-[58px]">
            Learn. Build.
            <span className="block text-[#FF7A00]">Launch.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/90 md:mt-5 md:text-base">
            Venura is a next-generation tech platform combining AI-guided learning, real-world projects,
            and structured internships.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3 md:mt-8 md:gap-4">
          <Button 
            className="h-12 rounded-xl bg-[#FF7A00] px-6 text-sm font-semibold text-[#0A2342] hover:bg-[#ff8f2a] md:h-14 md:px-8 md:text-base"
            onClick={() => window.open('https://forms.gle/DyDigMebuEbwED347', '_blank')}
          >
            Apply for Next Batch <ArrowRight className="ml-2" size={18} />
          </Button>
          <Button
            variant="outline"
            className="h-12 rounded-xl border-white/40 bg-white/10 px-6 text-sm text-white hover:border-[#FF7A00] hover:bg-white/15 md:h-14 md:px-8 md:text-base"
            onClick={() => document.getElementById('learning-paths')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Programs
          </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
