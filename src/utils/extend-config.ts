import config from '..'
import deepmerge from 'deepmerge'
import { type Config } from 'prettier'

export const extendConfig = <T extends Config | typeof config>(userConfig: T) => {
  return deepmerge(config, userConfig)
}
