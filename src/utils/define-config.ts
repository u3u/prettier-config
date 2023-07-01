import { type Config } from 'prettier';

export const defineConfig = <T extends Config>(config: T) => config;
