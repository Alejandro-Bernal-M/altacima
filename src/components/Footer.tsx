import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("Footer");

  return (
    <footer className="border-t border-zinc-800 bg-[#0A0F14] py-10">
      <div className="mx-auto max-w-7xl px-6">

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

          {/* BRAND & MOTTO */}
          <div>
            <h3 className="font-bold text-white tracking-wider">
              GODAI TRAINING
            </h3>

            <p className="text-sm text-zinc-500 mt-1">
              {t("motto")}
            </p>
          </div>

          {/* COPYRIGHT */}
          <p className="text-sm text-zinc-500 text-center md:text-right">
            © {new Date().getFullYear()} Alejandro Bernal. {t("rights")}
          </p>

        </div>
      </div>
    </footer>
  );
}