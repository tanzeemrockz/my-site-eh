import { Container } from "@/components/ui/container";

const STEPS = [
  {
    step: "01",
    phase: "Discovery & Architecture",
    description: "We audit your existing assets, unpack your business goals, and map out the exact structural and technical blueprint.",
    deliverable: "Technical Scope · Wireframes · Milestone Plan",
  },
  {
    step: "02",
    phase: "Design & Interface Dynamics",
    description: "Crafting a bespoke visual identity, high-fidelity responsive layouts, interactive components, and dynamic typography in Google Sans.",
    deliverable: "High-Fidelity Prototype · Design System",
  },
  {
    step: "03",
    phase: "High-Performance Build",
    description: "Developing with clean, semantic Next.js and TypeScript, integrating custom features, backend APIs, and rigorous performance optimizations.",
    deliverable: "Production Codebase · Responsive Verification",
  },
  {
    step: "04",
    phase: "Launch & Scaled Growth",
    description: "Deploying to edge infrastructure, configuring domain DNS, running Lighthouse audits, and providing ongoing engineering support.",
    deliverable: "Live Deployment · Source Handover · SEO Verification",
  },
];

export function ExecutionRoadmap() {
  return (
    <section className="relative py-28 border-b border-white/[0.08] bg-[#070708]">
      <Container className="flex flex-col gap-14 sm:gap-18">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
              How we execute <span className="hero-orange">from day one.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/60 leading-relaxed">
            A disciplined, milestone-driven workflow designed to eliminate guesswork, speed up turnaround, and ensure flawless delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s) => (
            <div
              key={s.step}
              className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0c0c10] p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#111116]"
            >
              <div>
                <span className="text-sm font-semibold text-accent-orange">
                  {s.step}
                </span>
                <h3 className="mt-4 text-xl font-medium text-white">
                  {s.phase}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-white/60 leading-relaxed">
                  {s.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08]">
                <span className="text-[11px] text-white/40 block">Key Output</span>
                <span className="text-xs text-white/70 font-medium mt-1 block">
                  {s.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
