"use client"

import { useEffect, useRef, useState } from "react"

function FadeInSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
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

export function Philosophy() {
  return (
    <section className="relative px-6 py-32 md:py-48">
      {/* Asymmetric light from right side */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 85% 40%, oklch(0.93 0.02 70 / 0.35), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-3xl">
        <FadeInSection>
          <p className="font-serif text-xs tracking-[0.4em] text-primary/70 uppercase md:text-sm">
            Philosophy
          </p>
        </FadeInSection>

        <FadeInSection delay={150}>
          <h2 className="mt-8 font-sans text-2xl leading-relaxed tracking-wide text-foreground md:text-3xl lg:text-4xl text-balance">
            余白が、語る。
          </h2>
        </FadeInSection>

        <FadeInSection delay={300}>
          <div className="mt-4 h-px w-10 bg-primary/30" />
        </FadeInSection>

        <FadeInSection delay={400}>
          <p className="mt-10 max-w-xl font-sans text-base leading-[1.9] tracking-wide text-muted-foreground md:text-lg">
            情報を詰め込むのではなく、
            <br />
            大切なことだけを、丁寧に届ける。
            <br />
            招待状のような、静かで確かな体験を。
          </p>
        </FadeInSection>

        <FadeInSection delay={550}>
          <p className="mt-8 max-w-lg font-serif text-sm leading-[1.9] tracking-wider text-muted-foreground/70 italic md:text-base">
            Not filling space, but letting it speak.
            <br />
            Delivering only what matters, with care.
          </p>
        </FadeInSection>
      </div>
    </section>
  )
}
