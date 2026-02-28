import Header from "@/components/layout/ Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";

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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDaSWQXFlDpr3nBP6Sq2-9ok4WKwh4SRhFOpW3vu0fjmdGJd0IzRWnNNhAPgSdSCgCFObhxwYSmjlYJ2dQl9J2deTQT5XetkzPN5i9RJOG6aQqLoEBci_qZKAoTTpgKuQJ7ekbWvFj9vvAKENw-ZiAYDxOD23hl9391YZ55k2uACER-6K6PAkw-ih-QPVHC2sufHKsjL6AykY5wKrP8Y-tCBMBKDFwojoQHyvG871UCpDxueJyPerchoqrq3nQvdSKMEi0WBo1YLA",
  },
  {
    category: "Boat Trips",
    title: "Sunset Voyage",
    location: "Amalfi Coast",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDVZd9gxzMQpSm-fJn7-KB7K2HfGtSVjjWfrjX-w0Z55hvpppy2ZmSk_WAAkBr6Ulv0BJ0XWSF6X_JPN03eeAt0wS5qbsjlyWnb1Q_Ll5c7aWr2KMtjDSFWSyN_1AI0ygLzCXJkk3jtSxT5kjp5Xyu7vGvyw1SGuqZGa7YctQkkn25kt_0Xg62mJjlY3p73YmaT5xk6YsdUAQBEfUEvICl-kyTzPdgEnmy3ZnIQgH0qNwCo3PYKIafTwewiKe3_Cbpqvim-tQw9pQ",
  },
  {
    category: "Events",
    title: "Annual Gala",
    location: "New York City",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDTDWVXd_5kK149KYT9NS9iEu394FIxRKH7W1-Mwi-xAuLsLnj3NsW0UoZQKW-h28fHANlVbX3hpOH_bPYGM7bdC97f8b4QgPTJI6cGfgh0iptk1BaQnf8pD9O9BBNz2YFWlwmBHnIUZof9yAtLws5fm7kymIEIWwQ1VQUlFbZap9vdnFhF8Hw8soaikmwyegTIxszpfQPgFXmWPxxZ93XvgQGT5bBSJXJbwUtAJEIN2tMRD0zzeYQi3PXcJcLEdtKfMRpNK3H_eg",
  },
];

export default function PortfolioPage() {
  return (
    <div className="bg-background-light min-h-screen">

      {/* Header */}
      <Header/>

      <main className="flex-grow w-full max-w-[1400px] mx-auto px-6 md:px-12 py-16">

        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <h2 className="mb-6 font-serif text-4xl font-medium leading-tight text-slate-900 sm:text-5xl">
            Portfolio
          </h2>
          <p className="text-secondary-text max-w-2xl text-lg font-light">
            Capturing the fleeting, beautiful moments across weddings,
            intimate events, and the untamed beauty of nature.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat, index) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                index === 0
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {works.map((work, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg break-inside-avoid cursor-pointer"
            >
              <Image
                src={work.image}
                alt={work.title}
                width={800}
                height={1000}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
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

        {/* Load More */}
        <div className="mt-20 flex justify-center">
          <button className="flex items-center gap-2 px-8 py-3 rounded-lg border border-slate-300 dark:border-slate-600 text-sm font-semibold tracking-wide hover:border-primary hover:text-primary transition">
            <span className="material-symbols-outlined text-[20px]">
              refresh
            </span>
            Load More Works
          </button>
        </div>

      </main>

      {/* Footer */}
          <Footer/>
    </div>
  );
}