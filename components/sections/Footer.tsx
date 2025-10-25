import Section from "../Section";
import { Github, Rocket, Twitter } from "lucide-react";

export default function Footer(){
  return (
    <footer className="border-t mt-24">
      <Section className="py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-muted-foreground">
          <Github className="h-5 w-5"/>
          <span>Construeix el teu repo TS i comparteix-lo</span>
        </div>
        <div className="flex items-center gap-2">
          <a href="#" className="px-4 py-2 rounded-md border inline-flex items-center gap-2 hover:bg-muted"><Twitter className="h-4 w-4"/> Comparteix</a>
          <a href="#" className="px-4 py-2 rounded-md bg-primary text-primary-foreground inline-flex items-center gap-2"><Rocket className="h-4 w-4"/> Desplega ara</a>
        </div>
      </Section>
    </footer>
  );
}