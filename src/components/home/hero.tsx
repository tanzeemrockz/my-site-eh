import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DitherField } from "@/components/ui/dither-field";
import { SelectedWord } from "@/components/home/hero-selected-word";
import PatternWaves from "@/components/pattern-waves";
import TechText from "@/components/tech-text";

const SERVICES = [
  "Deterministic AI (DQM)",
  "In-Browser WASM Tools",
  "AssetSlayer",
  "LangSlayer",
  "Vintage 2009 Silicon",
  "Formula 1 Telemetry",
  "CyberSlayerCorpz",
];

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-between overflow-hidden bg-bg">
      {/* Background: WebGL Silk PatternWaves + Dither Grain + Radial Ambience */}
      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 opacity-35">
          <PatternWaves
            preset="silk"
            color="#8ecbff"
            backgroundColor="#070708"
            fade="edges"
            interactive
            cursorSize={50}
            cursorStrength={0.45}
            spacing={12}
            depth={0.7}
            shine={0.7}
            contrast={1.1}
            speed={0.28}
            opacity={0.35}
            intro
            paused={false}
          />
        </div>

        {/* Quiet grain across the whole canvas */}
        <DitherField
          tone="grey"
          className="inset-0 opacity-25"
          shape={[0.5, 0.5, 1.1, 1.1]}
          bias={0.36}
        />

        {/* Vignette pool behind copy */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_45%,#07070a_45%,transparent_100%)]" />

        {/* Dual rotating 3D orbits */}
        <div className="hero-orbit" />
        <div className="hero-orbit hero-orbit-two" />

        {/* Subtle grid texture */}
        <div className="hero-grid-texture" />

        {/* Grain rising from bottom */}
        <div className="absolute inset-x-0 bottom-0 h-[40%] [mask-image:linear-gradient(to_bottom,transparent,#000_65%)]">
          <DitherField
            interactive
            className="inset-0 opacity-40"
            shape={[0.5, 1, 0.8, 1.05]}
            bias={0.55}
          />
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-5 pt-28 pb-8 text-center sm:px-8">
        {/* Interactive TechText Canvas */}
        <div className="w-full flex justify-center mb-3">
          <TechText
            className="hero-tech-text"
            text="Mohamed Tanzeem I"
            fontSize={32}
            color="#ffffff"
            accentColor="#ff8739"
            reach={72}
            softness={0.68}
            specks={8}
            selection={false}
            labels={false}
            draggable={false}
            sweep
            speed={0.8}
          />
        </div>

        {/* Signature Headline blending SelectedWord collaborator frame + radiant glow */}
        <h1 className="text-3xl leading-[1.12] font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-[4.25rem]">
          I engineer software &amp; systems that{" "}
          <SelectedWord>
            <span className="hero-orange font-bold">slay</span>
          </SelectedWord>{" "}
          the others.
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed font-normal text-white/70">
          Founder at <strong className="text-white">CyberSlayerCorpz</strong>. Developing deterministic AI architectures (DQM), high-speed in-browser utilities (AssetSlayer, LangSlayer), and stress-testing software against vintage 2009 hardware. Passionate about Formula 1.
        </p>

        {/* Action CTAs */}
        <div className="mt-7 flex w-full flex-col sm:flex-row items-center justify-center gap-3.5 sm:w-auto">
          <Button href="#work-showcase" variant="primary" className="px-6 py-3 text-sm">
            Explore my work
            <ArrowUpRight className="size-4" />
          </Button>
          <Button href="/uses" variant="secondary" className="px-6 py-3 text-sm">
            Inspect my setup (/uses)
            <ArrowUpRight className="size-4" />
          </Button>
          <Button href="/contact" variant="secondary" className="px-6 py-3 text-sm">
            Get in touch
            <ArrowUpRight className="size-4" />
          </Button>
        </div>

        {/* Trust guarantee row */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs text-white/60">
          <span className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-accent-blue" />
            Founder @ CyberSlayerCorpz
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-accent-orange" />
            Harvard CS50x Certified
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            F1 Fanatic (Verstappen &amp; Silver Arrows)
          </span>
        </div>
      </div>

      {/* Services Strip */}
      <div className="w-full border-t border-white/[0.08] bg-[#070708]/85 backdrop-blur-md relative z-20">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
          <div className="flex items-center gap-3.5 sm:gap-6 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden text-xs sm:text-[13px] text-white/70 font-normal">
            <span className="text-white/30 select-none">•</span>
            {SERVICES.map((service) => (
              <span key={service} className="inline-flex items-center gap-3.5 sm:gap-6 shrink-0">
                <span className="hover:text-white transition-colors cursor-default">
                  {service}
                </span>
                <span className="text-white/30 select-none">•</span>
              </span>
            ))}
          </div>

          <a
            href="#work-showcase"
            className="hidden sm:inline-flex shrink-0 items-center gap-1.5 text-xs text-white/60 hover:text-white transition-colors cursor-pointer ml-4"
          >
            <span>Scroll</span>
            <ArrowDown className="size-3 text-white/60" />
          </a>
        </div>
      </div>
    </section>
  );
}
