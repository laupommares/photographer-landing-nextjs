"use client";

import { useLanguage } from "@/context/LanguageContext";
import { processSteps } from "@/lib/data"
import { dictionary } from "@/lib/dictionary";

export default function ProcessSection() {
  const t = dictionary.es

  return (
    <section className="bg-background-light py-24" id="process">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl">
            {t.process.heading}
          </h2>
          <p className="mt-4 text-slate-500">
            {t.process.subtitle}
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                <span className="material-symbols-outlined text-3xl">
                  {step.icon}
                </span>
              </div>

              <h3 className="mb-3 text-xl font-bold">
                {index + 1}. {t.process.steps[index].title}
              </h3>

              <p className="text-slate-600">
                {t.process.steps[index].description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}