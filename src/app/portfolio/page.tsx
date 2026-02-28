import Header from "@/components/layout/ Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

const categories = [
  "All Works",
  "Weddings",
  "Beach",
  "Birthdays",
  "Events",
  "Boat Trips",
];

const works = [
  {
    category: "Weddings",
    title: "Eternal Vows",
    location: "Tuscany, Italy",
    image:
      "/beach.jpeg",
  },
  {
    category: "Boat Trips",
    title: "Sunset Voyage",
    location: "Amalfi Coast",
    image:
      "/portrait.jpeg",
  },
  {
    category: "Events",
    title: "Annual Gala",
    location: "New York City",
    image:
      "/events.jpeg",
  },
];

export default function PortfolioPage() {
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
          {categories.map((cat, index) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                index === 0
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary hover:text-primary"}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {works.map((work, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg break-inside-avoid cursor-pointer">
              <Image src={work.image}
                alt={work.title}
                width={800}
                height={1000}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"/>

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1">
                  {work.category}
                </span>
                <h3 className="text-white text-xl font-medium">
                  {work.title}
                </h3>
                <p className="text-white/80 text-sm mt-1">
                  {work.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button className="flex items-center gap-2 px-8 py-3 rounded-lg border border-slate-300 dark:border-slate-600 text-sm font-semibold tracking-wide hover:border-primary hover:text-primary transition">
            <span className="material-symbols-outlined text-[20px]">
              refresh
            </span>
            Load More Works
          </button>
        </div>
      </main>

      <Footer/>
    </div>
  );
}