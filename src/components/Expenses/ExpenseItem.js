import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

export default function ExpenseItem(props) {
    return (
        <li className={'expense-item'}>
            <ExpenseDate date={props.date} />
            <div className={'expense-item__description'}>
                <h2>{props.desc}</h2>
                <div className={'expense-item__price'}>${props.price}</div>
            </div>
        </li>
    )
}