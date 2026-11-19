import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PROJECTS } from "@/data/projects";

export function SelectedWorkGrid() {
  const featuredProjects = PROJECTS.slice(0, 4);

  return (
    <section id="work-showcase" className="relative py-28 border-b border-white/[0.08] bg-[#070708]">
      <Container className="flex flex-col gap-12 sm:gap-16">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
              Selected <span className="hero-orange">work.</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm sm:text-base text-white/60">
              Web applications, digital storefronts, and performance systems built to convert visitors and outpace the competition.
            </p>
          </div>

          <Link
            href="/work"
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-xs sm:text-sm font-medium text-white transition-all hover:border-white/30 hover:bg-white/[0.08]"
          >
            Explore all {PROJECTS.length} projects
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredProjects.map((project, idx) => (
            <article
              key={project.slug}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d11] p-6 sm:p-8 transition-all duration-300 hover:border-white/25 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center justify-between gap-4 mb-8">
                <span className="text-xs text-white/40 font-medium">
                  0{idx + 1} · {project.category}
                </span>
                {project.clientUrl && (
                  <a
                    href={project.clientUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors"
                  >
                    <span>Visit Live</span>
                    <ExternalLink className="size-3" />
                  </a>
                )}
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white group-hover:text-accent-orange transition-colors">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.services.slice(0, 3).map((service) => (
                    <span
                      key={service}
                      className="px-2.5 py-1 rounded-md border border-white/10 bg-white/[0.03] text-[11px] text-white/60"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-medium text-white/70 hover:text-white group-hover:translate-x-1 transition-all"
                >
                  Case Study →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
