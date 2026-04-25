import { useState } from "react";
import { Menu, X } from "lucide-react";
import daxLogoLight from "@/assets/dax-logo-light.jpg";

const links = [
  { href: "#how", label: "How It Works" },
  { href: "#included", label: "What's Included" },
  { href: "#who", label: "Who It's For" },
  { href: "#faq", label: "FAQ" },
];

const BOOKING_URL =
  "https://scheduler.zoom.us/dax-media/business-meeting-with-dax-media";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2">
          <img
            src={daxLogoLight}
            alt="Dax Media logo"
            className="h-10 w-auto object-contain"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-soft transition-transform hover:scale-[1.03] md:inline-flex"
        >
          Book a Free Call
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium uppercase tracking-wider text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-full bg-brand px-5 py-2.5 text-center text-sm font-semibold text-brand-foreground"
            >
              Book a Free Call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export { BOOKING_URL };
