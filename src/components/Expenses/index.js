import React, { useState } from 'react'
import ExpensesFilter from './ExpenseFilter'
import ExpenseItem from './ExpenseItem'
import './index.css'

const expenseYears = [ 2022, 2023, 2024, 2025 ]

export default function Expenses(props) {
	const [filterYear, setFilterYear] = useState(expenseYears[0].toString())
	const { expenses } = props
	const handleChangeFilterYear = (e) => {
		setFilterYear(e.target.value)
	}
	return (
		<>
			<div className="expenses">
				<ExpensesFilter selected={filterYear} onChangeFilterYear={handleChangeFilterYear} expenseYears={expenseYears} />
				{expenses.filter((expense) => expense.date.year.toString() === filterYear).map((expense) => <ExpenseItem key={expense.id} desc={expense.desc} date={expense.date} price={expense.price} />)}
			</div>
		</>
	)
}