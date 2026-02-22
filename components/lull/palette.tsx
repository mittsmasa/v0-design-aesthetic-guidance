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

const colors = [
  {
    name: "生成り",
    nameEn: "Kinari",
    hex: "#f3ede4",
    description: "温度のある白",
    textDark: true,
  },
  {
    name: "テラコッタ",
    nameEn: "Terracotta",
    hex: "#b5705a",
    description: "封蝋の赤み",
    textDark: false,
  },
  {
    name: "キャメル",
    nameEn: "Camel",
    hex: "#c4a46d",
    description: "革の手触り",
    textDark: false,
  },
  {
    name: "墨色",
    nameEn: "Sumi-iro",
    hex: "#3d3429",
    description: "万年筆のインク",
    textDark: false,
  },
]

export function Palette() {
  return (
    <section className="px-6 py-32 md:py-48">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <p className="font-serif text-xs tracking-[0.4em] text-primary/70 uppercase md:text-sm">
            Palette
          </p>
        </FadeIn>

        <FadeIn delay={150}>
          <h2 className="mt-8 font-sans text-2xl leading-relaxed tracking-wide text-foreground md:text-3xl">
            色は語りかけない。
            <br />
            寄り添うだけ。
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 md:mt-24 lg:grid-cols-4">
          {colors.map((color, i) => (
            <FadeIn key={color.nameEn} delay={300 + i * 150}>
              <div className="group">
                {/* Color swatch */}
                <div
                  className="aspect-[4/3] rounded-sm transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  style={{ backgroundColor: color.hex }}
                />

                {/* Info */}
                <div className="mt-4">
                  <p className="font-sans text-sm tracking-wide text-foreground">
                    {color.name}
                  </p>
                  <p className="mt-0.5 font-serif text-xs tracking-[0.15em] text-muted-foreground/60 italic">
                    {color.nameEn}
                  </p>
                  <p className="mt-2 font-sans text-xs leading-relaxed tracking-wide text-muted-foreground">
                    {color.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
