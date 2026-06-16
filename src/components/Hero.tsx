import Image from "next/image";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
    >
      <Navbar />

      {/* Background Image */}

      <Image
        src="/images/hero.jpg"
        alt="Alejandro climbing in Huaraz"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="max-w-4xl pt-32 md:pt-40">

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.4em] text-lime-400">
              Godai Training
            </p>

            <h1 className="text-5xl font-black leading-[0.9] md:text-7xl xl:text-8xl">
              TRAIN FOR
              <br />
              THE VERTICAL
              <br />
              WORLD
            </h1>

            <p className="mt-10 max-w-2xl text-lg text-zinc-300 md:text-xl">
              Helping climbers and rope access technicians
              build strength, resilience and longevity
              for the demands of the vertical world.
            </p>

            <p className="mt-5 max-w-xl text-zinc-400">
              Sports science meets climbing, rope access
              and the pursuit of mastery.
            </p>

            {/* Credentials */}

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.2em] text-zinc-400">
              <span>Sports Science Professional</span>

              <span className="hidden md:block text-lime-400">
                •
              </span>

              <span>Climber</span>

              <span className="hidden md:block text-lime-400">
                •
              </span>

              <span>IRATA Rope Access</span>
            </div>

            {/* CTA */}

            <div className="mt-12 flex flex-wrap gap-4 mb-40">
              <a
                href="#contact"
                className="rounded-full bg-lime-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:bg-lime-400 hover:scale-105"
              >
                Start Training
              </a>

              <a
                href="#about"
                className="rounded-full border border-zinc-600 px-8 py-4 text-white transition-all duration-300 hover:border-lime-500 hover:bg-white/5"
              >
                Learn More
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
        <div className="flex flex-col items-center text-zinc-500">
          <span className="mb-2 text-xs uppercase tracking-[0.3em]">
            Scroll
          </span>

          <span className="animate-bounce text-3xl">
            ↓
          </span>
        </div>
      </div>
    </section>
  );
}