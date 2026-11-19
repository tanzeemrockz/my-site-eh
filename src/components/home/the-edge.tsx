import { CheckCircle2, Zap, Lock, Users } from "lucide-react";
import { Container } from "@/components/ui/container";

const EDGES = [
  {
    icon: Users,
    title: "Direct Founder Engineering",
    description: "No account executives or layers of bureaucracy. You communicate directly with the builders responsible for your codebase.",
  },
  {
    icon: Zap,
    title: "Obsession with Sub-Second Speeds",
    description: "We tune asset payloads, image pipelines, and edge routes to guarantee load times that keep visitors engaged and Google algorithms satisfied.",
  },
  {
    icon: Lock,
    title: "100% Client Code & IP Ownership",
    description: "No proprietary lock-ins or closed-garden platforms. Every line of code, git repository, deployment script, and domain belongs entirely to you.",
  },
  {
    icon: CheckCircle2,
    title: "Transparent Fixed Milestones",
    description: "Predictable schedules, transparent pricing (₹7,000 starter package with 50% advance), and verified delivery before final handover.",
  },
];

export function TheCyberSlayerEdge() {
  return (
    <section className="relative py-28 border-b border-white/[0.08] bg-[#070708]">
      <Container className="flex flex-col gap-14 sm:gap-18">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
            Why teams choose to work with us.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/60">
            We operate as an agile product engineering wing for your business, turning complex digital requirements into sleek, dependable reality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EDGES.map((edge) => {
            const Icon = edge.icon;
            return (
              <div
                key={edge.title}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0c0c10] p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#111116]"
              >
                <div>
                  <div className="size-9 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center text-accent-orange mb-5">
                    <Icon className="size-4" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">
                    {edge.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                    {edge.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
