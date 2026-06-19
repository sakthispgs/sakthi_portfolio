"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ChevronDown, ExternalLink } from "lucide-react";
import { projects } from "@/data/content";
import Reveal from "@/components/Reveal";
import RevealHeading from "@/components/RevealHeading";

function ProjectCard({ project, delay, direction = "up" }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={delay} direction={direction} className="h-full">
      <div
        className={`group relative h-full flex flex-col rounded-2xl p-7 glass shadow-card transition-all hover:shadow-glow ${
          project.featured ? "ring-1 ring-indigo/20" : ""
        }`}
      >
        {project.featured && (
          <span className="absolute top-6 right-7 font-mono text-[10px] uppercase tracking-wider text-indigo dark:text-indigo-light">
            Featured
          </span>
        )}

        <p className="font-mono text-xs text-ink/40 dark:text-paper/40 mb-2">
          {project.context}
        </p>
        <h3 className="font-display font-bold text-xl">{project.name}</h3>
        <p className="text-sm text-ink/55 dark:text-paper/55 mt-1 mb-5">
          {project.subtitle}
        </p>

        <ul className="space-y-1.5 mb-5">
          {project.impact.slice(0, 2).map((point, i) => (
            <li
              key={i}
              className="flex gap-2 text-sm text-ink/70 dark:text-paper/70 leading-snug"
            >
              <span className="text-indigo dark:text-indigo-light mt-0.5">
                &rsaquo;
              </span>
              {point}
            </li>
          ))}
        </ul>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="border-t border-ink/8 dark:border-paper/10 pt-5 mb-5 space-y-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-ink/40 dark:text-paper/40 mb-1.5">
                    Problem
                  </p>
                  <p className="text-sm text-ink/70 dark:text-paper/70 leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-ink/40 dark:text-paper/40 mb-1.5">
                    Solution
                  </p>
                  <ul className="space-y-1.5">
                    {project.solution.map((point, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm text-ink/70 dark:text-paper/70 leading-snug"
                      >
                        <span className="text-violet dark:text-violet-light mt-0.5">
                          &rsaquo;
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                {project.impact.length > 2 && (
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-ink/40 dark:text-paper/40 mb-1.5">
                      Impact
                    </p>
                    <ul className="space-y-1.5">
                      {project.impact.slice(2).map((point, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-sm text-ink/70 dark:text-paper/70 leading-snug"
                        >
                          <span className="text-indigo dark:text-indigo-light mt-0.5">
                            &rsaquo;
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-ink/5 dark:bg-paper/8 border border-ink/8 dark:border-paper/10 text-ink/60 dark:text-paper/60"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo dark:text-indigo-light"
            >
              {open ? "Show less" : "Case study"}
              <ChevronDown
                size={15}
                className={`transition-transform ${open ? "rotate-180" : ""}`}
              />
            </button>

            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-ink/55 dark:text-paper/55 hover:text-ink dark:hover:text-paper transition-colors"
              >
                <Github size={15} />
                Code
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-sm text-ink/30 dark:text-paper/30">
                <ExternalLink size={15} />
                Private
              </span>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-pad">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-wider text-indigo dark:text-indigo-light">
            Projects
          </span>
        </Reveal>
        <RevealHeading
          delay={0.08}
          className="font-display font-bold text-3xl md:text-4xl mt-3 mb-12"
        >
          Selected work
        </RevealHeading>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              delay={i * 0.1}
              direction={i % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              delay={(i % 3) * 0.08}
              direction={i % 3 === 0 ? "left" : i % 3 === 1 ? "up" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
