"use client";

export default function Marquee({ items, speed = 28 }) {
  return (
    <div className="relative overflow-hidden py-4 border-y border-ink/8 dark:border-paper/10 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className="flex w-max items-center gap-8 motion-safe:animate-marquee"
        style={{ "--marquee-speed": `${speed}s` }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 font-mono text-xs uppercase tracking-wider text-ink/45 dark:text-paper/45 whitespace-nowrap"
          >
            {item}
            <span className="text-indigo/50 dark:text-indigo-light/50">
              &#9670;
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
