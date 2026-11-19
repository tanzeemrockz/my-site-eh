import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Globe, Lock, Sparkles, MessageCircle, Zap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { CTASection } from "@/components/shared/cta-section";

export const metadata: Metadata = {
  title: "Work | CyberSlayerCorpz",
  description:
    "Explore our production deployments and client showcases, including our first client Nizam Butterfly (nizambutterfly.com) and the CyberSlayerCorpz demo directory.",
};

export default function WorkPage() {
  const demoUrl = "https://demo.cyberslayercorpz.dev";

  return (
    <>
      <PageHero
        eyebrow="Work & Case Studies"
        title="Live client builds &"
        highlight="deployments."
        description="From our first commercial production release for Nizam Butterfly to our unified demo sandbox, explore how we build software that performs."
      />

      {/* Featured Production Showcase: Nizam Butterfly */}
      <section className="py-20 sm:py-28 border-b border-white/[0.08] bg-[#070708]">
        <Container className="flex flex-col gap-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent-orange/20 bg-accent-orange/10 px-3.5 py-1 text-xs font-semibold text-accent-orange tracking-wider uppercase mb-3">
                <Sparkles className="size-3" />
                <span>Featured Client Milestone</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white">
                Nizam Butterfly
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-white/60">
                Official web platform &amp; direct B2B wholesale ordering portal for South India&apos;s food manufacturer.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/work/nizambutterfly"
                className="group inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/80 transition-all hover:border-white/30 hover:bg-white/[0.08] hover:text-white"
              >
                <span>Read Case Study</span>
                <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href="https://nizambutterfly.com"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-semibold text-black transition-all hover:bg-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="size-3.5 transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Nizam Butterfly Card */}
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c10] shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
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
              <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider">
                ● Live Production
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
              <div className="lg:col-span-6 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="grid size-12 place-items-center rounded-xl border border-white/10 bg-white/[0.04] p-2">
                    <Image
                      src="/work/nizambutterfly-logo.png"
                      alt="Nizam Butterfly Logo"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Nizam Food Products</h3>
                    <span className="text-xs text-white/50">Pudukkottai, Tamil Nadu · Est. 2006</span>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-white/70">
                  Engineered an edge-accelerated digital storefront and direct WhatsApp B2B inquiry engine.
                  Showcases their signature ready-roasted vermicelli line, 7-minute biriyani kits, and pure ragi pasta
                  with zero order friction.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
                    <div className="flex items-center gap-2 text-accent-orange text-xs font-semibold mb-1">
                      <MessageCircle className="size-3.5" />
                      <span>B2B WhatsApp</span>
                    </div>
                    <span className="text-xs text-white/60">Automated wholesale inquiry routing</span>
                  </div>
                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
                    <div className="flex items-center gap-2 text-accent-blue text-xs font-semibold mb-1">
                      <Zap className="size-3.5" />
                      <span>Edge Performance</span>
                    </div>
                    <span className="text-xs text-white/60">Sub-second load times across South India</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#121217] to-[#08080a]">
                <Image
                  src="/work/nizambutterfly.jpg"
                  alt="Nizam Butterfly Cover"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Demo Directory Section */}
      <section className="py-20 sm:py-28 border-b border-white/[0.08]">
        <Container className="flex flex-col items-center">
          <div className="w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c10] shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-white/20">
            {/* Browser window chrome */}
            <div className="flex h-11 items-center justify-between border-b border-white/[0.08] bg-black/60 px-4 sm:px-6">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-red-500/80" />
                <span className="size-3 rounded-full bg-yellow-500/80" />
                <span className="size-3 rounded-full bg-emerald-500/80" />
              </div>

              <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-1 text-xs text-white/60">
                <Lock className="size-3 text-emerald-400" />
                <span className="font-medium text-white/80">demo.cyberslayercorpz.dev</span>
              </div>

              <div className="w-12" />
            </div>

            {/* Showcase preview area */}
            <div className="relative flex flex-col items-center p-8 sm:p-14 text-center">
              <div className="grid size-16 place-items-center rounded-2xl border border-white/10 bg-white/[0.03] text-accent-orange mb-6 shadow-inner">
                <Globe className="size-8" />
              </div>

              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white">
                CyberSlayerCorpz Demo Directory
              </h2>

              <p className="mt-3 max-w-md text-sm sm:text-base leading-relaxed text-white/60">
                Access live interactive client showcases, staging prototypes, and production builds in one unified environment.
              </p>

              <div className="mt-8">
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all hover:bg-white/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]"
                >
                  <span>Open demo.cyberslayercorpz.dev</span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
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
