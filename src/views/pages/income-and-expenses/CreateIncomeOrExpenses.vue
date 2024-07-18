
<script lang="ts" setup>
import {
  useCreateIncomeOrExpense,
  type IFormCreateIncomeOrExpense
} from './actions/createIncomeOrExpense'
import { DataType } from './actions/getIncomesOrExpenses'
import CreateIncomeOrExpenseForm from './components/CreateIncomeOrExpenseForm.vue'

const { loading, createIncomeOrExpense } = useCreateIncomeOrExpense()

async function saveIncomeOrExpense(input: IFormCreateIncomeOrExpense, incomeOrExpense: DataType) {
  await createIncomeOrExpense(incomeOrExpense, input)
}
</script>

<template>
  <div class="container">
    <div class="row">
      <h1>Create Incomes or Expenses</h1>
    </div>
    <div class="row">
      <div class="col-md-10">
        <CreateIncomeOrExpenseForm 
        :loading="loading" 
        @submit-form="saveIncomeOrExpense">
          <template #link>
            <RouterLink to="/income_and_expenses">Income & Expenses</RouterLink>
          </template>
        </CreateIncomeOrExpenseForm>
      </div>
    </div>
  </div>
</template>
