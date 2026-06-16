import { getTranslations } from "next-intl/server";

const objectiveKeys = ["obj1", "obj2", "obj3", "obj4", "obj5"] as const;
const beliefKeys = ["b1", "b2", "b3", "b4", "b5"] as const;

export default async function CurrentMission() {
  const t = await getTranslations("CurrentMission");

  return (
    <section className="bg-[#0D131A] py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">

        {/* SUBTITLE */}
        <p className="mb-4 uppercase tracking-[0.4em] text-lime-400">
          {t("subtitle")}
        </p>

        {/* TITLE */}
        <h2 className="text-5xl font-black md:text-6xl text-white">
          {t("title_line1")}
          <br />
          {t("title_line2")}
        </h2>

        {/* TAGLINE */}
        <p className="mt-8 text-2xl text-zinc-300">
          {t("tagline")}
        </p>

        {/* DESCRIPTION */}
        <p className="mx-auto mt-10 max-w-3xl text-lg leading-relaxed text-zinc-400">
          {t("description")}
        </p>

        {/* COLUMNS GRID */}
        <div className="mt-20 grid gap-6 text-left md:grid-cols-2">

          {/* OBJECTIVES */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h3 className="mb-6 text-xl font-bold text-lime-400">
              {t("objectives.title")}
            </h3>

            <ul className="space-y-4 text-zinc-300">
              {objectiveKeys.map((key) => (
                <li key={key}>
                  ✓ {t(`objectives.${key}`)}
                </li>
              ))}
            </ul>
          </div>

          {/* BELIEFS */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h3 className="mb-6 text-xl font-bold text-lime-400">
              {t("beliefs.title")}
            </h3>

            <ul className="space-y-4 text-zinc-300">
              {beliefKeys.map((key) => (
                <li key={key}>
                  ✓ {t(`beliefs.${key}`)}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* BLOCKQUOTE */}
        <blockquote className="mt-16 border-l-4 border-lime-400 pl-6 text-left text-2xl font-semibold text-white">
          {t("quote_line1")}
          <br />
          {t("quote_line2")}
        </blockquote>

      </div>
    </section>
  );
}