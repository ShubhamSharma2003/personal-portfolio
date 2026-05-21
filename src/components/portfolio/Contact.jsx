import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const SOCIALS = [
  {
    label: 'GitHub',
    handle: 'github.com/shubhamsharma2003',
    href: 'https://github.com/shubhamsharma2003',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
    color: 'hover:bg-ink hover:text-cream',
  },
  {
    label: 'LinkedIn',
    handle: 'linkedin.com/in/shubhamsharma2003',
    href: 'https://linkedin.com/in/shubhamsharma2003',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: 'hover:bg-blue hover:text-cream hover:border-blue',
  },
  {
    label: 'Email',
    handle: 'shubham8186@gmail.com',
    href: 'mailto:shubham8186@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'hover:bg-pink hover:text-cream hover:border-pink',
  },
]

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_KEY
      )
      setStatus('success')
      formRef.current.reset()
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="py-24 bg-cream border-b-2 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <span className="section-label">006 — Contact</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT */}
          <div>
            <h2 className="section-heading text-5xl md:text-6xl lg:text-7xl mb-8">
              LET'S
              <br />
              <span className="relative inline-block">
                TALK
                <span className="absolute left-0 right-0 bottom-0 h-4 bg-green -z-10" />
              </span>
            </h2>

            <p className="font-grotesk text-base text-ink/70 leading-relaxed mb-10 max-w-sm">
              Open to interesting projects, full-time opportunities, and collaborations.
              Drop a message and I'll get back to you promptly.
            </p>

            {/* Socials */}
            <div className="space-y-3 mb-10">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 border-2 border-ink p-4 shadow-brutal card-hover transition-colors duration-150 group ${s.color}`}
                >
                  <div className="w-10 h-10 border-2 border-current flex items-center justify-center shrink-0 transition-colors duration-150">
                    {s.icon}
                  </div>
                  <div>
                    <p className="font-grotesk font-bold text-sm uppercase tracking-wide">{s.label}</p>
                    <p className="font-mono text-[10px] opacity-60 truncate">{s.handle}</p>
                  </div>
                  <span className="ml-auto font-mono opacity-40 group-hover:opacity-100 transition-opacity duration-150">
                    ↗
                  </span>
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="border-2 border-ink bg-ink text-cream p-5 shadow-brutal">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-cream/40 mb-1">Location</p>
                  <p className="font-grotesk font-bold text-sm">New Delhi, India</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-cream/40 mb-1">Phone</p>
                  <p className="font-grotesk font-bold text-sm">+91-8700087743</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="border-2 border-ink shadow-brutal-xl bg-cream">
            <div className="border-b-2 border-ink px-8 py-5 bg-yellow flex items-center justify-between">
              <h3 className="font-syne font-black text-lg uppercase tracking-tight">
                Send a Message
              </h3>
              {status === 'success' && (
                <span className="font-mono text-xs uppercase tracking-widest text-ink bg-green border-2 border-ink px-2 py-0.5">
                  Sent ✓
                </span>
              )}
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-ink/50 block mb-1.5">
                    Name *
                  </label>
                  <input
                    name="from_name"
                    required
                    className="input-brutal"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-ink/50 block mb-1.5">
                    Email *
                  </label>
                  <input
                    name="reply_to"
                    type="email"
                    required
                    className="input-brutal"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-ink/50 block mb-1.5">
                  Subject *
                </label>
                <input
                  name="subject"
                  required
                  className="input-brutal"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-ink/50 block mb-1.5">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="input-brutal resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className="btn-brutal w-full disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-x-0 disabled:translate-y-0 disabled:shadow-brutal"
              >
                {status === 'sending'
                  ? 'Sending...'
                  : status === 'success'
                  ? 'Message Sent ✓'
                  : 'Send Message →'}
              </button>

              {status === 'error' && (
                <p className="font-mono text-xs text-pink text-center uppercase tracking-widest">
                  Something went wrong — try emailing directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
