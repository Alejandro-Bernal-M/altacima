"use client";

import { useTranslations } from "next-intl";

const stepKeys = ["step1", "step2", "step3", "step4", "step5"];

export default function JourneyTimeline() {
  const t = useTranslations("JourneyTimeline");

  return (
    <section className="bg-[#0D131A] py-32">
      <div className="mx-auto max-w-6xl px-6">

        {/* HEADER */}
        <div className="mb-20 text-center">
          <p className="mb-4 uppercase tracking-[0.4em] text-lime-400">
            {t("subtitle")}
          </p>

          <h2 className="text-5xl font-black md:text-6xl text-white">
            {t("title")}
          </h2>
        </div>

        {/* TIMELINE CONNECTOR */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 bg-zinc-800 lg:block" />

          {/* TIMELINE STEPS */}
          {stepKeys.map((key, index) => (
            <div
              key={key}
              className={`relative mb-16 flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Central Indicator Dot */}
              <div className="absolute left-1/2 top-8 hidden h-5 w-5 -translate-x-1/2 rounded-full bg-lime-400 lg:block" />

              {/* Step Card */}
              <div className="w-full lg:w-[45%] rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">
                <h3 className="mb-3 text-2xl font-bold text-white">
                  {t(`steps.${key}.title`)}
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  {t(`steps.${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}