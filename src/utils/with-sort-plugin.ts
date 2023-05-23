import { definePlugin } from './define-plugin'
import sortImportsPlugin from '@ianvs/prettier-plugin-sort-imports'
import { type Plugin } from 'prettier'
import { mapValues } from 'remeda'

export const withSortPlugin = (plugin: Required<Pick<Plugin, 'parsers'>>) => {
  return definePlugin({
    options: {
      ...sortImportsPlugin.options,
    },

    parsers: {
      ...mapValues(plugin.parsers, (item, key) => ({
        ...item,
        preprocess: sortImportsPlugin.parsers[key].preprocess,
      })),
    },
  } as const)
}
