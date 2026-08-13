"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { t } from "@/lib/i18n";
import { useStore } from "@/lib/store";

export default function LoginPage() {
  const { settings, login } = useStore();
  const locale = settings.locale;
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <form
      className="card mx-auto max-w-md p-8"
      onSubmit={(event) => {
        event.preventDefault();
        if (!login(username, password)) {
          setError(t(locale, "loginError"));
          return;
        }
        router.push("/dashboard");
      }}
    >
      <h1 className="text-3xl font-black">{t(locale, "login")}</h1>
      <label className="mt-6 block text-sm text-muted">{t(locale, "username")}</label>
      <input className="field mt-1" value={username} onChange={(e) => setUsername(e.target.value)} required />
      <label className="mt-4 block text-sm text-muted">{t(locale, "password")}</label>
      <input className="field mt-1" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      {error ? <p className="mt-3 text-sm text-danger">{error}</p> : null}
      <button className="gold-btn mt-6 w-full rounded-full py-3">{t(locale, "login")}</button>
      <p className="mt-4 text-sm text-muted">
        {t(locale, "noAccount")} <Link href="/register">{t(locale, "register")}</Link>
      </p>
    </form>
  );
}
