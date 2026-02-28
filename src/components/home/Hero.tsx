"use client";

import Image from "next/image"
import { dictionary } from "@/lib/dictionary";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { lang, setLang } = useLanguage();
  const t = dictionary[lang];

  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <Image
        src="/hero.png"
        alt="Fine art portrait during golden hour"
        fill
        priority
        className="object-cover object-[50%_15%]" />

      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/0 to-black/60" />

      <div className="relative flex h-full flex-col items-center justify-center text-center text-white px-6">
        <span className="mb-4 rounded-full bg-white/20 px-4 py-1.5 text-xs uppercase tracking-widest backdrop-blur-sm">
          Fine Art Photography
        </span>

        <h1 className="font-display mb-6 text-5xl font-medium leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-sm">
          {t.hero.heading} <br />
          <span className="italic">{t.hero.heading2}</span>
        </h1>

        <p className="mt-6 mb-10 max-w-lg text-xl text-white/90">
          {t.hero.subtitle}
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <button className="rounded-lg bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-slate-900 transition-all hover:bg-sand hover:shadow-2xl cursor-pointer">
            {t.hero.cta}
          </button>
        </div>
      </div>
    </section>
  )
}