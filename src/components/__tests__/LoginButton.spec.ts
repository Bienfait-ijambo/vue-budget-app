import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import LoginButton from '@/views/pages/auth/components/LoginButton.vue'
describe('LoginButton', () => {
  //
  // should contain text : Sign up or Log in with Google

  it('login button should emit events : loginOrSignUpUser', () => {
    const loginBtn = mount(LoginButton)
    loginBtn.find('a').trigger('click')
    //array
    const emitEvent = loginBtn.emitted('loginOrSignUpUser')
    expect(emitEvent).toHaveLength(1)
  })
  it('should contain text : Sign up or Log in with Google', () => {
    const loginBtn = mount(LoginButton)
    expect(loginBtn.find('a').text()).toContain('Sign up or Log in with Google')
  })
})
