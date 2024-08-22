import { showError } from '@/helper/toastnotification'
import { makeHttpReq } from '@/http/makeHttpReq'
import { ref } from 'vue'

export interface IPricingFeatures {
  id: number
  name: string
  priceId: number
}
export interface IPricings {
  id: number
  name: string
  stripe_price_id: string
  stripe_prod_id: string
  price: string
  payment_term: string
  pricing_features: Array<IPricingFeatures>
}

type ResponseType = { data: Array<IPricings> }

export function useGetPricing() {
  const loading = ref(false)
  const serverData = ref<ResponseType>({} as ResponseType)

  async function getPricings() {
    try {
      loading.value = true
      const data = await makeHttpReq<undefined, ResponseType>('pricings', 'GET')
      serverData.value = data
      loading.value = false
    } catch (error) {
      showError((error as Error).message)
      loading.value = false
    }
  }

  return { getPricings, serverData, loading }
}
