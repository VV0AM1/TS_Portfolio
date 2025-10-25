"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Reveal({ children, y = 18, delay = 0 }:{
  children: React.ReactNode; y?: number; delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const controls = useAnimation();
  useEffect(()=>{ if(inView) controls.start({ opacity:1, y:0, transition:{ duration:.5, delay } }); }, [inView]);
  return (
    <motion.div ref={ref} initial={{ opacity:0, y }} animate={controls}>
      {children}
    </motion.div>
  );
}