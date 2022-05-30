import React from 'react'
import Chart from '../Chart/Chart.js'

const expenseMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// Data List Structure

// id: `#${Math.round((Math.random() * 10000) + 10000)}`,
// desc: 'Room Rent in NYC',
// date: {
//     year: 2020,
//     month: 1,
//     day: 5,
// },
// price: '10000',

const ExpenseChart = ({ dataList }) => {
    // label, qty (quantity), maxQty (maximum quantity)
    let values = []
    for (let i = 0; i < expenseMonths.length; i++) {
        let qty = dataList.filter((dataEntry) => dataEntry.date.month === (i + 1)).map((dataEntry) => parseFloat(dataEntry.price)).reduce((prev, cur) => prev + cur, 0)
        const maxQty = dataList.map((dataEntry) => parseFloat(dataEntry.price)).reduce((prev, cur) => prev + cur, 0)
        const label = expenseMonths[i]
        values.push({
            label,
            qty,
            maxQty,
        })
        console.log({
            label,
            qty,
            maxQty,
        })
    }
    return (
        <Chart values={values} />
    )
}

export default ExpenseChart