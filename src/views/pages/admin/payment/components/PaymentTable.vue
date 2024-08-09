<script lang="ts" setup>
import { IPayments } from "../actions/getPayments"

defineProps<{
    payments:Array<IPayments>
}>()
</script>


<template>
    
    <table class="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <td>Pricing</td>
            <td>Amount</td>
            <td>Currency</td>
            <td>Payment Terms</td>
            <td>StartDate</td>
            <td>EndDate</td>
          </tr>
        </thead>
        <tbody>
            <tr v-for="payment in payments" :key="payment.id">
            <td>{{payment.pricing}}</td>
            <td>{{payment.amount}}</td>
            <td>{{payment.currency}}</td>
            <td>{{payment.payment_term}}</td>

            <td>{{payment.start_date}}</td>
            <td>{{payment.end_date}}</td>
          </tr>
          </tbody>
       </table>
</template>