import '@total-typescript/ts-reset';
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

  overrides: [
    {
      files: ['nginx.conf', 'nginx/**/*.conf'],
      options: { parser: 'nginx' },
    },
    {
      files: ['.npmrc', '.env', '.env.*'],
      options: { parser: 'ini' },
    },
    {
      files: ['*.blade.php'],
      options: { parser: 'blade' },
    },
  ],

  plugins: [
    require.resolve('@ianvs/prettier-plugin-sort-imports'),
    require.resolve('prettier-plugin-sort-json'),
    require.resolve('prettier-plugin-packagejson'),
    require.resolve('prettier-plugin-jsdoc'),
    require.resolve('prettier-plugin-nginx'),
    require.resolve('prettier-plugin-ini'),
    require.resolve('prettier-plugin-sh'),
    require.resolve('prettier-plugin-sql'),
    require.resolve('@prettier/plugin-xml'),
    require.resolve('@prettier/plugin-php'),
    require.resolve('@shufo/prettier-plugin-blade'),
    require.resolve('prettier-plugin-prisma'),
    require.resolve('prettier-plugin-astro'),
  ],

  // https://github.com/shufo/prettier-plugin-blade/tree/main?tab=readme-ov-file#options
  sortHtmlAttributes: 'alphabetical',
  sortTailwindcssClasses: true,
  wrapAttributes: 'force-expand-multiline',
});
