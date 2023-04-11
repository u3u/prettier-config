import { defineConfig } from './utils'

const base = defineConfig({
  endOfLine: 'lf',
  printWidth: 120,
  semi: false,
  singleQuote: true,
} as const)

export default base
