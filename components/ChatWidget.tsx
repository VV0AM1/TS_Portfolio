"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, X, Minus, Sparkles } from "lucide-react";

type Msg = { role: "user" | "bot"; text: string; ts: number };

const canned = [
  "What is TypeScript vs JS?",
  "Best tsconfig for Next?",
  "React + TS patterns?",
  "Node + TS API starter?",
];

const reply = (q: string): string => {
  const s = q.toLowerCase();
  if (s.includes("typescript") || s === "ts" || s.includes(" ts"))
    return "TypeScript aporta tipatge estàtic a JS, millorant DX i refactors.";
  if (s.includes("react"))
    return "React + TS: props tipades, components segurs i autocompletat superior.";
  if (s.includes("next"))
    return "Next + TS és nadiu. Crea el projecte amb --ts i activa strict mode al tsconfig.";
  if (s.includes("node") || s.includes("api") || s.includes("backend"))
    return "Node + TS per APIs REST/GraphQL; fes servir tsx durant desenvolupament.";
  if (s.includes("config") || s.includes("tsconfig"))
    return "Comença amb strict, noImplicitOverride i noUncheckedIndexedAccess per més seguretat.";
  return "Puc ajudar amb TS, React, Next, Node, tooling i tests. Escriu la teva pregunta 👇";
};

const time = (t: number) =>
  new Date(t).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "bot", text: "Hola! Pregunta'm sobre TypeScript 👋", ts: Date.now() },
  ]);

  const endRef = useRef<HTMLDivElement>(null);
  const areaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, open, minimized]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMsgs((m) => [...m, { role: "user", text, ts: Date.now() }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMsgs((m) => [...m, { role: "bot", text: reply(text), ts: Date.now() }]);
      setTyping(false);
    }, 440);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const fab = useMemo(
    () => (
      <motion.button
        key="fab"
        onClick={() => { setMinimized(false); setOpen(true); }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="h-14 w-14 rounded-2xl ts-gradient text-white shadow-xl btn-neo inline-flex items-center justify-center
                   ring-1 ring-white/10 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[var(--color-ring)]"
        aria-label="Open chat"
        title="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>
    ),
    []
  );

  return (
    <div className="fixed bottom-5 right-5 z-[60]">
      <AnimatePresence mode="popLayout" initial={false}>
        {!open && fab}

        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 22 } }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            className={`w-[22rem] sm:w-[26rem] ${minimized ? "h-[3.4rem]" : "h-[28rem]"} 
                        rounded-2xl border shadow-2xl overflow-hidden backdrop-blur
                        bg-[color-mix(in_oklch,var(--background)_70%,transparent)]
                        ring-1 ring-white/10 dark:ring-black/20`}
            role="dialog"
            aria-label="Ask TS chat"
          >
            <div className="relative">
              <div className="absolute inset-x-0 top-0 h-1 ts-gradient" />
              <div className="px-3 py-2 border-b flex items-center justify-between glass">
                <div className="inline-flex items-center gap-2">
                  <span className="h-7 w-7 rounded-xl ts-gradient inline-grid place-items-center text-white shadow-sm">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <div className="leading-tight">
                    <b>Ask TS</b>
                    <div className="text-[11px] opacity-70">Tips & setup helper</div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setMinimized((m) => !m)}
                    className="p-1 rounded-md hover:bg-[var(--color-primary-900)]/15"
                    aria-label={minimized ? "Expand chat" : "Minimize chat"}
                    title={minimized ? "Expand" : "Minimize"}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setOpen(false)}
                    className="p-1 rounded-md hover:bg-[var(--color-primary-900)]/15"
                    aria-label="Close chat"
                    title="Close"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {!minimized && (
              <>
                <div className="flex-1 px-3 py-3 space-y-3 overflow-y-auto">
                  {msgs.length <= 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-wrap gap-2"
                    >
                      {canned.map((c) => (
                        <button
                          key={c}
                          onClick={() => setInput(c)}
                          className="px-3 py-1.5 rounded-full border glass text-sm hover-lift"
                        >
                          {c}
                        </button>
                      ))}
                    </motion.div>
                  )}

                  {msgs.map((m, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.18 }}
                      className={`flex items-end gap-2 ${m.role === "user" ? "justify-end" : ""}`}
                    >
                      {m.role === "bot" && (
                        <div className="h-7 w-7 rounded-xl ts-gradient text-white grid place-items-center shadow-sm">
                          <MessageCircle className="h-4 w-4" />
                        </div>
                      )}

                      <div
                        className={[
                          "max-w-[80%] px-3 py-2 rounded-2xl relative",
                          m.role === "user"
                            ? "bg-[var(--color-primary-600)] text-white shadow-md"
                            : "bg-[var(--color-primary-900)]/15 border border-white/10 shadow-sm",
                        ].join(" ")}
                      >
                        <span
                          className={[
                            "absolute -bottom-1 w-3 h-3 rotate-45",
                            m.role === "user"
                              ? "right-2 bg-[var(--color-primary-600)]"
                              : "left-2 bg-[var(--color-primary-900)]/15 border-l border-b border-white/10",
                          ].join(" ")}
                        />
                        <div>{m.text}</div>
                        <div className="text-[10px] opacity-60 mt-1 text-right">{time(m.ts)}</div>
                      </div>

                      {m.role === "user" && (
                        <div className="h-7 w-7 rounded-xl bg-[var(--color-primary-600)] text-white grid place-items-center shadow-md">
                          <span className="text-[11px]">U</span>
                        </div>
                      )}
                    </motion.div>
                  ))}

                  <AnimatePresence>
                    {typing && (
                      <motion.div
                        key="typing"
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl bg-[var(--color-primary-900)]/15 border border-white/10"
                      >
                        <span className="inline-flex gap-1">
                          <span className="w-1.5 h-1.5 rounded-full ts-gradient animate-pulse"></span>
                          <span className="w-1.5 h-1.5 rounded-full ts-gradient animate-pulse [animation-delay:.12s]"></span>
                          <span className="w-1.5 h-1.5 rounded-full ts-gradient animate-pulse [animation-delay:.24s]"></span>
                        </span>
                        escrivint…
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div ref={endRef} />
                </div>

                <div className="p-2 border-t glass">
                  <div className="flex items-end gap-2">
                    <TextareaAutosize
                      value={input}
                      onChange={setInput}
                      onEnter={send}
                      placeholder="Escriu aquí… (Shift+Enter = salt de línia)"
                    />
                    <button
                      onClick={send}
                      disabled={!input.trim()}
                      className={`px-4 py-2 rounded-xl inline-flex items-center gap-2 transition
                        ${input.trim() ? "ts-gradient text-white btn-neo hover-glow" : "border opacity-60 cursor-not-allowed"}`}
                      aria-label="Send message"
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-2 flex gap-1.5 opacity-80">
                    {["👍","🎯","🔥","💡","⚙️"].map(e => (
                      <button
                        key={e}
                        onClick={() => setInput((v) => (v ? v + " " + e : e))}
                        className="px-2 py-1 rounded-md border hover-lift"
                        aria-label={`Insert ${e}`}
                        title={`Insert ${e}`}
                      >
                        {e}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function TextareaAutosize({
  value, onChange, onEnter, placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  onEnter: () => void;
  placeholder?: string;
}) {
  const ref = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "0px";
    el.style.height = Math.min(160, Math.max(44, el.scrollHeight)) + "px";
  }, [value]);
  return (
    <textarea
      ref={ref}
      rows={1}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          onEnter();
        }
      }}
      placeholder={placeholder}
      className="flex-1 rounded-xl border bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--color-ring)] resize-none"
    />
  );
}
