import fs from 'node:fs/promises'
import path from 'node:path'
import prettier from 'prettier'
import { require } from '../src/utils/require'

export const format = async (file: string, config = '@u3u/prettier-config') => {
  const filepath = path.resolve('test/__fixtures__', file)
  const options = await prettier.resolveConfig('', { config: require.resolve(config) })
  const buffer = await fs.readFile(filepath)
  const code = buffer.toString('utf8')
  const result = prettier.format(code, { ...options!, filepath })

  return result
}
