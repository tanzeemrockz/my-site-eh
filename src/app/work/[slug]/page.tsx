import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowUpRight, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/container";
import { DitherField } from "@/components/ui/dither-field";
import { Eyebrow } from "@/components/ui/section-heading";
import { CTASection } from "@/components/shared/cta-section";
import { TechnologyBadge } from "@/components/shared/technology-badge";
import { PROJECTS } from "@/data/projects";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} | CyberSlayerCorpz`,
    description: project.description,
  };
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm font-semibold tracking-wider text-white/50 uppercase">
      {children}
    </h2>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const story = [
    { label: "The Challenge", text: project.problem },
    { label: "The Approach", text: project.approach },
    { label: "The Solution", text: project.solution },
  ].filter((s): s is { label: string; text: string } => Boolean(s.text));

  return (
    <>
      <section className="relative overflow-hidden pt-44 pb-14 sm:pt-52">
        <DitherField
          tone="grey"
          interactive
          className="inset-x-0 top-0 h-[520px]"
          shape={[0.78, 0, 0.5, 0.7]}
        />
        <Container className="relative flex flex-col gap-6">
          <Eyebrow>{project.services.join(" · ")}</Eyebrow>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              {project.name}
            </h1>
            {project.clientUrl && (
              <a
                href={project.clientUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-5 py-2.5 text-xs sm:text-sm font-medium text-white transition-all hover:border-white/40 hover:bg-white/[0.12]"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="size-3.5 transition-transform group-hover:scale-110" />
              </a>
            )}
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {project.description}
          </p>
          <div className="mt-4 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] sm:grid-cols-3">
            {[
              { label: "Industry", value: project.industry },
              { label: "Services", value: project.services.join(", ") },
              ...(project.timeline ? [{ label: "Timeline", value: project.timeline }] : [{ label: "Architecture", value: "Custom Edge Deployment" }]),
            ].map((meta) => (
              <div key={meta.label} className="flex flex-col gap-1 bg-black/80 px-6 py-5 backdrop-blur-md">
                <span className="text-xs font-medium text-white/40 uppercase tracking-wider">
                  {meta.label}
                </span>
                <span className="text-sm text-white font-medium">{meta.value}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-12">
        <Container>
          <div className="rounded-2xl border border-white/10 bg-[#0c0c10] p-2.5">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[14px] bg-[#070708]">
              <Image
                src={project.coverImage}
                alt={`${project.name} preview`}
                fill
                priority
                sizes="(min-width: 1280px) 1240px, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </Container>
      </section>

      {story.length > 0 && (
        <section className="py-20 sm:py-24 border-b border-white/[0.08]">
          <Container className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {story.map((s, i) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-[#0c0c10] flex flex-col gap-4 p-8 transition-all hover:border-white/20"
              >
                <span className="text-xs font-semibold text-accent-orange">
                  0{i + 1}
                </span>
                <SectionLabel>{s.label}</SectionLabel>
                <p className="text-sm leading-relaxed text-white/70">{s.text}</p>
              </div>
            ))}
          </Container>
        </section>
      )}

      {project.features && project.features.length > 0 && (
        <section className="py-20 sm:py-24 border-b border-white/[0.08]">
          <Container className="flex flex-col gap-8">
            <SectionLabel>Architecture & Key Capabilities</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features.map((feature, i) => (
                <div
                  key={feature}
                  className="rounded-2xl border border-white/10 bg-[#0c0c10] p-6 flex flex-col gap-3 transition-all hover:border-white/20"
                >
                  <div className="flex items-center gap-2 text-accent-orange text-xs font-semibold uppercase tracking-wider">
                    <Check className="size-4" />
                    <span>Capability 0{i + 1}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-white/80">{feature}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {project.results && (
        <section className="py-16 sm:py-20 border-b border-white/[0.08] bg-white/[0.01]">
          <Container>
            <div className="rounded-2xl border border-accent-orange/20 bg-accent-orange/[0.04] p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex flex-col gap-2 max-w-xl">
                <span className="text-xs font-semibold text-accent-orange uppercase tracking-wider">
                  Verified Outcome
                </span>
                <p className="text-base sm:text-lg text-white font-medium leading-relaxed">
                  {project.results}
                </p>
              </div>
              {project.clientUrl && (
                <a
                  href={project.clientUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-xs sm:text-sm font-semibold text-black transition-all hover:bg-white/90 hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]"
                >
                  <span>Verify Live Platform</span>
                  <ExternalLink className="size-4 transition-transform group-hover:scale-110" />
                </a>
              )}
            </div>
          </Container>
        </section>
      )}

      {project.technology && project.technology.length > 0 && (
        <section className="py-20 sm:py-24 border-b border-white/[0.08]">
          <Container className="flex flex-col gap-6">
            <SectionLabel>Technology Stack</SectionLabel>
            <div className="flex flex-wrap gap-3">
              {project.technology.map((tech) => (
                <TechnologyBadge key={tech} name={tech} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection
        eyebrow="Initiate Project"
        title="Ready to build a similar platform?"
        description="Tell us what you're trying to build. We'll help you engineer the right architecture and execute with speed."
      />
    </>
  );
}
