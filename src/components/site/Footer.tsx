import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative mt-12 border-t border-hairline">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:grid-cols-4 md:px-10">
        <div>
          <p className="font-display text-3xl tracking-tight">Megan Mielke</p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Information Design student & aspiring UX designer based in Stuttgart.
          </p>
        </div>
        <div className="text-sm">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Get in touch
          </p>
          <a
            href="mailto:megan@mymielke.de"
            className="mt-3 inline-flex items-center gap-2 underline-offset-4 hover:underline"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-pink-strong" />
            megan@mymielke.de
          </a>
        </div>
        <div className="text-sm">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Navigate
          </p>
          <ul className="mt-3 space-y-1">
            <li><Link to="/about" className="story-link inline-block hover:text-pink-strong transition-colors">About</Link></li>
            <li><Link to="/projects" className="story-link inline-block hover:text-pink-strong transition-colors">Projects</Link></li>
            <li><Link to="/skills" className="story-link inline-block hover:text-pink-strong transition-colors">Skills</Link></li>
            <li><Link to="/cv" className="story-link inline-block hover:text-pink-strong transition-colors">CV</Link></li>
            <li><Link to="/contact" className="story-link inline-block hover:text-pink-strong transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Legal
          </p>
          <ul className="mt-3 space-y-1">
            <li><Link to="/impressum" className="story-link inline-block hover:text-pink-strong transition-colors">Imprint</Link></li>
            <li><Link to="/datenschutzerklaerung" className="story-link inline-block hover:text-pink-strong transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-hairline">
        <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-6 py-5 text-xs text-muted-foreground md:px-10">
          <span>© {new Date().getFullYear()} Megan Mielke</span>
          <div className="flex justify-center">
            <svg viewBox="0 0 32 32" className="h-6 w-6 text-pink-strong" aria-hidden>
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
              <circle cx="16" cy="16" r="2.2" className="text-pink-foreground" fill="currentColor" />
            </svg>
          </div>
          <span className="text-right">Designed & built with care.</span>
        </div>
      </div>

    </footer>
  );
}
