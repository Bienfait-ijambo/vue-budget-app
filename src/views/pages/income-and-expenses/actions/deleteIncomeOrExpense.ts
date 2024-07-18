import { makeHttpReq } from '@/http/makeHttpReq'
import { ref } from 'vue'
import { DataType } from './getIncomesOrExpenses'
import { showError, successMsg } from '@/helper/toastnotification'



export type ResponseType= {message:string}

export type DeleteInput={id:number}
export function useDeleteIncomeOrExpense() {
  const loading = ref(false)

  async function deleteIncomeOrExpense(dataType: DataType,input:DeleteInput) {
    try {
        const url=dataType==DataType.INCOME?'incomes':'expenses'
        loading.value=true
      const data = await makeHttpReq<DeleteInput,ResponseType>
      (url,'DELETE',input)
      successMsg(data.message)

      
      loading.value=false
    } catch (error) {
      loading.value=false
      showError((error as Error).message)

    }
  }

  return { deleteIncomeOrExpense ,loading}
}
