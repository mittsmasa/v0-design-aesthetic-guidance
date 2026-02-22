function SectionTitle({ id, title, description }: { id: string; title: string; description: string }) {
  return (
    <div className="mb-12" id={id}>
      <h2 className="mb-3 font-serif text-2xl font-light tracking-wide text-foreground md:text-3xl">
        {title}
      </h2>
      <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  )
}

function ColorSwatch({
  name,
  nameJa,
  variable,
  className,
  textClassName = "text-foreground",
}: {
  name: string
  nameJa?: string
  variable: string
  className: string
  textClassName?: string
}) {
  return (
    <div className="flex flex-col gap-3">
      <div
        className={`h-24 rounded-sm border border-border/30 ${className}`}
        aria-label={name}
      />
      <div className="flex flex-col gap-1">
        <span className={`text-sm font-medium ${textClassName}`}>{name}</span>
        {nameJa && (
          <span className="text-xs text-muted-foreground/70">{nameJa}</span>
        )}
        <code className="text-xs text-muted-foreground font-mono">{variable}</code>
      </div>
    </div>
  )
}

export function ColorPaletteSection() {
  return (
    <section>
      <SectionTitle
        id="colors"
        title="Color Palette"
        description="生成り（きなり）を基調とした、温度のある色彩体系。原色は使わず、自然光の中の紙とインクの世界観を表現する。"
      />

      {/* Base colors */}
      <div className="mb-10">
        <h3 className="mb-6 text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Base
        </h3>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <ColorSwatch
            name="Background"
            nameJa="生成り"
            variable="--background"
            className="bg-background"
          />
          <ColorSwatch
            name="Foreground"
            nameJa="墨色"
            variable="--foreground"
            className="bg-foreground"
            textClassName="text-foreground"
          />
          <ColorSwatch
            name="Card"
            variable="--card"
            className="bg-card"
          />
          <ColorSwatch
            name="Muted"
            variable="--muted"
            className="bg-muted"
          />
        </div>
      </div>

      {/* Brand colors */}
      <div className="mb-10">
        <h3 className="mb-6 text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Brand
        </h3>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <ColorSwatch
            name="Primary"
            nameJa="テラコッタ"
            variable="--primary"
            className="bg-primary"
          />
          <ColorSwatch
            name="Secondary"
            nameJa="淡温色"
            variable="--secondary"
            className="bg-secondary"
          />
          <ColorSwatch
            name="Accent"
            nameJa="キャメル"
            variable="--accent"
            className="bg-accent"
          />
          <ColorSwatch
            name="Destructive"
            variable="--destructive"
            className="bg-destructive"
          />
        </div>
      </div>

      {/* Functional colors */}
      <div>
        <h3 className="mb-6 text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Functional
        </h3>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <ColorSwatch
            name="Border"
            variable="--border"
            className="bg-border"
          />
          <ColorSwatch
            name="Input"
            variable="--input"
            className="bg-input"
          />
          <ColorSwatch
            name="Ring"
            variable="--ring"
            className="bg-ring"
          />
          <ColorSwatch
            name="Muted Foreground"
            variable="--muted-foreground"
            className="bg-muted-foreground"
          />
        </div>
      </div>

      {/* Color usage guideline */}
      <div className="mt-12 rounded-sm border border-border/50 bg-card p-8">
        <h3 className="mb-4 font-serif text-lg font-light text-foreground">
          Color Guidelines
        </h3>
        <ul className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
            <span>原色は使わない。彩度の高い色は空間の静けさを壊す</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
            <span>テラコッタは封蝋のように、要所でのみ使う</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
            <span>墨色のテキストは黒ほど硬くなく、万年筆のインクのような温かさ</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
            <span>生成りの背景は真っ白ではなく、自然光の中の紙を想起させる</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
