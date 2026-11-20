import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redirecting to CyberSlayerCorpz Club...",
  description: "Redirecting to club.cyberslayercorpz.dev",
};

export default function ClubPage() {
  redirect("https://club.cyberslayercorpz.dev");
}
