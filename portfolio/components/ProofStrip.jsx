import { proof } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function ProofStrip() {
  return (
    <Reveal delay={0.3}>
      <div className="border-t border-b border-ink/10 dark:border-paper/10">
        <div className="flex items-center gap-3 py-4 font-mono text-[11px] uppercase tracking-wider text-ink/45 dark:text-paper/45">
          <span>Selected Proof</span>
          <span className="flex-1 h-px bg-ink/10 dark:bg-paper/10 max-w-[60px]" />
          <span>Core Competency</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-ink/10 dark:divide-paper/10 border-t border-ink/10 dark:border-paper/10">
          {proof.map((item) => (
            <div key={item.value} className="py-6 sm:px-8 first:sm:pl-0">
              <p className="font-display font-bold text-2xl md:text-3xl">
                {item.value}
              </p>
              <p className="mt-1 font-mono text-xs uppercase tracking-wider text-ink/45 dark:text-paper/45">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
