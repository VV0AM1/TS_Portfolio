"use client";
import Navbar from "./Navbar";
import Hero from "./sections/Hero";
import Timeline from "./sections/Timeline";
import Features from "./sections/Features";
import Resources from "./sections/Resources";
import Demo from "./sections/Demo";
import Footer from "./sections/Footer";
import ChatWidget from "./ChatWidget";
import Separator from "./Separator";
import Reveal from "./Reveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="space-y-24 md:space-y-32">
        <Reveal><Hero /></Reveal>
        <Separator />
        <Reveal delay={.05}><Timeline /></Reveal>
        <Separator />
        <Reveal delay={.1}><Features /></Reveal>
        <Separator />
        <Reveal delay={.15}><Resources /></Reveal>
        <Separator />
        <Reveal delay={.2}><Demo /></Reveal>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}