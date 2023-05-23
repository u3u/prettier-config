import { extendConfig } from './utils'
import { require } from './utils/require'

export default extendConfig({
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  tailwindAttributes: ['tw'],
  tailwindFunctions: ['clsx', 'tw', 'twMerge', 'twJoin'],
})
