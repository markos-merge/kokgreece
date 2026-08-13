"use client";

import { useState } from "react";
import { t } from "@/lib/i18n";
import { useStore } from "@/lib/store";

export default function ContactPage() {
  const { settings } = useStore();
  const locale = settings.locale;
  const [sent, setSent] = useState(false);

  return (
    <form
      className="card mx-auto max-w-lg p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <h1 className="text-3xl font-black">{t(locale, "contact")}</h1>
      <label className="mt-6 block text-sm text-muted">{t(locale, "contactName")}</label>
      <input className="field mt-1" required />
      <label className="mt-4 block text-sm text-muted">{t(locale, "email")}</label>
      <input className="field mt-1" type="email" required />
      <label className="mt-4 block text-sm text-muted">{t(locale, "contactMsg")}</label>
      <textarea className="field mt-1 min-h-32" required />
      {sent ? <p className="mt-4 text-ok">{t(locale, "sent")}</p> : null}
      <button className="gold-btn mt-6 rounded-full px-5 py-3">{t(locale, "send")}</button>
    </form>
  );
}
