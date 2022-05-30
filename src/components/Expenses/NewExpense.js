import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = ({ addExpense, expenseYears }) => {
	return (
		<div className='new-expense'>
			<ExpenseForm addExpense={addExpense} expenseYears={expenseYears} />
		</div>
	)
}

export default NewExpense