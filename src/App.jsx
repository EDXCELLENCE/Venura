import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from "./components/ScrollToTop"

const HomePage = lazy(() => import('./components/HomePage'))
const AboutUs = lazy(() => import('./components/AboutUs'))
const AmbassadorProgramPage = lazy(() => import('./components/AmbassadorProgramPage'))
const ContactPage = lazy(() => import('./components/ContactPage'))
const ProgramsPage = lazy(() => import('./components/ProgramsPage'))
const AiMlPage = lazy(() => import('./components/AiMlPage'))
const DataSciencePage = lazy(() => import('./components/DataSciencePage'))
const FullStackPage = lazy(() => import('./components/FullStackPage'))
const JavaBackendPage = lazy(() => import('./components/JavaBackendPage'))
const CybersecurityPage = lazy(() => import('./components/CybersecurityPage'))
const PythonPage = lazy(() => import('./components/PythonPage'))
const FAQPage = lazy(() => import('./components/FAQPage'))
const PlanComparisonPage = lazy(() => import('./components/PlanComparisonPage'))
const ProgramComparePage = lazy(() => import('./components/ProgramComparePage'))
const TermsPage = lazy(() => import('./components/TermsPage'))
const PrivacyPage = lazy(() => import('./components/PrivacyPage'))

function RouteLoader() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2342] via-[#123861] to-[#0A2342] flex items-center justify-center px-6">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <img src="/logoicon.png" alt="Venura" className="w-8 h-8" />
          <span className="text-white text-2xl font-extrabold tracking-wide">VENURA</span>
        </div>
        <div className="w-14 h-14 mx-auto rounded-full border-4 border-white/25 border-t-[#FF7A00] animate-spin" />
        <p className="text-slate-200 mt-4 text-sm">Loading your learning experience...</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="venura-content-typography">
        <ScrollToTop />
        <Suspense fallback={<RouteLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            {/* <Route path="/ambassador-program" element={<AmbassadorProgramPage />} /> */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/programs/ai-ml" element={<AiMlPage />} />
            <Route path="/programs/data-science" element={<DataSciencePage />} />
            <Route path="/programs/full-stack" element={<FullStackPage />} />
            <Route path="/programs/java-backend" element={<JavaBackendPage />} />
            <Route path="/programs/cybersecurity" element={<CybersecurityPage />} />
            <Route path="/programs/python" element={<PythonPage />} />
            <Route path="/programs/plan-comparison" element={<PlanComparisonPage />} />
            <Route path="/programs/compare" element={<ProgramComparePage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  )
}

export default App
