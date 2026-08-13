import fs from "node:fs";
import path from "node:path";

function walk(dir, depth = 0) {
  if (depth > 4 || !fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name.startsWith("swc-") && !entry.name.includes("wasm")) {
      fs.rmSync(full, { recursive: true, force: true });
      continue;
    }
    if (entry.isDirectory() && (entry.name === "@next" || entry.name === "node_modules")) {
      walk(full, depth + 1);
    }
  }
}

walk(path.join(process.cwd(), "node_modules"));
