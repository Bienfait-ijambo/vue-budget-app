<script lang="ts" setup>
import type { IFormCreateIncomeOrExpense } from '../actions/createIncomeOrExpense'
import Error from '../../components/Error.vue'
import BaseInput from '../../components/BaseInput.vue'
import BaseBtn from '../../components/BaseBtn.vue'

import { useVuelidate } from '@vuelidate/core'
import { required, decimal } from '@vuelidate/validators'
import { DataType } from '../actions/getIncomesOrExpenses'
import { useIncomOrExpenseStore } from '../store/incomeOrExpense'
import type { userAccountStatusType } from '@/helper/auth'

defineProps<{
  loading: boolean
  userAccountStatus:userAccountStatusType
}>()
const rules = {
  name: { required }, // Matches state.firstName
  amount: { required, decimal },
  // userId: { required }
}
const incomeOrExpense = useIncomOrExpenseStore()
function changeCheckboxStatus() {
  incomeOrExpense.checkboxInput.val = !incomeOrExpense.checkboxInput.val
  incomeOrExpense.checkboxInput.val
    ? (incomeOrExpense.checkboxInput.label = DataType.INCOME)
    : (incomeOrExpense.checkboxInput.label = DataType.EXPENSE)
}

const v$ = useVuelidate(rules, incomeOrExpense.input)


const emit = defineEmits<{
  (e: 'submitForm', input: IFormCreateIncomeOrExpense, expenseOrIncome: DataType): Promise<void>
}>()

async function validate() {
  const result = await v$.value.$validate()
  if (!result) return

  await emit('submitForm', incomeOrExpense.input, incomeOrExpense.checkboxInput.label)
  v$.value.$reset()
}
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
           <b> Create an Expense or Income</b>
          </div>
          <div class="card-body">
            <!-- start card body  -->
            <form @submit.prevent="validate">
              <Error label="Name" :errors="v$.name.$errors">
                <BaseInput tested-input="name" v-model="incomeOrExpense.input.name" />
              </Error>

              <Error label="Amount" :errors="v$.amount.$errors">
                <BaseInput tested-input="amount" v-model="incomeOrExpense.input.amount" />
              </Error>
              <br />
              <div class="row">
                <div class="col-md-3">
                  <div class="form-group">
                    <label>{{ incomeOrExpense.checkboxInput.label }}</label>
                    <input
                      type="checkbox"
                      @click="changeCheckboxStatus"
                      style="transform: scale(1.3)"
                      :checked="incomeOrExpense.checkboxInput.val"
                    />
                  </div>
                </div>
              </div>
              <br />

              <div class="row">
                <slot name="link"></slot>
              </div>
              <div class="row">
                <div class="col-md-8"></div>
                <div class="col-md-4">
                 <div v-if="userAccountStatus==='Active'">
                  <BaseBtn
                    :class="incomeOrExpense.edit ? 'btn btn-warning' : 'btn btn-primary'"
                    :loading="loading"
                    :label="incomeOrExpense.edit ? 'Update' : 'Create'"
                  />
                 </div>
                 <div v-else>
                  Please make a subscription : <RouterLink to="/pricings">Pricings</RouterLink>
                 </div>
                   
                 
                </div>
              </div>
            </form>
            <!-- end card body -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
