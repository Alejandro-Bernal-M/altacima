"use client";

import { motion } from "framer-motion";
import PhotoCarousel from "./PhotoCarousel";

const milestones = [
  "🏔 Born in Pereira, Colombia",
  "🎓 Sports & Recreation Sciences",
  "🧗 Rock Climber",
  "🪢 IRATA Level 1",
  "📚 Lifelong Student",
];

const philosophy = [
  {
    title: "BODY",
    values: ["Strength", "Resilience", "Movement"],
  },
  {
    title: "MIND",
    values: ["Focus", "Awareness", "Discipline"],
  },
  {
    title: "SPIRIT",
    values: ["Purpose", "Adventure", "Growth"],
  },
];

export default function MeetAlejandro() {
  return (
    <section
      id="about"
      className="bg-[#0A0F14] py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}

        <div className="mb-24 text-center">
          <p className="mb-4 uppercase tracking-[0.4em] text-lime-400">
            Meet Alejandro
          </p>

          <h2 className="text-5xl font-black md:text-6xl">
            The Story Behind
            <br />
            Godai Training
          </h2>

          <p className="mt-6 text-zinc-400">
            Sports & Recreation Professional • Climber • IRATA Technician • Coach
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
            <p className="leading-relaxed text-zinc-300">
              I was born in Pereira, Colombia, surrounded by mountains,
              rivers and nature. Growing up among the Andes developed
              a deep connection with adventure and the outdoors that still
              shapes my life today.
            </p>

            <p className="leading-relaxed text-zinc-300">
              Since childhood I have been fascinated by movement.
              I climbed trees, explored rivers, spent countless hours outdoors,
              and discovered parkour at ten years old. Later I trained in athletics,
              constantly searching for new ways to understand and challenge
              the human body.
            </p>

            <p className="leading-relaxed text-zinc-300">
              As I grew older, my curiosity expanded beyond physical performance.
              Buddhism inspired me to become a better person, and years later
              Stoicism gave me practical tools to face adversity with purpose.
              Together they shaped a belief that still guides my work today.
            </p>

            <blockquote className="border-l-4 border-lime-400 pl-6 text-xl italic text-white">
              True performance is built through the balance of body, mind and spirit.
            </blockquote>

            <p className="leading-relaxed text-zinc-300">
              That philosophy led me to pursue a degree in Sports and Recreation
              Sciences, where I began building a scientific understanding of human
              performance, training and long-term athletic development.
            </p>

            <p className="leading-relaxed text-zinc-300">
              During those years I discovered rope systems, rappelling and
              adventure sports. What started as curiosity gradually became
              a calling. Through technical training and field experience,
              I built the foundations that eventually led me into rope access
              and IRATA.
            </p>

            <p className="leading-relaxed text-zinc-300">
              Around the same time, a close friend introduced me to rock climbing.
              Since then, climbing has become one of the greatest teachers in my life.
              It continues to challenge me physically, mentally and emotionally,
              while constantly reminding me how much there is still to learn.
            </p>

            <p className="leading-relaxed text-zinc-300">
              Godai Training was born from that journey.
            </p>

            <p className="leading-relaxed text-zinc-300">
              Today my mission is to help climbers, rope access technicians
              and adventurers become stronger, move better, perform longer
              and develop the resilience required to thrive in the vertical world.
            </p>
          </motion.div>
        </div>

        {/* MILESTONES */}

        <div className="mt-24 grid gap-4 md:grid-cols-5">
          {milestones.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 text-center backdrop-blur-sm"
            >
              {item}
            </div>
          ))}
        </div>

        {/* PHILOSOPHY */}

        <div className="mt-32">

          <div className="mb-16 text-center">
            <p className="uppercase tracking-[0.4em] text-lime-400">
              Philosophy
            </p>

            <h3 className="mt-4 text-4xl font-black md:text-5xl">
              The Three Pillars
            </h3>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {philosophy.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 backdrop-blur-sm"
              >
                <h4 className="mb-6 text-2xl font-bold text-lime-400">
                  {pillar.title}
                </h4>

                <div className="space-y-3">
                  {pillar.values.map((value) => (
                    <div
                      key={value}
                      className="rounded-xl border border-zinc-800 px-4 py-3"
                    >
                      {value}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="mx-auto max-w-3xl text-xl text-zinc-300">
              True performance is built through the balance
              of body, mind and spirit.
            </p>
          </div>

        </div>

        {/* MANIFESTO */}

        <div className="mt-40 rounded-[40px] border border-zinc-800 bg-zinc-900/30 p-10 md:p-16">

          <p className="mb-4 uppercase tracking-[0.4em] text-lime-400">
            Godai Philosophy
          </p>

          <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-zinc-300">

            <p>
              I don't believe training is about chasing numbers.
            </p>

            <p>
              I believe it is about becoming capable.
            </p>

            <p>
              Capable of climbing higher.
            </p>

            <p>
              Capable of enduring longer.
            </p>

            <p>
              Capable of adapting when conditions change.
            </p>

            <p>
              Capable of facing uncertainty with confidence.
            </p>

            <p>
              Because strength alone is not enough.
            </p>

            <p>
              The vertical world demands resilience,
              movement, awareness and mastery.
            </p>

            <p className="font-semibold text-white">
              That is why Godai exists.
            </p>

          </div>

          <div className="mt-20 text-center">

            <h3 className="text-5xl font-black leading-tight md:text-7xl">
              THE PURSUIT
              <br />
              OF MASTERY
              <br />
              HAS NO
              <br />
              FINISH LINE.
            </h3>

            <p className="mt-8 text-xl text-lime-400">
              Only more path ahead.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}