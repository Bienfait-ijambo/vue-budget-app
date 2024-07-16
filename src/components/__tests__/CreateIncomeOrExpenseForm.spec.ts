import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CreateIncomeOrExpenseForm from '@/views/pages/income-and-expenses/components/CreateIncomeOrExpenseForm.vue'

describe('CreateIncomeOrExpenseForm', () => {
  it('should emit submitForm events with correct payload', () => {
    
    // 1. finds input  & set value
     //2. simulate form submission
     //3.assert event has been emitted
     //4 assert payload is correct
     // test  payload
    const inputData={
      name:"salary",
      amount:"100",
      // userId:1
    }

    const form=mount(CreateIncomeOrExpenseForm)
    const name=form.find('[tested-input="name"]').setValue(inputData.name)
    const amount=form.find('[tested-input="amount"]').setValue(inputData.amount)
    form.find('input[type=radio][value=Income]').setValue()
    form.find('input[type=radio][value=Expense]').setValue()

    form.find('form').trigger('submit')

    const emitEvent=form.emitted('submitForm') as Array<Array<any>>
    expect(emitEvent[0][0]).toMatchObject(inputData)
    

  
  })

 
})
