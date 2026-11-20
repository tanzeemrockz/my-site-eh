import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redirecting to CyberSlayerCorpz Demo Directory...",
  description: "Redirecting to demo.cyberslayercorpz.dev",
};

export default function DemoPage() {
  redirect("https://demo.cyberslayercorpz.dev");
}
