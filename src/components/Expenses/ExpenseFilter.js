import React from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = ({ selected, onChangeFilterYear, expenseYears }) => {
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={selected} onChange={onChangeFilterYear}>
          {expenseYears.map((expenseYear) => <option key={`${expenseYear}`} value={`${expenseYear}`}>{expenseYear}</option>)}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;