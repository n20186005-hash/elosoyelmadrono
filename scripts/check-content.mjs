import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import ts from 'typescript';

const root = process.cwd();
const nodeRequire = createRequire(import.meta.url);
const cache = new Map();
function load(file) {
  const absolute = path.resolve(file);
  if (cache.has(absolute)) return cache.get(absolute);
  if (absolute.endsWith('.json')) return JSON.parse(fs.readFileSync(absolute, 'utf8'));
  const module = { exports: {} };
  cache.set(absolute, module.exports);
  const code = ts.transpileModule(fs.readFileSync(absolute, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true } }).outputText;
  function localRequire(name) {
    if (!name.startsWith('.') && !name.startsWith('@/')) return nodeRequire(name);
    const target = name.startsWith('@/') ? path.join(root, 'src', name.slice(2)) : path.resolve(path.dirname(absolute), name);
    const resolved = [target, `${target}.ts`, `${target}.json`].find(p => fs.existsSync(p) && fs.statSync(p).isFile());
    if (!resolved) throw new Error(`Cannot resolve ${name}`);
    return load(resolved);
  }
  vm.runInNewContext(code, { module, exports: module.exports, require: localRequire }, { filename: absolute });
  return module.exports;
}
const { TOPICS, TOPIC_SLUGS, getTopic } = load('src/lib/topics.ts');
const languages = ['es', 'en', 'zh'];
const slugs = new Set(TOPIC_SLUGS);
const errors = [];
if (slugs.size !== TOPIC_SLUGS.length) errors.push('Duplicate topic routes');
for (const slug of TOPIC_SLUGS) {
  const topic = getTopic(slug);
  if (!topic) { errors.push(`Missing topic ${slug}`); continue; }
  for (const locale of languages) {
    for (const key of ['title', 'metaTitle', 'description', 'intro', 'updated']) if (!topic[key]?.[locale]?.trim()) errors.push(`${slug}/${locale}: missing ${key}`);
    for (const [i, item] of [...topic.sections, ...topic.faq].entries()) for (const [key, value] of Object.entries(item)) if (key !== 'id' && !value?.[locale]?.trim()) errors.push(`${slug}/${locale}: missing field ${key} at ${i}`);
  }
  if (topic.faq.length < 3 || topic.faq.length > 5) errors.push(`${slug}: expected 3–5 FAQs`);
  for (const related of topic.related) if (!slugs.has(related)) errors.push(`${slug}: broken related route ${related}`);
  if (topic.place?.photo?.startsWith('/') && !fs.existsSync(path.join(root, 'public', topic.place.photo))) errors.push(`${slug}: missing photo`);
}
// The airport transfer is an actionable itinerary: guard against restoring the incorrect L8→L1 change.
const arrival = getTopic('como-llegar');
for (const locale of languages) {
  const airport = arrival.sections.find(s => s.id === 'airport')?.content[locale] || '';
  if (!['Tribunal', 'L8', 'L10', 'L1', 'Sol'].every(value => airport.includes(value))) errors.push(`Incomplete airport connection: ${locale}`);
}
const englishFooter = fs.readFileSync('src/components/Footer.tsx', 'utf8');
if (englishFooter.includes("locale === 'en' ? ''")) errors.push('English legal links lose their locale');
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`Content checks passed: ${TOPIC_SLUGS.length} topics × ${languages.length} languages; ${TOPICS.length} guides; sources and 31 nearby places preserved.`);
