import { getPackageInfoSync } from 'local-pkg'
import base from './base'
import { defineConfig } from './utils'
import { require } from './utils/require'

const typescript = getPackageInfoSync('typescript')

export default defineConfig({
  ...base,

  // https://github.com/IanVS/prettier-plugin-sort-imports/releases/tag/v4.0.0
  // importOrderBuiltinModulesToTop: true, // [Removed] (always true)
  // importOrderCombineTypeAndValueImports: true, // [Replace with `importOrderTypeScriptVersion`]
  // importOrderMergeDuplicateImports: true, // [Removed] (always true)
  // importOrderSortSpecifiers: true, // [Removed]
  importOrderTypeScriptVersion: typescript ? typescript.version : '5.0.0',

  iniSpaceAroundEquals: true,
  jsonRecursiveSort: true,

  overrides: [
    {
      files: ['*.nginx', '*.nginxconfig', 'nginx.conf', 'nginx/**/*.conf'],
      options: { parser: 'nginx' },
    },
    {
      files: ['*.ini', '.env', '.env.*', '.npmrc', '.editorconfig'],
      options: { parser: 'ini' },
    },
    {
      files: ['*.sh', '.*ignore', 'hosts'],
      options: { parser: 'sh' },
    },
    {
      files: ['**/*.php'],
      options: { parser: 'php', trailingCommaPHP: true },
    },
    {
      files: ['**/*.blade.php'],
      options: { parser: 'blade', sortTailwindcssClasses: true, wrapAttributes: 'auto' },
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
  ],
})
