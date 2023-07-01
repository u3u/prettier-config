import deepmerge from 'deepmerge';
import { type Config } from 'prettier';
import config from '..';

export const extendConfig = <T extends Config | typeof config>(userConfig: T, options?: deepmerge.Options) => {
  return deepmerge(config, userConfig, options);
};
