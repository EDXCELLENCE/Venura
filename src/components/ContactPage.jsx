import { useState, useEffect } from 'react'
import { Mail, MapPin, Phone, Clock, CheckCircle2, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import toast from 'react-hot-toast'
import Header from './Header'
import Footer from './Footer'

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('general')
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false,
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    document.title = 'Contact | Venura'
  }, [])

  const handleNavClick = (e) => {
    e.preventDefault()
    setMobileMenuOpen(false)
  }

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setValues((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validateForm = () => {
    const nextErrors = {}

    if (!values.name.trim()) {
      nextErrors.name = 'Full name is required'
    }
    if (!values.email.trim()) {
      nextErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = 'Enter a valid email address'
    }
    if (!values.phone.trim()) {
      nextErrors.phone = 'Phone number is required'
    } else if (!/^[0-9\s\-+()]*$/.test(values.phone)) {
      nextErrors.phone = 'Enter a valid phone number'
    }
    if (!values.message.trim()) {
      nextErrors.message = 'Message is required'
    }
    if (!values.consent) {
      nextErrors.consent = 'You must agree to be contacted'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    setErrorMessage('')
    try {
      const subject = encodeURIComponent(`Venura Contact: ${values.subject || 'General Inquiry'}`)
      const body = encodeURIComponent(
        [
          `Name: ${values.name}`,
          `Email: ${values.email}`,
          `Phone: ${values.phone}`,
          `Subject: ${values.subject}`,
          '',
          'Message:',
          values.message,
        ].join('\n')
      )

      window.location.href = `mailto:info@venuratech.com?subject=${subject}&body=${body}`
      setSuccessMessage(true)
      setValues({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        consent: false,
      })
      setTimeout(() => setSuccessMessage(false), 5000)
    } catch (error) {
      setErrorMessage(error.message || 'Failed to submit form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactOptions = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Customer Support',
      details: '+91 7093769898',
      description: '24/7 Technical Support',
      color: 'bg-blue-500',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Business Inquiries',
      details: 'contact@venuratech.com',
      description: 'Response within 2 hours',
      color: 'bg-purple-500',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: 'Partnerships',
      details: 'partners@venuratech.com',
      description: 'Strategic partnerships',
      color: 'bg-green-500',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Careers',
      details: 'careers@venuratech.com',
      description: 'Join our team',
      color: 'bg-[#FF7A00]',
    },
  ]

  const services = [
    {
      title: 'Full-Stack Development',
      description: 'Comprehensive development solutions',
      icon: '💻',
    },
    {
      title: 'AI & Machine Learning',
      description: 'Intelligent systems & automation',
      icon: '🤖',
    },
    {
      title: 'Web Development',
      description: 'Modern web applications',
      icon: '🌐',
    },
    {
      title: 'Mobile Apps',
      description: 'iOS & Android development',
      icon: '📱',
    },
  ]

  const faqs = {
    general: [
      {
        question: 'What programs do you offer?',
        answer: 'We offer Full-Stack Development, AI & ML, Data Science, Python, Java Backend, Cybersecurity, and specialized Ambassador programs.',
      },
      {
        question: 'How do you ensure quality?',
        answer: 'We follow industry best practices with mentor-guided projects, code reviews, and comprehensive assessments at each level.',
      },
      {
        question: "What's the typical program duration?",
        answer: 'Foundation level takes 4-8 weeks, Professional level 12-16 weeks, and Expert level 16-20 weeks with flexibility based on learning pace.',
      },
    ],
    technical: [
      {
        question: 'What technologies do you teach?',
        answer: 'We focus on popular tech stacks including React.js, Node.js, Python, Java, Machine Learning libraries, and cloud platforms like AWS.',
      },
      {
        question: 'Do you provide internship support?',
        answer: 'Yes, we provide internship pathways with startups and established companies as part of our placement support.',
      },
      {
        question: 'Is there post-program support?',
        answer: 'Absolutely. We provide lifetime access to learning materials, community support, and career guidance assistance.',
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-[#0A2342]">
      <Toaster />
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        handleNavClick={handleNavClick}
        handleLogoClick={handleLogoClick}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#0A2342] to-[#1a3d5c] text-white pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center space-x-2 mb-6">
              <Phone className="w-5 h-5 text-[#FF7A00]" />
              <span className="text-sm font-medium text-orange-100">24/7 Support Available</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Get in Touch with<span className="block text-[#FF7A00]">Venura Today</span>
            </h1>
            <p className="text-lg text-slate-200 mb-8 max-w-2xl">
              Have questions about our programs? Ready to start your learning journey? Our team is here to help you find the perfect program and path for your career goals.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Options Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactOptions.map((option, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className={`w-12 h-12 ${option.color} rounded-lg flex items-center justify-center mb-4 text-white`}>
                {option.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{option.title}</h3>
              <p className="text-slate-800 font-medium mb-1">{option.details}</p>
              <p className="text-sm text-slate-600">{option.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-8 shadow-sm"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Send us a message</h2>
              <p className="text-slate-600">We'll respond within 24 hours</p>
            </div>

            {successMessage && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded-lg"
              >
                <div className="flex items-center">
                  <CheckCircle2 className="text-green-500 text-xl mr-3" />
                  <p className="text-green-800 font-medium">Thank you for your message! We'll contact you shortly.</p>
                </div>
              </motion.div>
            )}

            {errorMessage && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-lg">
                <p className="text-red-800 font-medium">{errorMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:border-[#FF7A00] transition-colors ${
                      errors.name ? 'border-red-500' : 'border-slate-300'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:border-[#FF7A00] transition-colors ${
                      errors.email ? 'border-red-500' : 'border-slate-300'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={values.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:border-[#FF7A00] transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-slate-300'
                    }`}
                    placeholder="+91 XXXXXXXXXX"
                  />
                  {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                  <select
                    name="subject"
                    value={values.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:border-[#FF7A00] transition-colors bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="program-inquiry">Program Inquiry</option>
                    <option value="internship">Internship Program</option>
                    <option value="careers">Career Opportunities</option>
                    <option value="partnership">Partnership</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Your Message *</label>
                <textarea
                  name="message"
                  value={values.message}
                  onChange={handleInputChange}
                  rows="5"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:border-[#FF7A00] transition-colors ${
                    errors.message ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="Tell us how we can help you..."
                />
                {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
              </div>

              <div className="flex items-start space-x-3 py-4">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={values.consent}
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 text-[#FF7A00] border-slate-300 rounded focus:ring-[#FF7A00]"
                />
                <label htmlFor="consent" className="text-sm text-slate-700">
                  I agree to be contacted by Venura regarding my inquiry. Your information will be used in accordance with our Privacy Policy.
                </label>
              </div>
              {errors.consent && <p className="text-red-600 text-sm">{errors.consent}</p>}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-[#FF7A00] text-white font-semibold py-3 px-6 rounded-lg transition-all ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#ff8f2a]'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Services */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">Our Programs</h3>
              <div className="space-y-3">
                {services.map((service, idx) => (
                  <div key={idx} className="flex items-center p-3 hover:bg-slate-50 rounded-lg transition-colors">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-lg">{service.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900">{service.title}</h4>
                      <p className="text-sm text-slate-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Get in Touch */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#0A2342] text-white rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                    <Phone className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-orange-100">Call Us</p>
                    <p className="font-semibold">+91 7093769898</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                    <Clock className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-orange-100">Business Hours</p>
                    <p className="font-semibold">Mon-Sat: 9AM-8PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Follow Us */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">Follow Us</h3>
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, color: 'bg-blue-600 hover:bg-blue-700' },
                  { icon: Twitter, color: 'bg-sky-500 hover:bg-sky-600' },
                  { icon: Linkedin, color: 'bg-blue-700 hover:bg-blue-800' },
                  { icon: Instagram, color: 'bg-pink-600 hover:bg-pink-700' },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href="#"
                    whileHover={{ y: -3 }}
                    className={`w-10 h-10 ${social.color} rounded-lg flex items-center justify-center text-white transition-colors`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Frequently Asked Questions</h2>
            <p className="text-slate-600">Find answers to common questions</p>
          </div>

          <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
            {Object.keys(faqs).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors whitespace-nowrap ${
                  selectedCategory === key
                    ? 'bg-[#FF7A00] text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {faqs[selectedCategory].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#FF7A00] transition-colors"
              >
                <h3 className="font-semibold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-gradient-to-r from-[#0A2342] to-[#1a3d5c] rounded-2xl text-white p-8 md:p-12 text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how Venura can help you build a successful career in tech with our expert-led programs and industry partnerships.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF7A00] text-white hover:bg-[#ff8f2a] font-semibold py-3 px-8 rounded-lg"
            >
              Schedule a Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg"
            >
              Explore Programs
            </motion.button>
          </div>
        </motion.div>
      </div>

      <Footer handleNavClick={handleNavClick} />
    </div>
  )
}
