import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { DitherField } from "@/components/ui/dither-field";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/contact/contact-form";
import { COMPANY_CONTACT } from "@/data/company";
import { MessageSquare, Mail, MapPin, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | CyberSlayerCorpz",
  description: "Initiate your project with CyberSlayerCorpz. Direct founder access, sub-second edge builds, and full client sovereignty.",
};

function InstagramIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function GithubIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function ContactPage() {
  const whatsappUrl = "https://wa.me/917667271516?text=Hi%20CyberSlayerCorpz%2C%20I%20want%20to%20discuss%20a%20project";

  return (
    <section className="relative overflow-hidden pt-44 pb-24 sm:pt-52 sm:pb-32">
      <DitherField
        tone="grey"
        interactive
        className="inset-x-0 top-0 h-[520px]"
        shape={[0.78, 0, 0.5, 0.7]}
      />

      <Container className="relative grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Initiate Build"
            title="Direct engineering collaboration."
            highlight="Zero friction."
            description="Have a new project or looking to upgrade your digital architecture? Share your requirements below, or contact us directly on WhatsApp for an immediate technical assessment."
            className="[&_h2]:text-5xl sm:[&_h2]:text-6xl lg:[&_h2]:text-7xl"
          />
          <div className="rounded-2xl border border-white/10 bg-[#0c0c10] p-6 sm:p-9">
            <ContactForm />
          </div>
        </div>

        <div className="flex flex-col gap-6 self-start">
          {/* Direct WhatsApp Callout Card */}
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-7 transition-all hover:border-emerald-500/30">
            <h3 className="text-lg font-semibold text-white">Prefer instant messaging?</h3>
            <p className="mt-1 text-xs sm:text-sm leading-relaxed text-white/60">
              Skip the form and chat directly with our engineering founders. Average response time: under 1 hour.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-black transition-all hover:bg-emerald-400"
            >
              <MessageSquare className="size-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Direct channels card */}
          <div className="rounded-2xl border border-white/10 bg-[#0c0c10] flex flex-col gap-5 p-7">
            <span className="text-sm font-semibold tracking-wide text-white">Reach us directly</span>

            <div className="flex flex-col gap-4 border-t border-white/[0.08] pt-4">
              <div className="flex items-center gap-3">
                <span className="grid size-8 place-items-center rounded-lg border border-white/10 bg-white/[0.02] text-white/60">
                  <Mail className="size-4" />
                </span>
                <div className="flex flex-col">
                  <span className="text-[11px] text-white/40 uppercase tracking-wider">Email</span>
                  <a href={`mailto:${COMPANY_CONTACT.email}`} className="text-sm text-white hover:text-accent-orange transition-colors">
                    {COMPANY_CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="grid size-8 place-items-center rounded-lg border border-white/10 bg-white/[0.02] text-white/60">
                  <InstagramIcon className="size-4" />
                </span>
                <div className="flex flex-col">
                  <span className="text-[11px] text-white/40 uppercase tracking-wider">Instagram</span>
                  <a href={COMPANY_CONTACT.instagram} target="_blank" rel="noreferrer" className="text-sm text-white hover:text-accent-orange transition-colors">
                    @cyberslayercorpz
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="grid size-8 place-items-center rounded-lg border border-white/10 bg-white/[0.02] text-white/60">
                  <GithubIcon className="size-4" />
                </span>
                <div className="flex flex-col">
                  <span className="text-[11px] text-white/40 uppercase tracking-wider">GitHub</span>
                  <a href={COMPANY_CONTACT.github} target="_blank" rel="noreferrer" className="text-sm text-white hover:text-accent-orange transition-colors">
                    github.com/tanzeemrockz
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="grid size-8 place-items-center rounded-lg border border-white/10 bg-white/[0.02] text-white/60">
                  <MapPin className="size-4" />
                </span>
                <div className="flex flex-col">
                  <span className="text-[11px] text-white/40 uppercase tracking-wider">Base</span>
                  <span className="text-sm text-white/80">{COMPANY_CONTACT.location}</span>
                </div>
              </div>
            </div>

            <div className="mt-2 flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-xs text-white/50">
              <ShieldCheck className="size-4 shrink-0 text-emerald-400" />
              <span>100% Client Ownership on all delivered software.</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
