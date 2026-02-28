"use client";

import { dictionary } from "@/lib/dictionary";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const { lang, setLang } = useLanguage();
  const t = dictionary[lang];
  const [isOpen, setIsOpen] = useState(false);
  
    const whatsappMessage =
      lang === "es"
        ? "Hola Sofi! Me gustaría reservar una sesión."
        : "Hi Sofi! I would love to book a session.";
  
    const whatsappLink = `https://wa.me/34611328596?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-sand bg-white/90 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 transition-colors hover:text-primary">
              <span className="material-symbols-outlined">
                {isOpen ? "close" : "menu"}
              </span>
            </button>
          </div>

          {/* Left Nav */}
          <nav className="hidden text-text items-center gap-8 lg:flex">
            <Link href="/portfolio"
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
              <Image src="/logo-sofia-capuano.svg"
                alt="Fine art portrait during golden hour"
                width={200}
                height={40}
                priority
                className="object-cover"/>
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
                className={lang === "es" ? "font-bold text-primary" : "cursor-pointer"}>
                ES
              </button>
              <span>/</span>
              <button
                onClick={() => setLang("en")}
                className={lang === "en" ? "font-bold text-primary" : "cursor-pointer"}>
                EN
              </button>
            </div>

            <Link href={whatsappLink} className="rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 cursor-pointer">
              {t.header.cta}
            </Link>
          </div>

          {/* Mobile CTA */}
          <div className="flex gap-4 items-center lg:hidden">
            <div className="lg:hidden">
              <button onClick={() => setLang(lang === "es" ? "en" : "es")}
                className="px-3 py-1 rounded-full border border-primary text-primary text-sm font-medium active:scale-95 transition">
                {lang === "es" ? "ES" : "EN"}
              </button>
            </div>
            <Link href={whatsappLink} 
              aria-label="Book session"
              className="bg-primary transition-colors hover:text-primary/80 cursor-pointer py-2.5 px-5 flex items-center rounded-lg">
              <span className="material-symbols-outlined text-white">
                calendar_month
              </span>
            </Link>
          </div>

        </div>
      </div>
      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="lg:hidden fixed top-20 left-0 w-full z-40">
          <div className="bg-white shadow-xl border-t border-sand">
            <div className="px-6 py-8 flex flex-col gap-6 text-text">

              <Link
                href="/portfolio"
                onClick={() => setIsOpen(false)}
                className="text-base font-medium hover:text-primary transition-colors" >
                Portfolio
              </Link>

              <Link href="#process"
                onClick={() => setIsOpen(false)}
                className="text-base font-medium hover:text-primary transition-colors">
                {t.header.linkProcess}
              </Link>

              <Link href="#about"
                onClick={() => setIsOpen(false)}
                className="text-base font-medium hover:text-primary transition-colors">
                {t.header.linkAbout}
              </Link>

              <Link href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-base font-medium hover:text-primary transition-colors">
                {t.header.linkContact}
              </Link>

              <button onClick={() => setIsOpen(false)}
                className="mt-4 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-white transition-all hover:bg-primary/90">
                {t.header.cta}
              </button>

            </div>
          </div>
        </div>
      )}
    </header>
  );
}