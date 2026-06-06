import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

const localHome = join(process.cwd(), '.theme-check-home');
mkdirSync(localHome, { recursive: true });
process.env.HOME = localHome;

await import('./validate-theme.mjs');
