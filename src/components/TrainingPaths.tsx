"use client";

import { motion } from "framer-motion";
import { Check, Mountain, Flame, Crown } from "lucide-react";

const plans = [
  {
    name: "FOUNDATION",
    element: "CHI • EARTH",
    price: "$50",
    period: "/ month",
    icon: Mountain,
    tagline: "Build the base that supports everything else.",
    description:
      "The ideal starting point for athletes who want to stop improvising and start progressing with purpose.",
    features: [
      "3 training sessions per week",
      "Personalized programming",
      "Equipment adaptation",
      "Goal-oriented progression",
      "Email support",
    ],
    cta: "Build Your Foundation",
    highlighted: false,
  },
  {
    name: "PERFORMANCE",
    element: "EARTH • WATER • FIRE",
    price: "$80",
    period: "/ month",
    icon: Flame,
    tagline: "Strength, mobility and durability for life at height.",
    description:
      "The perfect balance between strength, mobility and resilience for climbers and rope access technicians.",
    features: [
      "3-4 strength sessions",
      "2 mobility & prehab sessions",
      "Joint health protocols",
      "Recovery strategies",
      "Performance progression",
      "Priority support",
    ],
    cta: "Reach Peak Performance",
    highlighted: true,
    badge: "MOST POPULAR",
  },
  {
    name: "MASTERY",
    element: "ALL FIVE ELEMENTS",
    price: "$100",
    period: "/ month",
    icon: Crown,
    tagline: "Personal coaching for serious athletes.",
    description:
      "The highest level of personalization with direct feedback, technique analysis and ongoing coaching.",
    features: [
      "Everything in Performance",
      "Video analysis",
      "Technique correction",
      "1-on-1 consultations",
      "WhatsApp support",
      "Direct coaching",
    ],
    cta: "Pursue Mastery",
    highlighted: false,
  },
];

export default function TrainingPaths() {
  return (
    <section
      id="paths"
      className="bg-[#0A0F14] py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mb-24 text-center">
          <p className="mb-4 uppercase tracking-[0.4em] text-lime-400">
            Choose Your Path
          </p>

          <h2 className="text-5xl font-black md:text-6xl">
            Every Journey
            <br />
            Begins Somewhere
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-zinc-400">
            Whether you're building your foundation,
            pursuing performance or striving for mastery,
            there is a path designed for your stage of development.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-3">

          {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative rounded-[32px] border p-8 backdrop-blur-sm ${
                  plan.highlighted
                    ? "border-lime-400 bg-lime-500/5 scale-105"
                    : "border-zinc-800 bg-zinc-900/40"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-lime-400 px-4 py-2 text-xs font-bold text-black">
                    {plan.badge}
                  </div>
                )}

                <div className="mb-6 flex items-center gap-4">
                  <Icon className="h-10 w-10 text-lime-400" />

                  <div>
                    <p className="text-xs tracking-[0.3em] text-lime-400">
                      {plan.element}
                    </p>

                    <h3 className="text-3xl font-black">
                      {plan.name}
                    </h3>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="text-5xl font-black">
                    {plan.price}
                  </span>

                  <span className="text-zinc-400">
                    {plan.period}
                  </span>
                </div>

                <p className="mb-4 text-xl font-semibold">
                  {plan.tagline}
                </p>

                <p className="mb-8 text-zinc-400">
                  {plan.description}
                </p>

                <div className="mb-10 space-y-4">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >
                      <Check className="h-5 w-5 text-lime-400" />

                      <span className="text-zinc-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full rounded-full py-4 font-semibold transition ${
                    plan.highlighted
                      ? "bg-lime-400 text-black hover:bg-lime-300"
                      : "border border-zinc-700 hover:border-lime-400"
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}