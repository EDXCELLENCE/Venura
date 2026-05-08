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

  const handleNavClick = (e, label) => {
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
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0A2342] to-[#FF7A00] text-white py-24 text-center mt-16" style={{ marginTop: 'var(--site-header-offset, 4rem)' }}>
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Venura — Building a Global Tech Ecosystem
        </motion.h1>
        <p className="mt-8 text-xl max-w-3xl mx-auto px-4">
          Venura is a global Tech brand redefining how learners worldwide gain future‑ready skills. We combine world‑class education, real internships, and global mentorship to create confident professionals prepared for international careers.
        </p>
      </section>

      {/* Who We Are */}
      <section className="py-12 border-t-2 border-[#0A2342]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#FF7A00] to-transparent mb-4"></div>
          <p className="text-gray-700">
            Venuratech is a technology solutions provider committed to using
            cutting-edge tools and methodologies to build impactful digital
            products. Our mission is to bridge the gap between business needs
            and technology execution.
          </p>
          <p className="text-gray-700 mt-3">
            From enterprise-grade applications to innovative software products,
            we partner with clients to help them solve complex problems with
            simplicity, performance, and scalability at the core.
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
      <section className="py-12 bg-white border-t-2 border-[#0A2342]">
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
      <section className="py-12 bg-white border-t-2 border-[#0A2342]">
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
      <section className="py-12 border-t-2 border-[#0A2342]">
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
      <section className="py-12 bg-gradient-to-r from-[#FF7A00] to-[#0A2342] text-white border-t-2 border-[#0A2342]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-8"
          >
            Let's Build the Global Future Together
          </motion.h2>
          <p className="text-white/90 mb-12 text-lg">
            Whether you're a student, mentor, or hiring partner — there's a
            place for you in our ecosystem.
          </p>
          <Button
            className="px-12 py-7 rounded-2xl text-lg bg-white text-[#0A2342] hover:bg-gray-100 font-bold"
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
