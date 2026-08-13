export type Locale = "el" | "en";
export type LicenseCategory = "car" | "moto" | "truck" | "bus";
export type TestMode =
  | "easy"
  | "ministry"
  | "drive"
  | "prepared"
  | "chapter"
  | "progress"
  | "errors"
  | "demo-signs";

export type ChapterId =
  | "danger-signs"
  | "regulatory-signs"
  | "info-signs"
  | "markings"
  | "priority"
  | "speed"
  | "distance"
  | "lights"
  | "overtaking"
  | "parking"
  | "alcohol"
  | "mechanics"
  | "documents"
  | "first-aid"
  | "eco";

export type Localized = { el: string; en: string };

export type Question = {
  id: string;
  category: LicenseCategory;
  chapter: ChapterId;
  difficulty: "easy" | "medium" | "hard";
  sign?: string;
  text: Localized;
  answers: Localized[];
  correct: number;
  help: Localized;
};

export type UserRole = "student" | "school";

export type User = {
  id: string;
  username: string;
  email: string;
  password: string;
  name: string;
  role: UserRole;
  category: LicenseCategory;
  createdAt: string;
};

export type Settings = {
  locale: Locale;
  category: LicenseCategory;
  hideAnswers: boolean;
  autoHelp: boolean;
};

export type AnswerRecord = {
  questionId: string;
  chosen: number;
  correct: boolean;
  at: string;
  mode: TestMode;
};

export type TestResult = {
  id: string;
  mode: TestMode;
  category: LicenseCategory;
  chapter?: ChapterId;
  preparedId?: string;
  startedAt: string;
  finishedAt: string;
  total: number;
  correct: number;
  wrong: number;
  skipped: number;
  passed?: boolean;
  durationSec: number;
  answers: { questionId: string; chosen: number | null; correctIndex: number }[];
};

export type AppState = {
  users: User[];
  currentUserId: string | null;
  settings: Settings;
  history: AnswerRecord[];
  results: TestResult[];
};
