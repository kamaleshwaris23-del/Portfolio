const SERVICES_DATA = [
  {
    title: 'Poster Design',
    description: 'Designing high-impact promotional, educational, and event posters with balanced visual hierarchy and clean typography.',
    icon: (
      <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    borderGlow: 'hover:border-purple-500/50 hover:shadow-[0_8px_30px_rgba(168,85,247,0.25)]',
    badge: 'Visual Design',
  },
  {
    title: 'Canva Design',
    description: 'Crafting custom graphics, digital flyers, presentation slides, and marketing templates tailored for diverse digital needs.',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    borderGlow: 'hover:border-cyan-500/50 hover:shadow-[0_8px_30px_rgba(6,182,212,0.25)]',
    badge: 'Graphics & Layout',
  },
  {
    title: 'AI Image Generation',
    description: 'Generating prompt-engineered digital artwork, concept visuals, and futuristic imagery with modern generative AI tools.',
    icon: (
      <svg className="w-6 h-6 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    borderGlow: 'hover:border-fuchsia-500/50 hover:shadow-[0_8px_30px_rgba(217,70,239,0.25)]',
    badge: 'Generative AI',
  },
  {
    title: 'AI Video Generation',
    description: 'Producing AI-driven synthetic video clips, motion animations, and engaging short-form video content.',
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    borderGlow: 'hover:border-sky-500/50 hover:shadow-[0_8px_30px_rgba(56,189,248,0.25)]',
    badge: 'Motion & Video',
  },
  {
    title: 'Digital Marketing',
    description: 'Planning and executing digital promotional campaigns, brand visibility strategies, and targeted audience outreach.',
    icon: (
      <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    borderGlow: 'hover:border-indigo-500/50 hover:shadow-[0_8px_30px_rgba(99,102,241,0.25)]',
    badge: 'Online Growth',
  },
  {
    title: 'Creative Branding',
    description: 'Building cohesive visual brand assets, consistent aesthetic guidelines, and distinctive promotional brand materials.',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M7 21a4 4 0 01-4-4 5 5 0 013-4.5V11a7 7 0 1114 0v1.5a5 5 0 013 4.5 4 4 0 01-4 4H7z" />
      </svg>
    ),
    borderGlow: 'hover:border-violet-500/50 hover:shadow-[0_8px_30px_rgba(139,92,246,0.25)]',
    badge: 'Brand Identity',
  },
  {
    title: 'Social Media Creative Content',
    description: 'Creating vibrant social media banners, promotional post creatives, and digital graphics optimized for social platforms.',
    icon: (
      <svg className="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
    borderGlow: 'hover:border-pink-500/50 hover:shadow-[0_8px_30px_rgba(244,114,182,0.25)]',
    badge: 'Social Media',
  },
  {
    title: 'Data Entry',
    description: 'Performing structured data entry, digital cataloguing, and accurate spreadsheet and record management.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    borderGlow: 'hover:border-emerald-500/50 hover:shadow-[0_8px_30px_rgba(16,185,129,0.25)]',
    badge: 'Record Management',
  },
  {
    title: 'AI-powered Digital Solutions',
    description: 'Integrating modern AI tools and digital workflows to transform ideas into automated, creative, and efficient outcomes.',
    icon: (
      <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    borderGlow: 'hover:border-teal-500/50 hover:shadow-[0_8px_30px_rgba(20,184,166,0.25)]',
    badge: 'Smart Workflows',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden bg-cyber-grid scroll-mt-20">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider mb-3">
            <span>✦</span>
            <span>WHAT I OFFER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Services & <span className="text-gradient-cyan-blue">Solutions</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Professional creative digital design, AI-assisted media creation, and digital marketing services.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.title}
              className={`glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border border-slate-800 relative flex flex-col justify-between transition-all duration-300 ${service.borderGlow}`}
            >
              <div>
                {/* Icon & Category Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center shadow-inner">
                    {service.icon}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-900/80 border border-slate-700/60 text-slate-400">
                    {service.badge}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-bold text-white mb-2.5">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Card Footer Index */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>SERVICE #{String(index + 1).padStart(2, '0')}</span>
                <span className="text-cyan-400">✦</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
