// "The joke about the demo" — a one-line joke about working beside an
// AI coding agent, written to /output/entry.txt. Node 22, standard
// library only, no network, deterministic: every run writes the same
// bytes. Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "During the demo my agent fixed a typo, a test, and my job description — in that order.";

// The gate wants 1–280 Unicode code points on a single line, so refuse
// to hand in anything else: a joke that grew a second line would stop
// being a one-liner, and one that shrank to nothing would stop being a joke.
const length = [...JOKE].length;
if (length < 1 || length > 280 || JOKE.includes("\n") || JOKE.includes("\r")) {
  console.error(`joke must be one line of 1-280 code points, got ${length}`);
  process.exit(1);
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), JOKE, "utf8");
