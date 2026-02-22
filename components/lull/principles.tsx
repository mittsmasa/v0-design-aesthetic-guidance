"use client"

import { useEffect, useRef, useState } from "react"

function FadeInCard({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
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
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  )
}

const principles = [
  {
    number: "01",
    title: "紙の温度",
    titleEn: "Warmth of Paper",
    description:
      "真っ白ではなく、生成りの白。自然光の中の紙を想起させる、温度のある色彩設計。",
  },
  {
    number: "02",
    title: "呼吸する余白",
    titleEn: "Breathing Space",
    description:
      "要素と要素のあいだの「間」が、情報よりも多くを語る。密度より、呼吸を。",
  },
  {
    number: "03",
    title: "余韻のある動き",
    titleEn: "Lingering Motion",
    description:
      "即座に現れず、すっと現れる。穏やかなイージングで、空間に自然に馴染む。",
  },
]

export function Principles() {
  return (
    <section className="px-6 py-32 md:py-48">
      <div className="mx-auto max-w-5xl">
        <FadeInCard>
          <p className="font-serif text-xs tracking-[0.4em] text-primary/70 uppercase md:text-sm">
            Principles
          </p>
        </FadeInCard>

        <div className="mt-16 grid gap-16 md:mt-24 md:grid-cols-3 md:gap-12 lg:gap-20">
          {principles.map((item, i) => (
            <FadeInCard key={item.number} delay={i * 200}>
              <article className="group">
                {/* Number */}
                <span className="font-serif text-sm tracking-widest text-primary/50">
                  {item.number}
                </span>

                {/* Thin separator */}
                <div className="mt-4 h-px w-8 bg-border transition-all duration-500 group-hover:w-12 group-hover:bg-primary/40" />

                {/* Title */}
                <h3 className="mt-6 font-sans text-xl tracking-wide text-foreground md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-1 font-serif text-xs tracking-[0.2em] text-muted-foreground/60 italic">
                  {item.titleEn}
                </p>

                {/* Description */}
                <p className="mt-5 font-sans text-sm leading-[1.9] tracking-wide text-muted-foreground">
                  {item.description}
                </p>
              </article>
            </FadeInCard>
          ))}
        </div>
      </div>
    </section>
  )
}
