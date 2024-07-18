import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { IFormCreateIncomeOrExpense } from '../actions/createIncomeOrExpense'
import { DataType } from '../actions/getIncomesOrExpenses'

export const useIncomOrExpenseStore = defineStore('incomeOrExpense', () => {
    const input = ref<IFormCreateIncomeOrExpense>({ name: '', amount: '', userId: 1 })

    const checkboxInput = ref({
      val: true,
      label: DataType.INCOME
    })

  return { input,checkboxInput  }
})
