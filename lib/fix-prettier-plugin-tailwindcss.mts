import fs from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';

const require = createRequire(import.meta.url);
const prettierPluginTailwindcssPath = require.resolve('prettier-plugin-tailwindcss');
const prettierPluginTailwindcssDirectory = path.dirname(prettierPluginTailwindcssPath);
const destinationDirectory = 'dist/prettier-plugin-tailwindcss';
const sorterFilename = (await fs.readdir(prettierPluginTailwindcssDirectory)).find((filename) =>
  /^sorter-.*\.mjs$/.test(filename),
);

if (!sorterFilename) throw new Error('Cannot find the Tailwind CSS sorter chunk');

const sorterPath = path.join(prettierPluginTailwindcssDirectory, sorterFilename);
const buffer = await fs.readFile(sorterPath);
const code = buffer.toString('utf8');
const regex = String.raw;

// https://github.com/tailwindlabs/prettier-plugin-tailwindcss/pull/227/files

// Allow grouping to work

// - let parts = classStr.split(/([\t\r\f\n ]+)/)
// + let parts = classStr.split(/([\t\r\f\n ]+(?![^\(]*\)))/)

const fixedCode = code.replace(regex`/([\t\r\f\n ]+)/`, regex`/([\t\r\f\n ]+(?![^\(]*\)))/`);

if (fixedCode === code) throw new Error('Cannot patch the Tailwind CSS sorter chunk');

await fs.cp(prettierPluginTailwindcssDirectory, destinationDirectory, { recursive: true });
await fs.writeFile(path.join(destinationDirectory, sorterFilename), fixedCode, 'utf8');

console.log('✨ Fixed `prettier-plugin-tailwindcss`');
