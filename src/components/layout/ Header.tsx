"use client";

import { dictionary } from "@/lib/dictionary";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const { lang, setLang } = useLanguage();
  const t = dictionary[lang];

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
            <Link href="/"
              className="font-serif text-2xl font-bold tracking-tight text-slate-900">
              <Image
                src="/logo-sofia-capuano.svg"
                alt="Fine art portrait during golden hour"
                width={200}
                height={40}
                priority
                className="object-cover"
              />
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
            <div className="flex items-center gap-2 text-sm">
              <button
                onClick={() => setLang("es")}
                className={lang === "es" ? "font-bold text-primary" : ""}>
                ES
              </button>
              <span>/</span>
              <button
                onClick={() => setLang("en")}
                className={lang === "en" ? "font-bold text-primary" : ""}>
                EN
              </button>
            </div>

            <button className="rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 cursor-pointer">
              {t.header.cta}
            </button>
          </div>

          {/* Mobile CTA */}
          <div className="flex lg:hidden">
            <button
              aria-label="Book session"
              className="bg-primary transition-colors hover:text-primary/80 cursor-pointer">
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