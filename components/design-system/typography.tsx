export function TypographySection() {
  return (
    <section id="typography">
      <div className="mb-12">
        <h2 className="mb-3 font-serif text-2xl font-light tracking-wide text-foreground md:text-3xl">
          Typography
        </h2>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          和文は明朝体の端正さ、英文はセリフ体の品格。文字が呼吸できる余白を確保し、詰め込まない。
        </p>
      </div>

      {/* Font families */}
      <div className="mb-16 grid gap-12 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <p className="text-xs tracking-[0.2em] text-muted-foreground/60 uppercase">
            Primary / Japanese
          </p>
          <p className="font-sans text-3xl leading-snug text-foreground">
            Shippori Mincho
          </p>
          <p className="font-sans text-base leading-relaxed text-muted-foreground">
            横線の細さと縦線の強さのコントラストが「力みのない本気」を体現する明朝体。
          </p>
          <code className="text-xs text-muted-foreground/60 font-mono">font-sans</code>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xs tracking-[0.2em] text-muted-foreground/60 uppercase">
            Display / English
          </p>
          <p className="font-serif text-3xl leading-snug text-foreground italic">
            Cormorant Garamond
          </p>
          <p className="font-sans text-base leading-relaxed text-muted-foreground">
            和文明朝と通底する品格。Lull のロゴタイプとしても機能する佇まい。
          </p>
          <code className="text-xs text-muted-foreground/60 font-mono">font-serif</code>
        </div>
      </div>

      {/* Type scale */}
      <div className="mb-16">
        <h3 className="mb-8 text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Type Scale
        </h3>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2 border-b border-border/30 pb-8">
            <code className="text-xs text-muted-foreground/60 font-mono">Display / 4.5rem</code>
            <p className="font-serif text-7xl font-light tracking-wide text-foreground">
              Lull
            </p>
          </div>
          <div className="flex flex-col gap-2 border-b border-border/30 pb-8">
            <code className="text-xs text-muted-foreground/60 font-mono">H1 / 3rem</code>
            <h1 className="font-serif text-5xl font-light tracking-wide text-foreground">
              静けさの中に
            </h1>
          </div>
          <div className="flex flex-col gap-2 border-b border-border/30 pb-8">
            <code className="text-xs text-muted-foreground/60 font-mono">H2 / 1.875rem</code>
            <h2 className="font-serif text-3xl font-light tracking-wide text-foreground">
              確かな手触りを
            </h2>
          </div>
          <div className="flex flex-col gap-2 border-b border-border/30 pb-8">
            <code className="text-xs text-muted-foreground/60 font-mono">H3 / 1.25rem</code>
            <h3 className="font-serif text-xl font-light tracking-wide text-foreground">
              余白はデザインの主役
            </h3>
          </div>
          <div className="flex flex-col gap-2 border-b border-border/30 pb-8">
            <code className="text-xs text-muted-foreground/60 font-mono">Body / 1rem</code>
            <p className="font-sans text-base leading-relaxed text-foreground">
              要素と要素のあいだの「間（ま）」が、情報よりも多くを語る。密度より呼吸 ― 一画面に載せる情報量を意図的に抑え、スクロールやページ遷移を許容する。
            </p>
          </div>
          <div className="flex flex-col gap-2 border-b border-border/30 pb-8">
            <code className="text-xs text-muted-foreground/60 font-mono">Small / 0.875rem</code>
            <p className="font-sans text-sm leading-relaxed text-muted-foreground">
              控えめ、でも不在ではない。派手なアニメーションは使わない。しかし、画面遷移のフェードや要素の出現に「余韻」を持たせる。
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <code className="text-xs text-muted-foreground/60 font-mono">Caption / 0.75rem</code>
            <p className="font-sans text-xs tracking-[0.15em] leading-relaxed text-muted-foreground/70 uppercase">
              A quiet space where moments breathe
            </p>
          </div>
        </div>
      </div>

      {/* Typography guidelines */}
      <div className="rounded-sm border border-border/50 bg-card p-8">
        <h3 className="mb-4 font-serif text-lg font-light text-foreground">
          Typography Guidelines
        </h3>
        <ul className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
            <span>ゆったりとした字間と行間。文字が呼吸できる余白を確保する</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
            <span>{'本文のline-heightは1.6以上（leading-relaxed）'}</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
            <span>見出しには tracking-wide 以上のletter-spacingを適用</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
            <span>キャプション・ラベルにはuppercase + 広めのtrackingで静謐な印象を</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
