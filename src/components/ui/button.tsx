import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export function Button({ href, variant = "primary", className, children, onClick }: ButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200",
        variant === "primary" &&
          "bg-white !text-[#08080a] hover:bg-neutral-200 shadow-sm",
        variant === "secondary" &&
          "border border-white/15 bg-white/[0.04] !text-white backdrop-blur-md hover:border-white/30 hover:bg-white/[0.08]",
        className
      )}
    >
      {children}
    </Link>
  );
}
