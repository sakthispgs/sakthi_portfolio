"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, MapPin, Send, CheckCircle2 } from "lucide-react";
import { personal } from "@/data/content";
import Reveal from "@/components/Reveal";
import RevealHeading from "@/components/RevealHeading";

const inputClasses =
  "w-full rounded-xl bg-ink/[0.03] dark:bg-paper/[0.05] border border-ink/10 dark:border-paper/10 px-4 py-3 text-sm text-ink dark:text-paper placeholder:text-ink/35 dark:placeholder:text-paper/35 outline-none transition-all focus:border-indigo/50 focus:shadow-glow";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n\u2014\n${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="section-pad">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-wider text-indigo dark:text-indigo-light">
            Contact
          </span>
        </Reveal>
        <RevealHeading
          delay={0.08}
          className="font-display font-bold text-3xl md:text-4xl mt-3 mb-3"
        >
          Let&apos;s build something
        </RevealHeading>
        <Reveal delay={0.12}>
          <p className="text-ink/60 dark:text-paper/60 mb-12 max-w-lg">
            Have a role, project, or just want to talk engineering &mdash;
            my inbox is open.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-6">
          <Reveal delay={0.1} direction="left">
            <div className="glass rounded-2xl p-7 h-full shadow-card space-y-6">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3 group"
              >
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-brand-soft text-indigo dark:text-indigo-light flex-shrink-0">
                  <Mail size={17} />
                </span>
                <span className="text-sm text-ink/75 dark:text-paper/75 group-hover:text-ink dark:group-hover:text-paper transition-colors break-all">
                  {personal.email}
                </span>
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-brand-soft text-indigo dark:text-indigo-light flex-shrink-0">
                  <Github size={17} />
                </span>
                <span className="text-sm text-ink/75 dark:text-paper/75 group-hover:text-ink dark:group-hover:text-paper transition-colors">
                  github.com/sakthispgs
                </span>
              </a>
              <div className="flex items-center gap-3">
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-brand-soft text-indigo dark:text-indigo-light flex-shrink-0">
                  <MapPin size={17} />
                </span>
                <span className="text-sm text-ink/75 dark:text-paper/75">
                  {personal.location}
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16} direction="right">
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-7 shadow-card space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputClasses}
                />
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className={inputClasses}
                />
              </div>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What's on your mind?"
                rows={5}
                className={`${inputClasses} resize-none`}
              />

              <motion.button
                type="submit"
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-brand hover:shadow-glow transition-shadow"
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={16} />
                    Opening your email&hellip;
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
