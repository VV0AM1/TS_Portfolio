import Section from "../Section";

const Item = ({ year, title, text }:{ year: string; title: string; text: string }) => (
  <div className="relative pl-10 pb-8 hover-lift">
    <div className="absolute left-0 top-2 w-2 h-2 rounded-full ts-gradient" />
    <div className="absolute left-1 top-0 bottom-0 w-[2px] bg-[var(--color-primary-900)]/20" />
    <h4 className="text-sm opacity-70">{year}</h4>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="opacity-80 leading-relaxed">{text}</p>
  </div>
);

export default function Timeline(){
  const codeInstall = [
    "npm i -D typescript",
    "npx tsc --init",
    "npx tsc --watch",
  ].join("\n");

  const codeTs = [
    "type User = { id: string; name: string; admin?: boolean };",
    "",
    "function greet(u: User): string {",
    "  return `Hola, ${u.name}!`;",
    "}",
    "",
    "// greet({ id: 1, name: 'A' }) // Error de tipus (id ha de ser string)",
    "console.log(greet({ id: 'u1', name: 'Ada' }));",
  ].join("\n");

  return (
    <Section id="historia" className="py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Una mica d'història</h2>
          <p className="mt-3 text-muted-foreground">TS (2012, Anders Hejlsberg) amb versions semestrals seguint ESNext.</p>
          <div className="mt-6 space-y-6">
            <Item year="2012" title="Anunci públic" text="Llançament inicial i visió: JS que escala." />
            <Item year="2014–2016" title="Angular & tooling" text="Angular 2, VS Code, decorators (experimental)." />
            <Item year="2018–2021" title="Maduresa" text="Strict mode, project references, unions/null safety." />
            <Item year="2022–2025" title="Ecosistema" text="Monorepos, Deno/Bun, Vite/Next, checker més ràpid." />
          </div>
        </div>

        <div className="space-y-4 text-sm">
          <pre className="p-4 rounded-[var(--radius-md)] border bg-black/40 text-white/90 overflow-x-auto ts-ring"><code>{codeInstall}</code></pre>
          <pre className="p-4 rounded-[var(--radius-md)] border bg-black/40 text-white/90 overflow-x-auto ts-ring"><code>{codeTs}</code></pre>
        </div>
      </div>
    </Section>
  );
}