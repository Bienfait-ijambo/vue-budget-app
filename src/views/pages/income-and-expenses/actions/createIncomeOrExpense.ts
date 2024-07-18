import { makeHttpReq } from '@/http/makeHttpReq'
import { ref } from 'vue'
import { DataType } from './getIncomesOrExpenses'
import { showError, successMsg } from '@/helper/toastnotification'



export interface IFormCreateIncomeOrExpense {
  id:number;
    name: string
    amount: string
    userId: number
  }

export type ResponseType= {message:string}

export function useCreateIncomeOrExpense() {
  const loading = ref(false)

  async function createIncomeOrExpense(dataType: DataType,input:IFormCreateIncomeOrExpense) {
    try {
        const url=dataType==DataType.INCOME?'incomes':'expenses'
        loading.value=true
      const data = await makeHttpReq<IFormCreateIncomeOrExpense,ResponseType>
      (url,'POST',input)
      successMsg(data.message)

      loading.value=false
    } catch (error) {
      loading.value=false
      showError((error as Error).message)

    }
  }

  return { createIncomeOrExpense ,loading}
}

async function create(url:string,input:IFormCreateIncomeOrExpense){
  const data=await makeHttpReq<IFormCreateIncomeOrExpense,ResponseType>
      (url,'POST',input)
      return data
}

async function update(url:string,input:IFormCreateIncomeOrExpense){
  const data=await makeHttpReq<IFormCreateIncomeOrExpense,ResponseType>
      (url,'PUT',input)
      return data
}

