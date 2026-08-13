"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CATEGORIES } from "@/data/questions";
import { localize } from "@/lib/exam";
import { t } from "@/lib/i18n";
import { useStore } from "@/lib/store";
import type { LicenseCategory, UserRole } from "@/lib/types";

export default function RegisterPage() {
  const { settings, register } = useStore();
  const locale = settings.locale;
  const router = useRouter();
  const [role, setRole] = useState<UserRole>("student");
  const [category, setCategory] = useState<LicenseCategory>("car");
  const [error, setError] = useState("");

  return (
    <form
      className="card mx-auto max-w-lg p-8"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const result = register({
          username: String(data.get("username") ?? ""),
          email: String(data.get("email") ?? ""),
          password: String(data.get("password") ?? ""),
          name: String(data.get("name") ?? ""),
          role,
          category
        });
        if (!result.ok) {
          setError(t(locale, "exists"));
          return;
        }
        router.push("/dashboard");
      }}
    >
      <h1 className="text-3xl font-black">{t(locale, "register")}</h1>
      <div className="mt-5 grid grid-cols-2 gap-3">
        {(["student", "school"] as const).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setRole(item)}
            className={`rounded-2xl border px-3 py-3 ${role === item ? "border-gold bg-gold/10" : "border-line"}`}
          >
            {t(locale, item)}
          </button>
        ))}
      </div>
      <label className="mt-5 block text-sm text-muted">{t(locale, "name")}</label>
      <input className="field mt-1" name="name" required />
      <label className="mt-4 block text-sm text-muted">{t(locale, "username")}</label>
      <input className="field mt-1" name="username" required />
      <label className="mt-4 block text-sm text-muted">{t(locale, "email")}</label>
      <input className="field mt-1" name="email" type="email" required />
      <label className="mt-4 block text-sm text-muted">{t(locale, "password")}</label>
      <input className="field mt-1" name="password" type="password" minLength={4} required />
      <p className="mt-5 text-sm text-muted">{t(locale, "category")}</p>
      <div className="mt-2 grid grid-cols-2 gap-2">
        {CATEGORIES.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setCategory(item.id)}
            className={`rounded-xl border px-3 py-2 text-sm ${category === item.id ? "border-gold" : "border-line"}`}
          >
            {localize(item.title, locale)}
          </button>
        ))}
      </div>
      {error ? <p className="mt-3 text-sm text-danger">{error}</p> : null}
      <button className="gold-btn mt-6 w-full rounded-full py-3">{t(locale, "register")}</button>
      <p className="mt-4 text-sm text-muted">
        {t(locale, "haveAccount")} <Link href="/login">{t(locale, "login")}</Link>
      </p>
    </form>
  );
}
