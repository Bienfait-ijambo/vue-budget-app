<script lang="ts" setup>
import { ref } from 'vue'
import { DataType, type IncomeAndExpense } from '../actions/getIncomesOrExpenses'

defineProps<{
  serverData: Array<IncomeAndExpense>
}>()

const emit = defineEmits<{
  (e: 'updateRecord', item: IncomeAndExpense, dataType: DataType): Promise<void>
  (e: 'deleteRecord', item: IncomeAndExpense, dataType: DataType): Promise<void>
  (e: 'getIncomesOrExpenses', dataType: DataType): Promise<void>
}>()

const dataType = ref(DataType.INCOME)
</script>
<template>
  <div class="row">
    <div class="row">
      <div class="col-md-4">
        <div class="input-group">
          <div class="input-group-text">
            <i class="bi bi-funnel"></i>
          </div>

          <select
            class="form-control form-control-sm"
            @change="emit('getIncomesOrExpenses', dataType)"
            v-model="dataType"
            name=""
            id=""
          >
            <option tested-option="income" :value="DataType.INCOME" selected="true">Incomes</option>
            <option tested-option="expense" :value="DataType.EXPENSE">Expenses</option>
          </select>
          <br />
        </div>
      </div>
    </div>
    <br />
    <br />
    <h5><slot name="loading"></slot></h5>

    <br />

    <div class="row">
      <table class="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Amount</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in serverData" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.amount }}</td>
            <td>
              <button
                @click="emit('updateRecord', item, dataType)"
                tested-btn="update"
                class="btn btn-outline-primary"
              >
                Edit
              </button>
            </td>
            <td>
              <button
                @click="emit('deleteRecord', item, dataType)"
                class="btn btn-outline-danger"
                tested-btn="delete"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
