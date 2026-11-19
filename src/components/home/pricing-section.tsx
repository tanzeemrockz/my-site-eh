"use client";

import { Check, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

const FEATURES = [
  "Custom responsive layout tailored to your offer",
  "One-year domain and high-speed edge hosting",
  "Managed SSL certificate and deployment setup",
  "Direct WhatsApp inquiry routing with instant lead capture",
  "Complete client handover with zero lock-in",
];

export function PricingSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="flex flex-col gap-12 sm:gap-14">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="Simple Starting Point"
              title="One focused build,"
              highlight="one clear price."
              description="A polished, mobile-first website with the essentials your business needs to launch with authority. Everything built for speed, conversion, and longevity."
            />

            <div className="flex flex-col gap-4 pt-2">
              <div className="rounded-2xl border border-white/[0.08] bg-surface p-6">
                <span className="text-xs font-semibold tracking-wider uppercase text-white/50">
                  Connected Systems Included
                </span>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  We unite your offer, interface, inquiry path, and technical foundation into one dependable engine. Your domain, hosting, source code, and credentials remain 100% yours.
                </p>
              </div>
            </div>
          </div>

          <div className="card relative overflow-hidden p-8 sm:p-10 border border-white/[0.12] bg-surface/90 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  CyberSlayerCorpz Starter Build
                </h3>
              </div>
              <span className="grid size-9 place-items-center rounded-full bg-accent-orange/10 text-accent-orange">
                <Check className="size-5" />
              </span>
            </div>

            <div className="my-7 flex items-baseline gap-2">
              <span className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                ₹7,000
              </span>
              <span className="text-sm text-fg-muted">complete setup</span>
            </div>
            <p className="text-xs text-white/50 -mt-4 mb-7">
              ₹3,500 advance to begin engineering. Balance upon verified launch.
            </p>

            <ul className="flex flex-col gap-3.5 border-t border-white/[0.06] pt-6 pb-8">
              {FEATURES.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-fg-muted">
                  <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-emerald-400/10 text-emerald-400">
                    <Check className="size-3" strokeWidth={2.5} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Button href="/contact" variant="primary" className="w-full py-3.5 text-base">
              Start your build
              <ArrowUpRight className="size-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
