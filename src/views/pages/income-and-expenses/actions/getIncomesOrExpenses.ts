import { makeHttpReq } from '@/http/makeHttpReq'
import { ref } from 'vue'

export enum DataType {
  INCOME = 'incomes',
  EXPENSE = 'expenses'
}

export interface IncomeAndExpense {
  id: number
  name: string
  amount: string
  userId: number
}

export type ResponseType = { data: Array<IncomeAndExpense> }

export function useGetIncomesOrExpenses() {
  const loading = ref(false)
  const serverData = ref<ResponseType>({} as ResponseType)

  async function getIncomesOrExpenses(dataType: DataType) {
    try {
      const url = dataType == DataType.INCOME ?  DataType.INCOME  : DataType.EXPENSE 
      loading.value = true
      const data = await makeHttpReq<undefined, ResponseType>(url, 'GET')
      serverData.value = data
      loading.value = false
    } catch (error) {
      console.error(error)
      loading.value = false
    }
  }

  return { getIncomesOrExpenses, serverData, loading }
}
