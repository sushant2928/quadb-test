import React from "react";
import "./Input.style.css";
const Input = ({
  label,
  name,
  type,
  value,
  placeholder,
  handleChange,
  required,
  disabled,
}) => {
  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        onChange={(e) => handleChange(e)}
        value={value}
      />
    </div>
  );
};

export default Input;
