import './ExpenseDate.css'

// https://stackoverflow.com/a/15397495/16723335
const nth = function (d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
}

export default function ExpenseDate(props) {
    const date = new Date(props.date.year, props.date.month - 1, props.date.day)
    let day = date.toLocaleString('en-US', { day: '2-digit' })
    day += nth(day)
    const month = date.toLocaleString('en-US', { month: 'short' })
    const year = date.toLocaleString('en-US', { year: 'numeric' })
    return (
        <div className={'expense-date'}>
            <div className={'expense-date__month'}>{month}</div>
            <div className={'expense-date__day'}>{day}</div>
            <div className={'expense-date__year'}>{year}</div>
        </div>
    )
}