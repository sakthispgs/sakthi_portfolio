import Image from "next/image";
import { ExternalLink, GraduationCap, BadgeCheck, Award } from "lucide-react";
import { achievements } from "@/data/content";
import Reveal from "@/components/Reveal";
import RevealHeading from "@/components/RevealHeading";

function ListCard({ icon: Icon, title, items, delay, direction }) {
  return (
    <Reveal delay={delay} direction={direction}>
      <div className="glass rounded-2xl p-6 h-full shadow-card hover:shadow-glow transition-shadow">
        <div className="flex items-center gap-2.5 mb-4">
          <Icon size={17} className="text-indigo dark:text-indigo-light" />
          <h3 className="font-display font-semibold text-base">{title}</h3>
        </div>
        <ul className="space-y-2.5">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex gap-2 text-sm text-ink/70 dark:text-paper/70 leading-relaxed"
            >
              <span className="text-violet dark:text-violet-light mt-0.5">
                &rsaquo;
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function Achievements() {
  const { featured, academic, training, technical } = achievements;

  return (
    <section id="achievements" className="section-pad">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-wider text-indigo dark:text-indigo-light">
            Achievements
          </span>
        </Reveal>
        <RevealHeading
          delay={0.08}
          className="font-display font-bold text-3xl md:text-4xl mt-3 mb-10"
        >
          Certifications &amp; recognition
        </RevealHeading>

        <div className="space-y-6 mb-10">
          {featured.map((cert, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="relative overflow-hidden rounded-2xl p-7 md:p-8 bg-gradient-brand shadow-glow">
                <div className="absolute -right-10 -top-10 w-56 h-56 rounded-full bg-white/10 blur-2xl" />
                <div className="relative flex flex-wrap items-center gap-7">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/95 p-2 shadow-card flex-shrink-0">
                    <Image
                      src={cert.badge}
                      alt={`${cert.title} badge`}
                      width={200}
                      height={200}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-[200px]">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-white/70 mb-1">
                      Featured Certification
                    </p>
                    <h3 className="font-display font-bold text-xl md:text-2xl text-white">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-white/80 mt-1">
                      {cert.subtitle} &middot; {cert.issued}
                    </p>
                  </div>
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/15 text-white text-sm font-semibold hover:bg-white/25 transition-colors"
                  >
                    Verify
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <ListCard
            icon={GraduationCap}
            title="Academic"
            items={academic}
            delay={0}
            direction="left"
          />
          <ListCard
            icon={BadgeCheck}
            title="Training Programs"
            items={training}
            delay={0.06}
            direction="up"
          />
          <ListCard
            icon={Award}
            title="Technical Certifications"
            items={technical}
            delay={0.12}
            direction="right"
          />
        </div>
      </div>
    </section>
  );
}
