"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo } from "react";
import { TestRunner } from "@/components/TestRunner";
import { CHAPTERS } from "@/data/questions";
import { buildTest, localize, preparedSets, questionsFor } from "@/lib/exam";
import { t } from "@/lib/i18n";
import { useStore } from "@/lib/store";
import type { ChapterId, TestMode } from "@/lib/types";

const MODE_TITLE: Record<
  TestMode,
  | "modeEasy"
  | "modeMinistry"
  | "modeDrive"
  | "modePrepared"
  | "modeChapter"
  | "modeProgress"
  | "modeErrors"
  | "modeDemo"
> = {
  easy: "modeEasy",
  ministry: "modeMinistry",
  drive: "modeDrive",
  prepared: "modePrepared",
  chapter: "modeChapter",
  progress: "modeProgress",
  errors: "modeErrors",
  "demo-signs": "modeDemo"
};

function TestBody() {
  const params = useSearchParams();
  const mode = (params.get("mode") ?? "easy") as TestMode;
  const chapter = params.get("chapter") as ChapterId | null;
  const preparedId = params.get("set");
  const { settings, history } = useStore();
  const locale = settings.locale;
  const needsPicker =
    (mode === "chapter" && !chapter) || (mode === "prepared" && !preparedId);

  const seenCorrectIds = history.filter((item) => item.correct).map((item) => item.questionId);
  const wrongIds = history.filter((item) => !item.correct).map((item) => item.questionId);

  const questions = useMemo(() => {
    if (needsPicker) return [];
    return buildTest({
      mode,
      category: settings.category,
      chapter: chapter ?? undefined,
      preparedId: preparedId ?? undefined,
      seenCorrectIds,
      wrongIds
    });
    // history is read once when the test starts
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, settings.category, chapter, preparedId, needsPicker]);

  if (mode === "chapter" && !chapter) {
    return (
      <section>
        <h1 className="text-3xl font-black">{t(locale, "chooseChapter")}</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {CHAPTERS.map((item) => {
            const count = questionsFor(settings.category).filter((q) => q.chapter === item.id).length;
            return (
              <Link
                key={item.id}
                href={`/test?mode=chapter&chapter=${item.id}`}
                className="card p-5 text-ink no-underline"
              >
                <h2 className="font-black text-gold">{localize(item.title, locale)}</h2>
                <p className="mt-2 text-sm text-muted">{localize(item.blurb, locale)}</p>
                <p className="mt-3 text-sm">
                  {count} {t(locale, "questions")}
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    );
  }

  if (mode === "prepared" && !preparedId) {
    return (
      <section>
        <h1 className="text-3xl font-black">{t(locale, "chooseSet")}</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {preparedSets(settings.category).map((set) => (
            <Link
              key={set.id}
              href={`/test?mode=prepared&set=${set.id}`}
              className="card p-5 text-ink no-underline"
            >
              <h2 className="font-black text-gold">
                {t(locale, "setOf")} {set.index}
              </h2>
              <p className="mt-2 text-sm text-muted">
                {set.questionIds.length} {t(locale, "questions")}
              </p>
            </Link>
          ))}
        </div>
      </section>
    );
  }

  return <TestRunner mode={mode} questions={questions} title={t(locale, MODE_TITLE[mode] ?? "modeEasy")} />;
}

export default function TestPage() {
  return (
    <Suspense fallback={<div className="card p-8">...</div>}>
      <TestBody />
    </Suspense>
  );
}
