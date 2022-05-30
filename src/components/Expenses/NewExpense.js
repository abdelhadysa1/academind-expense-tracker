import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = ({ addExpense, expenseYears }) => {
	const [ displayForm, changeFormDisplay ] = useState(false)
	const toggleFormDisplay = (e) => {
		changeFormDisplay((prevState) => !prevState)
	}
	switch (displayForm) {
		case false: return (
			<div className='new-expense'>
				<button onClick={toggleFormDisplay}>Add New Expense</button>
			</div>
		)
		default: return (
			<div className='new-expense'>
				<ExpenseForm addExpense={addExpense} expenseYears={expenseYears} toggleFormDisplay={toggleFormDisplay} />
			</div>
		)
	}
}

export default NewExpense