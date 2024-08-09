<script lang="ts" setup>
import { onMounted } from 'vue'
import PricingCard from './components/PricingCard.vue'
import { useGetPricing, type IPricings } from './actions/getPricing'
import { APP } from '@/http/App'

const { serverData, getPricings } = useGetPricing()

function makePayment(pricing: IPricings) {
  window.location.href =
    APP.baseURL +
    '/checkout?stripe_prod_id=' +
    pricing.stripe_prod_id +
    '&stripe_price_id=' +
    pricing.stripe_price_id
}

onMounted(async () => {
  await getPricings()
})
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1 class="display-4" align="center">Pricing</h1>
      </div>
    </div>
    <br />
    <div class="row">
      <PricingCard 
      @makePayment="makePayment" 
      :pricingData="serverData?.data"
       />
    </div>
  </div>
</template>
