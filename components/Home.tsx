"use client";
import Navbar from "./Navbar";
import Hero from "./sections/Hero";
import Timeline from "./sections/Hero";
import Features from "./sections/Features";
import Resources from "./sections/Resources";
import Demo from "./sections/Demo";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="space-y-24 md:space-y-32">
        <Hero />
        <Timeline />
        <Features />
        <Resources />
        <Demo />
      </main>
      <Footer />
    </div>
  );
}