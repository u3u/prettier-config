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
  plugins: [
    require.resolve('prettier-plugin-tailwindcss'),
    require.resolve('prettier-plugin-classnames'),
    require.resolve('prettier-plugin-merge'),
  ],

  tailwindAttributes: ['tw'],

  customAttributes: ['class'],

  customFunctions: tailwindFunctions,

  tailwindFunctions,
});
