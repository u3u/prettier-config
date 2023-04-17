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

## Recommend VSCode Config

In your `settings.json`

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
