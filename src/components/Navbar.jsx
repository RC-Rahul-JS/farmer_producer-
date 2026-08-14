import { useState, useEffect, useRef } from 'react'

export default function Navbar({ activeSection, scrollToSection }) {
  const [visible, setVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY < 60) {
        setVisible(true)
      } else if (currentY > lastScrollY.current) {
        setVisible(false) // scrolling down → hide
        setMenuOpen(false)
      } else {
        setVisible(true)  // scrolling up → show
      }
      lastScrollY.current = currentY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    {
      id: 'home',
      label: 'Home',
      icon: <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>,
    },
    {
      id: 'about',
      label: 'About Us',
      icon: <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    },
    {
      id: 'leadership',
      label: 'Leadership',
      icon: <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
    },
    {
      id: 'services',
      label: 'Capabilities & Services',
      icon: <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" /></svg>,
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    },
  ]

  const handleNav = (id) => {
    scrollToSection(id)
    setMenuOpen(false)
  }

  return (
    <header
      className="fixed top-4 inset-x-0 z-50 px-4 lg:px-8 transition-transform duration-300"
      style={{ transform: visible ? 'translateY(0)' : 'translateY(-120%)' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/85 backdrop-blur-xl border border-white/90 rounded-full shadow-md shadow-slate-900/10 px-6 py-2.5 transition-all duration-300">

        {/* Logo */}
        <button onClick={() => scrollToSection('home')} className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Kisaan Agri Logo"
            className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-200"
          />
          <div className="flex flex-col text-left">
            <div className="text-base sm:text-lg font-black tracking-tight text-slate-900 leading-none">
              KISAAN <span className="text-emerald-600 font-black">AGRI</span>
            </div>
            <div className="text-[9px] font-black tracking-[0.22em] text-emerald-700 uppercase mt-1">
              WAREHOUSING
            </div>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 backdrop-blur-md p-1 rounded-full border border-slate-200/50">
          {navItems.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${activeSection === id
                  ? 'bg-white text-green-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
            >
              {icon}
              {label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button
          onClick={() => handleNav('contact')}
          className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-lime-500 via-green-600 to-emerald-600 text-white text-xs font-extrabold tracking-wider uppercase shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Get in Touch
        </button>

        {/* Mobile Hamburger */}
        <button
          className={`mob-menu-btn${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

      </div>

      {/* Mobile Drawer */}
      <div className={`mob-nav-drawer${menuOpen ? ' open' : ''}`}>
        {navItems.map(({ id, label, icon }) => (
          <button
            key={id}
            onClick={() => handleNav(id)}
            className={activeSection === id ? 'active' : ''}
          >
            {icon}
            {label}
          </button>
        ))}
        <button className="mob-cta" onClick={() => handleNav('contact')}>
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Get in Touch
        </button>
      </div>
    </header>
  )
}
