const { init, loadConfig } = require('@nuxtjs/module-test-utils')
const logger = require('../lib/logger')
const { moduleExists } = require('../lib/utils')

logger.mockTypes(() => jest.fn())

jest.mock('../lib/utils', () => ({
  moduleExists: jest.fn()
}))

describe('warn', () => {
  let nuxt

  beforeAll(async () => {
    moduleExists.mockImplementation(() => false)
    nuxt = await init(loadConfig(__dirname))
  }, 60000)

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
