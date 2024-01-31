import { extendConfig } from './utils';

const tailwindAttributes = [
  //
  'class:list',
  'class',
  'tw',
];

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
  'twx',
];

export default extendConfig({
  customAttributes: tailwindAttributes,
  customFunctions: tailwindFunctions,
  endingPosition: 'absolute',

  plugins: [
    //
    'prettier-plugin-tailwindcss',
    'prettier-plugin-classnames',
    'prettier-plugin-merge',
  ].map((item) => require.resolve(item)),

  tailwindAttributes,
  tailwindFunctions,
});
