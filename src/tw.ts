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

export default extendConfig(
  {
    customAttributes: tailwindAttributes,
    customFunctions: tailwindFunctions,
    endingPosition: 'absolute',

    plugins: [
      //
      './prettier-plugin-tailwindcss/index.mjs',
      'prettier-plugin-classnames',
      'prettier-plugin-merge',
    ].map((item) => require.resolve(item)),

    syntaxTransformation: true,
    tailwindAttributes,
    tailwindFunctions,
  },
  { arrayMerge: (target, source) => [...target.filter((item) => !source.includes(item)), ...source] },
);
