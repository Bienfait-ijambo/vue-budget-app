<script lang="ts" setup>
import { onMounted } from 'vue'

import { useGetPayments } from './actions/getPayments'
import PaymentTable from './components/PaymentTable.vue'
const { serverData, getPayments } = useGetPayments()

onMounted(async () => {
  await getPayments()
})
</script>

<template>
  <div class="container">
    <h4>My payments</h4>
    <div class="row">
      <div class="col-md-12">
        <paymentTable :payments="serverData?.data" />
      </div>
    </div>
  </div>
</template>
