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
  customAttributes: ['class'],

  customFunctions: tailwindFunctions,

  plugins: [
    require.resolve('prettier-plugin-tailwindcss'),
    require.resolve('prettier-plugin-classnames'),
    require.resolve('prettier-plugin-merge'),
  ],

  tailwindAttributes: ['tw'],

  tailwindFunctions,
});
