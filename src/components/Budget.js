import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
  const { budget, dispatch, expenses, currency } = useContext(AppContext);
  const handleBudget = (val) => {
    const totalExpenses = expenses.reduce((total, item) => {
      return (total += item.cost);
    }, 0);
    if (val < totalExpenses) {
      alert(
        'You cannot exceed reduce the budget value lower than the spending'
      );
      val = totalExpenses;
    }
    if (val > 20000) {
      alert(
        'The value cannot exceed remaining funds ' +
          currency +
          ' ' +
          (val - 20000)
      );
      val = 20000;
    }
    dispatch({
      type: 'SET_BUDGET',
      payload: val,
    });
  };
  return (
    <div className='alert alert-secondary'>
      <span>
        Budget: {currency}
        <input
          type='number'
          step='10'
          max='20000'
          value={budget}
          onChange={(event) => handleBudget(event.target.value)}
        />
      </span>
    </div>
  );
};
export default Budget;
