export function DesignSystemHeader() {
  return (
    <header className="px-6 pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="mx-auto max-w-5xl">
        <p className="mb-6 text-xs tracking-[0.3em] text-primary/70 uppercase font-sans">
          Guidelines
        </p>
        <h1 className="mb-8 font-serif text-4xl font-light tracking-wide text-foreground md:text-5xl lg:text-6xl text-balance">
          Design System
        </h1>
        <div className="h-px w-16 bg-primary/30 mb-8" />
        <p className="max-w-lg font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
          Lull のデザイン言語を定義するガイドラインとコンポーネント集。
          招待状のような温もりと、余白が語る静けさを、すべてのUIに。
        </p>
      </div>
    </header>
  )
}
