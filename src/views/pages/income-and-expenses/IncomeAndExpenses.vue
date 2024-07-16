<script lang="ts" setup>
import { onMounted } from 'vue'
import IncomeAndExpenseTable from './components/IncomeAndExpenseTable.vue'
import { DataType, useGetIncomesOrExpenses } from './actions/getIncomesOrExpenses'
const { serverData, getIncomesOrExpenses, loading } = useGetIncomesOrExpenses()
onMounted(async () => {
  await getIncomesOrExpenses(DataType.INCOME)
})
</script>

<template>
  <div class="container">
    <div class="row">
      <h1>Incomes and Expenses</h1>
    </div>
    <div class="row">
      <div class="col-md-6">
        <IncomeAndExpenseTable
          @getIncomesOrExpenses="getIncomesOrExpenses"
          :serverData="serverData.data">
          <template #loading>
            <span v-if="loading">loading...</span>
          </template>
          </IncomeAndExpenseTable>
      </div>
    </div>
  </div>
</template>
