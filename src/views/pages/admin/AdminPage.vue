<script setup lang="ts">
import {  ref } from 'vue'
import NavBar from './components/NavBar.vue'
import HeaderNav from './components/HeaderNav.vue'
import { getUserData } from '@/helper/auth'
import { makeHttpReq } from '@/http/makeHttpReq'
import { showError, successMsg } from '@/helper/toastnotification'
import { Menu } from './components/menu'
import '/src/assets/dashbaord.css'
import { useBudgetAppMiddleware } from '@/middleware/budget-app'

const navigation = ref(Menu)

const userData = getUserData()

const {showMenu}=useBudgetAppMiddleware()

async function logout() {
  try {
    const userId = parseInt(userData?.user?.userId as string) as number
    const data = await makeHttpReq<{ userId: number }, { message: string }>('logout', 'POST', {
      userId: userId
    })
    window.location.href = '/'
    localStorage.clear()
    successMsg(data.message)
  } catch (error) {
    showError((error as Error).message)
  }
}
</script>

<template>
  <HeaderNav />
  <div class="container-fluid">
    <div class="row">
      <NavBar @logout="logout" :navigation="showMenu(navigation)" :userData="userData">
        <template #navigation="{ nav }">
          <RouterLink class="nav-link" :to="nav.link" exact>
            <i :class="nav.icon"></i>
            {{ nav.name }}
          </RouterLink>
        </template>
      </NavBar>

      <main class="col-md-9 ms-sm-auto col-lg-10 bg-pages">
        <br /><br />
        <router-view v-slot="{ Component, route }">
          <transition name="fade" mode="out-in">
            <div :key="route.name">
              <!-- dynamic components -->
              <component :is="Component"></component>
              <!-- end dynamic com -->
            </div>
          </transition>
        </router-view>
      </main>
    </div>
  </div>
</template>

