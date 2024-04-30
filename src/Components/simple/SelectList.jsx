import React, { useState } from 'react';

const SelectList = ({ identifier, label, options, passVal }) => {
    const [val, setVal] = useState(options[0]);

    const changeVal = (event) => {
        setVal(event.target.value);
        passVal(event.target.value);
    };

    return(
        <div>
            <label htmlFor={identifier}>{label}</label>
            <select id={identifier} name={identifier} value={val} onChange={changeVal}>
                {/* for each option in options list, make <option/> */}
                {options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default SelectList;