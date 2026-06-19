"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Mail } from "lucide-react";
import { personal } from "@/data/content";
import HeroPortrait from "@/components/HeroPortrait";
import NetworkBackground from "@/components/NetworkBackground";
import ProofStrip from "@/components/ProofStrip";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16 px-6 md:px-10 lg:px-16">
      <NetworkBackground className="absolute inset-0 w-full h-full opacity-60 dark:opacity-100 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-paper/40 to-paper dark:via-ink/30 dark:to-ink pointer-events-none" />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 36, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono uppercase tracking-wider text-indigo dark:text-indigo-light mb-6">
            {personal.role}
          </span>

          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight">
            Hi, I&apos;m {personal.name.split(" ")[0]}
            <br />
            <span className="text-gradient">{personal.title}</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-ink/70 dark:text-paper/70 max-w-xl leading-relaxed">
            {`${personal.tagline} I specialize in Java, Spring Boot, and Angular \u2014 with growing expertise in AWS \u2014 building end-to-end applications that are performant, secure, and production-ready.`}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-brand hover:shadow-glow transition-all"
            >
              View Projects
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold glass hover:shadow-card transition-shadow"
            >
              <Mail size={16} />
              Contact
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="grid place-items-center w-11 h-11 rounded-full glass hover:shadow-card transition-shadow"
            >
              <Github size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroPortrait />
        </motion.div>
      </div>

      <div className="relative max-w-6xl mx-auto mt-20 md:mt-24">
        <ProofStrip />
      </div>
    </section>
  );
}
