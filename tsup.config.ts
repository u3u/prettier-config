import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/*.ts'],
  format: ['cjs', 'esm'],
  dts: { resolve: true },
  shims: true,
  clean: true,
})
