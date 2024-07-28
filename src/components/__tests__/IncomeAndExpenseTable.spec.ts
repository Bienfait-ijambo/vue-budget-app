import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import IncomeAndExpenseTable from '@/views/pages/income-and-expenses/components/IncomeAndExpenseTable.vue'
import { DataType } from '@/views/pages/income-and-expenses/actions/getIncomesOrExpenses'
describe('IncomeAndExpenseTable', () => {
  const serverData = {
    id: 1,
    name: 'food',
    amount: '100',
    userId: 1
  }

  it('should takes a prop (array) with id,name,amount,userId', () => {
    const incomeAndExpenseTable = mount(IncomeAndExpenseTable, {
      props: { serverData: [serverData] }
    })
    const table = incomeAndExpenseTable.find('table').text()

    expect(table).toContain(serverData.amount)
    expect(table).toContain(serverData.name)
  })

  it('should emit  updateRecord', async () => {
    const incomeAndExpenseTable = mount(IncomeAndExpenseTable, {
      props: { serverData: [serverData] }
    })

    await incomeAndExpenseTable.find('[tested-btn="update"]').trigger('click')

    const emitEvent = incomeAndExpenseTable.emitted('updateRecord') as Array<Array<any>>

    expect(emitEvent).toHaveLength(1)
    expect(emitEvent[0]).toEqual([serverData, DataType.INCOME])
  })

  it('should emit  deleteRecord', async () => {
    const serverData = {
      id: 1,
      name: 'food',
      amount: '100',
      userId: 1
    }
    const incomeAndExpenseTable = mount(IncomeAndExpenseTable, {
      props: { serverData: [serverData] }
    })
    await incomeAndExpenseTable.find('[tested-btn="delete"]').trigger('click')

    const emitEvent = incomeAndExpenseTable.emitted('deleteRecord') as Array<Array<any>>
    expect(emitEvent).toHaveLength(1)
    expect(emitEvent[0]).toEqual([serverData, DataType.INCOME])
  })

  it('should emit  getIncomesOrExpenses', async () => {
    const incomeAndExpenseTable = mount(IncomeAndExpenseTable, {
      props: { serverData: [serverData] }
    })

    await incomeAndExpenseTable.find('select').trigger('change')

    const emitEvent = incomeAndExpenseTable.emitted('getIncomesOrExpenses')
    expect(emitEvent).toHaveLength(1)
  })

  it('select tag should contain  Incomes and Expenses text', () => {
    const incomeAndExpenseTable = mount(IncomeAndExpenseTable, {
      props: { serverData: [serverData] }
    })
    const income = incomeAndExpenseTable.find('[tested-option="income"]').text()
    const expense = incomeAndExpenseTable.find('[tested-option="expense"]').text()
    expect(income).toContain('Incomes')
    expect(expense).toContain('Expenses')
  })
})
