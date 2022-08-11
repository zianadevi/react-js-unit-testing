import React from 'react';

const FormButton = ({label, onClick, disabled = false}) => {
    return <button disabled={disabled} onClick={onClick}>{label}</button>;
};

export default FormButton;

