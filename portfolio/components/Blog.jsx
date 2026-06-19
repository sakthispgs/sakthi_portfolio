"use client";

import { useState } from "react";
import { Clock, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import Reveal from "@/components/Reveal";
import RevealHeading from "@/components/RevealHeading";
import { blogs } from "@/data/content";

function BlogCard({ blog }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const previewContent = blog.sections[0]?.content || "";

  return (
    <article className="glass rounded-2xl shadow-card overflow-hidden">
      <div className="p-8 md:p-12">
        <header className="mb-6">
          <h2 className="font-display font-bold text-2xl md:text-3xl mb-4 leading-tight">
            {blog.title}
          </h2>
          <div className="flex flex-wrap gap-4 text-sm text-ink/60 dark:text-paper/60">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {blog.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {blog.readTime}
            </span>
          </div>
        </header>

        {!isExpanded ? (
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-ink/80 dark:text-paper/80 leading-relaxed text-base line-clamp-4">
              {previewContent.split(/\*\*(.*?)\*\*/g).map((part, i) =>
                i % 2 === 1 ? (
                  <strong key={i} className="font-semibold text-ink dark:text-paper">
                    {part}
                  </strong>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </p>
          </div>
        ) : (
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {blog.sections.map((section, index) => (
              <section key={index} className="mb-8">
                <h3 className="font-display font-semibold text-xl mb-4 text-ink dark:text-paper">
                  {section.heading}
                </h3>
                <div className="text-ink/80 dark:text-paper/80 leading-relaxed whitespace-pre-line text-base">
                  {section.content.split(/\*\*(.*?)\*\*/g).map((part, i) =>
                    i % 2 === 1 ? (
                      <strong key={i} className="font-semibold text-ink dark:text-paper">
                        {part}
                      </strong>
                    ) : (
                      <span key={i}>{part}</span>
                    )
                  )}
                </div>
              </section>
            ))}

            <section className="mt-10 pt-8 border-t border-ink/10 dark:border-paper/10">
              <h3 className="font-display font-semibold text-xl mb-4 text-indigo dark:text-indigo-light">
                What&apos;s Next
              </h3>
              <p className="text-ink/80 dark:text-paper/80 leading-relaxed text-base">
                {blog.whatsNext}
              </p>
            </section>
          </div>
        )}

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-6 flex items-center gap-2 text-indigo dark:text-indigo-light font-medium text-sm hover:underline transition-all cursor-pointer"
        >
          {isExpanded ? (
            <>
              Show Less <ChevronUp size={16} />
            </>
          ) : (
            <>
              Read More <ChevronDown size={16} />
            </>
          )}
        </button>
      </div>
    </article>
  );
}

export default function Blog() {
  return (
    <section id="blog" className="section-pad bg-black/[0.015] dark:bg-white/[0.015]">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-wider text-indigo dark:text-indigo-light">
            Blog
          </span>
        </Reveal>
        <RevealHeading
          delay={0.08}
          className="font-display font-bold text-3xl md:text-4xl mt-3 mb-10"
        >
          Writing
        </RevealHeading>

        <div className="space-y-8">
          {blogs.map((blog, index) => (
            <Reveal key={blog.id} delay={0.05 + index * 0.1}>
              <BlogCard blog={blog} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
