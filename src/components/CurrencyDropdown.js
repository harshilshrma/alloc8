import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { currency, updateCurrency } = useContext(AppContext);
    const currencies = ['$ Dollar', '£ Pound', '€ Euro', '₹ Rupee'];

    // function to split currency
    const getCurrencyParts = (fullCurrency) => {
        const [symbol, text] = fullCurrency.split(' ');
        return { symbol, text };
    }

    const handleChange = (event) => {
        updateCurrency(event.target.value);
    }

    return (
        <div>
            <label>Currency: </label>
            <select value={currency} className='alert alert-success' onChange={handleChange} style={{ marginLeft: "10px" }}>
                { currencies.map((fullCurrency) => {
                    const { symbol, text } = getCurrencyParts(fullCurrency);
                    return (
                        <option key={`${symbol}${text}`} value={fullCurrency}>
                            {`${symbol} ${text}`}
                        </option>
                    )
                })
                }
            </select>
        </div>
    );
};

export default CurrencyDropdown;