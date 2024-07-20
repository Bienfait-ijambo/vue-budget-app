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
import { useRouter } from 'vue-router'
import { useIncomOrExpenseStore } from './store/incomeOrExpense'

const { serverData, getIncomesOrExpenses, loading } = useGetIncomesOrExpenses()
const { deleteIncomeOrExpense } = useDeleteIncomeOrExpense()

async function removeIncomeOrExpense(incomeOrExpense: IncomeAndExpense, dataType: DataType) {
  confirmDelation().then(async () => {
    await deleteIncomeOrExpense(dataType, { id: incomeOrExpense.id })
    getIncomesOrExpenses(DataType.INCOME)
  })
}

const router=useRouter()
const incomeOrExpenseStore=useIncomOrExpenseStore()

function passDataToForm(incomeOrExpense: IncomeAndExpense, dataType: DataType){

  if(dataType===DataType.EXPENSE){
    incomeOrExpenseStore.checkboxInput={val:false,label:DataType.EXPENSE}
  }
  incomeOrExpenseStore.input={...incomeOrExpense}
  incomeOrExpenseStore.edit=true
  router.push('/create_income_or_expenses')
}



onMounted(async () => {
  incomeOrExpenseStore.edit=false
  await getIncomesOrExpenses(DataType.INCOME)
})
</script>

<template>
  <div class="container">
    <div class="row">
      <h1 >Incomes and Expenses</h1>
    </div>

    <div class="row">
      <div class="col-md-6">
        <IncomeAndExpenseTable
        @updateRecord="passDataToForm"
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
