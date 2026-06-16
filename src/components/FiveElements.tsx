"use client";

import { Mountain, Waves, Flame, Wind, CircleDot } from "lucide-react";
import { motion } from "framer-motion";

const elements = [
  {
    name: "CHI",
    title: "EARTH",
    subtitle: "Foundation",
    icon: Mountain,
    description:
      "Without a solid foundation, nothing else can be built. Earth represents the strength, resilience and structural integrity required to support every movement at height.",
    bullets: [
      "Strength",
      "Joint Integrity",
      "Structural Resilience",
      "Foundational Capacity",
    ],
  },
  {
    name: "SUI",
    title: "WATER",
    subtitle: "Adaptability",
    icon: Waves,
    description:
      "The vertical world is unpredictable. Water represents mobility, coordination and the ability to adapt efficiently to changing environments.",
    bullets: [
      "Mobility",
      "Coordination",
      "Adaptability",
      "Movement Control",
    ],
  },
  {
    name: "KA",
    title: "FIRE",
    subtitle: "Capacity",
    icon: Flame,
    description:
      "Fire is the engine. It represents the endurance, energy and work capacity required for long days on rope and demanding adventures.",
    bullets: [
      "Work Capacity",
      "Endurance",
      "Energy Systems",
      "Resilience",
    ],
  },
  {
    name: "FU",
    title: "WIND",
    subtitle: "Movement",
    icon: Wind,
    description:
      "The best climbers and technicians do not waste energy. Wind represents efficiency, balance and fluid movement.",
    bullets: [
      "Technique",
      "Balance",
      "Efficiency",
      "Economy of Movement",
    ],
  },
  {
    name: "KU",
    title: "VOID",
    subtitle: "Mastery",
    icon: CircleDot,
    description:
      "Mastery is not strength. It is awareness, focus and the ability to make sound decisions under pressure.",
    bullets: [
      "Focus",
      "Risk Management",
      "Self-Awareness",
      "Decision Making",
    ],
  },
];

export default function FiveElements() {
  return (
    <section id="elements" className="bg-[#0A0F14] py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-24 text-center">
          <p className="mb-4 uppercase tracking-[0.4em] text-lime-400">
            The Godai Method
          </p>

          <h2 className="text-5xl font-black md:text-6xl">
            The Five Elements of
            <br />
            the Vertical Athlete
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-zinc-400">
            Godai Training is built around five essential qualities
            that every climber, rope access technician and adventurer
            must develop to perform at their highest level.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 bg-zinc-800 lg:block" />

          {elements.map((element, index) => {
            const Icon = element.icon;
            const left = index % 2 === 0;

            return (
              <motion.div
                key={element.title}
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
                          {element.title}
                        </h3>

                        <p className="text-zinc-400">
                          {element.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="mb-6 leading-relaxed text-zinc-300">
                      {element.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                      {element.bullets.map((bullet) => (
                        <div
                          key={bullet}
                          className="rounded-xl border border-zinc-800 px-4 py-3 text-sm text-zinc-300"
                        >
                          {bullet}
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
            Train the body.
            <span className="text-lime-400"> Develop resilience.</span>
            Master movement.
            <span className="text-lime-400"> Perform at height.</span>
          </p>
        </div>
      </div>
    </section>
  );
}