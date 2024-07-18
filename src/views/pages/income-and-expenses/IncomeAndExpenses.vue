<script lang="ts" setup>
import { onMounted } from 'vue'
import IncomeAndExpenseTable from './components/IncomeAndExpenseTable.vue'
import {
  DataType,
  useGetIncomesOrExpenses,
  type IncomeAndExpense
} from './actions/getIncomesOrExpenses'
import { useDeleteIncomeOrExpense } from './actions/deleteIncomeOrExpense'
import { confirmDelation } from '@/helper/sweetAlert'

const { serverData, getIncomesOrExpenses, loading } = useGetIncomesOrExpenses()
const { deleteIncomeOrExpense } = useDeleteIncomeOrExpense()

async function removeIncomeOrExpense(incomeOrExpense: IncomeAndExpense, dataType: DataType) {
  confirmDelation().then(async () => {
    await deleteIncomeOrExpense(dataType, { id: incomeOrExpense.id })
    getIncomesOrExpenses(DataType.INCOME)
  })
}




onMounted(async () => {
  await getIncomesOrExpenses(DataType.INCOME)
})
</script>

<template>
  <div class="container">
    <div class="row">
      <h1 @click="i">Incomes and Expenses</h1>
    </div>
   
    <div class="row">
      <div class="col-md-6">
        <IncomeAndExpenseTable
          @deleteRecord="removeIncomeOrExpense"
          @getIncomesOrExpenses="getIncomesOrExpenses"
          :serverData="serverData.data"
        >
          <template #loading>
            <span v-if="loading">loading...</span>
          </template>
        </IncomeAndExpenseTable>
      </div>
    </div>
  </div>
</template>
