// Every text must exist in Dutch and English, with the same {placeholders}.
// A missing English text would show up as the Dutch one, or as the bare key.
import { en, nl } from "../frontend/src/strings.js";

const holes = (text) => [...String(text).matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort().join(",");
const problems = [];

for (const key of Object.keys(nl)) {
  if (!(key in en)) problems.push(`missing in English: ${key}`);
  else if (holes(nl[key]) !== holes(en[key])) {
    problems.push(`placeholders differ in ${key}: nl {${holes(nl[key])}} en {${holes(en[key])}}`);
  }
}
for (const key of Object.keys(en)) {
  if (!(key in nl)) problems.push(`missing in Dutch: ${key}`);
}
for (const [language, strings] of [["nl", nl], ["en", en]]) {
  for (const [key, value] of Object.entries(strings)) {
    if (typeof value !== "string" || !value.trim()) problems.push(`empty text in ${language}: ${key}`);
  }
}

if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}
console.log(`texts: ${Object.keys(nl).length} in Dutch and English`);
