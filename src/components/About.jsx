const HIGHLIGHTS = [
  {
    title: 'Creative Mind',
    description: 'Crafting thoughtful design concepts, refined visual aesthetics, and user-centric digital experiences.',
    icon: (
      <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M7 21a4 4 0 01-4-4 5 5 0 013-4.5V11a7 7 0 1114 0v1.5a5 5 0 013 4.5 4 4 0 01-4 4H7z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 9v4m-2-2h4" />
      </svg>
    ),
    badge: 'Design & Concepts',
    gradient: 'from-purple-500/20 via-purple-600/10 to-transparent',
    borderGlow: 'hover:border-purple-500/40 hover:shadow-[0_8px_30px_rgba(168,85,247,0.2)]',
    accentColor: 'text-purple-400',
  },
  {
    title: 'AI Enthusiast',
    description: 'Leveraging AI-assisted tools and intelligent workflows to expand creative possibilities and enhance productivity.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    badge: 'AI & Smart Tools',
    gradient: 'from-cyan-500/20 via-cyan-600/10 to-transparent',
    borderGlow: 'hover:border-cyan-500/40 hover:shadow-[0_8px_30px_rgba(6,182,212,0.2)]',
    accentColor: 'text-cyan-400',
  },
  {
    title: 'Digital Explorer',
    description: 'Continually discovering modern digital trends, emerging tech ecosystems, and interactive media techniques.',
    icon: (
      <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    badge: 'Continuous Learning',
    gradient: 'from-indigo-500/20 via-indigo-600/10 to-transparent',
    borderGlow: 'hover:border-indigo-500/40 hover:shadow-[0_8px_30px_rgba(99,102,241,0.2)]',
    accentColor: 'text-indigo-400',
  },
  {
    title: 'Aspiring Developer',
    description: 'Building clean code foundations with modern JavaScript, React, and responsive frontend architectures.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    badge: 'Code & Web',
    gradient: 'from-emerald-500/20 via-emerald-600/10 to-transparent',
    borderGlow: 'hover:border-emerald-500/40 hover:shadow-[0_8px_30px_rgba(16,185,129,0.2)]',
    accentColor: 'text-emerald-400',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wider mb-3">
            <span>✦</span>
            <span>WHO I AM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-purple-cyan">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mx-auto mt-4" />
        </div>

        {/* Narrative & Visual Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative Philosophy Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 relative glass-card-accent">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                Creative Story & Vision
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I'm Kamaleshwari S, a creative digital professional with a strong interest in design, AI and technology. My journey combines digital creativity with a growing passion for coding and software development.
                </p>
                <p>
                  I enjoy creating visually engaging designs, exploring AI-powered tools and understanding how technology can transform ideas into useful digital experiences.
                </p>
                <p>
                  Alongside my creative work, I'm continuously exploring programming and web development, with the goal of growing into a versatile technology-focused professional.
                </p>
              </div>

              {/* Core Philosophy Banner */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400 font-mono font-bold">01</span>
                  <span>Creativity</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400 font-mono font-bold">02</span>
                  <span>AI Insight</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-mono font-bold">03</span>
                  <span>Technology</span>
                </div>
              </div>
            </div>

            {/* Quick Quote / Focus Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-950/40 via-slate-900/60 to-cyan-950/40 border border-purple-500/20 backdrop-blur-md text-center sm:text-left flex flex-col sm:flex-row items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0">
                <span className="text-lg">⚡</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 italic">
                "Bridging artistic imagination and emerging technology to shape forward-thinking digital solutions."
              </p>
            </div>
          </div>

          {/* Right Column: Four Visual Highlights */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                className={`glass-panel glass-panel-hover rounded-2xl p-6 border border-slate-800 relative transition-all duration-300 flex flex-col justify-between ${item.borderGlow}`}
              >
                {/* Background Card Gradient Tint */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl pointer-events-none -z-10`} />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center shadow-inner">
                      {item.icon}
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-900/80 border border-slate-700/60 text-slate-400">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center gap-1 text-[11px] font-semibold text-slate-400">
                  <span className={item.accentColor}>✦</span>
                  <span>Core Focus Area</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
