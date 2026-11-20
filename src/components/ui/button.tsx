import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  onClick,
  disabled = false,
  type = "button",
  target,
  rel,
}: ButtonProps) {
  const commonClasses = cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
    variant === "primary" &&
      "bg-white !text-[#08080a] hover:bg-neutral-200 shadow-sm",
    variant === "secondary" &&
      "border border-white/15 bg-white/[0.04] !text-white backdrop-blur-md hover:border-white/30 hover:bg-white/[0.08]",
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={commonClasses}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={commonClasses}
    >
      {children}
    </button>
  );
}
