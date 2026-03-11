import { DesignSystemHeader } from "@/components/design-system/header"
import { ColorPaletteSection } from "@/components/design-system/color-palette"
import { TypographySection } from "@/components/design-system/typography"
import { IconographySection } from "@/components/design-system/iconography"
import { ButtonsSection } from "@/components/design-system/buttons"
import { FormsSection } from "@/components/design-system/forms"
import { FeedbackSection } from "@/components/design-system/feedback"
import { CardsSection } from "@/components/design-system/cards"
import { SpacingSection } from "@/components/design-system/spacing"
import { DesignSystemNav } from "@/components/design-system/nav"

export const metadata = {
  title: "Lull - Design System",
  description: "Design guidelines, color palette, and component library for Lull.",
}

export default function DesignSystemPage() {
  return (
    <main className="relative min-h-svh">
      {/* Paper texture overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-10 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />

      <DesignSystemNav />
      <DesignSystemHeader />

      <div className="mx-auto max-w-5xl px-6 pb-32">
        <div className="flex flex-col gap-32">
          <ColorPaletteSection />
          <TypographySection />
          <IconographySection />
          <ButtonsSection />
          <FormsSection />
          <FeedbackSection />
          <CardsSection />
          <SpacingSection />
        </div>
      </div>
    </main>
  )
}
