"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const cardKeys = ["c1", "c2", "c3"];

export default function WhyTrainDifferently() {
  const t = useTranslations("WhyTrainDifferently");

  return (
    <section className="py-32 bg-[#0D131A]">
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.4em] text-lime-400 mb-4">
            {t("subtitle")}
          </p>

          <h2 className="text-5xl md:text-6xl font-black">
            {t("title_line1")}
            <br />
            {t("title_line2")}
          </h2>
        </div>

        {/* CARDS GRID */}
        <div className="grid gap-8 md:grid-cols-3">
          {cardKeys.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8"
            >
              <h3 className="mb-6 text-2xl font-bold">
                {t(`cards.${key}.title`)}
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                {t(`cards.${key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* TEXT CONTENT */}
        <div className="mt-24 max-w-4xl mx-auto text-center">
          <p className="text-xl leading-relaxed text-zinc-300">
            {t("content.p1")}
          </p>

          <p className="mt-8 text-3xl font-bold">
            {t("content.bold_statement")}
          </p>

          <p className="mt-8 text-zinc-300 text-lg leading-relaxed">
            {t("content.p2")}
          </p>

          <p className="mt-8 text-zinc-300 text-lg leading-relaxed">
            {t("content.p3")}
          </p>
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-24 text-center">
          <h3 className="text-4xl md:text-5xl font-black">
            {t("cta.headline_line1")}
            <br />
            {t("cta.headline_line2")}
          </h3>

          <button className="mt-10 rounded-full bg-lime-500 px-8 py-4 font-semibold text-black transition hover:bg-lime-400">
            {t("cta.button")}
          </button>
        </div>

      </div>
    </section>
  );
}