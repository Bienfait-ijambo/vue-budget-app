<script lang="ts" setup>
// Test Cases :
// login button should emit events : loginOrSignUpUser
// should contain text : Sign up or Log in with Google
const emit = defineEmits<{
  (e: 'loginOrSignUpUser'): void
}>()
</script>
<template>
  <a @click="emit('loginOrSignUpUser')" href="#" class="btn btn-light w-100">
    <!-- <img src="/src/assets/google.svg" height="20" width="20" /> -->
    <slot name="image"></slot>
    <span class="ms-1 align-middle">Sign up <b>or</b> Log in with Google</span>
  </a>
</template>
