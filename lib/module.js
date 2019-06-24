const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = function (moduleOptions) {
  const options = {
    ...this.options.stylelint,
    ...moduleOptions
  }

  this.extendBuild((config, { isDev }) => {
    if (isDev) {
      config.plugins.push(new StyleLintPlugin(options))
    }
  })
}

module.exports.meta = require('../package.json')
