"use client";

import { motion, useReducedMotion } from "framer-motion";

const DISTANCE = 56;

export default function Reveal({
  children,
  delay = 0,
  direction = "up", // "up" | "left" | "right"
  className = "",
  width,
}) {
  const prefersReducedMotion = useReducedMotion();

  const offset =
    direction === "left"
      ? { x: -DISTANCE, y: 0 }
      : direction === "right"
      ? { x: DISTANCE, y: 0 }
      : { x: 0, y: DISTANCE };

  if (prefersReducedMotion) {
    return (
      <div className={className} style={width ? { width } : undefined}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...offset, scale: 0.94, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={width ? { width } : undefined}
    >
      {children}
    </motion.div>
  );
}
