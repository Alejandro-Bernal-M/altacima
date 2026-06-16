"use client";

import { useForm, ValidationError } from "@formspree/react";
import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function Contact() {
  const t = useTranslations("Contact");
  const [state, handleSubmit] = useForm("mgebbggv");

  if (state.succeeded) {
    return (
      <section id="contact" className="bg-[#0D131A] py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-5xl font-black text-white">
            {t("success.title")}
          </h2>

          <p className="mt-6 text-zinc-400">
            {t("success.description")}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-[#0D131A] py-32">
      <div className="mx-auto max-w-6xl px-6">

        {/* HEADER */}
        <div className="mb-20 text-center">
          <p className="mb-4 uppercase tracking-[0.4em] text-lime-400">
            {t("header.subtitle")}
          </p>

          <h2 className="text-5xl font-black md:text-6xl text-white">
            {t("header.title")}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
            {t("header.description")}
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">

          {/* LEFT SIDE: SOCIAL / CHANNELS */}
          <div>
            <h3 className="mb-8 text-2xl font-bold text-white">
              {t("social.title")}
            </h3>

            {/* WhatsApp Priority */}
            <a
              href="https://wa.me/573146594963"
              target="_blank"
              rel="noopener noreferrer"
              className="group mb-8 flex items-center gap-4 rounded-3xl border border-lime-400/30 bg-lime-400/10 p-6 transition hover:bg-lime-400/20 cursor-pointer"
            >
              <MessageCircle className="h-8 w-8 text-lime-400 flex-shrink-0" />

              <div>
                <p className="font-bold text-white">
                  WhatsApp
                </p>

                <p className="text-zinc-300">
                  {t("social.whatsapp.tagline")}
                </p>
              </div>
            </a>

            <div className="space-y-5">
              {/* Instagram */}
              <a
                href="https://instagram.com/ale_godai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 transition hover:border-lime-400 cursor-pointer"
              >
                <FaInstagram className="h-7 w-7 text-lime-400 flex-shrink-0" />

                <div>
                  <p className="font-semibold text-white">
                    Instagram
                  </p>

                  <p className="text-sm text-zinc-400">
                    {t("social.instagram.description")}
                  </p>
                </div>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@ale_godai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 transition hover:border-lime-400 cursor-pointer"
              >
                <FaYoutube className="h-7 w-7 text-lime-400 flex-shrink-0" />

                <div>
                  <p className="font-semibold text-white">
                    YouTube
                  </p>

                  <p className="text-sm text-zinc-400">
                    {t("social.youtube.description")}
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              required
              placeholder={t("form.placeholders.name")}
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-white placeholder:text-zinc-500 focus:border-lime-400 focus:outline-none"
            />

            <input
              type="email"
              name="email"
              required
              placeholder={t("form.placeholders.email")}
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-white placeholder:text-zinc-500 focus:border-lime-400 focus:outline-none"
            />

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <select
              name="athlete_type"
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-white focus:border-lime-400 focus:outline-none cursor-pointer"
            >
              <option value="Climber">{t("form.options.climber")}</option>
              <option value="Rope Access Technician">{t("form.options.rope_access")}</option>
              <option value="Mountain Athlete">{t("form.options.mountain")}</option>
              <option value="Outdoor Enthusiast">{t("form.options.outdoor")}</option>
            </select>

            <input
              type="text"
              name="goal"
              placeholder={t("form.placeholders.goal")}
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-white placeholder:text-zinc-500 focus:border-lime-400 focus:outline-none"
            />

            <textarea
              name="message"
              rows={6}
              required
              placeholder={t("form.placeholders.message")}
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-white placeholder:text-zinc-500 focus:border-lime-400 focus:outline-none"
            />

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full rounded-full bg-lime-400 py-4 font-bold text-black transition hover:bg-lime-300 disabled:opacity-50 cursor-pointer"
            >
              {t("form.submit")}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}