// prod.test.ts
import { describe, test, expect } from 'vitest'
import { setup, useTestContext } from '@nuxt/test-utils'

// Describe the test suite
describe('prod', async () => {
  // Setup Nuxt.js for testing in production mode
  await setup({
    fixture: '../playground',
    server: false,
    dev: false
  })

  // Test whether the Stylelint plugin has not been added
  test('should not added stylelint plugin', () => {
    // Get the Nuxt test context
    const { nuxt } = useTestContext()

    // Expect that the number of hooks for 'vite:extendConfig' is 7
    // Note: This expectation seems contradictory to the test description
    // It might need adjustment based on the intended logic
    expect(nuxt?.hooks._hooks['vite:extendConfig']).toHaveLength(7)
  })
})
