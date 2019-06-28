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

  this.extendBuild((config, { isDev }) => {
    if (isDev) {
      config.plugins.push(new StyleLintPlugin(options))
    }
  })
}

module.exports.meta = require('../package.json')
