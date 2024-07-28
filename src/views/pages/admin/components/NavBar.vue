<script lang="ts" setup>
import type { LoginResponseType } from '@/helper/auth'

defineProps<{
  navigation: Array<{ name: string; link: string; icon: string }>
  userData: LoginResponseType | undefined
}>()

const emit = defineEmits<{
  (e: 'logout'): Promise<void>
}>()
</script>
<template>
  <nav
    id="sidebarMenu"
    style="background-color: white"
    class="col-md-3 col-lg-2 d-md-block sidebar collapse"
  >
    <div class="position-sticky pt-3">
      <div align="center">
        <img src="/src/assets/avatar.webp" id="user-avatar" width="50" />
        <a href="#">
          {{ userData?.user?.email }}
        </a>
      </div>
      <br />
      <h6
        class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
      >
        <span style="color: red">Menu</span>
        <a class="link-secondary" href="#" aria-label="Add a new report">
          <span data-feather="plus-circle"></span>
        </a>
      </h6>
      <ul class="nav flex-column" tested-ul="">
        <li class="nav-item" v-for="nav in navigation" :key="nav.name">
          <slot name="navigation" v-bind="{ nav }"></slot>
        </li>

        <li tested-logout="btn" class="nav-item" style="cursor: pointer" @click="emit('logout')">
          <a class="nav-link">
            <i class="bi bi-box-arrow-right"></i>
            Logout
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<style>
#user-avatar {
  border-radius: 25px;
  padding: 5px;
}
a.router-link-active.router-link-exact-active.nav-link {
  color: white;
}

.nav-item .router-link-exact-active {
  border-radius: 5px;
  box-shadow: 1px 1px 5px 1px #69757d;
  background: #2470dc;
  color: #fff;
}
</style>
