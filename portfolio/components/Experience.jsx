import { experience } from "@/data/content";
import Reveal from "@/components/Reveal";
import RevealHeading from "@/components/RevealHeading";

export default function Experience() {
  return (
    <section id="experience" className="section-pad bg-black/[0.015] dark:bg-white/[0.015]">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-wider text-indigo dark:text-indigo-light">
            Experience
          </span>
        </Reveal>
        <RevealHeading
          delay={0.08}
          className="font-display font-bold text-3xl md:text-4xl mt-3 mb-12"
        >
          Where I&apos;ve worked
        </RevealHeading>

        <div className="relative pl-8">
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-indigo via-violet to-transparent" />

          {experience.map((job, i) => (
            <Reveal
              key={i}
              direction="left"
              delay={i * 0.1}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-8 top-1.5 w-3 h-3 rounded-full bg-gradient-brand shadow-glow" />
              <div className="glass rounded-2xl p-7 shadow-card hover:shadow-glow transition-shadow">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-display font-bold text-lg">
                    {job.role} &middot; {job.company}
                  </h3>
                  <span className="font-mono text-xs text-ink/45 dark:text-paper/45">
                    {job.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {job.points.map((point, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-sm text-ink/70 dark:text-paper/70 leading-relaxed"
                    >
                      <span className="text-indigo dark:text-indigo-light mt-0.5">
                        &rsaquo;
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
