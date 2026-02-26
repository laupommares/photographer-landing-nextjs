import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="bg-[#F9F7F2] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-200 shadow-xl">
              <Image
                src=""
                alt="Professional female photographer smiling gently holding a vintage camera"
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Decorative Blurs */}
            <div className="absolute -bottom-8 -right-8 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -top-8 -left-8 -z-10 h-64 w-64 rounded-full bg-warm-grey/10 blur-3xl" />
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-6 flex items-center gap-2 text-primary">
              <span className="h-px w-8 bg-primary" />
              <span className="text-sm font-bold uppercase tracking-widest">
                About Sofía
              </span>
            </div>

            <h2 className="mb-6 font-serif text-4xl font-medium leading-tight text-slate-900 sm:text-5xl">
              The Artist Behind <br className="hidden lg:block" />
              the Lens
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                Specializing in natural light and candid emotion, I strive to
                capture the fleeting moments that make life beautiful. My
                approach is unobtrusive and warm, creating a relaxed atmosphere
                where you can be your true self.
              </p>

              <p>
                Whether it's the quiet anticipation before a wedding ceremony or
                the chaotic joy of a family gathering, my goal is to deliver
                images that feel as genuine as the memories they preserve.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-8">
              <div className="flex flex-col gap-1">
                <span className="font-serif text-3xl font-medium text-primary">
                  500+
                </span>
                <span className="text-sm uppercase tracking-wider text-slate-500">
                  Stories Told
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-serif text-3xl font-medium text-primary">
                  8+
                </span>
                <span className="text-sm uppercase tracking-wider text-slate-500">
                  Years Experience
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-serif text-3xl font-medium text-primary">
                  12
                </span>
                <span className="text-sm uppercase tracking-wider text-slate-500">
                  Destinations
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href="#"
                className="group inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-primary/80"
              >
                Read Full Bio
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