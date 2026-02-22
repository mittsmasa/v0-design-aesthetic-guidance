"use client"

import { useEffect, useRef, useState } from "react"

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  )
}

export function Contact() {
  const [focused, setFocused] = useState(false)

  return (
    <section className="relative px-6 py-32 md:py-48">
      {/* Soft light from left */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 45% 55% at 15% 60%, oklch(0.93 0.02 70 / 0.3), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <FadeIn>
          <p className="font-serif text-xs tracking-[0.4em] text-primary/70 uppercase md:text-sm">
            Contact
          </p>
        </FadeIn>

        <FadeIn delay={150}>
          <h2 className="mt-8 font-sans text-2xl leading-relaxed tracking-wide text-foreground md:text-3xl">
            お気軽にどうぞ。
          </h2>
        </FadeIn>

        <FadeIn delay={250}>
          <p className="mt-4 font-serif text-sm tracking-wider text-muted-foreground/70 italic">
            We would love to hear from you.
          </p>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="mx-auto mt-14 max-w-md">
            {/* Email input — tactile, invitation-like */}
            <div className="relative">
              <label
                className={`absolute left-0 transition-all duration-300 ease-out font-sans text-muted-foreground/60 tracking-wide ${
                  focused
                    ? "-top-5 text-xs text-primary/70"
                    : "top-3 text-sm"
                }`}
              >
                your email
              </label>
              <input
                type="email"
                className="w-full border-0 border-b border-border bg-transparent pb-2 pt-3 font-sans text-sm tracking-wide text-foreground outline-none transition-colors duration-300 focus:border-primary/50 placeholder:text-transparent"
                onFocus={() => setFocused(true)}
                onBlur={(e) => {
                  if (!e.target.value) setFocused(false)
                }}
              />
            </div>

            {/* Submit button — understated, tactile */}
            <button
              className="mt-10 inline-flex items-center gap-3 font-serif text-sm tracking-[0.2em] text-foreground/70 transition-all duration-300 ease-out hover:text-primary hover:gap-4 active:scale-[0.98]"
              type="button"
            >
              <span>Send</span>
              <span className="inline-block h-px w-6 bg-current transition-all duration-300" />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
