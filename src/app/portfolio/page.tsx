"use client";

import { useState } from "react";
import Header from "@/components/layout/ Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

const categories = [
  "All Works",
  "Weddings",
  "Beach",
  "Maternity",
  "Events",
];
const weddingWorks = Array.from({ length: 23 }, (_, index) => ({
  category: "Weddings",
  image: `/weddings-${index + 1}.WEBP`,
}));
const beachWorks = Array.from({ length: 15 }, (_, index) => ({
  category: "Beach",
  image: `/beach-${index + 1}.webp`,
}));
const maternityWorks = Array.from({ length: 6 }, (_, index) => ({
  category: "Maternity",
  image: `/maternity-${index + 1}.JPG`,
}));
const eventsWorks = Array.from({ length: 16 }, (_, index) => ({
  category: "Events",
  image: `/events-${index + 1}.JPG`,
}));
const works = [
  ...weddingWorks,
  ...beachWorks,
  ...maternityWorks,
  ...eventsWorks,
  {
    category: "Boat Trips",
    image:
      "/portrait.jpeg",
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All Works");
  const filteredWorks =
  activeCategory === "All Works"
    ? works
    : works.filter(
        (work) => work.category === activeCategory
      );
  return (
    <div className="bg-background-light min-h-screen">
      <Header/>
      <main className="grow w-full max-w-350 mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <h2 className="mb-6 font-serif text-4xl font-medium leading-tight text-slate-900 sm:text-5xl">
            Portfolio
          </h2>
          <p className="text-secondary-text max-w-2xl text-lg font-light">
            Capturing the fleeting, beautiful moments across weddings,
            intimate events, and the untamed beauty of nature.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "bg-white border border-slate-200"
              }`}
            >
              {cat}
            </button> 
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredWorks.map((work, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg break-inside-avoid cursor-pointer">
              <Image src={work.image}
                alt={work.image}
                width={800}
                height={1000}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"/>

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1">
                  {work.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer/>
    </div>
  );
}