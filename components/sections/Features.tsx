import Section from "../Section";
import { Globe2, Hammer, Cpu } from "lucide-react";
import Image from "next/image";

const IconWrap = ({ children }:{ children: React.ReactNode }) => (
  <div className="p-2 rounded-xl bg-[var(--color-primary-900)]/15 text-[var(--color-primary-400)]">{children}</div>
);

const Feature = ({ icon, title, desc, img }:{
  icon: React.ReactNode; title: string; desc: string; img: string
}) => (
  <div className="grid items-center gap-4 border rounded-[var(--radius-lg)] p-4 md:p-6 card-hover glass">
    <div className="flex items-center gap-3">
      <IconWrap>{icon}</IconWrap>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="opacity-80">{desc}</p>
    <div className="rounded-[var(--radius-md)] overflow-hidden border">
      <Image src={img} alt={title} width={1200} height={800} />
    </div>
  </div>
);

export default function Features(){
  return (
    <Section id="aplicacions" className="py-12 md:py-20">
      <h2 className="text-3xl font-bold tracking-tight">On s'utilitza?</h2>
      <p className="mt-3 opacity-80">Frontend, backend, tooling i més — amb tipus per a refactors segurs.</p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <Feature icon={<Globe2 className="h-5 w-5" />} title="Frontend web" desc="React/Next, Angular i Vue." img="/images/feature-frontend.png" />
        <Feature icon={<Hammer className="h-5 w-5" />} title="Tooling" desc="Vite, ESLint, Playwright…" img="/images/feature-tooling.png" />
        <Feature icon={<Cpu className="h-5 w-5" />} title="Backend" desc="Node, Deno, Bun; APIs i microserveis." img="/images/feature-backend.png" />
      </div>
    </Section>
  );
}
