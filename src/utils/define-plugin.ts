import type { Plugin } from 'prettier';

export const definePlugin = <T extends Plugin>(plugin: T) => {
  return plugin;
};
