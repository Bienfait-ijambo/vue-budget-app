import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import NavBar from '@/views/pages/admin/components/NavBar.vue'
import { Menu } from '@/views/pages/admin/components/menu'
describe('NavBar', () => {
  //TestCases
  //1. should emit event: logout
  //2. should take an array of menu

  it('should emit event: logout', () => {
    const navBar = mount(NavBar)
    navBar.find('[tested-logout="btn"]').trigger('click')
    //array
    const emitEvent = navBar.emitted('logout')
    expect(emitEvent).toHaveLength(1)
  })
  it(' should take an array', () => {
    const userData = {
      email: 'admin@gmail.com',
      name: '',
      userId: '1'
    }
    const navBar = mount(NavBar, {
      props: {
        navigation: Menu,
        userData: { user: userData }
      },
      slots: {
        navigation: `<template #navigation="{ nav }">
            {{ nav.name }}
        </template>`
      }
    })

    // expec
    expect(navBar.html()).toContain('<li class="nav-item">Dashboard</li>')
    expect(navBar.html()).toContain('<li class="nav-item">Income &amp; Expenses</li>')
    expect(navBar.html()).toContain('<li class="nav-item">Customers</li>')
    expect(navBar.html()).toContain('<li class="nav-item">Pricings</li>')
    expect(navBar.html()).toContain('<li class="nav-item">Payments</li>')
  })
})
