import { Hero } from "@/components/lull/hero"
import { Philosophy } from "@/components/lull/philosophy"
import { Principles } from "@/components/lull/principles"
import { Palette } from "@/components/lull/palette"
import { Contact } from "@/components/lull/contact"
import { Footer } from "@/components/lull/footer"

export default function Page() {
  return (
    <main className="relative overflow-x-hidden">
      {/* Subtle paper-like texture overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-10 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />

      {/* Sections separated by generous vertical rhythm */}
      <Hero />

      {/* Subtle horizontal divider */}
      <div className="mx-auto w-px h-24 bg-border/50" />

      <Philosophy />

      <div className="mx-auto w-px h-24 bg-border/50" />

      <Principles />

      <div className="mx-auto w-px h-24 bg-border/50" />

      <Palette />

      <div className="mx-auto w-px h-24 bg-border/50" />

      <Contact />

      <Footer />
    </main>
  )
}
