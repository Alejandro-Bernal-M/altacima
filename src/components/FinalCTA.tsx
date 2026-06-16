import { getTranslations } from "next-intl/server";

export default async function FinalCTA() {
  const t = await getTranslations("FinalCTA");

  return (
    <section className="py-40">
      <div className="mx-auto max-w-5xl px-6 text-center">

        {/* HEADLINE */}
        <h2 className="text-5xl font-black leading-tight md:text-7xl text-white uppercase">
          {t("title_line1")}
          <br />
          {t("title_line2")}
          <br />
          {t("title_line3")}
        </h2>

        {/* DESCRIPTION */}
        <p className="mx-auto mt-10 max-w-2xl text-xl text-zinc-400">
          {t("description")}
        </p>

        {/* ACTION BUTTON */}
        <button className="mt-12 rounded-full bg-lime-400 px-10 py-5 text-lg font-bold text-black transition hover:bg-lime-300 cursor-pointer">
          {t("button")}
        </button>

        {/* FOOTER TAG */}
        <p className="mt-8 text-lime-400 font-medium">
          {t("footer_tag")}
        </p>

      </div>
    </section>
  );
}