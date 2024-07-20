import { makeHttpReq } from '@/http/makeHttpReq'
import { ref } from 'vue'
import { DataType } from './getIncomesOrExpenses'
import { showError, successMsg } from '@/helper/toastnotification'
import { useIncomOrExpenseStore } from '../store/incomeOrExpense'

export interface IFormCreateIncomeOrExpense {
  // id: number|null
  name: string
  amount: string
  userId: number
}

type ResponseType = { message: string }

const incomeOrExpenseStore=useIncomOrExpenseStore()

export function useCreateIncomeOrExpense() {
  const loading = ref(false)

  async function createIncomeOrExpense(dataType: DataType, input: IFormCreateIncomeOrExpense,edit:boolean) {
    try {
      const url = dataType == DataType.INCOME ? 'incomes' : 'expenses'
      loading.value = true
      const data = edit ? await update(url,input):await create(url,input)
      incomeOrExpenseStore.edit=false
      incomeOrExpenseStore.input={} as IFormCreateIncomeOrExpense
    
      successMsg(data.message)

      loading.value = false
    } catch (error) {

      if(typeof (error as {errors:Array<string>}).errors !=='undefined'){
        for(const message of (error as {errors:Array<string>}).errors ){
          showError(message)
        }
      }

      loading.value = false
      showError((error as Error).message)
    }
  }

  return { createIncomeOrExpense, loading }
}

async function create(url: string, input: IFormCreateIncomeOrExpense) {
  const data = await makeHttpReq<IFormCreateIncomeOrExpense, ResponseType>(url, 'POST', input)
  return data
}

async function update(url: string, input: IFormCreateIncomeOrExpense) {
  const data = await makeHttpReq<IFormCreateIncomeOrExpense, ResponseType>(url, 'PUT', input)
  return data
}
