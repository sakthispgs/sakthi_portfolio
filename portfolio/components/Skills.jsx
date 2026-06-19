"use client";

import { motion } from "framer-motion";
import { Github, Send, Code2, Smartphone, Sigma, Server } from "lucide-react";
import { skillCategories, tools } from "@/data/content";
import Reveal from "@/components/Reveal";
import RevealHeading from "@/components/RevealHeading";

const toolIcons = {
  GitHub: Github,
  Postman: Send,
  "VS Code": Code2,
  "Android Studio": Smartphone,
  MATLAB: Sigma,
  "VMware (Ubuntu)": Server,
};

function SkillBar({ name, level, delay }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium text-ink/80 dark:text-paper/80">
          {name}
        </span>
        <span className="font-mono text-xs text-ink/40 dark:text-paper/40">
          {level}%
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-ink/8 dark:bg-paper/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-brand"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-black/[0.015] dark:bg-white/[0.015]">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-wider text-indigo dark:text-indigo-light">
            Skills
          </span>
        </Reveal>
        <RevealHeading
          delay={0.08}
          className="font-display font-bold text-3xl md:text-4xl mt-3 mb-12"
        >
          Tools I build with
        </RevealHeading>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, ci) => (
            <Reveal
              key={cat.name}
              direction={ci % 3 === 0 ? "left" : ci % 3 === 1 ? "up" : "right"}
              delay={(ci % 3) * 0.08}
            >
              <div className="glass rounded-2xl p-6 h-full shadow-card hover:shadow-glow transition-shadow">
                <h3 className="font-display font-semibold text-base mb-5">
                  {cat.name}
                </h3>
                <div className="space-y-4">
                  {cat.skills.map((s, si) => (
                    <SkillBar
                      key={s.name}
                      name={s.name}
                      level={s.level}
                      delay={si * 0.08}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10">
            <h3 className="font-display font-semibold text-base mb-5">
              Tools &amp; Platforms
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {tools.map((tool, i) => {
                const Icon = toolIcons[tool] || Code2;
                return (
                  <Reveal key={tool} delay={0.04 * i}>
                    <div className="group glass rounded-2xl p-5 h-full flex flex-col items-center gap-3 text-center shadow-card hover:shadow-glow transition-shadow">
                      <span className="grid place-items-center w-11 h-11 rounded-xl bg-gradient-brand-soft text-indigo dark:text-indigo-light group-hover:scale-110 transition-transform">
                        <Icon size={19} />
                      </span>
                      <span className="text-xs font-medium text-ink/70 dark:text-paper/70 leading-tight">
                        {tool}
                      </span>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
