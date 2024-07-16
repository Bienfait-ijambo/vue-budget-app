<script lang="ts" setup>
import {  ref } from 'vue'
import type { IFormCreateIncomeOrExpense } from '../actions/createIncomeOrExpense';


const input = ref<IFormCreateIncomeOrExpense>({ name: '', amount: '', userId: null })

const emit=defineEmits<{
    (e:'submitForm',input:IFormCreateIncomeOrExpense):Promise<void>
}>()
</script>
<template>
  <div class="container">
    
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Create an Expense or Income</div>
          <div class="card-body">
            <!-- start card body  -->
           <form @submit.prevent="emit('submitForm',input)"> 
            <div class="form-group">
              <label>Name</label>
              <input v-model="input.name" tested-input="name"  type="text" class="form-control" placeholder="" />
            </div>
            <div class="form-group">
              <label>Amount</label>
              <input v-model="input.amount" tested-input="amount" type="text" class="form-control" placeholder="" />
            </div>
            <br />
            <div class="row">
              <div class="col-md-3">
                <div class="form-group">
                  <input style="transform: scale(1.2)" type="radio" value="Income" name="" id="" />
                  <label>Income</label>
                </div>
              </div>
              
              <div class="col-md-6">
                <div class="form-group">
                  <input style="transform: scale(1.2)" type="radio" value="Expense" name="" id="" />
                  <label>Expense</label>
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
                <button class="btn btn-primary w-100">Create</button>
              </div>
            </div></form>
             <!-- end card body -->
          </div>
         
        </div>
      </div>
    </div>
  </div>
</template>
