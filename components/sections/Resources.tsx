import Section from "../Section";

const RESOURCES = [
  { href: "https://www.typescriptlang.org/", label: "Lloc oficial" },
  { href: "https://www.typescriptlang.org/docs/", label: "Docs" },
  { href: "https://www.typescriptlang.org/play", label: "Playground" },
];

export default function Resources(){
  return (
    <Section id="ecosistema" className="py-12 md:py-20">
      <h2 className="text-3xl font-bold tracking-tight">Ecosistema i recursos</h2>
      <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-5">
        <li>IDEs: VS Code, WebStorm, Neovim, IntelliJ.</li>
        <li>Frameworks: Next.js, Angular, Remix, SvelteKit, NestJS.</li>
        <li>Testing: Vitest/Jest, Playwright, Testing Library.</li>
        <li>Build: Vite, esbuild, SWC, Turborepo, NX.</li>
      </ul>
      <div className="flex flex-wrap gap-2 mt-4">
        {RESOURCES.map((r) => (
          <a key={r.href} href={r.href} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md border inline-flex items-center gap-2 hover:bg-muted">
            {r.label}
          </a>
        ))}
      </div>
    </Section>
  );
}