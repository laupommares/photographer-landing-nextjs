import { dictionary } from "@/lib/dictionary";
import Link from "next/link";

export default function Header() {
  const t = dictionary.es; 

  return (
    <header className="sticky top-0 z-50 w-full border-b border-sand bg-white/90 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              aria-label="Open menu"
              className="text-slate-900 transition-colors hover:text-primary">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>

          {/* Left Nav */}
          <nav className="hidden text-text items-center gap-8 lg:flex">
            <Link href="#portfolio"
              className="text-sm tracking-wide transition-colors hover:text-primary">
              Portfolio
            </Link>
            <Link href="#about"
              className="text-sm tracking-wide transition-colors hover:text-primary">
              {t.header.linkAbout}
            </Link>
          </nav>

          {/* Logo */}
          <div className="flex shrink-0 items-center gap-2">
            <span className="material-symbols-outlined text-2xl text-primary">
              photo_filter
            </span>

            <Link href="/"
              className="font-serif text-2xl font-bold tracking-tight text-slate-900">
              Sofía Capuano
            </Link>
          </div>

          {/* Right Nav */}
          <div className="hidden items-center text-text gap-8 lg:flex">
            <Link href="#process"
              className="text-sm font-medium tracking-wide transition-colors hover:text-primary">
              {t.header.linkProcess}
            </Link>
            <Link href="#contact"
              className="text-sm font-medium tracking-wide transition-colors hover:text-primary">
              {t.header.linkContact}
            </Link>

            <button className="rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20">
            {t.header.cta}
            </button>
          </div>

          {/* Mobile CTA */}
          <div className="flex lg:hidden">
            <button
              aria-label="Book session"
              className="bg-primary transition-colors hover:text-primary/80">
              <span className="material-symbols-outlined">
                calendar_month
              </span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}