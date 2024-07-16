<script lang="ts" setup>
import { useCreateIncomeOrExpense } from './actions/createIncomeOrExpense';

</script>

<template>
   <div class="container">
    <div class="row">
        <h1>Create Incomes or Expenses</h1>
    </div>
    <div class="row">
        <div class="col-md-10">
            <CreateIncomeOrExpenseForm >
                <template #link>
                    <RouterLink to="/income_and_expenses">Income & Expenses</RouterLink>
                </template>
            </CreateIncomeOrExpenseForm>
        </div>
    </div>
   </div>
</template>