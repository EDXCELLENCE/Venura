import React from 'react'
import { Mail, MapPin, Phone, Send, AlertCircle, Clock3, Sparkles, MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { Toaster } from 'react-hot-toast'
import toast from 'react-hot-toast'
import Header from './Header'
import Footer from './Footer'

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [activeFaq, setActiveFaq] = React.useState(0)
  const [values, setValues] = React.useState({
    fullName: '',
    email: '',
    phone: '',
    whatsapp: '',
    program: 'Full-Stack Development',
    careerStage: 'Student',
    preferredContact: 'WhatsApp',
    timeline: 'Within 1 month',
    message: '',
  })
  const [errors, setErrors] = React.useState({})

  React.useEffect(() => {
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
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validateForm = () => {
    const nextErrors = {}

    if (!values.fullName.trim() || values.fullName.trim().length < 2) {
      nextErrors.fullName = 'Name must be at least 2 characters'
    }

    if (!values.email.trim()) {
      nextErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = 'Enter a valid email address'
    }

    if (values.phone && !/^[0-9\s\-+()]*$/.test(values.phone)) {
      nextErrors.phone = 'Enter a valid phone number'
    } else if (values.phone && values.phone.replace(/\D/g, '').length < 10) {
      nextErrors.phone = 'Phone number must be at least 10 digits'
    }

    if (values.whatsapp && !/^[0-9\s\-+()]*$/.test(values.whatsapp)) {
      nextErrors.whatsapp = 'Enter a valid WhatsApp number'
    } else if (values.whatsapp && values.whatsapp.replace(/\D/g, '').length < 10) {
      nextErrors.whatsapp = 'WhatsApp number must be at least 10 digits'
    }

    if (!values.message.trim()) {
      nextErrors.message = 'Message is required'
    } else if (values.message.trim().length < 10) {
      nextErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    try {
      const subject = encodeURIComponent(`Venura Contact: ${values.program}`)
      const body = encodeURIComponent(
        [
          `Name: ${values.fullName}`,
          `Email: ${values.email}`,
          `Phone: ${values.phone || 'N/A'}`,
          `WhatsApp: ${values.whatsapp || 'N/A'}`,
          `Program: ${values.program}`,
          `Career Stage: ${values.careerStage}`,
          `Preferred Contact: ${values.preferredContact}`,
          `Timeline: ${values.timeline}`,
          '',
          'Message:',
          values.message,
        ].join('\n')
      )

      window.location.href = `mailto:info@venuratech.com?subject=${subject}&body=${body}`
      toast.success('Opening your email app with the message draft.')
      setValues({
        fullName: '',
        email: '',
        phone: '',
        whatsapp: '',
        program: 'Full-Stack Development',
        careerStage: 'Student',
        preferredContact: 'WhatsApp',
        timeline: 'Within 1 month',
        message: '',
      })
      setErrors({})
    } catch {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const fieldError = (name) => (
    errors[name] ? (
      <div className="flex items-center gap-1 mt-1 text-red-600 text-xs">
        <AlertCircle className="w-3.5 h-3.5" />
        <span>{errors[name]}</span>
      </div>
    ) : null
  )

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('info@venuratech.com')
      toast.success('Email copied to clipboard')
    } catch {
      toast.error('Could not copy email')
    }
  }

  const faqs = [
    {
      q: 'How quickly will someone respond?',
      a: 'Our admissions team usually replies within 2-6 working hours. For late-night requests, you will receive a response the next business morning.',
    },
    {
      q: 'Can I get program guidance before enrolling?',
      a: 'Yes. We provide a free guidance call to map your background, goals, and best-fit program before you commit.',
    },
    {
      q: 'Do you support working professionals?',
      a: 'Absolutely. We have weekday evening and weekend options, plus recorded access so you can learn with flexibility.',
    },
  ]

  return (
    <div className="min-h-screen bg-white text-[#0A2342]">
      <Toaster />

      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        handleNavClick={handleNavClick}
        handleLogoClick={handleLogoClick}
      />

      <main className="pt-24">
        <section className="relative pt-28 pb-16 px-6 bg-gradient-to-br from-[#0A2342] via-[#123861] to-[#0A2342] overflow-hidden border-b-2 border-[#0A2342]">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-24 left-10 w-72 h-72 bg-[#FF7A00] rounded-full blur-3xl" />
            <div className="absolute bottom-12 right-10 w-96 h-96 bg-[#FF7A00] rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-slate-100 text-sm font-semibold mb-5">
                <Sparkles className="w-4 h-4 text-[#FF7A00]" /> Admissions and Career Guidance Desk
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
                Let&apos;s Build Your
                <span className="block text-[#FF7A00]">Career Roadmap</span>
              </h1>
              <p className="text-lg text-slate-200 max-w-2xl leading-relaxed mb-7">
                Get expert help on program selection, batch planning, and job outcomes. Share your goals and we will suggest the fastest practical path.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl">
                <div className="bg-white/10 border border-white/20 rounded-xl px-3 py-3 text-center">
                  <p className="text-2xl font-bold text-[#FF7A00]">2-6h</p>
                  <p className="text-xs text-slate-200">Avg. Response</p>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-xl px-3 py-3 text-center">
                  <p className="text-2xl font-bold text-[#FF7A00]">1:1</p>
                  <p className="text-xs text-slate-200">Guidance Call</p>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-xl px-3 py-3 text-center col-span-2 sm:col-span-1">
                  <p className="text-2xl font-bold text-[#FF7A00]">100%</p>
                  <p className="text-xs text-slate-200">No Spam Promise</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-3xl p-6 backdrop-blur-md shadow-2xl">
              <h3 className="text-white text-xl font-bold mb-4">Quick Reach Options</h3>
              <div className="space-y-3">
                <a href="mailto:info@venuratech.com" className="flex items-center justify-between bg-white/10 hover:bg-white/20 transition border border-white/20 rounded-xl px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#FF7A00]" />
                    <div>
                      <p className="text-white font-semibold text-sm">Email</p>
                      <p className="text-slate-200 text-xs">info@venuratech.com</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#FF7A00]">Open</span>
                </a>
                <a href="tel:+917093769898" className="flex items-center justify-between bg-white/10 hover:bg-white/20 transition border border-white/20 rounded-xl px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#FF7A00]" />
                    <div>
                      <p className="text-white font-semibold text-sm">Call</p>
                      <p className="text-slate-200 text-xs">+91 7093769898</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#FF7A00]">Dial</span>
                </a>
                <button onClick={copyEmail} className="w-full text-left flex items-center justify-between bg-white/10 hover:bg-white/20 transition border border-white/20 rounded-xl px-4 py-3">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-[#FF7A00]" />
                    <div>
                      <p className="text-white font-semibold text-sm">Copy Email</p>
                      <p className="text-slate-200 text-xs">For quick sharing</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#FF7A00]">Copy</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-14 px-6 bg-slate-50 border-b-2 border-[#0A2342]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
            <aside className="lg:col-span-4 space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">Connect With Our Team</h2>
              <p className="text-slate-600">Tell us where you are now and where you want to go. We will help map the right program and timeline.</p>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Clock3 className="w-5 h-5 text-[#FF7A00]" />
                  <p className="font-bold text-slate-900">Support Hours</p>
                </div>
                <p className="text-sm text-slate-700">Monday - Saturday: 9:30 AM - 8:30 PM</p>
                <p className="text-sm text-slate-700">Sunday: 11:00 AM - 5:00 PM</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 text-[#FF7A00]" />
                  <div>
                    <p className="font-bold text-slate-900 mb-1">Visit Us</p>
                    <p className="text-sm text-slate-700">Koramangala, Bangalore, Karnataka 560034</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[#0A2342]/15 bg-[#0A2342] text-white p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-[#FF7A00]" />
                  <p className="font-bold">Privacy Promise</p>
                </div>
                <p className="text-sm text-slate-200">Your information is used only for counseling and program guidance. No unsolicited marketing.</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-3">What happens after you submit?</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-3"><CheckCircle2 className="w-4 h-4 mt-0.5 text-[#FF7A00]" /><p>Profile review and goals matching</p></div>
                  <div className="flex gap-3"><CheckCircle2 className="w-4 h-4 mt-0.5 text-[#FF7A00]" /><p>Program and batch recommendation</p></div>
                  <div className="flex gap-3"><CheckCircle2 className="w-4 h-4 mt-0.5 text-[#FF7A00]" /><p>Fee plan and next-step guidance</p></div>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-8 rounded-3xl border border-slate-200 p-6 md:p-8 bg-white shadow-lg">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900">Request Personalized Guidance</h3>
                <p className="text-sm text-slate-600 mt-1">Share a few details and our team will reach out with a tailored plan.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold mb-1">Full Name</label>
                    <input id="fullName" name="fullName" value={values.fullName} onChange={handleInputChange} placeholder="Enter your full name" className="w-full rounded-xl border border-slate-300 focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/20 outline-none px-3 py-2.5" />
                    {fieldError('fullName')}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
                    <input id="email" name="email" type="email" value={values.email} onChange={handleInputChange} placeholder="Enter your email" className="w-full rounded-xl border border-slate-300 focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/20 outline-none px-3 py-2.5" />
                    {fieldError('email')}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-1">Phone</label>
                    <input id="phone" name="phone" value={values.phone} onChange={handleInputChange} placeholder="Enter phone number" className="w-full rounded-xl border border-slate-300 focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/20 outline-none px-3 py-2.5" />
                    {fieldError('phone')}
                  </div>

                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-semibold mb-1">WhatsApp</label>
                    <input id="whatsapp" name="whatsapp" value={values.whatsapp} onChange={handleInputChange} placeholder="Enter WhatsApp number" className="w-full rounded-xl border border-slate-300 focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/20 outline-none px-3 py-2.5" />
                    {fieldError('whatsapp')}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="program" className="block text-sm font-semibold mb-1">Program Interest</label>
                    <select id="program" name="program" value={values.program} onChange={handleInputChange} className="w-full rounded-xl border border-slate-300 focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/20 outline-none px-3 py-2.5">
                      <option>AI/ML</option>
                      <option>Data Science</option>
                      <option>Full-Stack Development</option>
                      <option>Java Backend</option>
                      <option>Cybersecurity</option>
                      <option>Python</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="careerStage" className="block text-sm font-semibold mb-1">Career Stage</label>
                    <select id="careerStage" name="careerStage" value={values.careerStage} onChange={handleInputChange} className="w-full rounded-xl border border-slate-300 focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/20 outline-none px-3 py-2.5">
                      <option>Student</option>
                      <option>Working Professional</option>
                      <option>Career Switcher</option>
                      <option>Freelancer</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="preferredContact" className="block text-sm font-semibold mb-1">Preferred Contact</label>
                    <select id="preferredContact" name="preferredContact" value={values.preferredContact} onChange={handleInputChange} className="w-full rounded-xl border border-slate-300 focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/20 outline-none px-3 py-2.5">
                      <option>WhatsApp</option>
                      <option>Phone Call</option>
                      <option>Email</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-semibold mb-1">When do you want to start?</label>
                    <select id="timeline" name="timeline" value={values.timeline} onChange={handleInputChange} className="w-full rounded-xl border border-slate-300 focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/20 outline-none px-3 py-2.5">
                      <option>Immediately</option>
                      <option>Within 1 month</option>
                      <option>1-3 months</option>
                      <option>Just exploring</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-1">What are your goals?</label>
                  <textarea id="message" name="message" rows="5" value={values.message} onChange={handleInputChange} placeholder="Example: I want to transition from support to data science in 4 months and need a roadmap." className="w-full rounded-xl border border-slate-300 focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/20 outline-none px-3 py-2.5" />
                  {fieldError('message')}
                </div>

                <div className="flex flex-wrap gap-3 items-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 bg-[#FF7A00] text-white font-bold px-7 py-3 rounded-xl hover:bg-[#e56d00] disabled:opacity-60"
                  >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? 'Sending...' : 'Request Guidance'}
                  </button>
                  <p className="text-xs text-slate-500">By submitting, you agree to be contacted for counseling and admissions support.</p>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-14 px-6 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-3">
                {faqs.map((item, index) => (
                  <button
                    key={item.q}
                    onClick={() => setActiveFaq(index)}
                    className={`w-full text-left rounded-xl border p-4 transition ${activeFaq === index ? 'border-[#FF7A00] bg-orange-50/40' : 'border-slate-200 bg-white hover:border-slate-300'}`}
                  >
                    <p className="font-semibold text-slate-900">{item.q}</p>
                    {activeFaq === index && <p className="text-sm text-slate-600 mt-2">{item.a}</p>}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-[#0A2342] to-[#123861] border border-[#0A2342] p-6 text-white">
              <h3 className="text-2xl font-bold mb-3">Prefer a Direct Admission Call?</h3>
              <p className="text-slate-200 mb-5">Our counselor can help you choose the best-fit program based on your current profile and target role.</p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:+917093769898" className="inline-flex items-center gap-2 bg-[#FF7A00] hover:bg-[#e56d00] text-white font-bold px-6 py-3 rounded-xl transition">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <a href="mailto:info@venuratech.com" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl transition">
                  <Mail className="w-4 h-4" /> Email Team
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer handleNavClick={handleNavClick} />
    </div>
  )
}
