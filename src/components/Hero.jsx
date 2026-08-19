export default function Hero() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-cyber-grid bg-radial-glow"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle" />
      <div className="absolute -bottom-10 -left-20 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e162e]/90 border border-cyan-500/30 text-xs font-semibold tracking-wider text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span>HELLO, I'M KAMALESHWARI S</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.18]">
              Creative Ideas.{' '}
              <span className="text-slate-200">Digital Experiences.</span>{' '}
              <span className="text-gradient-purple-cyan block sm:inline">
                Future-Focused Thinking.
              </span>
            </h1>

            {/* Professional Title */}
            <p className="text-base sm:text-lg font-medium text-cyan-300/90 tracking-wide font-mono">
              Creative Digital Professional | AI Enthusiast | Aspiring Developer
            </p>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I'm a creative digital professional passionate about design, AI-powered content and technology, while continuously exploring coding and web development.
            </p>

            {/* Buttons / CTAs */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#portfolio"
                onClick={(e) => scrollToSection(e, 'portfolio')}
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 shadow-[0_4px_25px_rgba(168,85,247,0.35)] hover:shadow-[0_4px_30px_rgba(6,182,212,0.45)] transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <span>Explore My Work</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-y-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700 hover:border-purple-500/50 hover:text-white transition-all duration-300 shadow-md active:scale-95"
              >
                <span>Let's Connect</span>
                <svg
                  className="w-4 h-4 text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </div>

            {/* Micro Feature Indicators */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Design Systems
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                AI-Driven Workflows
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Modern Web Tech
              </span>
            </div>

          </div>

          {/* Right Column: Abstract Futuristic Visual Artwork */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              
              {/* Outer Orbit Rings */}
              <div className="absolute inset-0 rounded-full border border-purple-500/20 animate-spin-slow" />
              <div className="absolute inset-6 rounded-full border border-cyan-500/20 border-dashed animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '32s' }} />
              
              {/* Core Futuristic Glowing Orb */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-tr from-purple-900/60 via-indigo-900/50 to-cyan-900/40 p-[1px] shadow-[0_0_60px_rgba(157,78,221,0.35)] flex items-center justify-center backdrop-blur-xl">
                <div className="w-full h-full rounded-full bg-[#090d1e]/85 flex flex-col items-center justify-center p-4 text-center border border-white/10 relative overflow-hidden">
                  
                  {/* Subtle internal animated gradient */}
                  <div className="absolute -top-12 -left-12 w-32 h-32 bg-purple-500/25 rounded-full blur-xl animate-pulse-subtle" />
                  <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-cyan-500/25 rounded-full blur-xl animate-pulse-subtle" />
                  
                  {/* Central Node SVG Graphic */}
                  <svg className="w-16 h-16 text-cyan-400 mb-2 relative z-10" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="3 3" />
                    <circle cx="32" cy="32" r="14" fill="url(#coreGradient)" fillOpacity="0.2" stroke="url(#coreGradient)" strokeWidth="1.5" />
                    <circle cx="32" cy="14" r="3.5" fill="#38BDF8" />
                    <circle cx="50" cy="32" r="3.5" fill="#A855F7" />
                    <circle cx="32" cy="50" r="3.5" fill="#38BDF8" />
                    <circle cx="14" cy="32" r="3.5" fill="#C084FC" />
                    <path d="M32 17.5V26.5M46.5 32H37.5M32 46.5V37.5M17.5 32H26.5" stroke="#E2E8F0" strokeWidth="1.5" strokeOpacity="0.7" />
                    <defs>
                      <linearGradient id="coreGradient" x1="18" y1="18" x2="46" y2="46" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#38BDF8" />
                        <stop offset="1" stopColor="#A855F7" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  <span className="text-[11px] font-mono tracking-widest text-cyan-300 font-semibold relative z-10">
                    CREATIVE MATRIX
                  </span>
                  <span className="text-[9px] text-slate-400 font-mono relative z-10">
                    AI + DESIGN + CODE
                  </span>
                </div>
              </div>

              {/* Floating Glass UI Card 1: Top-Right (Code Snippet) */}
              <div className="absolute -top-3 right-0 sm:-right-4 glass-panel glass-panel-hover rounded-xl p-3.5 shadow-xl border border-purple-500/30 max-w-[190px] animate-float-slow">
                <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-slate-700/60">
                  <span className="w-2 h-2 rounded-full bg-red-400/80" />
                  <span className="w-2 h-2 rounded-full bg-yellow-400/80" />
                  <span className="w-2 h-2 rounded-full bg-green-400/80" />
                  <span className="text-[10px] font-mono text-slate-400 ml-1">idea.config.js</span>
                </div>
                <div className="font-mono text-[10px] leading-relaxed text-slate-300">
                  <p><span className="text-purple-400">const</span> vision = &#123;</p>
                  <p className="pl-2">design: <span className="text-cyan-300">'creative'</span>,</p>
                  <p className="pl-2">ai: <span className="text-emerald-300">'smart'</span>,</p>
                  <p className="pl-2">future: <span className="text-amber-300">true</span></p>
                  <p>&#125;;</p>
                </div>
              </div>

              {/* Floating Glass UI Card 2: Bottom-Left (Synergy Status) */}
              <div className="absolute -bottom-4 left-0 sm:-left-6 glass-panel glass-panel-hover rounded-xl p-3.5 shadow-xl border border-cyan-500/30 max-w-[200px] animate-float-reverse">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-300">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-100 flex items-center gap-1.5">
                      <span>Synergy</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <p className="text-[10px] text-slate-400">AI & Web Exploration</p>
                  </div>
                </div>
              </div>

              {/* Floating Glass UI Card 3: Top-Left (Badge) */}
              <div className="absolute top-8 left-0 sm:-left-8 glass-panel glass-panel-hover rounded-lg px-3 py-1.5 shadow-lg border border-slate-700/80 flex items-center gap-2 text-[11px] text-slate-300 animate-float-reverse">
                <span className="text-purple-400 font-bold">✦</span>
                <span className="font-medium text-slate-200">Creative Concepts</span>
              </div>

              {/* Floating Node Particle (Bottom-Right) */}
              <div className="absolute bottom-10 right-2 glass-panel rounded-lg px-2.5 py-1 text-[10px] font-mono text-cyan-400 border border-cyan-500/20 shadow-md">
                v2.0 // Active
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
