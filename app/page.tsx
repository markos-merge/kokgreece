"use client";

import Link from "next/link";
import { CATEGORIES } from "@/data/questions";
import { localize } from "@/lib/exam";
import { t } from "@/lib/i18n";
import { useStore } from "@/lib/store";
import type { TestMode } from "@/lib/types";

const MODES: { mode: TestMode; title: "modeEasy" | "modeMinistry" | "modeDrive" | "modePrepared" | "modeChapter"; hint: "modeEasyHint" | "modeMinistryHint" | "modeDriveHint" | "modePreparedHint" | "modeChapterHint" }[] = [
  { mode: "easy", title: "modeEasy", hint: "modeEasyHint" },
  { mode: "ministry", title: "modeMinistry", hint: "modeMinistryHint" },
  { mode: "drive", title: "modeDrive", hint: "modeDriveHint" },
  { mode: "prepared", title: "modePrepared", hint: "modePreparedHint" },
  { mode: "chapter", title: "modeChapter", hint: "modeChapterHint" }
];

export default function HomePage() {
  const { settings, setCategory, currentUser } = useStore();
  const locale = settings.locale;

  return (
    <div className="space-y-12">
      <section className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-gold">{t(locale, "brand")}</p>
          <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">{t(locale, "tagline")}</h1>
          <p className="mt-4 max-w-xl text-lg text-muted">{t(locale, "quote")}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/test?mode=demo-signs" className="gold-btn rounded-full px-5 py-3 no-underline">
              {t(locale, "modeDemo")}
            </Link>
            <Link href="/test?mode=easy" className="rounded-full border border-line px-5 py-3 text-ink no-underline">
              {t(locale, "demo")}
            </Link>
          </div>
        </div>
        <div className="card p-6">
          <p className="text-sm text-muted">{t(locale, "category")}</p>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {CATEGORIES.map((item) => (
              <button
                key={item.id}
                onClick={() => setCategory(item.id)}
                className={`rounded-2xl border px-3 py-4 text-left ${
                  settings.category === item.id ? "border-gold bg-gold/10" : "border-line"
                }`}
              >
                <strong>{localize(item.title, locale)}</strong>
                <span className="mt-1 block text-xs text-muted">{localize(item.exam, locale)}</span>
              </button>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">
            {currentUser ? currentUser.name : t(locale, "guest")}
          </p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {MODES.map((item) => (
          <Link
            key={item.mode}
            href={`/test?mode=${item.mode}`}
            className="card p-5 text-ink no-underline transition hover:-translate-y-0.5"
          >
            <h2 className="text-xl font-black text-gold">{t(locale, item.title)}</h2>
            <p className="mt-2 text-sm text-muted">{t(locale, item.hint)}</p>
            <span className="mt-4 inline-block text-sm">{t(locale, "start")} →</span>
          </Link>
        ))}
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <Link href="/test?mode=progress" className="card p-5 text-ink no-underline">
          <h2 className="font-black">{t(locale, "modeProgress")}</h2>
          <p className="mt-2 text-sm text-muted">{t(locale, "modeProgressHint")}</p>
        </Link>
        <Link href="/test?mode=errors" className="card p-5 text-ink no-underline">
          <h2 className="font-black">{t(locale, "modeErrors")}</h2>
          <p className="mt-2 text-sm text-muted">{t(locale, "modeErrorsHint")}</p>
        </Link>
        <Link href="/signs" className="card p-5 text-ink no-underline">
          <h2 className="font-black">{t(locale, "signs")}</h2>
          <p className="mt-2 text-sm text-muted">{t(locale, "modeDemoHint")}</p>
        </Link>
      </section>

      <section className="card p-8">
        <h2 className="text-2xl font-black">{t(locale, "toolsTitle")}</h2>
        <p className="mt-3 max-w-3xl text-muted">{t(locale, "toolsBody")}</p>
        <p className="mt-4 text-gold">{t(locale, "suggest")}</p>
        <p className="text-muted">{t(locale, "suggestBody")}</p>
      </section>
    </div>
  );
}
