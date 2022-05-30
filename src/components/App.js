import Expenses from './Expenses'
import NewExpense from './Expenses/NewExpense';

const expenses = [
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
	return (
		<>
		 	<NewExpense />
			<Expenses expenses={expenses} />
		</>
	);
}

export default App;
