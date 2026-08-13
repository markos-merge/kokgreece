"use client";

import Link from "next/link";
import { CHAPTERS } from "@/data/questions";
import { THEORY } from "@/data/theory";
import { localize } from "@/lib/exam";
import { t } from "@/lib/i18n";
import { useStore } from "@/lib/store";

export default function TheoryPage() {
  const { settings } = useStore();
  const locale = settings.locale;

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-black">{t(locale, "theory")}</h1>
      <div className="space-y-4">
        {CHAPTERS.map((chapter) => (
          <article key={chapter.id} className="card p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-xl font-black text-gold">{localize(chapter.title, locale)}</h2>
                <p className="mt-1 text-sm text-muted">{localize(chapter.blurb, locale)}</p>
              </div>
              <Link href={`/test?mode=chapter&chapter=${chapter.id}`} className="text-sm">
                {t(locale, "modeChapter")} →
              </Link>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
              {THEORY[chapter.id].map((item) => (
                <li key={item.el}>{localize(item, locale)}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
