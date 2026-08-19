const EDUCATION_DATA = [
  {
    institution: 'Kaamadhenu Arts and Science College',
    degree: 'B.Sc. Computer Science',
    period: '2023–2026',
    score: 'Approximately 85%',
    status: 'Pursuing',
    icon: (
      <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
      </svg>
    ),
    badgeColor: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300',
    dotColor: 'bg-cyan-400 ring-cyan-400/30',
  },
  {
    institution: 'Government Higher Secondary School, Kavilipalayam',
    degree: 'Higher Secondary / 12th Standard',
    period: '2022–2023',
    score: '80%',
    status: 'Completed',
    icon: (
      <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    badgeColor: 'border-purple-500/30 bg-purple-500/10 text-purple-300',
    dotColor: 'bg-purple-400 ring-purple-400/30',
  },
]

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32 overflow-hidden bg-cyber-grid scroll-mt-20">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider mb-3">
            <span>✦</span>
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Education <span className="text-gradient-cyan-blue">Timeline</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical central connector line */}
          <div className="hidden sm:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent" />
          
          {/* Mobile vertical left connector line */}
          <div className="sm:hidden absolute left-5 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent" />

          <div className="space-y-10 sm:space-y-12">
            {EDUCATION_DATA.map((item, index) => {
              const isEven = index % 2 === 0

              return (
                <div
                  key={item.institution}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                    <div className={`w-4 h-4 rounded-full ${item.dotColor} ring-4 shadow-[0_0_12px_rgba(56,189,248,0.5)]`} />
                  </div>

                  {/* Content Card Side */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                    <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border border-slate-800 relative glass-card-accent shadow-xl">
                      
                      {/* Top Meta Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border ${item.badgeColor}`}>
                          <span>📅</span>
                          <span>{item.period}</span>
                        </span>
                        
                        <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-slate-900/90 border border-slate-800 text-slate-300">
                          {item.status}
                        </span>
                      </div>

                      {/* Course / Degree Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 flex items-center gap-2">
                        {item.degree}
                      </h3>

                      {/* Institution Name */}
                      <p className="text-sm font-medium text-slate-300 mb-4">
                        {item.institution}
                      </p>

                      {/* Score / Performance Badge */}
                      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                        <span className="text-xs text-slate-400 font-mono">Academic Score</span>
                        <span className="text-xs sm:text-sm font-bold font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 px-2.5 py-1 rounded-lg">
                          {item.score}
                        </span>
                      </div>

                    </div>
                  </div>

                  {/* Empty Spacer Side for Desktop Symmetry */}
                  <div className="hidden sm:block sm:w-1/2" />
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
