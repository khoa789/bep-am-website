import { readFile, mkdir, access, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, basename } from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const run = promisify(execFile);
const scriptFolder = dirname(fileURLToPath(import.meta.url));
const root = resolve(scriptFolder, '../../..');
const manifestPath = process.argv[2] ? resolve(process.argv[2]) : resolve(scriptFolder, 'manifest.json');
const folder = dirname(manifestPath);
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
const images = manifest.collections.flatMap(collection => collection.images.map(image => ({ ...image, slug: collection.slug })));
// Check the entire source set before writing any publishable derivative.
await Promise.all(images.map(image => access(resolve(folder, image.file))));
let bytes = 0;
for (const image of images) {
  const destination = resolve(root, 'public/images/collections', image.slug);
  await mkdir(destination, { recursive: true });
  for (const width of [320, 800, 1600]) {
    const target = resolve(destination, `${basename(image.file, '.png')}-${width}.webp`);
    await run('cwebp', ['-quiet', '-q', width === 1600 ? '86' : '82', '-resize', String(width), '0', '-metadata', 'none', resolve(folder, image.file), '-o', target]);
    bytes += (await stat(target)).size;
  }
}
console.log(`${images.length} originals → ${images.length * 3} WebP files; ${(bytes / 1024 / 1024).toFixed(2)} MiB total.`);
