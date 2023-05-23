import config from '.'
import { defineConfig } from './utils'
import { require } from './utils/require'

export default defineConfig({
  ...config,
  plugins: [require.resolve('./with-twin.macro'), ...config.plugins.slice(1)],
})
