"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const profiles = [
  {
    title: "Climbers",
    emoji: "🧗",
    image: "/images/who-i-help/climber.jpg",
    description:
      "Develop strength, mobility and endurance for better performance on rock, plastic and alpine environments.",
  },
  {
    title: "Rope Access Technicians",
    emoji: "🪢",
    image: "/images/who-i-help/rope-access.jpg",
    description:
      "Build the physical capacity required for long days on rope while reducing fatigue and injury risk.",
  },
  {
    title: "Mountain Athletes",
    emoji: "🏔",
    image: "/images/who-i-help/mountain.jpg",
    description:
      "Prepare your body for altitude, technical terrain and demanding outdoor objectives.",
  },
  {
    title: "Adventurers",
    emoji: "🌲",
    image: "/images/who-i-help/adventure.jpg",
    description:
      "Become stronger, more resilient and capable for every challenge beyond the trail.",
  },
];

export default function WhoIHelp() {
  return (
    <section className="py-32 bg-[#0A0F14]">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.4em] text-lime-400 mb-4">
            Who I Help
          </p>

          <h2 className="text-5xl md:text-6xl font-black">
            Built For The
            <br />
            Vertical World
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-zinc-400 text-lg">
            Godai Training is designed for people who challenge
            themselves in environments where strength,
            resilience and adaptability truly matter.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {profiles.map((profile, index) => (
            <motion.div
              key={profile.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40"
            >
              <div className="relative h-[320px] overflow-hidden">
                <Image
                  src={profile.image}
                  alt={profile.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-8 left-8">
                  <h3 className="text-3xl font-bold">
                    {profile.emoji} {profile.title}
                  </h3>
                </div>
              </div>

              <div className="p-8">
                <p className="text-zinc-300 leading-relaxed">
                  {profile.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h3 className="text-4xl md:text-5xl font-black">
            YOU DON'T NEED TO BE
            <br />
            AN ELITE ATHLETE.
          </h3>

          <p className="mt-6 text-xl text-lime-400">
            You only need the willingness to improve.
          </p>
        </div>
      </div>
    </section>
  );
}