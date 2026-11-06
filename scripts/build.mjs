// Bündelt alle Module aus css/main.css zu einer Datei ohne @import.
// Jede Moduldatei kapselt sich bereits selbst in ihrem @layer-Block.
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { transform } from "lightningcss";

const entry = "css/main.css";
const main = readFileSync(entry, "utf8");

const layerOrder = main.match(/^@layer\s+[^;{]+;/m)?.[0];
if (!layerOrder) throw new Error("Layer-Reihenfolge in main.css nicht gefunden");

const files = [...main.matchAll(/@import url\("([^"]+)"\)/g)].map((m) => m[1]);

const banner = "/*! css-toolkit | MIT */\n";
const bundle =
  banner +
  layerOrder +
  "\n\n" +
  files.map((f) => `/* ${f} */\n` + readFileSync(join(dirname(entry), f), "utf8")).join("\n");

writeFileSync("dist/toolkit.css", bundle);

const { code } = transform({
  filename: "toolkit.css",
  code: Buffer.from(bundle),
  minify: true,
  targets: { chrome: 111 << 16, firefox: 113 << 16, safari: (16 << 16) | (4 << 8) },
});
writeFileSync("dist/toolkit.min.css", code);
console.log(`${files.length} Module gebündelt`);
