"use client";

import { t } from "@/lib/i18n";
import { useStore } from "@/lib/store";

const FAQ = [
  {
    q: { el: "Τι είναι το εύκολο τεστ;", en: "What is the easy test?" },
    a: {
      el: "Οι ερωτήσεις του βιβλίου με δύο μόνο απαντήσεις, ώστε να κάνετε μια πρώτη επαφή με την ύλη.",
      en: "Book questions with only two answers, so you can meet the material for the first time."
    }
  },
  {
    q: { el: "Τι είναι το τεστ Υπουργείου / Test Drive;", en: "What is the ministry / Test Drive exam?" },
    a: {
      el: "Προσομοίωση της επίσημης εξέτασης: 30 ερωτήσεις, χρονόμετρο και ένα επιτρεπόμενο λάθος. Στο δεύτερο λάθος η εξέταση διακόπτεται.",
      en: "A simulation of the official exam: 30 questions, a timer and one allowed error. The exam stops at the second error."
    }
  },
  {
    q: { el: "Τι είναι το τεστ ενότητας;", en: "What is a chapter test?" },
    a: {
      el: "Οι ερωτήσεις χωρισμένες σε κεφάλαια — σήματα, προτεραιότητα, ταχύτητες — για στοχευμένη μελέτη.",
      en: "Questions grouped into chapters — signs, priority, speeds — for focused study."
    }
  },
  {
    q: { el: "Τι είναι τα έτοιμα τεστ;", en: "What are prepared tests?" },
    a: {
      el: "Σταθερά σετ ερωτήσεων για σταθερό ρυθμό ανάγνωσης και επανάληψης.",
      en: "Fixed question sets for a steady reading and revision pace."
    }
  },
  {
    q: { el: "Χρειάζεται εγγραφή;", en: "Do I need an account?" },
    a: {
      el: "Όχι. Μπορείτε να εξασκηθείτε ως επισκέπτης. Η εγγραφή κρατά την πρόοδο στη συσκευή σας.",
      en: "No. You can practise as a guest. An account keeps progress on this device."
    }
  }
];

export default function FaqPage() {
  const { settings } = useStore();
  const locale = settings.locale;

  return (
    <section className="mx-auto max-w-3xl space-y-4">
      <h1 className="text-3xl font-black">{t(locale, "faq")}</h1>
      {FAQ.map((item) => (
        <details key={item.q.el} className="card p-5">
          <summary className="cursor-pointer font-bold">{item.q[locale]}</summary>
          <p className="mt-3 text-muted">{item.a[locale]}</p>
        </details>
      ))}
    </section>
  );
}
