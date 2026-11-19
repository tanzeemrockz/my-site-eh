import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Zap, Shield, Cpu, Gauge, Terminal, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { CTASection } from "@/components/shared/cta-section";

export const metadata: Metadata = {
  title: "About | CyberSlayerCorpz",
  description:
    "CyberSlayerCorpz is an independent digital studio and software engineering practice focused on helping businesses build dependable digital systems, fast websites, and AI automation.",
};

const STATS = [
  { value: "< 350ms", label: "Average Edge TTFB", detail: "Sub-second load times on global edge CDN networks." },
  { value: "95+", label: "Lighthouse Score", detail: "Verified performance, accessibility, and SEO across all builds." },
  { value: "100%", label: "Code Sovereignty", detail: "Complete client handover with zero proprietary vendor lock-in." },
  { value: "0", label: "Junior Handoffs", detail: "Direct collaboration with senior engineers who code your build." },
];

const PRINCIPLES = [
  {
    icon: Zap,
    title: "Edge-Speed Engineering",
    description:
      "We build exclusively with contemporary frameworks like Next.js, React 19, and TypeScript. No heavy WordPress themes, no sluggish page builders. Every millisecond counts toward your bottom line.",
  },
  {
    icon: Shield,
    title: "100% Client Sovereignty",
    description:
      "When your project launches, every single asset belongs to you. Your domain DNS, edge hosting accounts, source code repositories, and API credentials remain 100% yours forever.",
  },
  {
    icon: Terminal,
    title: "Direct Founder Delivery",
    description:
      "We operate with zero account manager telephone games. You speak directly with the builders designing the architecture and shipping the code, ensuring instant feedback and agile sprints.",
  },
  {
    icon: Cpu,
    title: "Pragmatic AI & Automation",
    description:
      "We avoid AI hype and deploy practical, high-impact machine intelligence: instant WhatsApp lead routing, automated catalog searches, and workflow scripts that eliminate manual friction.",
  },
];

const DISCIPLINES = [
  {
    category: "01 · Engineering",
    title: "Next.js & React Web Platforms",
    description:
      "Production-ready digital applications, commercial web catalogs, client portals, and mobile-first responsive interfaces.",
  },
  {
    category: "02 · Architecture",
    title: "Custom Software & Internal Tools",
    description:
      "Bespoke business engines, inventory synchronization systems, and administrative control panels that replace clunky spreadsheets.",
  },
  {
    category: "03 · Intelligence",
    title: "AI & Workflow Automation",
    description:
      "Custom LLM integrations, conversational triage agents, webhook event dispatches, and automated lead capture pipelines.",
  },
  {
    category: "04 · Performance",
    title: "Technical SEO & Speed Auditing",
    description:
      "Core Web Vitals optimization, semantic schema markup, sub-second caching strategies, and search engine readiness.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Engineered with speed."
        highlight="Built for sovereignty."
        description="CyberSlayerCorpz is an independent digital studio and software engineering practice. We partner with ambitious founders, modern enterprises, and growing brands to architect digital products that look incredible, load in milliseconds, and actually convert visitors."
      />

      {/* Metrics Row */}
      <section className="border-b border-white/[0.08] bg-[#09090c] py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-2 rounded-2xl border border-white/[0.08] bg-[#0e0e13] p-7 transition-colors hover:border-white/20"
              >
                <span className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                  {stat.value}
                </span>
                <span className="text-sm font-medium text-white/90">{stat.label}</span>
                <p className="text-xs leading-relaxed text-white/50">{stat.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission & Story */}
      <section className="py-24 sm:py-32 border-b border-white/[0.08]">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_1.4fr] lg:gap-20 items-start">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white leading-tight">
              The studio founded to eliminate <span className="hero-orange">agency friction.</span>
            </h2>
            <p className="text-base leading-relaxed text-white/70">
              Traditional web agencies are burdened by layers of non-technical account managers, bloated markups, and outdated technology. Projects drag on for months and end up running on clunky website builders that slow down over time.
            </p>
            <p className="text-base leading-relaxed text-white/70">
              CyberSlayerCorpz was founded on a simple premise: pair ambitious businesses directly with elite software engineers who build clean, maintainable, high-speed digital products from day one.
            </p>
            <div className="pt-2">
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-accent-orange"
              >
                <span>View our production work</span>
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {PRINCIPLES.map((principle) => {
              const Icon = principle.icon;
              return (
                <div
                  key={principle.title}
                  className="flex flex-col gap-3 rounded-2xl border border-white/[0.08] bg-surface p-7 transition-all duration-300 hover:border-white/20"
                >
                  <span className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-orange">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-white">{principle.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{principle.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Disciplines Matrix */}
      <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#070708]">
        <Container className="flex flex-col gap-14">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
              Core engineering <span className="hero-blue">disciplines.</span>
            </h2>
            <p className="mt-3 text-base text-white/60 leading-relaxed">
              We focus on a concentrated set of modern capabilities where we deliver exceptional technical execution.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {DISCIPLINES.map((d) => (
              <div
                key={d.title}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0c0c10] p-8 transition-all duration-300 hover:border-white/20 hover:bg-[#111116]"
              >
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-medium text-white/40">{d.category}</span>
                  <h3 className="text-xl font-semibold text-white">{d.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{d.description}</p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs text-white/40 group-hover:text-white/70 transition-colors">
                  <CheckCircle2 className="size-3.5 text-accent-blue" />
                  <span>Custom code · Tested · Handed over</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Initiate Project"
        title="Ready to build something that slays?"
        description="Tell us what you're trying to build. We'll help you engineer the right architecture and execute with speed."
      />
    </>
  );
}
