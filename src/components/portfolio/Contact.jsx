import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Reveal from '../motion/Reveal'
import Parallax from '../motion/Parallax'
import TextReveal from '../motion/TextReveal'
import GlassCard from '../motion/GlassCard'
import MagneticButton from '../motion/MagneticButton'
import { Stagger, StaggerItem } from '../motion/Stagger'

const SOCIALS = [
  {
    label: 'GitHub',
    handle: 'github.com/shubhamsharma2003',
    href: 'https://github.com/shubhamsharma2003',
    accent: '#FFFFFF',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    handle: 'linkedin.com/in/shubhamsharma2003',
    href: 'https://linkedin.com/in/shubhamsharma2003',
    accent: '#4E8CFF',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    handle: 'shubham8186@gmail.com',
    href: 'mailto:shubham8186@gmail.com',
    accent: '#F0578E',
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
]

const FIELDS = [
  {
    name: 'subject',
    label: 'Subject',
    placeholder: "What's this about?",
    type: 'input',
  },
  {
    name: 'message',
    label: 'Message',
    placeholder: 'Tell me about your project or opportunity...',
    type: 'textarea',
  },
]

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')
  const reduce = useReducedMotion()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_KEY,
      )
      // A 200 here only means EmailJS accepted the request — delivery depends on
      // the template's To Email and variable names matching the fields below.
      console.info(
        '[contact] EmailJS accepted:',
        res?.status,
        res?.text,
        '| sent fields:',
        Array.from(new FormData(formRef.current).keys()),
      )
      setStatus('success')
      formRef.current.reset()
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      // EmailJS rejects with { status, text } — e.g. "Gmail_API: Invalid grant"
      // when the connected Gmail service needs reconnecting. A bare `catch` here
      // used to discard it, which made every failure look identical and left
      // this undiagnosable. The technical reason goes to the console for whoever
      // owns the site; visitors get a plain apology and a way through, since
      // provider internals read to them like instructions meant for someone else.
      const detail = err?.text || err?.message || 'Unknown error'
      console.error('[contact] EmailJS sendForm failed:', err?.status ?? '(no status)', detail, err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 8000)
    }
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 md:mb-16">
          <span className="section-label">006 — Contact</span>
        </Reveal>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ---------- LEFT ---------- */}
          <div>
            <Parallax speed={-26}>
              <h2 className="section-heading mb-7 text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem]">
                <TextReveal text="Let's" className="block text-white" />
                <TextReveal
                  text="Talk"
                  className="block"
                  wordClassName="gradient-text"
                  delay={0.12}
                />
              </h2>
            </Parallax>

            <Reveal delay={0.15}>
              <p className="text-white/72 mb-10 max-w-md text-[16px] leading-[1.75]">
                Open to interesting projects, full-time opportunities, and collaborations. Drop a
                message and I&apos;ll get back to you promptly.
              </p>
            </Reveal>

            {/* Socials */}
            <Stagger className="mb-8 space-y-3" stagger={0.08}>
              {SOCIALS.map((s) => (
                <StaggerItem key={s.label}>
                  <motion.a
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    whileHover={
                      reduce
                        ? undefined
                        : {
                            x: 6,
                            borderColor: `${s.accent}59`,
                            backgroundColor: `${s.accent}0F`,
                          }
                    }
                    transition={{ type: 'spring', stiffness: 340, damping: 26 }}
                    className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 backdrop-blur-sm"
                  >
                    <span
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border"
                      style={{
                        color: s.accent,
                        borderColor: `${s.accent}33`,
                        background: `${s.accent}12`,
                      }}
                    >
                      {s.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="text-white/92 block text-sm font-semibold">{s.label}</span>
                      <span className="text-white/66 block truncate font-mono text-[11px]">
                        {s.handle}
                      </span>
                    </span>
                    <span className="text-white/58 ml-auto shrink-0 font-mono">↗</span>
                  </motion.a>
                </StaggerItem>
              ))}
            </Stagger>

            {/* Location + phone */}
            <Reveal delay={0.1}>
              <GlassCard className="rounded-2xl" tilt={false} glow="rgba(78,140,255,0.14)">
                <div className="grid grid-cols-2 gap-4 p-5">
                  <div>
                    <p className="text-white/58 mb-1.5 font-mono text-[11px] uppercase tracking-[0.15em]">
                      Location
                    </p>
                    <p className="text-white/92 text-sm font-semibold">New Delhi, India</p>
                  </div>
                  <div>
                    <p className="text-white/58 mb-1.5 font-mono text-[11px] uppercase tracking-[0.15em]">
                      Phone
                    </p>
                    <a
                      href="tel:+918700087743"
                      className="text-white/92 text-sm font-semibold hover:text-g-blue"
                    >
                      +91-8700087743
                    </a>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          </div>

          {/* ---------- RIGHT — form ---------- */}
          <Reveal direction="left" amount={0.1}>
            <GlassCard className="gradient-border rounded-[1.75rem]" tilt={false} spotlight={false}>
              <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-5">
                <h3 className="text-base font-semibold tracking-tight text-white">
                  Send a Message
                </h3>
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.span
                      key="sent-badge"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-1.5 rounded-full border border-g-cyan/40 bg-g-cyan/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-widest text-g-cyan"
                    >
                      Sent
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <motion.path
                          d="M1.5 6.5 4.5 9.5 10.5 2.5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.4, ease: 'easeOut' }}
                        />
                      </svg>
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 p-6 sm:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="from_name"
                      className="text-white/66 mb-2 block font-mono text-[11px] uppercase tracking-[0.15em]"
                    >
                      Name *
                    </label>
                    <input
                      id="from_name"
                      name="from_name"
                      required
                      className="input-glass"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="reply_to"
                      className="text-white/66 mb-2 block font-mono text-[11px] uppercase tracking-[0.15em]"
                    >
                      Email *
                    </label>
                    <input
                      id="reply_to"
                      name="reply_to"
                      type="email"
                      required
                      className="input-glass"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {FIELDS.map((f) => (
                  <div key={f.name}>
                    <label
                      htmlFor={f.name}
                      className="text-white/66 mb-2 block font-mono text-[11px] uppercase tracking-[0.15em]"
                    >
                      {f.label} *
                    </label>
                    {f.type === 'textarea' ? (
                      <textarea
                        id={f.name}
                        name={f.name}
                        required
                        rows={5}
                        className="input-glass resize-none"
                        placeholder={f.placeholder}
                      />
                    ) : (
                      <input
                        id={f.name}
                        name={f.name}
                        required
                        className="input-glass"
                        placeholder={f.placeholder}
                      />
                    )}
                  </div>
                ))}

                <MagneticButton
                  type="submit"
                  disabled={status === 'sending' || status === 'success'}
                  pull={4}
                  className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={status}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-2"
                    >
                      {status === 'sending' && (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 0.9,
                              repeat: Infinity,
                              ease: 'linear',
                            }}
                            className="inline-block h-3.5 w-3.5 rounded-full border-2 border-white/30 border-t-white"
                          />
                          Sending...
                        </>
                      )}
                      {status === 'success' && <>Message Sent ✓</>}
                      {(status === 'idle' || status === 'error') && <>Send Message →</>}
                    </motion.span>
                  </AnimatePresence>
                </MagneticButton>

                <AnimatePresence>
                  {status === 'error' && (
                    <motion.p
                      key="error"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-center font-mono text-[11px] uppercase tracking-widest text-g-pink"
                    >
                      Couldn&apos;t send — please email shubham8186@gmail.com directly.
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
