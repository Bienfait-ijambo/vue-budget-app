import { getUserData, UserRole } from '@/helper/auth'
import { type IMenu } from '@/views/pages/admin/components/menu'
import {
  useRouter,
  type NavigationGuardNext,
  type RouteLocationNormalized,
  type RouteLocationNormalizedLoaded
} from 'vue-router'

export function useBudgetAppMiddleware() {
  const userData = getUserData()
  //   const router = useRouter()

  function showMenu(menuArr: IMenu[]) {
    if (userData?.user?.role === UserRole.ADMIN) {
      const filteredMenu = menuArr.filter((menu) => menu.link === '/customers')
      return filteredMenu
    }

    if (userData?.user?.role === UserRole.CUSTOMER) {
      const filteredMenu = menuArr.filter((menu) => menu.link !== '/customers')
      return filteredMenu
    }
    return [] as IMenu[]
  }

  function showCustomer(
    to: RouteLocationNormalized,
    from: RouteLocationNormalizedLoaded,
    next: NavigationGuardNext
  ) {
    if (userData?.user?.role === UserRole.ADMIN) {
      next()
    } else {
      window.location.href = '/notFound'
    }
  }

  return { showMenu, showCustomer }
}
