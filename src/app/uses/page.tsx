import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Cpu, Laptop, Server, HardDrive, Terminal, Code2, Sparkles, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Uses | Mohamed Tanzeem I | CyberSlayerCorpz",
  description: "A complete catalog of Mohamed Tanzeem I's daily driver laptops, vintage testbench, software toolchains, and AI vibe-coding setup.",
};

const RIGS = [
  {
    title: "Lenovo IdeaPad Slim 3i",
    badge: "Primary Daily Driver",
    badgeColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
    specs: "Intel Core i7 13620H (10 Cores, 16 Threads) • 16GB DDR4 RAM • Fast NVMe SSD",
    description: "Officially mum's laptop, in reality my primary development rig for compiling WASM modules, building DQM in Python, and engineering web systems.",
    icon: Laptop,
  },
  {
    title: "HP Envy 13 ah0029tu",
    badge: "Headless Server Node",
    badgeColor: "text-accent-orange bg-accent-orange/10 border-accent-orange/30",
    specs: "Intel Core i5 8250U • 8GB DDR3 RAM",
    description: "Broken screen and dead battery, but the motherboard works! Connected to the home network and accessed via SSH for local background jobs and automation scripts.",
    icon: Server,
  },
  {
    title: "Dell Vostro 3491",
    badge: "Standby Machine",
    badgeColor: "text-accent-blue bg-accent-blue/10 border-accent-blue/30",
    specs: "Intel Core i3 1005G1 • 8GB DDR4 RAM",
    description: "Everything works™ on this machine. Reliable backup standby unit for travel, quick fixes, and field testing.",
    icon: HardDrive,
  },
  {
    title: "Toshiba Satellite L500 (Vintage 2009)",
    badge: "The Junk Bench Testbed",
    badgeColor: "text-brandYellow bg-brandYellow/10 border-brandYellow/30",
    specs: "Intel Core 2 Duo • 2GB DDR2 RAM • Windows 7 / Tiny10 / CachyOS Linux",
    description: "The machine where I once attempted installing Fortnite on 2GB DDR2 RAM just to see what would happen 😂. Now serves as the ultimate low-resource benchmark: if software runs snappily here, it will fly everywhere on earth.",
    icon: Cpu,
  },
];

const DEV_TOOLS = [
  { category: "Code Editor", name: "VS Code", desc: "Dark theme, tailored extensions, zero bloat.", icon: Code2 },
  { category: "Typography", name: "Google Sans & Flex", desc: "Google Sans, JetBrains Mono, Phantom Sans.", icon: Terminal },
  { category: "Terminal & Shell", name: "ZSH & PowerShell", desc: "Custom aliases, fast Git prompt integrations.", icon: Terminal },
  { category: "Version Control", name: "Git & GitHub", desc: "CLI workflows, branch management, CI/CD.", icon: Code2 },
];

const AI_MODELS = [
  { name: "Gemini 3.8 Flash", role: "High-Speed Inference", tag: "Google AI Pro" },
  { name: "Gemini 3.1 Pro", role: "Deep Architectural Reasoner", tag: "Google AI Pro" },
  { name: "Claude Sonnet 4.6", role: "Full-Stack Code Architect", tag: "Anthropic" },
  { name: "Claude Opus 4.6", role: "Complex Systems Analysis", tag: "Anthropic" },
  { name: "Gemini 4 Argon", role: "Experimental Frontier", tag: "Google AI Pro" },
  { name: "GPT-OSS 120b", role: "Open-Weights Engine", tag: "FOSS" },
];

