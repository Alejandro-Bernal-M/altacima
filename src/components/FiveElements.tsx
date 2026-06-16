"use client";

import { Mountain, Waves, Flame, Wind, CircleDot } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const elements = [
  {
    name: "CHI",
    icon: Mountain,
    translationKey: "elements.chi",
    bullets: ["b1", "b2", "b3", "b4"],
  },
  {
    name: "SUI",
    icon: Waves,
    translationKey: "elements.sui",
    bullets: ["b1", "b2", "b3", "b4"],
  },
  {
    name: "KA",
    icon: Flame,
    translationKey: "elements.ka",
    bullets: ["b1", "b2", "b3", "b4"],
  },
  {
    name: "FU",
    icon: Wind,
    translationKey: "elements.fu",
    bullets: ["b1", "b2", "b3", "b4"],
  },
  {
    name: "KU",
    icon: CircleDot,
    translationKey: "elements.ku",
    bullets: ["b1", "b2", "b3", "b4"],
  },
];

export default function FiveElements() {
  const t = useTranslations("FiveElements");

  return (
    <section id="elements" className="bg-[#0A0F14] py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-24 text-center">
          <p className="mb-4 uppercase tracking-[0.4em] text-lime-400">
            {t("section_title")}
          </p>

          <h2 className="text-5xl font-black md:text-6xl">
            {t("main_title_line1")}
            <br />
            {t("main_title_line2")}
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-zinc-400">
            {t("section_description")}
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 bg-zinc-800 lg:block" />

          {elements.map((element, index) => {
            const Icon = element.icon;
            const left = index % 2 === 0;
            const key = element.translationKey;

            return (
              <motion.div
                key={element.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative mb-24 flex ${
                  left ? "lg:justify-start" : "lg:justify-end"
                }`}
              >
                <div className="absolute left-1/2 top-12 hidden h-6 w-6 -translate-x-1/2 rounded-full border-4 border-lime-400 bg-[#0A0F14] lg:block" />

                <div className="w-full lg:w-[45%]">
                  <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 backdrop-blur-sm">
                    <div className="mb-6 flex items-center gap-4">
                      <Icon className="h-10 w-10 text-lime-400" />

                      <div>
                        <p className="text-sm tracking-[0.3em] text-lime-400">
                          {element.name}
                        </p>

                        <h3 className="text-3xl font-bold">
                          {t(`${key}.title`)}
                        </h3>

                        <p className="text-zinc-400">
                          {t(`${key}.subtitle`)}
                        </p>
                      </div>
                    </div>

                    <p className="mb-6 leading-relaxed text-zinc-300">
                      {t(`${key}.description`)}
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                      {element.bullets.map((bulletKey) => (
                        <div
                          key={bulletKey}
                          className="rounded-xl border border-zinc-800 px-4 py-3 text-sm text-zinc-300"
                        >
                          {t(`${key}.${bulletKey}`)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-24 text-center">
          <p className="mx-auto max-w-3xl text-xl text-zinc-300">
            {t.rich("footer_text", {
              resilience: (chunks) => <span className="text-lime-400">{t("footer_resilience")}</span>,
              height: (chunks) => <span className="text-lime-400">{t("footer_height")}</span>
            })}
          </p>
        </div>
      </div>
    </section>
  );
}