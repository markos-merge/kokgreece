import type { Locale } from "@/lib/types";

const dict = {
  brand: { el: "ΚΟΚ Ελλάς", en: "KOK Ellas" },
  tagline: {
    el: "Μάθετε τα σήματα του ΚΟΚ και περάστε με την πρώτη.",
    en: "Learn the Greek highway code and pass first time."
  },
  quote: {
    el: "Η γνώση δεν έχει αξία αν δεν την εφαρμόσεις.",
    en: "Knowledge has no value unless you put it into practice."
  },
  start: { el: "Έναρξη", en: "Start" },
  demo: { el: "Δοκιμή χωρίς εγγραφή", en: "Try without signing up" },
  login: { el: "Είσοδος", en: "Sign in" },
  register: { el: "Εγγραφή", en: "Register" },
  logout: { el: "Έξοδος", en: "Sign out" },
  home: { el: "Αρχική", en: "Home" },
  theory: { el: "Θεωρία", en: "Theory" },
  signs: { el: "Σήμανση ΚΟΚ", en: "Traffic signs" },
  stats: { el: "Στατιστικά", en: "Statistics" },
  faq: { el: "Συχνές ερωτήσεις", en: "FAQ" },
  contact: { el: "Επικοινωνία", en: "Contact" },
  settings: { el: "Ρυθμίσεις", en: "Settings" },
  dashboard: { el: "Πίνακας ελέγχου", en: "Dashboard" },
  category: { el: "Κατηγορία", en: "Category" },
  continue: { el: "Συνέχεια", en: "Continue" },
  next: { el: "Επόμενο", en: "Next" },
  prev: { el: "Προηγούμενο", en: "Previous" },
  finish: { el: "Ολοκλήρωση", en: "Finish" },
  cancel: { el: "Ακύρωση", en: "Cancel" },
  save: { el: "Αποθήκευση", en: "Save" },
  question: { el: "Ερώτηση", en: "Question" },
  remaining: { el: "Απομένουν", en: "Remaining" },
  correct: { el: "Σωστό", en: "Correct" },
  wrong: { el: "Λάθος", en: "Wrong" },
  skipped: { el: "Παραλείφθηκαν", en: "Skipped" },
  passed: { el: "Επιτυχία", en: "Pass" },
  failed: { el: "Αποτυχία", en: "Fail" },
  showAnswers: { el: "Εμφάνισε τις απαντήσεις", en: "Show the answers" },
  showCorrect: { el: "Εμφάνισε τη σωστή απάντηση", en: "Show the correct answer" },
  help: { el: "Βοήθεια", en: "Help" },
  hideAnswers: { el: "Σύστημα κρυφών απαντήσεων", en: "Hidden-answer mode" },
  autoHelp: { el: "Αυτόματη εμφάνιση βοήθειας", en: "Show help automatically" },
  exitTest: { el: "Έξοδος από το τεστ", en: "Leave the test" },
  exitConfirm: {
    el: "Είστε σίγουρος ότι θέλετε να ακυρώσετε το τεστ;",
    en: "Are you sure you want to cancel the test?"
  },
  resultTitle: { el: "Αποτέλεσμα τεστ", en: "Test result" },
  again: { el: "Νέο τεστ", en: "New test" },
  backHome: { el: "Αρχική σελίδα", en: "Home" },
  toolsTitle: {
    el: "Για την επιτυχία δεν αρκεί μόνο η προσπάθεια. Χρειάζεστε και εργαλεία.",
    en: "Effort is not enough. You also need the right tools."
  },
  toolsBody: {
    el: "Εξασκηθείτε όπως στην επίσημη εξέταση των Διευθύνσεων Μεταφορών: τυχαίες ερωτήσεις, χρονόμετρο και ένα μόνο επιτρεπόμενο λάθος.",
    en: "Practise like the official Transport Directorate exam: random questions, a timer, and only one allowed error."
  },
  modeEasy: { el: "Εύκολο τεστ", en: "Easy test" },
  modeEasyHint: {
    el: "Οι ίδιες ερωτήσεις, αλλά με δύο μόνο απαντήσεις.",
    en: "The same questions, but with only two answers."
  },
  modeMinistry: { el: "Τεστ Υπουργείου", en: "Ministry test" },
  modeMinistryHint: {
    el: "30 ερωτήσεις, επίσημοι κανόνες επιτυχίας.",
    en: "30 questions with official pass rules."
  },
  modeDrive: { el: "Test Drive", en: "Test Drive" },
  modeDriveHint: {
    el: "Προσομοίωση της εφαρμογής εξέτασης.",
    en: "A simulation of the exam application."
  },
  modePrepared: { el: "Έτοιμα τεστ", en: "Prepared tests" },
  modePreparedHint: {
    el: "Σταθερά σετ για σταθερό ρυθμό μελέτης.",
    en: "Fixed sets for a steady study pace."
  },
  modeChapter: { el: "Τεστ ενότητας", en: "Chapter test" },
  modeChapterHint: {
    el: "Μελέτη ανά κεφάλαιο: σήματα, προτεραιότητα, ταχύτητες.",
    en: "Study by chapter: signs, priority, speeds."
  },
  modeProgress: { el: "Τεστ προόδου", en: "Progress test" },
  modeProgressHint: {
    el: "Ερωτήσεις που δεν έχετε απαντήσει ακόμη σωστά.",
    en: "Questions you have not answered correctly yet."
  },
  modeErrors: { el: "Τεστ λαθών", en: "Errors test" },
  modeErrorsHint: {
    el: "Ξαναδείτε μόνο όσα χάσατε.",
    en: "Revisit only what you missed."
  },
  modeDemo: { el: "Τεστ σημάτων", en: "Signs test" },
  modeDemoHint: {
    el: "15 ερωτήσεις στα σήματα. Δοκιμάστε το τώρα.",
    en: "15 sign questions. Try it now."
  },
  suggest: { el: "Τι σας προτείνουμε", en: "What we suggest" },
  suggestBody: {
    el: "Ξεκινήστε από το εύκολο τεστ, συνεχίστε στις ενότητες και κλείστε με τεστ Υπουργείου.",
    en: "Start with the easy test, continue with chapters, then finish with a ministry test."
  },
  username: { el: "Όνομα χρήστη", en: "Username" },
  email: { el: "E-mail", en: "Email" },
  password: { el: "Συνθηματικό", en: "Password" },
  name: { el: "Όνομα", en: "Name" },
  remember: { el: "Να με θυμάσαι", en: "Remember me" },
  noAccount: { el: "Δεν έχετε λογαριασμό;", en: "No account yet?" },
  haveAccount: { el: "Έχετε ήδη λογαριασμό;", en: "Already have an account?" },
  student: { el: "Μαθητής", en: "Student" },
  school: { el: "Σχολή οδηγών", en: "Driving school" },
  loginError: { el: "Τα στοιχεία εισόδου δεν είναι σωστά.", en: "Those sign-in details are not correct." },
  loginOk: { el: "Συνδεθήκατε επιτυχώς.", en: "You are signed in." },
  registerOk: { el: "Ο λογαριασμός δημιουργήθηκε.", en: "The account was created." },
  exists: { el: "Το e-mail ή το username υπάρχει ήδη.", en: "That email or username already exists." },
  guest: { el: "Επισκέπτης", en: "Guest" },
  completion: { el: "Ποσοστό ολοκλήρωσης", en: "Completion" },
  totalTests: { el: "Συνολικά τεστ", en: "Total tests" },
  totalAnswers: { el: "Συνολικές απαντήσεις", en: "Total answers" },
  lastScore: { el: "Τελευταίο σκορ", en: "Last score" },
  weakChapter: { el: "Κατηγορία με τα περισσότερα λάθη", en: "Weakest chapter" },
  history: { el: "Ιστορικό", en: "History" },
  emptyHistory: { el: "Δεν έχετε ολοκληρώσει ακόμη τεστ.", en: "You have not finished a test yet." },
  contactName: { el: "Το όνομά σας", en: "Your name" },
  contactMsg: { el: "Μήνυμα", en: "Message" },
  send: { el: "Αποστολή", en: "Send" },
  sent: { el: "Το μήνυμά σας καταχωρήθηκε. Θα επικοινωνήσουμε μαζί σας.", en: "Your message was saved. We will get back to you." },
  independent: {
    el: "Ανεξάρτητη εφαρμογή εξάσκησης. Δεν συνδέεται με το Υπουργείο Υποδομών και Μεταφορών ούτε με άλλες εμπορικές πλατφόρμες.",
    en: "An independent practice app. Not affiliated with the Ministry of Infrastructure and Transport or other commercial platforms."
  },
  chooseChapter: { el: "Επιλέξτε ενότητα", en: "Choose a chapter" },
  chooseSet: { el: "Επιλέξτε έτοιμο τεστ", en: "Choose a prepared test" },
  setOf: { el: "Σετ", en: "Set" },
  questions: { el: "ερωτήσεις", en: "questions" },
  timeLeft: { el: "Χρόνος", en: "Time" },
  examStopped: {
    el: "Η εξέταση διακόπηκε στο δεύτερο λάθος.",
    en: "The exam stopped at the second error."
  },
  noneLeft: {
    el: "Δεν έχουν απομείνει άλλες ερωτήσεις σε αυτή την κατηγορία.",
    en: "There are no questions left in this category."
  },
  language: { el: "Γλώσσα", en: "Language" },
  required: { el: "Υποχρεωτικό πεδίο", en: "Required field" }
} as const;

export type MessageKey = keyof typeof dict;

export function t(locale: Locale, key: MessageKey): string {
  return dict[key][locale];
}
