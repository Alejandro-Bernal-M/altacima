import { ArrowRight, MessageCircle } from "lucide-react";

export default function FreeAssessment() {
  const phone = "573146594963"; 

  const message = encodeURIComponent(`
Hi Alejandro,

I'm interested in Godai Training.

Sport:
Goal:
Current Challenge:

I'd like to book a free assessment.
  `);

  return (
    <section className="bg-[#0A0F14] py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-[40px] border border-lime-400/30 bg-gradient-to-br from-lime-500/10 to-transparent p-10 md:p-16">

          <p className="mb-4 uppercase tracking-[0.4em] text-lime-400">
            Free Assessment
          </p>

          <h2 className="text-5xl font-black md:text-6xl">
            Not Sure
            <br />
            Where To Start?
          </h2>

          <p className="mt-8 max-w-2xl text-lg text-zinc-300">
            Let's talk about your goals, your current situation
            and the path that makes the most sense for you.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2">

            <div className="rounded-xl border border-zinc-800 p-4">
              ✓ Goal Analysis
            </div>

            <div className="rounded-xl border border-zinc-800 p-4">
              ✓ Training Recommendations
            </div>

            <div className="rounded-xl border border-zinc-800 p-4">
              ✓ Equipment Review
            </div>

            <div className="rounded-xl border border-zinc-800 p-4">
              ✓ Path Recommendation
            </div>

          </div>

          <div className="mt-12 flex flex-wrap gap-4">

            <a
              href={`https://wa.me/${phone}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-lime-400 px-8 py-4 font-bold text-black transition hover:bg-lime-300"
            >
              <MessageCircle size={20} />
              Book Free Assessment
              <ArrowRight size={20} />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}