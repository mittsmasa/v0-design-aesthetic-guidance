"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-svh flex flex-col items-center justify-center px-6">
      {/* Top navigation */}
      <nav
        className={`absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-6 md:px-10 md:py-8 transition-all duration-1000 ease-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="font-serif text-sm tracking-[0.2em] text-foreground/40">
          Lull
        </span>
        <Link
          href="/design-system"
          className="text-xs tracking-[0.2em] text-muted-foreground/50 uppercase transition-colors hover:text-primary"
        >
          Design System
        </Link>
      </nav>

      {/* Subtle light gradient from top-left — asymmetric warmth */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 30%, oklch(0.95 0.02 75 / 0.5), transparent)",
        }}
      />

      <div
        className={`relative flex flex-col items-center gap-10 transition-all duration-1000 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Logo type */}
        <h1 className="font-serif text-6xl font-light tracking-[0.25em] text-foreground md:text-8xl lg:text-9xl">
          Lull
        </h1>

        {/* Thin ornamental line */}
        <div className="h-px w-16 bg-primary/40" />

        {/* Tagline */}
        <p className="max-w-md text-center font-sans text-base leading-relaxed tracking-wide text-muted-foreground md:text-lg">
          静けさの中に、
          <br className="sm:hidden" />
          確かな手触りを。
        </p>

        <p className="max-w-sm text-center font-serif text-sm leading-relaxed tracking-widest text-muted-foreground/70 italic md:text-base">
          A quiet space where moments breathe.
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-12 flex flex-col items-center gap-3 transition-all duration-1000 delay-700 ease-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-xs tracking-[0.3em] text-muted-foreground/50 font-serif uppercase">
          scroll
        </span>
        <div className="h-8 w-px bg-border animate-pulse" />
      </div>
    </section>
  )
}
