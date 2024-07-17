import path from 'node:path';
import { expect, it } from 'vitest';
import { format } from './format';

const sortTailwindClassesFiles = ['tw.tsx', 'test.astro', 'test.blade.php'];

it('should match snapshots', async () => {
  const { globby } = await import('globby');

  const paths = await globby('*', {
    cwd: 'test/__fixtures__',
    dot: true,
    ignore: [...sortTailwindClassesFiles, 'hosts'],
  });

  for (const filepath of paths) {
    const result = await format(filepath);

    expect(result).toMatchSnapshot(path.basename(filepath));
  }
});

it('tailwindcss classes should sorted', async () => {
  for (const file of sortTailwindClassesFiles) {
    const result = await format(file, '@u3u/prettier-config/tw');

    expect(result).toMatchSnapshot();
  }
});
