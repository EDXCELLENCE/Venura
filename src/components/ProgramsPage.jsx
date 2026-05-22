import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Clock3,
  Code2,
  FolderKanban,
  IndianRupee,
  Rocket,
  Sparkles,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AnimatedCounter({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationId = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(target * progress));
        animationId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [target, duration]);

  const formatNumber = (num) => {
    if (suffix === "K+") return `${(num / 1000).toFixed(0)}K+`;
    if (suffix === "%") return `${num}%`;
    if (suffix === "+") return `${String(num).padStart(2, "0")}+`;
    return num;
  };

  return <>{formatNumber(count)}</>;
}

export default function ProgramsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const heroPillsRef = useRef(null);
  const [cursorGlow, setCursorGlow] = useState({ x: 0, y: 0 });
  const [heroWordIndex, setHeroWordIndex] = useState(0);

  const heroPills = [
    {
      text: "Industry Certification",
      icon: Sparkles,
      color: "from-[#FF7A00] to-[#d46300]",
      iconColor: "#ffffff",
    },
    {
      text: "Real Projects",
      icon: Code2,
      color: "from-[#0A2342] to-[#14345d]",
      iconColor: "#38BDF8",
    },
    {
      text: "Flexible Schedule",
      icon: Clock3,
      color: "from-[#FF7A00] to-[#d46300]",
      iconColor: "#ffffff",
    },
    {
      text: "Expert Mentors",
      icon: Users,
      color: "from-[#0A2342] to-[#14345d]",
      iconColor: "#4ADE80",
    },
    {
      text: "Career Launch",
      icon: Rocket,
      color: "from-[#FF7A00] to-[#d46300]",
      iconColor: "#ffffff",
    },
    {
      text: "Portfolio Ready",
      icon: FolderKanban,
      color: "from-[#0A2342] to-[#14345d]",
      iconColor: "#C084FC",
    },
  ];

  const heroWords = [
    "Tech Career",
    "AI - Journey",
    "Web Development",
    "Data Science",
    "Cloud Computing",
  ];

  useEffect(() => {
    const slider = heroPillsRef.current;

    if (
      !slider ||
      (window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    ) {
      return undefined;
    }

    const isMobile = () => window.matchMedia("(max-width: 767px)").matches;

    if (!isMobile()) {
      return undefined;
    }

    let running = true;
    let frameId = null;
    const speed = 0.35;
    const loopWidth = slider.scrollWidth / 2;

    const tick = () => {
      if (!running) return;
      slider.scrollLeft += speed;
      if (slider.scrollLeft >= loopWidth) {
        slider.scrollLeft -= loopWidth;
      }
      frameId = requestAnimationFrame(tick);
    };

    const stop = () => {
      running = false;
    };

    const start = () => {
      if (running) return;
      running = true;
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    slider.addEventListener("mouseenter", stop);
    slider.addEventListener("mouseleave", start);
    slider.addEventListener("touchstart", stop, { passive: true });
    slider.addEventListener("touchend", start);

    const onResize = () => {
      if (!isMobile()) {
        stop();
      } else {
        start();
      }
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameId);
      slider.removeEventListener("mouseenter", stop);
      slider.removeEventListener("mouseleave", start);
      slider.removeEventListener("touchstart", stop);
      slider.removeEventListener("touchend", start);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeroWordIndex((current) => (current + 1) % heroWords.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [heroWords.length]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorGlow({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleNavClick = (e) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
  };

  const handleApplyNow = () => {
    window.open("https://venuratech.com/dashboard/student/login", "_blank");
  };

  const programs = [
    {
      title: "AI & ML",
      subtitle: "Artificial Intelligence & Machine Learning",
      desc: "Build intelligent systems from scratch — train ML models, deploy GenAI apps, and work on real-world AI projects that employers value.",
      image: "/ai_ml.jpeg",
      duration: "3 months",
      level: "Advanced",
      path: "/programs/ai-ml",
      salary: "₹8–18 LPA",
      placement: "92%",
      bestFor: "ML Engineers",
      badge: "Highest Salary",
      badgeColor: "bg-purple-600",
    },
    {
      title: "Data Science",
      subtitle: "Data Analysis & Visualization",
      desc: "Turn raw data into actionable insights using industry tools. Build dashboards, predictive models, and data-driven products.",
      image: "/data_science.jpeg",
      duration: "3 months",
      level: "Advanced",
      path: "/programs/data-science",
      salary: "₹6–14 LPA",
      placement: "90%",
      bestFor: "Data Analysts",
      badge: "Most Popular",
      badgeColor: "bg-[#FF7A00]",
    },
    {
      title: "Full-Stack Web",
      subtitle: "Modern Web Development",
      desc: "Go from zero to deploying full-stack apps with React, Node.js, and databases. Build portfolio projects that get you hired.",
      image: "/full_stack_web.jpeg",
      duration: "3 months",
      level: "Intermediate",
      path: "/programs/full-stack",
      salary: "₹5–12 LPA",
      placement: "88%",
      bestFor: "Web Developers",
      badge: "Best for Freshers",
      badgeColor: "bg-green-600",
    },
    {
      title: "Java Backend",
      subtitle: "Enterprise Backend Systems",
      desc: "Master Spring Boot, REST APIs, and microservices — the stack powering Fortune 500 companies. Ideal for enterprise-track careers.",
      image: "/java_backend.jpeg",
      duration: "3 months",
      level: "Advanced",
      path: "/programs/java-backend",
      salary: "₹6–15 LPA",
      placement: "89%",
      bestFor: "Backend Engineers",
      badge: "Enterprise Track",
      badgeColor: "bg-blue-700",
    },
    {
      title: "Cybersecurity",
      subtitle: "Information Security & Ethical Hacking",
      desc: "Learn to think like an attacker. Hands-on labs in threat analysis, penetration testing, and security hardening.",
      image: "/cybersecurity.jpeg",
      duration: "3 months",
      level: "Advanced",
      path: "/programs/cybersecurity",
      salary: "₹7–16 LPA",
      placement: "87%",
      bestFor: "Security Analysts",
      badge: "High Demand",
      badgeColor: "bg-red-600",
    },
    {
      title: "Python",
      subtitle: "Python Programming & Backend",
      desc: "Start fast with Python — the most beginner-friendly yet powerful language. Build APIs, automate workflows, and enter tech confidently.",
      image: "/python.jpeg",
      duration: "3 months",
      level: "Beginner",
      path: "/programs/python",
      salary: "₹4–10 LPA",
      placement: "85%",
      bestFor: "Career Switchers",
      badge: "Best for Beginners",
      badgeColor: "bg-teal-600",
    },
  ];

  const filters = ["All", "Beginner", "Intermediate", "Advanced"];
  const filtered =
    activeFilter === "All"
      ? programs
      : programs.filter((p) => p.level === activeFilter);

  return (
    <div className="w-full">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        handleNavClick={handleNavClick}
        handleLogoClick={() => setMobileMenuOpen(false)}
      />

      <section
        id="home"
        aria-labelledby="hero-heading"
        className="relative flex items-center justify-center px-0 pt-4 overflow-hidden text-white md:px-6"
        style={{ marginTop: "var(--site-header-offset, 4rem)" }}>
        {/* Option C: Theme blue with hexagon pattern */}
        <div className="absolute inset-0 bg-[#0A2342]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.22]"
          aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V18L28 2l28 16v32L28 66zm0 34L0 84V52l28-16 28 16v32L28 100z' fill='none' stroke='rgba(255,122,0,0.55)' stroke-width='1'/%3E%3C/svg%3E")`,
              backgroundSize: "56px 100px",
            }}
          />
        </div>
        <div className="pointer-events-none absolute -left-10 top-10 h-80 w-80 rounded-full bg-[#FF7A00]/20 blur-[80px]" />
        <div className="pointer-events-none absolute right-10 top-20 h-64 w-64 rounded-full bg-[#FF7A00]/10 blur-[70px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-48 w-[600px] -translate-x-1/2 rounded-full bg-[#FF7A00]/10 blur-[60px]" />
        <div
          className="relative z-20 w-full mx-auto"
          style={{ paddingTop: "var(--site-header-offset, 4rem)" }}>
          <div className="relative">
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                background: `radial-gradient(circle at ${cursorGlow.x}% ${cursorGlow.y}%, rgba(255, 122, 0, 0.25) 0%, transparent 50%)`,
              }}
            />

            <div className="relative z-10 px-2 py-3 text-center md:px-8 md:py-12">
              <h1 className="group relative mx-auto w-fit overflow-hidden rounded-full px-0.5 py-0.5 text-center">
                <div className="animate-gradient-x absolute inset-0 rounded-full bg-gradient-to-r from-[#FF7A00] via-[#0A2342] to-[#FF7A00] bg-[length:200%_200%] opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10 px-6 py-3 text-xl font-bold tracking-tight uppercase border rounded-full border-white/30 bg-gradient-to-r from-white/95 via-blue-50/95 to-white/95 backdrop-blur-sm md:text-2xl">
                  <span className="text-black">
                    Where Learning Meets Opportunity.
                  </span>
                </div>
                <div className="absolute inset-0 transition-shadow duration-500 rounded-full shadow-lg -z-10 shadow-orange-500/20 group-hover:shadow-orange-500/40" />
              </h1>

              <div
                ref={heroPillsRef}
                className="flex items-center justify-start gap-3 px-2 py-2 mx-auto mt-10 mb-8 overflow-x-auto no-scrollbar flex-nowrap md:flex-wrap md:justify-center md:gap-4 md:overflow-visible"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                {heroPills.map((pill, index) => {
                  const Icon = pill.icon;

                  return (
                    <motion.div
                      key={`${pill.text}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: index * 0.06 }}
                      className="shrink-0">
                      <div
                        className={`flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r px-5 py-3 text-sm font-medium text-white shadow-lg md:text-base ${pill.color}`}
                        role="note">
                        <Icon style={{ color: pill.iconColor }} size={16} />
                        <span className="whitespace-nowrap">{pill.text}</span>
                        <Briefcase className="ml-1 text-white/50" size={12} />
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.h1
                id="hero-heading"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="px-2 mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:mb-8 md:text-5xl">
                Launch your{" "}
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-[#FF7A00]/15 opacity-60 blur-xl" />
                  <motion.span
                    key={heroWordIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="animate-gradient-x relative bg-gradient-to-r from-[#FF7A00] via-[#FFB273] to-[#FF7A00] bg-clip-text font-black text-transparent">
                    {heroWords[heroWordIndex]}
                  </motion.span>
                </span>{" "}
                with real-world experience
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="max-w-4xl mx-auto mb-10 text-lg leading-relaxed tracking-wide text-slate-200 md:mb-12 md:text-xl">
                Join 5,000+ students who transformed their careers with hands-on
                projects, expert mentorship, and industry-recognized
                certifications in cutting-edge technologies.
              </motion.p>

              <div className="flex flex-wrap justify-center gap-8">
                {[
                  {
                    target: 10000,
                    suffix: "K+",
                    label: "Students Trained",
                    color: "text-[#FF7A00]",
                  },
                  {
                    target: 98,
                    suffix: "%",
                    label: "Success Rate",
                    color: "text-[#FF7A00]",
                  },
                  {
                    target: 3,
                    suffix: "+",
                    label: "Years of Excellence",
                    color: "text-[#FF7A00]",
                  },
                  {
                    target: 50,
                    suffix: "",
                    label: "Program",
                    color: "text-[#FF7A00]",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="text-center">
                    <div
                      className={`mb-1 text-3xl font-bold md:text-4xl ${stat.color}`}>
                      <AnimatedCounter
                        target={stat.target}
                        suffix={stat.suffix}
                      />
                    </div>
                    <div className="text-sm text-slate-200 md:text-base">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style>{`
    @keyframes gradient-x {
      0%,
      100% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
    }

    .animate-gradient-x {
      background-size: 200% 200%;
      animation: gradient-x 3s ease infinite;
    }

    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
  `}</style>
      </section>

      <section className="py-12 md:py-16 px-6 bg-[#f6f8fb]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl text-slate-900">
              Choose Your Learning Path
            </h2>
            <div className="w-24 h-1 bg-[#FF7A00] mx-auto mb-4" />
            <p className="max-w-2xl mx-auto mb-8 text-lg text-slate-600">
              Pick from 6+ in-demand domains. Each program is designed to make
              you industry-ready.
            </p>

            {/* Filter tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-5 py-2 rounded-full font-semibold text-sm transition-all border-2 ${
                    activeFilter === f
                      ? "bg-[#0A2342] text-white border-[#0A2342]"
                      : "bg-white text-slate-600 border-slate-200 hover:border-[#FF7A00] hover:text-[#FF7A00]"
                  }`}>
                  {f}
                </button>
              ))}
            </div>

            {/* Compare CTA */}
            <div className="flex justify-center mb-10">
              <Link
                to="/programs/compare"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0A2342] to-[#14345d] hover:from-[#14345d] hover:to-[#1d4b7a] text-white font-bold px-8 py-3.5 rounded-xl transition-all text-sm shadow-lg hover:shadow-xl shadow-blue-200">
                ⚖️ Compare Programs Side-by-Side
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-8 mt-2 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((program, index) => (
                <div
                  key={index}
                  className="group flex flex-col overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-[#FF7A00] hover:shadow-xl">
                  <div className="overflow-hidden h-44 bg-slate-100">
                    <img
                      src={program.image}
                      alt={`${program.title} program`}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-[#FF7A00]">
                          {program.title}
                        </h3>
                        <p className="mt-1 text-sm font-semibold text-[#FF7A00]">
                          {program.subtitle}
                        </p>
                      </div>
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#0A2342] text-white shadow-sm">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold text-white shadow ${program.badgeColor}`}>
                        {program.badge}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-3 py-1 text-xs font-bold text-[#0A2342]">
                        <Clock3 className="h-3.5 w-3.5 text-[#FF7A00]" />
                        {program.duration}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-3 py-1 text-xs font-bold text-[#0A2342]">
                        Online
                      </span>
                    </div>

                    <p className="mt-4 min-h-[72px] text-sm leading-relaxed text-slate-600">
                      {program.desc}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mt-5 text-sm">
                      <div className="px-3 py-3 rounded-2xl bg-slate-50">
                        <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                          Salary
                        </div>
                        <div className="mt-1 flex items-center gap-1 font-bold text-[#0A2342]">
                          <IndianRupee className="h-3.5 w-3.5 text-[#FF7A00]" />
                          <span>{program.salary.replace("₹", "")}</span>
                        </div>
                      </div>
                      <div className="px-3 py-3 rounded-2xl bg-slate-50">
                        <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                          Placement
                        </div>
                        <div className="mt-1 flex items-center gap-1 font-bold text-[#0A2342]">
                          <Star className="h-3.5 w-3.5 fill-[#FF7A00] text-[#FF7A00]" />
                          <span>{program.placement}</span>
                        </div>
                      </div>
                    </div>

                    <div className="px-4 py-3 mt-3 border rounded-2xl border-slate-100 bg-slate-50">
                      <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                        Best for
                      </div>
                      <div className="mt-1 flex items-center gap-2 text-sm font-semibold text-[#0A2342]">
                        <Users className="h-4 w-4 text-[#FF7A00]" />
                        <span>{program.bestFor}</span>
                      </div>
                    </div>

                    <Link
                      to={program.path}
                      className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0A2342] to-[#14345d] px-6 py-3 font-bold text-white transition-all duration-200 hover:from-[#14345d] hover:to-[#1d4b7a]">
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-6 bg-gradient-to-br from-[#0A2342] to-[#1a3a5f]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            Not Sure Which Program to Pick?
          </h2>
          <p className="mb-8 text-lg md:text-xl text-slate-200">
            We&apos;ll help you find the right fit — whether you&apos;re just
            starting out or switching careers.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={handleApplyNow}
              className="bg-[#FF7A00] hover:bg-[#e06800] text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors duration-200 w-full sm:w-auto shadow-[0_8px_24px_-8px_rgba(255,122,0,0.55)]">
              Enroll Now
            </button>
            <Link
              to="/programs/compare"
              className="w-full px-8 py-4 text-lg font-bold text-white transition-colors duration-200 border-2 bg-white/10 hover:bg-white/20 rounded-xl border-white/30 hover:border-white/60 sm:w-auto">
              ⚖️ Compare All Programs
            </Link>
            <Link
              to="/faq"
              className="w-full px-6 py-4 font-semibold text-center underline transition-colors duration-200 text-slate-300 hover:text-white rounded-xl underline-offset-4 sm:w-auto">
              Browse FAQs
            </Link>
          </div>
        </div>
      </section>

      <Footer handleNavClick={handleNavClick} />
    </div>
  );
}
