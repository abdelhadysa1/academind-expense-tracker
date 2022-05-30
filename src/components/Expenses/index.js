import React, { useState } from 'react'
import ExpensesFilter from './ExpenseFilter'
import ExpenseItem from './ExpenseItem'
import ExpenseChart from './ExpenseChart'
import './index.css'

export default function Expenses({ expenses, expenseYears }) {
	const [filterYear, setFilterYear] = useState(expenseYears[0].toString())
	const handleChangeFilterYear = (e) => {
		setFilterYear(e.target.value)
	}
	const filteredList = expenses.filter((expense) => expense.date.year.toString() === filterYear)
	return (
		<>
			<div className="expenses">
				<ExpensesFilter selected={filterYear} onChangeFilterYear={handleChangeFilterYear} expenseYears={expenseYears} />
				{filteredList.length === 0 && (
					<h2 className='expenses-list__fallback'>No expenses to display :(</h2>
				)}
				{filteredList.length > 0 && (
					<ExpenseChart dataList={filteredList} />
				)}
				{filteredList.length > 0 && (
					<ul className='expenses-list'>
						{filteredList.sort((a, b) => Math.round(new Date(b.date.year, b.date.month, b.date.day).getTime() / 1000) - Math.round(new Date(a.date.year, a.date.month, a.date.day).getTime() / 1000)).map((expense) => <ExpenseItem key={expense.id} desc={expense.desc} date={expense.date} price={expense.price} />)
						}
					</ul>
				)}
			</div>
		</>
	)
}