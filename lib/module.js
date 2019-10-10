const { resolve } = require('path')
const { moduleExists } = require('./utils')
const logger = require('./logger')

module.exports = function (moduleOptions) {
  if (!moduleExists('stylelint')) {
    logger.warn(
      'The dependency `stylelint` not found.',
      'Please run `yarn add stylelint --dev` or `npm install stylelint --save-dev`'
    )
    return
  }

  const options = {
    context: this.options.srcDir,
    files: [
      `${this.options.dir.assets}/**/*.{s?(a|c)ss,less,stylus}`,
      `{components,${this.options.dir.layouts},${this.options.dir.pages}}/**/*.vue`
    ],
    ...this.options.stylelint,
    ...moduleOptions
  }

  const filesToWatch = [
    '.stylelintignore',
    '.stylelintrc',
    '.stylelintrc.json',
    '.stylelintrc.yaml',
    '.stylelintrc.yml',
    '.stylelintrc.js',
    'stylelint.config.js'
  ]

  this.options.watch.push(
    ...filesToWatch.map(file => resolve(this.options.rootDir, file))
  )

  this.extendBuild((config, { isDev, isClient }) => {
    if (isDev && isClient) {
      const StylelintPlugin = require('stylelint-webpack-plugin')

      config.plugins.push(new StylelintPlugin(options))
    }
  })
}

module.exports.meta = require('../package.json')
