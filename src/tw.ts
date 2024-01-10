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
    //
    'prettier-plugin-tailwindcss',
    'prettier-plugin-classnames',
    'prettier-plugin-merge',
  ],

  tailwindAttributes: ['tw'],

  tailwindFunctions,
});
