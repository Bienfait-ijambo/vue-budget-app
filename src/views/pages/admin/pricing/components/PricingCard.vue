<script lang="ts" setup>
import type IPricings from '../actions/getPricing'

defineProps<{
  pricingData: Array<IPricings>
}>()

const emit = defineEmits<{
  (e: 'makePayment', pricing: IPricings): void
}>()
</script>
<template>
  <div class="col-md-4" v-for="pricing in pricingData" :key="pricing.id">
    <div class="card mb-4 box-shadow" align="center">
      <div class="card-header">
        <h4 class="my-0 font-weight-normal">{{ pricing.name }}</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">
          ${{ pricing.price }} <small class="text-muted">/{{ pricing.payment_term }} </small>
        </h1>
        <ul
          class="list-unstyled mt-3 mb-4"
          v-for="priceFeature in pricing.pricing_features"
          :key="priceFeature.id"
        >
          <li>{{ priceFeature.name }}</li>
        </ul>
        <button
          @click="emit('makePayment', pricing)"
          type="button"
          class="btn btn-lg btn-block btn-outline-primary"
        >
          Get Started
        </button>
      </div>
    </div>
  </div>
</template>
