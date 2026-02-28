"use client";

import { dictionary } from "@/lib/dictionary";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { lang } = useLanguage();
  const t = dictionary[lang];
  return (
    <section id="about" className="bg-background-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          
          <div className="relative">
            <div className="aspect-4/5 w-full overflow-hidden bg-gray-200 shadow-xl rounded-2xl">
              <Image
                src="/sofia-capuano3.jpeg"
                alt="Professional female photographer smiling gently holding a vintage camera"
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-105 rounded-2xl"/>
            </div>

            <div className="absolute -bottom-8 -right-8 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -top-8 -left-8 -z-10 h-64 w-64 rounded-full bg-warm-grey/10 blur-3xl" />
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-6 flex items-center gap-2 text-primary">
              <span className="h-px w-8 bg-primary" />
              <span className="text-sm font-bold uppercase tracking-widest">
                {t.about.eyebrow}
              </span>
            </div>

            <h2 className="mb-6 font-serif text-4xl font-medium leading-tight text-slate-900 sm:text-5xl">
              {t.about.heading} <br className="hidden lg:block" />
              {t.about.heading2}
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-slate-600">
              <p>{t.about.description}</p>
              <p>{t.about.description2}</p>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              <div className="flex flex-col gap-1">
                <span className="font-serif text-3xl font-medium text-primary">500+</span>
                <span className="text-sm uppercase tracking-wider text-slate-500">
                  {t.about.stories.label}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-serif text-3xl font-medium text-primary">10+</span>
                <span className="text-sm uppercase tracking-wider text-slate-500">
                  {t.about.experience.label}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-serif text-3xl font-medium text-primary">12</span>
                <span className="text-sm uppercase tracking-wider text-slate-500">
                  {t.about.destinations.label}
                </span>
              </div>
            </div>

            <div className="mt-10">
              <Link href="#"
                className="group inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-primary/80">
                {t.about.ctaLink}
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}