export default function UsesPage() {
  return (
    <div className="relative min-h-screen bg-bg text-fg pt-28 pb-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 space-y-16">
        
        {/* Top Breadcrumb & Title */}
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-medium text-white/50 hover:text-white transition"
          >
            <ArrowLeft className="size-3.5" />
            Back to Home
          </Link>

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs text-white/70 mb-3">
              <span className="size-1.5 rounded-full bg-accent-orange" />
              Living Hardware Inventory • 2026 Edition
            </div>
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-[-0.04em] text-white">
              Gear, Hardware Rigs &amp; Toolchain
            </h1>
            <p className="mt-3 text-base text-white/70 max-w-2xl leading-relaxed">
              A comprehensive catalog of my daily driver laptops, vintage testbench experiments, software toolchains, and AI vibe-coding setup at <strong className="text-white">CyberSlayerCorpz</strong>.
            </p>
          </div>
        </div>

        {/* Silicon Fleet */}
        <section className="space-y-6">
          <div className="border-b border-white/[0.08] pb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-orange block mb-0.5">
              Silicon Fleet
            </span>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Laptops &amp; Daily Drivers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {RIGS.map((rig) => {
              const Icon = rig.icon;
              return (
                <div
                  key={rig.title}
                  className="rounded-3xl border border-white/[0.08] bg-[#0c0d12]/70 p-6 flex flex-col justify-between backdrop-blur-xl space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="size-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-white/70">
                        <Icon className="size-4" />
                      </div>
                      <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${rig.badgeColor}`}>
                        {rig.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {rig.title}
                    </h3>
                    <p className="text-xs font-mono text-white/50">
                      {rig.specs}
                    </p>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                      {rig.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Dev Environment */}
        <section className="space-y-6">
          <div className="border-b border-white/[0.08] pb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-blue block mb-0.5">
              Toolchain
            </span>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Dev Environment &amp; Workflow
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {DEV_TOOLS.map((t) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.name}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 space-y-2"
                >
                  <span className="text-[10px] font-mono uppercase text-white/40 block">
                    {t.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <Icon className="size-4 text-accent-blue" />
                    <h3 className="text-sm font-bold text-white">{t.name}</h3>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* AI Vibe-Coding Stack */}
        <section className="space-y-6">
          <div className="border-b border-white/[0.08] pb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 block mb-0.5">
              Frontier Models
            </span>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              AI Stack (Google AI Pro &amp; Anthropic)
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {AI_MODELS.map((m) => (
              <div
                key={m.name}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 text-center space-y-1"
              >
                <span className="text-xs font-bold text-white block">
                  {m.name}
                </span>
                <span className="text-[10px] text-white/50 block">
                  {m.role}
                </span>
                <span className="text-[9px] font-mono text-accent-orange block pt-1">
                  {m.tag}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Daily Apps */}
        <section className="space-y-6">
          <div className="border-b border-white/[0.08] pb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-orange block mb-0.5">
              Everyday Tools
            </span>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Daily Communication &amp; Utilities
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 space-y-1.5">
              <span className="text-[10px] text-white/40 uppercase block">BROWSER</span>
              <h3 className="text-sm font-bold text-white">Google Chrome</h3>
              <p className="text-xs text-white/60">DevTools, network profiling, speed.</p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 space-y-1.5">
              <span className="text-[10px] text-white/40 uppercase block">MESSAGING</span>
              <h3 className="text-sm font-bold text-white">WhatsApp</h3>
              <a href="https://wa.me/917667271516" target="_blank" rel="noopener noreferrer" className="text-xs text-accent-blue hover:underline">
                +91 7667271516 ↗
              </a>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 space-y-1.5">
              <span className="text-[10px] text-white/40 uppercase block">ENTERTAINMENT</span>
              <h3 className="text-sm font-bold text-white">YouTube Premium</h3>
              <p className="text-xs text-white/60">Tech deep-dives, F1 race highlights, tutorials.</p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 space-y-1.5">
              <span className="text-[10px] text-white/40 uppercase block">SOCIAL</span>
              <h3 className="text-sm font-bold text-white">Instagram</h3>
              <a href="https://instagram.com/tanzeemrockz" target="_blank" rel="noopener noreferrer" className="text-xs text-accent-blue hover:underline">
                @tanzeemrockz ↗
              </a>
            </div>
          </div>
        </section>

        {/* Bottom Back Link */}
        <div className="flex items-center justify-between p-6 rounded-3xl border border-white/[0.08] bg-white/[0.02]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-accent-orange transition"
          >
            <ArrowLeft className="size-4" />
            Back to tanzeem.xyz Home
          </Link>

          <Button href="/contact" variant="primary" className="text-xs py-2 px-4">
            Connect
            <ArrowUpRight className="size-3.5" />
          </Button>
        </div>

      </div>
    </div>
  );
}
