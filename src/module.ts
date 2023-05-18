import { defineNuxtModule, addVitePlugin, addWebpackPlugin, useLogger } from '@nuxt/kit'
import type { StylelintPluginUserOptions as VitePlugin } from 'vite-plugin-stylelint'
import type { Options as WebpackPlugin } from 'stylelint-webpack-plugin'
import vitePluginStylelint from 'vite-plugin-stylelint'
import StylelintWebpackPlugin from 'stylelint-webpack-plugin'
import { relative } from 'pathe'
import { watch } from 'chokidar'
import { name, version } from '../package.json'

const logger = useLogger('nuxt:stylelint')

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

    const configPaths = [
      '.stylelintignore',
      '.stylelintrc',
      '.stylelintrc.json',
      '.stylelintrc.yaml',
      '.stylelintrc.yml',
      '.stylelintrc.js',
      'stylelint.config.js'
    ].map(path => relative(nuxt.options.rootDir, path))

    if (nuxt.options.watch) {
      nuxt.options.watch.push(...configPaths)
    } else {
      const watcher = watch(configPaths, { depth: 0 }).on('change', (path: string) => {
        logger.info(`Eslint config changed: ${path}`)
        logger.warn('Please restart the Nuxt server to apply changes or upgrade to latest Nuxt for automatic restart.')
      })
      nuxt.hook('close', () => watcher.close())
    }

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
