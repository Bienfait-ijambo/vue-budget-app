import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import NavBar from '@/views/pages/admin/components/NavBar.vue'
describe('NavBar', () => {
    //TestCases
//1. should emit event: logout
//2. should take an array of menu

  it('should emit event: logout', () => {
    const navBar = mount(NavBar)
     navBar.find('[tested-logout="btn"]').trigger('click')
    //array
    const emitEvent=navBar.emitted('logout')
    expect(emitEvent).toHaveLength(1)
  })
  it(' should take an array', () => {
    const propData={
        name: "Dashboard",
        link: "/admin",
        icon: "bi bi-wrench-adjustable",
      }
    const navBar = mount(NavBar,{
        props:{
            navigation:[propData]
        },
        slots:{
            navigation:`<li>${propData.name}</li>`
        }
    })
    expect(navBar.html()).toContain('<li>Dashboard</li>')
  })
})
