"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  ClipboardCheck,
  TrendingUp,
  Mountain,
  Shield,
} from "lucide-react";

const staticPillars = [
  {
    key: "p1",
    icon: ClipboardCheck,
  },
  {
    key: "p2",
    icon: TrendingUp,
  },
  {
    key: "p3",
    icon: Mountain,
  },
  {
    key: "p4",
    icon: Shield,
  },
];

export default function TheGodaiApproach() {
  const t = useTranslations("TheGodaiApproach");

  return (
    <section id="mission" className="bg-[#0A0F14] py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="mb-20 text-center">
          <p className="mb-4 uppercase tracking-[0.4em] text-lime-400">
            {t("subtitle")}
          </p>

          <h2 className="text-5xl font-black md:text-6xl text-white">
            {t("title_line1")}
            <br />
            {t("title_line2")}
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-zinc-400">
            {t("description")}
          </p>
        </div>

        {/* PILLARS GRID */}
        <div className="grid gap-8 md:grid-cols-2">
          {staticPillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8"
              >
                <Icon className="mb-6 h-10 w-10 text-lime-400 flex-shrink-0" />

                <h3 className="mb-4 text-2xl font-bold text-white">
                  {t(`pillars.${pillar.key}.title`)}
                </h3>

                <p className="leading-relaxed text-zinc-400">
                  {t(`pillars.${pillar.key}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}