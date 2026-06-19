import { about, disciplines } from "@/data/content";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-xs text-indigo dark:text-indigo-light">
              {about.eyebrowNumber}
            </span>
            <span className="w-10 h-px bg-ink/20 dark:bg-paper/20" />
            <span className="font-mono text-xs uppercase tracking-wider text-ink/45 dark:text-paper/45">
              Background &amp; Style
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.1]">
            {about.headingPrimary}
            <br />
            <span className="italic text-gradient">
              {about.headingAccent}
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.14} className="mt-10 mb-14">
          <Marquee items={disciplines} speed={32} />
        </Reveal>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12">
          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-base md:text-lg leading-relaxed text-ink/75 dark:text-paper/75">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal direction="right" delay={0.1}>
            <div className="glass rounded-2xl p-6 shadow-card">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-display font-semibold text-base">
                  Vitals
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-wider text-ink/35 dark:text-paper/35">
                  Vol. 01
                </span>
              </div>
              <div className="space-y-4">
                {about.vitals.map((v) => (
                  <div
                    key={v.label}
                    className="pb-4 border-b border-ink/8 dark:border-paper/10 last:border-0 last:pb-0"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-wider text-ink/40 dark:text-paper/40 mb-1">
                      {v.label}
                    </p>
                    <p className="font-display font-semibold text-sm">
                      {v.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-wider text-ink/45 dark:text-paper/45 mb-6">
              Timeline
            </p>
          </Reveal>
          <div className="space-y-0">
            {about.timeline.map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  className={`flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 py-5 ${
                    i !== about.timeline.length - 1
                      ? "border-b border-ink/8 dark:border-paper/10"
                      : ""
                  }`}
                >
                  <span className="font-mono text-sm text-indigo dark:text-indigo-light w-14 flex-shrink-0">
                    {item.year}
                  </span>
                  <div>
                    <p className="font-display font-semibold text-base">
                      {item.title}
                    </p>
                    <p className="text-sm text-ink/60 dark:text-paper/60 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
