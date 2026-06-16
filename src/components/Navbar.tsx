"use client";

import { Menu, MessageCircle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/20 px-6 py-4 backdrop-blur-xl">

          {/* Logo */}

          <a href="#hero">
            <h2 className="text-lg font-black tracking-[0.35em] text-lime-400">
              GODAI
            </h2>
          </a>

          {/* Desktop Nav */}

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8 text-sm uppercase tracking-wider text-zinc-300">

              <li>
                <a
                  href="#elements"
                  className="transition hover:text-lime-400"
                >
                  Elements
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="transition hover:text-lime-400"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#paths"
                  className="transition hover:text-lime-400"
                >
                  Paths
                </a>
              </li>

              <li>
                <a
                  href="#mission"
                  className="transition hover:text-lime-400"
                >
                  Mission
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition hover:text-lime-400"
                >
                  Contact
                </a>
              </li>

            </ul>
          </nav>

          {/* Right Side */}

          <div className="flex items-center gap-4">

            <a
              href="https://wa.me/573146594963"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 rounded-full bg-lime-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-lime-300"
            >
              <MessageCircle size={18} />
              Free Assessment
            </a>

            <button className="lg:hidden">
              <Menu className="h-6 w-6 text-white" />
            </button>

          </div>

        </div>
      </div>
    </header>
  );
}