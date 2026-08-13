"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { t } from "@/lib/i18n";
import { useStore } from "@/lib/store";

const NAV = [
  { href: "/", key: "home" as const },
  { href: "/theory", key: "theory" as const },
  { href: "/signs", key: "signs" as const },
  { href: "/stats", key: "stats" as const },
  { href: "/faq", key: "faq" as const }
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { settings, currentUser, logout, setLocale } = useStore();
  const locale = settings.locale;

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-line/80 bg-[#100e0b]/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link href="/" className="flex items-center gap-3 no-underline">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold text-lg font-black text-[#1a1206]">
              Κ
            </span>
            <span>
              <strong className="block text-ink">{t(locale, "brand")}</strong>
              <span className="block text-xs text-muted">kokgreece</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-4 text-sm md:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`no-underline ${pathname === item.href ? "text-gold" : "text-ink/80 hover:text-gold"}`}
              >
                {t(locale, item.key)}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              className="rounded-full border border-line px-3 py-1 text-xs text-muted"
              onClick={() => setLocale(locale === "el" ? "en" : "el")}
            >
              {locale === "el" ? "EN" : "ΕΛ"}
            </button>
            {currentUser ? (
              <>
                <Link href="/dashboard" className="hidden text-sm text-ink no-underline sm:inline">
                  {currentUser.name}
                </Link>
                <button className="text-sm text-muted" onClick={logout}>
                  {t(locale, "logout")}
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-sm text-ink no-underline">
                  {t(locale, "login")}
                </Link>
                <Link href="/register" className="gold-btn rounded-full px-3 py-1 text-sm no-underline">
                  {t(locale, "register")}
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
      <nav className="mx-auto flex max-w-6xl gap-3 overflow-x-auto px-4 pb-2 text-sm md:hidden">
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`whitespace-nowrap no-underline ${pathname === item.href ? "text-gold" : "text-muted"}`}
          >
            {t(locale, item.key)}
          </Link>
        ))}
      </nav>
      <main className="mx-auto w-full max-w-6xl px-4 py-8">{children}</main>
      <footer className="border-t border-line/80 px-4 py-8 text-center text-sm text-muted">
        <p>{t(locale, "independent")}</p>
        <p className="mt-2">
          <Link href="/contact">{t(locale, "contact")}</Link>
          {" · "}
          <Link href="/settings">{t(locale, "settings")}</Link>
        </p>
      </footer>
    </div>
  );
}
