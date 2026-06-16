"use client";

import { useForm, ValidationError } from "@formspree/react";
import { MessageCircle } from "lucide-react";
import {
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  const [state, handleSubmit] = useForm("mgebbggv");

  if (state.succeeded) {
    return (
      <section
        id="contact"
        className="bg-[#0D131A] py-32"
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-5xl font-black">
            Message Sent
          </h2>

          <p className="mt-6 text-zinc-400">
            Thank you for reaching out.
            I'll get back to you as soon as possible.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="bg-[#0D131A] py-32"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}

        <div className="mb-20 text-center">
          <p className="mb-4 uppercase tracking-[0.4em] text-lime-400">
            Contact
          </p>

          <h2 className="text-5xl font-black md:text-6xl">
            Ready To Begin?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
            Follow the journey, send a message,
            or book your assessment.
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">

          {/* Left Side */}

          <div>

            <h3 className="mb-8 text-2xl font-bold">
              Connect With Me
            </h3>

            {/* WhatsApp Priority */}

            <a
              href="https://wa.me/573146594963"
              target="_blank"
              rel="noopener noreferrer"
              className="group mb-8 flex items-center gap-4 rounded-3xl border border-lime-400 bg-lime-400/10 p-6 transition hover:bg-lime-400/20"
            >
              <MessageCircle className="h-8 w-8 text-lime-400" />

              <div>
                <p className="font-bold text-white">
                  WhatsApp
                </p>

                <p className="text-zinc-300">
                  Fastest way to reach me directly.
                </p>
              </div>
            </a>

            <div className="space-y-5">

              {/* Instagram */}

              <a
                href="https://instagram.com/ale_godai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 transition hover:border-lime-400"
              >
                <FaInstagram className="h-7 w-7 text-lime-400" />

                <div>
                  <p className="font-semibold">
                    Instagram
                  </p>

                  <p className="text-sm text-zinc-400">
                    Follow my climbing, training and rope access journey.
                  </p>
                </div>
              </a>

              {/* YouTube */}

              <a
                href="https://youtube.com/@ale_godai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 transition hover:border-lime-400"
              >
                <FaYoutube className="h-7 w-7 text-lime-400" />

                <div>
                  <p className="font-semibold">
                    YouTube
                  </p>

                  <p className="text-sm text-zinc-400">
                    Training insights, climbing and vertical content.
                  </p>
                </div>
              </a>

            </div>
          </div>

          {/* Form */}

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-white placeholder:text-zinc-500 focus:border-lime-400 focus:outline-none"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-white placeholder:text-zinc-500 focus:border-lime-400 focus:outline-none"
            />

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <select
              name="athlete_type"
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-white focus:border-lime-400 focus:outline-none"
            >
              <option>Climber</option>
              <option>Rope Access Technician</option>
              <option>Mountain Athlete</option>
              <option>Outdoor Enthusiast</option>
            </select>

            <input
              type="text"
              name="goal"
              placeholder="Main Goal"
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-white placeholder:text-zinc-500 focus:border-lime-400 focus:outline-none"
            />

            <textarea
              name="message"
              rows={6}
              required
              placeholder="Tell me about your current situation..."
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-white placeholder:text-zinc-500 focus:border-lime-400 focus:outline-none"
            />

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full rounded-full bg-lime-400 py-4 font-bold text-black transition hover:bg-lime-300 disabled:opacity-50"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}