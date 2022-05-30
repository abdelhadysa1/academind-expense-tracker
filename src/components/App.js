import React, { useState } from 'react'
import Expenses from './Expenses'
import NewExpense from './Expenses/NewExpense';

const DEFAULT_EXPENSES = [
	{
		id: `#${Math.round((Math.random() * 10000) + 10000)}`,
		desc: 'Room Rent in NYC',
		date: {
			year: 2022,
			month: 1,
			day: 5,
		},
		price: '10000',
	},
	{
		id: `#${Math.round((Math.random() * 10000) + 10000)}`,
		desc: 'Car Insurance',
		date: {
			year: 2022,
			month: 2,
			day: 7,
		},
		price: '500',
	},
	{
		id: `#${Math.round((Math.random() * 10000) + 10000)}`,
		desc: 'Gaming PC',
		date: {
			year: 2022,
			month: 5,
			day: 27,
		},
		price: '2000',
	},
	{
		id: `#${Math.round((Math.random() * 10000) + 10000)}`,
		desc: 'New Car',
		date: {
			year: 2023,
			month: 7,
			day: 1,
		},
		price: '20000',
	},
	{
		id: `#${Math.round((Math.random() * 10000) + 10000)}`,
		desc: 'A new gaming PC',
		date: {
			year: 2024,
			month: 5,
			day: 29,
		},
		price: '7000',
	},
	{
		id: `#${Math.round((Math.random() * 10000) + 10000)}`,
		desc: 'Traveling abroad',
		date: {
			year: 2025,
			month: 9,
			day: 4,
		},
		price: '12000',
	},
]

function App() {
	const [ expenses, setExpenses ] = useState(DEFAULT_EXPENSES)
	const addExpense = (expenseData) => {
		const { desc, date, price } = expenseData
		if (!desc || typeof desc !== 'string' || !date || !date.year || !date.month || !date.day
			|| typeof date.year !== 'number' || typeof date.month !== 'number'
			|| typeof date.day !== 'number' || typeof price !== 'string') return;
		setExpenses((prevExpenses) => [...prevExpenses, {
			id: `#${Math.round((Math.random() * 10000) + 10000)}`,
			desc,
			date,
			price,
		}])
	}
	const removeExpense = (expenseId) => {
		if (!expenseId || typeof expenseId !== 'string') return;
		setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== expenseId))
	}
	const updateExpense = (expenseId, expenseData) => {
		if (!expenseId || typeof expenseId !== 'string') return;
		const { desc, date, price } = expenseData
		if (!desc || typeof desc !== 'string' || !date || !date.year || !date.month || !date.day
			|| typeof date.year !== 'number' || typeof date.month !== 'number'
			|| typeof date.day !== 'number' || typeof price !== 'string') return;
		setExpenses((prevExpenses) => prevExpenses.map((expense) => {
			if (expense.id === expenseId) {
				return {
					id: expenseId,
					desc,
					date,
					price,
				}
			} else return expense
		}))
	}
	return (
		<>
		 	<NewExpense />
			<Expenses expenses={expenses} />
		</>
	);
}

export default App;
