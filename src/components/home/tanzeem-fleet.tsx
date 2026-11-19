import Link from "next/link";
import { ArrowUpRight, Laptop, Server, HardDrive, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const RIGS = [
  {
    title: "Lenovo IdeaPad Slim 3i",
    badge: "Primary Workhorse",
    badgeColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
    specs: "Intel Core i7 13620H • 16GB DDR4 • NVMe SSD",
    description: "Officially mum's laptop, in reality my primary development rig for compiling WASM and writing DQM.",
    icon: Laptop,
  },
  {
    title: "HP Envy 13 ah0029tu",
    badge: "Headless Node",
    badgeColor: "text-accent-orange bg-accent-orange/10 border-accent-orange/30",
    specs: "Intel Core i5 8250U • 8GB DDR3 RAM",
    description: "Display and battery are both broken, but the board runs headless via SSH for background automation.",
    icon: Server,
  },
  {
    title: "Dell Vostro 3491",
    badge: "Standby Machine",
    badgeColor: "text-accent-blue bg-accent-blue/10 border-accent-blue/30",
    specs: "Intel Core i3 1005G1 • 8GB DDR4 RAM",
    description: "Everything works™ on this machine. Reliable backup standby unit for travel and field testing.",
    icon: HardDrive,
  },
  {
    title: "Toshiba Satellite (2009)",
    badge: "Junk Bench Testbed",
    badgeColor: "text-brandYellow bg-brandYellow/10 border-brandYellow/30",
    specs: "Intel Core 2 Duo • 2GB DDR2 RAM • Windows 7",
    description: "The 2GB DDR2 Fortnite experiment machine 😂. The ultimate real-world low-spec validation benchmark.",
    icon: Cpu,
  },
];

export function TanzeemFleet() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-accent-orange block mb-1">
            Hardware Inventory
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            The Silicon Fleet &amp; Gear
          </h2>
          <p className="mt-2 text-sm text-white/60 max-w-xl">
            A living catalog of daily driver laptops, headless nodes, and vintage silicon experiments.
          </p>
        </div>

        <Button href="/uses" variant="secondary" className="text-xs">
          <span>View Full Uses Catalog</span>
          <ArrowUpRight className="size-3.5" />
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {RIGS.map((rig) => {
          const Icon = rig.icon;
          return (
            <div
              key={rig.title}
              className="rounded-3xl border border-white/[0.08] bg-[#0c0d12]/70 p-5 flex flex-col justify-between backdrop-blur-xl space-y-4 hover:border-white/20 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="size-7 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-white/70">
                    <Icon className="size-3.5" />
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${rig.badgeColor}`}>
                    {rig.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white tracking-tight">
                  {rig.title}
                </h3>
                <p className="text-xs font-mono text-white/50">
                  {rig.specs}
                </p>
                <p className="text-xs text-white/70 leading-relaxed font-normal">
                  {rig.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
