import { Github, Mail, ArrowUp } from "lucide-react";
import { personal } from "@/data/content";

export default function Footer() {
  return (
    <footer className="px-6 md:px-10 lg:px-16 py-8 border-t border-ink/8 dark:border-paper/10">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-ink/45 dark:text-paper/45">
          &copy; {new Date().getFullYear()} {personal.name}. Built with
          Next.js &amp; Tailwind.
        </p>
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="grid place-items-center w-9 h-9 rounded-full glass hover:shadow-glow transition-shadow"
          >
            <Mail size={15} />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid place-items-center w-9 h-9 rounded-full glass hover:shadow-glow transition-shadow"
          >
            <Github size={15} />
          </a>
          <a
            href="#"
            aria-label="Back to top"
            className="grid place-items-center w-9 h-9 rounded-full glass hover:shadow-glow transition-shadow"
          >
            <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
