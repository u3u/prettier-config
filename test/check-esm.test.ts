import { it } from 'vitest';

it('esm should work', async () => {
  const { execaNode } = await import('execa');

  await execaNode('dist/index.mjs');
});
