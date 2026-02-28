"use client";

import { dictionary } from "@/lib/dictionary";


export default function CTASection() {
   const t = dictionary.es
    return (
      <section
      id="contact"
      className="relative overflow-hidden bg-white py-24"
    >
      <div className="absolute left-0 top-1/2 h-64 w-32 -translate-y-1/2 rounded-r-full bg-primary/5 blur-2xl" />
      <div className="absolute right-0 top-1/2 h-64 w-32 -translate-y-1/2 rounded-l-full bg-warm-grey/10 blur-2xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="mb-6 font-serif text-4xl font-medium text-slate-900 sm:text-5xl">
          {t.cta.heading}
        </h2>

        <p className="mb-10 text-lg text-slate-500">
          {t.cta.subtitle}
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="min-w-[180px] rounded-lg bg-primary px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-primary/90">
            {t.cta.primaryButton}
          </button>

          <button className="min-w-[180px] rounded-lg border border-slate-200 bg-white px-8 py-4 text-base font-bold text-slate-900 transition-all hover:border-primary hover:text-primary">
            {t.cta.secondaryButton}
          </button>
        </div>
      </div>
    </section>
    )
  }