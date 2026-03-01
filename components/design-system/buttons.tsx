"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, EnvelopeSimple, Plus, GearSix, Trash } from "@phosphor-icons/react"

export function ButtonsSection() {
  return (
    <section id="buttons">
      <div className="mb-12">
        <h2 className="mb-3 font-serif text-2xl font-light tracking-wide text-foreground md:text-3xl">
          Buttons
        </h2>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          触覚的なフィードバック。押した実感のある微細なレスポンスを持たせる。
        </p>
      </div>

      {/* Variants */}
      <div className="mb-12">
        <h3 className="mb-6 text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Variants
        </h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </div>

      {/* Sizes */}
      <div className="mb-12">
        <h3 className="mb-6 text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Sizes
        </h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      {/* With Icons */}
      <div className="mb-12">
        <h3 className="mb-6 text-xs tracking-[0.2em] text-muted-foreground uppercase">
          With Icons
        </h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button>
            <EnvelopeSimple weight="light" />
            Send
          </Button>
          <Button variant="secondary">
            <Heart weight="light" />
            Favorite
          </Button>
          <Button variant="outline">
            <Plus weight="light" />
            Add
          </Button>
          <Button variant="ghost">
            <GearSix weight="light" />
            Settings
          </Button>
          <Button variant="destructive">
            <Trash weight="light" />
            Delete
          </Button>
        </div>
      </div>

      {/* Icon buttons */}
      <div className="mb-12">
        <h3 className="mb-6 text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Icon Only
        </h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="icon" variant="default">
            <Plus weight="light" />
          </Button>
          <Button size="icon" variant="secondary">
            <Heart weight="light" />
          </Button>
          <Button size="icon" variant="outline">
            <GearSix weight="light" />
          </Button>
          <Button size="icon" variant="ghost">
            <EnvelopeSimple weight="light" />
          </Button>
        </div>
      </div>

      {/* States */}
      <div className="mb-12">
        <h3 className="mb-6 text-xs tracking-[0.2em] text-muted-foreground uppercase">
          States
        </h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button>Default</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>

      {/* Composition example */}
      <div>
        <h3 className="mb-6 text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Composition
        </h3>
        <div className="flex flex-col gap-6 rounded-sm border border-border/50 bg-card p-8">
          <p className="text-sm text-muted-foreground">
            CTA examples following Lull design language
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button className="tracking-wider">
              Get Started
              <ArrowRight weight="light" />
            </Button>
            <Button variant="outline" className="tracking-wider">
              Learn More
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="ghost" size="sm" className="text-xs tracking-[0.15em] uppercase">
              Subscribe
            </Button>
            <Button variant="link" size="sm" className="text-xs tracking-[0.15em]">
              View Details
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
