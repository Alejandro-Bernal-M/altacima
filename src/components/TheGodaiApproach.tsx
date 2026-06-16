"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  TrendingUp,
  Mountain,
  Shield,
} from "lucide-react";

const pillars = [
  {
    title: "Assessment",
    icon: ClipboardCheck,
    description:
      "Every athlete starts from a different point. Before building a plan, we identify your goals, strengths, limitations and environment.",
  },
  {
    title: "Adaptation",
    icon: TrendingUp,
    description:
      "The body changes through progressive stress. Training should evolve as your capacity evolves.",
  },
  {
    title: "Specificity",
    icon: Mountain,
    description:
      "Climbers and rope access technicians face unique physical demands. Your training should reflect that reality.",
  },
  {
    title: "Longevity",
    icon: Shield,
    description:
      "Performance means little without durability. The goal is to stay capable, resilient and injury-resistant for years.",
  },
];

export default function TheGodaiApproach() {
  return (
    <section id="mission" className="bg-[#0A0F14] py-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">
          <p className="mb-4 uppercase tracking-[0.4em] text-lime-400">
            The Godai Approach
          </p>

          <h2 className="text-5xl font-black md:text-6xl">
            Built For The
            <br />
            Vertical World
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-zinc-400">
            Godai combines sports science, climbing experience
            and rope access demands into a practical training system.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8"
              >
                <Icon className="mb-6 h-10 w-10 text-lime-400" />

                <h3 className="mb-4 text-2xl font-bold">
                  {pillar.title}
                </h3>

                <p className="leading-relaxed text-zinc-400">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}