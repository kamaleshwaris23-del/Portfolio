const WORK_AREAS = [
  'Poster design',
  'Branding',
  'Digital marketing',
  'Social media creatives',
  'AI image generation',
  'AI video generation',
  'Creative digital content',
]

const SELECTED_PROJECTS = [
  {
    title: 'School Poster Design Project',
    tag: 'Educational Graphics',
    description: 'Created professional educational posters and promotional creatives for a school-related project.',
    accent: 'from-purple-500/20 to-purple-600/5',
    border: 'hover:border-purple-500/40',
    icon: (
      <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'VJ Educational Hub Branding',
    tag: 'Brand Identity & Marketing',
    description: 'Created branding, promotional creatives and digital marketing materials for VJ Educational Hub.',
    accent: 'from-cyan-500/20 to-cyan-600/5',
    border: 'hover:border-cyan-500/40',
    icon: (
      <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'E-commerce Website',
    tag: 'AI-Assisted Web Dev',
    description: 'Worked on an e-commerce website with AI-assisted development, including UI improvements and backend-related work.',
    accent: 'from-indigo-500/20 to-indigo-600/5',
    border: 'hover:border-indigo-500/40',
    icon: (
      <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    title: 'Store Data Entry',
    tag: 'Digital Records',
    description: 'Worked on store-related data entry and digital record management.',
    accent: 'from-emerald-500/20 to-emerald-600/5',
    border: 'hover:border-emerald-500/40',
    icon: (
      <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
]

const DOOR2LIFE_PROJECT = {
  name: 'Door2Life – Customer Data Management Application',
  type: 'Full-Stack Web Application Development & Software Testing',
  description:
    'Developed a customer data management web application designed to simplify customer information collection, organization, tracking, and management.',
  roles: [
    'Frontend Development',
    'Application Testing',
    'Functional Testing',
    'Manual QA',
    'Bug Identification',
    'Validation Testing',
  ],
  customerManagement: [
    'Developed customer registration and data collection forms.',
    'Implemented customer information management, including adding, editing, viewing, searching, and deleting records.',
    'Organized customer details for efficient data management.',
  ],
  applicationDevelopment: [
    'Worked with React.js, TypeScript, Vite, and modern frontend technologies.',
    'Implemented reusable components and structured application navigation.',
    'Developed customer management modules and dashboard interfaces.',
    'Worked on data persistence and JSON export functionality.',
  ],
  testingQA: [
    'Performed functional testing of customer registration and management workflows.',
    'Tested Add, Edit, View, Search, and Delete operations.',
    'Verified data persistence after page refresh.',
    'Tested form validation, mobile number validation, and duplicate customer detection.',
    'Performed negative testing, including invalid IDs and missing customer records.',
    'Tested JSON data export functionality.',
    'Identified issues, verified fixes, and performed regression testing.',
    'Executed TypeScript build checks and application quality checks.',
  ],
  technologies: [
    'React.js',
    'TypeScript',
    'Vite',
    'JavaScript',
    'HTML',
    'CSS',
    'Git',
    'GitHub',
    'Supabase (backend integration, where implemented)',
  ],
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden bg-radial-glow scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wider mb-3">
            <span>✦</span>
            <span>CAREER & HIGHLIGHTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Work <span className="text-gradient-purple-cyan">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mx-auto mt-4" />
        </div>

        {/* Current Professional Role Card */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 relative glass-card-accent shadow-2xl">
            
            {/* Header / Role Info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
                    Current Professional Role
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  VJ Educational Hub
                </h3>
              </div>

              <span className="self-start sm:self-auto px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-purple-500/10 border border-purple-500/30 text-purple-300">
                Digital & Creative Services
              </span>
            </div>

            {/* Role Title */}
            <div className="mb-6">
              <h4 className="text-base sm:text-lg font-bold text-cyan-300 mb-2">
                Creative Digital Professional / Digital Marketing & Creative Services
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Contributing digital creativity, marketing collateral, and AI-assisted content production to support the organization's outreach and educational presence.
              </p>
            </div>

            {/* Work Areas Grid */}
            <div>
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                Key Work Areas:
              </h5>
              <div className="flex flex-wrap gap-2.5">
                {WORK_AREAS.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/70 text-xs text-slate-200 hover:border-cyan-400/40 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {area}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Selected Project Experience Subsection */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Selected Project <span className="text-gradient-cyan-blue">Experience</span>
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-400">
              Key projects demonstrating digital creativity, marketing design, and web technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {SELECTED_PROJECTS.map((project, index) => (
              <div
                key={project.title}
                className={`glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border border-slate-800 relative transition-all duration-300 flex flex-col justify-between ${project.border}`}
              >
                {/* Subtle Card Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} rounded-2xl pointer-events-none -z-10`} />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center shadow-inner">
                      {project.icon}
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-900/80 border border-slate-700/60 text-slate-400">
                      {project.tag}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2">
                    {project.title}
                  </h4>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>PROJECT #{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-purple-400">✦</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Project Entry: Door2Life – Customer Data Management Application */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto">
          <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800 relative glass-card-accent shadow-2xl hover:border-cyan-500/40 transition-all duration-300">
            {/* Subtle Card Glow Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-600/5 to-transparent rounded-3xl pointer-events-none -z-10" />

            {/* Header / Project Identity */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
                    Application & QA Project
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  Door2Life <span className="text-gradient-cyan-blue">– Customer Data Management Application</span>
                </h3>
                <p className="text-xs sm:text-sm font-mono text-purple-300 mt-1.5">
                  {DOOR2LIFE_PROJECT.type}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Development
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold bg-purple-500/10 border border-purple-500/30 text-purple-300">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Software Testing
                </span>
              </div>
            </div>

            {/* My Role */}
            <div className="py-5 border-b border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 shrink-0">
                  My Role:
                </span>
                <div className="flex flex-wrap gap-2">
                  {DOOR2LIFE_PROJECT.roles.map((role) => (
                    <span
                      key={role}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900/90 border border-slate-700/70 text-slate-200 hover:border-cyan-400/40 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Overview */}
            <div className="pt-6">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Project Overview
              </h4>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed bg-slate-900/40 p-4 sm:p-5 rounded-2xl border border-slate-800/80">
                {DOOR2LIFE_PROJECT.description}
              </p>
            </div>

            {/* Key Features & Testing Responsibilities (2-Column Grid) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              
              {/* Development Column: Key Features & Responsibilities */}
              <div className="rounded-2xl bg-slate-900/50 border border-slate-800/80 p-5 sm:p-6 flex flex-col justify-between hover:border-cyan-500/30 transition-all">
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-inner">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <h5 className="text-base font-bold text-white">
                        Key Features & Development
                      </h5>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                      Frontend & Build
                    </span>
                  </div>

                  <div className="space-y-5">
                    {/* Customer Management */}
                    <div>
                      <h6 className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        1. Customer Management
                      </h6>
                      <ul className="space-y-2">
                        {DOOR2LIFE_PROJECT.customerManagement.map((point) => (
                          <li key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                            <svg className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Application Development */}
                    <div className="pt-4 border-t border-slate-800/60">
                      <h6 className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        2. Application Development
                      </h6>
                      <ul className="space-y-2">
                        {DOOR2LIFE_PROJECT.applicationDevelopment.map((point) => (
                          <li key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                            <svg className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testing Column: Software Testing & Quality Assurance */}
              <div className="rounded-2xl bg-slate-900/50 border border-slate-800/80 p-5 sm:p-6 flex flex-col justify-between hover:border-purple-500/30 transition-all">
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-inner">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h5 className="text-base font-bold text-white">
                        Testing Responsibilities & QA
                      </h5>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">
                      QA & Validation
                    </span>
                  </div>

                  <div>
                    <h6 className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      3. Software Testing & Quality Assurance
                    </h6>
                    <ul className="space-y-2">
                      {DOOR2LIFE_PROJECT.testingQA.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <svg className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            {/* Technologies Used */}
            <div className="mt-8 pt-6 border-t border-slate-800">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {DOOR2LIFE_PROJECT.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-900/90 text-cyan-300 border border-slate-700/80 hover:border-cyan-400/50 hover:bg-slate-800/80 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
