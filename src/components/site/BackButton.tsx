import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export function BackButton({ to = "/", label = "Back" }: { to?: string; label?: string } = {}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname === "/") return null;

  return (
    <div className="sticky top-[72px] z-30 w-full">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Link
          to={to}
          aria-label={label}
          className="group mt-4 inline-flex items-center gap-2 rounded-full border border-white/40 bg-background/50 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)] transition-colors hover:border-pink-strong hover:text-pink-strong"
        >
          <ArrowLeft
            size={14}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          {label}
        </Link>
      </div>
    </div>
  );
}
