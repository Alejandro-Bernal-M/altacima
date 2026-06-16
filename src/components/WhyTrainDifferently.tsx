"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Most people train for aesthetics",
    description:
      "They focus on appearance while ignoring the physical demands of their environment.",
  },
  {
    title: "Athletes train for performance",
    description:
      "They develop specific qualities to perform better in their sport.",
  },
  {
    title: "Vertical athletes need both",
    description:
      "Strength, endurance, mobility and resilience must work together when the consequences are real.",
  },
];

export default function WhyTrainDifferently() {
  return (
    <section className="py-32 bg-[#0D131A]">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.4em] text-lime-400 mb-4">
            Why Train Differently?
          </p>

          <h2 className="text-5xl md:text-6xl font-black">
            The Vertical Athlete
            <br />
            Requires More
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8"
            >
              <h3 className="mb-6 text-2xl font-bold">
                {card.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 max-w-4xl mx-auto text-center">

          <p className="text-xl leading-relaxed text-zinc-300">
            Climbing, rope access and mountain environments place
            unique demands on the body.
          </p>

          <p className="mt-8 text-3xl font-bold">
            Strength alone is not enough.
          </p>

          <p className="mt-8 text-zinc-300 text-lg leading-relaxed">
            You need movement efficiency, work capacity,
            mobility, resilience and the ability to perform
            under fatigue.
          </p>

          <p className="mt-8 text-zinc-300 text-lg leading-relaxed">
            Godai Training combines sports science,
            climbing experience and rope access knowledge
            to prepare you for the realities of the vertical world.
          </p>
        </div>

        <div className="mt-24 text-center">

          <h3 className="text-4xl md:text-5xl font-black">
            READY TO BUILD
            <br />
            YOUR FOUNDATION?
          </h3>

          <button className="mt-10 rounded-full bg-lime-500 px-8 py-4 font-semibold text-black transition hover:bg-lime-400">
            Explore The Paths
          </button>

        </div>

      </div>
    </section>
  );
}