"use client";

import { useLanguage } from "@/context/LanguageContext"
import { dictionary } from "@/lib/dictionary"
import Image from "next/image"
import Link from "next/link";

type PortfolioItem = {
  id: number
  title: string
  category: string
  image: string
  tall?: boolean
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Weddings",
    category: "Gallery",
    image: "/hero.jpg",
    tall: true,
  },
  {
    id: 2,
    title: "Beach Books",
    category: "Editorial",
    image: "/beach.jpeg",
  },
  {
    id: 3,
    title: "Portraiture",
    category: "Portraiture",
    image: "/portrait.jpeg",
    tall: true,
  },
  {
    id: 4,
    title: "Events",
    category: "Events",
    image: "/events.jpeg",
  },
]

export default function PortfolioGrid() {
  const { lang } = useLanguage();
  const t = dictionary[lang];
  return (
    <section id="portfolio" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl font-medium text-slate-900 sm:text-5xl mb-4">
            {t.portfolio.heading}
          </h2>
          <p className="max-w-xl mx-auto text-slate-500">
            {t.portfolio.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-xl cursor-pointer
                ${item.tall ? "lg:row-span-2 min-h-[400px]" : "aspect-square"}`}>
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"/>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-80 transition-opacity group-hover:opacity-100" />

              {/* Text */}
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-white/80">
                  {item.category}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link href="/portfolio" className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-8 py-3 text-sm font-medium text-slate-900 shadow-sm transition-all hover:border-primary hover:text-primary hover:bg-primary/5">
            {t.portfolio.cta}
          </Link>
        </div>

      </div>
    </section>
  )
}