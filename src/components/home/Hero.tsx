import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Fine art portrait during golden hour"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />

      <div className="relative flex h-full flex-col items-center justify-center text-center text-white px-6">
        <span className="mb-4 rounded-full bg-white/20 px-4 py-1.5 text-xs uppercase tracking-widest backdrop-blur-sm">
          Fine Art Photography
        </span>

        <h1 className="font-serif text-5xl md:text-7xl leading-tight">
          Capturing Life's <br />
          <span className="italic">Quiet Moments</span>
        </h1>

        <p className="mt-6 max-w-lg text-lg text-white/90">
          Creating timeless, emotive imagery that tells your unique story with warmth and authenticity.
        </p>
      </div>
    </section>
  )
}