#!/usr/bin/env node
import { spawn } from "node:child_process";
import { createRequire } from "node:module";

process.env.NEXT_TEST_WASM = "1";
process.env.RUST_MIN_STACK ??= "8388608";

const nodeMajor = Number(process.versions.node.split(".")[0]);
if (nodeMajor >= 24) {
  process.stderr.write(
    `Using WASM SWC on Node ${process.versions.node} (native SWC often SIGBUS on Node 24+).\n`
  );
}

const require = createRequire(import.meta.url);
const nextBin = require.resolve("next/dist/bin/next");
const child = spawn(process.execPath, [nextBin, ...process.argv.slice(2)], {
  stdio: "inherit",
  env: process.env
});

child.on("exit", (code, signal) => {
  if (signal) process.exit(1);
  process.exit(code ?? 1);
});
