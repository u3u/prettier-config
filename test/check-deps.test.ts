import { expect, it } from 'vitest';
import { devDependencies } from '../package.json';

it('ensure prettier plugins are dependencies', () => {
  const hasPrettierDeps = Object.keys(devDependencies)
    .filter((key) => !['@u3u/prettier-config', 'prettier'].includes(key))
    .some((key) => key.includes('prettier'));

  expect(hasPrettierDeps).toBe(false);
});
