export interface IMenu {
  name: string
  link: string
  icon: string
}
export const Menu: Array<IMenu> = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    icon: 'bi bi-wrench-adjustable'
  },
  {
    name: 'Income & Expenses',
    link: '/create_income_or_expenses',
    icon: 'bi bi-piggy-bank'
  },

  {
    name: 'Customers',
    link: '/customers',
    icon: 'bi bi-people'
  },
  {
    name: 'Pricings',
    link: '/pricings',
    icon: 'bi bi-coin'
  },
  {
    name: 'Payments',
    link: '/payments',
    icon: 'bi bi-cash'
  }
]
