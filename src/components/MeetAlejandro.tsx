"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import PhotoCarousel from "./PhotoCarousel";

const milestoneKeys = ["m1", "m2", "m3", "m4", "m5"];

const philosophyPillars = [
  {
    titleKey: "body.title",
    values: ["body.v1", "body.v2", "body.v3"],
  },
  {
    titleKey: "mind.title",
    values: ["mind.v1", "mind.v2", "mind.v3"],
  },
  {
    titleKey: "spirit.title",
    values: ["spirit.v1", "spirit.v2", "spirit.v3"],
  },
];

export default function MeetAlejandro() {
  const t = useTranslations("MeetAlejandro");

  return (
    <section id="about" className="bg-[#0A0F14] py-32">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* HEADER */}
        <div className="mb-24 text-center">
          <p className="mb-4 uppercase tracking-[0.4em] text-lime-400">
            {t("subtitle")}
          </p>

          <h2 className="text-5xl font-black md:text-6xl">
            {t("title_line1")}
            <br />
            {t("title_line2")}
          </h2>

          <p className="mt-6 text-zinc-400">
            {t("meta_description")}
          </p>
        </div>

        {/* STORY */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <PhotoCarousel />
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="leading-relaxed text-zinc-300">{t("story.p1")}</p>
            <p className="leading-relaxed text-zinc-300">{t("story.p2")}</p>
            <p className="leading-relaxed text-zinc-300">{t("story.p3")}</p>

            <blockquote className="border-l-4 border-lime-400 pl-6 text-xl italic text-white">
              {t("story.quote")}
            </blockquote>

            <p className="leading-relaxed text-zinc-300">{t("story.p4")}</p>
            <p className="leading-relaxed text-zinc-300">{t("story.p5")}</p>
            <p className="leading-relaxed text-zinc-300">{t("story.p6")}</p>
            <p className="leading-relaxed text-zinc-300">{t("story.p7")}</p>
            <p className="leading-relaxed text-zinc-300">{t("story.p8")}</p>
          </motion.div>
        </div>

        {/* MILESTONES */}
        <div className="mt-24 grid gap-4 md:grid-cols-5">
          {milestoneKeys.map((key) => (
            <div
              key={key}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 text-center backdrop-blur-sm text-zinc-300"
            >
              {t(`milestones.${key}`)}
            </div>
          ))}
        </div>

        {/* PHILOSOPHY */}
        <div className="mt-32">
          <div className="mb-16 text-center">
            <p className="uppercase tracking-[0.4em] text-lime-400">
              {t("philosophy.subtitle")}
            </p>

            <h3 className="mt-4 text-4xl font-black md:text-5xl">
              {t("philosophy.title")}
            </h3>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {philosophyPillars.map((pillar) => (
              <div
                key={pillar.titleKey}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 backdrop-blur-sm"
              >
                <h4 className="mb-6 text-2xl font-bold text-lime-400">
                  {t(`philosophy.${pillar.titleKey}`)}
                </h4>

                <div className="space-y-3">
                  {pillar.values.map((valKey) => (
                    <div
                      key={valKey}
                      className="rounded-xl border border-zinc-800 px-4 py-3 text-zinc-300"
                    >
                      {t(`philosophy.${valKey}`)}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="mx-auto max-w-3xl text-xl text-zinc-300">
              {t("philosophy.footer_quote")}
            </p>
          </div>
        </div>

        {/* MANIFESTO */}
        <div className="mt-40 rounded-[40px] border border-zinc-800 bg-zinc-900/30 p-10 md:p-16">
          <p className="mb-4 uppercase tracking-[0.4em] text-lime-400">
            {t("manifesto.subtitle")}
          </p>

          <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-zinc-300">
            <p>{t("manifesto.p1")}</p>
            <p>{t("manifesto.p2")}</p>
            <p>{t("manifesto.p3")}</p>
            <p>{t("manifesto.p4")}</p>
            <p>{t("manifesto.p5")}</p>
            <p>{t("manifesto.p6")}</p>
            <p>{t("manifesto.p7")}</p>
            <p>{t("manifesto.p8")}</p>
            <p className="font-semibold text-white">{t("manifesto.footer_bold")}</p>
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-5xl font-black leading-tight md:text-7xl">
              {t("manifesto.headline_1")}
              <br />
              {t("manifesto.headline_2")}
              <br />
              {t("manifesto.headline_3")}
              <br />
              {t("manifesto.headline_4")}
            </h3>

            <p className="mt-8 text-xl text-lime-400">
              {t("manifesto.path_ahead")}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}