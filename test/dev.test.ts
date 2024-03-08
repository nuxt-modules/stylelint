// dev.test.ts
import { describe, test, expect } from 'vitest'
import { setup, useTestContext } from '@nuxt/test-utils'

// Describe the test suite
describe('dev', async () => {
  // Setup Nuxt.js for testing
  await setup({
    fixture: '../playground',
    server: false,
    dev: true
  })

  // Test whether the Stylelint plugin has been added
  test('should added stylelint plugin', () => {
    // Get the Nuxt test context
    const { nuxt } = useTestContext()

    // Expect that the number of hooks for 'vite:extendConfig' is 7
    expect(nuxt?.hooks._hooks['vite:extendConfig']).toHaveLength(7)
  })
})
