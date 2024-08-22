<script lang="ts" setup>
import type { ICheckUserAccount } from '../actions/getCustomer'

defineProps<{
  checkUserAccountData: Array<ICheckUserAccount>
}>()

const emit = defineEmits<{
  (e: 'blockOrUnblockUser', data: ICheckUserAccount): Promise<void>
}>()
</script>

<template>
  <table class="table table-bordered table-hover table-striped">
    <thead>
      <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Email</td>
        <td>Pricing</td>
        <td>Amount</td>
        <td>Payment Term</td>

        <td>StartDate</td>
        <td>EndDate</td>
        <td>Left Days</td>
        <td>Status</td>
        <td>Block user</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in checkUserAccountData" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.pricing }}</td>
        <td>{{ user.amount }} USD</td>
        <td>{{ user.payment_term }}</td>

        <td>{{ user.start_date }}</td>
        <td>{{ user.end_date }}</td>
        <td>{{ user.leftDays }}</td>
        <td>
          {{ user.account_status }}
        </td>
        <td>
          <button @click="emit('blockOrUnblockUser', user)" class="btn btn-warning btn-sm">
            {{ user.account_status === 'Active' ? 'Block' : 'Unblock' }}
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
