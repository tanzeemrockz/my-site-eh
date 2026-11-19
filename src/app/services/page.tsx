import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Sparkles, Layers, Cpu, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { CTASection } from "@/components/shared/cta-section";
import { SERVICE_GROUPS } from "@/data/services";

export const metadata: Metadata = {
  title: "Services | CyberSlayerCorpz",
  description:
    "Custom web applications, bespoke business software, digital product catalogs, technical SEO, and practical AI automation.",
};

const ENGAGEMENT_MODELS = [
  {
    icon: Sparkles,
    badge: "Most Popular for Businesses",
    title: "Starter Build",
    price: "₹7,000",
    description:
      "A polished, mobile-first website with everything your business needs to launch with authority. 1-year domain, edge hosting, SSL, and direct WhatsApp routing included.",
    cta: "Start Your Build",
    href: "/contact",
  },
  {
    icon: Layers,
    badge: "Bespoke Engineering",
    title: "Custom Web Application",
    price: "Custom Scope",
    description:
      "Full-stack digital applications, customer portals, interactive calculators, and internal operations tools engineered with Next.js and secure database backends.",
    cta: "Request Architecture Review",
    href: "/contact",
  },
  {
    icon: Cpu,
    badge: "Intelligent Workflows",
    title: "AI & Workflow Automation",
    price: "Custom Scope",
    description:
      "Integrate conversational lead triage, WhatsApp order bots, webhook pipelines, and custom LLM intelligence into your existing business operations.",
    cta: "Explore AI Solutions",
    href: "/contact",
  },
  {
    icon: ShieldCheck,
    badge: "Continuous Care",
    title: "Dedicated Edge SLA",
    price: "Monthly Retainer",
    description:
      "Ongoing engineering support, uptime monitoring, zero-downtime security patches, and direct WhatsApp access to the engineers who built your platform.",
    cta: "Inquire About SLA",
    href: "/contact",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Engineered capabilities for"
        highlight="ambitious brands."
        description="From sub-second web platforms and interactive B2B catalogs to custom software and intelligent automation. We craft digital infrastructure that turns traffic into revenue and eliminates operational bottlenecks."
      />

      {/* Main Service Pillars */}
      {SERVICE_GROUPS.map((group, i) => (
        <section key={group.key} className="py-20 sm:py-24 border-b border-white/[0.08]">
          <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2.4fr]">
            <div className="flex flex-col gap-3 lg:sticky lg:top-32 lg:self-start">
              <span className="text-xs font-semibold text-accent-orange tracking-wider">
                TRACK 0{i + 1}
              </span>
              <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-white">
                {group.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/60 max-w-sm">
                {group.tagline}
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {group.services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-2xl border border-white/10 bg-[#0c0c10] p-7 sm:p-9 transition-all duration-300 hover:border-white/20 hover:bg-[#101015]"
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base leading-relaxed text-white/70">
                    {service.description}
                  </p>

                  <div className="mt-6 border-t border-white/[0.08] pt-6">
                    <span className="text-xs font-semibold tracking-wider uppercase text-white/40 mb-3 block">
                      Core Deliverables &amp; Standards
                    </span>
                    <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm text-white/75">
                          <Check className="size-3.5 shrink-0 text-accent-blue" strokeWidth={2.5} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      ))}

      {/* Transparent Engagement Models */}
      <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#070708]">
        <Container className="flex flex-col gap-14">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
              Transparent <span className="hero-orange">engagement models.</span>
            </h2>
            <p className="mt-3 text-base text-white/60 leading-relaxed">
              Whether you need a rapid, high-impact launchpad or a complex full-stack web application, we offer clear, transparent collaboration terms with zero hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ENGAGEMENT_MODELS.map((model) => {
              const Icon = model.icon;
              return (
                <div
                  key={model.title}
                  className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0c0c10] p-7 transition-all duration-300 hover:border-white/25 hover:bg-[#111116]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-orange">
                        <Icon className="size-5" />
                      </span>
                      <span className="text-[11px] font-medium text-white/50">
                        {model.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">{model.title}</h3>
                    <div className="mt-2 text-2xl font-bold tracking-tight text-white">
                      {model.price}
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-white/60">
                      {model.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/[0.06]">
                    <Link
                      href={model.href}
                      className="group inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-accent-orange transition-colors"
                    >
                      <span>{model.cta}</span>
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Initiate Project"
        title="Ready to engineer your new platform?"
        description="Share your requirements with our engineering team. We'll provide a technical architecture review and exact milestone quote."
      />
    </>
  );
}
