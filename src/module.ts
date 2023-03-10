import { defineNuxtModule, addVitePlugin, addWebpackPlugin } from '@nuxt/kit'
// waiting https://github.com/ModyQyW/vite-plugin-stylelint/pull/42
// import type { StylelintPluginUserOptions as VitePlugin } from 'vite-plugin-stylelint'
import type { Options as WebpackPlugin } from 'stylelint-webpack-plugin'
import vitePluginStylelint from 'vite-plugin-stylelint'
import StylelintWebpackPlugin from 'stylelint-webpack-plugin'
import { name, version } from '../package.json'
import type { StylelintPluginUserOptions as VitePlugin } from './types'

export type ModuleOptions = VitePlugin & WebpackPlugin

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'stylelint',
    compatibility: {
      bridge: true
    }
  },
  defaults: nuxt => ({
    cache: true,
    include: [`${nuxt.options.srcDir}/**/*.{css,scss,sass,less,styl,vue}`],
    exclude: ['**/node_modules/**', 'virtual:', nuxt.options.buildDir],
    stylelintPath: 'stylelint',
    formatter: 'string',
    lintOnStart: true,
    emitWarning: true,
    emitError: true,
    failOnWarning: false,
    failOnError: true
  }),

  setup (options, nuxt) {
    if (!nuxt.options.dev) {
      return
    }

    nuxt.hooks.hookOnce('builder:watch', (_, path) => {
      const configFiles = [
        '.stylelintignore',
        '.stylelintrc',
        '.stylelintrc.json',
        '.stylelintrc.yaml',
        '.stylelintrc.yml',
        '.stylelintrc.js',
        'stylelint.config.js'
      ]

      if (configFiles.includes(path)) {
        // waiting https://github.com/nuxt/nuxt/pull/18641
        // nuxt.callHook('restart', { hard: true })
      }
    })

    addVitePlugin(vitePluginStylelint(options), { server: false })

    const webpackOptions = {
      ...options,
      context: nuxt.options.srcDir,
      files: options.include,
      lintDirtyModulesOnly: !options.lintOnStart
    }

    delete webpackOptions.include
    delete webpackOptions.lintOnStart

    addWebpackPlugin(new StylelintWebpackPlugin(webpackOptions), { server: false })
  }
})
