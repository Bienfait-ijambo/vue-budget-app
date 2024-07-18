import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CreateIncomeOrExpenseForm from '@/views/pages/income-and-expenses/components/CreateIncomeOrExpenseForm.vue'

describe('CreateIncomeOrExpenseForm', () => {
  it('should have a submit event', () => {
    const inputData = {
      name: 'salary',
      amount: '100',
      userId: 1
    }

    const form = mount(CreateIncomeOrExpenseForm, { props: { loading: false } })
    form.find('[tested-input="name"]').setValue(inputData.name)
    form.find('[tested-input="amount"]').setValue(inputData.amount)
    form.find('input[type=checkbox]').setValue()

    form.find('form').trigger('submit.prevent')

    expect(form.emitted()).toHaveProperty('submit')
  })
})
