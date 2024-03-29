# My Prettier config

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

## Features

- Sort/merge `import` statements
- Sort JSON Key
- Sort `package.json`
- Sort Tailwind CSS classes
- Format `jsdoc`
- Format `nginx` config
- Extend config
- ...

> [!NOTE]
>
> Upgrade this config to `>=3.x` version, Prettier should automatically infer the plugin parser. If you are using the [prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension, you need to upgrade to [>=9.17.0](https://github.com/prettier/prettier-vscode/blob/main/CHANGELOG.md) version for automatic inference of the plugin parser to take effect.  
> See this fix: https://github.com/prettier/prettier-vscode/pull/3027

## Install

```sh
pnpm add prettier @u3u/prettier-config -D
```

## Usage

In your `.prettierrc`

```json
"@u3u/prettier-config"
```

Use base config (without plugins)

```json
"@u3u/prettier-config/base"
```

With Tailwind CSS (By default, the `clsx`, `tw`, and `twMerge`, `twJoin` methods will also be sorted.)

```json
"@u3u/prettier-config/tw"
```

Add `format` script to `package.json`

```json
{
  "scripts": {
    "format": "prettier --write ."
  }
}
```

Then you can run `pnpm format` to format all files.

## Recommend VSCode Config

In your `.vscode/settings.json`

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "prettier.documentSelectors": ["**/*"],
  "prettier.enableDebugLogs": true,
  "prettier.endOfLine": "lf",
  "prettier.printWidth": 120,
  "prettier.requireConfig": true,
  "prettier.semi": false,
  "prettier.singleQuote": true
}
```

## Lint Staged

If you want to format before every commit, you can add the following to your `package.json`:

```json
{
  "lint-staged": {
    "*": ["prettier --write --ignore-unknown"]
  },

  "simple-git-hooks": {
    "pre-commit": "npx lint-staged"
  }
}
```

then install them

```sh
pnpm add lint-staged simple-git-hooks -D
npx simple-git-hooks
```

## Extend Config

In your `.prettierrc.js`

```js
const { extendConfig } = require('@u3u/prettier-config/utils');

module.exports = extendConfig({
  printWidth: 80,
});
```

## Global Default Format Config

You can place the config file in the user's home directory as the default config to format all files.

```sh
cd ~
pnpm add prettier @u3u/prettier-config -D
echo '"@u3u/prettier-config"' > '.prettierrc'
```

## Related

- [u3u/eslint-config](https://github.com/u3u/eslint-config) - My ESLint config

## License

[MIT](./LICENSE) License © 2023 [u3u](https://github.com/u3u)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@u3u/prettier-config
[npm-version-href]: https://npmjs.com/package/@u3u/prettier-config
[npm-downloads-src]: https://img.shields.io/npm/dm/@u3u/prettier-config
[npm-downloads-href]: https://npmjs.com/package/@u3u/prettier-config
[license-src]: https://img.shields.io/github/license/u3u/prettier-config.svg
[license-href]: ./LICENSE
