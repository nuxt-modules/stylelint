# nuxt-stylelint

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![Dependencies][david-dm-src]][david-dm-href]
[![Standard JS][standard-js-src]][standard-js-href]

> Stylelint will run on saving

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add the `nuxt-stylelint` dependency with `yarn` or `npm` to your project
2. Add `nuxt-stylelint` to the `devModules` section of `nuxt.config.js`
3. Configure it:

```js
{
  devModules: [
    // Simple usage
    'nuxt-stylelint',

    // With options
    ['nuxt-stylelint', { /* module options */ }]
  ]
}
```

## Options

### `configFile`

- Default: `undefined`

Specify the config file location to be used by `stylelint`.

*Note: By default this is [handled by `stylelint`](http://stylelint.io/user-guide/configuration/) via cosmiconfig.*

### `context`

- Default: `compiler.context`

A String indicating the root of your SCSS files.

### `emitErrors`

- Default: `true`

If true, pipes stylelint error severity messages to the webpack compiler's error message handler.

*Note: When this property is disabled all `stylelint` messages are piped to the `webpack` compiler's warning message handler.*

### `failOnError`

- Default: `false`

If true, throws a fatal error in the global build process. This will end the build process on any `stylelint` error.

### `files`

- Default: `'**/*.s?(a|c)ss'`

Specify the glob pattern for finding files. Must be relative to `options.context`.

### `formatter`

- Default: `require('stylelint').formatters.string`

Specify a custom formatter to format errors printed to the console.

### `lintDirtyModulesOnly`

- Default: `false`

Lint only changed files, skip lint on start.

### `syntax`

- Default: `scss`

See the `styelint` [user guide](https://stylelint.io/user-guide/node-api/#syntax) for more info.

> See all options in [stylelint-webpack-plugin](https://github.com/webpack-contrib/stylelint-webpack-plugin#options).

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Ricardo Gobbo de Souza <ricardogobbosouza@yahoo.com.br>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/dt/nuxt-stylelint.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/nuxt-stylelint

[npm-downloads-src]: https://img.shields.io/npm/v/nuxt-stylelint/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/nuxt-stylelint

[circle-ci-src]: https://img.shields.io/circleci/project/github/ricardogobbosouza/nuxt-stylelint.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/ricardogobbosouza/nuxt-stylelint

[codecov-src]: https://img.shields.io/codecov/c/github/ricardogobbosouza/nuxt-stylelint.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/ricardogobbosouza/nuxt-stylelint

[david-dm-src]: https://david-dm.org/ricardogobbosouza/nuxt-stylelint/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/ricardogobbosouza/nuxt-stylelint

[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com
