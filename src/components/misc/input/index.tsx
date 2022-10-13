import React from "react";

const Input = React.forwardRef<HTMLInputElement, InputComponentProps>(
  (
    {
      type = "text",
      label,
      placeholder,
      onChange,
      onFocus,
      value,
      id,
      name,
      error,
      onBlur,
    },
    ref
  ) => {
    return (
      <div className="input">
        <label htmlFor={id} className="form-label text-start w-100 text-light">
          {label}
        </label>
        <input
          ref={ref}
          type={type}
          className={`form-control bg-dark text-light ${
            error ? "is-invalid" : ""
          }`}
          id={id}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
        />
        {error && <div className="invalid-feedback text-start">{error}</div>}
      </div>
    );
  }
);

export default Input;
