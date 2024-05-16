import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseTotal from './ExpenseTotal';

const Budget = () => {
    const { budget, remaining, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleInputChange = (event) => {
        setNewBudget(event.target.value);
    };

    const handleBlur = () => {
        const inputValue = parseInt(newBudget);
        if (inputValue > 20000) {
            alert(`The value cannot exceed 20000.`);
            setNewBudget(2000);
        } else if (inputValue < remaining) {
            alert(`You cannot reduce the budget value lower than the spent amount.`);
            setNewBudget(2000);
        }
    };

    //extrtacting the currency symbol
    const currencySymbol = currency.split(' ')[0];

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currencySymbol} </span>
            <input type="number" step="10" value={newBudget} onChange={handleInputChange} onBlur={handleBlur} ></input>
        </div>
    );

};

export default Budget;