import React from "react";
import c from "classnames";

const Button = ({
  action,
  extraClassNames,
  btnType = "primary",
  size,
  children,
  outline,
  disabled,
}: ButtonComponentProps): JSX.Element => {
  const classNames = c(
    "btn",
    `btn btn${outline ? "-outline" : ""}-${btnType}`,
    `btn-${size}`,
    extraClassNames
  );

  return (
    <button onClick={action} disabled={disabled} className={classNames}>
      {children}
    </button>
  );
};

export default Button;
