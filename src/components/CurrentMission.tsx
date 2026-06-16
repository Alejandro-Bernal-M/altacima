export default function CurrentMission() {
  return (
    <section className="bg-[#0D131A] py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <p className="mb-4 uppercase tracking-[0.4em] text-lime-400">
          Current Mission
        </p>

        <h2 className="text-5xl font-black md:text-6xl">
          I Don't Teach
          <br />
          From The Finish Line
        </h2>

        <p className="mt-8 text-2xl text-zinc-300">
          I Teach From The Path.
        </p>

        <p className="mx-auto mt-10 max-w-3xl text-lg leading-relaxed text-zinc-400">
          I am still climbing, still learning,
          still training and still improving.
          The same process I use for myself
          is the process I use to help others.
        </p>

        <div className="mt-20 grid gap-6 text-left md:grid-cols-2">

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h3 className="mb-6 text-xl font-bold text-lime-400">
              Current Objectives
            </h3>

            <ul className="space-y-4 text-zinc-300">
              <li>✓ Improve climbing performance</li>
              <li>✓ Progress toward IRATA Level 2</li>
              <li>✓ Explore bigger mountain objectives</li>
              <li>✓ Continue studying human performance</li>
              <li>✓ Develop stronger vertical athletes</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h3 className="mb-6 text-xl font-bold text-lime-400">
              Core Beliefs
            </h3>

            <ul className="space-y-4 text-zinc-300">
              <li>✓ Movement is medicine</li>
              <li>✓ Strength is freedom</li>
              <li>✓ Adventure develops character</li>
              <li>✓ Nature is the best teacher</li>
              <li>✓ Mastery has no finish line</li>
            </ul>
          </div>

        </div>

        <blockquote className="mt-16 border-l-4 border-lime-400 pl-6 text-left text-2xl font-semibold text-white">
          The pursuit of mastery has no finish line.
          <br />
          Only more path ahead.
        </blockquote>

      </div>
    </section>
  );
}