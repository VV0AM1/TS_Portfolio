"use client";
import Image from "next/image";
import Section from "../Section";
import { Sparkles, Code2, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero(){
  return (
    <Section className="py-16 md:py-24 relative mt-8">
      <div className="absolute inset-0 hero-grid pointer-events-none" />
      <div className="relative grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{opacity:0, y:16}} animate={{opacity:1, y:0}} transition={{duration:0.5}}>
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm glass">
            <Sparkles className="h-4 w-4"/> Aprèn TypeScript — des de zero
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-4">
            <span className="bg-clip-text text-transparent ts-gradient">TypeScript</span>: JavaScript amb <span className="text-[var(--color-primary-400)]">tipus</span>
          </h1>
          <p className="text-lg opacity-80 mt-4">Millor qualitat, mantenibilitat i DX. Encaixa amb React, Node, Deno i Bun.</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a className="px-4 py-2 rounded-md ts-gradient text-white inline-flex items-center gap-2 btn-neo" href="#demo">
              <Rocket className="h-4 w-4"/> Comença
            </a>
            <a className="px-4 py-2 rounded-md border inline-flex items-center gap-2 hover:bg-[var(--color-primary-900)]/20" href="#demo">
              <Code2 className="h-4 w-4"/> Prova la demo
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 text-sm">
            {["Tipatge estàtic","React/Angular/Vue","Node/Deno/Bun","Monorepos"].map(t=>(
              <span key={t} className="rounded-full border px-3 py-1 bg-[var(--color-primary-900)]/10">{t}</span>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{duration:0.5, delay:0.05}} className="relative">
          <div className="rounded-[var(--radius-lg)] overflow-hidden border card-hover">
            <Image src="/images/ts-hero.jpeg" alt="TypeScript hero" width={1200} height={800} priority />
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-[var(--radius-md)] overflow-hidden border hidden md:block card-hover">
            <Image src="/images/code-snippet.webp" alt="Code snippet" width={280} height={180} />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}