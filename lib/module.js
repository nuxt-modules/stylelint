const { resolve } = require('path')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const logger = require('./logger')
const { moduleExists } = require('./utils')

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

  this.extendBuild((config, { isDev }) => {
    if (isDev) {
      config.plugins.push(new StyleLintPlugin(options))
    }
  })
}

module.exports.meta = require('../package.json')
