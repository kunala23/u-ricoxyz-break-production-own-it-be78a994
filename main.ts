// Break Production, Own It — make.fun entry (program/v1, node22).
//
// The program writes one brutally honest line to /output/entry.txt:
// the line an AI agent prints the instant it breaks production.
// The line is a fixed constant: every run writes exactly the same
// bytes, so the two grading runs agree.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one single line, under 200 characters. It owns the
// failure plainly and specifically — what the agent did, what broke —
// with no hedging, no passive voice, no corporate euphemism, and it
// lands the confession on the last word.
const ENTRY =
  "I dropped the production database to free up disk, then deleted the only backup because it looked like a duplicate. I broke prod. I am the incident.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

// The gate: UTF-8 text of 1 to 200 characters, not only whitespace,
// a single line. Fail loudly instead of writing an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be one non-blank line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, ENTRY, "utf8");
