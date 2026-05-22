import { useState, useEffect } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  CheckCircle2,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MessageCircle,
  Star,
  Users,
  Award,
  Building2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";
import Header from "./Header";
import Footer from "./Footer";

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [openFaq, setOpenFaq] = useState(null);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    level: "",
    program: "",
    commitment: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    document.title = "Contact | Venura";
  }, []);

  const handleNavClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = "Full name is required";
    if (!values.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Enter a valid email address (e.g. name@gmail.com)";
    }
    if (!values.phone.trim()) {
      nextErrors.phone = "Phone number is required";
    } else if (!/^[0-9\s\-+()]*$/.test(values.phone)) {
      nextErrors.phone =
        "Enter a valid 10-digit Indian number (e.g. +91 9XXXXXXXXX)";
    } else if (values.phone.replace(/\D/g, "").length < 10) {
      nextErrors.phone = "Phone number must have at least 10 digits";
    }
    if (!values.message.trim())
      nextErrors.message = "Please tell us how we can help you";
    if (!values.consent)
      nextErrors.consent = "You must agree to be contacted to proceed";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrorMessage("");
    try {
      const subject = encodeURIComponent(
        `Venura Contact: ${values.subject || "General Inquiry"}`,
      );
      const body = encodeURIComponent(
        [
          `Name: ${values.name}`,
          `Email: ${values.email}`,
          `Phone: ${values.phone}`,
          `Subject: ${values.subject || "General Inquiry"}`,
          `Current Level: ${values.level || "Not specified"}`,
          `Program Interest: ${values.program || "Not specified"}`,
          `Time Commitment: ${values.commitment || "Not specified"}`,
          "",
          "Message:",
          values.message,
        ].join("\n"),
      );
      window.location.href = `mailto:info@venuratech.com?subject=${subject}&body=${body}`;
      setSuccessMessage(true);
      setValues({
        name: "",
        email: "",
        phone: "",
        subject: "",
        level: "",
        program: "",
        commitment: "",
        message: "",
        consent: false,
      });
      setTimeout(() => setSuccessMessage(false), 6000);
    } catch (error) {
      setErrorMessage(
        error.message || "Failed to submit form. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactOptions = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Customer Support",
      details: "+91 7093769898",
      description: "Response within 15 min",
      color: "bg-blue-500",
      action: { label: "Call Now", href: "tel:+917093769898" },
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      details: "+91 7093769898",
      description: "Fastest response channel",
      color: "bg-green-500",
      action: {
        label: "Chat",
        href: "https://wa.me/917093769898?text=Hi%20Venura%2C%20I%27d%20like%20to%20know%20more%20about%20your%20programs.",
      },
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "info@venuratech.com",
      description: "Response within 2 hours",
      color: "bg-purple-500",
      action: { label: "Send Email", href: "mailto:info@venuratech.com" },
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: "Koramangala, Bangalore",
      description: "Karnataka 560034",
      color: "bg-[#FF7A00]",
      action: {
        label: "Get Directions",
        href: "https://maps.google.com/?q=Koramangala,Bangalore",
      },
    },
  ];

  const stats = [
    {
      value: "2000+",
      label: "Students Trained",
      icon: <Users className="w-5 h-5" />,
    },
    {
      value: "95%",
      label: "Placement Rate",
      icon: <Award className="w-5 h-5" />,
    },
    {
      value: "ISO",
      label: "Certified Institute",
      icon: <CheckCircle2 className="w-5 h-5" />,
    },
    {
      value: "50+",
      label: "Industry Partners",
      icon: <Building2 className="w-5 h-5" />,
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Full-Stack Developer @ Infosys",
      text: "Venura changed my career trajectory. Their hands-on projects landed me my first dev role in 4 months.",
      rating: 5,
    },
    {
      name: "Rahul Verma",
      role: "AI Engineer @ Startup",
      text: "The mentorship and internship support at Venura is unmatched. Highly recommend to anyone serious about tech.",
      rating: 5,
    },
    {
      name: "Divya Nair",
      role: "Data Analyst @ Deloitte",
      text: "From a non-tech background to a data analyst role. The structured learning path at Venura made it possible.",
      rating: 5,
    },
  ];

  const services = [
    {
      title: "Full-Stack Development",
      description: "React, Node.js, Databases",
      icon: "💻",
    },
    {
      title: "AI & Machine Learning",
      description: "Python, TensorFlow, NLP",
      icon: "🤖",
    },
    {
      title: "Data Science",
      description: "Analytics, Visualization, SQL",
      icon: "📊",
    },
    {
      title: "Cybersecurity",
      description: "Ethical Hacking, Cloud Security",
      icon: "🔐",
    },
  ];

  const faqs = {
    general: [
      {
        question: "What programs do you offer?",
        answer:
          "We offer Full-Stack Development, AI & ML, Data Science, Python, Java Backend, and Cybersecurity programs at Foundation, Professional, and Expert levels.",
      },
      {
        question: "How quickly will you respond?",
        answer:
          "WhatsApp: within 15 minutes. Phone: immediate. Email: within 2 hours. Our admissions team is available Mon–Sat 9AM–8PM.",
      },
      {
        question: "Do you offer free counseling before enrolling?",
        answer:
          "Yes! We offer a free 1:1 career guidance call to map your background, goals, and best-fit program before you commit to anything.",
      },
    ],
    technical: [
      {
        question: "What technologies do you teach?",
        answer:
          "Frontend: React.js, Tailwind CSS. Backend: Node.js, Python, Java. Databases: MongoDB, PostgreSQL. Cloud: AWS, Docker. Plus AI/ML libraries like TensorFlow and PyTorch.",
      },
      {
        question: "Do you provide internship support?",
        answer:
          "Yes. We provide internship pathways with startups and established companies as part of our Expert-level program packages.",
      },
      {
        question: "Is there post-program career support?",
        answer:
          "Absolutely. You get lifetime access to learning materials, resume review, mock interviews, and active placement support through our partner network.",
      },
    ],
    programs: [
      {
        question: "What's the typical program duration?",
        answer:
          "Foundation: 4–8 weeks. Professional: 12–16 weeks. Expert: 16–20 weeks. We offer flexible weekday evening and weekend batches for working professionals.",
      },
      {
        question: "Are programs suitable for working professionals?",
        answer:
          "Absolutely. All programs have weekday evening (7–10 PM) and weekend batch options, plus recorded access so you can learn at your own pace.",
      },
      {
        question: "What certifications will I receive?",
        answer:
          "You earn a Skill Certificate at Foundation level, Project Certificate at Professional level, and an Internship Certificate at Expert level – all industry recognized.",
      },
    ],
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:border-[#FF7A00] outline-none transition-colors text-sm ${
      errors[field] ? "border-red-400 bg-red-50" : "border-slate-300 bg-white"
    }`;

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-[#0A2342]">
      <Toaster />
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        handleNavClick={handleNavClick}
        handleLogoClick={handleLogoClick}
      />

      {/* Hero */}
      <div
        className="bg-gradient-to-br from-[#0A2342] via-[#112d56] to-[#0A2342] text-white pt-16 relative overflow-hidden"
        style={{ paddingTop: "var(--site-header-offset, 4rem)" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-80 h-80 bg-[#FF7A00] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#FF7A00] rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 px-4 py-10 mx-auto max-w-7xl sm:px-6 lg:px-8 md:py-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl">
            <div className="flex items-center mb-6 space-x-2">
              <MessageCircle className="w-5 h-5 text-[#FF7A00]" />
              <span className="text-sm font-medium text-orange-100">
                24/7 Support Available
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
              Get in Touch with
              <span className="block text-[#FF7A00]">Venura Today</span>
            </h1>
            <p className="max-w-2xl mb-8 text-lg text-slate-200">
              Have questions about our programs? Ready to start your tech career
              journey? Our admissions team is here to guide you to the perfect
              program.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/917093769898?text=Hi%20Venura%2C%20I%27d%20like%20to%20know%20more%20about%20your%20programs."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white transition-colors bg-green-500 rounded-lg hover:bg-green-600">
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
              <a
                href="tel:+917093769898"
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white transition-colors border rounded-lg bg-white/10 hover:bg-white/20 border-white/30">
                <Phone className="w-5 h-5" /> Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-20 px-4 pb-16 mx-auto mt-0 max-w-7xl sm:px-6 lg:px-8 md:-mt-8">
        {/* Contact Option Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-14">
          {contactOptions.map((option, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="p-6 transition-all duration-300 bg-white border shadow-sm rounded-xl border-slate-200 hover:shadow-md">
              <div
                className={`w-12 h-12 ${option.color} rounded-lg flex items-center justify-center mb-4 text-white`}>
                {option.icon}
              </div>
              <h3 className="mb-1 text-base font-semibold text-slate-900">
                {option.title}
              </h3>
              <p className="text-slate-800 font-medium text-sm mb-0.5">
                {option.details}
              </p>
              <p className="mb-4 text-xs text-slate-500">
                {option.description}
              </p>
              <a
                href={option.action.href}
                target={
                  option.action.href.startsWith("http") ? "_blank" : undefined
                }
                rel={
                  option.action.href.startsWith("http")
                    ? "noreferrer"
                    : undefined
                }
                className="inline-flex items-center gap-1 text-xs font-bold text-[#FF7A00] hover:underline">
                {option.action.label} <ExternalLink className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats / Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 bg-[#0A2342] rounded-2xl p-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center text-white">
              <div className="flex items-center justify-center gap-2 text-[#FF7A00] mb-2">
                {stat.icon}
              </div>
              <p className="text-3xl font-extrabold text-[#FF7A00]">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-slate-300">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Main Content: Form + Sidebar */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mb-14">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 bg-white border shadow-sm lg:col-span-2 rounded-xl border-slate-200">
            <div className="mb-6">
              <h2 className="mb-1 text-2xl font-bold text-slate-900">
                Send us a message
              </h2>
              <p className="text-sm text-slate-500">
                We&apos;ll respond within 24 hours •{" "}
                <span className="font-medium text-green-600">
                  WhatsApp replies in 15 min
                </span>
              </p>
            </div>

            {successMessage && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="flex items-center gap-3 p-4 mb-6 border-l-4 border-green-500 rounded-lg bg-green-50">
                <CheckCircle2 className="flex-shrink-0 w-5 h-5 text-green-500" />
                <p className="text-sm font-medium text-green-800">
                  Thank you! Your email app will open with a pre-filled message.
                  We&apos;ll respond within 2 hours.
                </p>
              </motion.div>
            )}

            {errorMessage && (
              <div className="p-4 mb-6 border-l-4 border-red-500 rounded-lg bg-red-50">
                <p className="text-sm font-medium text-red-800">
                  {errorMessage}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Email */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleInputChange}
                    className={inputClass("name")}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                    className={inputClass("email")}
                    placeholder="name@gmail.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Phone + Subject */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={values.phone}
                    onChange={handleInputChange}
                    className={inputClass("phone")}
                    placeholder="+91 9XXXXXXXXX"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={values.subject}
                    onChange={handleInputChange}
                    className={inputClass("subject")}>
                    <option value="">Select a subject</option>
                    <option value="Program Inquiry">Program Inquiry</option>
                    <option value="Internship Program">
                      Internship Program
                    </option>
                    <option value="Career Opportunities">
                      Career Opportunities
                    </option>
                    <option value="Partnership">Partnership</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Lead Qualification: Level + Program */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Your Current Level
                  </label>
                  <select
                    name="level"
                    value={values.level}
                    onChange={handleInputChange}
                    className={inputClass("level")}>
                    <option value="">Select your profile</option>
                    <option value="Student">Student</option>
                    <option value="Fresh Graduate">Fresh Graduate</option>
                    <option value="Working Professional">
                      Working Professional
                    </option>
                    <option value="Career Changer">Career Changer</option>
                    <option value="Entrepreneur">Entrepreneur</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Program Interested In
                  </label>
                  <select
                    name="program"
                    value={values.program}
                    onChange={handleInputChange}
                    className={inputClass("program")}>
                    <option value="">Select a program</option>
                    <option value="Full-Stack Development">
                      Full-Stack Development
                    </option>
                    <option value="AI & ML">AI & Machine Learning</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="Python">Python</option>
                    <option value="Java Backend">Java Backend</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
              </div>

              {/* Time Commitment */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Time Commitment
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {["Full-time", "Part-time", "Weekends only"].map((opt) => (
                    <label
                      key={opt}
                      className={`flex items-center justify-center text-sm py-2.5 px-3 rounded-lg border cursor-pointer transition-all ${
                        values.commitment === opt
                          ? "border-[#FF7A00] bg-orange-50 text-[#FF7A00] font-semibold"
                          : "border-slate-300 text-slate-600 hover:border-[#FF7A00]/50"
                      }`}>
                      <input
                        type="radio"
                        name="commitment"
                        value={opt}
                        checked={values.commitment === opt}
                        onChange={handleInputChange}
                        className="hidden"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={values.message}
                  onChange={handleInputChange}
                  rows="4"
                  className={inputClass("message")}
                  placeholder="Tell us your background, goals, and how we can help..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                )}
              </div>

              {/* Consent */}
              <div className="flex items-start gap-3 py-2">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={values.consent}
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 accent-[#FF7A00] border-slate-300 rounded"
                />
                <label htmlFor="consent" className="text-sm text-slate-600">
                  I agree to be contacted by Venura regarding my inquiry. Your
                  information is used only for counseling — no spam, ever.
                </label>
              </div>
              {errors.consent && (
                <p className="text-xs text-red-500">{errors.consent}</p>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-[#FF7A00] text-white font-semibold py-3.5 px-6 rounded-lg transition-all text-sm ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-[#e06900]"}`}>
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="w-4 h-4 text-white animate-spin"
                      fill="none"
                      viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </motion.button>

              {/* Quick CTA Alternatives */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                <a
                  href="https://wa.me/917093769898?text=Hi%20Venura!"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-green-600 border border-green-200 px-3 py-1.5 rounded-lg hover:bg-green-50 transition-colors">
                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Us
                </a>
                <a
                  href="https://venuratech.com/dashboard/student/login"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#FF7A00] border border-orange-200 px-3 py-1.5 rounded-lg hover:bg-orange-50 transition-colors">
                  Apply Now →
                </a>
              </div>
            </form>
          </motion.div>
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Programs */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 bg-white border shadow-sm rounded-xl border-slate-200">
              <h3 className="mb-4 text-lg font-bold text-slate-900">
                Our Programs
              </h3>
              <div className="space-y-3">
                {services.map((service, idx) => (
                  <div
                    key={idx}
                    className="flex items-center p-3 transition-colors rounded-lg cursor-pointer hover:bg-slate-50 group">
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 text-lg bg-orange-100 rounded-lg">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 text-sm group-hover:text-[#FF7A00] transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Get in Touch (dark card) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#0A2342] text-white rounded-xl p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-bold">Direct Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-lg bg-white/20">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-orange-200">Call Us</p>
                    <p className="text-sm font-semibold">+91 7093769898</p>
                    <p className="text-xs text-slate-400">Immediate response</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/30">
                    <MessageCircle className="w-4 h-4 text-green-300" />
                  </div>
                  <div>
                    <p className="text-xs text-orange-200">WhatsApp</p>
                    <a
                      href="https://wa.me/917093769898"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold transition-colors hover:text-green-300">
                      Start Chat →
                    </a>
                    <p className="text-xs text-slate-400">
                      Reply in 15 minutes
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-lg bg-white/20">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-orange-200">Business Hours</p>
                    <p className="text-sm font-semibold">Mon–Sat: 9AM–8PM</p>
                    <p className="text-xs text-slate-400">Sun: 11AM–5PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-lg bg-white/20">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-orange-200">Office</p>
                    <p className="text-sm font-semibold">Koramangala</p>
                    <p className="text-xs text-slate-400">
                      Bangalore, KA 560034
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Follow Us */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-5 bg-white border shadow-sm rounded-xl border-slate-200">
              <h3 className="mb-3 text-base font-bold text-slate-900">
                Follow Us
              </h3>
              <div className="flex space-x-3">
                {[
                  {
                    icon: Facebook,
                    color: "bg-blue-600 hover:bg-blue-700",
                    href: "#",
                  },
                  {
                    icon: Twitter,
                    color: "bg-sky-500 hover:bg-sky-600",
                    href: "#",
                  },
                  {
                    icon: Linkedin,
                    color: "bg-blue-700 hover:bg-blue-800",
                    href: "#",
                  },
                  {
                    icon: Instagram,
                    color: "bg-pink-600 hover:bg-pink-700",
                    href: "#",
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-10 h-10 flex items-center justify-center rounded-full ${social.color} text-white transition-colors`}>
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Student Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-14">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-slate-900">
              Student Success Stories
            </h2>
            <p className="text-slate-500">
              Join 2000+ learners who&apos;ve transformed their careers
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="p-6 bg-white border shadow-sm rounded-xl border-slate-200">
                <div className="flex mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#FF7A00] fill-[#FF7A00]"
                    />
                  ))}
                </div>
                <p className="mb-4 text-sm italic text-slate-700">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-[#FF7A00]">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-14">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500">Find answers to common questions</p>
          </div>

          <div className="flex gap-2 pb-1 mb-6 overflow-x-auto">
            {Object.keys(faqs).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors whitespace-nowrap ${
                  selectedCategory === key
                    ? "bg-[#FF7A00] text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            <AnimatePresence>
              {faqs[selectedCategory].map((faq, idx) => (
                <motion.div
                  key={`${selectedCategory}-${idx}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  className="overflow-hidden bg-white border border-slate-200 rounded-xl">
                  <button
                    onClick={() =>
                      setOpenFaq(
                        openFaq === `${selectedCategory}-${idx}`
                          ? null
                          : `${selectedCategory}-${idx}`,
                      )
                    }
                    className="flex items-center justify-between w-full p-5 text-left transition-colors hover:bg-slate-50">
                    <span className="pr-4 text-sm font-semibold text-slate-900">
                      {faq.question}
                    </span>
                    {openFaq === `${selectedCategory}-${idx}` ? (
                      <ChevronUp className="w-5 h-5 text-[#FF7A00] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="flex-shrink-0 w-5 h-5 text-slate-400" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openFaq === `${selectedCategory}-${idx}` && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden">
                        <p className="px-5 pt-3 pb-5 text-sm leading-relaxed border-t text-slate-600 border-slate-100">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* CTA Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-[#0A2342] to-[#1a3d5c] rounded-2xl text-white p-8 md:p-12 text-center mb-8">
          <h2 className="mb-4 text-3xl font-bold">
            Ready to Start Your Tech Journey?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-slate-300">
            Join 2000+ learners who&apos;ve built successful tech careers with
            Venura. Expert-led programs, real internships, and lifetime
            placement support.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <motion.a
              href="https://venuratech.com/dashboard/student/login"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF7A00] text-white hover:bg-[#e06900] font-semibold py-3 px-8 rounded-lg inline-block text-center">
              Apply Now
            </motion.a>
            <motion.a
              href="https://wa.me/917093769898?text=Hi%20Venura%2C%20I%27d%20like%20to%20schedule%20a%20free%20consultation."
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold text-white bg-transparent border-2 border-white rounded-lg hover:bg-white/10">
              <MessageCircle className="w-4 h-4" /> Schedule a Consultation
            </motion.a>
          </div>
        </motion.div>
      </div>
      <Footer handleNavClick={handleNavClick} />
    </div>
  );
}
