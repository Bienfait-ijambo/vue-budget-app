import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HeaderNav from '@/views/pages/admin/components/HeaderNav.vue'
describe('HeaderNav', () => {

  it('should contain app name : Budget tracker', () => {
    const headerNav = mount(HeaderNav)
    expect(headerNav.find('[tested-appname="app"]').text()).toContain('Budget tracker')
  })
})
