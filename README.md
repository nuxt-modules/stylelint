# @nuxtjs/stylelint-module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Stylelint module for Nuxt.js

[📖 **Release Notes**](./CHANGELOG.md)

## Requirements

You need to ensure that you have `stylelint` installed:

```bash
yarn add --dev stylelint # or npm install --save-dev stylelint
```

## Setup

1. Add `@nuxtjs/stylelint-module` dependency to your project

```bash
yarn add --dev @nuxtjs/stylelint-module # or npm install --save-dev @nuxtjs/stylelint-module
```

2. Add `@nuxtjs/stylelint-module` to the `buildModules` section of `nuxt.config.js`

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

:warning: If you are using Nuxt **< v2.9** you have to install the module as a `dependency` (No `--dev` or `--save-dev` flags) and use `modules` section in `nuxt.config.js` instead of `buildModules`.

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

See [stylelint's options](http://stylelint.io/user-guide/node-api/#options) for the complete list of options available. These options are passed through to the `stylelint` directly.

### `configFile`

- Type: `String`
- Default: `undefined`

Specify the config file location to be used by `stylelint`.

**Note:** By default this is [handled by `stylelint`](http://stylelint.io/user-guide/configuration/).

### `context`

- Type: `String`
- Default: `srcDir`

A string indicating the root of your files.

### `files`

- Type: `String|Array[String]`
- Default: `['assets/**/*.{s?(a|c)ss,less,stylus}', '{components,layouts,pages}/**/*.vue']`

Specify the glob pattern for finding files. Must be relative to `options.context`.

### `fix`

- Type: `Boolean`
- Default: `false`

If `true`, `stylelint` will fix as many errors as possible. The fixes are made to the actual source files. All unfixed errors will be reported. See [Autofixing errors](https://stylelint.io/user-guide/cli#autofixing-errors) docs.

### `formatter`

- Type: `Function`
- Default: `require('stylelint').formatters.string`

Specify the formatter that you would like to use to format your results.

### `lintDirtyModulesOnly`

- Type: `Boolean`
- Default: `false`

Lint only changed files, skip lint on start.

### `stylelintPath`

- Type: `String`
- Default: `stylelint`

Path to `stylelint` instance that will be used for linting.

### Errors and Warning

**By default the plugin will auto adjust error reporting depending on stylelint errors/warnings counts.**
You can still force this behavior by using `emitError` **or** `emitWarning` options:

#### `emitError`

- Type: `Boolean`
- Default: `false`

Will always return errors, if set to `true`.

#### `emitWarning`

- Type: `Boolean`
- Default: `false`

Will always return warnings, if set to `true`.

#### `failOnError`

- Type: `Boolean`
- Default: `false`

Will cause the module build to fail if there are any errors, if set to `true`.

#### `failOnWarning`

- Type: `Boolean`
- Default: `false`

Will cause the module build to fail if there are any warnings, if set to `true`.

#### `quiet`

- Type: `Boolean`
- Default: `false`

Will process and report errors only and ignore warnings, if set to `true`.

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Nuxt Community

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@nuxtjs/stylelint-module/latest.svg
[npm-version-href]: https://npmjs.com/package/@nuxtjs/stylelint-module

[npm-downloads-src]: https://img.shields.io/npm/dt/@nuxtjs/stylelint-module.svg
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/stylelint-module

[github-actions-ci-src]: https://github.com/nuxt-community/stylelint-module/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/nuxt-community/stylelint-module/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-community/stylelint-module.svg
[codecov-href]: https://codecov.io/gh/nuxt-community/stylelint-module

[license-src]: https://img.shields.io/npm/l/@nuxtjs/stylelint-module.svg
[license-href]: https://npmjs.com/package/@nuxtjs/stylelint-module
