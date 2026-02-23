interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full bg-vert px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.2em] text-blanc ${className}`}
    >
      {children}
    </span>
  );
}
