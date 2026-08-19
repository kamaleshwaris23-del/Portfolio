import { useState } from 'react'

const PROGRAMMING_SKILLS = [
  {
    name: 'HTML',
    tag: 'Web Structure',
    icon: (
      <svg className="w-5 h-5 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    border: 'hover:border-orange-500/40',
  },
  {
    name: 'CSS',
    tag: 'Web Styling',
    icon: (
      <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4 5 5 0 013-4.5V11a7 7 0 1114 0v1.5a5 5 0 013 4.5 4 4 0 01-4 4H7z" />
      </svg>
    ),
    border: 'hover:border-cyan-500/40',
  },
  {
    name: 'C',
    tag: 'Core Fundamentals',
    icon: (
      <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    border: 'hover:border-blue-500/40',
  },
  {
    name: 'C++',
    tag: 'Object-Oriented',
    icon: (
      <svg className="w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    ),
    border: 'hover:border-indigo-500/40',
  },
  {
    name: 'Java',
    tag: 'Application Dev',
    icon: (
      <svg className="w-5 h-5 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
      </svg>
    ),
    border: 'hover:border-red-500/40',
  },
  {
    name: 'Python',
    tag: 'Scripting & AI Basics',
    icon: (
      <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    border: 'hover:border-emerald-500/40',
  },
]

const DIGITAL_SKILLS = [
  {
    name: 'Digital Marketing',
    tag: 'Online Growth',
    icon: (
      <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    border: 'hover:border-purple-500/40',
  },
  {
    name: 'Poster Design',
    tag: 'Visual Compositions',
    icon: (
      <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    border: 'hover:border-cyan-500/40',
  },
  {
    name: 'Canva',
    tag: 'Graphic Creation',
    icon: (
      <svg className="w-5 h-5 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
    border: 'hover:border-sky-500/40',
  },
  {
    name: 'AI Image Generation',
    tag: 'Creative Prompts',
    icon: (
      <svg className="w-5 h-5 text-fuchsia-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    border: 'hover:border-fuchsia-500/40',
  },
  {
    name: 'AI Video Generation',
    tag: 'Motion & Synthetics',
    icon: (
      <svg className="w-5 h-5 text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    border: 'hover:border-violet-500/40',
  },
  {
    name: 'Data Entry',
    tag: 'Record Accuracy',
    icon: (
      <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    border: 'hover:border-emerald-500/40',
  },
]

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all')

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden bg-radial-glow scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wider mb-3">
            <span>✦</span>
            <span>CAPABILITIES & TOOLKIT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient-purple-cyan">Interests</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            A combination of digital design, AI-assisted creative tools, and expanding programming fundamentals.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mx-auto mt-4" />
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-[#0b0f20]/90 border border-slate-800 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Skills
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('programming')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'programming'
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Programming & Web
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('digital')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'digital'
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Digital & Creative
            </button>
          </div>
        </div>

        {/* Skills Display Grids */}
        <div className="space-y-12">
          
          {/* Programming Section */}
          {(activeTab === 'all' || activeTab === 'programming') && (
            <div>
              <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-800/80">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  <h3 className="text-lg sm:text-xl font-bold text-white">Programming & Development</h3>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                  Growing Focus Area
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {PROGRAMMING_SKILLS.map((skill) => (
                  <div
                    key={skill.name}
                    className={`glass-panel glass-panel-hover rounded-xl p-4 sm:p-5 border border-slate-800 flex flex-col items-center text-center justify-between gap-3 group transition-all duration-300 ${skill.border}`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-100 group-hover:text-white mb-0.5">
                        {skill.name}
                      </h4>
                      <p className="text-[10px] font-mono text-slate-400">
                        {skill.tag}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Digital & Creative Section */}
          {(activeTab === 'all' || activeTab === 'digital') && (
            <div>
              <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-800/80">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                  <h3 className="text-lg sm:text-xl font-bold text-white">Digital, Creative & AI Media</h3>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">
                  Creative Production
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {DIGITAL_SKILLS.map((skill) => (
                  <div
                    key={skill.name}
                    className={`glass-panel glass-panel-hover rounded-xl p-4 sm:p-5 border border-slate-800 flex flex-col items-center text-center justify-between gap-3 group transition-all duration-300 ${skill.border}`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-100 group-hover:text-white mb-0.5">
                        {skill.name}
                      </h4>
                      <p className="text-[10px] font-mono text-slate-400">
                        {skill.tag}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Growth Philosophy Note */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center max-w-xl mx-auto">
          <p className="text-xs text-slate-400 leading-relaxed">
            <span className="text-cyan-400 font-semibold">Continuous Development:</span> Continuously expanding programming concepts, modern web technologies, and innovative AI-assisted workflows.
          </p>
        </div>

      </div>
    </section>
  )
}
