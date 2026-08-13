"use client";

import { t } from "@/lib/i18n";
import { useStore } from "@/lib/store";

export default function StatsPage() {
  const { settings, results, history } = useStore();
  const locale = settings.locale;

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-black">{t(locale, "stats")}</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="card p-5">
          <p className="text-muted">{t(locale, "totalTests")}</p>
          <p className="text-3xl font-black">{results.length}</p>
        </div>
        <div className="card p-5">
          <p className="text-muted">{t(locale, "totalAnswers")}</p>
          <p className="text-3xl font-black">{history.length}</p>
        </div>
        <div className="card p-5">
          <p className="text-muted">{t(locale, "correct")}</p>
          <p className="text-3xl font-black">{history.filter((item) => item.correct).length}</p>
        </div>
      </div>
      <div className="card p-6">
        <h2 className="font-black">{t(locale, "history")}</h2>
        {results.length === 0 ? (
          <p className="mt-3 text-muted">{t(locale, "emptyHistory")}</p>
        ) : (
          <ul className="mt-4 space-y-3">
            {results.map((item) => (
              <li key={item.id} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line p-4">
                <div>
                  <p className="font-bold">{item.mode}</p>
                  <p className="text-sm text-muted">
                    {new Date(item.finishedAt).toLocaleString(locale === "el" ? "el-GR" : "en-GB")}
                  </p>
                </div>
                <p className={item.wrong > 1 && (item.mode === "ministry" || item.mode === "drive") ? "text-danger" : "text-gold"}>
                  {item.correct}/{item.total}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
