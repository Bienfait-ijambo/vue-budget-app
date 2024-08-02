import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/pages/auth/AuthPage.vue'),
      children: [
        { path: '/', name: 'login', component: () => import('../views/pages/auth/LoginPage.vue') },
        {
          path: '/callback',
          name: 'callback',
          component: () => import('../views/pages/auth/CallbackPage.vue')
        },
        {
          path: '/token',
          name: 'token',
          component: () => import('../views/pages/auth/TokenPage.vue')
        }
      ]
    },
    {
      path: '/dashbaord',
      name: 'dashbaord',
      component: () => import('../views/pages/admin/AdminPage.vue'),
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('../views/pages/admin/dashboard/DashbaordPage.vue')
        },
        {
          path: '/create_income_or_expenses',
          name: 'create_income_or_expenses',
          component: () => import('../views/pages/income-and-expenses/CreateIncomeOrExpenses.vue')
        },
        {
          path: '/income_and_expenses',
          name: 'income_and_expenses',
          component: () => import('../views/pages/income-and-expenses/IncomeAndExpenses.vue')
        },

        {
          path: '/pricings',
          name: 'pricings',
          component: () => import('../views/pages/admin/pricing/PricingPage.vue')
        },
     
        
      ]
    }
  ]
})

export default router
