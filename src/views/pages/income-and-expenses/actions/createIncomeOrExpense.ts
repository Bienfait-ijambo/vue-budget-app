import { makeHttpReq } from '@/http/makeHttpReq'
import { ref } from 'vue'
import { DataType } from './getIncomesOrExpenses'



export interface IFormCreateIncomeOrExpense {
    name: string
    amount: string
    userId: number
  }

export type ResponseType= {message:String}

export function useCreateIncomeOrExpense() {
  const loading = ref(false)

  async function createIncomeOrExpense(dataType: DataType) {
    try {
        const url=dataType==DataType.INCOME?'incomes':'expenses'
        loading.value=true
      const data = await makeHttpReq<IFormCreateIncomeOrExpense,ResponseType>
      (url,'GET')
    
      loading.value=false
    } catch (error) {
      loading.value=false

    }
  }

  return {  getIncomesOrExpenses,serverData,loading}
}
