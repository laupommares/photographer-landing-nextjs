import { processSteps } from "@/lib/data"

export default function ProcessSection() {
  return (
    <section className="bg-sand/30 py-24" id="process">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl">
            The Experience
          </h2>
          <p className="mt-4 text-slate-500">
            A seamless journey from our first hello to your final gallery.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {processSteps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                <span className="material-symbols-outlined text-3xl">
                  {step.icon}
                </span>
              </div>

              <h3 className="mb-3 text-xl font-bold">
                {step.id}. {step.title}
              </h3>

              <p className="text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}