import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Target, Users, BookOpen, Award, Globe } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Header from "./Header";
import Footer from "./Footer";

export default function AboutUs() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pillars = [
    {
      icon: BookOpen,
      title: "World-Class Education",
      desc: "Learn from industry experts with globally recognized curriculum designed for real-world success."
    },
    {
      icon: Briefcase,
      title: "Real Internships",
      desc: "Gain hands-on experience through meaningful internships with leading companies worldwide."
    },
    {
      icon: Award,
      title: "Global Mentorship",
      desc: "Connect with experienced mentors who guide you towards achieving your career goals."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Outcome Oriented",
      desc: "We measure success by student careers, not course completion."
    },
    {
      icon: Users,
      title: "Mentor First",
      desc: "Every learner is guided by experienced industry professionals."
    },
    {
      icon: Globe,
      title: "Accessible Education",
      desc: "High-quality training and internships without financial barriers."
    }
  ];

  const handleNavClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        handleNavClick={handleNavClick}
      />
      




      {/* Hero Section - Variant 3: Tech mesh */}
      <section className="relative overflow-hidden px-6 pb-14 pt-24 text-white md:pb-16" style={{ marginTop: 'var(--site-header-offset, 4rem)' }}>
        {/* Blue base */}
        <div className="absolute inset-0 bg-[#0A2342] z-0" />
        {/* SVG mesh overlay */}
        <svg className="absolute inset-0 w-full h-full z-10 opacity-30" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <pattern id="mesh" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="0" cy="0" r="2" fill="#FF7A00" />
              <line x1="0" y1="0" x2="80" y2="0" stroke="#fff" strokeWidth="0.5" />
              <line x1="0" y1="0" x2="0" y2="80" stroke="#fff" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="1440" height="400" fill="url(#mesh)" />
        </svg>
        {/* Animated orange dots at mesh nodes */}
        <div className="pointer-events-none absolute left-[12%] top-[22%] h-4 w-4 rounded-full bg-[#FF7A00] blur-sm animate-pulse" />
        <div className="pointer-events-none absolute left-[44%] top-[38%] h-3 w-3 rounded-full bg-[#FFB273] blur-[2px] animate-pulse-slow" />
        <div className="pointer-events-none absolute left-[70%] top-[18%] h-2.5 w-2.5 rounded-full bg-[#FF7A00] blur-[1px] animate-pulse" />
        {/* Blue glow at bottom */}
        <div className="pointer-events-none absolute bottom-[-130px] left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-[#14345d]/40 blur-3xl z-20" />

        {/*
        // --- Variant B: Blue spotlight with dot grid ---
        <div className="absolute inset-0 bg-[#0A2342]" />
        <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[420px] rounded-full bg-[#14345d]/40 blur-[120px]" />
        <div className=\"pointer-events-none absolute inset-0 opacity-10\">
          <div
            className=\"absolute inset-0\"
            style={{
              backgroundImage:
                'radial-gradient(circle,rgba(255,255,255,0.12) 1px,transparent 1px)',
              backgroundSize: '38px 38px',
            }}
          />
        </div>
        <div className=\"pointer-events-none absolute -left-10 top-8 h-72 w-72 rounded-full bg-[#FF7A00]/20 blur-3xl\" />
        <div className=\"pointer-events-none absolute right-0 top-12 h-72 w-72 rounded-full bg-sky-300/16 blur-3xl\" />
        */}

        {/*
        // --- Variant C: Abstract blue/orange waves ---
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2342] via-[#14345d] to-[#FF7A00]/30" />
        <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-[#FF7A00]/10 blur-[100px]" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#0A2342]/30 blur-[100px]" />
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle,rgba(255,255,255,0.10) 1px,transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
        </div>
        */}

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="mx-auto inline-flex rounded-full border border-white/30 bg-white/[0.14] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#FFB273]">
              About Venura
            </p>
            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Shaping Careers Through
              <span className="block text-[#FF7A00]">Applied Tech Learning</span>
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-100 md:text-lg">
              We combine industry curriculum, mentor-led execution, and real project exposure so learners move from skill-building to career outcomes with confidence.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button
                className="rounded-xl bg-white px-6 py-3 font-semibold text-[#0A2342] hover:bg-slate-100"
                onClick={() => window.location.href = '/programs'}
              >
                Explore Programs
              </Button>
              <Button
                variant="outline"
                className="rounded-xl border border-white/40 bg-white/[0.12] px-6 py-3 font-semibold text-white hover:bg-white/[0.2]"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Team
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-10 grid gap-3 rounded-2xl border border-white/25 bg-white/[0.10] p-4 shadow-[0_24px_60px_-36px_rgba(0,0,0,0.5)] backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4"
          >
            <div className="rounded-xl border border-white/20 bg-white/[0.1] px-4 py-4 text-center">
              <p className="text-2xl font-extrabold text-[#FF7A00]">2000+</p>
              <p className="text-xs text-slate-100">Learners Trained</p>
            </div>
            <div className="rounded-xl border border-white/20 bg-white/[0.1] px-4 py-4 text-center">
              <p className="text-2xl font-extrabold text-[#FF7A00]">95%</p>
              <p className="text-xs text-slate-100">Placement Outcomes</p>
            </div>
            <div className="rounded-xl border border-white/20 bg-white/[0.1] px-4 py-4 text-center">
              <p className="text-2xl font-extrabold text-[#FF7A00]">50+</p>
              <p className="text-xs text-slate-100">Hiring Partners</p>
            </div>
            <div className="rounded-xl border border-white/20 bg-white/[0.1] px-4 py-4 text-center">
              <p className="text-2xl font-extrabold text-[#FF7A00]">24/7</p>
              <p className="text-xs text-slate-100">Learner Community</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#FF7A00] to-transparent mb-4"></div>
          <p className="text-gray-700">
            Venura is an ed-tech platform built to transform how people break into the tech industry. We combine structured curriculum, real internship placements, and dedicated mentor-led coaching so learners don't just gain knowledge — they land careers.
          </p>
          <p className="text-gray-700 mt-3">
            Founded with a vision to make quality tech education globally accessible, we partner with hiring companies to ensure every program we deliver is directly tied to real-world outcomes and employer expectations.
          </p>
        </motion.div>
        <motion.img
          className="rounded-xl shadow-lg"
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
          alt="Team working together"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        />
        </div>
      </section>

      {/* Venura Global Learning Framework */}
      <section className="py-12 bg-[#f6f8fb]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-2 text-gray-900">
            Venura Global Learning Framework
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#FF7A00] to-transparent mx-auto mb-10"></div>
          <div className="grid md:grid-cols-3 gap-12">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Card className="bg-white border-gray-200 rounded-3xl hover:border-[#FF7A00] transition shadow-lg">
                  <CardContent className="p-12 text-center">
                    <p.icon className="w-14 h-14 mx-auto text-[#FF7A00] mb-6" />
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">{p.title}</h3>
                    <p className="text-gray-600">{p.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Venura Core Beliefs */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-2 text-gray-900">
            Venura Core Beliefs
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#FF7A00] to-transparent mx-auto mb-10"></div>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Card className="bg-white border-[#0A2342] rounded-3xl hover:border-[#FF7A00] transition shadow-lg">
                  <CardContent className="p-12 text-center">
                    <v.icon className="w-12 h-12 mx-auto text-[#FF7A00] mb-6" />
                    <h3 className="text-2xl font-semibold mb-4 text-[#0A2342]">{v.title}</h3>
                    <p className="text-gray-600">{v.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 bg-[#f6f8fb]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-2">
            Our Mission & Vision
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#FF7A00] to-transparent mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 text-white shadow-xl"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/95 text-lg leading-relaxed">
                To leverage technology and education to create transformative learning experiences that drive positive change in businesses and communities worldwide. We empower learners with future-ready skills through world-class education, real internships, and global mentorship.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-3xl p-8 text-white shadow-xl"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-white/95 text-lg leading-relaxed">
                We envision a world where digital tools and quality education unlock opportunities for all. Through continuous learning, innovation, and global collaboration, we aim to build a future where every learner becomes a confident professional prepared for international careers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0A2342] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-8"
          >
            Let&apos;s Build the Global Future Together
          </motion.h2>
          <p className="text-white/90 mb-12 text-lg">
            Whether you&apos;re a student, mentor, or hiring partner — there&apos;s a
            place for you in our ecosystem.
          </p>
          <Button
            className="px-12 py-7 rounded-2xl text-lg bg-[#FF7A00] text-white hover:bg-[#e06800] font-bold shadow-[0_8px_28px_-8px_rgba(255,122,0,0.6)]"
            onClick={() => window.location.href = '/contact'}
          >
            Contact Us
          </Button>
        </div>
      </section>

      <Footer handleNavClick={handleNavClick} />
    </div>
  );
}
