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
      <span className="btn__icon">
        <span className="btn__icon___info"></span>
      </span>
      {children}
    </button>
  );
};

export default Button;
