"use client";

const steps = [
  {
    title: "Assessment",
    description:
      "We identify your goals, current level and physical limitations.",
  },
  {
    title: "Planning",
    description:
      "A personalized roadmap is built around your objectives.",
  },
  {
    title: "Training",
    description:
      "You follow a structured plan designed for progress.",
  },
  {
    title: "Adaptation",
    description:
      "The program evolves as your capacity improves.",
  },
  {
    title: "Mastery",
    description:
      "You become stronger, more resilient and capable in the vertical world.",
  },
];

export default function JourneyTimeline() {
  return (
    <section className="bg-[#0D131A] py-32">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-20 text-center">
          <p className="mb-4 uppercase tracking-[0.4em] text-lime-400">
            The Journey
          </p>

          <h2 className="text-5xl font-black md:text-6xl">
            What Happens Next?
          </h2>
        </div>

        <div className="relative">

          <div className="absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 bg-zinc-800 lg:block" />

          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`relative mb-16 flex ${
                index % 2 === 0
                  ? "justify-start"
                  : "justify-end"
              }`}
            >
              <div className="absolute left-1/2 top-8 hidden h-5 w-5 -translate-x-1/2 rounded-full bg-lime-400 lg:block" />

              <div className="w-full lg:w-[45%] rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">
                <h3 className="mb-3 text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="text-zinc-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}