# @nuxtjs/stylelint-module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> [Stylelint](https://stylelint.io) module for [Nuxt.js](https://nuxtjs.org)

[📖 **Release Notes**](./CHANGELOG.md)

## Requirements

You need to ensure that you have `stylelint` installed

```bash
yarn add --dev stylelint # or npm install --save-dev stylelint
```

## Setup

1. Add `@nuxtjs/stylelint-module` dependency to your project

```bash
yarn add --dev @nuxtjs/stylelint-module # or npm install --save-dev @nuxtjs/stylelint-module
```

2. Add `@nuxtjs/stylelint-module` to the `buildModules` section of `nuxt.config.js`

:warning: If you are using Nuxt older than **v2.9** you have to install module as a `dependency` (No `--dev` or `--save-dev` flags) and also use `modules` section in `nuxt.config.js` instead of `buildModules`.

```js
export default {
  buildModules: [
    // Simple usage
    '@nuxtjs/stylelint-module',

    // With options
    ['@nuxtjs/stylelint-module', { /* module options */ }]
  ]
}
```

### Using top level options

```js
export default {
  buildModules: [
    '@nuxtjs/stylelint-module'
  ],
  stylelint: {
    /* module options */
  }
}
```

## Options

### `configFile`

- Type: `String`
- Default: `undefined`

Specify the config file location to be used by `stylelint`.

*Note: By default this is [handled by `stylelint`](http://stylelint.io/user-guide/configuration/).*

### `context`

- Type: `String`
- Default: `srcDir`

A string indicating the root of your style files.

### `files`

- Type: `String|Array[String]`
- Default: `['assets/**/*.{s?(a|c)ss,less,stylus}', '{components,layouts,pages}/**/*.vue']`

Specify the glob pattern for finding files. Must be relative to `options.context`.

### `formatter`

- Type: `Function`
- Default: `require('stylelint').formatters.string`

Specify a custom formatter to format errors printed to the console.

### `lintDirtyModulesOnly`

- Type: `Boolean`
- Default: `false`

Lint only changed files, skip lint on start.

### `stylelintPath`

- Type: `String`
- Default: `stylelint`

Path to `stylelint` instance that will be used for linting.

### `syntax`

- Type: `String`
- Default: `undefined`

See the `stylelint` [user guide](https://stylelint.io/user-guide/node-api/#syntax) for more info.

### Errors and Warning

**By default the plugin will auto adjust error reporting depending on stylelint errors/warnings counts.**
You can still force this behavior by using `emitError` **or** `emitWarning` options:

#### `emitError`

- Type: `Boolean`
- Default: `false`

Will always return errors, if this option is set to `true`.

#### `emitWarning`

- Type: `Boolean`
- Default: `false`

Will always return warnings, if option is set to `true`.

#### `failOnError`

- Type: `Boolean`
- Default: `false`

Will cause the module build to fail if there are any errors, if option is set to `true`.

#### `failOnWarning`

- Type: `Boolean`
- Default: `false`

Will cause the module build to fail if there are any warnings, if option is set to `true`.

#### `quiet`

- Type: `Boolean`
- Default: `false`

Will process and report errors only and ignore warnings, if this option is set to `true`.

> See all options in [stylelint-webpack-plugin](https://github.com/webpack-contrib/stylelint-webpack-plugin#options).

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Nuxt Community

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@nuxtjs/stylelint-module/latest.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@nuxtjs/stylelint-module

[npm-downloads-src]: https://img.shields.io/npm/dt/@nuxtjs/stylelint-module.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/stylelint-module

[circle-ci-src]: https://img.shields.io/circleci/project/github/nuxt-community/stylelint-module.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/nuxt-community/stylelint-module

[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-community/stylelint-module.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/nuxt-community/stylelint-module

[license-src]: https://img.shields.io/npm/l/@nuxtjs/stylelint-module.svg?style=flat-square
[license-href]: https://npmjs.com/package/@nuxtjs/stylelint-module
