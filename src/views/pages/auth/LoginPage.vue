<script lang="ts" setup>
import LoginButton from './components/LoginButton.vue'
import { APP } from '@/http/App'

function loginOrSignUpUser() {
  window.location.href = APP.baseURL + '/auth/redirect'
}
</script>
<template>
  <div class="row">
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div class="card">
          <div class="card-body">
            <br />

            <LoginButton @loginOrSignUpUser="loginOrSignUpUser">
              <template #image>
                <img src="/src/assets/google.svg" height="20" width="20" />
              </template>
            </LoginButton>

            <br /><br />
          </div>
        </div>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>
