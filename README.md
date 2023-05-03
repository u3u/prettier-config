# My Prettier config

[![npm version](https://badgen.net/npm/v/@u3u/prettier-config)](https://npm.im/@u3u/prettier-config) [![npm downloads](https://badgen.net/npm/dm/@u3u/prettier-config)](https://npm.im/@u3u/prettier-config)

## Features

- Sort/merge `import` statements
- Sort JSON Key
- Sort `package.json`
- Format `jsdoc`
- Format `nginx` config
- Extend config
- ...

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
const { extendConfig } = require('@u3u/prettier-config/utils')

module.exports = extendConfig({
  printWidth: 80,
})
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
