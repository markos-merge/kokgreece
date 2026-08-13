"use client";

import Link from "next/link";
import { SignMark, SIGN_CATALOG } from "@/components/SignMark";
import { CHAPTERS } from "@/data/questions";
import { localize } from "@/lib/exam";
import { t } from "@/lib/i18n";
import { useStore } from "@/lib/store";

export default function SignsPage() {
  const { settings } = useStore();
  const locale = settings.locale;

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h1 className="text-3xl font-black">{t(locale, "signs")}</h1>
        <Link href="/test?mode=demo-signs" className="gold-btn rounded-full px-4 py-2 no-underline">
          {t(locale, "modeDemo")}
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {SIGN_CATALOG.map((sign) => {
          const chapter = CHAPTERS.find((item) => item.id === sign.chapter);
          return (
            <article key={sign.id} className="card flex flex-col items-center p-5 text-center">
              <SignMark id={sign.id} />
              <p className="mt-3 font-bold">{sign.id.replaceAll("-", " ")}</p>
              <p className="text-xs text-muted">{chapter ? localize(chapter.title, locale) : ""}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
