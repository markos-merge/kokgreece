"use client";

import { CATEGORIES } from "@/data/questions";
import { localize } from "@/lib/exam";
import { t } from "@/lib/i18n";
import { useStore } from "@/lib/store";

export default function SettingsPage() {
  const { settings, updateSettings, setLocale, setCategory } = useStore();
  const locale = settings.locale;

  return (
    <section className="card mx-auto max-w-lg p-8">
      <h1 className="text-3xl font-black">{t(locale, "settings")}</h1>
      <p className="mt-6 text-sm text-muted">{t(locale, "language")}</p>
      <div className="mt-2 flex gap-2">
        <button
          className={`rounded-full px-4 py-2 ${locale === "el" ? "gold-btn" : "border border-line"}`}
          onClick={() => setLocale("el")}
        >
          Ελληνικά
        </button>
        <button
          className={`rounded-full px-4 py-2 ${locale === "en" ? "gold-btn" : "border border-line"}`}
          onClick={() => setLocale("en")}
        >
          English
        </button>
      </div>
      <p className="mt-6 text-sm text-muted">{t(locale, "category")}</p>
      <div className="mt-2 grid grid-cols-2 gap-2">
        {CATEGORIES.map((item) => (
          <button
            key={item.id}
            onClick={() => setCategory(item.id)}
            className={`rounded-xl border px-3 py-2 ${settings.category === item.id ? "border-gold" : "border-line"}`}
          >
            {localize(item.title, locale)}
          </button>
        ))}
      </div>
      <label className="mt-6 flex items-center gap-3">
        <input
          type="checkbox"
          checked={settings.hideAnswers}
          onChange={(e) => updateSettings({ hideAnswers: e.target.checked })}
        />
        {t(locale, "hideAnswers")}
      </label>
      <label className="mt-3 flex items-center gap-3">
        <input
          type="checkbox"
          checked={settings.autoHelp}
          onChange={(e) => updateSettings({ autoHelp: e.target.checked })}
        />
        {t(locale, "autoHelp")}
      </label>
    </section>
  );
}
