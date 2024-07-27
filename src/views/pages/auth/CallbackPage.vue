<script lang="ts" setup>
import { setUserData } from '@/helper/auth'
import { APP } from '@/http/App'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'


const route = useRoute()

function redirectToLaravel() {
  const code = route.query?.code as string
  const state = route.query?.state as string

  setUserData({
    authorizationCode: code,
    state: state
  })

  window.location.href = APP.baseURL + `/callback?code=${code}&state=${state}`
}

onMounted(() => {
  redirectToLaravel()
})
</script>
<template>
  <div>callback</div>
</template>
