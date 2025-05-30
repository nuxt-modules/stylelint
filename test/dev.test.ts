import { describe, test, expect } from 'vitest'
import { setup, useTestContext } from '@nuxt/test-utils'

describe('dev', async () => {
  await setup({
    fixture: '../playground',
    server: false,
    dev: true,
  })

  test('should added stylelint plugin', () => {
    const { nuxt } = useTestContext()
    expect(nuxt?.hooks._hooks['vite:extendConfig']).toHaveLength(18)
  })
})
