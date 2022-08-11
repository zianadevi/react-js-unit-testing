import React from 'react';

const FormInput = ({id, label, type = 'text', value, onValueChange}) => {
    const handleOnInput = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        onValueChange(key, value);
    }
    return (
        <>
            <label>{label}</label>
            <input name={id} type={type} value={value} onChange={handleOnInput}/>
        </>
    );
};

export default FormInput;
