"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/amplitude";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  trackingLocation?: string;
  trackingLabel?: string;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({
  children,
  href,
  variant = "primary",
  trackingLocation,
  trackingLabel,
  className = "",
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-8 py-4 font-body font-semibold uppercase tracking-[0.2em] text-sm transition-colors duration-300 rounded-none";

  const variants = {
    primary: "bg-rose text-noir hover:bg-blanc",
    secondary: "bg-transparent text-blanc border border-gris hover:bg-blanc/10",
  };

  const handleClick = () => {
    if (trackingLocation) {
      trackEvent("cta_clicked", {
        location: trackingLocation,
        label: trackingLabel || (typeof children === "string" ? children : ""),
      });
    }
    onClick?.();
  };

  const classes = `${base} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
