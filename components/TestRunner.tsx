"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { SignMark } from "@/components/SignMark";
import { chapterMeta, localize, MINISTRY_RULES, scoreAnswers } from "@/lib/exam";
import { t } from "@/lib/i18n";
import { useStore } from "@/lib/store";
import type { Question, TestMode, TestResult } from "@/lib/types";

type Props = {
  mode: TestMode;
  questions: Question[];
  title: string;
};

const TIMED: TestMode[] = ["ministry", "drive"];

export function TestRunner({ mode, questions, title }: Props) {
  const { settings, recordAnswers } = useStore();
  const locale = settings.locale;
  const timed = TIMED.includes(mode);
  const rules = MINISTRY_RULES[settings.category];
  const [index, setIndex] = useState(0);
  const [chosen, setChosen] = useState<Array<number | null>>(() => questions.map(() => null));
  const [revealed, setRevealed] = useState(false);
  const [showHelp, setShowHelp] = useState(settings.autoHelp);
  const [answersVisible, setAnswersVisible] = useState(!settings.hideAnswers);
  const [done, setDone] = useState(false);
  const [stopped, setStopped] = useState(false);
  const [seconds, setSeconds] = useState(rules.minutes * 60);
  const [startedAt] = useState(() => Date.now());
  const [confirmExit, setConfirmExit] = useState(false);

  const question = questions[index];
  const liveScore = useMemo(() => scoreAnswers(questions, chosen), [questions, chosen]);

  useEffect(() => {
    if (!timed || done) return;
    const id = window.setInterval(() => {
      setSeconds((value) => {
        if (value <= 1) {
          window.clearInterval(id);
          finish();
          return 0;
        }
        return value - 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
    // finish is stable enough for this UI timer
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timed, done]);

  if (!question) {
    return (
      <div className="card p-8 text-center">
        <p>{t(locale, "noneLeft")}</p>
        <Link href="/" className="mt-4 inline-block">
          {t(locale, "backHome")}
        </Link>
      </div>
    );
  }

  function pick(answerIndex: number) {
    if (done) return;
    const next = [...chosen];
    next[index] = answerIndex;
    setChosen(next);
    const wrongSoFar = next.filter((value, i) => value !== null && value !== questions[i].correct).length;
    if (timed && wrongSoFar > rules.maxWrong) {
      setStopped(true);
      finish(next);
    }
  }

  function finish(finalChosen = chosen) {
    if (done) return;
    setDone(true);
    const score = scoreAnswers(questions, finalChosen);
    const result: TestResult = {
      id: crypto.randomUUID(),
      mode,
      category: settings.category,
      startedAt: new Date(startedAt).toISOString(),
      finishedAt: new Date().toISOString(),
      total: score.total,
      correct: score.correct,
      wrong: score.wrong,
      skipped: score.skipped,
      passed: timed ? score.wrong <= rules.maxWrong && score.skipped === 0 && score.correct + score.wrong === rules.count : undefined,
      durationSec: Math.round((Date.now() - startedAt) / 1000),
      answers: questions.map((item, i) => ({
        questionId: item.id,
        chosen: finalChosen[i],
        correctIndex: item.correct
      }))
    };
    recordAnswers(
      questions
        .map((item, i) => {
          const value = finalChosen[i];
          if (value === null) return null;
          return {
            questionId: item.id,
            chosen: value,
            correct: value === item.correct,
            at: new Date().toISOString(),
            mode
          };
        })
        .filter((item): item is NonNullable<typeof item> => Boolean(item)),
      result
    );
  }

  if (done) {
    const score = liveScore;
    const passed = timed ? score.wrong <= rules.maxWrong && score.skipped === 0 : score.correct >= Math.ceil(score.total * 0.8);
    return (
      <section className="card mx-auto max-w-3xl p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-gold">{title}</p>
        <h1 className="mt-2 text-3xl font-black">{t(locale, "resultTitle")}</h1>
        {stopped ? <p className="mt-3 text-danger">{t(locale, "examStopped")}</p> : null}
        <div className={`mt-6 inline-flex rounded-full px-4 py-1 text-sm font-bold ${passed ? "bg-ok/20 text-ok" : "bg-danger/20 text-danger"}`}>
          {passed ? t(locale, "passed") : t(locale, "failed")}
        </div>
        <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Stat label={t(locale, "correct")} value={score.correct} />
          <Stat label={t(locale, "wrong")} value={score.wrong} />
          <Stat label={t(locale, "skipped")} value={score.skipped} />
          <Stat label="%" value={`${Math.round((score.correct / score.total) * 100)}`} />
        </dl>
        <ol className="mt-8 space-y-3">
          {questions.map((item, i) => {
            const value = chosen[i];
            const ok = value === item.correct;
            return (
              <li key={item.id} className="rounded-xl border border-line p-4">
                <p className="text-sm text-muted">
                  {i + 1}. {localize(chapterMeta(item.chapter).title, locale)}
                </p>
                <p className="mt-1 font-semibold">{localize(item.text, locale)}</p>
                <p className={ok ? "text-ok" : "text-danger"}>
                  {value === null
                    ? "—"
                    : localize(item.answers[value], locale)}
                </p>
                {!ok ? (
                  <p className="text-sm text-gold">
                    {localize(item.answers[item.correct], locale)}
                  </p>
                ) : null}
              </li>
            );
          })}
        </ol>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="gold-btn rounded-full px-5 py-2 no-underline">
            {t(locale, "backHome")}
          </Link>
          <Link href="/stats" className="rounded-full border border-line px-5 py-2 text-ink no-underline">
            {t(locale, "stats")}
          </Link>
        </div>
      </section>
    );
  }

  const selected = chosen[index];
  const clock = `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;

  return (
    <section className="card mx-auto max-w-3xl p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-muted">
        <span>{title}</span>
        <span>
          {t(locale, "question")} {index + 1}/{questions.length}
        </span>
        {timed ? (
          <span className={seconds < 60 ? "text-danger" : "text-gold"}>
            {t(locale, "timeLeft")}: {clock}
          </span>
        ) : null}
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-black/40">
        <div
          className="h-full bg-gold"
          style={{ width: `${((index + 1) / questions.length) * 100}%` }}
        />
      </div>
      <p className="mt-4 text-xs uppercase tracking-widest text-gold">
        {localize(chapterMeta(question.chapter).title, locale)}
      </p>
      <h1 className="mt-2 text-2xl font-black leading-snug">{localize(question.text, locale)}</h1>
      {question.sign ? (
        <div className="mt-6 flex justify-center">
          <SignMark id={question.sign} className="h-36 w-36" />
        </div>
      ) : null}
      {!answersVisible ? (
        <button className="mt-6 text-sm text-gold" onClick={() => setAnswersVisible(true)}>
          {t(locale, "showAnswers")}
        </button>
      ) : (
        <div className="mt-6 space-y-3">
          {question.answers.map((answer, answerIndex) => {
            const isSelected = selected === answerIndex;
            const showMark = revealed && selected !== null;
            const isRight = answerIndex === question.correct;
            return (
              <button
                key={answer.el}
                onClick={() => pick(answerIndex)}
                className={`w-full rounded-2xl border px-4 py-3 text-left ${
                  showMark && isRight
                    ? "border-ok bg-ok/10"
                    : showMark && isSelected
                      ? "border-danger bg-danger/10"
                      : isSelected
                        ? "border-gold bg-gold/10"
                        : "border-line hover:border-gold/60"
                }`}
              >
                <span className="mr-3 text-gold">{String.fromCharCode(65 + answerIndex)}</span>
                {localize(answer, locale)}
              </button>
            );
          })}
        </div>
      )}
      {(showHelp || settings.autoHelp) && (
        <p className="mt-5 rounded-xl bg-black/30 p-4 text-sm text-muted">{localize(question.help, locale)}</p>
      )}
      <div className="mt-6 flex flex-wrap gap-3">
        <button className="rounded-full border border-line px-4 py-2" onClick={() => setIndex(Math.max(0, index - 1))}>
          {t(locale, "prev")}
        </button>
        <button
          className="gold-btn rounded-full px-4 py-2"
          onClick={() => {
            if (index === questions.length - 1) finish();
            else {
              setIndex(index + 1);
              setRevealed(false);
              setShowHelp(settings.autoHelp);
              setAnswersVisible(!settings.hideAnswers);
            }
          }}
        >
          {index === questions.length - 1 ? t(locale, "finish") : t(locale, "next")}
        </button>
        <button className="text-sm text-muted" onClick={() => setRevealed(true)}>
          {t(locale, "showCorrect")}
        </button>
        <button className="text-sm text-muted" onClick={() => setShowHelp((v) => !v)}>
          {t(locale, "help")}
        </button>
        <button className="ml-auto text-sm text-danger" onClick={() => setConfirmExit(true)}>
          {t(locale, "exitTest")}
        </button>
      </div>
      {confirmExit ? (
        <div className="mt-6 rounded-xl border border-danger/40 p-4">
          <p>{t(locale, "exitConfirm")}</p>
          <div className="mt-3 flex gap-3">
            <Link href="/" className="text-danger">
              {t(locale, "exitTest")}
            </Link>
            <button onClick={() => setConfirmExit(false)}>{t(locale, "cancel")}</button>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-xl bg-black/25 p-4">
      <dt className="text-xs uppercase tracking-wide text-muted">{label}</dt>
      <dd className="text-2xl font-black">{value}</dd>
    </div>
  );
}
