import { ArrowRight, MessageCircle } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function FreeAssessment() {
  const t = await getTranslations("FreeAssessment");
  
  const phone = "573146594963";

  // Construcción del mensaje multilínea formateado según el idioma
  const whatsappText = `
    ${t("whatsapp.greeting")}

    ${t("whatsapp.interest")}

    ${t("whatsapp.label_sport")}
    ${t("whatsapp.label_goal")}
    ${t("whatsapp.label_challenge")}

    ${t("whatsapp.closing")}
      `.trim();

  const encodedMessage = encodeURIComponent(whatsappText);

  const featureKeys = ["f1", "f2", "f3", "f4"] as const;

  return (
    <section className="bg-[#0A0F14] py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-[40px] border border-lime-400/30 bg-gradient-to-br from-lime-500/10 to-transparent p-10 md:p-16">

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

          {/* DESCRIPTION */}
          <p className="mt-8 max-w-2xl text-lg text-zinc-300">
            {t("description")}
          </p>

          {/* FEATURES GRID */}
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {featureKeys.map((key) => (
              <div 
                key={key} 
                className="rounded-xl border border-zinc-800 p-4 text-zinc-300 bg-zinc-900/20"
              >
                ✓ {t(`features.${key}`)}
              </div>
            ))}
          </div>

          {/* CTA BUTTON */}
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href={`https://wa.me/${phone}?text=${encodedMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-lime-400 px-8 py-4 font-bold text-black transition hover:bg-lime-300 cursor-pointer"
            >
              <MessageCircle size={20} />
              {t("cta")}
              <ArrowRight size={20} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}