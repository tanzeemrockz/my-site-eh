"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,
  Lock,
  MessageCircle,
  Zap,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Layers,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const HIGHLIGHTS = [
  {
    icon: MessageCircle,
    title: "Direct WhatsApp B2B Wholesale Routing",
    description:
      "Automated lead capture routing supermarket and distributor inquiries with pre-populated SKU quantities straight to the sales desk.",
    stat: "Instant Inquiries",
  },
  {
    icon: Zap,
    title: "Sub-Second Edge Performance",
    description:
      "Zero-bloat architecture deployed on the Vercel Edge Network, ensuring instant mobile response times for shop owners in the field.",
    stat: "< 0.8s TTFB",
  },
  {
    icon: TrendingUp,
    title: "Structured Schema & SEO Ranking",
    description:
      "Rich JSON-LD Organization, Product, and ItemList schema graphs optimized for South Indian food and grocery search discovery.",
    stat: "100% SEO Graph",
  },
  {
    icon: ShieldCheck,
    title: "100% Independent Asset Ownership",
    description:
      "Complete client source code handover, zero proprietary lock-in, and full administrative domain control on nizambutterfly.com.",
    stat: "Zero Lock-In",
  },
];

export function ClientSpotlight() {
  return (
    <section className="relative py-24 sm:py-32 border-b border-white/[0.08] bg-[#070708] overflow-hidden">
      {/* Subtle background ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-accent-orange/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-accent-blue/10 blur-[120px]"
      />

      <Container className="relative flex flex-col gap-12 sm:gap-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-orange/20 bg-accent-orange/10 px-4 py-1.5 text-xs font-semibold text-accent-orange tracking-wider uppercase mb-5">
            <Sparkles className="size-3.5" />
            <span>First Client Production Release</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
            The digital engine behind{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange via-[#ffa96b] to-accent-blue">
              Nizam Butterfly
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/60">
            Our first client milestone was{" "}
            <strong className="text-white font-medium">Nizam Food Products</strong>, an established South
            Indian food manufacturer in Pudukkottai, Tamil Nadu. We engineered their official web
            platform at{" "}
            <a
              href="https://nizambutterfly.com"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-accent-orange underline underline-offset-4 transition-colors"
            >
              nizambutterfly.com
            </a>{" "}
            to drive direct wholesale inquiries, showcase ready-roasted vermicelli products, and eliminate
            traditional order friction.
          </p>
        </div>

        {/* Main Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Interactive Browser Mockup (7 cols) */}
          <div className="lg:col-span-7 flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c10] shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-white/20">
            {/* Browser Window Chrome */}
            <div className="flex h-11 items-center justify-between border-b border-white/[0.08] bg-black/70 px-4 sm:px-6">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-red-500/80" />
                <span className="size-3 rounded-full bg-yellow-500/80" />
                <span className="size-3 rounded-full bg-emerald-500/80" />
              </div>

              <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs text-white/70">
                <Lock className="size-3 text-emerald-400" />
                <span className="font-mono text-white/90">nizambutterfly.com</span>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-400 uppercase tracking-wider">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="hidden sm:inline">Edge Live</span>
              </div>
            </div>

            {/* Mockup Body with Product Artwork & Live Actions */}
            <div className="relative flex flex-col justify-between p-6 sm:p-10 flex-grow bg-gradient-to-b from-[#101015] via-[#0d0d12] to-[#08080a]">
              {/* Top Banner inside Mockup */}
              <div className="flex items-center justify-between gap-4 border-b border-white/[0.06] pb-5">
                <div className="flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] p-1.5">
                    <Image
                      src="/work/nizambutterfly-logo.png"
                      alt="Nizam Butterfly Logo"
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white tracking-wide block">
                      Nizam Butterfly
                    </span>
                    <span className="text-[11px] text-white/50 block">
                      Nizam Food Products · Est. 2006
                    </span>
                  </div>
                </div>

                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-accent-orange">
                  FMCG Manufacturing
                </span>
              </div>

              {/* Visual Showcase Centerpiece */}
              <div className="relative my-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
                <div className="relative size-44 sm:size-52 shrink-0 drop-shadow-[0_15px_35px_rgba(255,138,61,0.25)] transition-transform duration-500 hover:scale-105">
                  <Image
                    src="/work/nizambutterfly-classic.png"
                    alt="Nizam Butterfly Ready-Roasted Vermicelli"
                    fill
                    sizes="(max-width: 640px) 176px, 208px"
                    className="object-contain"
                  />
                </div>

                <div className="flex flex-col gap-2 max-w-xs">
                  <span className="text-xs font-semibold text-accent-orange uppercase tracking-wider">
                    Featured Product System
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                    Ready-Roasted Vermicelli &amp; 7-Min Biriyani Kits
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Tactile food showcases engineered for seamless retail distributor browsing and
                    instant bulk quotation requests.
                  </p>
                </div>
              </div>

              {/* Bottom Action Bar inside Mockup */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/[0.06]">
                <a
                  href="https://nizambutterfly.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-2.5 text-xs font-semibold text-black transition-all hover:bg-white/90 hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]"
                >
                  <span>Launch Live Platform</span>
                  <ExternalLink className="size-3.5 transition-transform group-hover:scale-110" />
                </a>

                <Link
                  href="/work/nizambutterfly"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-xs font-medium text-white/80 transition-all hover:border-white/30 hover:bg-white/[0.08] hover:text-white"
                >
                  <span>Read Case Study</span>
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Highlights & Metrics Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {HIGHLIGHTS.map((h) => {
              const Icon = h.icon;
              return (
                <div
                  key={h.title}
                  className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0c0c10] p-5 sm:p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#111116]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="size-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-accent-orange shrink-0 group-hover:bg-accent-orange/10 transition-colors">
                      <Icon className="size-5" />
                    </div>
                    <span className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] font-mono font-medium text-white/70">
                      {h.stat}
                    </span>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-white tracking-tight group-hover:text-accent-orange transition-colors">
                      {h.title}
                    </h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-white/60">
                      {h.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footnote Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] px-6 py-4 text-xs text-white/60">
          <div className="flex items-center gap-2">
            <Layers className="size-4 text-accent-blue" />
            <span>
              Tech Stack: <strong className="text-white font-medium">Next.js · Tailwind CSS · Vercel Edge · WhatsApp Business Hook</strong>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-white/40">Status: In Active Commercial Production</span>
            <a
              href="https://nizambutterfly.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-white hover:text-accent-orange font-medium transition-colors"
            >
              <span>nizambutterfly.com</span>
              <ExternalLink className="size-3" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
