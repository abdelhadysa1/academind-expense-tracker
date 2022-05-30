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
				{expenses.filter((expense) => expense.date.year.toString() === filterYear).sort((a, b) => Math.round(new Date(b.date.year, b.date.month, b.date.day).getTime() / 1000) - Math.round(new Date(a.date.year, a.date.month, a.date.day).getTime() / 1000)).map((expense) => <ExpenseItem key={expense.id} desc={expense.desc} date={expense.date} price={expense.price} />)}
			</div>
		</>
	)
}