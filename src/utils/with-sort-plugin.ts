import type { Plugin } from 'prettier';
import { mapValues } from 'remeda';
import { definePlugin } from './define-plugin';

export const withSortPlugin = (plugin: Required<Pick<Plugin, 'parsers'>>) => {
  const sortImportsPlugin = require('@ianvs/prettier-plugin-sort-imports');

  return definePlugin({
    options: {
      ...sortImportsPlugin.options,
    },

    parsers: {
      ...mapValues(plugin.parsers, (item, key) => {
        return {
          ...item,
          preprocess: sortImportsPlugin.parsers[key].preprocess,
        };
      }),
    },
  } as const);
};
