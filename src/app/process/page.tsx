import type { Metadata } from "next";
import { Check, X, Shield, Zap, Terminal, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ProcessTimeline } from "@/components/process/process-timeline";
import { PageHero } from "@/components/shared/page-hero";
import { CTASection } from "@/components/shared/cta-section";
import { PROCESS_STEPS } from "@/data/services";

export const metadata: Metadata = {
  title: "Process | CyberSlayerCorpz",
  description: "A disciplined, sprint-based engineering lifecycle designed to eliminate guesswork, speed up turnaround, and ensure flawless delivery.",
};

const PHASES = [
  {
    phase: "Sprint 01",
    title: "Technical Discovery & Architecture",
    description:
      "We dissect your business goals, target audience, and functional specifications. We choose the optimal architecture, map out data models, and set clear, non-negotiable milestones.",
    deliverable: "Architecture Blueprint · Fixed Milestones · Scope Agreement",
    icon: Terminal,
  },
  {
    phase: "Sprint 02",
    title: "Tactile UI Design & Interactive Prototyping",
    description:
      "We craft high-contrast, accessible interfaces strictly in Google Sans with purposeful motion and mobile-first touch ergonomics. Every screen is designed to guide users directly toward conversion.",
    deliverable: "Component Library · Mobile-First UI · Interactive Preview",
    icon: Sparkles,
  },
  {
    phase: "Sprint 03",
    title: "Edge Development & Integrations",
    description:
      "We write modular, type-safe Next.js code with zero bloat. We hook up WhatsApp routing, contact pipelines, databases, and custom APIs. You get weekly staging links to test real software.",
    deliverable: "Type-Safe TypeScript · Edge API Hooks · Staging Builds",
    icon: Zap,
  },
  {
    phase: "Sprint 04",
    title: "Auditing, Verification & 100% Handover",
    description:
      "We run automated Google Lighthouse audits, test across iOS and Android browsers, configure custom domain DNS, and deploy to global edge CDNs. Complete repository and credential handover to you.",
    deliverable: "95+ Lighthouse Score · Global Edge CDN · 100% Code Sovereignty",
    icon: Shield,
  },
];

const COMPARISONS = [
  {
    title: "Technology Foundation",
    agency: "Bloated WordPress themes, fragile plugins, and slow drag-and-drop page builders.",
    cyberslayer: "Custom Next.js & React 19 architecture with sub-second edge response and clean TypeScript.",
  },
  {
    title: "Communication",
    agency: "Junior account managers relaying messages back and forth through ticketing queues.",
    cyberslayer: "Direct WhatsApp and sprint collaboration with senior builders who actually write your code.",
  },
  {
    title: "Asset & Code Ownership",
    agency: "Captive hosting, proprietary locks, and hostage fees to export your own website.",
    cyberslayer: "100% client sovereignty. Domain DNS, hosting accounts, repositories, and credentials are yours forever.",
  },
  {
    title: "Turnaround & Delivery",
    agency: "Months of scope creep, vague timelines, and surprise invoices.",
    cyberslayer: "Disciplined milestone delivery with fixed deliverables and transparent advance pricing.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="A disciplined framework."
        highlight="Zero guesswork."
        description="We replace agency bureaucracy with agile engineering sprints, live staging previews, and direct founder collaboration. Here is how your project moves from concept to verified edge launch."
      />

      {/* High-level timeline */}
      <section className="py-24 sm:py-32 border-b border-white/[0.08]">
        <Container className="flex flex-col gap-12 sm:gap-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
              The 6-stage <span className="hero-orange">velocity cycle.</span>
            </h2>
            <p className="mt-3 text-base text-white/60 leading-relaxed">
              Every phase is milestone-driven to ensure complete transparency and eliminate delivery friction.
            </p>
          </div>

          <ProcessTimeline steps={PROCESS_STEPS} />
        </Container>
      </section>

      {/* Deep-dive sprint phases */}
      <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#070708]">
        <Container className="flex flex-col gap-14 sm:gap-18">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
              How we execute <span className="hero-blue">sprint by sprint.</span>
            </h2>
            <p className="mt-3 text-base text-white/60 leading-relaxed">
              Clear accountability and verifiable deliverables at every single step of your engineering lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PHASES.map((phase) => {
              const Icon = phase.icon;
              return (
                <div
                  key={phase.phase}
                  className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0c0c10] p-8 transition-all duration-300 hover:border-white/20 hover:bg-[#111116]"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-accent-orange tracking-wider">
                        {phase.phase}
                      </span>
                      <span className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70">
                        <Icon className="size-4" />
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {phase.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/65">
                      {phase.description}
                    </p>
                  </div>

                  <div className="mt-8 border-t border-white/[0.08] pt-4">
                    <span className="text-xs text-white/40 block mb-1">Deliverables:</span>
                    <span className="text-xs sm:text-sm font-medium text-white/90">
                      {phase.deliverable}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Standard Comparison */}
      <section className="py-24 sm:py-32 border-b border-white/[0.08]">
        <Container className="flex flex-col gap-14">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
              The <span className="hero-orange">CyberSlayerCorpz</span> standard.
            </h2>
            <p className="mt-3 text-base text-white/60 leading-relaxed">
              Why leading founders and growing brands choose to build with us over traditional digital agencies.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {COMPARISONS.map((comp) => (
              <div
                key={comp.title}
                className="grid grid-cols-1 md:grid-cols-[1.2fr_1.4fr_1.4fr] gap-6 items-center rounded-2xl border border-white/10 bg-[#0c0c10] p-6 sm:p-8"
              >
                <div>
                  <h3 className="text-lg font-semibold text-white">{comp.title}</h3>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/[0.04] p-4 text-xs sm:text-sm text-white/60">
                  <X className="size-4 shrink-0 text-red-400 mt-0.5" />
                  <div>
                    <span className="font-medium text-red-300/90 block mb-0.5">Typical Agencies</span>
                    {comp.agency}
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] p-4 text-xs sm:text-sm text-white/80">
                  <Check className="size-4 shrink-0 text-emerald-400 mt-0.5" />
                  <div>
                    <span className="font-medium text-emerald-300 block mb-0.5">CyberSlayerCorpz</span>
                    {comp.cyberslayer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Initiate Project"
        title="Ready to begin Sprint 01?"
        description="Share your project goals and requirements. We'll map out an architecture proposal and milestone roadmap within 24 hours."
      />
    </>
  );
}
