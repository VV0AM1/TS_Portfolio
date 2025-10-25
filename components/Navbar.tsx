


"use client";
import { useEffect, useState } from "react";
import { Cpu, Sun, Moon, Menu, X } from "lucide-react";

const links = [
  { href: "#historia", label: "Història" },
  { href: "#aplicacions", label: "Aplicacions" },
  { href: "#ecosistema", label: "Ecosistema" },
  { href: "#demo", label: "Demo" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState<boolean | null>(null); 
  const [progress, setProgress] = useState(0);

  useEffect(() => {
  const onScroll = () => {
    setScrolled(window.scrollY > 8);
    const p = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    setProgress(Math.min(1, Math.max(0, p)));
  };
  onScroll();
  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const initial =
      stored === "dark" || stored === "light"
        ? stored
        : window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

    document.documentElement.classList.toggle("dark", initial === "dark");
    setDark(initial === "dark");
  }, []);

  useEffect(() => {
    if (dark === null) return;
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const label = dark ? "Clar" : "Fosc";

  return (
    <header className={`sticky top-0 z-50 border-b glass ${scrolled ? "backdrop-blur" : ""}`}>
      <div className="h-[3px] w-full bg-transparent">
        <div className="h-[3px] ts-gradient" style={{ width: `${progress * 100}%` }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        <a href="#" className="flex text-2xl items-center gap-2 font-semibold">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl ts-gradient text-white">
            <Cpu className="h-4 w-4" />
          </span>
          TS Portfolio
        </a>

        <nav className="hidden md:flex items-center gap-4 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="link-underline text-lg hover:text-[var(--color-primary-400)]">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => dark !== null && setDark(!dark)}
            className="px-3 py-2 text-sm rounded-md border btn-neo inline-flex items-center gap-2"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />} {label}
          </button>
          <button className="md:hidden p-2 rounded-md hover:bg-[var(--color-primary-900)]/20" onClick={() => setOpen(true)}>
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t glass">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <span className="text-sm opacity-75">Menú</span>
            <button className="p-2 rounded-md hover:bg-[var(--color-primary-900)]/20" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="px-4 pb-4 space-y-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-sm hover:bg-[var(--color-primary-900)]/20">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}