import { getUserData } from '@/helper/auth'
import { makeHttpReq } from '@/http/makeHttpReq'
import { ref } from 'vue'

export interface IPayments {
  id: number
  pricing: string
  amount: string
  payment_term: string
  currency: string
  userId: number
  start_date: string
  end_date: string
}

type ResponseType = { data: Array<IPayments> }

export function useGetPayments() {
  const loading = ref(false)
  const serverData = ref<ResponseType>({} as ResponseType)
  const userData = getUserData()
  const userId = parseInt(userData?.user?.userId as string)

  async function getPayments() {
    try {
      loading.value = true
      const data = await makeHttpReq<undefined, ResponseType>(`payments?userId=${userId}`, 'GET')
      serverData.value = data
      loading.value = false
    } catch (error) {
      console.error(error)
      loading.value = false
    }
  }

  return { getPayments, serverData, loading }
}
