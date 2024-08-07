import dedent from 'dedent';
import { defineConfig } from 'tsup';

export default defineConfig({
  banner: ({ format }) => {
    if (format !== 'esm') return;

    return {
      js: dedent`
        import { createRequire } from 'node:module';
        const require = createRequire(import.meta.url);\n
      `,
    };
  },

  clean: true,
  dts: { resolve: true },
  entry: ['src/*.ts'],
  format: ['cjs', 'esm'],

  onSuccess: async () => {
    const { execa } = await import('execa');
    const { stdout } = await execa`tsx lib/fix-prettier-plugin-tailwindcss.mts`;

    console.log(stdout);
  },

  shims: true,
});
