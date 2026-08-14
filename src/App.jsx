import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import TrustBanner from './components/TrustBanner'
import AboutPage from './pages/AboutPage'
import AboutPage2 from './pages/AboutPage2'
import LeadershipPage from './pages/LeadershipPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'

function MainPage() {
  const [activeSection, setActiveSection] = useState('home')
  const location = useLocation()

  const scrollToSection = (id) => {
    setActiveSection(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    // If navigating back with a section query parameter
    const searchParams = new URLSearchParams(location.search)
    const section = searchParams.get('section')
    if (section) {
      setTimeout(() => scrollToSection(section), 100)
    }
  }, [location])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'leadership', 'services', 'contact']
      const scrollPos = window.scrollY + 250
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-green-500 selection:text-white">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <HomePage scrollToSection={scrollToSection} />
      <TrustBanner />
      <AboutPage />
      <AboutPage2 />
      <LeadershipPage />
      <ServicesPage scrollToSection={scrollToSection} />
      <ContactPage />
      <Footer scrollToSection={scrollToSection} />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
    </Router>
  )
}

export default App
