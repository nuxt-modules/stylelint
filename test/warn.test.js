jest.setTimeout(60000)

const { Nuxt } = require('nuxt-edge')
const config = require('./fixture/nuxt.config')
const logger = require('@/logger')
const { moduleExists } = require('@/utils')

logger.mockTypes(() => jest.fn())

jest.mock('@/utils', () => ({
  moduleExists: jest.fn()
}))

let nuxt

describe('warn', () => {
  beforeAll(async () => {
    moduleExists.mockImplementation(() => false)

    nuxt = new Nuxt(config)
    await nuxt.ready()
  })

  beforeEach(() => {
    logger.clear()
  })

  afterAll(async () => {
    await nuxt.close()
  })

  test('should warn if not found the `stylelint` dependency', () => {
    expect(moduleExists).toBeCalledWith('stylelint')
    expect(moduleExists).toHaveReturnedWith(false)
    expect(logger.warn).toHaveBeenCalledWith(
      'The dependency `stylelint` not found.',
      'Please run `yarn add stylelint --dev` or `npm install stylelint --save-dev`'
    )
  })
})
