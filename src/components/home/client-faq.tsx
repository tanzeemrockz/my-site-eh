import { Container } from "@/components/ui/container";

const FAQS = [
  {
    q: "How long does a typical build take?",
    a: "Standard bespoke web projects and business platforms are typically scoped, designed, and deployed in 1 to 2 weeks. Custom applications and complex platforms depend on feature depth, with milestone sprints defined clearly up front.",
  },
  {
    q: "What is your payment structure?",
    a: "Our starter package begins at ₹7,000 with a transparent 50% advance (₹3,500) to commence development, and the remaining 50% balance due upon your review and approved launch.",
  },
  {
    q: "Do I truly get 100% ownership of the code?",
    a: "Yes, absolutely. We hand over the complete Git repository, production build scripts, assets, and DNS configuration. You are never locked into proprietary subscriptions or agency silos.",
  },
  {
    q: "What stack do you build with?",
    a: "We specialize in modern, high-speed technologies: Next.js, React 19, TypeScript, Tailwind CSS, Node.js, and edge deployment platforms like Vercel and Cloudflare.",
  },
];

export function ClientFAQ() {
  return (
    <section className="relative py-28 border-b border-white/[0.08] bg-[#070708]">
      <Container className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
        <div>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
            Frequently asked questions.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/60 leading-relaxed">
            Have a different question or specific technical requirement? Reach out directly and we’ll answer within a few hours.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-white/[0.08]">
          {FAQS.map((item, idx) => (
            <details key={idx} className="group py-6 first:pt-0 last:pb-0">
              <summary className="flex cursor-pointer list-none items-center justify-between text-base sm:text-lg font-medium text-white transition-colors group-hover:text-accent-orange">
                <span>{item.q}</span>
                <span className="ml-4 flex size-6 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/60 transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-white/60 leading-relaxed pr-8">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
