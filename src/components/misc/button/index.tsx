import React from "react";
import c from "classnames";

const Button = ({
  onClick,
  btnType = "primary",
  size,
  children,
  outline,
  disabled,
}: ButtonComponentProps) => {
  const classNames = c(
    "btn",
    `btn btn${outline ? "-outline" : ""}-${btnType}`,
    `btn-${size}`
  );

  return (
    <button disabled={disabled} className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
