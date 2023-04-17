import { createRequire } from 'node:module'
import base from './base'
import { defineConfig } from './utils'

const require = createRequire(import.meta.url)

const config = defineConfig({
  ...base,

  importOrderSortSpecifiers: true,
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  importOrderBuiltinModulesToTop: true,

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
      options: { trailingCommaPHP: true },
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

export default config
