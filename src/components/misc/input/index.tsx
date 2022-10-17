import React from "react";
import c from "classnames";
import "./index.scss";

const Input = React.forwardRef<HTMLInputElement, InputComponentProps>(
  (
    {
      extraClassNames,
      checked,
      readOnly,
      type = "text",
      label,
      placeholder,
      value,
      id,
      name,
      error,
      onChange,
      onFocus,
      onBlur,
      onClick,
    },
    ref
  ): JSX.Element => {
    const classNames = c(
      "form-control",
      `form-${type}`,
      "bg-dark",
      "text-light",
      error && "border-danger",
      extraClassNames
    );

    return (
      <div className={`input ${type === "checkbox" ? "form-check" : ""}`}>
        {label && (
          <label
            htmlFor={id}
            className={`${
              type === "checkbox" ? " d-inline ps-2 pe-3" : "form-label w-100"
            } text-start text-light`}
          >
            {label}
          </label>
        )}
        <input
          data-testid={`input-${type}-${name}`}
          checked={checked}
          readOnly={readOnly}
          ref={ref}
          type={type}
          className={classNames}
          id={id}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          onClick={onClick}
        />
        {error && (
          <div className="text-danger text-start mt-1">
            <small>{error}</small>
          </div>
        )}
      </div>
    );
  }
);

export default Input;
