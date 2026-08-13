"use client";

import Link from "next/link";
import { chapterMeta, questionsFor } from "@/lib/exam";
import { t } from "@/lib/i18n";
import { useStore } from "@/lib/store";

export default function DashboardPage() {
  const { settings, currentUser, history, results } = useStore();
  const locale = settings.locale;
  const pool = questionsFor(settings.category);
  const correctIds = new Set(history.filter((item) => item.correct).map((item) => item.questionId));
  const completion = pool.length ? Math.round((correctIds.size / pool.length) * 100) : 0;
  const last = results[0];
  const wrongByChapter = new Map<string, number>();
  for (const record of history.filter((item) => !item.correct)) {
    const question = pool.find((item) => item.id === record.questionId);
    if (!question) continue;
    wrongByChapter.set(question.chapter, (wrongByChapter.get(question.chapter) ?? 0) + 1);
  }
  const weak = [...wrongByChapter.entries()].sort((a, b) => b[1] - a[1])[0];

  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm text-gold">{t(locale, "dashboard")}</p>
        <h1 className="text-3xl font-black">{currentUser?.name ?? t(locale, "guest")}</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        <Tile label={t(locale, "completion")} value={`${completion}%`} />
        <Tile label={t(locale, "totalTests")} value={results.length} />
        <Tile label={t(locale, "totalAnswers")} value={history.length} />
        <Tile
          label={t(locale, "lastScore")}
          value={last ? `${last.correct}/${last.total}` : "—"}
        />
      </div>
      <div className="card p-6">
        <h2 className="font-black">{t(locale, "weakChapter")}</h2>
        <p className="mt-2 text-muted">
          {weak ? chapterMeta(weak[0] as never).title[locale] : "—"}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/test?mode=progress" className="gold-btn rounded-full px-4 py-2 no-underline">
            {t(locale, "modeProgress")}
          </Link>
          <Link href="/test?mode=errors" className="rounded-full border border-line px-4 py-2 text-ink no-underline">
            {t(locale, "modeErrors")}
          </Link>
        </div>
      </div>
    </section>
  );
}

function Tile({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="card p-5">
      <p className="text-xs uppercase tracking-wide text-muted">{label}</p>
      <p className="mt-2 text-3xl font-black">{value}</p>
    </div>
  );
}
