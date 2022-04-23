import React from 'react';
import './Input.css';

const Input = ({ type, placeholder, onChange, value, valid }) => {
  return (
    <div className="form-control">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          border: !valid ? '2px solid red' : 'none',
        }}
      />
      {!valid && <em className="error-message">{'please add a link'}</em>}
    </div>
  );
};

export default Input;
