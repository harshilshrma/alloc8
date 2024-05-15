import React, { useState } from 'react';

const CurrencyDropdown = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('Dollar');
    const currencies = ['Dollar', 'Pound', 'Euro', 'Rupee'];

    const handleChange = (event) => {
        setSelectedCurrency(event.target.value);
    }

    return (
        <div>
            <label>Currency</label>
            <select value={selectedCurrency} onChange={handleChange}>
                {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CurrencyDropdown;