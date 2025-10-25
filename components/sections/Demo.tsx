"use client";
import Section from "../Section";
import { useState } from "react";

export default function Demo(){
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const isEmail = (x:string) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(x);

  const codeTypeGuard = [
    "type Email = string;",
    "function isEmail(x: string): x is Email {",
    "  return /^[^@\\\\s]+@[^@\\\\s]+\\\\.[^@\\\\s]+$/.test(x);",
    "}",
  ].join("\n");

  const codeHook = [
    "function useEmail(){",
    "  const [email, setEmail] = React.useState('');",
    "  const valid = isEmail(email);",
    "  return { email, setEmail, valid };",
    "}",
  ].join("\n");

  return (
    <Section id="demo" className="py-12 md:py-20">
      <h2 className="text-3xl font-bold tracking-tight">Mini demo: valida un formulari</h2>
      <p className="text-muted-foreground mt-2">Validació en temps real i tipatge fort.</p>

      <div className="grid md:grid-cols-2 gap-8 mt-6">
        <div className="rounded-2xl border p-6">
          {submitted ? (
            <div className="text-green-600 dark:text-green-400">Gràcies! Rebràs novetats sobre TS.</div>
          ) : (
            <form onSubmit={(e)=>{ e.preventDefault(); if(isEmail(email)) setSubmitted(true); }} className="space-y-3">
              <input
                type="email"
                className="w-full rounded-md border px-3 py-2 bg-background"
                placeholder="el.teu@email.com"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              <button type="submit" className="w-full px-4 py-2 rounded-md bg-primary text-primary-foreground">
                Unir-me
              </button>
            </form>
          )}
        </div>

        <div className="space-y-3 text-sm text-muted-foreground">
          <pre className="p-4 rounded-2xl border bg-card overflow-x-auto"><code>{codeTypeGuard}</code></pre>
          <pre className="p-4 rounded-2xl border bg-card overflow-x-auto"><code>{codeHook}</code></pre>
        </div>
      </div>
    </Section>
  );
}