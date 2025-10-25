import { ReactNode } from "react";
export default function Section({ id, className = "", children }:{ id?: string; className?: string; children: ReactNode }) {
  return <section id={id} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>;
}