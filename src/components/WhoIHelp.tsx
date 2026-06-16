"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const staticProfiles = [
  {
    key: "climbers",
    emoji: "🧗",
    image: "/images/who-i-help/climber.jpg",
  },
  {
    key: "rope_access",
    emoji: "🪢",
    image: "/images/who-i-help/rope-access.jpg",
  },
  {
    key: "mountain",
    emoji: "🏔",
    image: "/images/who-i-help/mountain.jpg",
  },
  {
    key: "adventure",
    emoji: "🌲",
    image: "/images/who-i-help/adventure.jpg",
  },
];

export default function WhoIHelp() {
  const t = useTranslations("WhoIHelp");

  return (
    <section className="py-32 bg-[#0A0F14]">
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.4em] text-lime-400 mb-4">
            {t("subtitle")}
          </p>

          <h2 className="text-5xl md:text-6xl font-black">
            {t("title_line1")}
            <br />
            {t("title_line2")}
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-zinc-400 text-lg">
            {t("description")}
          </p>
        </div>

        {/* PROFILES GRID */}
        <div className="grid gap-8 md:grid-cols-2">
          {staticProfiles.map((profile, index) => {
            const profileTitle = t(`profiles.${profile.key}.title`);
            
            return (
              <motion.div
                key={profile.key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40"
              >
                <div className="relative h-[320px] overflow-hidden">
                  <Image
                    src={profile.image}
                    alt={profileTitle}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <div className="absolute bottom-8 left-8">
                    <h3 className="text-3xl font-bold">
                      {profile.emoji} {profileTitle}
                    </h3>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-zinc-300 leading-relaxed">
                    {t(`profiles.${profile.key}.description`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* FOOTER CALLOUT */}
        <div className="mt-24 text-center">
          <h3 className="text-4xl md:text-5xl font-black">
            {t("footer.headline_line1")}
            <br />
            {t("footer.headline_line2")}
          </h3>

          <p className="mt-6 text-xl text-lime-400">
            {t("footer.subline")}
          </p>
        </div>
        
      </div>
    </section>
  );
}