import { showError } from '@/helper/toastnotification'
import { makeHttpReq } from '@/http/makeHttpReq'
import { ref } from 'vue'


export interface ICheckUserAccount {
  id: number;
  name: string
  email:  string
  pricing:  string
  amount:  string
  payment_term:  string
  start_date:  string
  end_date:  string
  leftDays: number
  account_status:  string
}

type ResponseType = { data: Array<ICheckUserAccount> }

export function useGetCheckUserAccountData() {
  const loading = ref(false)
  const serverData = ref<ResponseType>({} as ResponseType)

  async function getCheckUserAccountData() {
    try {
      loading.value = true
      const data = await makeHttpReq<undefined, ResponseType>('check_user/accounts', 'GET')
      serverData.value = data
      loading.value = false
    } catch (error) {
      showError((error as Error).message)
      loading.value = false
    }
  }

  return { getCheckUserAccountData, serverData, loading }
}
