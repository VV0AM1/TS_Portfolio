import Section from "../Section";
import { Github, Rocket, Twitter, Globe2 } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24">
      <div className="h-[3px] w-full ts-gradient" />

      <Section className="py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 opacity-85">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl ts-gradient text-white">
            <Github className="h-4 w-4" />
          </span>
          <div>
            <div className="font-semibold">Fes créixer el teu repo TypeScript</div>
            <div className="text-sm opacity-70">Millor DX, proves sòlides i refactors segurs</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            href="https://github.com/VV0AM1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md border inline-flex items-center gap-2 hover:bg-[var(--color-primary-900)]/20 focus:outline-none focus:ring-2 focus:ring-[var(--color-ring)]"
            aria-label="Obre el meu GitHub"
            title="El meu GitHub"
          >
            <Github className="h-4 w-4" />
            <span>@VV0AM1</span>
          </a>

          <a
            href="https://iliaakimov.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md border inline-flex items-center gap-2 hover:bg-[var(--color-primary-900)]/20 focus:outline-none focus:ring-2 focus:ring-[var(--color-ring)]"
            aria-label="Obre el meu portfoli"
            title="El meu portfoli"
          >
            <Globe2 className="h-4 w-4" />
            <span>Portfoli</span>
          </a>

          <a
            href="#"
            className="px-4 py-2 rounded-md border inline-flex items-center gap-2 hover:bg-[var(--color-primary-900)]/20 focus:outline-none focus:ring-2 focus:ring-[var(--color-ring)]"
            aria-label="Comparteix al teu perfil"
            title="Comparteix"
          >
            <Twitter className="h-4 w-4" />
            <span>Comparteix</span>
          </a>
          <a
            href="#"
            className="px-4 py-2 rounded-md ts-gradient text-white inline-flex items-center gap-2 btn-neo focus:outline-none focus:ring-2 focus:ring-[var(--color-ring)]"
            aria-label="Desplega ara"
            title="Desplega ara"
          >
            <Rocket className="h-4 w-4" />
            <span>Desplega ara</span>
          </a>
        </div>
      </Section>

      <Section className="pb-8">
        <div className="text-xs opacity-60">
          © {year} TS Portfolio — by Ilia Akimov.{" "}
          <a href="#historia" className="link-underline hover:text-[var(--color-primary-400)]">
            Torna a l’inici
          </a>{" "}
          ·{" "}
          <a
            href="https://github.com/VV0AM1"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline hover:text-[var(--color-primary-400)]"
          >
            GitHub
          </a>{" "}
          ·{" "}
          <a
            href="https://iliaakimov.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline hover:text-[var(--color-primary-400)]"
          >
            Portfoli
          </a>
        </div>
      </Section>
    </footer>
  );
}
