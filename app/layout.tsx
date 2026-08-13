import type { Metadata } from "next";
import { Manrope, Noto_Sans } from "next/font/google";
import { Providers } from "@/components/Providers";
import { AppShell } from "@/components/AppShell";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin", "latin-ext"], variable: "--font-manrope" });
const noto = Noto_Sans({ subsets: ["latin", "greek"], variable: "--font-noto" });

export const metadata: Metadata = {
  title: "ΚΟΚ Ελλάς — Τεστ θεωρίας διπλώματος",
  description:
    "Εξάσκηση για τις θεωρητικές εξετάσεις ΚΟΚ: εύκολο τεστ, τεστ ενότητας και προσομοίωση Υπουργείου."
};

export const viewport = {
  themeColor: "#f0a12a"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el">
      <body className={`${manrope.variable} ${noto.variable} antialiased`}>
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
