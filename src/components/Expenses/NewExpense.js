import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = ({ addExpense }) => {
	return (
		<div className='new-expense'>
			<ExpenseForm addExpense={addExpense} />
		</div>
	)
}

export default NewExpense