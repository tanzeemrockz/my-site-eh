import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { InteractiveLab } from "@/components/home/interactive-lab";
import { TanzeemProjects } from "@/components/home/tanzeem-projects";
import { TanzeemQuotes } from "@/components/home/tanzeem-quotes";
import { TanzeemFleet } from "@/components/home/tanzeem-fleet";
import { CTASection } from "@/components/shared/cta-section";

export const metadata: Metadata = {
  title: "Mohamed Tanzeem I | Founder at CyberSlayerCorpz | tanzeem.xyz",
  description:
    "Personal engineering portfolio of Mohamed Tanzeem I. Founder at CyberSlayerCorpz, developing deterministic AI (DQM), high-speed in-browser utilities, and Formula 1 enthusiast.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <InteractiveLab />
      <TanzeemProjects />
      <TanzeemQuotes />
      <TanzeemFleet />
      <CTASection
        eyebrow="Direct Connection"
        title="Ready to build something that slays?"
        description="Whether you want to discuss deterministic AI architectures, in-browser WASM tools, or race telemetry, let us connect."
      />
    </>
  );
}
