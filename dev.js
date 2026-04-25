import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = dirname(fileURLToPath(import.meta.url));
process.chdir(__dirname);
await import('./node_modules/vite/bin/vite.js');
