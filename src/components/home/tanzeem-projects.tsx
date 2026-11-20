"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Layers, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const PROJECTS = [
  {
    id: "assetslayer",
    title: "AssetSlayer",
    category: "Web Application",
    tagline: "In-Browser Image Optimizer & Compressor",
    description:
      "A fast, client-side web utility built to compress and resize web assets without losing visual quality. Executes 100% in-browser with zero server uploads.",
    tech: ["HTML5", "Tailwind CSS", "JavaScript", "Canvas API"],
    href: "https://tanzeemrockz.github.io/assetslayer/",
    icon: Layers,
    accent: "text-accent-blue",
    borderAccent: "hover:border-accent-blue/40",
    badge: "Live Tool",
  },
  {
    id: "langslayer",
    title: "LangSlayer",
    category: "AI Inference Tool",
    tagline: "Academic Jargon Demolisher via Groq",
    description:
      "A tool built for slaying complex, hyper-technical academic text and impenetrable jargon into simple, clear words using ultra-fast Groq LPU inference.",
    tech: ["Groq API", "Tailwind CSS", "JavaScript", "HTML5"],
    href: "https://tanzeemrockz.github.io/LangSlayer/",
    icon: Sparkles,
    accent: "text-accent-orange",
    borderAccent: "hover:border-accent-orange/40",
    badge: "Live Tool",
  },
  {
    id: "dqm",
    title: "DQM (Deterministic Query Model)",
    category: "Cognitive Architecture",
    tagline: "Zero-Hallucination Token Router",
    description:
      "Deterministic Query Model: a deterministic, token-routed Python alternative to generative AI. Employs plug-and-play brains (.tqm, .sqm, .lqm) with zero hallucination.",
    tech: ["Python 3.12", "SQLite DAG", "JSON Brains", "Graph Theory"],
    href: "https://cyberslayercorpz.dev",
    icon: Cpu,
    accent: "text-emerald-400",
    borderAccent: "hover:border-emerald-400/40",
    badge: "v1.2 Active Core",
  },
];

export function TanzeemProjects() {
  return (
    <section id="work-showcase" className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-accent-orange block mb-1">
            Portfolio &amp; Engineering
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Projects I&apos;m Proud Of
          </h2>
          <p className="mt-2 text-sm text-white/60 max-w-xl">
            Selected software systems, offline utilities, and deterministic models engineered at CyberSlayerCorpz.
          </p>
        </div>

        <span className="text-xs font-mono text-white/40">
          3 FEATURED BUILDS
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROJECTS.map((project) => {
          const Icon = project.icon;
          return (
            <motion.article
              key={project.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className={`rounded-3xl border border-white/[0.08] bg-[#0c0d12]/80 p-6 flex flex-col justify-between backdrop-blur-xl shadow-xl transition-colors ${project.borderAccent}`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="size-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center">
                      <Icon className={`size-4 ${project.accent}`} />
                    </div>
                    <span className="text-xs font-medium text-white/50">
                      {project.category}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-white/70">
                    {project.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-white/50 mt-0.5">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-white/[0.08] mt-6">
                <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-white/50">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.08]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Button
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  className="w-full text-xs justify-between group"
                >
                  <span>Launch Tool</span>
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
