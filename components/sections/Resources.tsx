import Section from "../Section";
import { ExternalLink } from "lucide-react";

const RESOURCES = [
  { href: "https://www.typescriptlang.org/", label: "Lloc oficial" },
  { href: "https://www.typescriptlang.org/docs/", label: "Docs" },
  { href: "https://www.typescriptlang.org/play", label: "Playground" },
];

export default function Resources() {
  return (
    <Section id="ecosistema" className="py-12 md:py-20">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-3xl font-bold tracking-tight">
          <span className="bg-clip-text text-transparent ts-gradient">Ecosistema</span> i recursos
        </h2>
        <span className="hidden md:inline px-3 py-1 rounded-full text-xs border glass">
          TS-friendly tooling
        </span>
      </div>

      <ul className="mt-4 space-y-2 opacity-80 list-disc pl-5">
        <li>IDEs: VS Code, WebStorm, Neovim, IntelliJ.</li>
        <li>Frameworks: Next.js, Angular, Remix, SvelteKit, NestJS.</li>
        <li>Testing: Vitest/Jest, Playwright, Testing Library.</li>
        <li>Build: Vite, esbuild, SWC, Turborepo, NX.</li>
      </ul>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {RESOURCES.map((r) => (
          <a
            key={r.href}
            href={r.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-[var(--radius-lg)] p-4 border glass flex items-center justify-between hover-lift hover-glow"
            aria-label={`Obre ${r.label} en una pestanya nova`}
            title={r.label}
          >
            <div>
              <div className="text-sm opacity-70">Recurs</div>
              <div className="font-medium link-underline group-hover:text-[var(--color-primary-400)]">{r.label}</div>
            </div>
            <div className="h-9 w-9 rounded-full ts-gradient text-white grid place-items-center group-hover:scale-110 transition">
              <ExternalLink className="h-4 w-4" />
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 rounded-[var(--radius-lg)] border glass p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="opacity-85">
          Vols una llista curada per al teu stack?{' '}
          <a href="#demo" className="link-underline hover:text-[var(--color-primary-400)]">
            Demana-ho al xat
          </a>{' '}
          i et suggereixo recursos segons el teu projecte.
        </p>
        <a href="#demo" className="px-4 py-2 rounded-md ts-gradient text-white btn-neo">
          Parlar ara
        </a>
      </div>
    </Section>
  );
}
