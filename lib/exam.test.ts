import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  buildTest,
  ministryPassed,
  ministryStillRunning,
  scoreAnswers,
  toEasyQuestion
} from "./exam";
import { QUESTIONS } from "../data/questions";

describe("exam engine", () => {
  it("builds a 30-question ministry test for cars", () => {
    const test = buildTest({ mode: "ministry", category: "car", seed: 0.42 });
    assert.equal(test.length, 30);
    assert.equal(new Set(test.map((q) => q.id)).size, 30);
  });

  it("reduces easy tests to two answers", () => {
    const source = QUESTIONS.find((q) => q.answers.length === 3)!;
    const easy = toEasyQuestion(source, 0.5);
    assert.equal(easy.answers.length, 2);
    assert.equal(easy.answers[easy.correct].el, source.answers[source.correct].el);
  });

  it("scores mixed answers", () => {
    const questions = QUESTIONS.slice(0, 3);
    const result = scoreAnswers(questions, [questions[0].correct, 99, null]);
    assert.deepEqual(result, { correct: 1, wrong: 1, skipped: 1, total: 3 });
  });

  it("applies ministry pass rules", () => {
    assert.equal(ministryStillRunning(1, "car"), true);
    assert.equal(ministryStillRunning(2, "car"), false);
    assert.equal(ministryPassed(1, 30, "car"), true);
    assert.equal(ministryPassed(2, 30, "car"), false);
    assert.equal(ministryPassed(0, 29, "car"), false);
  });
});
