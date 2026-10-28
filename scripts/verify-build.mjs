import { readFile, readdir, stat } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';

const root = new URL('../dist/', import.meta.url);
const domain = 'https://robdu121.github.io';
const base = '/portfolio-v2/';
const failures = [];
const assets = new Set();

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const groups = await Promise.all(entries.map(entry => entry.isDirectory()
    ? walk(join(dir, entry.name)) : [join(dir, entry.name)]));
  return groups.flat();
}

const { fileURLToPath } = await import('node:url');
const dist = fileURLToPath(root);
const pages = (await walk(dist)).filter(path => path.endsWith('.html'));
if (pages.length !== 5) failures.push(`Expected 5 generated pages; found ${pages.length}`);

for (const page of pages) {
  const html = await readFile(page, 'utf8');
  const route = base + relative(dist, page).split(sep).join('/').replace(/index\.html$/, '');
  const current = new URL(route, domain);
  for (const expected of [
    `property="og:image" content="${domain}${base}images/social-preview.png"`,
    `property="og:url" content="${current.href}"`,
    `rel="canonical" href="${current.href}"`,
  ]) {
    if (!html.includes(expected)) failures.push(`${route}: missing ${expected}`);
  }
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = new URL(match[1], current);
    if (url.origin !== domain) continue;
    if (!url.pathname.startsWith(base)) {
      failures.push(`${route}: link escapes base: ${match[1]}`);
      continue;
    }
    const pathname = decodeURIComponent(url.pathname.slice(base.length));
    const target = join(dist, pathname, url.pathname.endsWith('/') ? 'index.html' : '');
    try {
      if (!(await stat(target)).isFile()) throw new Error('not a file');
      if (url.hash && target.endsWith('.html')) {
        const targetHtml = await readFile(target, 'utf8');
        if (!targetHtml.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`)) {
          failures.push(`${route}: missing fragment ${url.hash}`);
        }
      }
      assets.add(url.pathname);
    } catch {
      failures.push(`${route}: missing local target ${match[1]}`);
    }
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`Verified ${pages.length} pages and ${assets.size} linked routes/assets, including fragments and Open Graph URLs.`);
