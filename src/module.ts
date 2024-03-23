import { defineNuxtModule, addVitePlugin, addWebpackPlugin, useLogger } from '@nuxt/kit'
import type { StylelintPluginUserOptions as VitePlugin } from 'vite-plugin-stylelint'
import type { Options as WebpackPlugin } from 'stylelint-webpack-plugin'
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
    lintDirtyOnly: true,
    emitWarning: true,
    emitError: true,
    failOnWarning: false,
    failOnError: true
  }),
  async setup (options, nuxt) {
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
        logger.info(`Stylelint config changed: ${path}`)
        logger.warn('Please restart the Nuxt server to apply changes or upgrade to latest Nuxt for automatic restart.')
      })
      nuxt.hook('close', () => watcher.close())
    }

    if (nuxt.options.builder === '@nuxt/vite-builder') {
      const vitePluginStylelint = await import('vite-plugin-stylelint').then(m => 'default' in m ? m.default : m)

      addVitePlugin(() => {
        return vitePluginStylelint(options)
      }, { server: false })
    } else if (nuxt.options.builder === '@nuxt/webpack-builder') {
      const StylelintWebpackPlugin = await import('stylelint-webpack-plugin').then(m => 'default' in m ? m.default : m)

      addWebpackPlugin(() => {
        const webpackOptions = {
          ...options,
          context: nuxt.options.srcDir,
          files: options.include,
          lintDirtyModulesOnly: !options.lintOnStart
        }

        delete webpackOptions.include
        delete webpackOptions.lintOnStart

        return new StylelintWebpackPlugin(webpackOptions)
      }, { server: false })
    } else {
      logger.warn('Unsupported builder ' + nuxt.options.builder + ', Stylelint is not enabled.')
    }
  }
})
