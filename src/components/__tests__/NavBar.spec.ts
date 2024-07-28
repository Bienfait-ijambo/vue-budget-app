import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import NavBar from '@/views/pages/admin/components/NavBar.vue'
describe('NavBar', () => {
  const propData = {
    name: 'Dashboard',
    link: '/admin',
    icon: 'bi bi-wrench-adjustable'
  }

  it('should emit event: logout', () => {
    const navBar = mount(NavBar, {
      props: {
        navigation: [propData],
        userData: { user: { email: 'ben@gmail.com', userId: '1' } }
      },
      slots: {
        navigation: `<li>${propData.name}</li>`
      }
    })
    navBar.find('[tested-logout="btn"]').trigger('click')
    //array
    const emitEvent = navBar.emitted('logout')
    expect(emitEvent).toHaveLength(1)
  })
  it(' should take an array', () => {
    const navBar = mount(NavBar, {
      props: {
        navigation: [propData],
        userData: { user: { email: 'ben@gmail.com', userId: '1' } }
      },
      slots: {
        navigation: `<li>${propData.name}</li>`
      }
    })
    expect(navBar.html()).toContain('<li>Dashboard</li>')
  })
})
