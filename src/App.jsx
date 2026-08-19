import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Services from './components/Services'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col selection:bg-purple-500/30 selection:text-cyan-200">
      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Services />
        <Experience />
        <Portfolio />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-[#06080d] py-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-cyan-500 to-purple-600 p-[1px]">
              <div className="w-full h-full bg-[#0a0d18] rounded-[5px] flex items-center justify-center text-[10px] font-mono font-bold text-cyan-300">
                KS
              </div>
            </div>
            <p>
              © {new Date().getFullYear()} <span className="text-slate-200 font-medium">Kamaleshwari S</span>. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for Opportunities
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-purple-500/40 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
              aria-label="Back to top"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>

        </div>
      </footer>
    </div>
  )
}

export default App
