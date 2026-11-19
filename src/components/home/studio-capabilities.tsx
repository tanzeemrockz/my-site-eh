import { Globe, Code2, Cpu, LineChart, Sparkles, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";

const CAPABILITIES = [
  {
    icon: Globe,
    title: "High-Performance Web Systems",
    description:
      "Modern SSR and edge-rendered web platforms engineered for lightning speeds (< 1s load times), exceptional visual design, and high conversion rates.",
    tags: ["Next.js", "React 19", "Edge Compute", "TypeScript"],
  },
  {
    icon: Code2,
    title: "Custom Applications & Platforms",
    description:
      "Bespoke software solutions, client dashboards, automated booking engines, and custom APIs built to run your core operations without friction.",
    tags: ["Full-Stack", "REST / GraphQL", "PostgreSQL", "Cloud Native"],
  },
  {
    icon: Cpu,
    title: "AI Integration & Workflows",
    description:
      "Smart agentic workflows, conversational inquiry bots, automated content routing, and LLM-assisted systems that eliminate manual hours.",
    tags: ["LLM Agents", "Task Automation", "Custom Pipelines"],
  },
  {
    icon: LineChart,
    title: "Technical SEO & Search Dominance",
    description:
      "Zero-fluff technical SEO built right into the semantic HTML architecture, schema markup, and Core Web Vitals to rank your business higher.",
    tags: ["Semantic HTML", "Schema.org", "Core Web Vitals", "Analytics"],
  },
  {
    icon: Sparkles,
    title: "Creative Identity & Motion",
    description:
      "Striking dark-mode design languages, bespoke interactive typography, dynamic 3D elements, and micro-interactions that leave a lasting impression.",
    tags: ["Visual Design", "Framer Motion", "WebGL Shaders", "UI Systems"],
  },
  {
    icon: ShieldCheck,
    title: "Direct Founder Partnership",
    description:
      "Work directly with the lead engineers from day one. Transparent communication, rapid iteration cycles, and direct phone/WhatsApp access.",
    tags: ["No Middlemen", "Agile Sprints", "Direct WhatsApp", "Ongoing SLA"],
  },
];

export function StudioCapabilities() {
  return (
    <section id="work-showcase" className="relative py-28 border-b border-white/[0.08] bg-[#070708]">
      <Container className="flex flex-col gap-14 sm:gap-18">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
            Engineered to <span className="hero-blue">outperform.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/60 leading-relaxed">
            We don’t rely on generic templates or heavy website builders. Everything is custom-coded with contemporary web technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0c0c10] p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#111116] hover:-translate-y-1"
              >
                <div>
                  <div className="size-10 rounded-lg border border-white/10 bg-white/[0.04] flex items-center justify-center text-accent-orange mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {cap.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] text-white/40 bg-white/[0.02]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
