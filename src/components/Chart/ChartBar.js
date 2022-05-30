import React from 'react'
import './ChartBar.css'

const ChartBar = ({ label, value, maxValue }) => {
    const height = Math.round(value / maxValue * 100) + '%'
    return (
    <>
        <div className={'chart-bar'}>
            <div className={'chart-bar__inner'}>
                <div className={'chart-bar__fill'} style={{
                    height,
                }}></div>
                <div className={'chart-bar__label'}>{label}</div>
            </div>
        </div>
    </>
    )
}

export default ChartBar