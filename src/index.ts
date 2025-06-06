import '@total-typescript/ts-reset';
// @ts-expect-error
import { getPackageInfoSync } from 'local-pkg';
import base from './base';
import { defineConfig } from './utils';

const typescript = getPackageInfoSync('typescript');

export default defineConfig({
  ...base,

  // https://github.com/IanVS/prettier-plugin-sort-imports/releases/tag/v4.0.0
  // importOrderBuiltinModulesToTop: true, // [Removed] (always true)
  // importOrderCombineTypeAndValueImports: true, // [Replace with `importOrderTypeScriptVersion`]
  // importOrderMergeDuplicateImports: true, // [Removed] (always true)
  // importOrderSortSpecifiers: true, // [Removed]
  importOrderTypeScriptVersion: typescript?.version || '5.0.0',

  iniSpaceAroundEquals: true,

  jsonRecursiveSort: true,

  multilineArraysWrapThreshold: 2,

  overrides: [
    {
      files: ['nginx.conf', 'nginx/**/*.conf'],
      options: { parser: 'nginx' },
    },
    {
      files: [
        '.npmrc',
        '.env',
        '.env.*',
      ],

      options: { parser: 'ini' },
    },
    {
      files: ['*.blade.php'],
      options: { parser: 'blade' },
    },
  ],

  plugins: [
    'prettier-plugin-sort-json',
    'prettier-plugin-packagejson',
    'prettier-plugin-multiline-arrays',
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-jsdoc',
    'prettier-plugin-nginx',
    'prettier-plugin-ini',
    'prettier-plugin-sh',
    'prettier-plugin-sql',
    '@prettier/plugin-xml',
    '@prettier/plugin-php',
    '@shufo/prettier-plugin-blade',
    'prettier-plugin-prisma',
    'prettier-plugin-astro',
  ].map((item) => require.resolve(item)),

  // https://github.com/shufo/prettier-plugin-blade/tree/main?tab=readme-ov-file#options
  sortHtmlAttributes: 'alphabetical',
  sortTailwindcssClasses: true,
  wrapAttributes: 'force-expand-multiline',

  xmlSortAttributesByKey: true,
  xmlWhitespaceSensitivity: 'ignore',
});
