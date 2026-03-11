"use client"

import {
  Heart,
  EnvelopeSimple,
  GearSix,
  Bell,
  MagnifyingGlass,
  ArrowRight,
  Plus,
  Trash,
  PencilSimple,
  Eye,
  BookmarkSimple,
  ShareNetwork,
  CalendarBlank,
  ChatCircle,
  User,
  House,
  Moon,
  Sun,
  Check,
  X,
  Warning,
  Info,
  CaretDown,
  ArrowLeft,
  DownloadSimple,
  UploadSimple,
  Copy,
  Link,
  MapPin,
  Clock,
  Star,
  Leaf,
  Drop,
  Feather,
  type IconWeight,
} from "@phosphor-icons/react"
import type { ComponentType } from "react"

interface PhosphorIconProps {
  size?: number | string
  weight?: IconWeight
  color?: string
  className?: string
}

const SHOWCASE_ICONS: { icon: ComponentType<PhosphorIconProps>; label: string }[] = [
  { icon: Heart, label: "Heart" },
  { icon: EnvelopeSimple, label: "Envelope" },
  { icon: GearSix, label: "Gear" },
  { icon: Bell, label: "Bell" },
  { icon: MagnifyingGlass, label: "Search" },
  { icon: ArrowRight, label: "Arrow" },
  { icon: Plus, label: "Plus" },
  { icon: Trash, label: "Trash" },
  { icon: PencilSimple, label: "Edit" },
  { icon: Eye, label: "Eye" },
  { icon: BookmarkSimple, label: "Bookmark" },
  { icon: ShareNetwork, label: "Share" },
  { icon: CalendarBlank, label: "Calendar" },
  { icon: ChatCircle, label: "Chat" },
  { icon: User, label: "User" },
  { icon: House, label: "Home" },
  { icon: Moon, label: "Moon" },
  { icon: Sun, label: "Sun" },
  { icon: Check, label: "Check" },
  { icon: X, label: "Close" },
  { icon: Warning, label: "Warning" },
  { icon: Info, label: "Info" },
  { icon: CaretDown, label: "Caret" },
  { icon: ArrowLeft, label: "Back" },
  { icon: DownloadSimple, label: "Download" },
  { icon: UploadSimple, label: "Upload" },
  { icon: Copy, label: "Copy" },
  { icon: Link, label: "Link" },
  { icon: MapPin, label: "Location" },
  { icon: Clock, label: "Clock" },
  { icon: Star, label: "Star" },
  { icon: Leaf, label: "Leaf" },
  { icon: Drop, label: "Drop" },
  { icon: Feather, label: "Feather" },
]

const WEIGHTS: { weight: IconWeight; label: string; description: string }[] = [
  { weight: "thin", label: "Thin", description: "繊細。装飾的な大型アイコンに" },
  { weight: "light", label: "Light", description: "推奨。Lull の標準ウェイト" },
  { weight: "regular", label: "Regular", description: "強調が必要な箇所に" },
  { weight: "bold", label: "Bold", description: "アクティブ状態やアクセントに" },
  { weight: "fill", label: "Fill", description: "選択済み・お気に入り等の塗り表現" },
  { weight: "duotone", label: "Duotone", description: "二重層。装飾的な場面に" },
]

const SIZES = [16, 20, 24, 32, 40, 48]

export function IconographySection() {
  return (
    <section id="iconography">
      <div className="mb-12">
        <h2 className="mb-3 font-serif text-2xl font-light tracking-wide text-foreground md:text-3xl">
          Iconography
        </h2>
        <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
          Phosphor Icons を採用。6 種類のウェイト（thin / light / regular / bold / fill /
          duotone）を使い分け、Lull の世界観に合わせた線の細さと余白感を実現する。
          標準ウェイトは <code className="font-mono text-xs">light</code> 。
        </p>
      </div>

      {/* Weight showcase */}
      <div className="mb-16">
        <h3 className="mb-8 text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Weights
        </h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WEIGHTS.map(({ weight, label, description }) => (
            <div
              key={weight}
              className={`flex flex-col gap-4 rounded-sm border p-6 transition-colors ${
                weight === "light"
                  ? "border-primary/30 bg-primary/[0.03]"
                  : "border-border/50 bg-card"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  {label}
                </span>
                {weight === "light" && (
                  <span className="rounded-sm bg-primary/10 px-2 py-0.5 text-[10px] tracking-[0.15em] text-primary uppercase">
                    Default
                  </span>
                )}
              </div>
              <div className="flex items-center gap-4">
                <Heart weight={weight} size={24} className="text-foreground" />
                <EnvelopeSimple weight={weight} size={24} className="text-foreground" />
                <GearSix weight={weight} size={24} className="text-foreground" />
                <Bell weight={weight} size={24} className="text-foreground" />
                <Star weight={weight} size={24} className="text-foreground" />
                <Leaf weight={weight} size={24} className="text-foreground" />
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Size scale */}
      <div className="mb-16">
        <h3 className="mb-8 text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Size Scale
        </h3>
        <div className="flex flex-wrap items-end gap-8">
          {SIZES.map((size) => (
            <div key={size} className="flex flex-col items-center gap-3">
              <div className="flex items-center justify-center rounded-sm border border-border/30 bg-card p-3">
                <Heart weight="light" size={size} className="text-foreground" />
              </div>
              <code className="text-xs text-muted-foreground/60 font-mono">{size}px</code>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          ボタン内アイコンは <code className="font-mono text-xs">20px</code> 、
          本文中は <code className="font-mono text-xs">16px</code> 、
          装飾的アイコンは <code className="font-mono text-xs">32~48px</code> を推奨。
        </p>
      </div>

      {/* Icon grid */}
      <div className="mb-16">
        <h3 className="mb-8 text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Icon Library
        </h3>
        <div className="grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-8">
          {SHOWCASE_ICONS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group flex flex-col items-center gap-2 rounded-sm border border-border/30 bg-card p-4 transition-colors hover:border-primary/30 hover:bg-primary/[0.02]"
            >
              <Icon
                weight="light"
                size={24}
                className="text-foreground/70 transition-colors group-hover:text-foreground"
              />
              <span className="text-[10px] tracking-wider text-muted-foreground/60 group-hover:text-muted-foreground">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Usage guidelines */}
      <div className="rounded-sm border border-border/50 bg-card p-8">
        <h3 className="mb-4 font-serif text-lg font-light text-foreground">
          Icon Guidelines
        </h3>
        <ul className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
            <span>
              標準ウェイトは <code className="font-mono text-xs">light</code> 。Lull の線の細さ・余白感と調和する
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
            <span>
              アクティブ / 選択済み状態には <code className="font-mono text-xs">fill</code> を使い、状態変化を視覚的に伝える
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
            <span>
              アイコン単体で意味を伝えず、必ずラベルまたは <code className="font-mono text-xs">aria-label</code> を併用する
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
            <span>
              色はテキストカラーを継承（<code className="font-mono text-xs">currentColor</code>）し、アイコン専用色は設けない
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
            <span>
              装飾的に大きく使う場合は <code className="font-mono text-xs">thin</code> ウェイトで繊細な線画として扱う
            </span>
          </li>
        </ul>
      </div>
    </section>
  )
}
