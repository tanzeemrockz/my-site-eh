"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Cpu, Radio, Sparkles, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const CHANNELS = [
  { id: "1", label: "01 • Formula 1", title: "F1 Telemetry & Paddock Control" },
  { id: "2", label: "02 • 2009 Toshiba", title: "The 2009 Vintage Stressbench" },
  { id: "3", label: "03 • DQM Brain", title: "Deterministic AI Cognition" },
  { id: "4", label: "04 • AssetSlayer", title: "In-Browser Asset Compression" },
];

export function InteractiveLab() {
  const [activeChannel, setActiveChannel] = useState("1");
  const [fortniteLog, setFortniteLog] = useState<string | null>(null);
  const [runningSim, setRunningSim] = useState(false);

  const runFortniteTest = () => {
    setRunningSim(true);
    setFortniteLog("Connecting to Toshiba Satellite L500 (2009)...\nProbing CPU: Intel Core 2 Duo T6500 @ 2.10GHz\nMemory detected: 2048 MB DDR2 RAM\nExecuting Fortnite_Installer.exe...");

    setTimeout(() => {
      setFortniteLog((prev) => 
        prev + "\n\n⚠️ CRITICAL WARNING: Unreal Engine 5 requested 16,384 MB RAM.\nToshiba Fan RPM: 9,800 RPM 🔥\nMemory consumed: 100%.\n\nResult: 2GB DDR2 RAM can't run Fortnite, but AssetSlayer & DQM fly at 240 FPS! 🚀"
      );
      setRunningSim(false);
    }, 1200);
  };

  return (
    <section id="interactive-lab" className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-accent-orange block mb-1">
            Interactive Testbench
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            The Interactive Lab Monitor
          </h2>
          <p className="mt-2 text-sm text-white/60 max-w-xl">
            A virtual testing console inspired by retro hardware monitors, telemetry suites, and low-spec benchmarking.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono text-white/60">
            {CHANNELS.find((c) => c.id === activeChannel)?.title}
          </span>
        </div>
      </div>

      {/* Monitor Frame */}
      <div className="relative rounded-3xl border border-white/[0.12] bg-[#0c0d12]/90 p-5 sm:p-8 backdrop-blur-2xl shadow-2xl overflow-hidden">
        
        {/* Top Channel Switcher Bar */}
        <div className="flex items-center justify-between flex-wrap gap-3 border-b border-white/[0.08] pb-5 mb-6">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-mono text-white/40 mr-1 flex items-center gap-1">
              <Radio className="size-3 text-accent-orange" />
              CHANNELS:
            </span>
            {CHANNELS.map((ch) => (
              <button
                key={ch.id}
                onClick={() => setActiveChannel(ch.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeChannel === ch.id
                    ? "bg-white/[0.14] text-white border border-white/25 shadow-lg"
                    : "bg-white/[0.03] text-white/60 border border-white/[0.06] hover:text-white hover:bg-white/[0.08]"
                }`}
              >
                {ch.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono text-white/40">
            <Terminal className="size-3 text-accent-blue" />
            <span>RENDERED IN REALTIME</span>
          </div>
        </div>

        {/* Screen Output Area */}
        <div className="relative rounded-2xl border border-white/[0.08] bg-[#050608] p-6 sm:p-10 min-h-[300px] flex items-center justify-center text-center overflow-hidden">
          
          {/* Subtle Scanlines effect */}
          <div aria-hidden className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(142,203,255,0.03),transparent)]" />

          <AnimatePresence mode="wait">
            {activeChannel === "1" && (
              <motion.div
                key="ch-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="max-w-2xl space-y-5"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-orange/10 border border-accent-orange/30 text-xs font-bold text-accent-orange">
                  🏎 FORMULA 1 PADDOCK TELEMETRY
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Max Verstappen (#1) &amp; Mercedes-AMG Petronas
                </h3>
                <p className="text-sm text-white/70 leading-relaxed max-w-xl mx-auto">
                  Race weekends are sacred. Passionate about aerodynamic efficiency, tire degradation curves, and Red Bull's ruthless speed paired with Mercedes-AMG's Silver Arrows heritage.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-left font-mono">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                    <span className="text-[10px] text-white/40 block">TOP SPEED</span>
                    <span className="text-lg font-bold text-emerald-400">338 KM/H</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                    <span className="text-[10px] text-white/40 block">DRS STATUS</span>
                    <span className="text-lg font-bold text-accent-orange">ACTIVE</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                    <span className="text-[10px] text-white/40 block">TYRES</span>
                    <span className="text-lg font-bold text-red-400">SOFT C5</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                    <span className="text-[10px] text-white/40 block">CAR IDENT</span>
                    <span className="text-lg font-bold text-accent-blue">CAR #33</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeChannel === "2" && (
              <motion.div
                key="ch-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="max-w-2xl space-y-5 text-center"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-orange/10 border border-accent-orange/30 text-xs font-bold text-accent-orange">
                  <Cpu className="size-3.5" />
                  THE 2009 JUNK BENCH STRESS TEST
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Toshiba Satellite L500 (2GB DDR2 RAM)
                </h3>
                <p className="text-sm text-white/70 leading-relaxed max-w-xl mx-auto">
                  I once tried installing Fortnite on a 2009 laptop with 2GB DDR2 memory just to see what would happen 😂. While Unreal Engine wept, it became my ultimate real-world speed testbed: if code runs fast here, it will fly everywhere on earth.
                </p>

                <div className="space-y-3 pt-1 max-w-md mx-auto">
                  <Button
                    onClick={runFortniteTest}
                    disabled={runningSim}
                    variant="primary"
                    className="w-full text-xs py-2.5"
                  >
                    {runningSim ? "Stress Testing 2GB Memory..." : "Simulate Fortnite on 2GB RAM"}
                  </Button>

                  {fortniteLog && (
                    <pre className="text-[11px] font-mono text-emerald-400 bg-black/80 p-3.5 rounded-xl border border-white/10 text-left whitespace-pre-wrap leading-relaxed">
                      {fortniteLog}
                    </pre>
                  )}
                </div>
              </motion.div>
            )}

            {activeChannel === "3" && (
              <motion.div
                key="ch-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="max-w-2xl space-y-5 text-center"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-xs font-bold text-accent-blue">
                  <Sparkles className="size-3.5" />
                  ZERO-HALLUCINATION COGNITIVE ARCHITECTURE
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  DQM (Deterministic Query Model) v1.2
                </h3>
                <p className="text-sm text-white/70 leading-relaxed max-w-xl mx-auto">
                  A deterministic token-routed alternative to probabilistic generative models. Employs plug-and-play modular brains (.tqm, .sqm, .lqm) with zero hallucination.
                </p>

                <div className="p-4 rounded-xl bg-black/70 border border-white/[0.08] text-xs font-mono text-left space-y-2 text-white/80 max-w-lg mx-auto">
                  <div className="text-accent-blue">&gt; DQM.load_brain(&quot;core.tqm&quot;): OK (0.42ms)</div>
                  <div className="text-emerald-400">&gt; Query graph resolved against offline SQLite DAG.</div>
                  <div className="text-white/40">&gt; Output certainty: 100.000% (Zero stochastic variance).</div>
                </div>
              </motion.div>
            )}

            {activeChannel === "4" && (
              <motion.div
                key="ch-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="max-w-2xl space-y-5 text-center"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-xs font-bold text-emerald-400">
                  ⚡ HIGH SPEED IN-BROWSER OPTIMIZATION
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  AssetSlayer Web Application
                </h3>
                <p className="text-sm text-white/70 leading-relaxed max-w-xl mx-auto">
                  Compresses and resizes image assets directly inside the user&apos;s browser using Canvas and WebAssembly. No server latency, complete privacy, and instant downloads.
                </p>

                <div className="pt-2">
                  <Button
                    href="https://tanzeemrockz.github.io/assetslayer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    className="text-xs px-6 py-2.5"
                  >
                    Launch Live Tool
                    <ArrowUpRight className="size-4" />
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
