import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = ({ values }) => {
    return (
    <>
        <div className={'chart'}>
            {
                // label, qty (quantity), maxQty (maximum quantity)
                values.map((value) => <ChartBar key={(value.label + value.qty).toString()} value={value.qty} maxValue={value.maxQty} label={value.label} /> )
            }
        </div>
    </>)
}

export default Chart