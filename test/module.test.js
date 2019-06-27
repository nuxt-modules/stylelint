jest.setTimeout(60000)

const { Nuxt, Builder } = require('nuxt-edge')
const request = require('request-promise-native')
const getPort = require('get-port')
const logger = require('@/logger')
const { moduleExists } = require('@/utils')

let nuxt, port

const url = path => `http://localhost:${port}${path}`
const get = path => request(url(path))

logger.mockTypes(() => jest.fn())

jest.mock('@/utils', () => ({
  moduleExists: jest.fn()
}))

describe('module', () => {
  beforeEach(() => {
    logger.clear()
  })

  test('render', async () => {
    moduleExists.mockImplementation(() => true)

    const config = require('./fixture/nuxt.config')
    config.dev = true

    nuxt = new Nuxt(config)
    await nuxt.ready()
    await new Builder(nuxt).build()
    port = await getPort()
    await nuxt.listen(port)

    const html = await get('/')
    expect(html).toContain('Works!')
  })

  test('should warn if not found the `stylelint` dependency', async () => {
    moduleExists.mockImplementation(() => false)

    const config = require('./fixture/nuxt.config')

    nuxt = new Nuxt(config)
    await nuxt.ready()

    expect(logger.warn).toHaveBeenCalledWith(
      'The dependency `stylelint` not found.',
      'Please run `yarn add stylelint --dev` or `npm install stylelint --save-dev`'
    )
  })

  test('render prod', async () => {
    moduleExists.mockImplementation(() => true)

    const config = require('./fixture/nuxt.config')
    config.dev = false

    nuxt = new Nuxt(config)
    await nuxt.ready()
    await new Builder(nuxt).build()
    port = await getPort()
    await nuxt.listen(port)

    const html = await get('/')
    expect(html).toContain('Works!')
  })

  afterEach(async () => {
    await nuxt.close()
  })
})
