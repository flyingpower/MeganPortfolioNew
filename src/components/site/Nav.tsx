import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/cv", label: "CV" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/50 backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-background/40">
      <div className="flex items-center justify-between pl-4 pr-6 py-4 md:pl-6 md:pr-10">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            aria-label="Home"
            className="flex items-center"
            onClick={() => setOpen(false)}
          >
            <svg viewBox="0 0 32 32" className="h-9 w-9 text-pink-strong" aria-hidden>
              {[0, 72, 144, 216, 288].map((deg) => (
                <ellipse
                  key={deg}
                  cx="16"
                  cy="9"
                  rx="4.2"
                  ry="5.6"
                  transform={`rotate(${deg} 16 16)`}
                  fill="currentColor"
                />
              ))}
              <circle
                cx="16"
                cy="16"
                r="2.2"
                className="text-pink-foreground"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group relative text-base font-bold text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-pink-strong transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <button aria-label="Toggle menu" className="md:hidden" onClick={() => setOpen((v) => !v)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-hairline bg-background md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-bold text-muted-foreground"
                  activeProps={{ className: "text-foreground" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
