import { useBudgetAppMiddleware } from '@/middleware/budget-app'
import { createRouter, createWebHistory, type NavigationGuardNext, type RouteLocationNormalized, type RouteLocationNormalizedLoaded } from 'vue-router'


const {showCustomer}=useBudgetAppMiddleware()
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
        {
          path: '/payment_succeed',
          name: 'payment_succeed',
          component: () => import('../views/pages/admin/pricing/PaymentSucceed.vue')
        },
     
        {
          path: '/payments',
          name: 'payments',
          component: () => import('../views/pages/admin/payment/PaymentPage.vue')
        },
        {
          path: '/customers',
          name: 'customers',
          component: () => import('../views/pages/customer/CustomerPage.vue'),
        beforeEnter:showCustomer
         
        },
        {
          path: '/notfound',
          name: 'notfound',
          component: () => import('../views/pages/404/NotFound.vue'),
     
         
        },
       
        
      ]
    },
   
  ]
})

export default router
