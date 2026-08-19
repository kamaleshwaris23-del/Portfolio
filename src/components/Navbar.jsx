import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Section tracking for active state
      const sections = ['home', 'about', 'education', 'skills', 'services', 'experience', 'portfolio', 'contact']
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i]
        const element = document.getElementById(sectionId)
        if (element) {
          const top = element.offsetTop
          if (scrollPosition >= top) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on Escape key or outside click
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    const handleClickOutside = (e) => {
      if (mobileMenuOpen && !e.target.closest('header')) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('click', handleClickOutside)
    }
  }, [mobileMenuOpen])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(targetId)
      window.history.pushState(null, '', href)

      // If target is contact, smoothly focus contact input without disrupting scroll
      if (targetId === 'contact') {
        setTimeout(() => {
          const input = document.getElementById('contact-name')
          if (input) input.focus({ preventScroll: true })
        }, 600)
      }
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090e]/85 backdrop-blur-md border-b border-slate-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2.5 text-slate-100 font-bold text-lg sm:text-xl tracking-tight focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg p-1 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 via-purple-600 to-indigo-600 p-[1px] shadow-sm group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300">
              <div className="w-full h-full bg-[#0a0d18] rounded-[7px] flex items-center justify-center text-xs font-mono font-bold text-cyan-300">
                KS
              </div>
            </div>
            <span className="font-semibold text-slate-100 group-hover:text-white transition-colors">
              Kamaleshwari<span className="text-cyan-400"> S</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0d1327]/60 border border-slate-800/80 backdrop-blur-md rounded-full px-3 py-1.5 shadow-inner">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace('#', '')
              const isActive = activeSection === sectionId

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer ${
                    isActive
                      ? 'text-cyan-300 font-semibold shadow-sm'
                      : 'text-slate-300 hover:text-slate-100 hover:bg-white/[0.04]'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full -z-10" />
                  )}
                  {item.label}
                </a>
              )
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden rounded-full font-medium text-xs tracking-wide group focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-cyan-400 via-purple-600 to-indigo-600 group-hover:from-cyan-300 group-hover:to-purple-500 transition-all duration-300"></span>
              <span className="relative px-5 py-2 transition-all duration-300 ease-out bg-[#0b0e1b] rounded-full group-hover:bg-opacity-0 text-slate-100 group-hover:text-white font-semibold flex items-center gap-2">
                <span>Let's Connect</span>
                <svg
                  className="w-3.5 h-3.5 text-cyan-400 group-hover:text-white transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 px-4 bg-[#0a0e1c]/95 border border-slate-800/90 rounded-2xl backdrop-blur-xl shadow-2xl space-y-1.5 animate-fadeIn">
            <div className="grid grid-cols-2 gap-1.5 pb-2">
              {NAV_ITEMS.map((item) => {
                const sectionId = item.href.replace('#', '')
                const isActive = activeSection === sectionId

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                      isActive
                        ? 'bg-purple-500/15 border border-purple-500/30 text-cyan-300 font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    {item.label}
                  </a>
                )
              })}
            </div>

            <div className="pt-2 border-t border-slate-800/80">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-sm font-semibold shadow-lg shadow-purple-900/20 active:scale-[0.98] transition-transform cursor-pointer"
              >
                <span>Let's Connect</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
