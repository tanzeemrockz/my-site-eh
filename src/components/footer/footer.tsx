import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { BrandLogo } from "@/components/shared/brand-logo";

const FOOTER_COLUMNS = [
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/services" },
      { label: "App Development", href: "/services" },
      { label: "Software Systems", href: "/services" },
      { label: "E-commerce & Catalogs", href: "/services" },
      { label: "Digital Growth & SEO", href: "/services" },
      { label: "Automation", href: "/services" },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "Work", href: "/work" },
      { label: "Process", href: "/process" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-black/40">
      <Container className="relative grid grid-cols-1 gap-12 pt-20 pb-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <BrandLogo />
          <p className="max-w-xs text-sm leading-relaxed text-white/50">
            Independent Software Studio. Building modern webpages, digital
            products, and inquiry systems for growing businesses.
          </p>
          <div className="mt-2">
            <a
              href="mailto:hello@cyberslayercorpz.dev"
              className="text-xs text-white/40 transition-colors hover:text-white"
            >
              hello@cyberslayercorpz.dev
            </a>
          </div>
        </div>

        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title} className="flex flex-col gap-3">
            <span className="mb-1 text-sm font-semibold tracking-wide text-white">
              {col.title}
            </span>
            {col.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="w-fit text-sm text-fg-muted transition-colors hover:text-fg"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}

        <div className="flex flex-col gap-3">
          <span className="mb-1 text-sm font-semibold tracking-wide text-white">
            Connect
          </span>
          <a
            href="https://wa.me/917667271516?text=Hi%20CyberSlayerCorpz%2C%20I%20want%20to%20discuss%20a%20project"
            target="_blank"
            rel="noreferrer"
            className="group flex w-fit items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
          >
            WhatsApp
            <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="https://www.instagram.com/cyberslayercorpz"
            target="_blank"
            rel="noreferrer"
            className="group flex w-fit items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
          >
            Instagram
            <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="https://github.com/tanzeemrockz"
            target="_blank"
            rel="noreferrer"
            className="group flex w-fit items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
          >
            GitHub
            <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="https://demo.cyberslayercorpz.dev"
            target="_blank"
            rel="noreferrer"
            className="group flex w-fit items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
          >
            Demo Directory
            <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </Container>

      <div className="border-t border-white/[0.04] py-6">
        <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row text-xs text-white/40">
          <span>&copy; {new Date().getFullYear()} CyberSlayerCorpz. All rights reserved.</span>
          <span className="text-white/30">
            Handcrafted with precision.
          </span>
        </Container>
      </div>
    </footer>
  );
}
