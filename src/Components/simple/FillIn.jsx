import React from 'react';

const FillIn = ({ identifier, label }) => {
    return (
        <div>
            <label htmlFor={identifier}>{label}</label>
            <input id={identifier} name={identifier} type='text'></input>
        </div>
    );
}

export default FillIn;