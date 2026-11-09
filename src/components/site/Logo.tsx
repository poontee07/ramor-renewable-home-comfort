import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={cn("size-10", className)}>
      <rect width="64" height="64" rx="16" className="fill-pine" />
      <path
        d="M32 10c6 9 14 15 14 26a14 14 0 0 1-28 0c0-6 3-10 6-13 0 5 3 8 6 8-3-7 0-15 2-21z"
        className="fill-ember"
      />
      <path
        d="M14 46c6-3 12-3 18 0s12 3 18 0"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
        className="stroke-pine-foreground"
      />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <LogoMark />
      <span className="leading-none">
        <span
          className={cn(
            "block font-display text-2xl font-semibold tracking-tight",
            light ? "text-pine-foreground" : "text-foreground",
          )}
        >
          Ramor
        </span>
        <span
          className={cn(
            "mt-1 block text-[0.62rem] font-bold uppercase tracking-[0.2em]",
            light ? "text-pine-muted" : "text-muted-foreground",
          )}
        >
          Renewable Heating &amp; Plumbing
        </span>
      </span>
    </span>
  );
}
