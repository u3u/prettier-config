import { extendConfig } from './utils';

const tailwindFunctions = [
  //
  'classed',
  'clsx',
  'cva',
  'cx',
  'tv',
  'tw',
  'twc',
  'twi',
  'twj',
  'twJoin',
  'twMerge',
];

export default extendConfig({
  plugins: [require.resolve('prettier-plugin-tailwindcss')],

  tailwindAttributes: ['tw', 'class:list'],

  tailwindFunctions,
});
