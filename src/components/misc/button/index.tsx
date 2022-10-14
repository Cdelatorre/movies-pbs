import React from "react";
import c from "classnames";
import "./index.scss";

const Button = ({
  action,
  extraClassNames,
  btnType = "primary",
  children,
  disabled,
}: ButtonComponentProps): JSX.Element => {
  const classNames = c("btn", `btn btn-${btnType}`, extraClassNames);

  return (
    <button onClick={action} disabled={disabled} className={classNames}>
      {children}
    </button>
  );
};

export default Button;
