<script lang="ts" setup>
import {
  useCreateIncomeOrExpense,
  type IFormCreateIncomeOrExpense
} from './actions/createIncomeOrExpense'
import { DataType } from './actions/getIncomesOrExpenses'
import CreateIncomeOrExpenseForm from './components/CreateIncomeOrExpenseForm.vue'
import { useIncomOrExpenseStore } from './store/incomeOrExpense'

const { loading, createIncomeOrExpense } = useCreateIncomeOrExpense()

const { edit } = useIncomOrExpenseStore()
async function saveIncomeOrExpense(input: IFormCreateIncomeOrExpense, incomeOrExpense: DataType) {
  await createIncomeOrExpense(incomeOrExpense, input, edit)
}
</script>

<template>
  <div class="container">
    <div class="row">
      <!-- <h3>Create Incomes or Expenses</h3> -->
    </div>
    <div class="row">
      <div class="col-md-10">
        <CreateIncomeOrExpenseForm :loading="loading" @submit-form="saveIncomeOrExpense">
          <template #link>
            <RouterLink to="/income_and_expenses">Income & Expenses</RouterLink>
          </template>
        </CreateIncomeOrExpenseForm>
      </div>
    </div>
  </div>
</template>
