import { Separator } from "@/components/ui/separator"

export function SpacingSection() {
  return (
    <section id="spacing">
      <div className="mb-12">
        <h2 className="mb-3 font-serif text-2xl font-light tracking-wide text-foreground md:text-3xl">
          Spacing & Rhythm
        </h2>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          余白はデザインの主役。要素と要素のあいだの「間（ま）」が、情報よりも多くを語る。
        </p>
      </div>

      {/* Spacing scale */}
      <div className="mb-16">
        <h3 className="mb-8 text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Spacing Scale
        </h3>
        <div className="flex flex-col gap-4">
          {[
            { name: "xs", value: "4px", tw: "gap-1 / p-1" },
            { name: "sm", value: "8px", tw: "gap-2 / p-2" },
            { name: "md", value: "16px", tw: "gap-4 / p-4" },
            { name: "lg", value: "24px", tw: "gap-6 / p-6" },
            { name: "xl", value: "32px", tw: "gap-8 / p-8" },
            { name: "2xl", value: "48px", tw: "gap-12 / p-12" },
            { name: "3xl", value: "64px", tw: "gap-16 / p-16" },
            { name: "section", value: "128px", tw: "gap-32 / py-32" },
          ].map((space) => (
            <div key={space.name} className="flex items-center gap-6">
              <code className="w-16 text-xs text-muted-foreground/60 font-mono text-right">
                {space.name}
              </code>
              <div
                className="h-3 rounded-sm bg-primary/20"
                style={{ width: space.value }}
              />
              <span className="text-xs text-muted-foreground">{space.value}</span>
              <code className="text-xs text-muted-foreground/40 font-mono">
                {space.tw}
              </code>
            </div>
          ))}
        </div>
      </div>

      {/* Separator */}
      <div className="mb-16">
        <h3 className="mb-8 text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Separator
        </h3>
        <div className="flex flex-col gap-8 max-w-md">
          <div>
            <p className="mb-4 text-sm text-muted-foreground">Horizontal</p>
            <Separator />
          </div>
          <div className="flex items-center gap-6 h-8">
            <p className="text-sm text-muted-foreground">Vertical</p>
            <Separator orientation="vertical" />
            <p className="text-sm text-muted-foreground">separator</p>
            <Separator orientation="vertical" />
            <p className="text-sm text-muted-foreground">example</p>
          </div>
        </div>
      </div>

      {/* Radius */}
      <div className="mb-16">
        <h3 className="mb-8 text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Border Radius
        </h3>
        <div className="flex flex-wrap items-end gap-8">
          {[
            { name: "none", className: "rounded-none" },
            { name: "sm", className: "rounded-sm" },
            { name: "md", className: "rounded-md" },
            { name: "lg", className: "rounded-lg" },
            { name: "xl", className: "rounded-xl" },
            { name: "full", className: "rounded-full" },
          ].map((r) => (
            <div key={r.name} className="flex flex-col items-center gap-3">
              <div
                className={`h-16 w-16 border border-border bg-card ${r.className}`}
              />
              <code className="text-xs text-muted-foreground/60 font-mono">
                {r.name}
              </code>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Lull では <code className="font-mono text-xs">rounded-sm</code> を基本とし、
          角の丸みを控えめに保つ。過度な丸みはカジュアルになりすぎるため避ける。
        </p>
      </div>

      {/* Motion guidelines */}
      <div className="rounded-sm border border-border/50 bg-card p-8">
        <h3 className="mb-4 font-serif text-lg font-light text-foreground">
          Motion Guidelines
        </h3>
        <ul className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
            <span>控えめ、でも不在ではない。派手なアニメーションは使わない</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
            <span>0.2~0.4秒の穏やかなイージング（ease-out）で、空間に自然に馴染む動き</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
            <span>要素の出現にはフェードイン + 微細なY軸移動を組み合わせる</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
            <span>触覚的なフィードバック: hover時のscale変化は1.02以下に抑える</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
