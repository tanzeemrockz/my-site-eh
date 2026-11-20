"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const QUOTES = [
  {
    id: "quran",
    label: "01 • Qur'an",
    arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "Indeed, with hardship, comes ease.",
    source: "The Holy Qur'an (Surah Ash-Sharh 94:6)",
  },
  {
    id: "code",
    label: "02 • Code",
    translation: "Code is like humour. When you have to explain it, it's bad.",
    source: "Cory House",
  },
  {
    id: "folk",
    label: "03 • Craft",
    translation:
      "A jack of all trades is a master of none, but oftentimes better than a master of one.",
    source: "16th-Century Folk Wisdom",
  },
];

export function TanzeemQuotes() {
  const [active, setActive] = useState("quran");

  return (
    <section className="relative z-10 mx-auto max-w-5xl px-5 py-16 sm:px-8">
      <div className="rounded-3xl border border-white/[0.1] bg-[#0c0d12]/70 p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-white/[0.08] pb-5">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-orange block mb-0.5">
              Philosophy
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Words That Ground My Work
            </h2>
          </div>

          <div role="tablist" aria-label="Philosophy tabs" className="flex items-center gap-1.5 p-1 rounded-full bg-white/[0.03] border border-white/[0.08]">
            {QUOTES.map((q) => (
              <button
                key={q.id}
                role="tab"
                id={`quote-tab-${q.id}`}
                aria-selected={active === q.id}
                aria-controls={`quote-panel-${q.id}`}
                onClick={() => setActive(q.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
                  active === q.id
                    ? "bg-white/[0.14] text-white border border-white/20 shadow"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {q.label}
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-[120px] flex items-center justify-center text-center">
          <AnimatePresence mode="wait">
            {QUOTES.map((q) => {
              if (q.id !== active) return null;
              return (
                <motion.div
                  key={q.id}
                  role="tabpanel"
                  id={`quote-panel-${q.id}`}
                  aria-labelledby={`quote-tab-${q.id}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3 py-3"
                >
                  {q.arabic && (
                    <p className="text-2xl sm:text-3xl font-bold text-accent-blue tracking-wide" style={{ direction: "rtl" }}>
                      &ldquo;{q.arabic}&rdquo;
                    </p>
                  )}
                  <p className="text-base sm:text-lg text-white font-medium italic max-w-xl mx-auto">
                    &ldquo;{q.translation}&rdquo;
                  </p>
                  <span className="text-xs text-white/40 font-mono block">
                    Source: {q.source}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
