import c from "classnames";
import "./index.scss";

const Button = ({
  id,
  action,
  extraClassNames,
  btnType = "primary",
  children,
  disabled,
}: ButtonComponentProps): JSX.Element => {
  const classNames = c("btn", `btn-${btnType}`, extraClassNames);

  return (
    <button
      id={id}
      data-testid={`test-${id}`}
      onClick={action}
      disabled={disabled}
      className={classNames}
    >
      {children}
    </button>
  );
};

export default Button;
