import { useState } from 'react'

const PORTFOLIO_PROJECTS = [
  {
    title: 'School Educational Poster Campaign',
    category: 'design',
    categoryLabel: 'Poster Design',
    description: 'A comprehensive suite of academic and event posters featuring crisp typography, balanced visual hierarchy, and vibrant educational themes.',
    tags: ['Poster Design', 'Canva', 'Visual Hierarchy'],
    accent: 'from-purple-500/20 to-purple-600/5',
    border: 'hover:border-purple-500/40',
    icon: (
      <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'VJ Educational Hub Brand Identity',
    category: 'branding',
    categoryLabel: 'Branding & Social',
    description: 'Complete visual branding, digital promotional graphics, and social media creative assets for educational marketing outreach.',
    tags: ['Branding', 'Digital Marketing', 'Social Creatives'],
    accent: 'from-cyan-500/20 to-cyan-600/5',
    border: 'hover:border-cyan-500/40',
    icon: (
      <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'AI-Assisted E-Commerce Web Platform',
    category: 'web',
    categoryLabel: 'Web Development',
    description: 'Developed e-commerce platform components with AI-assisted workflows, responsive frontend UI improvements, and backend data flow integration.',
    tags: ['Web Dev', 'UI Design', 'AI-Assisted'],
    accent: 'from-indigo-500/20 to-indigo-600/5',
    border: 'hover:border-indigo-500/40',
    icon: (
      <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    title: 'Store Inventory & Record Management',
    category: 'data',
    categoryLabel: 'Data Entry & Records',
    description: 'Structured database management, accurate catalog record entry, and organized spreadsheet solutions for commercial operations.',
    tags: ['Data Entry', 'Record Management', 'Spreadsheets'],
    accent: 'from-emerald-500/20 to-emerald-600/5',
    border: 'hover:border-emerald-500/40',
    icon: (
      <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    title: 'Generative AI Digital Visual Showcase',
    category: 'ai',
    categoryLabel: 'AI Media',
    description: 'Exploration of prompt engineering and generative image tools to create futuristic concepts and high-resolution digital artwork.',
    tags: ['AI Art', 'Prompt Engineering', 'Visual AI'],
    accent: 'from-fuchsia-500/20 to-fuchsia-600/5',
    border: 'hover:border-fuchsia-500/40',
    icon: (
      <svg className="w-5 h-5 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Short-Form AI Video & Motion Media',
    category: 'ai',
    categoryLabel: 'AI Video',
    description: 'AI-generated dynamic motion clips and video compositions tailored for modern digital media campaigns.',
    tags: ['AI Video', 'Motion Graphics', 'Short-form Content'],
    accent: 'from-sky-500/20 to-sky-600/5',
    border: 'hover:border-sky-500/40',
    icon: (
      <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export default function Portfolio() {
  const [filter, setFilter] = useState('all')

  const filteredProjects =
    filter === 'all'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === filter)

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 overflow-hidden bg-cyber-grid scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wider mb-3">
            <span>✦</span>
            <span>FEATURED CREATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Selected <span className="text-gradient-purple-cyan">Portfolio</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            A showcase of digital design projects, branding collateral, AI media, and web solutions.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mx-auto mt-4" />
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-1 p-1.5 rounded-2xl bg-[#0b0f20]/90 border border-slate-800 shadow-inner">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'design', label: 'Poster Design' },
              { id: 'branding', label: 'Branding' },
              { id: 'web', label: 'Web & Tech' },
              { id: 'ai', label: 'AI Media' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className={`glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border border-slate-800 relative transition-all duration-300 flex flex-col justify-between ${project.border}`}
            >
              {/* Card Gradient Backdrop */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} rounded-2xl pointer-events-none -z-10`} />

              <div>
                {/* Header Meta */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center shadow-inner">
                    {project.icon}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-900/80 border border-slate-700/60 text-slate-300">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2.5">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* Tags & Footer */}
              <div className="mt-4 pt-4 border-t border-slate-800/70">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-slate-900/80 text-cyan-300 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
