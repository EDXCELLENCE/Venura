import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from "./components/HomePage"
import AboutUs from "./components/AboutUs"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  )
}

export default App
