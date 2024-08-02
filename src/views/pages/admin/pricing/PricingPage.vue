
<script lang="ts" setup>
import  { onMounted } from 'vue';
import PricingCard from './components/PricingCard.vue'
import { useGetPricing } from './actions/getPricing';

const {serverData,getPricings}=useGetPricing()

onMounted(async()=>{
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
     <PricingCard :pricingData="serverData?.data"/>
  
      </div>
    </div>
  </template>