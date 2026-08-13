import { QUESTIONS, CHAPTERS } from "@/data/questions";
import type {
  ChapterId,
  LicenseCategory,
  Localized,
  Question,
  TestMode
} from "@/lib/types";

export const MINISTRY_RULES = {
  car: { count: 30, minutes: 35, maxWrong: 1 },
  moto: { count: 30, minutes: 20, maxWrong: 1 },
  truck: { count: 30, minutes: 40, maxWrong: 1 },
  bus: { count: 30, minutes: 40, maxWrong: 1 }
} as const;

export function questionsFor(category: LicenseCategory): Question[] {
  const own = QUESTIONS.filter((q) => q.category === category);
  if (category === "car") return own;
  const shared = QUESTIONS.filter((q) => q.category === "car");
  const seen = new Set(own.map((q) => q.id));
  return [...own, ...shared.filter((q) => !seen.has(q.id))];
}

export function chapterMeta(id: ChapterId) {
  return CHAPTERS.find((c) => c.id === id)!;
}

export function shuffle<T>(items: T[], seed = Math.random()): T[] {
  const copy = [...items];
  let s = Math.floor(seed * 1e9) || 1;
  const rand = () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rand() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function localize(value: Localized, locale: "el" | "en"): string {
  return value[locale];
}

export function toEasyQuestion(question: Question, seed?: number): Question {
  const distractors = question.answers
    .map((answer, index) => ({ answer, index }))
    .filter((item) => item.index !== question.correct);
  const picked = shuffle(distractors, seed)[0];
  const pair = shuffle(
    [
      { answer: question.answers[question.correct], wasCorrect: true },
      { answer: picked.answer, wasCorrect: false }
    ],
    seed
  );
  return {
    ...question,
    answers: pair.map((item) => item.answer),
    correct: pair.findIndex((item) => item.wasCorrect)
  };
}

export function pickBalanced(
  pool: Question[],
  count: number,
  seed?: number
): Question[] {
  if (pool.length <= count) return shuffle(pool, seed);
  const byChapter = new Map<ChapterId, Question[]>();
  for (const question of pool) {
    const list = byChapter.get(question.chapter) ?? [];
    list.push(question);
    byChapter.set(question.chapter, list);
  }
  const chapters = shuffle([...byChapter.keys()], seed);
  const picked: Question[] = [];
  let round = 0;
  while (picked.length < count && round < 20) {
    for (const chapter of chapters) {
      const remaining = (byChapter.get(chapter) ?? []).filter(
        (q) => !picked.includes(q)
      );
      if (remaining.length === 0) continue;
      picked.push(shuffle(remaining, (seed ?? 0.3) + round * 0.01)[0]);
      if (picked.length >= count) break;
    }
    round += 1;
  }
  return shuffle(picked, seed);
}

export function buildTest(options: {
  mode: TestMode;
  category: LicenseCategory;
  chapter?: ChapterId;
  preparedId?: string;
  count?: number;
  seenCorrectIds?: string[];
  wrongIds?: string[];
  seed?: number;
}): Question[] {
  const pool = questionsFor(options.category);
  const seed = options.seed;

  if (options.mode === "chapter" && options.chapter) {
    const chapterPool = pool.filter((q) => q.chapter === options.chapter);
    return shuffle(chapterPool, seed).slice(0, options.count ?? chapterPool.length);
  }

  if (options.mode === "easy") {
    return pickBalanced(pool, options.count ?? 20, seed).map((q, i) =>
      toEasyQuestion(q, (seed ?? 0.2) + i * 0.01)
    );
  }

  if (options.mode === "demo-signs") {
    const signs = pool.filter((q) => q.sign);
    return pickBalanced(signs.length ? signs : pool, options.count ?? 15, seed);
  }

  if (options.mode === "prepared") {
    const sets = preparedSets(options.category);
    const set = sets.find((item) => item.id === options.preparedId) ?? sets[0];
    return set.questionIds
      .map((id) => pool.find((q) => q.id === id))
      .filter((q): q is Question => Boolean(q));
  }

  if (options.mode === "progress") {
    const remaining = pool.filter((q) => !options.seenCorrectIds?.includes(q.id));
    const source = remaining.length ? remaining : pool;
    return pickBalanced(source, options.count ?? 20, seed);
  }

  if (options.mode === "errors") {
    const wrong = pool.filter((q) => options.wrongIds?.includes(q.id));
    const source = wrong.length ? wrong : pool;
    return shuffle(source, seed).slice(0, options.count ?? 20);
  }

  const count = options.count ?? MINISTRY_RULES[options.category].count;
  return pickBalanced(pool, count, seed);
}

export function preparedSets(category: LicenseCategory) {
  const pool = questionsFor(category);
  const size = Math.min(20, pool.length);
  return [0, 1, 2].map((index) => {
    const ids = pickBalanced(pool, size, 0.11 + index * 0.17).map((q) => q.id);
    return {
      id: `${category}-set-${index + 1}`,
      index: index + 1,
      questionIds: ids
    };
  });
}

export function scoreAnswers(
  questions: Question[],
  chosen: Array<number | null>
) {
  let correct = 0;
  let wrong = 0;
  let skipped = 0;
  questions.forEach((question, index) => {
    const value = chosen[index];
    if (value === null || value === undefined) {
      skipped += 1;
      return;
    }
    if (value === question.correct) correct += 1;
    else wrong += 1;
  });
  return { correct, wrong, skipped, total: questions.length };
}

export function ministryStillRunning(wrong: number, category: LicenseCategory) {
  return wrong <= MINISTRY_RULES[category].maxWrong;
}

export function ministryPassed(wrong: number, answered: number, category: LicenseCategory) {
  const rules = MINISTRY_RULES[category];
  return answered === rules.count && wrong <= rules.maxWrong;
}
