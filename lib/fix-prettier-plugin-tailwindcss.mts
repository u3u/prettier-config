import fs from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';

const require = createRequire(import.meta.url);
const prettierPluginTailwindcssPath = require.resolve('prettier-plugin-tailwindcss');

const buffer = await fs.readFile(prettierPluginTailwindcssPath);
const code = buffer.toString('utf8');
const regex = String.raw;

// https://github.com/tailwindlabs/prettier-plugin-tailwindcss/pull/227/files

// Allow grouping to work

// - let parts = classStr.split(/([\t\r\f\n ]+)/)
// + let parts = classStr.split(/([\t\r\f\n ]+(?![^\(]*\)))/)

const fixedCode = code.replace(regex`/([\t\r\f\n ]+)/`, regex`/([\t\r\f\n ]+(?![^\(]*\)))/`);

await fs.writeFile('dist/prettier-plugin-tailwindcss.mjs', fixedCode, 'utf8');
await fs.cp(path.join(prettierPluginTailwindcssPath, '../css/preflight.css'), 'dist/css/preflight.css');

console.log('✨ Fixed `prettier-plugin-tailwindcss`');
