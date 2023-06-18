import path from 'node:path'
import { globby } from 'globby'
import { expect, it } from 'vitest'
import { format } from './format'

it('should match snapshots', async () => {
  const paths = await globby('*', {
    cwd: 'test/__fixtures__',
    dot: true,
    ignore: ['tw.ts', 'twin.macro.ts'],
  })

  for (const filepath of paths) {
    const result = await format(filepath)

    expect(result).toMatchSnapshot(path.basename(filepath))
  }
})

it('tailwindcss classes should sorted', async () => {
  const result = await format('tw.ts', '@u3u/prettier-config/tw')

  expect(result).toMatchSnapshot()
})

it('twin.macro classes should sorted', async () => {
  const result = await format('twin.macro.ts', '@u3u/prettier-config/twin.macro')

  expect(result).toMatchSnapshot()
})