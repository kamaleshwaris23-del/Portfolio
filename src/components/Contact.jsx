import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (errorMessage) setErrorMessage('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const name = formData.name.trim()
    const email = formData.email.trim()
    const subject = formData.subject.trim()
    const msg = formData.message.trim()

    // Form Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!name) {
      setErrorMessage('Please enter your name.')
      return
    }

    if (!email) {
      setErrorMessage('Please enter your email address.')
      return
    }

    if (!emailRegex.test(email)) {
      setErrorMessage('Please provide a valid email address.')
      return
    }

    if (!msg) {
      setErrorMessage('Please enter your message.')
      return
    }

    // Clear any previous errors
    setErrorMessage('')

    // Format WhatsApp message text containing Name, Email, Subject, and Message
    const message = `Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'General Inquiry'}\nMessage: ${msg}`

    // Construct WhatsApp URL with safe URI encoding
    const whatsappUrl = `https://wa.me/919361396259?text=${encodeURIComponent(message)}`

    // Open WhatsApp in a new tab / window with security attributes
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

    // Provide friendly confirmation state
    setIsSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitted(false)
    }, 6000)
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden bg-radial-glow scroll-mt-20">
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-cyan-900/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider mb-3">
            <span>✦</span>
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Let's <span className="text-gradient-cyan-blue">Connect</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Have a project, collaboration idea, or creative opportunity? Send a message and let's create something remarkable together.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mt-4" />
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Info Glass Panel */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 relative glass-card-accent shadow-xl">
              <h3 className="text-xl font-bold text-white mb-3">
                Kamaleshwari S
              </h3>
              <p className="text-xs font-mono text-cyan-300 mb-6">
                Creative Digital Professional | AI Enthusiast
              </p>

              <div className="space-y-4 text-sm text-slate-300">
                {/* Location Item */}
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">Location</span>
                    <span className="text-xs sm:text-sm font-medium text-slate-100">Tamil Nadu, India</span>
                  </div>
                </div>

                {/* Status Item */}
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-300 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">Current Status</span>
                    <span className="text-xs sm:text-sm font-medium text-slate-100">Open for Opportunities & Projects</span>
                  </div>
                </div>

                {/* Collaboration Item */}
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">Focus Areas</span>
                    <span className="text-xs sm:text-sm font-medium text-slate-100">Design, AI Solutions & Web Development</span>
                  </div>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
                <span>⚡ Direct WhatsApp Messaging</span>
                <span className="text-cyan-400 font-mono">Available</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Glass Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-9 border border-slate-800 shadow-2xl relative">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center text-2xl">
                    ✓
                  </div>
                  <h4 className="text-xl font-bold text-white">Opening WhatsApp...</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Your message has been pre-filled! Click &ldquo;Send&rdquo; inside WhatsApp to start our conversation directly.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ name: '', email: '', subject: '', message: '' })
                        setIsSubmitted(false)
                      }}
                      className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-cyan-300 hover:text-white hover:border-cyan-400 transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-medium flex items-center gap-2">
                      <span>⚠️</span>
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono font-medium text-slate-300 mb-2">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono font-medium text-slate-300 mb-2">
                        Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-mono font-medium text-slate-300 mb-2">
                      Subject <span className="text-slate-500 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono font-medium text-slate-300 mb-2">
                      Your Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, idea, or inquiry..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-600 to-indigo-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold text-sm shadow-[0_4px_25px_rgba(6,182,212,0.35)] transition-all duration-300 cursor-pointer active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    <span>Send via WhatsApp</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

