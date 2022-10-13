import React from "react";
import c from "classnames";

const Button = ({
  action,
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
    <button onClick={action} disabled={disabled} className={classNames}>
      {children}
    </button>
  );
};

export default Button;
