export function Footer() {
  return (
    <footer className="px-6 py-16 md:py-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6">
        {/* Thin divider */}
        <div className="h-px w-12 bg-border" />

        {/* Logo mark */}
        <p className="font-serif text-2xl tracking-[0.3em] text-foreground/40">
          Lull
        </p>

        <p className="font-sans text-xs tracking-[0.2em] text-muted-foreground/40">
          &copy; 2026
        </p>
      </div>
    </footer>
  )
}
