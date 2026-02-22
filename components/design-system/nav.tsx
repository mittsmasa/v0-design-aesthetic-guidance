import Link from "next/link"

export function DesignSystemNav() {
  return (
    <nav className="sticky top-0 z-20 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-serif text-lg tracking-[0.2em] text-foreground/60 transition-colors hover:text-foreground"
        >
          Lull
        </Link>
        <span className="text-xs tracking-[0.2em] text-muted-foreground/60 uppercase">
          Design System
        </span>
      </div>
    </nav>
  )
}
