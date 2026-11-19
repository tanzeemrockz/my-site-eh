import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { DitherField } from "@/components/ui/dither-field";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden py-32 text-center">
      <DitherField
        tone="grey"
        className="inset-0 opacity-40"
        shape={[0.5, 0.5, 1, 1]}
        bias={0.4}
      />
      <div className="hero-orbit" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />

      <Container className="relative z-10 flex flex-col items-center gap-6">
        <span className="text-xs uppercase tracking-widest text-accent-orange font-semibold">
          404 · Route Not Found
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          This page took a <span className="hero-orange">wrong turn.</span>
        </h1>
        <p className="max-w-md text-base leading-relaxed text-fg-muted">
          The page you&apos;re looking for moved, was renamed, or was never deployed.
        </p>
        <div className="mt-4">
          <Button href="/" variant="primary" className="px-6 py-3">
            <ArrowLeft className="size-4" />
            Back to homepage
          </Button>
        </div>
      </Container>
    </section>
  );
}
