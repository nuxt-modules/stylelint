# @nuxtjs/stylelint-module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Stylelint module for Nuxt.js

[📖 **Release Notes**](./CHANGELOG.md)

---

**Note:** This branch is for **Nuxt 3** or **Nuxt Bridge** compatible module.
Checkout the [`nuxt2` branch](https://github.com/nuxt-modules/stylelint/tree/nuxt2) for **Nuxt 2** support.

---

## Requirements

You need to ensure that you have `stylelint` installed:

With `pnpm`

```bash
pnpm add -D stylelint
```

Or, with `yarn`

```bash
yarn add -D stylelint
```

Or, with `npm`

```bash
npm install -D stylelint
```

## Setup

1. Add `@nuxtjs/stylelint-module` dependency to your project

With `pnpm`

```bash
pnpm add -D @nuxtjs/stylelint-module
```

Or, with `yarn`

```bash
yarn add -D @nuxtjs/stylelint-module
```

Or, with `npm`

```bash
npm install -D @nuxtjs/stylelint-module
```

2. Add `@nuxtjs/stylelint-module` to the `modules` section of `nuxt.config.js`

```js
export default {
  modules: [
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
  modules: [
    '@nuxtjs/stylelint-module'
  ],
  stylelint: {
    /* module options */
  }
}
```

## Options

See [stylelint's options](http://stylelint.io/user-guide/node-api/#options) for the complete list of options available.
These options are passed through to the `stylelint` directly.

### `cache`

- Type: `Boolean`
- Default: `true`

**Note**: The cache is enabled by default to decrease execution time.

### `include`

- Type: `String|Array[String]`
- Default: `[nuxt.options.srcDir.'/**/*.{css,scss,sass,less,styl,vue}']`

Specify directories, files, or globs.

### `exclude`

- Type: `Array[String]`
- Default: `['**/node_modules/**', 'virtual:', nuxt.options.buildDir]`

Specify the files and/or directories to exclude.

### `stylelintPath`

- Type: `String`
- Default: `stylelint`

Path to `stylelint` instance that will be used for linting.

### `formatter`

- Type: `Function`
- Default: `'string'`

Specify the formatter that you would like to use to format your results.

### `lintOnStart`

- Type: `Boolean`
- Default: `true`

Check all matching files on project startup, too slow, turn on discreetly.

### `emitWarning`

- Type: `Boolean`
- Default: `true`

The warnings found will be printed.

### `emitError`

- Type: `Boolean`
- Default: `true`

The errors found will be printed.

### `failOnWarning`

- Type: `Boolean`
- Default: `false`

Will cause the module build to fail if there are any warnings, based on `emitWarning`.

### `failOnError`

- Type: `Boolean`
- Default: `true`

Will cause the module build to fail if there are any errors, based on `emitError`.

## Contributing

You can contribute to this module online with CodeSandBox:

[![Edit @nuxtjs/robots](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/nuxt-modules/stylelint/?fontsize=14&hidenavigation=1&theme=dark)

Or locally:

1. Clone this repository
2. Install dependencies using `pnpm install`
3. Prepare development server using `pnpm dev:prepare`
4. Build module using `pnpm build`
5. Launch playground using `pnpm dev`

## License

[MIT License](./LICENSE)

Copyright (c) Nuxt Modules

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@nuxtjs/stylelint-module/latest.svg
[npm-version-href]: https://npmjs.com/package/@nuxtjs/stylelint-module

[npm-downloads-src]: https://img.shields.io/npm/dt/@nuxtjs/stylelint-module.svg
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/stylelint-module

[github-actions-ci-src]: https://github.com/nuxt-modules/stylelint/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/nuxt-modules/stylelint/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-modules/stylelint.svg
[codecov-href]: https://codecov.io/gh/nuxt-modules/stylelint

[license-src]: https://img.shields.io/npm/l/@nuxtjs/stylelint-module.svg
[license-href]: https://npmjs.com/package/@nuxtjs/stylelint-module
