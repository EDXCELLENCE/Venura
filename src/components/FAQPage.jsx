import { useState, useEffect, useMemo, useRef } from 'react'
import {
  Search,
  HelpCircle,
  ChevronUp,
  ChevronDown,
  BookOpen,
  Briefcase,
  CreditCard,
  Monitor,
  Users,
  MessageCircle,
  Mail,
  Phone,
  Clock3,
} from 'lucide-react'
import Header from './Header'
import Footer from './Footer'

function createQuestionId(category, questionText) {
  return `${category}-${questionText}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function createCategoryId(category) {
  return `faq-category-${category}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

const faqData = [
  {
    category: 'General',
    questions: [
      {
        q: 'What is Venura and how does it work?',
        a: 'Venura is an industry-focused Tech platform that offers comprehensive tech programs in AI/ML, Full-Stack Development, Data Science, Java Backend, and Cybersecurity. We combine hands-on projects, expert mentorship, real internships, and career support to make you job-ready in 3 months.',
      },
      {
        q: 'Are these programs suitable for beginners?',
        a: 'Yes! Our programs follow a structured 3-level approach (Foundation -> Builder -> Pro-Intern) designed to take you from basics to industry-ready skills. We start with fundamentals and gradually build up to advanced concepts with hands-on practice.',
      },
      {
        q: 'What is the duration of the programs?',
        a: 'Most programs run for 3 months with a structured curriculum covering 3 progressive levels. Each level lasts 3-4 weeks with weekly milestones and mentor check-ins. The learning is flexible with both self-paced content and live sessions.',
      },
      {
        q: 'What makes Venura different from other platforms?',
        a: 'Venura offers a unique FutureX 3-Layer Learning Pyramid approach, combining AI-powered personalized learning, real internship opportunities, industry mentorship, and guaranteed career support. We focus on practical, project-based learning rather than just theory.',
      },
      {
        q: 'Can I switch between programs?',
        a: 'Yes, you can switch to another program within the first 2 weeks of enrollment without any additional charges. After 2 weeks, switching may incur additional fees. Contact our support team for assistance.',
      },
    ],
  },
  {
    category: 'AI & ML Program',
    questions: [
      {
        q: 'Do I need prior programming knowledge for AI/ML?',
        a: 'Basic Python knowledge is recommended but not mandatory. We start with Python fundamentals and gradually introduce ML concepts, libraries like NumPy, Pandas, Scikit-learn, TensorFlow, and PyTorch. Our Foundation level covers all prerequisites.',
      },
      {
        q: 'What AI/ML topics are covered?',
        a: 'The program covers: Python for ML, Statistics & Mathematics, Supervised/Unsupervised Learning, Deep Learning, Neural Networks, NLP, Computer Vision, GenAI with LLMs, MLOps, Model Deployment, and Real-world AI projects.',
      },
      {
        q: 'Will I learn about ChatGPT and GenAI?',
        a: 'Yes! The program includes comprehensive modules on Generative AI, Large Language Models (LLMs), Prompt Engineering, Fine-tuning models, RAG systems, and building GenAI applications with OpenAI, Anthropic, and open-source models.',
      },
      {
        q: 'What projects will I build in AI/ML?',
        a: "You'll build 8-10 projects including: Predictive Analytics Dashboard, Image Classification System, Chatbot with NLP, Recommendation Engine, Sentiment Analysis Tool, Object Detection App, GenAI Application, and a Capstone ML Project.",
      },
    ],
  },
  {
    category: 'Full-Stack Development',
    questions: [
      {
        q: 'Which technologies are covered in Full-Stack?',
        a: 'Frontend: HTML, CSS, JavaScript, React.js, Tailwind CSS. Backend: Node.js, Express.js, REST APIs, Authentication. Database: MongoDB, PostgreSQL. DevOps: Git, GitHub, Docker, Deployment on Vercel/AWS. Plus modern tools like Vite, TypeScript basics.',
      },
      {
        q: 'Will I learn both frontend and backend?',
        a: "Absolutely! You'll master frontend (UI/UX, React), backend (Node.js, databases), and deployment. By the end, you'll be able to build complete, production-ready web applications from scratch independently.",
      },
      {
        q: 'Do you teach MERN stack?',
        a: "Yes! MERN (MongoDB, Express, React, Node.js) is our core stack. You'll learn the complete MERN ecosystem along with modern tools like Next.js, TypeScript, and state management with Redux/Context API.",
      },
      {
        q: 'What Full-Stack projects will I build?',
        a: 'Projects include: E-commerce Platform, Social Media Dashboard, Task Management App, Real-time Chat Application, Blog CMS, Authentication System, API Integration Project, and a Full-Stack Capstone Project with deployment.',
      },
    ],
  },
  {
    category: 'Data Science Program',
    questions: [
      {
        q: 'Is coding required for Data Science?',
        a: "Yes, but we start from basics. You'll learn Python programming, then progress to data analysis libraries (Pandas, NumPy), visualization (Matplotlib, Seaborn), SQL for databases, and statistical analysis. No prior coding experience needed.",
      },
      {
        q: 'What Data Science tools will I learn?',
        a: 'Python, Pandas, NumPy, Matplotlib, Seaborn, Plotly, SQL, Excel, Jupyter Notebooks, Statistics, Probability, A/B Testing, Power BI/Tableau for visualization, and basics of ML for predictive analytics.',
      },
      {
        q: 'Difference between Data Science and AI/ML?',
        a: 'Data Science focuses on extracting insights from data using statistics, visualization, and analysis. AI/ML focuses on building predictive models and intelligent systems. Our DS program includes basic ML, while AI/ML goes deep into algorithms and deployment.',
      },
      {
        q: 'What Data Science projects are included?',
        a: 'Projects: Customer Segmentation Analysis, Sales Forecasting Dashboard, A/B Testing Case Study, Financial Data Analysis, Healthcare Analytics, Market Basket Analysis, Predictive Modeling, and an Industry Capstone Project.',
      },
    ],
  },
  {
    category: 'Java Backend Program',
    questions: [
      {
        q: 'Why learn Java for backend development?',
        a: 'Java is widely used in enterprise applications, banking, fintech, and large-scale systems. It offers excellent performance, scalability, strong typing, and huge demand in the job market. Companies like Amazon, Google, Netflix use Java extensively.',
      },
      {
        q: 'What Java technologies are covered?',
        a: 'Core Java, Object-Oriented Programming, Collections, Multithreading, Spring Framework, Spring Boot, REST APIs, Microservices, Hibernate/JPA, MySQL/PostgreSQL, Maven/Gradle, JUnit testing, and Docker basics for deployment.',
      },
      {
        q: 'Will I learn Spring Boot and Microservices?',
        a: "Yes! Spring Boot is central to the program. You'll build RESTful APIs, implement security with JWT, design microservices architecture, use Spring Data JPA, create scalable applications, and deploy them on cloud platforms.",
      },
      {
        q: 'What Java projects will I build?',
        a: 'Projects: REST API for E-commerce, Banking Application Backend, Microservices-based System, Authentication Service, Blog Platform API, Payment Gateway Integration, and a Production-grade Capstone Backend Project.',
      },
    ],
  },
  {
    category: 'Cybersecurity Program',
    questions: [
      {
        q: 'Do I need technical background for Cybersecurity?',
        a: 'Basic computer knowledge is sufficient. We start with networking fundamentals, operating systems (Linux), then progress to security concepts, ethical hacking, penetration testing, and security tools. Programming basics (Python) are taught as part of the curriculum.',
      },
      {
        q: 'What Cybersecurity domains are covered?',
        a: 'Network Security, Ethical Hacking, Penetration Testing, Web Application Security, Cryptography, Security Operations (SOC), Incident Response, Vulnerability Assessment, Security Tools (Kali Linux, Metasploit, Wireshark), Compliance (ISO 27001), and Security Certifications prep.',
      },
      {
        q: 'Will I get hands-on hacking practice?',
        a: "Yes! You'll practice in controlled lab environments using virtual machines, Hack The Box style challenges, CTF (Capture The Flag) exercises, and real-world security scenarios. All activities are legal and ethical within our sandbox environment.",
      },
      {
        q: 'What Cybersecurity certifications are covered?',
        a: 'The program prepares you for industry certifications like CEH (Certified Ethical Hacker), CompTIA Security+, and provides guidance for advanced certifications like OSCP, CISSP. We provide study materials and exam preparation support.',
      },
      {
        q: 'What security projects will I work on?',
        a: 'Projects: Vulnerability Scanner Tool, Password Cracking Lab, Web App Penetration Test, Network Security Audit, Malware Analysis Report, Security Incident Response Plan, and a comprehensive Security Assessment Capstone Project.',
      },
    ],
  },
  {
    category: 'Curriculum & Learning',
    questions: [
      {
        q: 'What does the curriculum include?',
        a: "Each program includes comprehensive video lessons, hands-on projects, coding exercises, live sessions with mentors, real-world case studies, industry tools, quizzes, assignments, and capstone projects. You'll build a portfolio of 8-12 projects by program completion.",
      },
      {
        q: 'How is the FutureX 3-Layer Pyramid structured?',
        a: 'Level 1 (Foundation): 4 weeks covering basics and mini projects with skill certificate. Level 2 (Builder): 4-6 weeks with mentor-led major projects and evaluation. Level 3 (Pro-Intern): 4-6 weeks with real internship tasks and portfolio presentation.',
      },
      {
        q: 'Will I get hands-on experience?',
        a: "Absolutely! Project-based learning is at the core of our methodology. You'll work on real-world projects, build applications from scratch, contribute to open-source, and gain practical experience with industry-standard tools and technologies.",
      },
      {
        q: 'Do I get a certificate after completion?',
        a: 'Yes! You receive 3 certificates: Skill Certificate (Level 1), Project Certificate (Level 2), and Internship Certificate (Level 3). All are industry-recognized and can be added to LinkedIn, resume, and showcased to employers.',
      },
      {
        q: 'How are doubts and queries handled?',
        a: 'Multiple support channels: Weekly live doubt-clearing sessions, dedicated Slack/Discord community, 1-on-1 mentor calls (bi-weekly), email support, and 24/7 AI chatbot for instant help. Average response time is under 4 hours.',
      },
      {
        q: 'What if I fall behind schedule?',
        a: 'No worries! The program is flexible with lifetime access. You can learn at your pace. We provide catch-up sessions, recorded live classes, and personalized study plans. Our mentors help you get back on track without any penalty.',
      },
    ],
  },
  {
    category: 'Pricing & Payment',
    questions: [
      {
        q: 'What are the program fees?',
        a: 'Program fees are displayed on individual program pages. We offer competitive pricing with the best value in the industry. All programs include lifetime access, mentorship, projects, and career support without additional charges.',
      },
      {
        q: 'Are there any hidden charges?',
        a: 'No hidden charges at all! The price you see is the complete cost. You get lifetime access to course materials, community support, career resources, updates, and new content additions without any additional fees.',
      },
      {
        q: 'Do you offer EMI options?',
        a: 'Yes, we offer flexible EMI options starting from as low as INR 2,000/month through our partners. You can choose 3, 6, or 12-month plans based on your convenience. No-cost EMI is available on select credit cards.',
      },
      {
        q: 'What is your refund policy?',
        a: "We offer a 7-day money-back guarantee. If you're not satisfied with the program within the first 7 days of enrollment, we'll provide a full refund, no questions asked. After 7 days, refunds are evaluated case-by-case.",
      },
      {
        q: 'Do you offer scholarships or discounts?',
        a: 'Yes! We offer merit-based scholarships (up to 30% off), need-based financial aid, women in tech scholarships, referral discounts, and early-bird pricing. Check our Programs page or contact admissions for current offers.',
      },
      {
        q: 'Can I upgrade from Basic to Advanced later?',
        a: 'Yes! You can upgrade to the Advanced plan anytime during your enrollment by paying the difference. The Advanced plan includes internship opportunities, priority mentorship, and advanced projects.',
      },
    ],
  },
  {
    category: 'Career Support & Placements',
    questions: [
      {
        q: 'Will I get job placement assistance?',
        a: 'Yes! We provide comprehensive career support including resume building, LinkedIn optimization, portfolio development, mock interviews, job referrals, and direct connections with 100+ hiring partners. Our placement team works with you until you land a job.',
      },
      {
        q: 'Do you provide internship opportunities?',
        a: 'Yes, the Advanced/Pro-Intern level includes guaranteed internship opportunity with our partner companies (startups, NGOs, SMEs). You will work on real projects, gain industry experience, and build your professional network.',
      },
      {
        q: 'What is the average salary after completion?',
        a: 'Our graduates typically see: Freshers (INR 4-6 LPA), Career switchers (INR 6-10 LPA), Experienced professionals (INR 8-15 LPA). Salary depends on skills, location, company, and previous experience. Top performers earn INR 15+ LPA.',
      },
      {
        q: 'Which companies hire Venura graduates?',
        a: 'Our hiring partners include Google, Microsoft, Amazon, Flipkart, Accenture, Deloitte, TCS, Infosys, startups, and 100+ tech companies across India. We also support international job applications for remote roles.',
      },
      {
        q: 'How long does it take to get a job?',
        a: 'On average, 60% of students get placed within 3 months of program completion, 85% within 3 months. Timeline depends on your skills, job market, location preferences, and active participation in placement activities.',
      },
      {
        q: 'Do you help with interview preparation?',
        a: 'Yes! We provide: Technical interview prep (DSA, System Design), HR interview coaching, mock interviews with industry professionals, commonly asked questions bank, whiteboard coding practice, and personalized feedback sessions.',
      },
    ],
  },
  {
    category: 'Technical Requirements & Access',
    questions: [
      {
        q: 'What equipment do I need?',
        a: 'Minimum requirements: Laptop/Desktop with 8GB RAM (16GB recommended), stable internet connection (5 Mbps+), modern web browser, webcam and microphone for live sessions. Specific software requirements provided at program start with setup guidance.',
      },
      {
        q: 'Is the learning self-paced or live?',
        a: "It's a hybrid model! Pre-recorded video lessons for self-paced learning (watch anytime), plus weekly live sessions with mentors for doubts, project reviews, and discussions. This gives you flexibility while ensuring proper guidance and accountability.",
      },
      {
        q: 'Can I access the content after course completion?',
        a: 'Yes! Lifetime access to all course materials including video lessons, projects, resources, community, and future updates. You can revisit content anytime, access new modules we add, and stay connected with the learning community forever.',
      },
      {
        q: 'Is there a mobile app for learning?',
        a: "Currently, we're web-based and mobile-responsive. You can access everything from mobile browsers. A dedicated mobile app is in development and will be launched soon with offline download capability and push notifications.",
      },
      {
        q: 'What if I have technical issues during learning?',
        a: 'We have a dedicated technical support team available via email, chat, and community forums. Common issues have troubleshooting guides, and our team responds within 24 hours to resolve any technical problems you face.',
      },
    ],
  },
  {
    category: 'Mentorship & Support',
    questions: [
      {
        q: 'Who are the mentors?',
        a: 'Our mentors are industry professionals with 5-15 years of experience from companies like Google, Microsoft, Amazon, Flipkart. They are experts in their respective domains (AI/ML, Full-Stack, Data Science, Java, Cybersecurity) and passionate about teaching.',
      },
      {
        q: 'How often can I interact with mentors?',
        a: 'You get: Weekly live group sessions (1-2 hours), bi-weekly 1-on-1 calls (30 minutes), unlimited async support via community, project reviews and feedback, career guidance sessions, and on-demand doubt resolution through chat.',
      },
      {
        q: 'Is there a community of learners?',
        a: 'Yes! Join our active community of 10,000+ learners on Slack/Discord. Network with peers, collaborate on projects, participate in hackathons, share resources, get peer feedback, and build lasting professional connections.',
      },
      {
        q: 'Can I contact mentors outside scheduled sessions?',
        a: 'Yes, through our community platform. Post questions in relevant channels, and mentors or senior students respond within 4-6 hours. For urgent queries, tag mentors directly. We encourage peer learning and helping each other.',
      },
    ],
  },
]

const categoryMeta = {
  General: {
    icon: HelpCircle,
    eyebrow: 'Start Here',
    accent: 'from-orange-500 to-amber-400',
    chip: 'bg-orange-50 text-orange-700 border-orange-200',
    muted: 'text-orange-700',
    ring: 'group-hover:border-orange-300',
  },
  'AI & ML Program': {
    icon: BookOpen,
    eyebrow: 'AI Track',
    accent: 'from-violet-500 to-fuchsia-500',
    chip: 'bg-violet-50 text-violet-700 border-violet-200',
    muted: 'text-violet-700',
    ring: 'group-hover:border-violet-300',
  },
  'Full-Stack Development': {
    icon: Monitor,
    eyebrow: 'Web Track',
    accent: 'from-sky-500 to-cyan-400',
    chip: 'bg-sky-50 text-sky-700 border-sky-200',
    muted: 'text-sky-700',
    ring: 'group-hover:border-sky-300',
  },
  'Data Science Program': {
    icon: BookOpen,
    eyebrow: 'Data Track',
    accent: 'from-emerald-500 to-teal-400',
    chip: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    muted: 'text-emerald-700',
    ring: 'group-hover:border-emerald-300',
  },
  'Java Backend Program': {
    icon: Monitor,
    eyebrow: 'Backend Track',
    accent: 'from-blue-700 to-indigo-500',
    chip: 'bg-blue-50 text-blue-700 border-blue-200',
    muted: 'text-blue-700',
    ring: 'group-hover:border-blue-300',
  },
  'Cybersecurity Program': {
    icon: Monitor,
    eyebrow: 'Security Track',
    accent: 'from-rose-500 to-red-500',
    chip: 'bg-rose-50 text-rose-700 border-rose-200',
    muted: 'text-rose-700',
    ring: 'group-hover:border-rose-300',
  },
  'Curriculum & Learning': {
    icon: BookOpen,
    eyebrow: 'Learning Model',
    accent: 'from-[#0A2342] to-[#123861]',
    chip: 'bg-slate-100 text-slate-700 border-slate-200',
    muted: 'text-slate-700',
    ring: 'group-hover:border-slate-300',
  },
  'Pricing & Payment': {
    icon: CreditCard,
    eyebrow: 'Fees & Plans',
    accent: 'from-amber-500 to-orange-500',
    chip: 'bg-amber-50 text-amber-700 border-amber-200',
    muted: 'text-amber-700',
    ring: 'group-hover:border-amber-300',
  },
  'Career Support & Placements': {
    icon: Briefcase,
    eyebrow: 'Career Outcomes',
    accent: 'from-emerald-500 to-lime-400',
    chip: 'bg-lime-50 text-lime-700 border-lime-200',
    muted: 'text-lime-700',
    ring: 'group-hover:border-lime-300',
  },
  'Technical Requirements & Access': {
    icon: Monitor,
    eyebrow: 'Access & Tools',
    accent: 'from-cyan-600 to-blue-500',
    chip: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    muted: 'text-cyan-700',
    ring: 'group-hover:border-cyan-300',
  },
  'Mentorship & Support': {
    icon: Users,
    eyebrow: 'Human Support',
    accent: 'from-pink-500 to-fuchsia-500',
    chip: 'bg-pink-50 text-pink-700 border-pink-200',
    muted: 'text-pink-700',
    ring: 'group-hover:border-pink-300',
  },
}

export default function FAQPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openItem, setOpenItem] = useState(null)
  const [searchText, setSearchText] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('General')
  const topRef = useRef(null)

  useEffect(() => {
    document.title = 'FAQ | Venura'
  }, [])

  const categories = useMemo(() => [...faqData.map((item) => item.category)], [])
  const totalQuestions = useMemo(
    () => faqData.reduce((count, item) => count + item.questions.length, 0),
    []
  )

  const toggleQuestion = (itemId) => {
    const id = itemId
    setOpenItem((prev) => (prev === id ? null : id))
  }

  const filteredFaqs = useMemo(() => {
    return faqData
      .filter((item) => {
        if (selectedCategory !== 'All' && item.category !== selectedCategory) {
          return false
        }

        if (!searchText.trim()) {
          return true
        }

        const query = searchText.toLowerCase()
        return item.questions.some(
          (question) => question.q.toLowerCase().includes(query) || question.a.toLowerCase().includes(query)
        )
      })
      .map((item) => {
        const query = searchText.toLowerCase()
        const questions = item.questions
          .filter((question) => {
            if (!searchText.trim()) {
              return true
            }

            return question.q.toLowerCase().includes(query) || question.a.toLowerCase().includes(query)
          })
          .map((question) => ({
            ...question,
            id: createQuestionId(item.category, question.q),
          }))

        return {
          ...item,
          questions,
        }
      })
  }, [searchText, selectedCategory])

  const visibleQuestionIds = useMemo(
    () => filteredFaqs.flatMap((item) => item.questions.map((question) => question.id)),
    [filteredFaqs]
  )

  useEffect(() => {
    if (openItem && !visibleQuestionIds.includes(openItem)) {
      setOpenItem(null)
    }
  }, [openItem, visibleQuestionIds])

  const categoryCounts = useMemo(() => {
    return faqData.reduce((accumulator, item) => {
      accumulator[item.category] = item.questions.length
      return accumulator
    }, {})
  }, [])

  // Popular questions (first 2 from each category, or customize as needed)
  const popularFaqs = useMemo(() => {
    return faqData.flatMap((item) =>
      item.questions.slice(0, 2).map((question) => ({
        ...question,
        category: item.category,
        meta: categoryMeta[item.category] || categoryMeta.General,
      }))
    )
  }, [])

  const flattenedFaqs = useMemo(() => {
    // Show popular first if no search/category filter
    if (searchText.trim() === '' && selectedCategory === 'All') {
      const rest = filteredFaqs.flatMap((item) =>
        item.questions.slice(2).map((question) => ({
          ...question,
          category: item.category,
          meta: categoryMeta[item.category] || categoryMeta.General,
        }))
      )
      return [...popularFaqs, ...rest]
    }
    return filteredFaqs.flatMap((item) =>
      item.questions.map((question) => ({
        ...question,
        category: item.category,
        meta: categoryMeta[item.category] || categoryMeta.General,
      }))
    )
  }, [filteredFaqs, searchText, selectedCategory, popularFaqs])

  const activeCategoryLabel = selectedCategory

  const handleNavClick = (e) => {
    e.preventDefault()
    setMobileMenuOpen(false)
  }

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  // Back to Top button logic
  const [showTop, setShowTop] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="w-full min-h-screen bg-white" ref={topRef}>
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        handleNavClick={handleNavClick}
        handleLogoClick={handleLogoClick}
      />

      <main style={{ paddingTop: 'var(--site-header-offset, 4rem)' }}>
        <section className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(120deg,#071a33_0%,#0A2342_35%,#123861_100%)] px-6 py-14">
          <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden="true">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px),
                  linear-gradient(0deg, rgba(255,255,255,0.14) 1px, transparent 1px)
                `,
                backgroundSize: '56px 56px',
              }}
            />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="flex-1 min-w-0">
              <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#ffd8b8] mb-4">
                FAQ Center
              </p>
              <h1 className="text-4xl md:text-6xl font-black leading-tight text-white text-left">
                <span className="text-[#FF7A00]">FAQ</span> — Find Your Answers
              </h1>
              <p className="mt-4 max-w-xl text-slate-200 md:text-lg text-left">
                Got a question? Search or browse by topic. Our FAQ hub has everything you need to know about Venura programs, pricing, placements, and more.
              </p>

              {/* Search bar as a card below heading */}
              <div className="relative w-full max-w-lg mt-8">
                <form
                  onSubmit={e => { e.preventDefault(); }}
                  className="flex items-center rounded-xl border border-white/20 bg-white/95 shadow-lg px-2 py-2"
                >
                  <Search className="h-5 w-5 text-slate-400 ml-2" />
                  <input
                    id="faq-search"
                    type="text"
                    placeholder="Search by topic, program, fees, placements..."
                    value={searchText}
                    onChange={(event) => setSearchText(event.target.value)}
                    className="flex-1 bg-transparent py-2 px-4 text-slate-800 placeholder-slate-400 outline-none"
                  />
                  <button
                    type="submit"
                    className="ml-2 rounded-lg bg-[#FF7A00] px-4 py-2 text-white font-semibold hover:bg-[#e06800] transition"
                  >
                    Search
                  </button>
                </form>
              </div>

              {/* Horizontal scrollable category chips */}
              <div className="flex gap-2 mt-6 overflow-x-auto pb-2 hide-scrollbar">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-1.5 whitespace-nowrap rounded-full border text-xs font-semibold transition-all duration-150 ${selectedCategory === category ? 'bg-[#FF7A00] text-white border-[#FF7A00]' : 'bg-white/10 text-[#ffd8b8] border-white/20 hover:bg-[#FF7A00]/80 hover:text-white'}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Stats row to the right (desktop) or below (mobile) */}
            <div className="mt-10 md:mt-0 flex-shrink-0 w-full md:w-64">
              <div className="grid grid-cols-2 gap-3 w-full">
                <div className="rounded-lg border border-white/15 bg-white/10 px-3 py-2">
                  <p className="text-xs text-slate-300">Showing</p>
                  <p className="text-lg font-bold text-white">{flattenedFaqs.length}</p>
                </div>
                <div className="rounded-lg border border-white/15 bg-white/10 px-3 py-2">
                  <p className="text-xs text-slate-300">Category</p>
                  <p className="truncate text-sm font-bold text-white">{activeCategoryLabel}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f8fafc] px-6 py-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 xl:grid-cols-[280px_minmax(0,1fr)]">
              <aside className="xl:sticky xl:top-28 xl:self-start">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="px-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Browse by topic</p>
                  <div className="mt-3 space-y-2">
                    {categories.map((category) => {
                      const isActive = selectedCategory === category
                      const count = categoryCounts[category]
                      return (
                        <button
                          key={category}
                          type="button"
                          onClick={() => setSelectedCategory(category)}
                          className={`flex w-full items-center justify-between rounded-xl border px-3 py-2.5 text-left text-sm font-semibold transition-all ${isActive ? 'border-[#FF7A00]/35 bg-[#fff4ea] text-[#0A2342]' : 'border-transparent bg-slate-50 text-slate-700 hover:border-slate-200 hover:bg-white'}`}
                        >
                          <span className="truncate">{category}</span>
                          <span className={`rounded-full px-2 py-0.5 text-xs ${isActive ? 'bg-[#FF7A00] text-white' : 'bg-white text-slate-500 border border-slate-200'}`}>{count}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <h3 className="text-sm font-bold text-[#0A2342]">Need personal guidance?</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">Get direct support from admissions for program selection and schedules.</p>
                  <div className="mt-3 space-y-2">
                    <a href="mailto:info@venuratech.com" className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
                      <Mail className="h-4 w-4 text-[#FF7A00]" /> info@venuratech.com
                    </a>
                    <a href="tel:+917093769898" className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
                      <Phone className="h-4 w-4 text-[#FF7A00]" /> +91 7093769898
                    </a>
                  </div>
                </div>
              </aside>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                {/* Removed Answer Stream and category heading for cleaner look */}

                <div className="space-y-3">
                  {flattenedFaqs.map((question, index) => {
                    const itemId = question.id
                    const isOpen = openItem === itemId
                    const panelId = `faq-panel-${itemId}`
                    const buttonId = `faq-button-${itemId}`
                    const Icon = question.meta.icon

                    return (
                      <article key={itemId} className={`overflow-hidden rounded-xl border transition-all duration-300 ${isOpen ? 'border-[#FF7A00]/35 bg-[#fffaf5] shadow-lg' : 'border-slate-200 bg-white hover:border-slate-300'}`}>
                        <button
                          id={buttonId}
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          onClick={() => toggleQuestion(itemId)}
                          className="w-full px-4 py-3.5 text-left"
                        >
                          <div className="flex items-start gap-3">
                            <span className={`mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-md text-xs font-bold ${isOpen ? 'bg-[#FF7A00] text-white' : 'bg-slate-100 text-slate-700'}`}>{index + 1}</span>
                            <div className="min-w-0 flex-1">
                              <div className="mb-1 flex items-center gap-2">
                                <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-semibold ${question.meta.chip}`}>
                                  <Icon className="h-3 w-3" /> {question.category}
                                </span>
                              </div>
                              <p className="text-sm font-semibold text-slate-900">{question.q}</p>
                            </div>
                            {isOpen ? <ChevronUp className="h-4 w-4 text-[#FF7A00] transition-transform duration-300 rotate-180" /> : <ChevronDown className="h-4 w-4 text-slate-400 transition-transform duration-300" />}
                          </div>
                        </button>

                        <div
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 py-3' : 'grid-rows-[0fr] opacity-0 py-0'} border-t border-[#FF7A00]/15 px-4`}
                          style={{ overflow: 'hidden' }}
                        >
                          <div className="pl-10 text-sm leading-relaxed text-slate-700">
                            {question.a}
                          </div>
                        </div>
                      </article>
                    )
                  })}
                </div>
      {/* Back to Top Button */}
      {showTop && (
        <button
          onClick={() => topRef.current?.scrollIntoView({ behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 rounded-full bg-[#FF7A00] p-3 shadow-lg transition hover:bg-[#e06800] focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Back to top"
        >
          <ChevronUp className="h-6 w-6 text-white" />
        </button>
      )}

                {flattenedFaqs.length === 0 && (
                  <div className="rounded-xl border border-dashed border-slate-300 bg-white px-8 py-14 text-center">
                    <HelpCircle className="mx-auto mb-4 h-16 w-16 text-slate-300" />
                    <p className="text-xl font-bold text-slate-700">No questions found for this search</p>
                    <p className="mt-2 text-slate-500">Try broader keywords or switch to another category.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer handleNavClick={handleNavClick} />
    </div>
  )
}
